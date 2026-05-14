import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { pageMeta } from '@/lib/metadata'
import { breadcrumb } from '@/lib/structured-data'

export const metadata: Metadata = pageMeta({
  title: 'About | European Football Coach | Weston FL',
  description: 'Igor Kasianenko — 395+ professional matches, UEFA Europa League, 5× National Champion. European football background, coaching in Weston, Florida with the ABP™ Methodology.',
  alternates: { canonical: 'https://www.igorsoccercoach.com/about' },
  openGraph: { url: 'https://www.igorsoccercoach.com/about', title: 'About Igor Kasianenko | Elite Football Coach' },
})

const TIMELINE = [
  { period: '2004–2008', role: 'Professional Player', org: 'FC Zorya Luhansk', detail: 'Ukrainian Premier League. Built the elite technical and tactical foundation.' },
  { period: '2008–2014', role: 'Professional Player', org: 'FC Astana & National Leagues', detail: '5× National Championship titles. UEFA Europa League qualifying campaigns.' },
  { period: '2012–2016', role: 'UEFA Europa League', org: 'European Competition', detail: '395+ professional competitive matches at the highest standard of European club football.' },
  { period: '2016–2020', role: 'Coaching Transition', org: 'Education & Development', detail: 'Systematic coaching education. Foundations of the ABP™ Methodology established.' },
  { period: '2020–Now',  role: 'Performance Coach', org: 'Weston, Florida, USA', detail: 'ABP™ Methodology fully active. Serving players, academies, and clubs in South Florida.' },
]

const VALUES = [
  { title: 'Intelligence First', body: 'Every session starts with the brain. Technical ability without decision-making is wasted potential.' },
  { title: 'Process Over Result', body: "The score doesn't teach you. The training environment does. We build players, not scorelines." },
  { title: 'Individual Identity', body: "Every player has a unique game. Our job is to find it, sharpen it, and make it unguardable." },
  { title: 'European Standards', body: "What works at the highest levels of European club football translates everywhere. That's the bar we set." },
]

export default function About() {
  const bc = breadcrumb([{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }])
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />

      {/* Hero */}
      <section style={{ padding: 'clamp(7rem,15vw,10rem) clamp(1.25rem,5vw,3rem) clamp(4rem,8vw,6rem)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="t-label gold anim-fade-in d1" style={{ marginBottom: '1.5rem' }}>The Coach</p>
          <h1 className="t-hero anim-fade-up d2">Igor<br />Kasianenko.</h1>
          <p className="anim-fade-up d3" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--chalk-m)', maxWidth: '560px', marginTop: '2rem', lineHeight: 1.7 }}>
            Professional footballer turned elite performance coach. Forged in European club football.
            Building intelligent players in Florida.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(3rem,8vw,6rem)' }}>
          <Reveal>
            <h2 className="t-h2" style={{ marginBottom: '2rem' }}>The Story</h2>
            <p style={{ color: 'var(--chalk-m)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Igor Kasianenko grew up with football as a language — not a hobby. From his early career in the Ukrainian
              Premier League with FC Zorya Luhansk to championship-winning campaigns with FC Astana, football was a
              discipline, a system, a way of thinking.
            </p>
            <p style={{ color: 'var(--chalk-m)', lineHeight: 1.8 }}>
              Over 395 professional matches across national leagues and UEFA European competition, Igor studied what
              separated elite players from average ones at the same technical level. The answer was always the same:
              the speed and quality of their decision-making. That observation became the ABP™ Methodology.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="t-h2" style={{ marginBottom: '2rem' }}>Why Florida?</h2>
            <p style={{ color: 'var(--chalk-m)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              When Igor moved to Weston, Florida, he saw a clear gap: technically talented young players with no
              framework for thinking on the pitch. The infrastructure existed. The competition existed.
              What was missing was the methodology.
            </p>
            <p style={{ color: 'var(--chalk-m)', lineHeight: 1.8 }}>
              American soccer is evolving fast. MLS, MLS NEXT, and a new generation of academies are raising standards
              every year. Igor&apos;s mission is to bring European-level intelligence training to that ecosystem — and accelerate it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <Reveal>
            <p className="t-label gold" style={{ marginBottom: '1rem' }}>Career Timeline</p>
            <h2 className="t-h2" style={{ marginBottom: '3.5rem' }}>The Journey</h2>
          </Reveal>
          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: 'var(--border)' }} />
            {TIMELINE.map((t, i) => (
              <Reveal key={t.period} delay={i * 100}>
                <div style={{ display: 'grid', gridTemplateColumns: 'clamp(100px,15vw,140px) 1fr', gap: '2rem', paddingLeft: '2rem', paddingBottom: '2.5rem', position: 'relative' }}>
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-4px', top: '6px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold)' }} />
                  <p className="t-label gold">{t.period}</p>
                  <div>
                    <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: '1rem', marginBottom: '0.25rem' }}>{t.role}</p>
                    <p className="t-label chalk-d" style={{ marginBottom: '0.625rem' }}>{t.org}</p>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--chalk-m)', lineHeight: 1.7 }}>{t.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="t-label gold" style={{ marginBottom: '1rem' }}>Coaching Philosophy</p>
            <h2 className="t-h2" style={{ marginBottom: '3.5rem' }}>What Igor Believes.</h2>
          </Reveal>
          <div className="grid-sep" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div style={{ padding: 'clamp(1.75rem,3vw,2.25rem)' }}>
                  <h3 className="t-h3" style={{ marginBottom: '1rem' }}>{v.title}</h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--chalk-m)', lineHeight: 1.7 }}>{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ borderTop: '1px solid var(--border)', padding: 'clamp(3.5rem,8vw,5rem) clamp(1.25rem,5vw,3rem)', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1280px', margin: '0 auto' }}>
        <Reveal><h2 className="t-h3">Ready to train with European methodology?</h2></Reveal>
        <Reveal delay={100}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact"     className="btn-gold">Book a Session →</Link>
            <Link href="/methodology" className="btn-line">See the ABP™ System</Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
