import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { pageMeta } from '@/lib/metadata'
import { serviceSchema } from '@/lib/structured-data'

export const metadata: Metadata = pageMeta({
  title: 'Igor Kasianenko | Soccer Performance Coach | Weston, FL',
  alternates: { canonical: 'https://www.igorsoccercoach.com' },
})

const STATS = [
  { val: '395+', label: 'Professional Matches', sub: 'UEFA & national leagues' },
  { val: '5×',   label: 'National Champion',    sub: 'Top-flight football'    },
  { val: '15+',  label: 'Years Coaching',        sub: 'Player development'    },
  { val: '1',    label: 'ABP™ Methodology',      sub: 'Unique system'         },
]

const PILLARS = [
  { n: '01', title: 'Football Intelligence', body: 'Players who read the game faster, think clearer under pressure, and make better decisions in every phase of play.' },
  { n: '02', title: 'Technical Precision',   body: 'Mastery of the ball in tight spaces, with both feet, at match tempo. Every technical rep has a cognitive purpose.' },
  { n: '03', title: 'Physical Expression',   body: 'Speed, agility, and endurance built for the modern game — athletic qualities trained with a football in hand.' },
]

const PROGRAMS = [
  { href: '/programs#private', sub: '1-on-1 · All Ages',    title: 'Private Sessions',      body: 'Fully personalised ABP™ training built around your position, age, and goals.' },
  { href: '/programs#group',   sub: 'Small Group · 4–8',    title: 'Group Training',         body: 'Intelligence-first sessions with built-in competitive pressure.' },
  { href: '/programs#academy', sub: 'Clubs & Organisations', title: 'Academy Partnerships',  body: 'European-standard curriculum design for academies and clubs.' },
]

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section aria-label="Hero" style={{
        minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 'clamp(1.25rem, 5vw, 3rem)', paddingTop: '80px',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Grid bg */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(245,240,232,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,232,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 60%, transparent 100%)',
        }} />
        {/* Glow */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: '15%', right: '-5%',
          width: '40vw', height: '40vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <p className="t-label gold anim-fade-in d1" style={{ marginBottom: '2rem' }}>
          Elite Football Performance Coach · Weston, Florida
        </p>

        <h1 className="t-hero anim-fade-up d2" style={{ maxWidth: '1000px' }}>
          The Game{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--chalk-m)' }}>Begins</em>
          <br />in the Mind.
        </h1>

        <p className="anim-fade-up d3" style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--chalk-m)',
          maxWidth: '520px', marginTop: '1.5rem', lineHeight: 1.6,
        }}>
          Igor Kasianenko develops intelligent players through the ABP™ Methodology —
          a UEFA-forged system built for modern football.
        </p>

        <div className="anim-fade-up d4" style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
          <Link href="/contact"     className="btn-gold">Book a Session →</Link>
          <Link href="/methodology" className="btn-line">Discover ABP™</Link>
        </div>

        <div className="anim-fade-in d6" style={{
          position: 'absolute', bottom: '2rem', right: 'clamp(1.25rem, 5vw, 3rem)',
          display: 'flex', alignItems: 'center', gap: '0.75rem',
        }}>
          <span className="t-label chalk-d">Scroll</span>
          <div style={{ width: '40px', height: '1px', background: 'var(--border)' }} />
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────── */}
      <section aria-label="Key statistics" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(2rem, 5vw, 3rem) 0' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem' }}>
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="t-stat" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '0.25rem' }}>{s.val}</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.2rem' }}>{s.label}</div>
              <div className="t-label chalk-d">{s.sub}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── ABOUT SNIPPET ─────────────────────────────────── */}
      <section className="section" aria-label="About Igor">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(3rem, 8vw, 6rem)', alignItems: 'center' }}>
          <Reveal>
            <p className="t-label gold" style={{ marginBottom: '1.5rem' }}>The Coach</p>
            <h2 className="t-h1">Forged in<br />European<br />Football.</h2>
          </Reveal>
          <div>
            <Reveal delay={100}>
              <p style={{ fontSize: '1.0625rem', color: 'var(--chalk-m)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Igor Kasianenko is a professional soccer coach with over a decade of experience at the highest levels of European football.
                His playing career — spanning FC Astana, FC Zorya Luhansk, and the UEFA Europa League — shaped a deep
                understanding of what separates good players from great ones.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p style={{ fontSize: '1.0625rem', color: 'var(--chalk-m)', lineHeight: 1.75, marginBottom: '2rem' }}>
                That understanding became the ABP™ Methodology — a structured, intelligence-first approach to player
                development now available in Weston, Florida.
              </p>
              <Link href="/about" className="btn-line">Full Bio →</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── ABP PREVIEW ───────────────────────────────────── */}
      <section className="section" aria-label="ABP Methodology" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
              <h2 className="t-h1">ABP™ Methodology</h2>
              <span className="t-label gold">The System</span>
            </div>
          </Reveal>
          <div className="grid-sep" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {PILLARS.map((p, i) => (
              <Reveal key={p.n} delay={i * 120}>
                <div className="h-card" style={{ padding: 'clamp(2rem, 4vw, 2.5rem)', height: '100%' }}>
                  <p className="t-label gold" style={{ marginBottom: '1.5rem' }}>{p.n}</p>
                  <h3 className="t-h3" style={{ marginBottom: '1rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--chalk-m)', lineHeight: 1.7 }}>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div style={{ marginTop: '2.5rem' }}>
              <Link href="/methodology" className="btn-gold">Explore the Full System →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PROGRAMS ──────────────────────────────────────── */}
      <section className="section" aria-label="Training programs">
        <div className="wrap">
          <Reveal>
            <p className="t-label gold" style={{ marginBottom: '1rem' }}>Training Programs</p>
            <h2 className="t-h1" style={{ marginBottom: '3.5rem' }}>Train with Purpose.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                {/* h-border gives CSS-only border hover — no JS needed */}
                <Link href={p.href} className="h-border" style={{ display: 'block', padding: 'clamp(1.75rem, 3vw, 2rem)', height: '100%' }}>
                  <p className="t-label chalk-d" style={{ marginBottom: '1.25rem' }}>{p.sub}</p>
                  <h3 className="t-h3" style={{ marginBottom: '0.875rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--chalk-m)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{p.body}</p>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--gold)', fontFamily: "'Syne', sans-serif", fontWeight: 500 }}>Learn more →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section aria-label="Call to action" style={{
        borderTop: '1px solid var(--border)', padding: 'clamp(4rem, 10vw, 7rem) clamp(1.25rem, 5vw, 3rem)',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto' }}>
          <Reveal>
            <p className="t-label gold" style={{ marginBottom: '1.5rem' }}>Ready to Begin?</p>
            <h2 className="t-h1" style={{ marginBottom: '1.5rem' }}>Develop the<br />Intelligent Player.</h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--chalk-m)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Whether you&apos;re a player, parent, or academy director — the first session starts with a conversation.
            </p>
            <Link href="/contact" className="btn-gold">Book Your Session →</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
