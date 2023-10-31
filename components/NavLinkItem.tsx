"use client"

import Link from "next/link"

import { twMerge } from "tailwind-merge"

interface NavLinkItemProps {
    label: string
    route: string
    active: boolean
}

const NavLinkItem = ({label, route, active}: NavLinkItemProps) => {
    return (
        <Link href={route} className={twMerge(`text-neutral-500 text-base truncate`, active && "text-blue-800")}>
            {label}
        </Link>    
    )
}

export default NavLinkItem