"use client";

import KanbanBoard from "@/components/crm/KanbanBoard";

export default function PipelinePage() {
    return (
        <div className="h-full flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Opportunities</h2>
                    <p className="text-muted-foreground">Manage your driver pipeline.</p>
                </div>
            </div>
            <div className="flex-1 overflow-x-auto">
                <KanbanBoard />
            </div>
        </div>
    );
}
