import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  baker_type: z.enum(['home_baker', 'micro_bakery_owner', 'pastry_professional', 'bakery_team_lead', 'culinary_student']),
  experience_level: z.enum(['0_2_years', '3_5_years', '6_10_years', '10_plus_years']),
  top_challenge: z.string().min(10).max(1000),
  consent: z.literal('yes'),
  company_website: z.string().optional(),
  first_name: z.string().optional(),
  form_started_at: z.string().optional()
});

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const windowMs = 60_000;
  const max = 4;

  const entry = rateLimitStore.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (entry.count >= max) {
    return true;
  }

  entry.count += 1;
  rateLimitStore.set(ip, entry);
  return false;
}

function failedHumanTiming(formStartedAt?: string) {
  if (!formStartedAt) {
    return true;
  }

  const started = new Date(formStartedAt).getTime();
  if (Number.isNaN(started)) {
    return true;
  }

  const elapsed = Date.now() - started;
  return elapsed < 3_000 || elapsed > 86_400_000;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests. Please try again shortly.' }, { status: 429 });
    }

    const payload = schema.parse(await request.json());

    if (payload.company_website || payload.first_name || failedHumanTiming(payload.form_started_at)) {
      return NextResponse.json({ ok: true });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_WAITLIST_AUDIENCE_ID;

    if (!resendApiKey || !audienceId) {
      return NextResponse.json({ error: 'Waitlist service not configured.' }, { status: 500 });
    }

    const tags = [payload.baker_type, payload.experience_level, 'launch_waitlist'];
    const response = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: payload.email,
        unsubscribed: false,
        first_name: payload.baker_type.replaceAll('_', ' '),
        audience_id: audienceId,
        tags
      })
    });

    if (!response.ok && response.status !== 409) {
      throw new Error('Unable to store waitlist contact.');
    }

    const notesToEmail = process.env.WAITLIST_NOTES_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (notesToEmail && fromEmail) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [notesToEmail],
          subject: `Waitlist challenge: ${payload.email}`,
          text: [
            `Email: ${payload.email}`,
            `Baker type: ${payload.baker_type}`,
            `Experience level: ${payload.experience_level}`,
            `Top challenge: ${payload.top_challenge}`,
            `Consent: ${payload.consent}`
          ].join('\n')
        })
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Please provide valid waitlist details.' }, { status: 400 });
    }

    return NextResponse.json({ error: 'Unable to join waitlist right now.' }, { status: 500 });
  }
}
