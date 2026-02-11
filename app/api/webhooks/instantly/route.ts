import { NextResponse } from 'next/server';
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase Admin Client (Bypass RLS for webhooks)
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
    try {
        const payload = await req.json();

        // Validation: Verify the webhook secret (Optional but recommended)
        // const signature = req.headers.get('x-instantly-signature');

        // Extract Tenant ID from custom variable sent by Instantly
        // Assuming Instantly sends it as `custom_variables: { tenant_id: "..." }`
        const tenantId = payload.custom_variables?.tenant_id;

        if (!tenantId) {
            return NextResponse.json({ error: 'Missing tenant_id' }, { status: 400 });
        }

        // Map Instantly payload to our Schema
        const newLead = {
            tenant_id: tenantId,
            email: payload.lead_email,
            first_name: payload.lead_first_name,
            last_name: payload.lead_last_name,
            phone: payload.lead_phone,
            company: payload.lead_company_name,
            source: 'Instantly',
            status: 'New', // Default status for new webhook leads
            notes: `Campaign: ${payload.campaign_name}\nReply: ${payload.reply_text || 'No reply text'}`
        };

        // Upsert into Supabase
        const { error } = await supabase
            .from('leads')
            .upsert(newLead, { onConflict: 'email, tenant_id' });

        if (error) {
            console.error('Supabase Error:', error);
            return NextResponse.json({ error: 'Database error' }, { status: 500 });
        }

        // Optional: Send notification (Telegram/Slack)
        // await sendTelegramNotification(newLead);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Webhook Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
