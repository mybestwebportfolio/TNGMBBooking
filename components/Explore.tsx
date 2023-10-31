import Link from "next/link"
import ExploreForm from "./ExploreForm"
import { BiPhoneCall } from "react-icons/bi"
import { GoQuestion } from "react-icons/go"
import { TfiEmail } from "react-icons/tfi"
import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai"
import { FiFacebook, FiTwitter } from "react-icons/fi"
import { Session } from "@supabase/supabase-js"

interface ExploreProps {
    sessionData: Session | null
}

const Explore = ({ sessionData }: ExploreProps) => {
    return (
        <div className="w-full h-fit px-14 py-14 bg-blue-950">
            <div className="max-w-xl">
                <h1 className="text-5xl text-white font-semibold">Are You Ready to Explore The Mount Merbabu ?</h1>
            </div>
            <div className="mt-8">
                <Link href="/booking" className="px-5 py-3 text-base text-blue-950 bg-white rounded-full">
                    Booking Now
                </Link>
            </div>

            <div className="mt-24 flex flex-row items-center justify-between max-md:flex-col max-md:gap-y-8">
                <div className="flex flex-col gap-y-4 max-w-xl">
                    <h1 className="text-2xl text-white font-semibold">TNGMB</h1>
                    <p className="text-lg text-neutral-400">JL. MERBABU BLOK - NO. 136 RT:000 RW:000 Kel. WINONG Kec. BOYOLALI, Boyolali, Jawa Tengah, 57136</p>
                </div>
                <ExploreForm sessionData={sessionData} />
            </div>

            <div className="w-full flex flex-row items-center justify-between mt-16 max-md:flex-col max-md:gap-y-8">
                <div className="w-full flex items-center gap-x-8 max-md:flex-wrap max-md:gap-y-4">
                    <div className="flex items-center gap-x-2">
                        <BiPhoneCall size={26} className="text-neutral-400" />
                        <p className="text-sm text-neutral-400">(0276) 3293341</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <GoQuestion size={26} className="text-neutral-400" />
                        <p className="text-sm text-neutral-400">Fax. (0276) 3293342</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <TfiEmail size={26} className="text-neutral-400" />
                        <p className="text-sm text-neutral-400">info@tngunungmerbabu.org</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-6 w-96 max-md:w-full">
                    <AiOutlineYoutube size={26} className="text-neutral-400" />
                    <AiOutlineInstagram size={26} className="text-neutral-400" />
                    <FiFacebook size={26} className="text-neutral-400" />
                    <FiTwitter size={26} className="text-neutral-400" />
                </div>
            </div>

            <div className="w-full mt-20">
                <p className="text-base text-center text-neutral-400">Copyright Ⓒ 2023 Mount Merbabu. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Explore