"use client"

import { BsArrowRight } from "react-icons/bs"
import { toast } from "react-hot-toast"
import { useState } from "react"
import { Session, useSupabaseClient } from "@supabase/auth-helpers-react"
import { useUser } from "@/hooks/useUser"
import { useRouter } from "next/navigation"

interface ExploreFormProps {
    sessionData: Session | null
}

const ExploreForm = ({ sessionData }: ExploreFormProps) => {
    const supabase = useSupabaseClient()
    const [testimoni, setTestimoni] = useState("")
    const { user } = useUser()
    const router = useRouter()
    const handleClick = async () => {
        if (!sessionData) {
            return router.push('/signin')
        }

        const { error } = await supabase.from("testimonials").insert({
            comment: testimoni,
            user_id: user?.id
        })

        if (error) {
            return toast.error("Failed to add testimony")
        }

        router.refresh()
        setTestimoni("")
        toast.success("Successfully added testimony")
    }
    return (
        <div className="flex flex-col gap-y-4 w-96 max-md:w-full">
            <div>
                <h1 className="text-lg text-white">Drop your testimony here</h1>
            </div>
            <form className="w-full relative">
                <BsArrowRight size={24} className="absolute top-1 right-2 cursor-pointer" onClick={handleClick} />
                <input type="text" value={testimoni} onChange={(e) => setTestimoni(e.target.value)} className="w-full text-sm text-white border-b px-3 pr-10 py-2 bg-transparent focus:outline-none placeholder:text-neutral-500 block" placeholder="Your testimony here" />
            </form>
        </div>
    )
}

export default ExploreForm