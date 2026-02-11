"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Loader2, Upload, User, Building2 } from "lucide-react";

interface ProfileData {
    id: string;
    email: string;
    full_name: string;
    avatar_url: string | null;
    tenant_id: string;
    tenant_name: string;
}

export default function ProfilePage() {
    const [profile, setProfile] = useState<ProfileData | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(false);

    // Form states
    const [fullName, setFullName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

    useEffect(() => {
        loadProfile();
    }, []);

    async function loadProfile() {
        const supabase = createClient();

        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            setLoading(false);
            return;
        }

        const { data: profileData } = await supabase
            .from('profiles')
            .select(`
                id,
                full_name,
                avatar_url,
                tenant_id,
                tenants (
                    name
                )
            `)
            .eq('id', user.id)
            .single();

        if (profileData) {
            const data: ProfileData = {
                id: user.id,
                email: user.email || '',
                full_name: profileData.full_name || '',
                avatar_url: profileData.avatar_url,
                tenant_id: profileData.tenant_id,
                tenant_name: (profileData.tenants as any)?.name || '',
            };

            setProfile(data);
            setFullName(data.full_name);
            setCompanyName(data.tenant_name);
            setAvatarUrl(data.avatar_url);
        }

        setLoading(false);
    }

    async function handleSaveProfile() {
        if (!profile) return;

        setSaving(true);
        const supabase = createClient();

        try {
            console.log('Updating profile...', { fullName, avatarUrl });

            // Update profile
            const { data: profileData, error: profileError } = await supabase
                .from('profiles')
                .update({
                    full_name: fullName,
                    avatar_url: avatarUrl,
                })
                .eq('id', profile.id)
                .select();

            if (profileError) {
                console.error('Profile update error:', profileError);
                throw new Error(`Profile update failed: ${profileError.message}`);
            }

            console.log('Profile updated:', profileData);
            console.log('Updating tenant...', { companyName });

            // Update tenant
            const { data: tenantData, error: tenantError } = await supabase
                .from('tenants')
                .update({
                    name: companyName,
                })
                .eq('id', profile.tenant_id)
                .select();

            if (tenantError) {
                console.error('Tenant update error:', tenantError);
                throw new Error(`Company update failed: ${tenantError.message}`);
            }

            console.log('Tenant updated:', tenantData);

            toast.success('Profile updated successfully!');
            await loadProfile(); // Reload to get fresh data
        } catch (error: any) {
            console.error('Error updating profile:', error);
            toast.error(error.message || 'Failed to update profile');
        } finally {
            setSaving(false);
        }
    }

    async function handleAvatarUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file || !profile) return;

        // Validate file
        if (!file.type.startsWith('image/')) {
            toast.error('Please upload an image file');
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            toast.error('Image must be less than 2MB');
            return;
        }

        setUploading(true);
        const supabase = createClient();

        try {
            // Upload to Supabase Storage
            const fileExt = file.name.split('.').pop();
            const fileName = `${profile.id}-${Date.now()}.${fileExt}`;
            const filePath = `avatars/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('avatars')
                .upload(filePath, file, { upsert: true });

            if (uploadError) throw uploadError;

            // Get public URL
            const { data: { publicUrl } } = supabase.storage
                .from('avatars')
                .getPublicUrl(filePath);

            setAvatarUrl(publicUrl);
            toast.success('Avatar uploaded successfully!');
        } catch (error: any) {
            console.error('Error uploading avatar:', error);
            toast.error(error.message || 'Failed to upload avatar');
        } finally {
            setUploading(false);
        }
    }

    function getInitials(name: string): string {
        if (!name) return '?';
        const parts = name.trim().split(' ');
        if (parts.length >= 2) {
            return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
        }
        return name.substring(0, 2).toUpperCase();
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    if (!profile) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <p className="text-muted-foreground">Failed to load profile</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Profile Settings</h1>
                <p className="text-muted-foreground mt-2">
                    Manage your personal information and company details
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Personal Profile */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <User className="h-5 w-5 text-primary" />
                            <CardTitle>Personal Profile</CardTitle>
                        </div>
                        <CardDescription>
                            Update your personal information and avatar
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Avatar Upload */}
                        <div className="flex flex-col items-center gap-4">
                            <Avatar className="h-24 w-24 border-2 border-border">
                                {avatarUrl ? (
                                    <AvatarImage src={avatarUrl} alt={fullName} />
                                ) : null}
                                <AvatarFallback className="bg-primary/10 text-primary text-2xl font-semibold">
                                    {getInitials(fullName || profile.email)}
                                </AvatarFallback>
                            </Avatar>

                            <div className="flex flex-col items-center gap-2">
                                <Label htmlFor="avatar-upload" className="cursor-pointer">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors">
                                        {uploading ? (
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                        ) : (
                                            <Upload className="h-4 w-4" />
                                        )}
                                        <span className="text-sm font-medium">
                                            {uploading ? 'Uploading...' : 'Upload Avatar'}
                                        </span>
                                    </div>
                                </Label>
                                <input
                                    id="avatar-upload"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleAvatarUpload}
                                    disabled={uploading}
                                />
                                <p className="text-xs text-muted-foreground">
                                    JPG, PNG or GIF. Max 2MB.
                                </p>
                            </div>
                        </div>

                        <Separator />

                        {/* Email (read-only) */}
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={profile.email}
                                disabled
                                className="bg-muted"
                            />
                            <p className="text-xs text-muted-foreground">
                                Email cannot be changed
                            </p>
                        </div>

                        {/* Full Name */}
                        <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name</Label>
                            <Input
                                id="fullName"
                                type="text"
                                placeholder="Enter your full name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Company Profile */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <Building2 className="h-5 w-5 text-primary" />
                            <CardTitle>Company Profile</CardTitle>
                        </div>
                        <CardDescription>
                            Update your company information
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Company Name */}
                        <div className="space-y-2">
                            <Label htmlFor="companyName">Company Name</Label>
                            <Input
                                id="companyName"
                                type="text"
                                placeholder="Enter company name"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </div>

                        {/* Tenant ID (read-only) */}
                        <div className="space-y-2">
                            <Label htmlFor="tenantId">Tenant ID</Label>
                            <Input
                                id="tenantId"
                                type="text"
                                value={profile.tenant_id}
                                disabled
                                className="bg-muted font-mono text-xs"
                            />
                            <p className="text-xs text-muted-foreground">
                                Your unique company identifier
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
                <Button
                    onClick={handleSaveProfile}
                    disabled={saving}
                    size="lg"
                    className="min-w-[150px]"
                >
                    {saving ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving...
                        </>
                    ) : (
                        'Save Changes'
                    )}
                </Button>
            </div>
        </div>
    );
}
