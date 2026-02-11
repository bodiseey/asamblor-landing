"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CalendarPage() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    return (
        <div className="space-y-6 h-full flex flex-col">
            <div className="flex items-center justify-between shrink-0">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Calendar</h2>
                    <p className="text-muted-foreground">View and manage your scheduled interviews.</p>
                </div>
                <Button variant="outline">Sync External Calendar</Button>
            </div>

            <Card className="flex-1 overflow-hidden min-h-[600px] border-border/50 bg-card/50">
                <CardContent className="p-0 h-full relative">
                    {/* Placeholder for actual calendar integration or using Cal.com embed */}
                    <div className="h-full w-full rounded-lg overflow-hidden">
                        <Cal
                            calLink="rick/30min" // Replace with dynamic Cal link from user settings
                            style={{ width: "100%", height: "100%", overflow: "scroll" }}
                            config={{ "layout": "month_view" }}
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
