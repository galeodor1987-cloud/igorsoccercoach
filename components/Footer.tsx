import Link from 'next/link'

const footerLinks = [
  { href: '/about',       label: 'About' },
  { href: '/methodology', label: 'ABP™ Methodology' },
  { href: '/programs',    label: 'Programs' },
  { href: '/contact',     label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        padding: 'clamp(3rem, 8vw, 5rem) 0 2rem',
        marginTop: 'auto',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '1.5rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              Igor Kasianenko
              <span style={{ color: 'var(--color-gold)' }}>.</span>
            </div>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-chalk-m)',
                lineHeight: 1.7,
                maxWidth: '240px',
              }}
            >
              Elite Football Performance Coach.
              <br />
              ABP™ Methodology.
              <br />
              Weston, Florida.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="label" style={{ color: 'var(--color-chalk-d)', marginBottom: '1.25rem' }}>
              Navigation
            </p>
            <nav aria-label="Footer navigation">
              {footerLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="hover-chalk"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    marginBottom: '0.625rem',
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="label" style={{ color: 'var(--color-chalk-d)', marginBottom: '1.25rem' }}>
              Contact
            </p>
            <a
              href="mailto:igor@igorsoccercoach.com"
              className="hover-gold"
              style={{
                display: 'block',
                fontSize: '0.875rem',
                marginBottom: '0.625rem',
              }}
            >
              igor@igorsoccercoach.com
            </a>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-chalk-m)' }}>
              Weston, Florida, USA
            </p>
          </div>

          {/* Credentials */}
          <div>
            <p className="label" style={{ color: 'var(--color-chalk-d)', marginBottom: '1.25rem' }}>
              Credentials
            </p>
            {[
              '395+ Professional Matches',
              'UEFA Europa League',
              '5× National Champion',
              'ABP™ Methodology Creator',
            ].map((c) => (
              <p key={c} style={{ fontSize: '0.8125rem', color: 'var(--color-chalk-m)', marginBottom: '0.5rem' }}>
                — {c}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid var(--color-border)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <p style={{ fontSize: '0.75rem', color: 'var(--color-chalk-d)', fontFamily: 'var(--font-dm-mono)' }}>
            © {year} Igor Kasianenko. All rights reserved.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-chalk-d)', fontFamily: 'var(--font-dm-mono)' }}>
            Weston · Florida · USA
          </p>
        </div>
      </div>
    </footer>
  )
}
