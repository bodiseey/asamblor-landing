import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function GET(request: Request) {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (code) {
        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            {
                cookies: {
                    getAll() {
                        return request.headers.get('cookie')
                            ?.split(';')
                            .map((cookie) => {
                                const [name, value] = cookie.trim().split('=')
                                return { name, value }
                            }) || []
                    },
                    setAll(cookiesToSet) {
                        // No-op in Route Handlers
                    },
                },
            }
        )

        const { error } = await supabase.auth.exchangeCodeForSession(code)

        if (error) {
            console.error(error)
            return NextResponse.redirect(`${requestUrl.origin}/login?error=Could%20not%20authenticate`)
        }
    }

    // URL to redirect to after sign in process completes
    return NextResponse.redirect(`${requestUrl.origin}/dashboard`)
}
