import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const getNews = async () => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  })

  const { data: limitData } = await supabase.from('news').select('*').limit(2)
  const { data: fullData } = await supabase.from('news').select('*')

  return ({ limitData, fullData } as any) || []
}

export default getNews
