import Image from "next/image"
import { TbBrandBooking } from "react-icons/tb"
import { GiHiking } from "react-icons/gi"
import { GoCommentDiscussion } from "react-icons/go"
import { FaRegNewspaper } from "react-icons/fa"

const NavbarAdmin = () => {
    return (
        <nav className="w-full h-20 bg-white flex items-center justify-between px-12 sticky top-0">
            <h1 className="text-black text-xl max-md:hidden">Hello, Admin</h1>

            <div className="flex items-center gap-x-7 md:hidden">
                <TbBrandBooking size={24} className="text-neutral-600" />
                <GiHiking size={24} className="text-neutral-600" />
                <GoCommentDiscussion size={24} className="text-neutral-600" />
                <FaRegNewspaper size={24} className="text-neutral-600" />
            </div>

            <div className="flex items-center gap-x-3">
                <h1 className="text-neutral-700 text-lg">TNGMB Admin</h1>
                <div className="avatar">
                    <div className="relative w-12">
                        <Image
                            src="/images/pendaki.jpg"
                            alt="Avatar"
                            fill
                            className="object-cover rounded-full"
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarAdmin