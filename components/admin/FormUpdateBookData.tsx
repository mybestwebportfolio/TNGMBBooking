"use client"

import { Booking } from "@/types"

"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import { Dispatch, SetStateAction } from "react"

interface FormUpdateBookDataProps {
    handleOpen: () => void
    setIsOpen: Dispatch<SetStateAction<boolean>>
    bookData: Booking
}

const formSchema = z.object({
    nama: z.string().min(2, {
        message: "Nama must be at least 2 characters.",
    }),
    jumlahPendaki: z.string().min(1, {
        message: "Jumlah Pendaki must be at least 1 characters.",
    }),
    status: z.string().min(2, {
        message: "Status must be at least 2 characters.",
    }),
})

const FormUpdateBookData = ({ handleOpen, bookData, setIsOpen }: FormUpdateBookDataProps) => {
    const supabase = useSupabaseClient()
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nama: bookData.nama_ketua,
            jumlahPendaki: bookData.jumlah_pendaki,
            status: bookData.status
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const { error } = await supabase.from("bookingdata").update({
            nama_ketua: values.nama,
            jumlah_pendaki: values.jumlahPendaki,
            status: values.status
        }).eq("id", bookData.id)

        if (error) {
            return toast.error("Failed to update")
        }

        setIsOpen(false)
        toast.success("Successfully update")
        router.refresh()

    }
    return (
        <div className="modal-box bg-white">
            <h1 className="text-lg text-neutral-500 mb-5">{`Update data pendaki : ${bookData.nama_ketua}`}</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="nama"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="text-neutral-500">Nama Ketua</FormLabel>
                                <FormControl>
                                    <Input  {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="jumlahPendaki"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="text-neutral-500">Jumlah Pendaki</FormLabel>
                                <FormControl>
                                    <Input  {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="text-neutral-500">Status</FormLabel>
                                <FormControl>
                                    <Input  {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="modal-action">
                        <button type="button" className="btn" onClick={() => handleOpen()}>Close</button>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default FormUpdateBookData