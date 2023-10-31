"use client"

import convertDateCreatedAt from "@/hooks/convertDateCreatedAt"
import { TestimoniData } from "@/types"
import Image from "next/image"
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs"

interface TestimoniContentProps {
    testimoni: TestimoniData
    handleLeft: () => void
    handleRight: () => void
}

const TestimoniContent = ({ testimoni, handleLeft, handleRight }: TestimoniContentProps) => {
    const newFormatDate = convertDateCreatedAt(testimoni.created_at)
    return (
        <div className="w-full flex flex-col gap-y-3 items-center carousel-item">
            <h2 className="text-neutral-900/70 text-lg font-semibold">Testimonials</h2>
            <p className="text-2xl text-neutral-900/95 text-center">{`"${testimoni.comment}."`}</p>
            <div className="w-full flex justify-between items-center px-6">
                <div className="flex items-center gap-x-3">
                    <div className="avatar">
                        <div className="w-16">
                            <Image
                                src="/images/wekas.jpg"
                                alt="Avatar"
                                fill
                                className="object-cover rounded-full"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <h1 className="text-black text-lg">{testimoni.name}</h1>
                        <p className="text-sm text-neutral-500 font-semibold">{newFormatDate}</p>
                    </div>
                </div>

                <div className="flex items-center gap-x-3">
                    <BsArrowLeftCircle size={34} className="text-blue-700 cursor-pointer" onClick={handleLeft} />
                    <BsArrowRightCircle size={34} className="text-blue-700 cursor-pointer" onClick={handleRight} />
                </div>
            </div>
        </div>
    )
}

export default TestimoniContent