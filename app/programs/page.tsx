import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata({
  title: 'Training Programs | Soccer Coaching Weston FL',
  description:
    'Private sessions, group training, and academy partnerships in Weston, FL. ABP™ Methodology. Soccer performance coaching for players of all ages and levels.',
  alternates: { canonical: 'https://www.igorsoccercoach.com/programs' },
  openGraph: {
    title: 'Training Programs | Igor Kasianenko Soccer Coach',
    description: 'Private, group, and academy soccer training in Weston, FL. ABP™ Methodology.',
    url: 'https://www.igorsoccercoach.com/programs',
  },
})

const programs = [
  {
    id: 'private',
    badge: 'Most Popular',
    title: 'Private Sessions',
    sub: '1-on-1 · All Ages · All Levels',
    description:
      'The flagship ABP™ experience. Fully personalised to your position, age, development stage, and goals. Sessions are built from scratch around you — no generic drills, no wasted reps.',
    features: [
      'Full ABP™ methodology — all three pillars every session',
      'Position-specific intelligence training',
      'Video analysis on request',
      'Progress tracking and periodic assessments',
      'Custom home training programme',
      'Direct access to Igor between sessions',
    ],
    duration: '60–90 min',
    frequency: 'Flexible scheduling',
    cta: 'Book a Private Session',
    featured: true,
  },
  {
    id: 'group',
    badge: null,
    title: 'Group Training',
    sub: 'Small Group · 4–8 Players',
    description:
      'Intelligence-first training in a competitive, collaborative environment. The group structure creates the pressure that individual sessions can\'t replicate. Players learn to read each other — and beat each other.',
    features: [
      'ABP™ group methodology adapted for team dynamics',
      'Positional play and combination patterns',
      'Decision-making under competitive pressure',
      'Tactical scenarios and small-sided games',
      'Peer learning and team communication skills',
    ],
    duration: '75–90 min',
    frequency: 'Weekly sessions',
    cta: 'Join Group Training',
    featured: false,
  },
  {
    id: 'academy',
    badge: null,
    title: 'Academy Partnerships',
    sub: 'Clubs & Organisations',
    description:
      'For soccer academies and clubs that want to embed European-standard player development into their curriculum. Igor works with coaching staff and directors to build a sustainable, intelligence-first culture.',
    features: [
      'ABP™ curriculum design and integration',
      'Coach education workshops',
      'Player assessment frameworks',
      'Session planning and periodisation',
      'Long-term development roadmaps',
      'On-site delivery and remote support',
    ],
    duration: 'Custom engagement',
    frequency: 'Ongoing partnership',
    cta: 'Discuss a Partnership',
    featured: false,
  },
]

const audiences = [
  {
    title: 'Players',
    body: 'Youth (8+), teenage, college, and semi-professional players looking to develop intelligence and technical ability.',
  },
  {
    title: 'Parents',
    body: 'Families who want a structured, transparent development path — not just fitness drills. ABP™ produces visible growth.',
  },
  {
    title: 'Academy Directors',
    body: 'Organisations looking to raise their development standards with a proven, European-informed methodology.',
  },
  {
    title: 'Professional Clubs',
    body: 'MLS, MLS NEXT, and USL clubs seeking supplementary coaching resources for player performance.',
  },
]

