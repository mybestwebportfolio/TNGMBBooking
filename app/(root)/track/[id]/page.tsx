import getTrackDataById from "@/actions/getTrackDataById"
import Button from "@/components/Button"
import { Track } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import TrackContent from "./components/TrackContent"

const Page = async ({ params }: { params: { id: string } }) => {
    const supabase = createServerComponentClient({
        cookies: cookies
    })

    const { data: sessionData } = await supabase.auth.getSession()

    if (!sessionData.session) {
        return redirect("/signin")
    }

    const trackData: Track = await getTrackDataById(params.id)
    return (
        <div className="h-screen w-full flex items-center">
            <TrackContent trackData={trackData} />
        </div>
    )
}

export default Page