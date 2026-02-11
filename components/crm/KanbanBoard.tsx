"use client";

import React, { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
    DndContext,
    DragOverlay,
    DragStartEvent,
    DragEndEvent,
    DragOverEvent,
    useSensor,
    useSensors,
    PointerSensor,
    closestCorners
} from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { MoreHorizontal, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Types
export type Id = string | number;

export type Column = {
    id: Id;
    title: string;
};

export type Task = {
    id: Id;
    columnId: Id;
    content: string;
    source: string;
    value: string;
};

// Initial Data
const defaultCols: Column[] = [
    { id: "New", title: "New Lead" },
    { id: "Contacted", title: "Contacted" },
    { id: "Qualified", title: "Qualified" },
    { id: "Negotiation", title: "Interview" },
    { id: "Won", title: "Hired" },
];

const initialTasks: Task[] = [
    { id: "1", columnId: "New", content: "John Doe - CDL A", source: "Facebook", value: "$1,500" },
    { id: "2", columnId: "New", content: "Mike Smith - Flatbed", source: "Google", value: "$1,500" },
    { id: "3", columnId: "Contacted", content: "Jane Doe - Reefer", source: "LinkedIn", value: "$3,000" },
    { id: "4", columnId: "Qualified", content: "Robert Johnson", source: "Referral", value: "$5,000" },
    { id: "5", columnId: "Negotiation", content: "Emily Davis", source: "Indeed", value: "$2,200" },
];

export default function KanbanBoard() {
    const [columns, setColumns] = useState<Column[]>(defaultCols);
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [activeColumn, setActiveColumn] = useState<Column | null>(null);
    const [activeTask, setActiveTask] = useState<Task | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 10, // 10px movement required to drag
            },
        })
    );

    const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

    function onDragStart(event: DragStartEvent) {
        if (event.active.data.current?.type === "Column") {
            setActiveColumn(event.active.data.current.column);
            return;
        }

        if (event.active.data.current?.type === "Task") {
            setActiveTask(event.active.data.current.task);
            return;
        }
    }

    function onDragEnd(event: DragEndEvent) {
        setActiveColumn(null);
        setActiveTask(null);

        const { active, over } = event;
        if (!over) return;

        const activeId = active.id;
        const overId = over.id;

        if (activeId === overId) return;

        const isActiveColumn = active.data.current?.type === "Column";
        if (!isActiveColumn) return;

        setColumns((columns) => {
            const activeColumnIndex = columns.findIndex((col) => col.id === activeId);
            const overColumnIndex = columns.findIndex((col) => col.id === overId);
            return arrayMove(columns, activeColumnIndex, overColumnIndex);
        });
    }

    function onDragOver(event: DragOverEvent) {
        const { active, over } = event;
        if (!over) return;

        const activeId = active.id;
        const overId = over.id;

        if (activeId === overId) return;

        const isActiveTask = active.data.current?.type === "Task";
        const isOverTask = over.data.current?.type === "Task";

        if (!isActiveTask) return;

        // Dropping a Task over another Task
        if (isActiveTask && isOverTask) {
            setTasks((tasks) => {
                const activeIndex = tasks.findIndex((t) => t.id === activeId);
                const overIndex = tasks.findIndex((t) => t.id === overId);

                if (tasks[activeIndex].columnId !== tasks[overIndex].columnId) {
                    tasks[activeIndex].columnId = tasks[overIndex].columnId;
                    // Trigger backend update here
                    console.log("Moved task to new column:", tasks[overIndex].columnId);
                }

                return arrayMove(tasks, activeIndex, overIndex);
            });
        }

        const isOverColumn = over.data.current?.type === "Column";

        // Dropping a Task over a Column
        if (isActiveTask && isOverColumn) {
            setTasks((tasks) => {
                const activeIndex = tasks.findIndex((t) => t.id === activeId);
                tasks[activeIndex].columnId = overId;
                // Trigger backend update here
                console.log("Moved task to column:", overId);
                return arrayMove(tasks, activeIndex, activeIndex);
            });
        }
    }

    return (
        <div className="flex h-[80vh] w-full items-start gap-4 overflow-x-auto overflow-y-hidden pb-4">
            <DndContext
                sensors={sensors}
                collisionDetection={closestCorners}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                onDragOver={onDragOver}
            >
                <div className="flex gap-4">
                    <SortableContext items={columnsId}>
                        {columns.map((col) => (
                            <ColumnContainer
                                key={col.id}
                                column={col}
                                tasks={tasks.filter((task) => task.columnId === col.id)}
                            />
                        ))}
                    </SortableContext>
                </div>

                {createPortal(
                    <DragOverlay>
                        {activeColumn && (
                            <ColumnContainer
                                column={activeColumn}
                                tasks={tasks.filter((task) => task.columnId === activeColumn.id)}
                            />
                        )}
                        {activeTask && <TaskCard task={activeTask} />}
                    </DragOverlay>,
                    document.body
                )}
            </DndContext>
        </div>
    );
}

// Sub-components (could handle in separate files but keeping together for simplicity in MVP)

function ColumnContainer({ column, tasks }: { column: Column; tasks: Task[] }) {
    const taskIds = useMemo(() => tasks.map((task) => task.id), [tasks]);

    const { setNodeRef, attributes, listeners, transform, transition, isDragging } =
        useSortable({
            id: column.id,
            data: {
                type: "Column",
                column,
            },
        });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                style={style}
                className="flex h-[500px] w-[300px] flex-col rounded-xl border-2 border-primary/20 bg-muted/50 opacity-40"
            ></div>
        );
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="flex h-[800px] max-h-[80vh] w-[300px] flex-col rounded-xl bg-muted/10 border border-border"
        >
            {/* Column Header */}
            <div
                {...attributes}
                {...listeners}
                className="flex items-center justify-between rounded-t-xl bg-muted/40 p-4 border-b border-border cursor-grab hover:bg-muted/60"
            >
                <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center bg-primary/10 rounded-full h-6 w-6 text-xs font-bold text-primary">
                        {tasks.length}
                    </div>
                    <span className="text-sm font-bold">{column.title}</span>
                </div>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                    <MoreHorizontal size={16} />
                </Button>
            </div>

            {/* Tasks Container */}
            <div className="flex flex-grow flex-col gap-2 overflow-y-auto overflow-x-hidden p-2">
                <SortableContext items={taskIds}>
                    {tasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </SortableContext>
            </div>

            <div className="p-2 border-t border-border">
                <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-primary">
                    <Plus className="mr-2 h-4 w-4" /> Add Task
                </Button>
            </div>
        </div>
    );
}

function TaskCard({ task }: { task: Task }) {
    const { setNodeRef, attributes, listeners, transform, transition, isDragging } =
        useSortable({
            id: task.id,
            data: {
                type: "Task",
                task,
            },
        });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                style={style}
                className="relative flex cursor-grab items-center rounded-xl border border-primary/50 bg-background p-4 opacity-30 h-[100px]"
            />
        );
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="group relative flex cursor-grab flex-col items-start gap-2 rounded-xl border border-border bg-card p-4 shadow-sm hover:border-primary/50 hover:shadow-md transition-all active:cursor-grabbing"
        >
            <div className="flex w-full justify-between items-start">
                <span className="font-semibold text-sm">{task.content}</span>
                <Badge variant="outline" className="text-[10px] h-5 px-1.5 font-normal text-muted-foreground">
                    {task.value}
                </Badge>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2">{task.source}</p>
        </div>
    );
}
