"use client";

import {
    Users,
    MessageSquare,
    CalendarCheck,
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                    <p className="text-muted-foreground">Overview of your recruitment pipeline.</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-medium animate-pulse">
                        <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                        SYSTEM IN CONSTRUCTION
                    </div>
                    <Button variant="outline" size="sm" className="hidden sm:flex">
                        <CalendarCheck className="mr-2 h-4 w-4" />
                        Last 30 Days
                    </Button>
                    <Button size="sm">Download Report</Button>
                </div>
            </div>

            {/* Metrics Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,248</div>
                        <p className="text-xs text-muted-foreground flex items-center mt-1">
                            <span className="text-emerald-500 flex items-center mr-1">
                                <ArrowUpRight className="h-3 w-3 mr-0.5" />
                                +12%
                            </span>
                            from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">8.4%</div>
                        <p className="text-xs text-muted-foreground flex items-center mt-1">
                            <span className="text-emerald-500 flex items-center mr-1">
                                <ArrowUpRight className="h-3 w-3 mr-0.5" />
                                +2.1%
                            </span>
                            optimized engagement
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Interviews Booked</CardTitle>
                        <CalendarCheck className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">42</div>
                        <p className="text-xs text-muted-foreground flex items-center mt-1">
                            <span className="text-red-500 flex items-center mr-1">
                                <ArrowDownRight className="h-3 w-3 mr-0.5" />
                                -4%
                            </span>
                            schedule capacity full
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Hired Drivers</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground flex items-center mt-1">
                            <span className="text-emerald-500 flex items-center mr-1">
                                <ArrowUpRight className="h-3 w-3 mr-0.5" />
                                +3 target
                            </span>
                            this month
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity / Charts Placeholder */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                        <CardDescription>
                            Weekly lead volume and engagement metrics.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[350px] w-full bg-muted/20 rounded-lg flex items-center justify-center border border-dashed border-border text-muted-foreground">
                            Chart Visualization Component (Recharts)
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>
                            Latest lead interactions.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {[
                                { name: "John Smith", action: "replied to email", time: "2 min ago", avatar: "JS" },
                                { name: "Sarah Connor", action: "booked an interview", time: "1 hour ago", avatar: "SC" },
                                { name: "Mike Ross", action: "qualified by AI", time: "3 hours ago", avatar: "MR" },
                                { name: "Jessica Pearson", action: "contract sent", time: "5 hours ago", avatar: "JP" },
                            ].map((activity, i) => (
                                <div key={i} className="flex items-center">
                                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary border border-primary/20">
                                        {activity.avatar}
                                    </div>
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none">{activity.name}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {activity.action}
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium text-xs text-muted-foreground">
                                        {activity.time}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
