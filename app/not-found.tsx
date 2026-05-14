import Link from 'next/link'

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(1.25rem, 5vw, 3rem)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
        <div
          className="label"
          style={{ color: 'var(--color-gold)', marginBottom: '1.5rem' }}
        >
          404 — Page Not Found
        </div>
        <h1 className="heading-xl" style={{ marginBottom: '2rem' }}>
          Wrong Pitch.
        </h1>
        <p
          style={{
            fontSize: '1.0625rem',
            color: 'var(--color-chalk-m)',
            maxWidth: '420px',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}
        >
          This page doesn&apos;t exist — but your development does.
          Let&apos;s get you back on track.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-primary">Back to Home →</Link>
          <Link href="/contact" className="btn-outline">Contact Igor</Link>
        </div>
      </div>
    </section>
  )
}
