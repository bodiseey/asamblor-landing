import { createClient } from '@/util/supabase/server';
import { columns, Driver } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Plus, Download, UserPlus } from "lucide-react";

async function getData(): Promise<Driver[]> {
    const supabase = createClient();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];

    const { data: drivers, error } = await supabase
        .from('drivers')
        .select(`
            id,
            license_number,
            license_state,
            status,
            years_experience,
            people (
                first_name,
                last_name,
                email
            ),
            vehicles (
                unit_number
            )
        `)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching drivers:', error);
        return [];
    }

    return (drivers || []).map(d => ({
        id: d.id,
        name: `${d.people?.first_name} ${d.people?.last_name}`,
        email: d.people?.email,
        license_number: d.license_number || 'N/A',
        license_state: d.license_state || 'N/A',
        status: d.status,
        vehicle_unit: d.vehicles?.unit_number,
        years_experience: d.years_experience || 0,
    }));
}

export default async function DriversPage() {
    const data = await getData();

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Drivers</h1>
                    <p className="text-muted-foreground">
                        Manage your driver roster and vehicle assignments.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                        <Download size={16} />
                        Export
                    </Button>
                    <Button size="sm" className="gap-2 shadow-lg shadow-primary/20">
                        <UserPlus size={16} />
                        Onboard Driver
                    </Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <div className="glass-card rounded-xl p-4 border-l-4 border-l-emerald-500">
                    <div className="text-xs font-medium text-muted-foreground uppercase">Active Drivers</div>
                    <div className="text-2xl font-bold mt-1">{data.filter(d => d.status === 'Active').length}</div>
                </div>
                <div className="glass-card rounded-xl p-4 border-l-4 border-l-blue-500">
                    <div className="text-xs font-medium text-muted-foreground uppercase">Fully Dispatched</div>
                    <div className="text-2xl font-bold mt-1">{data.filter(d => d.status === 'Active' && d.vehicle_unit).length}</div>
                </div>
                <div className="glass-card rounded-xl p-4 border-l-4 border-l-yellow-500">
                    <div className="text-xs font-medium text-muted-foreground uppercase">Pending Assignment</div>
                    <div className="text-2xl font-bold mt-1">{data.filter(d => !d.vehicle_unit).length}</div>
                </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
                <DataTable columns={columns} data={data} searchPlaceholder="Search driver name, license..." />
            </div>
        </div>
    );
}
