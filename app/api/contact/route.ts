import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, type, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    /*
     * Uncomment ONE of the following integrations:
     *
     * ── OPTION A: Resend (recommended) ───────────────────────────
     * 1. npm install resend
     * 2. Add RESEND_API_KEY to Vercel environment variables
     *
     * const { Resend } = await import('resend')
     * const resend = new Resend(process.env.RESEND_API_KEY)
     * await resend.emails.send({
     *   from: 'Website <noreply@igorsoccercoach.com>',
     *   to: ['igor@igorsoccercoach.com'],
     *   replyTo: email,
     *   subject: `New enquiry from ${name} (${type})`,
     *   html: `<h2>New Contact Submission</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Type:</strong> ${type}</p><p>${message}</p>`,
     * })
     *
     * ── OPTION B: Formspree ───────────────────────────────────────
     * 1. Create form at formspree.io → copy endpoint URL
     * 2. Add FORMSPREE_URL to Vercel environment variables
     *
     * const r = await fetch(process.env.FORMSPREE_URL!, {
     *   method: 'POST',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify({ name, email, _replyto: email, type, message }),
     * })
     * if (!r.ok) throw new Error('Formspree error')
     */

    // Dev fallback
    console.log('Contact submission:', { name, email, type, message })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
