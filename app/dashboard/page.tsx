"use client";

import { useEffect, useState } from "react";
import {
    Users,
    Package,
    Truck,
    UserCircle,
    ArrowUpRight,
    ArrowDownRight,
    CalendarCheck,
    TrendingUp,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createClient } from "@/util/supabase/client";
import { ActivityTimeline } from "@/components/crm/ActivityTimeline";
import { ComplianceAlerts } from "@/components/crm/ComplianceAlerts";

export default function DashboardPage() {
    const [stats, setStats] = useState({
        people: 0,
        loads: 0,
        drivers: 0,
        vehicles: 0,
    });

    useEffect(() => {
        async function fetchStats() {
            const supabase = createClient();

            const [
                { count: peopleCount },
                { count: loadsCount },
                { count: driversCount },
                { count: vehiclesCount }
            ] = await Promise.all([
                supabase.from('people').select('*', { count: 'exact', head: true }),
                supabase.from('loads').select('*', { count: 'exact', head: true }),
                supabase.from('drivers').select('*', { count: 'exact', head: true }),
                supabase.from('vehicles').select('*', { count: 'exact', head: true }),
            ]);

            setStats({
                people: peopleCount || 0,
                loads: loadsCount || 0,
                drivers: driversCount || 0,
                vehicles: vehiclesCount || 0,
            });
        }

        fetchStats();
    }, []);

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Command Center</h2>
                    <p className="text-muted-foreground">Industrial-scale operations hub.</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium animate-pulse">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        LIVE OPERATIONS
                    </div>
                </div>
            </div>

            {/* Metrics Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="glass-card hover:border-primary/50 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total People</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.people}</div>
                        <p className="text-xs text-muted-foreground flex items-center mt-1">
                            <span className="text-emerald-500 flex items-center mr-1">
                                <ArrowUpRight className="h-3 w-3 mr-0.5" />
                                +12%
                            </span>
                            growth
                        </p>
                    </CardContent>
                </Card>
                <Card className="glass-card hover:border-primary/50 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Loads</CardTitle>
                        <Package className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.loads}</div>
                        <p className="text-xs text-muted-foreground flex items-center mt-1 text-emerald-500">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            On schedule
                        </p>
                    </CardContent>
                </Card>
                <Card className="glass-card hover:border-primary/50 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Drivers</CardTitle>
                        <UserCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.drivers}</div>
                        <p className="text-xs text-muted-foreground flex items-center mt-1">
                            <span className="text-emerald-500 flex items-center mr-1">
                                <ArrowUpRight className="h-3 w-3 mr-0.5" />
                                100%
                            </span>
                            on-duty
                        </p>
                    </CardContent>
                </Card>
                <Card className="glass-card hover:border-primary/50 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Fleet Capacity</CardTitle>
                        <Truck className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.vehicles}</div>
                        <p className="text-xs text-muted-foreground flex items-center mt-1">
                            Units available
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Main Operations Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
                {/* Performance Chart */}
                <Card className="lg:col-span-6 glass-card border-none shadow-2xl">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold">Fleet Utilization</CardTitle>
                        <CardDescription>Capacity vs load demand over time.</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[400px] w-full bg-primary/5 rounded-2xl flex items-center justify-center border border-dashed border-primary/20 text-muted-foreground">
                            Chart Visualization
                        </div>
                    </CardContent>
                </Card>

                {/* Compliance Center */}
                <Card className="lg:col-span-3 glass-card border-none shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold flex items-center gap-2">
                            Compliance
                        </CardTitle>
                        <CardDescription>Certifications & safety alerts.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ComplianceAlerts />
                    </CardContent>
                </Card>

                {/* Global Timeline */}
                <Card className="lg:col-span-3 glass-card border-none shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold">Activity</CardTitle>
                        <CardDescription>Real-time operations stream.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ActivityTimeline limit={6} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

