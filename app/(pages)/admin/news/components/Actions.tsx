"use client"

import { LiaEdit } from "react-icons/lia"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useState } from "react"
import { News } from "@/types"
import DeleteNewsData from "./DeleteNewsData"
import FormUpdateNewsData from "./FormUpdateNewsData"

interface NewsDataProps {
    newsData: News
}

const Actions = ({ newsData }: NewsDataProps) => {
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
                    <FormUpdateNewsData newsData={newsData} handleOpen={handleOpenUpdate} setIsOpen={setIsOpenUpdate} />
                </div>
            </div>
            <div>
                <button onClick={handleOpenDelete} className="flex items-center gap-x-2 bg-red-800 rounded-md p-2 text-white">
                    Delete <RiDeleteBin6Line size={20} className="text-white" />
                </button>
                <div className={`${isOpenDelete ? "modal modal-open" : "modal"}`}>
                    <DeleteNewsData newsData={newsData} handleOpen={handleOpenDelete} setIsOpen={setIsOpenDelete} />
                </div>
            </div>
        </div>
    )
}

export default Actions