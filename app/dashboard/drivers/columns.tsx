"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { MoreHorizontal, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export type Driver = {
    id: string
    name: string
    email: string
    license_number: string
    license_state: string
    status: "Active" | "Inactive" | "On Leave"
    vehicle_unit?: string
    years_experience: number
}

export const columns: ColumnDef<Driver>[] = [
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
        accessorKey: "name",
        header: "Driver",
        cell: ({ row }) => {
            const name = row.getValue("name") as string
            const initials = name.split(' ').map(n => n[0]).join('')

            return (
                <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/10 text-primary text-[10px] font-bold">
                            {initials}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="font-medium text-sm">{name}</span>
                        <span className="text-[10px] text-muted-foreground">{row.original.email}</span>
                    </div>
                </div>
            )
        },
    },
    {
        accessorKey: "license_number",
        header: "License #",
        cell: ({ row }) => (
            <div className="flex flex-col">
                <span className="text-sm">{row.getValue("license_number")}</span>
                <span className="text-[10px] text-muted-foreground uppercase">{row.original.license_state}</span>
            </div>
        )
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as string
            return (
                <Badge variant={status === "Active" ? "default" : "secondary"} className={status === "On Leave" ? "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20" : ""}>
                    {status}
                </Badge>
            )
        },
    },
    {
        accessorKey: "vehicle_unit",
        header: "Vehicle",
        cell: ({ row }) => row.getValue("vehicle_unit") || "Unassigned",
    },
    {
        accessorKey: "years_experience",
        header: "Experience",
        cell: ({ row }) => <span>{row.getValue("years_experience")} yrs</span>,
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const driver = row.original

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
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(driver.id)}>
                            Copy Driver ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View profile</DropdownMenuItem>
                        <DropdownMenuItem>Assign vehicle</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
