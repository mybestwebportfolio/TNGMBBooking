"use client"

import * as React from "react"

import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    VisibilityState,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { usePathname } from "next/navigation"
import AddTrack from "@/app/(pages)/admin/track/components/AddTrack"
import AddNews from "@/app/(pages)/admin/news/components/AddNews"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const pathname = usePathname()
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        state: {
            columnFilters,
            columnVisibility,
        },
    })

    return (
        <div>
            {pathname === "/admin/track" && (
                <div className="mb-3">
                    {pathname === "/admin/track" && (
                        <AddTrack />
                    )}
                </div>
            )}
            {pathname === "/admin/news" && (
                <div className="mb-3">
                    {pathname === "/admin/news" && (
                        <AddNews />
                    )}
                </div>
            )}
            <div className="flex justify-between items-center">
                <div className="flex items-center py-4">
                    {pathname === "/admin" && (
                        <Input
                            placeholder="Filter name..."
                            value={(table.getColumn("nama_ketua")?.getFilterValue() as string) ?? ""}
                            onChange={(event) =>
                                table.getColumn("nama_ketua")?.setFilterValue(event.target.value)
                            }
                            className="max-w-sm"
                        />
                    )}
                    {pathname === "/admin/track" && (
                        <Input
                            placeholder="Filter nama jalur..."
                            value={(table.getColumn("track_name")?.getFilterValue() as string) ?? ""}
                            onChange={(event) =>
                                table.getColumn("track_name")?.setFilterValue(event.target.value)
                            }
                            className="max-w-sm"
                        />
                    )}
                    {pathname === "/admin/testimony" && (
                        <Input
                            placeholder="Filter komentar"
                            value={(table.getColumn("comment")?.getFilterValue() as string) ?? ""}
                            onChange={(event) =>
                                table.getColumn("comment")?.setFilterValue(event.target.value)
                            }
                            className="max-w-sm"
                        />
                    )}
                    {pathname === "/admin/news" && (
                        <Input
                            placeholder="Filter judul berita"
                            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
                            onChange={(event) =>
                                table.getColumn("title")?.setFilterValue(event.target.value)
                            }
                            className="max-w-sm"
                        />
                    )}
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter(
                                (column) => column.getCanHide()
                            )
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </div>
    )
}