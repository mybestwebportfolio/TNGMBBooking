import { twMerge } from "tailwind-merge"
import { IconType } from "react-icons"
import Link from "next/link"

interface SidebarItemsProps {
    icon: IconType
    label: string
    route: string
    active: boolean
}

const SidebarItem = ({ icon: Icon, label, route, active }: SidebarItemsProps) => {
    return (
        <Link href={route} className={twMerge(`w-full flex items-center gap-x-2`, active && "py-2 px-4 bg-blue-500 rounded-md text-white")}>
            <Icon size={28} className={twMerge(`text-neutral-600`, active && "text-white")} />
            <p className={twMerge(`text-base text-neutral-600`, active && "text-white")}>{label}</p>
        </Link>
    )
}

export default SidebarItem