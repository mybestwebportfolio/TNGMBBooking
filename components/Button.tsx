"use client"

import { twMerge } from "tailwind-merge"

interface ButtonProps {
    children: React.ReactNode
    className?: string
    onClick: () => void
}

const Button = ({children, className, onClick}: ButtonProps) => {
    return (
        <button onClick={onClick} className={twMerge(`px-5 py-2 text-base text-blue-800 border border-blue-800 bg-transparent rounded-full`, className)}>
            {children}
        </button>
    )
}

export default Button