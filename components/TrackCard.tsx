"use client"

import useLoadImage from "@/hooks/useLoadImage"
import { Track } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { BsArrowUpRight } from "react-icons/bs"

interface TrackCardProps {
    track: Track
}

const TrackCard = ({ track }: TrackCardProps) => {
    const imagePath = useLoadImage(track)
    return (
        <Link href={`/track/${track.id}`}>
            <div className="w-full h-72 flex flex-col bg-white rounded-xl shadow-xl">
                <div className="relative w-full h-56 aspect-square">
                    <Image
                        src={imagePath || ""}
                        alt="Jalur pendakian"
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>
                <div className="w-full flex-1 flex justify-between items-center px-3">
                    <div className="flex flex-col justify-center px-3">
                        <h2 className="text-neutral-700 text-sm">Hiking Trail</h2>
                        <h1 className="text-black text-lg">{track.track_name}</h1>
                    </div>
                    <BsArrowUpRight className="text-blue-700" size={24} />
                </div>
            </div>
        </Link>
    )
}

export default TrackCard