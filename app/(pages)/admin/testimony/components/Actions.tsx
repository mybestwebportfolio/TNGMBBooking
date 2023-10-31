"use client"

import { LiaEdit } from "react-icons/lia"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useState } from "react"
import { TestimoniData } from "@/types"
import DeleteTestimoniData from "./DeleteTestimoniData"
// import DeleteTrackData from "./DeleteTrackData"

interface BookDataProps {
    testimoniData: TestimoniData
}

const Actions = ({ testimoniData }: BookDataProps) => {
    const [isOpenDelete, setIsOpenDelete] = useState(false)

    const handleOpenDelete = () => {
        setIsOpenDelete(!isOpenDelete)
    }
    return (
        <div className="flex gap-x-5 items-center">
            <div>
                <button onClick={handleOpenDelete} className="flex items-center gap-x-2 bg-red-800 rounded-md p-2 text-white">
                    Delete <RiDeleteBin6Line size={20} className="text-white" />
                </button>
                <div className={`${isOpenDelete ? "modal modal-open" : "modal"}`}>
                    <DeleteTestimoniData testimoniData={testimoniData} handleOpen={handleOpenDelete} setIsOpen={setIsOpenDelete} />
                </div>
            </div>
        </div>
    )
}

export default Actions