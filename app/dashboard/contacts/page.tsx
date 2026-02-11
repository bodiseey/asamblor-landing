import { Person, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"
import { createClient } from "@/lib/supabase/server"

async function getData(): Promise<Person[]> {
    const supabase = createClient();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];

    const { data: people, error } = await supabase
        .from('people')
        .select(`
            id,
            first_name,
            last_name,
            email,
            job_title,
            status,
            source,
            last_activity_at,
            companies (
                name
            )
        `)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching people:', error);
        return [];
    }

    return people.map(p => ({
        id: p.id,
        name: `${p.first_name || ''} ${p.last_name || ''}`.trim() || p.email.split('@')[0],
        email: p.email,
        job_title: p.job_title || undefined,
        company: (p.companies as any)?.name || undefined,
        status: p.status || 'New',
        source: p.source || 'Manual',
        last_activity_at: p.last_activity_at
    }));
}

export default async function ContactsPage() {
    const data = await getData()

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">People</h2>
                <p className="text-muted-foreground">Manage your relationships and driver database.</p>
            </div>
            <DataTable columns={columns} data={data} searchKey="name" />
        </div>
    )
}
