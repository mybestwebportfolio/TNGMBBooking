import { Track } from '@/types'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

const useLoadImage = (track: Track) => {
  const supabase = useSupabaseClient()

  if (!track) {
    return null
  }

  const { data: imageData } = supabase.storage
    .from('trackimages')
    .getPublicUrl(track.image_path)
  return imageData.publicUrl
}

export default useLoadImage
