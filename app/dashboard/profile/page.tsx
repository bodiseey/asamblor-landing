"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TeamManagement } from "@/components/dashboard/team-management";
import { toast } from "sonner";
import { Loader2, Upload, User, Building2, Lock, Globe } from "lucide-react";

// Country list
const COUNTRIES = [
    "United States", "Canada", "Mexico", "United Kingdom", "Australia",
    "Germany", "France", "Spain", "Italy", "Netherlands", "Belgium",
    "Switzerland", "Austria", "Poland", "Czech Republic", "Other"
];

// US States
const US_STATES = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York",
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
    "West Virginia", "Wisconsin", "Wyoming"
];

// Canadian Provinces
const CANADIAN_PROVINCES = [
    "Alberta", "British Columbia", "Manitoba", "New Brunswick",
    "Newfoundland and Labrador", "Nova Scotia", "Ontario",
    "Prince Edward Island", "Quebec", "Saskatchewan"
];

interface ProfileData {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    avatar_url: string | null;
    tenant_id: string;
}

interface TenantData {
    name: string;
    email: string;
    phone: string;
    website: string;
    address: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
}

export default function ProfilePage() {
    const [profile, setProfile] = useState<ProfileData | null>(null);
    const [tenant, setTenant] = useState<TenantData | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [changingPassword, setChangingPassword] = useState(false);

    // Personal form states
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

    // Company form states
    const [companyName, setCompanyName] = useState("");
    const [companyEmail, setCompanyEmail] = useState("");
    const [companyPhone, setCompanyPhone] = useState("");
    const [companyWebsite, setCompanyWebsite] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    const [companyCity, setCompanyCity] = useState("");
    const [companyState, setCompanyState] = useState("");
    const [companyPostalCode, setCompanyPostalCode] = useState("");
    const [companyCountry, setCompanyCountry] = useState("United States");

    // Password form states
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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

        // Get profile
        const { data: profileData } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();

        if (profileData) {
            const data: ProfileData = {
                id: user.id,
                email: user.email || '',
                first_name: profileData.first_name || '',
                last_name: profileData.last_name || '',
                phone: profileData.phone || '',
                avatar_url: profileData.avatar_url,
                tenant_id: profileData.tenant_id,
            };

            setProfile(data);
            setFirstName(data.first_name);
            setLastName(data.last_name);
            setPhone(data.phone);
            setAvatarUrl(data.avatar_url);

            // Get tenant
            const { data: tenantData } = await supabase
                .from('tenants')
                .select('*')
                .eq('id', profileData.tenant_id)
                .single();

            if (tenantData) {
                const tenant: TenantData = {
                    name: tenantData.name || '',
                    email: tenantData.email || '',
                    phone: tenantData.phone || '',
                    website: tenantData.website || '',
                    address: tenantData.address || '',
                    city: tenantData.city || '',
                    state: tenantData.state || '',
                    postal_code: tenantData.postal_code || '',
                    country: tenantData.country || 'United States',
                };

                setTenant(tenant);
                setCompanyName(tenant.name);
                setCompanyEmail(tenant.email);
                setCompanyPhone(tenant.phone);
                setCompanyWebsite(tenant.website);
                setCompanyAddress(tenant.address);
                setCompanyCity(tenant.city);
                setCompanyState(tenant.state);
                setCompanyPostalCode(tenant.postal_code);
                setCompanyCountry(tenant.country);
            }
        }

        setLoading(false);
    }

    async function handleSavePersonal() {
        if (!profile) return;

        setSaving(true);
        const supabase = createClient();

        try {
            const { error } = await supabase
                .from('profiles')
                .update({
                    first_name: firstName,
                    last_name: lastName,
                    full_name: `${firstName} ${lastName}`.trim(),
                    phone: phone,
                    avatar_url: avatarUrl,
                })
                .eq('id', profile.id);

            if (error) throw error;

            toast.success('Personal information updated successfully!');
            await loadProfile();
            // Trigger instant update for other components (like sidebar)
            window.dispatchEvent(new Event('profile-updated'));
        } catch (error: any) {
            console.error('Error updating profile:', error);
            toast.error(error.message || 'Failed to update profile');
        } finally {
            setSaving(false);
        }
    }

    async function handleSaveCompany() {
        if (!profile) return;

        setSaving(true);
        const supabase = createClient();

        try {
            const { error } = await supabase
                .from('tenants')
                .update({
                    name: companyName,
                    email: companyEmail,
                    phone: companyPhone,
                    website: companyWebsite,
                    address: companyAddress,
                    city: companyCity,
                    state: companyState,
                    postal_code: companyPostalCode,
                    country: companyCountry,
                })
                .eq('id', profile.tenant_id);

            if (error) throw error;

            toast.success('Company information updated successfully!');
            await loadProfile();
            // Trigger instant update for other components (like sidebar)
            window.dispatchEvent(new Event('profile-updated'));
        } catch (error: any) {
            console.error('Error updating company:', error);
            toast.error(error.message || 'Failed to update company');
        } finally {
            setSaving(false);
        }
    }

    async function handleChangePassword() {
        if (newPassword !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        if (newPassword.length < 6) {
            toast.error('Password must be at least 6 characters');
            return;
        }

        setChangingPassword(true);
        const supabase = createClient();

        try {
            const { error } = await supabase.auth.updateUser({
                password: newPassword
            });

            if (error) throw error;

            toast.success('Password changed successfully!');
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        } catch (error: any) {
            console.error('Error changing password:', error);
            toast.error(error.message || 'Failed to change password');
        } finally {
            setChangingPassword(false);
        }
    }

    async function handleAvatarUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file || !profile) return;

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
            const fileExt = file.name.split('.').pop();
            const fileName = `${profile.id}-${Date.now()}.${fileExt}`;
            const filePath = `avatars/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('avatars')
                .upload(filePath, file, { upsert: true });

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('avatars')
                .getPublicUrl(filePath);

            setAvatarUrl(publicUrl);
            toast.success('Avatar uploaded successfully!');
            // Trigger instant update for other components (like sidebar)
            window.dispatchEvent(new Event('profile-updated'));
        } catch (error: any) {
            console.error('Error uploading avatar:', error);
            toast.error(error.message || 'Failed to upload avatar');
        } finally {
            setUploading(false);
        }
    }

    function getInitials(firstName: string, lastName: string): string {
        if (firstName && lastName) {
            return `${firstName[0]}${lastName[0]}`.toUpperCase();
        }
        if (firstName) return firstName.substring(0, 2).toUpperCase();
        return '?';
    }

    function getRegions() {
        if (companyCountry === 'United States') return US_STATES;
        if (companyCountry === 'Canada') return CANADIAN_PROVINCES;
        return [];
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

            <Tabs defaultValue="personal" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4 max-w-[800px]">
                    <TabsTrigger value="personal">Personal</TabsTrigger>
                    <TabsTrigger value="company">Company</TabsTrigger>
                    <TabsTrigger value="team">My Team</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                </TabsList>

                {/* Personal Information Tab */}
                <TabsContent value="personal" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <User className="h-5 w-5 text-primary" />
                                <CardTitle>Personal Information</CardTitle>
                            </div>
                            <CardDescription>
                                Update your personal details and profile picture
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Avatar Upload */}
                            <div className="flex flex-col items-center gap-4">
                                <Avatar className="h-24 w-24 border-2 border-border">
                                    {avatarUrl && <AvatarImage src={avatarUrl} alt={`${firstName} ${lastName}`} />}
                                    <AvatarFallback className="bg-primary/10 text-primary text-2xl font-semibold">
                                        {getInitials(firstName, lastName)}
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

                            <div className="grid gap-4 md:grid-cols-2">
                                {/* First Name */}
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name *</Label>
                                    <Input
                                        id="firstName"
                                        type="text"
                                        placeholder="John"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name *</Label>
                                    <Input
                                        id="lastName"
                                        type="text"
                                        placeholder="Doe"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>

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

                            {/* Phone */}
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="+1 (555) 123-4567"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>

                            <div className="flex justify-end">
                                <Button
                                    onClick={handleSavePersonal}
                                    disabled={saving}
                                    size="lg"
                                >
                                    {saving ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Saving...
                                        </>
                                    ) : (
                                        'Save Personal Info'
                                    )}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Company Settings Tab */}
                <TabsContent value="company" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <Building2 className="h-5 w-5 text-primary" />
                                <CardTitle>Company Settings</CardTitle>
                            </div>
                            <CardDescription>
                                Manage your company information and location
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Company Name */}
                            <div className="space-y-2">
                                <Label htmlFor="companyName">Company Name *</Label>
                                <Input
                                    id="companyName"
                                    type="text"
                                    placeholder="Acme Trucking Inc."
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                />
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                {/* Company Email */}
                                <div className="space-y-2">
                                    <Label htmlFor="companyEmail">Company Email</Label>
                                    <Input
                                        id="companyEmail"
                                        type="email"
                                        placeholder="info@company.com"
                                        value={companyEmail}
                                        onChange={(e) => setCompanyEmail(e.target.value)}
                                    />
                                </div>

                                {/* Company Phone */}
                                <div className="space-y-2">
                                    <Label htmlFor="companyPhone">Company Phone</Label>
                                    <Input
                                        id="companyPhone"
                                        type="tel"
                                        placeholder="+1 (555) 987-6543"
                                        value={companyPhone}
                                        onChange={(e) => setCompanyPhone(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Company Website */}
                            <div className="space-y-2">
                                <Label htmlFor="companyWebsite">Company Website</Label>
                                <Input
                                    id="companyWebsite"
                                    type="url"
                                    placeholder="https://www.company.com"
                                    value={companyWebsite}
                                    onChange={(e) => setCompanyWebsite(e.target.value)}
                                />
                            </div>

                            <Separator />

                            {/* Address */}
                            <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                <Input
                                    id="address"
                                    type="text"
                                    placeholder="123 Main Street"
                                    value={companyAddress}
                                    onChange={(e) => setCompanyAddress(e.target.value)}
                                />
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                {/* City */}
                                <div className="space-y-2">
                                    <Label htmlFor="city">City</Label>
                                    <Input
                                        id="city"
                                        type="text"
                                        placeholder="Los Angeles"
                                        value={companyCity}
                                        onChange={(e) => setCompanyCity(e.target.value)}
                                    />
                                </div>

                                {/* Postal Code */}
                                <div className="space-y-2">
                                    <Label htmlFor="postalCode">Zip / Postal Code</Label>
                                    <Input
                                        id="postalCode"
                                        type="text"
                                        placeholder="90001"
                                        value={companyPostalCode}
                                        onChange={(e) => setCompanyPostalCode(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                {/* Country */}
                                <div className="space-y-2">
                                    <Label htmlFor="country">Country</Label>
                                    <Select value={companyCountry} onValueChange={setCompanyCountry}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select country" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {COUNTRIES.map((country) => (
                                                <SelectItem key={country} value={country}>
                                                    {country}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* State/Province */}
                                <div className="space-y-2">
                                    <Label htmlFor="state">State / Province / Region</Label>
                                    {getRegions().length > 0 ? (
                                        <Select value={companyState} onValueChange={setCompanyState}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select state/province" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {getRegions().map((region) => (
                                                    <SelectItem key={region} value={region}>
                                                        {region}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    ) : (
                                        <Input
                                            id="state"
                                            type="text"
                                            placeholder="Enter state/province/region"
                                            value={companyState}
                                            onChange={(e) => setCompanyState(e.target.value)}
                                        />
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <Button
                                    onClick={handleSaveCompany}
                                    disabled={saving}
                                    size="lg"
                                >
                                    {saving ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Saving...
                                        </>
                                    ) : (
                                        'Save Company Info'
                                    )}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Team Management Tab */}
                <TabsContent value="team" className="space-y-6">
                    {profile && <TeamManagement tenantId={profile.tenant_id} currentUserId={profile.id} />}
                </TabsContent>

                {/* Security Tab */}
                <TabsContent value="security" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <Lock className="h-5 w-5 text-primary" />
                                <CardTitle>Change Password</CardTitle>
                            </div>
                            <CardDescription>
                                Update your password to keep your account secure
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Current Password */}
                            <div className="space-y-2">
                                <Label htmlFor="currentPassword">Current Password</Label>
                                <Input
                                    id="currentPassword"
                                    type="password"
                                    placeholder="Enter current password"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                />
                            </div>

                            <Separator />

                            {/* New Password */}
                            <div className="space-y-2">
                                <Label htmlFor="newPassword">New Password</Label>
                                <Input
                                    id="newPassword"
                                    type="password"
                                    placeholder="Enter new password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                                <p className="text-xs text-muted-foreground">
                                    Password must be at least 6 characters
                                </p>
                            </div>

                            {/* Confirm Password */}
                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirm Password</Label>
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Confirm new password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>

                            <div className="flex justify-end">
                                <Button
                                    onClick={handleChangePassword}
                                    disabled={changingPassword || !newPassword || !confirmPassword}
                                    size="lg"
                                >
                                    {changingPassword ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Changing...
                                        </>
                                    ) : (
                                        'Change Password'
                                    )}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
