import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const getBookingDataById = async () => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  })

  const { data: userSession } = await supabase.auth.getSession()

  const { data } = await supabase
    .from('bookingdata')
    .select('*')
    .eq('user_id', userSession.session?.user.id)
    .single()

  return (data as any) || []
}

export default getBookingDataById
