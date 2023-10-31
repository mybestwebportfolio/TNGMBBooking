"use client"

import { LiaEdit } from "react-icons/lia"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useState } from "react"
import { Track } from "@/types"
import DeleteTrackData from "./DeleteTrackData"
import FormUpdateTrackData from "./FormUpdateTrackData"

interface TrackDataProps {
    trackData: Track
}

const Actions = ({ trackData }: TrackDataProps) => {
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
                    <FormUpdateTrackData trackData={trackData} handleOpen={handleOpenUpdate} setIsOpen={setIsOpenUpdate} />
                </div>
            </div>
            <div>
                <button onClick={handleOpenDelete} className="flex items-center gap-x-2 bg-red-800 rounded-md p-2 text-white">
                    Delete <RiDeleteBin6Line size={20} className="text-white" />
                </button>
                <div className={`${isOpenDelete ? "modal modal-open" : "modal"}`}>
                    <DeleteTrackData trackData={trackData} handleOpen={handleOpenDelete} setIsOpen={setIsOpenDelete} />
                </div>
            </div>
        </div>
    )
}

export default Actions