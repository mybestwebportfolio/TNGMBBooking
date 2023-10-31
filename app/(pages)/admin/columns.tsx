"use client"

import Actions from "@/components/admin/Actions"
import { Booking } from "@/types"
import { ColumnDef } from "@tanstack/react-table"


const columns: ColumnDef<Booking>[] = [
    {
        accessorKey: "nama_ketua",
        header: "Nama",
    },
    {
        accessorKey: "nik_ketua",
        header: "Nik",
    },
    {
        accessorKey: "jalur_pendakian",
        header: "Jalur",
    },
    {
        accessorKey: "lama_menginap",
        header: "Lama",
    },
    {
        accessorKey: "jumlah_pendaki",
        header: "JumlahPendaki",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "actions",
        header: () => <div className="text-left">Actions</div>,
        cell: ({ row }) => {
            const bookData = row.original
            return <Actions bookData={bookData} />
        },
    },
]

export { columns }