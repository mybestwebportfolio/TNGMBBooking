import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../../globals.css'

import SupabaseProvider from '@/provider/supabase-provider'
import UserProvider from '@/provider/UserProvider'
import NavbarAdmin from '@/components/admin/NavbarAdmin'
import SidebarAdmin from '@/components/admin/SidebarAdmin'
import { Toaster } from 'react-hot-toast'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const font = Poppins({ subsets: ['latin'], weight: ["500", "700", "800"] })

export const revalidate = 0

export const metadata: Metadata = {
  title: 'TNGMB | Admin Page',
  description: 'Booking online website for hiking mount merbabu',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient({
    cookies: cookies
  })

  const { data: userSession } = await supabase.auth.getSession()

  if (!userSession.session) {
    return redirect("/")
  }

  const { data } = await supabase.from("user").select("*").single()

  if (data.role !== "admin") {
    return redirect("/")
  }
  return (
    <html lang="en">
      <body className={`${font.className} bg-zinc-400`}>
        <Toaster
          position='top-center'
          toastOptions={{
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
        <SupabaseProvider>
          <UserProvider>
            <NavbarAdmin />
            <div className='flex gap-x-6'>
              <SidebarAdmin />
              <div className='flex-1 w-full'>
                {children}
              </div>
            </div>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
