import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import { pageMeta } from '@/lib/metadata'
import { breadcrumb } from '@/lib/structured-data'

export const metadata: Metadata = pageMeta({
  title: 'Contact | Book a Soccer Coaching Session | Weston FL',
  description: 'Book a soccer coaching session with Igor Kasianenko in Weston, FL. Private sessions, group training, and academy partnerships. ABP™ Methodology. Contact today.',
  alternates: { canonical: 'https://www.igorsoccercoach.com/contact' },
  openGraph: { url: 'https://www.igorsoccercoach.com/contact', title: 'Book a Session | Igor Kasianenko | Weston FL' },
})

const CREDS = ['395+ Professional Matches', 'UEFA Europa League', '5× National Champion', 'ABP™ Methodology Creator', 'Weston, FL — Active']

export default function Contact() {
  const bc = breadcrumb([{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }])
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />

      {/* Hero */}
      <section style={{ padding: 'clamp(7rem,15vw,10rem) clamp(1.25rem,5vw,3rem) clamp(4rem,8vw,6rem)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="t-label gold anim-fade-in d1" style={{ marginBottom: '1.5rem' }}>Get in Touch</p>
          <h1 className="t-hero anim-fade-up d2">Let&apos;s Talk<br /><span style={{ color: 'var(--chalk-m)' }}>Football.</span></h1>
          <p className="anim-fade-up d3" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--chalk-m)', maxWidth: '520px', marginTop: '2rem', lineHeight: 1.7 }}>
            Whether you&apos;re a player, a parent, or an academy director — reach out. Igor personally responds to every enquiry.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(3rem,8vw,6rem)', alignItems: 'start' }}>

          {/* ContactForm is a 'use client' component */}
          <Reveal><ContactForm /></Reveal>

          {/* Info panel — pure Server Component, no event handlers */}
          <div>
            <Reveal delay={100}>
              <div style={{ marginBottom: '3rem' }}>
                <p className="t-label chalk-d" style={{ marginBottom: '1.25rem' }}>Location</p>
                <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 500, fontSize: '1.0625rem', marginBottom: '0.375rem' }}>Weston, Florida</p>
                <p style={{ fontSize: '0.9375rem', color: 'var(--chalk-m)' }}>Broward County · South Florida</p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div style={{ marginBottom: '3rem' }}>
                <p className="t-label chalk-d" style={{ marginBottom: '1.25rem' }}>Email</p>
                {/* h-gold-bright = CSS-only hover, no JS handler */}
                <a href="mailto:igor@igorsoccercoach.com" className="h-gold-bright"
                  style={{ fontFamily: "'Syne', sans-serif", fontWeight: 500, fontSize: '1.0625rem' }}>
                  igor@igorsoccercoach.com
                </a>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div style={{ marginBottom: '3rem' }}>
                <p className="t-label chalk-d" style={{ marginBottom: '1.25rem' }}>Response Time</p>
                <p style={{ fontSize: '0.9375rem', color: 'var(--chalk-m)', lineHeight: 1.7 }}>
                  Igor personally reads and responds to every message — typically within 24 hours. No automated replies.
                </p>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div style={{ border: '1px solid var(--border)', padding: '1.5rem' }}>
                <p className="t-label gold" style={{ marginBottom: '1rem' }}>Credentials</p>
                {CREDS.map(c => (
                  <div key={c} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--chalk-m)', paddingBottom: '0.5rem', marginBottom: '0.5rem', borderBottom: '1px solid var(--border)' }}>
                    <span className="gold">—</span>{c}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
