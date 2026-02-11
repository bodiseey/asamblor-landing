"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    KanbanSquare,
    CalendarDays,
    Settings,
    Menu,
    ChevronLeft,
    ChevronRight,
    Search,
    Bell,
    Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { UserDropdown } from "@/components/dashboard/user-dropdown";

const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Users, label: "People", href: "/dashboard/contacts" },
    { icon: KanbanSquare, label: "Opportunities", href: "/dashboard/pipeline" },
    { icon: CalendarDays, label: "Calendar", href: "/dashboard/calendar" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [iscollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    // Hydration fix for sidebar state
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div className="flex min-h-screen bg-background text-foreground animate-in fade-in duration-500 dashboard-emerald">
            {/* Desktop Sidebar */}
            <aside
                className={cn(
                    "hidden md:flex flex-col border-r border-border bg-card/50 backdrop-blur-xl transition-all duration-300 relative z-20 h-screen sticky top-0",
                    iscollapsed ? "w-20 items-center" : "w-64"
                )}
            >
                <div className={cn("h-16 flex items-center px-4 border-b border-border transition-all", iscollapsed ? "justify-center" : "justify-between")}>
                    {!iscollapsed && (
                        <Link href="/dashboard" className="flex items-center gap-2">
                            <img
                                src="/logo.png"
                                alt="Asamblor Logo"
                                className="h-7 w-auto object-contain"
                            />
                        </Link>
                    )}
                    {iscollapsed && (
                        <Link href="/dashboard">
                            <img
                                src="/logo.png"
                                alt="A"
                                className="h-6 w-auto object-contain"
                            />
                        </Link>
                    )}
                    <Button
                        variant="ghost"
                        size="icon"
                        className={cn("h-8 w-8 text-muted-foreground hover:bg-muted", iscollapsed ? "hidden" : "ml-auto")}
                        onClick={() => setIsCollapsed(!iscollapsed)}
                    >
                        <ChevronLeft size={16} />
                    </Button>
                </div>

                {iscollapsed && (
                    <Button
                        variant="ghost"
                        size="icon"
                        className="mt-4 h-8 w-8 text-muted-foreground hover:bg-muted"
                        onClick={() => setIsCollapsed(!iscollapsed)}
                    >
                        <ChevronRight size={16} />
                    </Button>
                )}

                <nav className="flex-1 py-6 px-3 space-y-1">
                    {sidebarItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link key={item.href} href={item.href}>
                                <div
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group relative overflow-hidden cursor-pointer",
                                        isActive
                                            ? "bg-primary/10 text-primary font-medium border border-primary/20 shadow-sm"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground",
                                        iscollapsed && "justify-center px-0 py-3"
                                    )}
                                    title={iscollapsed ? item.label : undefined}
                                >
                                    <item.icon size={20} className={cn("shrink-0 transition-colors", isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
                                    {!iscollapsed && (
                                        <span className="truncate text-sm font-medium">
                                            {item.label}
                                        </span>
                                    )}
                                </div>
                            </Link>
                        )
                    })}
                </nav>


                <div className="p-4 border-t border-border mt-auto w-full">
                    <UserDropdown isCollapsed={iscollapsed} />
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-h-screen relative w-full overflow-hidden">
                {/* Header */}
                <header className="h-16 flex items-center justify-between px-4 md:px-8 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-30">
                    <div className="flex items-center gap-4 md:hidden">
                        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu size={20} />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-64 p-0 bg-background border-r border-border flex flex-col">
                                <div className="h-16 flex items-center px-6 border-b border-border">
                                    <img src="/logo.png" alt="Asamblor Logo" className="h-6 w-auto" />
                                </div>
                                <nav className="flex-1 py-6 px-4 space-y-2">
                                    {sidebarItems.map((item) => (
                                        <Link key={item.href} href={item.href} onClick={() => setIsMobileOpen(false)}>
                                            <div className={cn(
                                                "flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors",
                                                pathname === item.href ? "bg-primary/10 text-primary border border-primary/20" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                            )}>
                                                <item.icon size={20} />
                                                <span>{item.label}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </nav>
                                <div className="p-4 border-t border-border mt-auto">
                                    <UserDropdown isCollapsed={false} />
                                </div>
                            </SheetContent>
                        </Sheet>
                        <img src="/logo.png" alt="Logo" className="h-5 w-auto md:hidden" />
                    </div>

                    {/* Desktop Search / Actions */}
                    <div className="hidden md:flex items-center gap-4 flex-1 max-w-xl mx-4">
                        <div className="relative w-full max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                                placeholder="Search people, opportunities..."
                                className="pl-10 bg-muted/30 border-border focus:bg-background transition-all rounded-lg h-9"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-3 ml-auto">
                        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 border-2 border-background"></span>
                        </Button>
                        <Separator orientation="vertical" className="h-6 mx-1" />
                        <Button size="sm" className="hidden md:flex gap-2 rounded-lg font-medium shadow-lg shadow-primary/20">
                            <Plus size={16} />
                            <span>New Person</span>
                        </Button>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8 scroll-smooth">
                    <div className="max-w-7xl mx-auto space-y-8 pb-20 animate-in slide-in-from-bottom-4 duration-500">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
