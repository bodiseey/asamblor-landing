"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

export type Person = {
    id: string
    name: string
    email: string
    job_title?: string
    company?: string
    status: string
    source: string
    last_activity_at: string | null
    last_activity_type?: string
}

export const columns: ColumnDef<Person>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
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
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as string;
            return (
                <Badge variant={
                    status === "Qualified" ? "default" :
                        status === "New" ? "secondary" :
                            status === "Closed" ? "outline" : "destructive"
                } className={
                    status === "Qualified" ? "bg-emerald-500 hover:bg-emerald-600" :
                        status === "Contacted" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""
                }>
                    {status}
                </Badge>
            )
        }
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "company",
        header: "Company",
    },
    {
        accessorKey: "job_title",
        header: "Job Title",
    },
    {
        accessorKey: "source",
        header: "Source",
    },
    {
        accessorKey: "last_activity_at",
        header: "Last Activity",
        cell: ({ row }) => {
            const date = row.getValue("last_activity_at") as string;
            const type = row.original.last_activity_type;
            if (!date) return <span className="text-muted-foreground text-xs">No activity</span>;

            return (
                <div className="flex flex-col">
                    <span className="text-xs font-medium">{new Date(date).toLocaleDateString()}</span>
                    {type && <span className="text-[10px] text-muted-foreground uppercase">{type}</span>}
                </div>
            );
        }
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const payment = row.original

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
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.id)}
                        >
                            Copy Lead ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>View history</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
