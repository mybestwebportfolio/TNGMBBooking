"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Bars } from "react-loader-spinner"
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { useUser } from "@/hooks/useUser"

const BookingForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [lamaNginap, setLamaNginap] = useState("")
    const [jalurPendakian, setJalurPendakian] = useState("")
    const [ketua, setKetua] = useState("")
    const [nik, setNik] = useState("")
    const [email, setEmail] = useState("")
    const [telepon, setTelepon] = useState("")
    const [usia, setUsia] = useState("")
    const [jumlahPendaki, setJumlahPendaki] = useState("")

    const router = useRouter()
    const supabase = useSupabaseClient()
    const { user } = useUser()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            const { error } = await supabase.from("bookingdata").insert({
                lama_menginap: lamaNginap,
                jalur_pendakian: jalurPendakian,
                nama_ketua: ketua,
                nik_ketua: nik,
                email: email,
                no_telepon: telepon,
                usia: usia,
                jumlah_pendaki: jumlahPendaki,
                user_id: user?.id
            })

            if(error){
                setIsLoading(false)
                setError(true)
                console.log(error.message)
                return
            }

            setIsLoading(false)
            setLamaNginap("")
            setJalurPendakian("")
            setKetua("")
            setNik("")
            setEmail("")
            setTelepon("")
            setUsia("")
            setJumlahPendaki("")
            router.refresh()
        } catch (error: any) {
            console.log(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 max-md:pb-2 md:grid-cols-2 gap-4 px-3">
            <select className="select select-bordered w-full border border-neutral-400 p-2 rounded-xl focus:outline-none bg-transparent" value={lamaNginap} onChange={(e) => setLamaNginap(e.target.value)} required>
                <option disabled value="">Berapa lama anda menginap ?</option>
                <option value="2 Hari (Menginap 1 malam)">{`2 Hari (Menginap 1 malam)`}</option>
                <option value="3 Hari (Menginap 1 malam)">{`3 Hari (Menginap 2 malam)`}</option>
            </select>
            <select className="select select-bordered w-full border border-neutral-400 p-2 rounded-xl focus:outline-none bg-transparent" value={jalurPendakian} onChange={(e) => setJalurPendakian(e.target.value)} required>
                <option disabled value="">Pilih jalur pendakian anda</option>
                <option value="Selo">{`Selo`}</option>
                <option value="Wekas">{`Wekas`}</option>
                <option value="Suwanting">{`Suwanting`}</option>
                <option value="Thekelan">{`Thekelan`}</option>
                <option value="Cuntel">{`Cuntel`}</option>
            </select>
            <div className="form-control w-full flex flex-col gap-y-2">
                <label className="label pl-1">
                    <span className="label-text">Nama ketua rombongan ?</span>
                </label>
                <input type="text" value={ketua} onChange={(e) => setKetua(e.target.value)} placeholder="Nama ketua rombongan.." className="input input-bordered w-full p-2 border border-neutral-400 rounded-xl focus:outline-none bg-transparent" required/>
            </div>
            <div className="form-control w-full flex flex-col gap-y-2">
                <label className="label pl-1">
                    <span className="label-text">NIK ketua rombongan ?</span>
                </label>
                <input type="text" value={nik} onChange={(e) => setNik(e.target.value)} placeholder="NIK ketua rombongan.." className="input input-bordered w-full p-2 border border-neutral-400 rounded-xl focus:outline-none bg-transparent" required/>
            </div>
            <div className="form-control w-full flex flex-col gap-y-2">
                <label className="label pl-1">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email.." className="input input-bordered w-full p-2 border border-neutral-400 rounded-xl focus:outline-none bg-transparent" required />
            </div>
            <div className="form-control w-full flex flex-col gap-y-2">
                <label className="label pl-1">
                    <span className="label-text">No telepon</span>
                </label>
                <input type="text" value={telepon} onChange={(e) => setTelepon(e.target.value)} placeholder="No telepon.." className="input input-bordered w-full p-2 border border-neutral-400 rounded-xl focus:outline-none bg-transparent" required/>
            </div>
            <div className="form-control w-full flex flex-col gap-y-2">
                <label className="label pl-1">
                    <span className="label-text">Usia</span>
                </label>
                <input type="text" value={usia} onChange={(e) => setUsia(e.target.value)} placeholder="Usia.." className="input input-bordered w-full p-2 border border-neutral-400 rounded-xl focus:outline-none bg-transparent" required />
            </div>
            <div className="form-control w-full flex flex-col gap-y-2">
                <label className="label pl-1">
                    <span className="label-text">Jumlah pendaki</span>
                </label>
                <input type="text" value={jumlahPendaki} onChange={(e) => setJumlahPendaki(e.target.value)} placeholder="Jumlah pendaki.." className="input input-bordered w-full p-2 border border-neutral-400 rounded-xl focus:outline-none bg-transparent" required/>
            </div>
            <button type="submit" className="btn flex items-center justify-center gap-x-3 py-2 px-4 border-none bg-blue-800 text-white rounded-xl">
                Book 
                {isLoading && (
                    <Bars
                        height="20"
                        width="20"
                        color="#fff"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                )}
            </button>
            {error && (
                <div>
                    <h1 className="text-base text-red-700 font-semibold">Anda sudah booking, silahkan menunggu data anda disetujui..</h1>
                </div>
            )}
        </form>
    )
}

export default BookingForm