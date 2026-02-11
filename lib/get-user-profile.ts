import { createClient } from '@/lib/supabase/server'

export interface UserProfile {
    id: string
    email: string
    full_name: string
    role: string
    tenant_id: string
    tenant_name: string
}

export async function getUserProfile(): Promise<UserProfile | null> {
    const supabase = createClient()

    // Get the current user
    const { data: { user }, error: userError } = await supabase.auth.getUser()

    if (userError || !user) {
        return null
    }

    // Get the user's profile with tenant information
    const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select(`
            id,
            full_name,
            role,
            tenant_id,
            tenants (
                name
            )
        `)
        .eq('id', user.id)
        .single()

    if (profileError || !profile) {
        return null
    }

    return {
        id: user.id,
        email: user.email || '',
        full_name: profile.full_name || user.email?.split('@')[0] || 'User',
        role: profile.role,
        tenant_id: profile.tenant_id,
        tenant_name: (profile.tenants as any)?.name || 'My Company',
    }
}

export function getInitials(name: string): string {
    const parts = name.trim().split(' ')
    if (parts.length >= 2) {
        return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
    }
    return name.substring(0, 2).toUpperCase()
}
