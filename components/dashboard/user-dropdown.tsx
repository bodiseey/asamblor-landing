"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface UserProfile {
    email: string;
    full_name: string;
    tenant_name: string;
    initials: string;
    avatar_url: string | null;
}

export function UserDropdown({ isCollapsed }: { isCollapsed: boolean }) {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProfile() {
            const supabase = createClient();

            // Get current user
            const { data: { user } } = await supabase.auth.getUser();

            if (!user) {
                setLoading(false);
                return;
            }

            // Get profile with tenant
            const { data: profileData } = await supabase
                .from('profiles')
                .select(`
                    full_name,
                    avatar_url,
                    role,
                    tenants (
                        name
                    )
                `)
                .eq('id', user.id)
                .single();

            if (profileData) {
                const fullName = profileData.full_name || user.email?.split('@')[0] || 'User';
                const tenantName = (profileData.tenants as any)?.name || 'My Company';

                // Generate initials
                const parts = fullName.trim().split(' ');
                const initials = parts.length >= 2
                    ? `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
                    : fullName.substring(0, 2).toUpperCase();

                setProfile({
                    email: user.email || '',
                    full_name: fullName,
                    tenant_name: tenantName,
                    initials,
                    avatar_url: profileData.avatar_url || null,
                });
            }

            setLoading(false);
        }

        loadProfile();
    }, []);

    if (loading || !profile) {
        return (
            <div className={cn("flex items-center gap-3 p-2 rounded-lg", isCollapsed && "justify-center p-0")}>
                <Avatar className="h-9 w-9 border border-border">
                    <AvatarFallback>...</AvatarFallback>
                </Avatar>
            </div>
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className={cn("flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors w-full", isCollapsed && "justify-center p-0")}>
                    <Avatar className="h-9 w-9 border border-border">
                        {profile.avatar_url && <AvatarImage src={profile.avatar_url} alt={profile.full_name} />}
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {profile.initials}
                        </AvatarFallback>
                    </Avatar>
                    {!isCollapsed && (
                        <div className="flex-1 overflow-hidden text-left">
                            <p className="text-sm font-medium truncate">{profile.full_name}</p>
                            <p className="text-[10px] text-muted-foreground truncate uppercase tracking-wide">
                                {profile.tenant_name}
                            </p>
                        </div>
                    )}
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56" side="right" sideOffset={10}>
                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{profile.full_name}</p>
                        <p className="text-xs leading-none text-muted-foreground">{profile.email}</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/dashboard/profile">
                    <DropdownMenuItem className="cursor-pointer">
                        <Users className="mr-2 h-4 w-4" />
                        <span>My Profile</span>
                    </DropdownMenuItem>
                </Link>
                <Link href="/dashboard/settings">
                    <DropdownMenuItem className="cursor-pointer">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="text-red-500 focus:text-red-500 cursor-pointer"
                    onClick={async () => {
                        const { logout } = await import('@/app/auth/actions');
                        await logout();
                    }}
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
