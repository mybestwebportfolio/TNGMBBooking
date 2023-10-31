"use client"

import { News } from "@/types"
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { useRouter } from "next/navigation"
import { Dispatch, SetStateAction } from "react"
import { toast } from "react-hot-toast"

interface DeleteNewsDataProps {
    handleOpen: () => void,
    setIsOpen: Dispatch<SetStateAction<boolean>>
    newsData: News
}

const DeleteNewsData = ({ newsData, handleOpen, setIsOpen }: DeleteNewsDataProps) => {
    const supabase = useSupabaseClient()
    const router = useRouter()
    const handleDelete = async () => {
        const { error } = await supabase.from("news").delete().eq("id", newsData.id)

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

export default DeleteNewsData