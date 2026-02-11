"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Truck, UserCircle, Star, Navigation } from "lucide-react"

type Match = {
    id: string
    driver_id: string
    driver_name: string
    vehicle_unit: string
    score: number
    status: string
}

export function LoadMatcher({ loadId }: { loadId: string }) {
    const [matches, setMatches] = useState<Match[]>([])
    const [loading, setLoading] = useState(false)

    const findMatches = async () => {
        setLoading(true)
        const supabase = createClient()

        // Mocking the "Matching Engine" logic for now (distance/experience/availability)
        const { data: drivers } = await supabase
            .from('drivers')
            .select('id, people(first_name, last_name), vehicles(unit_number)')
            .eq('status', 'Active')
            .limit(3)

        if (drivers) {
            setMatches(drivers.map((d: any) => {
                const person = Array.isArray(d.people) ? d.people[0] : d.people;
                const vehicle = Array.isArray(d.vehicles) ? d.vehicles[0] : d.vehicles;

                return {
                    id: Math.random().toString(36).substr(2, 9),
                    driver_id: d.id,
                    driver_name: person ? `${person.first_name} ${person.last_name}` : 'Unknown',
                    vehicle_unit: vehicle?.unit_number || 'N/A',
                    score: Math.floor(Math.random() * (98 - 85 + 1)) + 85,
                    status: 'Pending'
                };
            }))
        }
        setLoading(false)
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold flex items-center gap-2">
                    <Navigation size={14} className="text-primary" />
                    AI Dispatch Suggestions
                </h3>
                <Button variant="ghost" size="sm" onClick={findMatches} disabled={loading} className="text-[10px] h-7">
                    {loading ? "Matching..." : "Scan Drivers"}
                </Button>
            </div>

            {matches.length === 0 && !loading && (
                <div className="p-4 border border-dashed rounded-xl text-center">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">No scans performed</p>
                </div>
            )}

            <div className="space-y-2">
                {matches.map((match) => (
                    <div key={match.id} className="glass-card p-3 rounded-xl border border-white/5 flex items-center justify-between group hover:border-primary/30 transition-all">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <UserCircle className="h-8 w-8 text-muted-foreground" />
                                <div className="absolute -top-1 -right-1 h-3 w-3 bg-emerald-500 rounded-full border-2 border-background" title="Available Now" />
                            </div>
                            <div>
                                <p className="text-xs font-bold">{match.driver_name}</p>
                                <div className="flex items-center gap-2 mt-0.5">
                                    <Badge variant="outline" className="text-[9px] px-1 h-4 flex items-center gap-1">
                                        <Truck size={8} /> {match.vehicle_unit}
                                    </Badge>
                                    <span className="text-[10px] text-emerald-500 font-bold flex items-center gap-0.5">
                                        <Star size={10} fill="currentColor" /> {match.score}% match
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full hover:bg-emerald-500/10 hover:text-emerald-500 opacity-0 group-hover:opacity-100 transition-all">
                            <Check size={16} />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}
