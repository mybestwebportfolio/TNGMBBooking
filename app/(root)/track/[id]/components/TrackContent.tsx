"use client"

import useLoadImage from "@/hooks/useLoadImage"
import { Track } from "@/types"
import Image from "next/image"
import Link from "next/link"

interface TrackContentProps {
    trackData: Track
}

const TrackContent = ({ trackData }: TrackContentProps) => {
    const imagePath = useLoadImage(trackData)
    console.log(imagePath)
    return (
        <div className="max-w-7xl w-full mx-auto py-4 px-3 flex items-center gap-x-20">
            <div className="flex-1 relative w-full aspect-square">
                <Image
                    src={imagePath || ""}
                    alt={trackData.track_name}
                    fill
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex-1 flex flex-col gap-y-2 items-start">
                <h2 className="text-lg text-neutral-700/70 font-semibold">Hiking Trail</h2>
                <h1 className="text-3xl text-black font-semibold">{trackData.track_name}</h1>
                <p className="text-base text-neutral-400">{trackData.description}</p>
                <Link href="/booking" className="px-5 py-2 text-base text-blue-800 border border-blue-800 bg-transparent rounded-full mt-4">
                    Booking Now
                </Link>
            </div>
        </div>
    )
}

export default TrackContent