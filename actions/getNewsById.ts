import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const getNewsById = async (id: string) => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  })

  const { data } = await supabase.from('news').select('*').eq('id', id).single()

  return (data as any) || []
}

export default getNewsById
