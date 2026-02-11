"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { MoreHorizontal, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type Vehicle = {
    id: string
    unit_number: string
    vin: string
    make: string
    model: string
    year: number
    type: string
    status: "Available" | "Dispatched" | "Maintenance"
    last_inspection_date: string | null
}

export const columns: ColumnDef<Vehicle>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "unit_number",
        header: "Unit #",
        cell: ({ row }) => <div className="font-bold text-primary">{row.getValue("unit_number")}</div>,
    },
    {
        accessorKey: "type",
        header: "Type",
        cell: ({ row }) => <Badge variant="outline">{row.getValue("type")}</Badge>,
    },
    {
        accessorKey: "make",
        header: "Vehicle Details",
        cell: ({ row }) => (
            <div className="flex flex-col">
                <span className="text-sm font-medium">{row.original.year} {row.original.make} {row.original.model}</span>
                <span className="text-[10px] text-muted-foreground uppercase">VIN: {row.original.vin}</span>
            </div>
        )
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as string
            let variant: "default" | "secondary" | "destructive" | "outline" = "outline"

            if (status === "Available") variant = "default"
            if (status === "Maintenance") variant = "destructive"

            return (
                <Badge variant={variant}>
                    {status}
                </Badge>
            )
        },
    },
    {
        accessorKey: "last_inspection_date",
        header: "Last Inspection",
        cell: ({ row }) => {
            const date = row.getValue("last_inspection_date") as string
            return date ? new Date(date).toLocaleDateString() : "Never"
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const vehicle = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(vehicle.id)}>
                            Copy Vehicle ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Schedule Maintenance</DropdownMenuItem>
                        <DropdownMenuItem>View history</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
