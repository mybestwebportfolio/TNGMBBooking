import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const getTestimonials = async () => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  })

  const { data } = await supabase.from('testimonials').select('*')

  return (data as any) || []
}

export default getTestimonials
