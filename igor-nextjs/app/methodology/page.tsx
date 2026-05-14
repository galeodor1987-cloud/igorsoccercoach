import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata({
  title: 'ABP™ Methodology | Football Intelligence Training System',
  description:
    'The ABP™ Methodology by Igor Kasianenko — a unique football intelligence training system that develops decision-making, technical precision, and athletic performance in soccer players.',
  keywords: [
    'ABP methodology', 'football intelligence training', 'soccer decision making',
    'cognitive soccer training', 'player development system', 'football training methodology',
  ],
  alternates: { canonical: 'https://www.igorsoccercoach.com/methodology' },
  openGraph: {
    title: 'ABP™ Methodology | Football Intelligence Training System',
    description: 'The unique coaching system that develops football intelligence from the ground up.',
    url: 'https://www.igorsoccercoach.com/methodology',
  },
})

const phases = [
  {
    code: 'A',
    title: 'Awareness',
    subtitle: 'Reading the Game',
    points: [
      'Pre-reception scanning — seeing before receiving',
      'Body shape training under pressure',
      'Spatial awareness and positioning IQ',
      'Recognising patterns before they fully emerge',
    ],
  },
  {
    code: 'B',
    title: 'Ball Mastery',
    subtitle: 'Technical Excellence',
    points: [
      'Ambidextrous technical development',
      'Close control in tight, high-pressure spaces',
      'Tempo-specific skill execution',
      'Ball retention under physical pressure',
    ],
  },
  {
    code: 'P',
    title: 'Performance',
    subtitle: 'Athletic Intelligence',
    points: [
      'Football-specific speed and agility',
      'Explosive movement and change of direction',
      'Stamina structured around game intensity',
      'Recovery rate and injury-prevention movement patterns',
    ],
  },
]

const differentiators = [
  {
    q: 'Is it just technical training?',
    a: 'No. The ABP™ system integrates cognitive development with every technical session. The ball is never just a ball — it\'s a thinking tool.',
  },
  {
    q: 'Is it only for elite players?',
    a: 'The ABP™ system scales to every level. The principles are elite, the application adjusts to age and ability. We\'ve worked with youth beginners and academy prospects alike.',
  },
  {
    q: 'How long before I see results?',
    a: 'Decision-making improvements are visible within weeks. Technical mastery is a long-term investment. ABP™ delivers both — immediate wins and compound growth.',
  },
  {
    q: 'What makes it European?',
    a: 'European academies have long prioritised position-specific cognitive development over generic training. ABP™ is built on that foundation, refined through 395+ professional matches.',
  },
]

