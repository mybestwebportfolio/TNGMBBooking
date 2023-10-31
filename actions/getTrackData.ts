import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const getTrackData = async () => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  })

  const { data: trackOne } = await supabase
    .from('track_data')
    .select('*')
    .limit(2)
  const { data: trackTwo } = await supabase
    .from('track_data')
    .select('*')
    .range(2, 4)
  const { data: allTrack } = await supabase.from('track_data').select('*')

  return ({ trackOne, trackTwo, allTrack } as any) || []
}

export default getTrackData
