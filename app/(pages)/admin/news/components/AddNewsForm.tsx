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
import { Label } from "@/components/ui/label"

import uniqid from "uniqid"

import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import { Dispatch, SetStateAction, useState } from "react"
import { Textarea } from "@/components/ui/textarea"

interface FormUpdateBookDataProps {
    handleOpen: () => void
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const AddNewsForm = ({ handleOpen, setIsOpen }: FormUpdateBookDataProps) => {
    // Images
    const MAX_IMAGE_SIZE = 5242880; // 5 MB
    const ALLOWED_IMAGE_TYPES = [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/jpg",
    ];

    const formSchema = z.object({
        title: z.string().min(2, {
            message: "Judul berita must be at least 2 characters.",
        }),
        image: z
            .custom<FileList>((val) => val instanceof FileList, "Required")
            .refine((files) => files.length > 0, `Required`)
            .refine((files) => files.length <= 5, `Maximum of 5 images are allowed.`)
            .refine(
                (files) =>
                    Array.from(files).every((file) => file.size <= MAX_IMAGE_SIZE),
                `Each file size should be less than 5 MB.`
            )
            .refine(
                (files) =>
                    Array.from(files).every((file) =>
                        ALLOWED_IMAGE_TYPES.includes(file.type)
                    ),
                "Only these types are allowed .jpg, .jpeg, .png and .webp"
            ),
        description: z.string().min(2, {
            message: "Description must be at least 2 characters.",
        }),
    })
    const [isLoading, setIsLoading] = useState(false)
    const supabase = useSupabaseClient()
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setIsLoading(true)

            const imageFile = values.image?.[0]
            if (!imageFile) {
                return toast.error("Missing fields!")
            }

            const uniqueID = uniqid()

            // Upload image to bucket
            const { data: imageData, error: imageError } = await supabase.storage.from("newsimages").upload(`image-${values.title}-${uniqueID}`, imageFile, {
                cacheControl: "3600",
                upsert: false,
            })
            if (imageError) {
                setIsLoading(false)
                return toast.error("Failed to upload image")
            }

            // insert data
            const { error: supabaseError } = await supabase.from("news").insert({
                title: values.title,
                image_path: imageData.path,
                description: values.description
            })

            if (supabaseError) {
                setIsLoading(false)
                return toast.error(supabaseError.message)
            }

            router.refresh()
            setIsLoading(false)
            toast.success("Upload news successfully")
            form.reset()
            setIsOpen(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        } finally {
            setIsLoading(false)
        }

    }
    return (
        <div className="modal-box bg-white">
            <h1 className="text-lg text-neutral-500 mb-5">{`Tambah jalur pendakian`}</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="text-neutral-500">Judul Berita</FormLabel>
                                <FormControl>
                                    <Input  {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field: { onChange }, ...field }) => (
                            <FormItem className="grid w-full max-w-xs items-center gap-1.5 text-neutral-500">
                                <Label htmlFor="image">Image</Label>
                                <FormControl>
                                    <Input id="image" type="file"
                                        accept="image/*"
                                        className="cursor-pointer"
                                        {...field}
                                        onChange={(event) => {
                                            // Triggered when user uploaded a new file
                                            // FileList is immutable, so we need to create a new one
                                            const dataTransfer = new DataTransfer();

                                            // Add newly uploaded images
                                            Array.from(event.target.files!).forEach((image) =>
                                                dataTransfer.items.add(image)
                                            );

                                            // Validate and update uploaded file
                                            const newFiles = dataTransfer.files;
                                            onChange(newFiles);
                                        }}
                                    />
                                </FormControl>
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
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default AddNewsForm