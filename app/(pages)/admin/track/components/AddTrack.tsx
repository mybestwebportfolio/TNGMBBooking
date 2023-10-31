"use client"

import { useState } from "react"
import AddTrackForm from "./AddTrackForm"

const AddTrack = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <button onClick={handleOpen} className="btn btn-active btn-accent">Add Track</button>
            <div className={`${isOpen ? "modal modal-open" : "modal"}`}>
                <AddTrackForm handleOpen={handleOpen} setIsOpen={setIsOpen} />
            </div>
        </div>
    )
}

export default AddTrack