import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const getBookingData = async () => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  })

  const { data } = await supabase.from('bookingdata').select('*')

  return (data as any) || []
}

export default getBookingData
