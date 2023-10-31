"use client"

import { TbBrandBooking } from "react-icons/tb"
import { GiHiking } from "react-icons/gi"
import { GoCommentDiscussion } from "react-icons/go"
import { FaRegNewspaper } from "react-icons/fa"
import { useMemo } from "react"
import { usePathname } from "next/navigation"
import SidebarItem from "./SidebarItem"

const SidebarAdmin = () => {
    const pathname = usePathname()
    const sidebarLinks = useMemo(() => ([
        {
            icon: TbBrandBooking,
            label: "Booking Data",
            route: "/admin",
            active: pathname === "/admin"
        },
        {
            icon: GiHiking,
            label: "Track Data",
            route: "/admin/track",
            active: pathname === "/admin/track"
        },
        {
            icon: GoCommentDiscussion,
            label: "Testimony Data",
            route: "/admin/testimony",
            active: pathname === "/admin/testimony"
        },
        {
            icon: FaRegNewspaper,
            label: "News Data",
            route: "/admin/news",
            active: pathname === "/admin/news"
        }
    ]), [pathname])
    return (
        <div className="flex flex-col gap-y-6 w-[300px] h-[calc(100vh-80px)] bg-white overflow-y-auto py-3 px-4 max-lg:hidden">
            {sidebarLinks.map((link) => (
                <SidebarItem key={link.label} {...link} />
            ))}
        </div>
    )
}

export default SidebarAdmin