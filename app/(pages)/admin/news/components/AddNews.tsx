"use client"

import { useState } from "react"
import AddNewsForm from "./AddNewsForm"

const AddNews = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <button onClick={handleOpen} className="btn btn-active btn-accent">Add News</button>
            <div className={`${isOpen ? "modal modal-open" : "modal"}`}>
                <AddNewsForm handleOpen={handleOpen} setIsOpen={setIsOpen} />
            </div>
        </div>
    )
}

export default AddNews