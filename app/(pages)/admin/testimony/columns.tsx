"use client"

import { TestimoniData } from "@/types"
import { ColumnDef } from "@tanstack/react-table"
import Actions from "./components/Actions"


const columns: ColumnDef<TestimoniData>[] = [
    {
        accessorKey: "name",
        header: "Nama",
    },
    {
        accessorKey: "comment",
        header: "Komentar",
    },
    {
        accessorKey: "actions",
        header: () => <div className="text-left">Actions</div>,
        cell: ({ row }) => {
            const testimoniData = row.original
            return <Actions testimoniData={testimoniData} />
        },
    },
]

export { columns }