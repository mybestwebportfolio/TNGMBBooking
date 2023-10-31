import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const getTrackDataById = async (id: string) => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  })

  const { data } = await supabase
    .from('track_data')
    .select('*')
    .eq('id', id)
    .single()

  return (data as any) || []
}

export default getTrackDataById
