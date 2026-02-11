import { Lead, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"

async function getData(): Promise<Lead[]> {
    // Mock data for MVP
    return [
        {
            id: "728ed52f",
            name: "John Smith",
            email: "m@example.com",
            status: "New",
            source: "Facebook Ads",
            lastContact: "2023-01-23"
        },
        {
            id: "489e1d42",
            name: "Sarah Connors",
            email: "sarah@example.com",
            status: "Qualified",
            source: "Google Search",
            lastContact: "2023-02-14"
        },
        {
            id: "d9e1c2a1",
            name: "Mike Ross",
            email: "mike.ross@pearson.com",
            status: "Contacted",
            source: "Referral",
            lastContact: "2023-03-01"
        },
        {
            id: "b2a3c4d5",
            name: "Harvey Specter",
            email: "harvey@specter.com",
            status: "Closed",
            source: "LinkedIn",
            lastContact: "2023-03-05"
        },
        {
            id: "e5f6g7h8",
            name: "Donna Paulsen",
            email: "donna@pearson.com",
            status: "Qualified",
            source: "Internal",
            lastContact: "2023-03-10"
        },
    ]
}

export default async function ContactsPage() {
    const data = await getData()

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Contacts</h2>
                <p className="text-muted-foreground">Manage your leads and driver database.</p>
            </div>
            <DataTable columns={columns} data={data} searchKey="name" />
        </div>
    )
}
