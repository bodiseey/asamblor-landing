"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { AlertCircle, CheckCircle2, Clock, ShieldAlert } from "lucide-react"
import { cn } from "@/lib/utils"
import { formatDistanceToNow } from "date-fns"

type ComplianceAlert = {
    id: string
    type: string
    severity: "Info" | "Warning" | "Critical"
    message: string
    due_date: string
    driver_name?: string
    vehicle_unit?: string
}

export function ComplianceAlerts() {
    const [alerts, setAlerts] = useState<ComplianceAlert[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchAlerts() {
            const supabase = createClient()

            const { data, error } = await supabase
                .from('compliance_alerts')
                .select(`
                    id,
                    type,
                    severity,
                    message,
                    due_date,
                    drivers (
                        people (first_name, last_name)
                    ),
                    vehicles (unit_number)
                `)
                .is('resolved_at', null)
                .order('due_date', { ascending: true })
                .limit(5)

            if (!error && data) {
                const formatted = data.map((a: any) => ({
                    id: a.id,
                    type: a.type,
                    severity: a.severity,
                    message: a.message,
                    due_date: a.due_date,
                    driver_name: a.drivers?.people ? `${a.drivers.people.first_name} ${a.drivers.people.last_name}` : undefined,
                    vehicle_unit: a.vehicles?.unit_number
                }))
                setAlerts(formatted)
            }
            setLoading(false)
        }

        fetchAlerts()
    }, [])

    if (loading) return <div className="space-y-3 animate-pulse">
        {[1, 2].map(i => <div key={i} className="h-16 bg-muted rounded-xl" />)}
    </div>

    if (alerts.length === 0) return (
        <div className="flex flex-col items-center justify-center py-6 text-center">
            <CheckCircle2 className="h-8 w-8 text-emerald-500/50 mb-2" />
            <p className="text-xs text-muted-foreground font-medium">All compliance clear</p>
        </div>
    )

    return (
        <div className="space-y-3">
            {alerts.map((alert) => (
                <div key={alert.id} className={cn(
                    "p-3 rounded-xl border flex gap-3 items-start transition-all hover:translate-x-1",
                    alert.severity === 'Critical' ? "bg-red-500/5 border-red-500/20" : "bg-amber-500/5 border-amber-500/20"
                )}>
                    <ShieldAlert className={cn(
                        "h-4 w-4 mt-0.5",
                        alert.severity === 'Critical' ? "text-red-500" : "text-amber-500"
                    )} />
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-0.5">
                            <span className="text-[10px] uppercase font-bold tracking-wider opacity-70">{alert.type}</span>
                            <span className="text-[10px] font-medium opacity-60">
                                Due {formatDistanceToNow(new Date(alert.due_date), { addSuffix: true })}
                            </span>
                        </div>
                        <p className="text-xs font-semibold">{alert.message}</p>
                        <p className="text-[10px] text-muted-foreground mt-1 font-medium">
                            {alert.driver_name || `Unit #${alert.vehicle_unit}`}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
