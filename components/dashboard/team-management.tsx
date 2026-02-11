"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Loader2, UserPlus, Users as UsersIcon, Mail, Trash2, Edit } from "lucide-react";

interface TeamMember {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    avatar_url: string | null;
    role: string;
    created_at: string;
}

export function TeamManagement({ tenantId, currentUserId }: { tenantId: string; currentUserId: string }) {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);
    const [inviting, setInviting] = useState(false);
    const [inviteDialogOpen, setInviteDialogOpen] = useState(false);

    // Invite form
    const [inviteEmail, setInviteEmail] = useState("");
    const [inviteRole, setInviteRole] = useState("member");

    useEffect(() => {
        loadTeamMembers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tenantId]);

    async function loadTeamMembers() {
        const supabase = createClient();

        if (!tenantId) {
            setLoading(false);
            return;
        }

        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('tenant_id', tenantId)
            .order('created_at', { ascending: true });

        if (error) {
            console.error('Error loading team members:', error);
            toast.error('Failed to load team members');
        } else {
            setTeamMembers(data || []);
        }

        setLoading(false);
    }

    async function handleInviteTeamMember() {
        if (!inviteEmail) {
            toast.error('Please enter an email address');
            return;
        }

        setInviting(true);

        try {
            const { inviteTeamMember } = await import('@/app/dashboard/profile/actions');
            const result = await inviteTeamMember(inviteEmail, inviteRole, tenantId);

            if (!result.success) {
                throw new Error('Invitation failed');
            }

            toast.success(`Invitation sent to ${inviteEmail}!`);
            setInviteEmail('');
            setInviteRole('member');
            setInviteDialogOpen(false);
            await loadTeamMembers();
        } catch (error: any) {
            console.error('Error inviting team member:', error);
            toast.error(error.message || 'Failed to invite team member');
        } finally {
            setInviting(false);
        }
    }

    async function handleRemoveTeamMember(memberId: string) {
        if (memberId === currentUserId) {
            toast.error('You cannot remove yourself from the team');
            return;
        }

        if (!confirm('Are you sure you want to remove this team member?')) {
            return;
        }

        const supabase = createClient();

        try {
            // Delete the profile (this will cascade delete related data)
            const { error } = await supabase
                .from('profiles')
                .delete()
                .eq('id', memberId);

            if (error) throw error;

            toast.success('Team member removed successfully');
            await loadTeamMembers();
        } catch (error: any) {
            console.error('Error removing team member:', error);
            toast.error(error.message || 'Failed to remove team member');
        }
    }

    async function handleUpdateRole(memberId: string, newRole: string) {
        const supabase = createClient();

        try {
            const { error } = await supabase
                .from('profiles')
                .update({ role: newRole })
                .eq('id', memberId);

            if (error) throw error;

            toast.success('Role updated successfully');
            await loadTeamMembers();
        } catch (error: any) {
            console.error('Error updating role:', error);
            toast.error(error.message || 'Failed to update role');
        }
    }

    function getInitials(firstName: string | null, lastName: string | null, email: string | null): string {
        if (firstName && lastName) {
            return `${firstName[0]}${lastName[0]}`.toUpperCase();
        }
        if (firstName && firstName.length >= 2) return firstName.substring(0, 2).toUpperCase();
        if (firstName && firstName.length === 1) return firstName[0].toUpperCase();
        if (email && email.length >= 2) return email.substring(0, 2).toUpperCase();
        if (email && email.length === 1) return email[0].toUpperCase();
        return "??";
    }

    function getRoleBadgeColor(role: string) {
        switch (role) {
            case 'owner':
                return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
            case 'admin':
                return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
            case 'member':
                return 'bg-green-500/10 text-green-500 border-green-500/20';
            default:
                return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[200px]">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <UsersIcon className="h-5 w-5 text-primary" />
                        <CardTitle>Team Members</CardTitle>
                    </div>
                    <Dialog open={inviteDialogOpen} onOpenChange={setInviteDialogOpen}>
                        <DialogTrigger asChild>
                            <Button size="sm">
                                <UserPlus className="h-4 w-4 mr-2" />
                                Invite Member
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Invite Team Member</DialogTitle>
                                <DialogDescription>
                                    Send an invitation to join your team. They&apos;ll receive an email with login instructions.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 mt-4">
                                <div className="space-y-2">
                                    <Label htmlFor="inviteEmail">Email Address</Label>
                                    <Input
                                        id="inviteEmail"
                                        type="email"
                                        placeholder="colleague@example.com"
                                        value={inviteEmail}
                                        onChange={(e) => setInviteEmail(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="inviteRole">Role</Label>
                                    <Select value={inviteRole} onValueChange={setInviteRole}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="member">Member</SelectItem>
                                            <SelectItem value="admin">Admin</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button
                                    onClick={handleInviteTeamMember}
                                    disabled={inviting || !inviteEmail}
                                    className="w-full"
                                >
                                    {inviting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending Invitation...
                                        </>
                                    ) : (
                                        <>
                                            <Mail className="mr-2 h-4 w-4" />
                                            Send Invitation
                                        </>
                                    )}
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
                <CardDescription>
                    Manage your team members and their roles ({teamMembers.length} {teamMembers.length === 1 ? 'member' : 'members'})
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Member</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {teamMembers.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                                    No team members yet. Invite someone to get started!
                                </TableCell>
                            </TableRow>
                        ) : (
                            teamMembers.map((member) => (
                                <TableRow key={member.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-8 w-8">
                                                {member.avatar_url && <AvatarImage src={member.avatar_url} />}
                                                <AvatarFallback className="bg-primary/10 text-primary text-xs">
                                                    {getInitials(member.first_name, member.last_name, member.email)}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-medium">
                                                    {member.first_name && member.last_name
                                                        ? `${member.first_name} ${member.last_name}`
                                                        : (member.email ? member.email.split('@')[0] : 'Unknown Member')}
                                                </p>
                                                {member.id === currentUserId && (
                                                    <p className="text-xs text-muted-foreground">(You)</p>
                                                )}
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-sm text-muted-foreground">
                                        {member.email}
                                    </TableCell>
                                    <TableCell className="text-sm text-muted-foreground">
                                        {member.phone || '—'}
                                    </TableCell>
                                    <TableCell>
                                        {member.id === currentUserId ? (
                                            <Badge className={getRoleBadgeColor(member.role)}>
                                                {member.role}
                                            </Badge>
                                        ) : (
                                            <Select
                                                value={member.role}
                                                onValueChange={(value) => handleUpdateRole(member.id, value)}
                                            >
                                                <SelectTrigger className="w-[120px] h-8">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="member">Member</SelectItem>
                                                    <SelectItem value="admin">Admin</SelectItem>
                                                    <SelectItem value="owner">Owner</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {member.id !== currentUserId && (
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => handleRemoveTeamMember(member.id)}
                                                className="text-red-500 hover:text-red-600 hover:bg-red-50"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