export default function ProgramsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Programs', url: '/programs' },
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
            Training Programs
          </div>
          <h1
            className="heading-xl"
            style={{ opacity: 0, animation: 'fadeUp 0.8s ease 0.2s forwards' }}
          >
            Train with
            <br />
            <span style={{ color: 'var(--color-chalk-m)' }}>Purpose.</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--color-chalk-m)',
              maxWidth: '560px',
              marginTop: '2rem',
              lineHeight: 1.7,
              opacity: 0,
              animation: 'fadeUp 0.8s ease 0.35s forwards',
            }}
          >
            Every ABP™ session is built around one objective: making you a smarter, more
            complete footballer. Choose the format that fits your goals.
          </p>
        </div>
      </section>

      {/* ─── PROGRAMS ─── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {programs.map((prog, i) => (
              <Reveal key={prog.id} delay={i * 80}>
                <div
                  id={prog.id}
                  style={{
                    border: prog.featured
                      ? '1px solid rgba(201,168,76,0.4)'
                      : '1px solid var(--color-border)',
                    padding: 'clamp(2rem, 4vw, 3rem)',
                    position: 'relative',
                    transition: 'border-color 0.3s ease',
                  }}
                >
                  {prog.badge && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-1px',
                        left: '2rem',
                        background: 'var(--color-gold)',
                        color: '#0C0C0C',
                        fontFamily: 'var(--font-dm-mono)',
                        fontSize: '0.6875rem',
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '4px 12px',
                      }}
                    >
                      {prog.badge}
                    </div>
                  )}

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '3rem',
                    }}
                  >
                    {/* Left */}
                    <div>
                      <div className="label" style={{ color: 'var(--color-chalk-d)', marginBottom: '1rem', marginTop: prog.badge ? '1rem' : 0 }}>
                        {prog.sub}
                      </div>
                      <h2 className="heading-md" style={{ color: 'var(--color-chalk)', marginBottom: '1.25rem' }}>
                        {prog.title}
                      </h2>
                      <p style={{ color: 'var(--color-chalk-m)', lineHeight: 1.75, fontSize: '0.9375rem', marginBottom: '2rem' }}>
                        {prog.description}
                      </p>
                      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                        <div>
                          <div className="label" style={{ color: 'var(--color-chalk-d)', marginBottom: '0.25rem' }}>
                            Duration
                          </div>
                          <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 500, fontSize: '0.875rem', color: 'var(--color-chalk)' }}>
                            {prog.duration}
                          </div>
                        </div>
                        <div>
                          <div className="label" style={{ color: 'var(--color-chalk-d)', marginBottom: '0.25rem' }}>
                            Format
                          </div>
                          <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 500, fontSize: '0.875rem', color: 'var(--color-chalk)' }}>
                            {prog.frequency}
                          </div>
                        </div>
                      </div>
                      <Link href="/contact" className={prog.featured ? 'btn-primary' : 'btn-outline'}>
                        {prog.cta} →
                      </Link>
                    </div>

                    {/* Right — features */}
                    <div>
                      <div className="label" style={{ color: 'var(--color-chalk-d)', marginBottom: '1.25rem' }}>
                        What&apos;s Included
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {prog.features.map((f) => (
                          <li
                            key={f}
                            style={{
                              display: 'flex',
                              gap: '0.75rem',
                              color: 'var(--color-chalk-m)',
                              fontSize: '0.9375rem',
                              lineHeight: 1.6,
                              paddingBottom: '0.75rem',
                              borderBottom: '1px solid var(--color-border)',
                              marginBottom: '0.75rem',
                            }}
                          >
                            <span style={{ color: 'var(--color-gold)', flexShrink: 0 }}>✓</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO IS IT FOR ─── */}
      <section
        className="section"
        style={{
          background: 'var(--color-surface)',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container">
          <Reveal>
            <p className="label" style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>
              Who it&apos;s for
            </p>
            <h2 className="heading-md" style={{ marginBottom: '3.5rem' }}>
              Everyone who wants to think better on the pitch.
            </h2>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5px',
              background: 'var(--color-border)',
            }}
          >
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <div style={{ background: 'var(--color-surface)', padding: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
                  <h3 className="heading-sm" style={{ marginBottom: '0.875rem' }}>{a.title}</h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-chalk-m)', lineHeight: 1.7 }}>{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        style={{
          borderTop: '1px solid var(--color-border)',
          padding: 'clamp(3.5rem, 8vw, 5rem) clamp(1.25rem, 5vw, 3rem)',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto',
        }}
      >
        <Reveal>
          <h2 className="heading-md" style={{ marginBottom: '1.25rem' }}>
            Not sure which program?
          </h2>
          <p style={{ color: 'var(--color-chalk-m)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Send a message and Igor will personally recommend the right path based on your goals,
            age, and current level.
          </p>
          <Link href="/contact" className="btn-primary">Get a Recommendation →</Link>
        </Reveal>
      </section>
    </>
  )
}
