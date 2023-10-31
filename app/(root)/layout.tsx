import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../globals.css'

import Navbar from '@/components/Navbar'
import SupabaseProvider from '@/provider/supabase-provider'
import UserProvider from '@/provider/UserProvider'
import { Toaster } from 'react-hot-toast'

const font = Poppins({ subsets: ['latin'], weight: ["500", "700", "800"] })

export const revalidate = 0

export const metadata: Metadata = {
  title: 'TNGMB | Booking Online',
  description: 'Booking online website for hiking mount merbabu',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
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
            <Navbar />
            {children}
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
