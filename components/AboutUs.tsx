"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"
import { SlLocationPin } from "react-icons/sl"
import { WiSunset } from "react-icons/wi"
import { BiMapPin, BiTrip } from "react-icons/bi"
import AboutItem from "./AboutItem"

const AboutUs = () => {
    const aboutItem = useMemo(() => ([
        {
            icon: SlLocationPin,
            title: "Location",
            description: "Administratively this mountain is in the Magelang Regency on the western slopes and Boyolali Regency on the eastern and southern slopes, Central Java Province."
        },
        {
            icon: WiSunset,
            title: "Cultural Significance",
            description: "Mount Merbabu has cultural significance for the local Javanese people. This mountain is often associated with myths and legends."
        },
        {
            icon: BiMapPin,
            title: "Characteristics",
            description: "Merbabu is characterized by its cone-shaped peak and lush, green vegetation. The mountain features a variety of landscapes, including dense forests, and meadows."
        },
        {
            icon: BiTrip,
            title: "Elevation",
            description: "The summit of Mount Merbabu stands at an elevation of approximately 3,145 meters (10,318 feet) above sea level, making it one of the prominent peaks in Java."
        }
    ]), [])
    return (
        <div className="w-full h-fit px-14 py-14 flex flex-col gap-y-8">
            <div className="flex flex-row items-center max-md:flex-col max-md:gap-y-10">
                <div className="flex-1">
                    <div className="flex flex-col gap-y-4 max-w-lg mx-auto">
                        <h2 className="text-neutral-700/90 text-lg font-semibold">About us</h2>
                        <h1 className="text-black text-6xl font-semibold">Mount Merbabu National Park</h1>
                        <p className="text-neutral-800/80 text-sm">Gunung Merbabu is a dormant stratovolcano located in Central Java, Indonesia. It is part of the larger volcanic complex in the region.</p>
                        <Link href="/" className="w-fit px-5 py-2 text-base text-blue-800 border border-blue-800 bg-transparent rounded-full">
                            Learn More
                        </Link>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="relative w-96 h-64 mx-auto">
                        <Image
                            src="/images/bg-merbabu.jpg"
                            alt="About Us"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl w-full h-fit mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-10">
                {aboutItem.map((item) => (
                    <AboutItem key={item.title} {...item} />
                ))}
            </div>
        </div>
    )
}

export default AboutUs