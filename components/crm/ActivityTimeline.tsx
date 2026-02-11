"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import {
    Mail,
    Phone,
    MessageSquare,
    Calendar,
    Clock,
    ArrowRightLeft,
    CheckCircle2,
    AlertCircle
} from "lucide-react"
import { cn } from "@/lib/utils"
import { formatDistanceToNow } from "date-fns"

type Activity = {
    id: string
    type: "call" | "email" | "sms" | "meeting" | "status_change" | "note"
    direction?: "inbound" | "outbound"
    title: string
    content?: string
    timestamp: string
}

interface ActivityTimelineProps {
    personId?: string
    loadId?: string
    limit?: number
}

const iconMap = {
    email: Mail,
    call: Phone,
    sms: MessageSquare,
    meeting: Calendar,
    status_change: ArrowRightLeft,
    note: Clock,
}

export function ActivityTimeline({ personId, loadId, limit = 10 }: ActivityTimelineProps) {
    const [activities, setActivities] = useState<Activity[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchActivities() {
            const supabase = createClient()

            let query = supabase
                .from('activities')
                .select('*')
                .order('timestamp', { ascending: false })
                .limit(limit)

            if (personId) query = query.eq('person_id', personId)
            // if (loadId) query = query.eq('load_id', loadId) // Add this when load relationship is in activities

            const { data, error } = await query

            if (!error && data) {
                setActivities(data as Activity[])
            }
            setLoading(false)
        }

        fetchActivities()
    }, [personId, loadId, limit])

    if (loading) return <div className="animate-pulse space-y-4">
        {[1, 2, 3].map(i => (
            <div key={i} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-muted" />
                <div className="flex-1 space-y-2">
                    <div className="h-4 bg-muted rounded w-1/4" />
                    <div className="h-3 bg-muted rounded w-full" />
                </div>
            </div>
        ))}
    </div>

    if (activities.length === 0) {
        return (
            <div className="text-center py-10">
                <AlertCircle className="mx-auto h-10 w-10 text-muted-foreground/30 mb-4" />
                <p className="text-sm text-muted-foreground">No recent activity found.</p>
            </div>
        )
    }

    return (
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-4 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {activities.map((activity, index) => {
                const Icon = iconMap[activity.type] || Clock
                return (
                    <div key={activity.id} className="relative flex items-start gap-6 group">
                        <div className={cn(
                            "absolute left-0 mt-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-background shadow-sm transition-transform group-hover:scale-110",
                            activity.type === 'status_change' ? "bg-amber-500/10 text-amber-500" :
                                activity.type === 'email' ? "bg-blue-500/10 text-blue-500" :
                                    "bg-primary/10 text-primary"
                        )}>
                            <Icon size={14} />
                        </div>
                        <div className="flex-1 pt-1 ml-10">
                            <div className="flex items-center justify-between mb-1">
                                <h4 className="text-sm font-semibold">{activity.title}</h4>
                                <time className="text-[10px] text-muted-foreground">
                                    {formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}
                                </time>
                            </div>
                            {activity.content && (
                                <p className="text-xs text-muted-foreground line-clamp-2 bg-muted/30 p-2 rounded-lg mt-1 border border-white/5">
                                    {activity.content}
                                </p>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
