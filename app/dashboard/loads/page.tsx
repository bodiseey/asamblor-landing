import { createClient } from '@/util/supabase/server';
import { columns, Load } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Plus, Download, Filter } from "lucide-react";

async function getData(): Promise<Load[]> {
    const supabase = createClient();

    // Check auth
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];

    const { data: loads, error } = await supabase
        .from('loads')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching loads:', error);
        return [];
    }

    return (loads || []).map(load => ({
        id: load.id,
        load_number: load.load_number || 'N/A',
        name: load.name,
        status: load.status,
        pickup_city: load.pickup_city || 'N/A',
        delivery_city: load.delivery_city || 'N/A',
        amount_value: load.amount_value,
        amount_currency_code: load.amount_currency_code,
    }));
}

export default async function LoadsPage() {
    const data = await getData();

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Loads</h1>
                    <p className="text-muted-foreground">
                        Manage your active and completed freight loads.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                        <Download size={16} />
                        Export
                    </Button>
                    <Button size="sm" className="gap-2 shadow-lg shadow-primary/20">
                        <Plus size={16} />
                        New Load
                    </Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                <div className="glass-card rounded-xl p-4 border-l-4 border-l-blue-500">
                    <div className="text-xs font-medium text-muted-foreground uppercase">Unassigned</div>
                    <div className="text-2xl font-bold mt-1">{data.filter(l => l.status === 'Unassigned').length}</div>
                </div>
                <div className="glass-card rounded-xl p-4 border-l-4 border-l-yellow-500">
                    <div className="text-xs font-medium text-muted-foreground uppercase">In Transit</div>
                    <div className="text-2xl font-bold mt-1">{data.filter(l => l.status === 'In Transit').length}</div>
                </div>
                <div className="glass-card rounded-xl p-4 border-l-4 border-l-green-500">
                    <div className="text-xs font-medium text-muted-foreground uppercase">Delivered</div>
                    <div className="text-2xl font-bold mt-1">{data.filter(l => l.status === 'Delivered').length}</div>
                </div>
                <div className="glass-card rounded-xl p-4 border-l-4 border-l-primary">
                    <div className="text-xs font-medium text-muted-foreground uppercase">Total Revenue</div>
                    <div className="text-2xl font-bold mt-1">
                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                            data.reduce((sum, l) => sum + (l.amount_value || 0), 0)
                        )}
                    </div>
                </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
                <DataTable columns={columns} data={data} searchPlaceholder="Search load number, origin..." />
            </div>
        </div>
    );
}
