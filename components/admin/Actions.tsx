"use client"

import FormUpdateBookData from "./FormUpdateBookData"
import { LiaEdit } from "react-icons/lia"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useState } from "react"
import { Booking } from "@/types"
import DeleteBookData from "./DeleteBookData"

interface BookDataProps {
    bookData: Booking
}

const Actions = ({ bookData }: BookDataProps) => {
    const [isOpenUpdate, setIsOpenUpdate] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false)
    const handleOpenUpdate = () => {
        setIsOpenUpdate(!isOpenUpdate)
    }

    const handleOpenDelete = () => {
        setIsOpenDelete(!isOpenDelete)
    }
    return (
        <div className="flex gap-x-5 items-center">
            <div>
                <button onClick={handleOpenUpdate} className="flex items-center gap-x-2 bg-purple-800 rounded-md p-2 text-white">
                    Update <LiaEdit size={20} className="text-white" />
                </button>
                <div className={`${isOpenUpdate ? "modal modal-open" : "modal"}`}>
                    <FormUpdateBookData handleOpen={handleOpenUpdate} bookData={bookData} setIsOpen={setIsOpenUpdate} />
                </div>
            </div>
            <div>
                <button onClick={handleOpenDelete} className="flex items-center gap-x-2 bg-red-800 rounded-md p-2 text-white">
                    Delete <RiDeleteBin6Line size={20} className="text-white" />
                </button>
                <div className={`${isOpenDelete ? "modal modal-open" : "modal"}`}>
                    <DeleteBookData handleOpen={handleOpenDelete} bookData={bookData} setIsOpen={setIsOpenDelete} />
                </div>
            </div>
        </div>
    )
}

export default Actions