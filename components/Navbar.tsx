"use client"

import { useMemo, useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"

import { AiOutlineClose } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import NavLinkItem from "./NavLinkItem"
import Button from "./Button"

import { useUser } from "@/hooks/useUser"
import { toast } from "react-hot-toast"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true)
    const pathname = usePathname()
    const router = useRouter()
    const { user } = useUser()
    const supabase = createClientComponentClient()
    const navLink = useMemo(() => ([
        {
            label: "Home",
            route: "/",
            active: pathname === "/"
        },
        {
            label: "Tour",
            route: "/tour",
            active: pathname === "/tour"
        },
        {
            label: "Natural wealth",
            route: "/natural-wealth",
            active: pathname === "/natural-wealth"
        },
        {
            label: "About Us",
            route: "/about",
            active: pathname === "/about"
        },
    ]), [pathname])

    useEffect(() => {
        setIsOpen(false)
    }, [])

    const handleSignout = async () => {
        await supabase.auth.signOut()
        toast.success("Logged out!")
        router.refresh()
    }
    return (
        <nav className="relative z-10">
            <div className={`w-full h-16 py-2 px-14 max-md:px-5 fixed top-0 bg-white`}>
                <div className="flex justify-between items-center">
                    <Link href="/" className="md:text-neutral-500 text-lg font-semibold tracking-wider max-md:bg-gradient-to-r from-blue-800 to-neutral-500 bg-clip-text text-transparent">
                        TNGMB
                    </Link>

                    <div className="flex items-center justify-center flex-1 gap-x-6 ml-24 max-lg:ml-0 max-md:hidden">
                        {navLink.map((link) => (
                            <NavLinkItem key={link.label} {...link} />
                        ))}
                    </div>

                    <div className="w-56 max-lg:w-fit flex items-center justify-end gap-x-3 max-md:hidden">
                        {user ? (
                            <Button onClick={() => handleSignout()} className="border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition">
                                Sign out
                            </Button>
                        ) : (
                            <>
                                <Button onClick={() => router.push("/signup")} className="border-none text-neutral-500 p-0 hover:px-5 hover:py-2 hover:bg-blue-800 hover:text-white">
                                    Sign up
                                </Button>
                                <Button onClick={() => router.push("/signin")} className="hover:bg-blue-800 hover:text-white transition">
                                    Sign in
                                </Button>
                            </>
                        )}
                    </div>

                    <div className="flex md:hidden">
                        {isOpen ? (
                            <AiOutlineClose size={27} onClick={() => setIsOpen(false)} className="text-neutral-500" />
                        ) : (
                            <GiHamburgerMenu size={27} onClick={() => setIsOpen(true)} className="text-neutral-500" />
                        )}
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="absolute top-16 right-2 w-fit h-fit px-3 py-3 md:hidden">
                    <div className="flex flex-col gap-y-4">
                        <div className="w-full flex flex-col gap-y-3 items-end justify-center">
                            {navLink.map((link) => (
                                <NavLinkItem key={link.label} {...link} />
                            ))}
                        </div>
                        <div className="flex flex-col items-end gap-y-3">
                            {user ? (
                                <Button onClick={() => handleSignout} className="border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition">
                                    Sign out
                                </Button>
                            ) : (
                                <>
                                    <Button onClick={() => router.push("/signup")} className="border-none text-neutral-500 p-0 hover:px-5 hover:py-2 hover:bg-blue-800 hover:text-white">
                                        Sign up
                                    </Button>
                                    <Button onClick={() => router.push("/signin")} className="hover:bg-blue-800 hover:text-white transition">
                                        Sign in
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar