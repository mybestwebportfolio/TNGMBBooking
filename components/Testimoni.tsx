"use client"

import { TestimoniData } from "@/types"
import { useState } from "react"
import TestimoniContent from "./TestimoniContent"

interface TestimoniProps {
    testimoniData: TestimoniData[]
}

const Testimoni = ({ testimoniData }: TestimoniProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleMoveLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleMoveRight = () => {
        if (currentIndex < testimoniData.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
    };
    return (
        <div className="w-full h-[50vh] py-24 grid place-content-center grid-cols-1 max-md:py-10 ">
            <div className="max-w-3xl h-fit mx-auto carousel">
                {testimoniData.map((testimoni) => (
                    <TestimoniContent key={testimoni.id} testimoni={testimoniData[currentIndex]} handleLeft={handleMoveLeft} handleRight={handleMoveRight} />
                ))}
            </div>
        </div>
    )
}

export default Testimoni