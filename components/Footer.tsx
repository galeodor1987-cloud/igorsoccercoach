import Link from 'next/link'

const LINKS = [
  { href: '/',            label: 'Home' },
  { href: '/about',       label: 'About' },
  { href: '/methodology', label: 'ABP™ Methodology' },
  { href: '/programs',    label: 'Programs' },
  { href: '/contact',     label: 'Contact' },
]

const CREDS = [
  '395+ Professional Matches',
  'UEFA Europa League',
  '5× National Champion',
  'ABP™ Methodology Creator',
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: 'clamp(3rem, 8vw, 5rem) 0 2rem' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

          {/* Brand */}
          <div>
            <p style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Igor Kasianenko<span className="gold">.</span>
            </p>
            <p style={{ fontSize: '0.875rem', color: 'var(--chalk-m)', lineHeight: 1.7, maxWidth: '220px' }}>
              Elite Football Performance Coach.<br />ABP™ Methodology.<br />Weston, Florida.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="t-label chalk-d" style={{ marginBottom: '1.25rem' }}>Navigation</p>
            <nav aria-label="Footer navigation">
              {LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="h-chalk"
                  style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.625rem' }}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="t-label chalk-d" style={{ marginBottom: '1.25rem' }}>Contact</p>
            <a href="mailto:igor@igorsoccercoach.com" className="h-gold"
              style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.625rem' }}>
              igor@igorsoccercoach.com
            </a>
            <p style={{ fontSize: '0.875rem', color: 'var(--chalk-m)' }}>Weston, Florida, USA</p>
          </div>

          {/* Credentials */}
          <div>
            <p className="t-label chalk-d" style={{ marginBottom: '1.25rem' }}>Credentials</p>
            {CREDS.map((c) => (
              <p key={c} style={{ fontSize: '0.8125rem', color: 'var(--chalk-m)', marginBottom: '0.5rem' }}>— {c}</p>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: 'var(--chalk-d)' }}>
            © {year} Igor Kasianenko. All rights reserved.
          </p>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: 'var(--chalk-d)' }}>
            Weston · Florida · USA
          </p>
        </div>
      </div>
    </footer>
  )
}
