import { NextResponse } from 'next/server';
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase Admin Client (Bypass RLS for webhooks)
// Initialize Supabase Admin Client (Bypass RLS for webhooks)
// Initialize Supabase Admin Client (Bypass RLS for webhooks)


export async function POST(req: Request) {
    try {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !supabaseKey) {
            console.error('Supabase URL or Key is missing in environment variables.');
            return NextResponse.json({ error: 'Configuration Error' }, { status: 500 });
        }

        const supabase = createClient(supabaseUrl, supabaseKey);

        const payload = await req.json();

        // Validation: Verify the webhook secret (Optional but recommended)
        // const signature = req.headers.get('x-instantly-signature');

        // Extract Tenant ID from custom variable sent by Instantly
        // Assuming Instantly sends it as `custom_variables: { tenant_id: "..." }`
        const tenantId = payload.custom_variables?.tenant_id;

        if (!tenantId) {
            return NextResponse.json({ error: 'Missing tenant_id' }, { status: 400 });
        }

        // 1. Handle Company Lookup/Creation (Twenty Style)
        let companyId = null;
        if (payload.lead_company_name) {
            const { data: existingCompany } = await supabase
                .from('companies')
                .select('id')
                .eq('tenant_id', tenantId)
                .eq('name', payload.lead_company_name)
                .maybeSingle();

            if (existingCompany) {
                companyId = existingCompany.id;
            } else {
                const { data: newCompany, error: companyError } = await supabase
                    .from('companies')
                    .insert({
                        tenant_id: tenantId,
                        name: payload.lead_company_name,
                        domain_name: payload.lead_website || null
                    })
                    .select('id')
                    .single();

                if (!companyError) companyId = newCompany.id;
            }
        }

        // 2. Map payload to 'People' (Standard Twenty Object)
        const personData = {
            tenant_id: tenantId,
            company_id: companyId,
            email: payload.lead_email,
            first_name: payload.lead_first_name,
            last_name: payload.lead_last_name,
            phone: payload.lead_phone,
            job_title: payload.lead_job_title || null,
            linkedin_url: payload.lead_linkedin_url || null,
            source: 'Instantly',
            status: 'Interested',
            last_activity_at: new Date().toISOString()
        };

        // 3. Upsert Person
        const { data: person, error: personError } = await supabase
            .from('people')
            .upsert(personData, { onConflict: 'email,tenant_id' })
            .select('id')
            .single();

        if (personError) {
            console.error('Supabase Person Error:', personError);
            return NextResponse.json({ error: 'Database error' }, { status: 500 });
        }

        // 4. Create initial "Activity" record (Twenty Logic)
        const { error: activityError } = await supabase
            .from('activities')
            .insert({
                tenant_id: tenantId,
                person_id: person.id,
                type: 'email',
                direction: 'inbound',
                title: 'Instantly.ai Outreach Match',
                content: `Person marked as interested in campaign: ${payload.campaign_name}. Reply text: ${payload.reply_text || 'None'}`
            });

        if (activityError) {
            console.error('Activity Logging Error:', activityError);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Webhook Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
