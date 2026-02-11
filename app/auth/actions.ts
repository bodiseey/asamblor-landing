'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
    const supabase = createClient()

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        redirect('/login?error=Invalid%20credentials')
    }

    revalidatePath('/', 'layout')
    redirect('/dashboard')
}

export async function signup(formData: FormData) {
    const supabase = createClient()

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const companyName = formData.get('companyName') as string

    // 1. Sign up the user with metadata
    const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                company_name: companyName,
                full_name: email.split('@')[0], // Use email prefix as default name
            },
        },
    })

    if (authError) {
        console.error('Signup error:', authError)
        redirect('/register?error=' + encodeURIComponent(authError.message))
    }

    // Check if email confirmation is required
    if (authData.user && !authData.session) {
        // Email confirmation required
        redirect('/login?message=Check%20your%20email%20to%20confirm%20your%20account')
    }

    // If session exists, user is logged in (email confirmation disabled)
    revalidatePath('/', 'layout')
    redirect('/dashboard')
}

export async function signInWithGoogle() {
    const supabase = createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/callback`,
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
            },
        },
    })

    if (error) {
        redirect('/login?error=Google%20Login%20Failed')
    }

    if (data.url) {
        redirect(data.url)
    }
}

export async function logout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    redirect('/login')
}