export default function MethodologyPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Methodology', url: '/methodology' },
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
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '60vw',
            height: '60vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <div
            className="label"
            style={{
              color: 'var(--color-gold)',
              marginBottom: '1.5rem',
              opacity: 0,
              animation: 'fadeIn 0.6s ease 0.1s forwards',
            }}
          >
            The System
          </div>
          <h1
            className="heading-xl"
            style={{ opacity: 0, animation: 'fadeUp 0.8s ease 0.2s forwards' }}
          >
            ABP™
            <br />
            <span style={{ color: 'var(--color-chalk-m)' }}>Methodology.</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--color-chalk-m)',
              maxWidth: '600px',
              marginTop: '2rem',
              lineHeight: 1.7,
              opacity: 0,
              animation: 'fadeUp 0.8s ease 0.35s forwards',
            }}
          >
            A proprietary training system built on 15+ years of elite European football experience.
            ABP™ develops Awareness, Ball Mastery, and Performance — not as separate disciplines,
            but as a single unified intelligence.
          </p>
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
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
            <Reveal>
              <h2 className="heading-md">
                The core premise.
              </h2>
            </Reveal>
            <div>
              <Reveal delay={100}>
                <p style={{ color: 'var(--color-chalk-m)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1.0625rem' }}>
                  Most coaching systems train the body and hope the brain catches up.
                  ABP™ flips this. Every session begins with a cognitive challenge —
                  a decision-making scenario that the technical work then reinforces.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p style={{ color: 'var(--color-chalk-m)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1.0625rem' }}>
                  The result is a player who doesn&apos;t just know what to do — but can
                  execute it at match speed, under pressure, consistently. That&apos;s the
                  definition of football intelligence.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <blockquote
                  style={{
                    borderLeft: '2px solid var(--color-gold)',
                    paddingLeft: '1.5rem',
                    marginTop: '2rem',
                    fontStyle: 'italic',
                    color: 'var(--color-chalk)',
                    fontSize: '1.125rem',
                    lineHeight: 1.6,
                  }}
                >
                  &ldquo;The best players I played against didn&apos;t just move the ball faster.
                  They saw the game earlier. That&apos;s what ABP™ teaches.&rdquo;
                  <cite
                    style={{
                      display: 'block',
                      fontStyle: 'normal',
                      marginTop: '0.75rem',
                      fontSize: '0.8125rem',
                      color: 'var(--color-chalk-d)',
                      fontFamily: 'var(--font-dm-mono)',
                    }}
                  >
                    — Igor Kasianenko
                  </cite>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THREE PILLARS ─── */}
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
              Three Pillars
            </p>
            <h2 className="heading-md" style={{ marginBottom: '3.5rem' }}>
              How it Works.
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gap: '1.5px', background: 'var(--color-border)' }}>
            {phases.map((p, i) => (
              <Reveal key={p.code} delay={i * 100}>
                <div
                  style={{
                    background: 'var(--color-surface)',
                    padding: 'clamp(2rem, 4vw, 3rem)',
                    display: 'grid',
                    gridTemplateColumns: 'clamp(60px, 10vw, 100px) 1fr auto',
                    gap: '2rem',
                    alignItems: 'start',
                  }}
                >
                  {/* Letter */}
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-syne)',
                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                        fontWeight: 800,
                        color: 'var(--color-gold)',
                        lineHeight: 1,
                        opacity: 0.8,
                      }}
                    >
                      {p.code}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="label" style={{ color: 'var(--color-chalk-d)', marginBottom: '0.5rem' }}>
                      {p.subtitle}
                    </div>
                    <h3 className="heading-sm" style={{ color: 'var(--color-chalk)', marginBottom: '1.5rem' }}>
                      {p.title}
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {p.points.map((pt) => (
                        <li
                          key={pt}
                          style={{
                            display: 'flex',
                            gap: '0.75rem',
                            color: 'var(--color-chalk-m)',
                            fontSize: '0.9375rem',
                            lineHeight: 1.6,
                            marginBottom: '0.5rem',
                          }}
                        >
                          <span style={{ color: 'var(--color-gold)', flexShrink: 0 }}>—</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ / DIFFERENTIATORS ─── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <p className="label" style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>
              Common Questions
            </p>
            <h2 className="heading-md" style={{ marginBottom: '3.5rem' }}>
              What Makes ABP™ Different.
            </h2>
          </Reveal>

          <div style={{ maxWidth: '800px' }}>
            {differentiators.map((d, i) => (
              <Reveal key={d.q} delay={i * 80}>
                <div
                  style={{
                    borderTop: '1px solid var(--color-border)',
                    padding: '2rem 0',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-syne)',
                      fontWeight: 600,
                      fontSize: '1.0625rem',
                      color: 'var(--color-chalk)',
                      marginBottom: '0.875rem',
                    }}
                  >
                    {d.q}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-chalk-m)', lineHeight: 1.75 }}>
                    {d.a}
                  </p>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: '1px solid var(--color-border)' }} />
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        style={{
          borderTop: '1px solid var(--color-border)',
          padding: 'clamp(3.5rem, 8vw, 5rem) clamp(1.25rem, 5vw, 3rem)',
          display: 'flex',
          gap: '1.5rem',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        <Reveal>
          <h2 className="heading-sm">Experience ABP™ in your first session.</h2>
        </Reveal>
        <Reveal delay={100}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Book Now →</Link>
            <Link href="/programs" className="btn-outline">View Programs</Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
