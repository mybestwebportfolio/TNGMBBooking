"use client"

import useLoadImageNews from "@/hooks/useLoadImageNews"
import { News } from "@/types"
import Image from "next/image"
import Link from "next/link"

interface NewsContentProps {
    news: News
}

const NewsContent = ({ news }: NewsContentProps) => {
    const imagePath = useLoadImageNews(news)
    return (
        <div className="max-w-7xl w-full mx-auto py-4 px-3 flex items-center gap-x-20">
            <div className="flex-1 relative w-full aspect-square">
                <Image
                    src={imagePath || ""}
                    alt={news.title}
                    fill
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex-1 flex flex-col gap-y-2 items-start">
                <h2 className="text-lg text-neutral-700/70 font-semibold">News</h2>
                <h1 className="text-3xl text-black font-semibold">{news.title}</h1>
                <p className="text-base text-neutral-400">{news.description}</p>
                <Link href="/" className="px-5 py-2 text-base text-blue-800 border border-blue-800 bg-transparent rounded-full mt-4">
                    Back
                </Link>
            </div>
        </div>
    )
}

export default NewsContent