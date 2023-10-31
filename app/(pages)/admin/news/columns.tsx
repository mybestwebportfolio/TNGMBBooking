"use client"

import { News } from "@/types"
import { ColumnDef } from "@tanstack/react-table"
import Actions from "./components/Actions"


const columns: ColumnDef<News>[] = [
    {
        accessorKey: "title",
        header: "Judul Berita",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "image_path",
        header: "Image Path",
    },
    {
        accessorKey: "actions",
        header: () => <div className="text-left">Actions</div>,
        cell: ({ row }) => {
            const newsData = row.original
            return <Actions newsData={newsData} />
        },
    },
]

export { columns }