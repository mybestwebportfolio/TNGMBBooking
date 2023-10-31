"use client"

import { Track } from "@/types"
import { ColumnDef } from "@tanstack/react-table"
import Actions from "./components/Actions"


const columns: ColumnDef<Track>[] = [
    {
        accessorKey: "track_name",
        header: "Nama Jalur",
    },
    {
        accessorKey: "image_path",
        header: "Image Path",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "actions",
        header: () => <div className="text-left">Actions</div>,
        cell: ({ row }) => {
            const trackData = row.original
            return <Actions trackData={trackData} />
        },
    },
]

export { columns }