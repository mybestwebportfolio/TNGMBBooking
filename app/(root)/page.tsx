import getNews from "@/actions/getNews";
import getTestimonials from "@/actions/getTestimonials";
import getTrackData from "@/actions/getTrackData";
import AboutUs from "@/components/AboutUs";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Testimoni from "@/components/Testimoni";
import Track from "@/components/Track";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const revalidate = 0

export default async function Home() {
    const supabase = createServerComponentClient({
        cookies: cookies
    })
    const { trackOne, trackTwo } = await getTrackData()
    const testimoniData = await getTestimonials()
    const { limitData, fullData } = await getNews()

    const { data: sessionData } = await supabase.auth.getSession()
    return (
        <div className="w-full h-full">
            <Hero />
            <Track trackOne={trackOne} trackTwo={trackTwo} />
            <Testimoni testimoniData={testimoniData} />
            <AboutUs />
            <News limitData={limitData} fullData={fullData} />
            <Explore sessionData={sessionData.session} />
        </div>
    )
}
