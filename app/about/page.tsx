import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata({
  title: 'About Igor Kasianenko | European Football Coach | Weston FL',
  description:
    'Igor Kasianenko — 395+ professional matches, UEFA Europa League, 5× National Champion. European football background, now coaching in Weston, Florida with the ABP™ Methodology.',
  alternates: { canonical: 'https://www.igorsoccercoach.com/about' },
  openGraph: {
    title: 'About Igor Kasianenko | Elite Football Coach',
    description: '395+ professional matches. UEFA Europa League. 5× National Champion. Now in Weston, FL.',
    url: 'https://www.igorsoccercoach.com/about',
  },
})

const career = [
  {
    period: '2004–2008',
    role: 'Professional Player',
    org: 'FC Zorya Luhansk',
    detail: 'Ukrainian Premier League. Developed elite-level technical and tactical foundation.',
  },
  {
    period: '2008–2014',
    role: 'Professional Player',
    org: 'FC Astana & National Leagues',
    detail: '5× National Championship titles. UEFA Europa League qualifying campaigns.',
  },
  {
    period: '2012–2016',
    role: 'UEFA Europa League',
    org: 'European Competition',
    detail: '395+ professional competitive matches. Exposure to the highest standard of European club football.',
  },
  {
    period: '2016–2020',
    role: 'Player & Coach Transition',
    org: 'Coaching Education',
    detail: 'Began systematic coaching education. Developed the foundations of the ABP™ Methodology.',
  },
  {
    period: '2020–Present',
    role: 'Performance Coach',
    org: 'Weston, Florida, USA',
    detail: 'Launched private coaching practice. ABP™ Methodology fully active. Serving players, academies, and clubs.',
  },
]

const values = [
  {
    title: 'Intelligence First',
    body: 'Every session starts with the brain. Technical ability without decision-making is wasted potential.',
  },
  {
    title: 'Process Over Result',
    body: 'The score doesn\'t teach you. The training environment does. We build players, not scorelines.',
  },
  {
    title: 'Individual Identity',
    body: 'Every player has a unique game. Our job is to find it, sharpen it, and make it unguardable.',
  },
  {
    title: 'European Standards',
    body: 'What works at the highest levels of European club football translates everywhere. That\'s the bar we set.',
  },
]

export default function AboutPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
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
          paddingTop: 'clamp(7rem, 15vw, 10rem)',
          paddingBottom: 'clamp(4rem, 8vw, 6rem)',
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
            The Coach
          </div>
          <h1
            className="heading-xl"
            style={{ opacity: 0, animation: 'fadeUp 0.8s ease 0.2s forwards' }}
          >
            Igor
            <br />
            Kasianenko.
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
            Professional footballer turned elite performance coach. Forged in European club football.
            Building the next generation of intelligent players in Florida.
          </p>
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'clamp(3rem, 8vw, 6rem)',
            }}
          >
            <Reveal>
              <h2 className="heading-md" style={{ marginBottom: '2rem' }}>
                The Story
              </h2>
              <p style={{ color: 'var(--color-chalk-m)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Igor Kasianenko grew up with football as a language — not a hobby. From his early
                career in the Ukrainian Premier League with FC Zorya Luhansk to championship-winning
                campaigns with FC Astana, football was never just a sport. It was a discipline, a
                system, a way of thinking.
              </p>
              <p style={{ color: 'var(--color-chalk-m)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Over 395 professional matches across national leagues and UEFA European competition,
                Igor didn&apos;t just play — he observed. He studied what separated elite players from
                average ones at the same technical level. The answer was always the same: the speed
                and quality of their decision-making.
              </p>
              <p style={{ color: 'var(--color-chalk-m)', lineHeight: 1.8 }}>
                That observation became the ABP™ Methodology — a structured training system
                that builds football intelligence from the ground up, starting from the very
                first session.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="heading-md" style={{ marginBottom: '2rem' }}>
                Why Florida?
              </h2>
              <p style={{ color: 'var(--color-chalk-m)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                When Igor moved to Weston, Florida, he saw a clear gap: technically talented
                young players with no framework for thinking on the pitch. The infrastructure
                existed. The competition existed. What was missing was the methodology.
              </p>
              <p style={{ color: 'var(--color-chalk-m)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                American soccer is evolving fast. MLS, MLS NEXT, and a new generation of
                academies are raising standards every year. Igor&apos;s mission is to bring
                European-level intelligence training to that ecosystem — and accelerate it.
              </p>
              <p style={{ color: 'var(--color-chalk-m)', lineHeight: 1.8 }}>
                The ABP™ Methodology is not a translation of European football. It is an
                upgrade layer — applicable to every player, regardless of background.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CAREER TIMELINE ─── */}
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
              Career Timeline
            </p>
            <h2 className="heading-md" style={{ marginBottom: '3.5rem' }}>
              The Journey
            </h2>
          </Reveal>

          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: '0',
                top: '0',
                bottom: '0',
                width: '1px',
                background: 'var(--color-border)',
              }}
            />

            {career.map((item, i) => (
              <Reveal key={item.period} delay={i * 100}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'clamp(100px, 15vw, 140px) 1fr',
                    gap: '2rem',
                    paddingLeft: '2rem',
                    paddingBottom: '2.5rem',
                    position: 'relative',
                  }}
                >
                  {/* Dot */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: '-4px',
                      top: '6px',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'var(--color-gold)',
                    }}
                  />
                  <div>
                    <div
                      className="label"
                      style={{ color: 'var(--color-gold)', marginBottom: '0.25rem' }}
                    >
                      {item.period}
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-syne)',
                        fontWeight: 600,
                        fontSize: '1rem',
                        color: 'var(--color-chalk)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {item.role}
                    </div>
                    <div
                      className="label"
                      style={{ color: 'var(--color-chalk-d)', marginBottom: '0.625rem' }}
                    >
                      {item.org}
                    </div>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--color-chalk-m)', lineHeight: 1.7 }}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <p className="label" style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>
              Coaching Philosophy
            </p>
            <h2 className="heading-md" style={{ marginBottom: '3.5rem' }}>
              What Igor Believes.
            </h2>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5px',
              background: 'var(--color-border)',
            }}
          >
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div
                  style={{
                    background: '#0C0C0C',
                    padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                  }}
                >
                  <h3
                    className="heading-sm"
                    style={{ color: 'var(--color-chalk)', marginBottom: '1rem' }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-chalk-m)', lineHeight: 1.7 }}>
                    {v.body}
                  </p>
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
          <h2 className="heading-sm" style={{ color: 'var(--color-chalk)' }}>
            Ready to train with European methodology?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Book a Session →</Link>
            <Link href="/methodology" className="btn-outline">See the ABP™ System</Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
