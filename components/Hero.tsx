"use client"

import { useUser } from "@/hooks/useUser"
import Image from "next/image"
import { redirect, useRouter } from "next/navigation"

import Button from "./Button"

const Hero = () => {
    const { user } = useUser()
    const router = useRouter()

    const handleBooking = () => {
        if(!user){
            router.push("/signin")
            return
        }
        router.push("/booking")
    }
    return (
        <div className="h-screen w-full">
            <div className="h-[80vh] w-full flex flex-row items-center px-14 max-lg:h-screen max-lg:flex-col max-lg:gap-y-6 max-lg:justify-center">
                <div className="lg:flex-1 flex flex-col gap-y-8 max-lg:h-fit">
                    <h1 className="text-5xl text-black font-bold">{`Let's Explore`} <span className="text-blue-800">Wonderful</span> of Mount Merbabu</h1>
                    <p className="text-sm text-neutral-600">This dormant stralovolcano is a popular climb and is characterized by its 2 peaks. With natural beauty that is truly pleasing to the eye, are you ready to explore Mount Merbabu ?</p>
                    <Button onClick={() => handleBooking()} className="bg-blue-800 text-white w-fit">
                        Booking Now
                    </Button>
                </div>
                <div className="lg:flex-1 flex flex-col items-center">
                    <div className="relative w-96 max-lg:w-72 aspect-square">
                        <Image 
                            src="/images/pendaki.jpg"
                            alt="Pendaki"
                            fill
                            className="object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full h-[20vh] bg-[url('/images/background.jpg')] bg-no-repeat bg-right bg-cover" />
        </div>
    )
}

export default Hero