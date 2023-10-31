"use client"

import convertDateCreatedAt from "@/hooks/convertDateCreatedAt"
import useLoadImage from "@/hooks/useLoadImage"
import useLoadImageNews from "@/hooks/useLoadImageNews"
import { News } from "@/types"
import Image from "next/image"
import Link from "next/link"

interface NewsContentProps {
    data: News
}

const NewsContent = ({ data }: NewsContentProps) => {
    const newFormatDate = convertDateCreatedAt(data.created_at)
    const imagePath = useLoadImageNews(data)
    return (
        <Link href={`/news/${data.id}`} className="flex flex-col gap-y-1">
            <div className="relative w-full h-60">
                <Image
                    src={imagePath || ""}
                    alt="News image"
                    fill
                    className="object-cover rounded-md"
                />
            </div>
            <h1 className="text-neutral-900/90 text-xl font-semibold mt-2 ml-2">{data.title}</h1>
            <p className="text-neutral-500 text-base ml-2">{newFormatDate}</p>
        </Link>
    )
}

export default NewsContent