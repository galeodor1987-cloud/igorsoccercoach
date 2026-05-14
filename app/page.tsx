import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { pageMetadata } from '@/lib/metadata'
import { serviceSchema } from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata({
  title: 'Igor Kasianenko | Elite Soccer Performance Coach | Weston, FL',
  description:
    'Elite soccer performance coach in Weston, FL. 395+ professional matches · UEFA Europa League · 5× National Champion. Train smarter with the ABP™ Methodology.',
  alternates: { canonical: 'https://www.igorsoccercoach.com' },
})

const stats = [
  { value: '395+', label: 'Professional Matches', sub: 'UEFA & National leagues' },
  { value: '5×',   label: 'National Champion',    sub: 'Top-flight football' },
  { value: '15+',  label: 'Years Coaching',        sub: 'Player development' },
  { value: '1',    label: 'ABP™ Methodology',      sub: 'Unique system' },
]

const pillars = [
  {
    number: '01',
    title: 'Football Intelligence',
    body: 'Developing players who read the game faster, think clearer under pressure, and make better decisions in every phase of play.',
  },
  {
    number: '02',
    title: 'Technical Precision',
    body: 'Mastery of the ball in tight spaces, with both feet, at match tempo. Every technical rep has a cognitive purpose.',
  },
  {
    number: '03',
    title: 'Physical Expression',
    body: 'Speed, agility, and endurance built for the modern game — athletic qualities trained with a football in hand.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema()) }}
      />

      {/* ─── HERO ────────────────────────────────────────────── */}
      <section
        aria-label="Hero"
        style={{
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(1.25rem, 5vw, 3rem)',
          paddingTop: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background grid */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(245,240,232,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,232,0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 60%, transparent 100%)',
          }}
        />
        {/* Gold accent top-right */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '15%',
            right: '-5%',
            width: '40vw',
            height: '40vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Label */}
        <div
          className="label animate-fade-in anim-init"
          style={{
            color: 'var(--color-gold)',
            marginBottom: '2rem',
            animation: 'fadeIn 0.6s ease 0.1s forwards',
          }}
        >
          Elite Football Performance Coach · Weston, Florida
        </div>

        {/* Main heading */}
        <h1
          className="heading-xl"
          style={{
            color: 'var(--color-chalk)',
            maxWidth: '1000px',
            opacity: 0,
            animation: 'fadeUp 0.8s ease 0.2s forwards',
          }}
        >
          The Game{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--color-chalk-m)' }}>
            Begins
          </em>
          <br />
          in the Mind.
        </h1>

        {/* Sub */}
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            fontWeight: 300,
            color: 'var(--color-chalk-m)',
            maxWidth: '520px',
            marginTop: '1.5rem',
            lineHeight: 1.6,
            opacity: 0,
            animation: 'fadeUp 0.8s ease 0.35s forwards',
          }}
        >
          Igor Kasianenko develops intelligent players through the ABP™ Methodology —
          a UEFA-forged system built for modern football.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '2.5rem',
            flexWrap: 'wrap',
            opacity: 0,
            animation: 'fadeUp 0.8s ease 0.5s forwards',
          }}
        >
          <Link href="/contact" className="btn-primary">Book a Session →</Link>
          <Link href="/methodology" className="btn-outline">Discover ABP™</Link>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: 'clamp(1.25rem, 5vw, 3rem)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            opacity: 0,
            animation: 'fadeIn 0.8s ease 1s forwards',
          }}
        >
          <span className="label" style={{ color: 'var(--color-chalk-d)' }}>Scroll</span>
          <div style={{ width: '40px', height: '1px', background: 'var(--color-border)' }} />
        </div>
      </section>

      {/* ─── STATS BAR ───────────────────────────────────────── */}
      <section
        aria-label="Key statistics"
        style={{
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
          padding: 'clamp(2rem, 5vw, 3rem) clamp(1.25rem, 5vw, 3rem)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '2rem',
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div>
                <div
                  className="stat-number"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--color-chalk)',
                    marginTop: '0.25rem',
                  }}
                >
                  {s.label}
                </div>
                <div className="label" style={{ color: 'var(--color-chalk-d)', marginTop: '0.25rem' }}>
                  {s.sub}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── ABOUT SNIPPET ───────────────────────────────────── */}
      <section className="section" aria-label="About Igor">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(3rem, 8vw, 6rem)',
              alignItems: 'center',
            }}
          >
            <Reveal>
              <p className="label" style={{ color: 'var(--color-gold)', marginBottom: '1.5rem' }}>
                The Coach
              </p>
              <h2 className="heading-lg" style={{ color: 'var(--color-chalk)' }}>
                Forged in
                <br />
                European
                <br />
                Football.
              </h2>
            </Reveal>

            <div>
              <Reveal delay={100}>
                <p
                  style={{
                    fontSize: '1.0625rem',
                    color: 'var(--color-chalk-m)',
                    lineHeight: 1.75,
                    marginBottom: '1.5rem',
                  }}
                >
                  Igor Kasianenko is a professional soccer coach with over a decade of
                  experience at the highest levels of European football. His playing
                  career — spanning FC Astana, FC Zorya Luhansk, and the UEFA Europa
                  League — shaped a deep understanding of what separates good players
                  from great ones.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p
                  style={{
                    fontSize: '1.0625rem',
                    color: 'var(--color-chalk-m)',
                    lineHeight: 1.75,
                    marginBottom: '2rem',
                  }}
                >
                  That understanding became the ABP™ Methodology — a structured,
                  intelligence-first approach to player development now available in
                  Weston, Florida.
                </p>
                <Link href="/about" className="btn-outline">
                  Full Bio →
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABP METHODOLOGY PREVIEW ─────────────────────────── */}
      <section
        className="section"
        aria-label="ABP Methodology preview"
        style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="container">
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
              <h2 className="heading-lg" style={{ color: 'var(--color-chalk)' }}>
                ABP™ Methodology
              </h2>
              <span className="label" style={{ color: 'var(--color-gold)' }}>
                The System
              </span>
            </div>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5px',
              background: 'var(--color-border)',
            }}
          >
            {pillars.map((p, i) => (
              <Reveal key={p.number} delay={i * 120}>
                <div
                  style={{
                    background: 'var(--color-surface)',
                    padding: 'clamp(2rem, 4vw, 2.5rem)',
                    height: '100%',
                  }}
                  className="card-hover"
                >
                  <div
                    className="label"
                    style={{ color: 'var(--color-gold)', marginBottom: '1.5rem' }}
                  >
                    {p.number}
                  </div>
                  <h3
                    className="heading-sm"
                    style={{ color: 'var(--color-chalk)', marginBottom: '1rem' }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-chalk-m)', lineHeight: 1.7 }}>
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div style={{ marginTop: '2.5rem' }}>
              <Link href="/methodology" className="btn-primary">
                Explore the Full System →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── PROGRAMS ────────────────────────────────────────── */}
      <section className="section" aria-label="Training programs">
        <div className="container">
          <Reveal>
            <p className="label" style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>
              Training Programs
            </p>
            <h2 className="heading-lg" style={{ color: 'var(--color-chalk)', marginBottom: '3.5rem' }}>
              Train with Purpose.
            </h2>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1rem',
            }}
          >
            {[
              {
                title: 'Private Sessions',
                sub: '1-on-1 Elite Coaching',
                body: 'Fully personalised training built around your position, age, and development goals. Maximum attention. Maximum progress.',
                href: '/programs#private',
              },
              {
                title: 'Group Training',
                sub: 'Small Group · 4–8 Players',
                body: 'Intelligence-first sessions with built-in competitive tension. Players learn faster when they push each other.',
                href: '/programs#group',
              },
              {
                title: 'Academy Partnerships',
                sub: 'For Clubs & Organisations',
                body: 'Curriculum design, coach education, and methodology integration for academies seeking European-standard development.',
                href: '/programs#academy',
              },
            ].map((prog, i) => (
              <Reveal key={prog.title} delay={i * 100}>
                <Link
                  href={prog.href}
                  className="hover-border-gold"
                  style={{
                    display: 'block',
                    padding: 'clamp(1.75rem, 3vw, 2rem)',
                    textDecoration: 'none',
                    height: '100%',
                  }}
                >
                  <div className="label" style={{ color: 'var(--color-chalk-d)', marginBottom: '1.25rem' }}>
                    {prog.sub}
                  </div>
                  <h3 className="heading-sm" style={{ color: 'var(--color-chalk)', marginBottom: '0.875rem' }}>
                    {prog.title}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-chalk-m)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {prog.body}
                  </p>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-gold)', fontFamily: 'var(--font-syne)', fontWeight: 500 }}>
                    Learn more →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ──────────────────────────────────────── */}
      <section
        aria-label="Call to action"
        style={{
          borderTop: '1px solid var(--color-border)',
          padding: 'clamp(4rem, 10vw, 7rem) clamp(1.25rem, 5vw, 3rem)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto' }}>
          <Reveal>
            <p className="label" style={{ color: 'var(--color-gold)', marginBottom: '1.5rem' }}>
              Ready to Begin?
            </p>
            <h2 className="heading-lg" style={{ color: 'var(--color-chalk)', marginBottom: '1.5rem' }}>
              Develop the
              <br />
              Intelligent Player.
            </h2>
            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--color-chalk-m)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
              }}
            >
              Whether you&apos;re a player, parent, or academy director — the first
              session starts with a conversation. Let&apos;s talk about where you want to go.
            </p>
            <Link href="/contact" className="btn-primary">
              Book Your Session →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
