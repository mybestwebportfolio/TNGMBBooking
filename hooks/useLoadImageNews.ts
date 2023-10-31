import { News } from '@/types'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

const useLoadImageNews = (news: News) => {
  const supabase = useSupabaseClient()

  if (!news) {
    return null
  }

  const { data: imageData } = supabase.storage
    .from('newsimages')
    .getPublicUrl(news.image_path)
  return imageData.publicUrl
}

export default useLoadImageNews
