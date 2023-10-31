"use client"

import { TestimoniData, Track } from "@/types"

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
import { Textarea } from "@/components/ui/textarea"

interface FormUpdateTrackDataProps {
    handleOpen: () => void
    setIsOpen: Dispatch<SetStateAction<boolean>>
    trackData: Track
}

const formSchema = z.object({
    track_name: z.string().min(2, {
        message: "Nama track must be at least 2 characters.",
    }),
    description: z.string().min(2, {
        message: "Description must be at least 2 characters.",
    }),
})

const FormUpdateTrackData = ({ handleOpen, trackData, setIsOpen }: FormUpdateTrackDataProps) => {
    const supabase = useSupabaseClient()
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            track_name: trackData.track_name,
            description: trackData.description
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const { error } = await supabase.from("track_data").update({
            track_name: values.track_name,
            description: values.description
        }).eq("id", trackData.id)

        if (error) {
            return toast.error("Failed to update")
        }

        setIsOpen(false)
        toast.success("Successfully update")
        router.refresh()
    }
    return (
        <div className="modal-box bg-white">
            <h1 className="text-lg text-neutral-500 mb-5">{`Update track data : ${trackData.track_name}`}</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="track_name"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="text-neutral-500">Nama Track</FormLabel>
                                <FormControl>
                                    <Input  {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        className="resize-none"
                                        {...field}
                                    />
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

export default FormUpdateTrackData