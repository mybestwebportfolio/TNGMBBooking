import Image from "next/image"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import { Booking } from "@/types"

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import BookingForm from "@/components/BookingForm"
import getBookingDataById from "@/actions/getBookingDataById"

export const revalidate = 0

const Page = async () => {
    const supabase = createServerComponentClient({
        cookies: cookies
    })

    const { data: userSession } = await supabase.auth.getSession()

    if(!userSession){
        return redirect("/")
    }

    const bookingData: Booking = await getBookingDataById()

    return (
        <div className="flex flex-col max-lg:gap-y-5">
            <div className="h-[85vh] max-lg:h-auto w-full flex flex-row items-center max-lg:flex-col max-lg:justify-center max-lg:gap-y-5 max-lg:mt-16 lg:pr-44">
                <div className="lg:flex-1 flex justify-center">
                    <div className="relative w-96 max-lg:w-72 aspect-square">
                            <Image 
                                src="/images/booking.jpg"
                                alt="Pendaki"
                                fill
                                className="object-cover rounded-2xl"
                            />
                        </div>
                </div>
                <div className="lg:flex-1 w-full">
                    <BookingForm />
                </div>
            </div>
            <div className="w-full h-[15vh] flex flex-col justify-start px-3 lg:px-10">
                <h1 className="text-2xl text-black font-semibold mb-3">Riwayat Booking</h1>
                <div className="overflow-x-auto">
                    <table className="table table-xs text-black">
                        <thead className="text-black">
                        <tr>
                            <th>Nama ketua</th> 
                            <th>Jalur pendakian</th> 
                            <th>Lama menginap</th> 
                            <th>No telepon</th> 
                            <th>Jumlah pendaki</th> 
                            <th>Status</th>
                        </tr>
                        </thead> 
                        <tbody>
                        <tr>
                            <td>{bookingData.nama_ketua}</td> 
                            <td>{bookingData.jalur_pendakian}</td> 
                            <td>{bookingData.lama_menginap}</td> 
                            <td>{bookingData.no_telepon}</td> 
                            <td>{bookingData.jumlah_pendaki}</td> 
                            <td>{bookingData.status === "Sedang diproses" ? <button className="px-4 py-2 rounded-lg bg-red-600 text-white" disabled>{bookingData.status}</button> : <button className="px-4 py-2 rounded-lg bg-green-700 text-white" disabled>{bookingData.status}</button>}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Page