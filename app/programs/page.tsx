import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { pageMeta } from '@/lib/metadata'
import { breadcrumb } from '@/lib/structured-data'

export const metadata: Metadata = pageMeta({
  title: 'Training Programs | Soccer Coaching Weston FL',
  description: 'Private sessions, group training, and academy partnerships in Weston, FL. ABP™ Methodology. Soccer performance coaching for players of all ages and levels.',
  alternates: { canonical: 'https://www.igorsoccercoach.com/programs' },
  openGraph: { url: 'https://www.igorsoccercoach.com/programs', title: 'Training Programs | Igor Kasianenko Soccer Coach' },
})

const PROGRAMS = [
  {
    id: 'private', featured: true, badge: 'Most Popular',
    title: 'Private Sessions', sub: '1-on-1 · All Ages · All Levels',
    desc: 'The flagship ABP™ experience. Fully personalised to your position, age, development stage, and goals. No generic drills, no wasted reps.',
    features: ['Full ABP™ methodology — all three pillars every session', 'Position-specific intelligence training', 'Video analysis on request', 'Progress tracking and periodic assessments', 'Custom home training programme', 'Direct access to Igor between sessions'],
    duration: '60–90 min', freq: 'Flexible scheduling',
  },
  {
    id: 'group', featured: false, badge: null,
    title: 'Group Training', sub: 'Small Group · 4–8 Players',
    desc: 'Intelligence-first training in a competitive, collaborative environment. The group structure creates the pressure that individual sessions cannot replicate.',
    features: ['ABP™ group methodology adapted for team dynamics', 'Positional play and combination patterns', 'Decision-making under competitive pressure', 'Tactical scenarios and small-sided games', 'Peer learning and team communication skills'],
    duration: '75–90 min', freq: 'Weekly sessions',
  },
  {
    id: 'academy', featured: false, badge: null,
    title: 'Academy Partnerships', sub: 'Clubs & Organisations',
    desc: 'For soccer academies and clubs that want to embed European-standard player development into their curriculum.',
    features: ['ABP™ curriculum design and integration', 'Coach education workshops', 'Player assessment frameworks', 'Session planning and periodisation', 'Long-term development roadmaps', 'On-site delivery and remote support'],
    duration: 'Custom engagement', freq: 'Ongoing partnership',
  },
]

const AUDIENCES = [
  { title: 'Players',           body: 'Youth (8+), teenage, college, and semi-professional players developing intelligence and technical ability.' },
  { title: 'Parents',           body: 'Families who want a structured, transparent development path — not just fitness drills.' },
  { title: 'Academy Directors', body: 'Organisations raising development standards with a proven, European-informed methodology.' },
  { title: 'Professional Clubs',body: 'MLS, MLS NEXT, and USL clubs seeking supplementary coaching for player performance.' },
]

export default function Programs() {
  const bc = breadcrumb([{ name: 'Home', url: '/' }, { name: 'Programs', url: '/programs' }])
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />

      {/* Hero */}
      <section style={{ padding: 'clamp(7rem,15vw,10rem) clamp(1.25rem,5vw,3rem) clamp(4rem,8vw,6rem)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="t-label gold anim-fade-in d1" style={{ marginBottom: '1.5rem' }}>Training Programs</p>
          <h1 className="t-hero anim-fade-up d2">Train with<br /><span style={{ color: 'var(--chalk-m)' }}>Purpose.</span></h1>
          <p className="anim-fade-up d3" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--chalk-m)', maxWidth: '560px', marginTop: '2rem', lineHeight: 1.7 }}>
            Every ABP™ session is built around one objective: making you a smarter, more complete footballer.
          </p>
        </div>
      </section>

      {/* Program cards */}
      <section className="section">
        <div className="wrap" style={{ display: 'grid', gap: '1.5rem' }}>
          {PROGRAMS.map((prog, i) => (
            <Reveal key={prog.id} delay={i * 80}>
              <div id={prog.id} style={{
                border: prog.featured ? '1px solid rgba(201,168,76,0.4)' : '1px solid var(--border)',
                padding: 'clamp(2rem,4vw,3rem)', position: 'relative',
              }}>
                {prog.badge && (
                  <div style={{ position: 'absolute', top: '-1px', left: '2rem', background: 'var(--gold)', color: '#0C0C0C', fontFamily: "'DM Mono', monospace", fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px' }}>
                    {prog.badge}
                  </div>
                )}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                  <div>
                    <p className="t-label chalk-d" style={{ marginBottom: '1rem', marginTop: prog.badge ? '1rem' : 0 }}>{prog.sub}</p>
                    <h2 className="t-h2" style={{ marginBottom: '1.25rem' }}>{prog.title}</h2>
                    <p style={{ color: 'var(--chalk-m)', lineHeight: 1.75, fontSize: '0.9375rem', marginBottom: '2rem' }}>{prog.desc}</p>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                      <div>
                        <p className="t-label chalk-d" style={{ marginBottom: '0.25rem' }}>Duration</p>
                        <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 500, fontSize: '0.875rem' }}>{prog.duration}</p>
                      </div>
                      <div>
                        <p className="t-label chalk-d" style={{ marginBottom: '0.25rem' }}>Format</p>
                        <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 500, fontSize: '0.875rem' }}>{prog.freq}</p>
                      </div>
                    </div>
                    <Link href="/contact" className={prog.featured ? 'btn-gold' : 'btn-line'}>Book This Program →</Link>
                  </div>
                  <div>
                    <p className="t-label chalk-d" style={{ marginBottom: '1.25rem' }}>What&apos;s Included</p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {prog.features.map(f => (
                        <li key={f} style={{ display: 'flex', gap: '0.75rem', color: 'var(--chalk-m)', fontSize: '0.9375rem', lineHeight: 1.6, paddingBottom: '0.75rem', borderBottom: '1px solid var(--border)', marginBottom: '0.75rem' }}>
                          <span className="gold" style={{ flexShrink: 0 }}>✓</span>{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <Reveal>
            <p className="t-label gold" style={{ marginBottom: '1rem' }}>Who it&apos;s for</p>
            <h2 className="t-h2" style={{ marginBottom: '3.5rem' }}>Everyone who wants to think better on the pitch.</h2>
          </Reveal>
          <div className="grid-sep" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {AUDIENCES.map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <div style={{ padding: 'clamp(1.75rem,3vw,2.25rem)' }}>
                  <h3 className="t-h3" style={{ marginBottom: '0.875rem' }}>{a.title}</h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--chalk-m)', lineHeight: 1.7 }}>{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: '1px solid var(--border)', padding: 'clamp(3.5rem,8vw,5rem) clamp(1.25rem,5vw,3rem)', textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
        <Reveal>
          <h2 className="t-h2" style={{ marginBottom: '1.25rem' }}>Not sure which program?</h2>
          <p style={{ color: 'var(--chalk-m)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Send a message and Igor will personally recommend the right path based on your goals, age, and current level.
          </p>
          <Link href="/contact" className="btn-gold">Get a Recommendation →</Link>
        </Reveal>
      </section>
    </>
  )
}
