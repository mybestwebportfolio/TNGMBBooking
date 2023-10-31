"use client"

import { TestimoniData } from "@/types"
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { useRouter } from "next/navigation"
import { Dispatch, SetStateAction } from "react"
import { toast } from "react-hot-toast"

interface DeleteTestimoniDataProps {
    handleOpen: () => void,
    setIsOpen: Dispatch<SetStateAction<boolean>>
    testimoniData: TestimoniData
}

const DeleteTestimoniData = ({ testimoniData, handleOpen, setIsOpen }: DeleteTestimoniDataProps) => {
    const supabase = useSupabaseClient()
    const router = useRouter()
    const handleDelete = async () => {
        const { error } = await supabase.from("testimonials").delete().eq("id", testimoniData.id)

        if (error) {
            return toast.error("Failed to delete")
        }

        setIsOpen(false)
        toast.success("Successfully delete!")
        router.refresh()
    }
    return (
        <div className="modal-box bg-white flex items-center justify-between">
            <h1 className="text-neutral-500 text-base">Are you sure to delete this ?</h1>
            <div className="modal-action flex items-center gap-x-2">
                <button type="button" className="btn btn-primary" onClick={handleDelete}>Delete</button>
                <button type="button" className="btn" onClick={() => handleOpen()}>Close</button>
            </div>
        </div>
    )
}

export default DeleteTestimoniData