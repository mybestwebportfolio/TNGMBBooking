"use client"

import { News } from "@/types"
import { useState } from "react"
import Button from "./Button"
import NewsContent from "./NewsContent"

interface NewsProps {
    limitData: News[]
    fullData: News[]
}

const News = ({ limitData, fullData }: NewsProps) => {
    const [isMore, setIsMore] = useState(false)

    const handleClick = () => {
        setIsMore(!isMore)
    }
    return (
        <div className="w-full h-fit px-14 py-14">
            <div className="max-w-7xl w-full h-fit mx-auto">
                <h1 className="text-lg text-neutral-800/80 font-semibold mb-3">News</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
                    {isMore ? (
                        <>
                            {fullData.map((data) => (
                                <NewsContent key={data.id} data={data} />
                            ))}
                        </>
                    ) : (
                        <>
                            {limitData.map((data) => (
                                <NewsContent key={data.id} data={data} />
                            ))}
                        </>
                    )}
                </div>
                {isMore ? (
                    <Button onClick={handleClick} className="mt-6">
                        Show Less
                    </Button>
                ) : (
                    <Button onClick={handleClick} className="mt-6">
                        Read More
                    </Button>
                )}
            </div>
        </div>
    )
}

export default News