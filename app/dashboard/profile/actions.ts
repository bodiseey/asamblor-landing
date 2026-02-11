'use server'

import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'

export async function inviteTeamMember(email: string, role: string, tenantId: string) {
    // We need the service role key to use admin methods
    // However, usually we don't want to expose service role key to everything
    // For this specific app, we can use a server-side client with the service role

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

    if (!supabaseServiceRoleKey) {
        throw new Error('SUPABASE_SERVICE_ROLE_KEY is not configured')
    }

    // Initialize admin client
    const { createClient: createAdminClient } = await import('@supabase/supabase-js')
    const supabaseAdmin = createAdminClient(supabaseUrl, supabaseServiceRoleKey)

    // 1. Create the user
    const tempPassword = Math.random().toString(36).slice(-12) + 'A1!'

    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
        email,
        password: tempPassword,
        email_confirm: true,
        user_metadata: {
            tenant_id: tenantId,
            role: role,
        }
    })

    if (authError) {
        throw new Error(authError.message)
    }

    // 2. Ensure profile exists
    if (authData.user) {
        const { error: profileError } = await supabaseAdmin
            .from('profiles')
            .upsert({
                id: authData.user.id,
                tenant_id: tenantId,
                role: role,
                first_name: email.split('@')[0],
                full_name: email.split('@')[0],
            })

        if (profileError) {
            console.error('Profile creation error:', profileError)
        }
    }

    return { success: true, user: authData.user }
}
