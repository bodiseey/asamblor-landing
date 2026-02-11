import { createClient } from '@/util/supabase/server';
import { columns, Vehicle } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Plus, Download, Truck } from "lucide-react";

async function getData(): Promise<Vehicle[]> {
    const supabase = createClient();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];

    const { data: vehicles, error } = await supabase
        .from('vehicles')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching vehicles:', error);
        return [];
    }

    return (vehicles || []).map(v => ({
        id: v.id,
        unit_number: v.unit_number,
        vin: v.vin || 'N/A',
        make: v.make || 'N/A',
        model: v.model || 'N/A',
        year: v.year || 0,
        type: v.type,
        status: v.status,
        last_inspection_date: v.last_inspection_date,
    }));
}

export default async function VehiclesPage() {
    const data = await getData();

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Fleet</h1>
                    <p className="text-muted-foreground">
                        Monitor your vehicles, maintenance schedules, and equipment.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                        <Download size={16} />
                        Export
                    </Button>
                    <Button size="sm" className="gap-2 shadow-lg shadow-primary/20">
                        <Truck size={16} />
                        Add Vehicle
                    </Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
                <div className="glass-card rounded-xl p-4 border-l-4 border-l-primary">
                    <div className="text-xs font-medium text-muted-foreground uppercase">Total Units</div>
                    <div className="text-2xl font-bold mt-1">{data.length}</div>
                </div>
                <div className="glass-card rounded-xl p-4 border-l-4 border-l-emerald-500">
                    <div className="text-xs font-medium text-muted-foreground uppercase">In Service</div>
                    <div className="text-2xl font-bold mt-1">{data.filter(v => v.status === 'Available' || v.status === 'Dispatched').length}</div>
                </div>
                <div className="glass-card rounded-xl p-4 border-l-4 border-l-yellow-500">
                    <div className="text-xs font-medium text-muted-foreground uppercase">On Road</div>
                    <div className="text-2xl font-bold mt-1">{data.filter(v => v.status === 'Dispatched').length}</div>
                </div>
                <div className="glass-card rounded-xl p-4 border-l-4 border-l-destructive">
                    <div className="text-xs font-medium text-muted-foreground uppercase">Maintenance</div>
                    <div className="text-2xl font-bold mt-1">{data.filter(v => v.status === 'Maintenance').length}</div>
                </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
                <DataTable columns={columns} data={data} searchPlaceholder="Search unit number, VIN, make..." />
            </div>
        </div>
    );
}
