import { createClient } from '@/util/supabase/server';
import { columns, Load } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Plus, Download, Navigation } from "lucide-react";
import { LoadMatcher } from "@/components/crm/LoadMatcher";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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

            <div className="grid gap-6 md:grid-cols-12">
                <div className="md:col-span-8 space-y-6">
                    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                        <div className="glass-card rounded-xl p-4 border-l-4 border-l-blue-500 shadow-lg">
                            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Unassigned</div>
                            <div className="text-2xl font-bold mt-1">{data.filter(l => l.status === 'Unassigned').length}</div>
                        </div>
                        <div className="glass-card rounded-xl p-4 border-l-4 border-l-yellow-500 shadow-lg">
                            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">In Transit</div>
                            <div className="text-2xl font-bold mt-1">{data.filter(l => l.status === 'In Transit').length}</div>
                        </div>
                        <div className="glass-card rounded-xl p-4 border-l-4 border-l-green-500 shadow-lg">
                            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Delivered</div>
                            <div className="text-2xl font-bold mt-1">{data.filter(l => l.status === 'Delivered').length}</div>
                        </div>
                        <div className="glass-card rounded-xl p-4 border-l-4 border-l-primary shadow-lg">
                            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Revenue</div>
                            <div className="text-2xl font-bold mt-1">
                                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                                    data.reduce((sum, l) => sum + (l.amount_value || 0), 0)
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="glass-card rounded-2xl p-6 shadow-2xl border-none">
                        <DataTable columns={columns} data={data} searchKey="load_number" />
                    </div>
                </div>

                <div className="md:col-span-4">
                    <Card className="glass-card border-none shadow-2xl sticky top-24">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold flex items-center gap-2">
                                <Navigation size={18} className="text-primary" />
                                Smart Dispatch
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <LoadMatcher loadId="active" />
                            <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Automated Optimization</p>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Our AI engine is analyzing driver locations and equipment to suggest the most profitable matches.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

