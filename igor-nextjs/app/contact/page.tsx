import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata({
  title: 'Contact | Book a Soccer Coaching Session | Weston FL',
  description:
    'Book a soccer coaching session with Igor Kasianenko in Weston, FL. Private sessions, group training, and academy partnerships. ABP™ Methodology. Contact today.',
  alternates: { canonical: 'https://www.igorsoccercoach.com/contact' },
  openGraph: {
    title: 'Book a Session | Igor Kasianenko Soccer Coach | Weston FL',
    description: 'Get in touch to book your first session. Private, group, and academy programs available.',
    url: 'https://www.igorsoccercoach.com/contact',
  },
})

export default function ContactPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* ─── HERO ─── */}
      <section
        style={{
          padding: 'clamp(7rem, 15vw, 10rem) clamp(1.25rem, 5vw, 3rem) clamp(4rem, 8vw, 6rem)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            className="label"
            style={{
              color: 'var(--color-gold)',
              marginBottom: '1.5rem',
              opacity: 0,
              animation: 'fadeIn 0.6s ease 0.1s forwards',
            }}
          >
            Get in Touch
          </div>
          <h1
            className="heading-xl"
            style={{ opacity: 0, animation: 'fadeUp 0.8s ease 0.2s forwards' }}
          >
            Let&apos;s Talk
            <br />
            <span style={{ color: 'var(--color-chalk-m)' }}>Football.</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--color-chalk-m)',
              maxWidth: '520px',
              marginTop: '2rem',
              lineHeight: 1.7,
              opacity: 0,
              animation: 'fadeUp 0.8s ease 0.35s forwards',
            }}
          >
            Whether you&apos;re a player, a parent, or an academy director — reach out.
            Igor personally responds to every enquiry.
          </p>
        </div>
      </section>

      {/* ─── FORM + INFO ─── */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'clamp(3rem, 8vw, 6rem)',
              alignItems: 'start',
            }}
          >
            {/* Form */}
            <div>
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>

            {/* Info panel */}
            <div>
              <Reveal delay={100}>
                <div style={{ marginBottom: '3rem' }}>
                  <p className="label" style={{ color: 'var(--color-chalk-d)', marginBottom: '1.25rem' }}>
                    Location
                  </p>
                  <p style={{ color: 'var(--color-chalk)', fontFamily: 'var(--font-syne)', fontWeight: 500, fontSize: '1.0625rem' }}>
                    Weston, Florida
                  </p>
                  <p style={{ color: 'var(--color-chalk-m)', fontSize: '0.9375rem', marginTop: '0.375rem' }}>
                    Broward County · South Florida
                  </p>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div style={{ marginBottom: '3rem' }}>
                  <p className="label" style={{ color: 'var(--color-chalk-d)', marginBottom: '1.25rem' }}>
                    Email
                  </p>
                  <a
                    href="mailto:igor@igorsoccercoach.com"
                    style={{
                      color: 'var(--color-gold)',
                      fontFamily: 'var(--font-syne)',
                      fontWeight: 500,
                      fontSize: '1.0625rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-gold-l)')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--color-gold)')}
                  >
                    igor@igorsoccercoach.com
                  </a>
                </div>
              </Reveal>

              <Reveal delay={220}>
                <div style={{ marginBottom: '3rem' }}>
                  <p className="label" style={{ color: 'var(--color-chalk-d)', marginBottom: '1.25rem' }}>
                    Response time
                  </p>
                  <p style={{ color: 'var(--color-chalk-m)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                    Igor personally reads and responds to every message — typically within 24 hours.
                    No automated replies. No assistants.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={280}>
                <div
                  style={{
                    border: '1px solid var(--color-border)',
                    padding: '1.5rem',
                  }}
                >
                  <p className="label" style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>
                    Credentials
                  </p>
                  {[
                    '395+ Professional Matches',
                    'UEFA Europa League',
                    '5× National Champion',
                    'ABP™ Methodology Creator',
                    'Weston, FL — Active',
                  ].map((c) => (
                    <div
                      key={c}
                      style={{
                        display: 'flex',
                        gap: '0.75rem',
                        fontSize: '0.875rem',
                        color: 'var(--color-chalk-m)',
                        paddingBottom: '0.5rem',
                        marginBottom: '0.5rem',
                        borderBottom: '1px solid var(--color-border)',
                      }}
                    >
                      <span style={{ color: 'var(--color-gold)' }}>—</span>
                      {c}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
