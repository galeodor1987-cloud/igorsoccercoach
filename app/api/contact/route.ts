import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, type, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    /*
     * ─────────────────────────────────────────────────────────────
     * Choose ONE of these integrations and uncomment it:
     *
     * OPTION A — Resend (recommended for Next.js/Vercel)
     *   1. npm install resend
     *   2. Add RESEND_API_KEY to .env.local
     *   3. Uncomment the block below
     *
     * OPTION B — Formspree
     *   1. Create account at formspree.io
     *   2. Add FORMSPREE_ENDPOINT to .env.local
     *   3. Uncomment the block below
     * ─────────────────────────────────────────────────────────────
     */

    // ── OPTION A: Resend ──────────────────────────────────────────
    // const { Resend } = await import('resend')
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'Website <noreply@igorsoccercoach.com>',
    //   to: ['igor@igorsoccercoach.com'],
    //   replyTo: email,
    //   subject: `New enquiry from ${name} (${type})`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Type:</strong> ${type}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, '<br>')}</p>
    //   `,
    // })

    // ── OPTION B: Formspree ───────────────────────────────────────
    // const response = await fetch(process.env.FORMSPREE_ENDPOINT!, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email, _replyto: email, type, message }),
    // })
    // if (!response.ok) throw new Error('Formspree error')

    // ── DEV fallback: log to console ─────────────────────────────
    console.log('Contact form submission:', { name, email, type, message })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
