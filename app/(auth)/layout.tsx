import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../globals.css'

import SupabaseProvider from '@/provider/supabase-provider'
import UserProvider from '@/provider/UserProvider'
import { Toaster } from 'react-hot-toast'

const font = Poppins({ subsets: ['latin'], weight: ["500", "700", "800"] })

export const metadata: Metadata = {
  title: 'TNGMB | Authentication Page',
  description: 'Booking online website for hiking mount merbabu',
}

export default function RootLayout({
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
            {children}
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
