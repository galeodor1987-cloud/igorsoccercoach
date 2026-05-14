'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/',            label: 'Home' },
  { href: '/about',       label: 'About' },
  { href: '/methodology', label: 'Methodology' },
  { href: '/programs',    label: 'Programs' },
  { href: '/contact',     label: 'Contact' },
]

export default function Nav() {
  const path = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [path])

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '64px', display: 'flex', alignItems: 'center',
        padding: '0 clamp(1.25rem, 5vw, 3rem)',
        borderBottom: scrolled ? '1px solid rgba(245,240,232,0.06)' : '1px solid transparent',
        backgroundColor: scrolled ? 'rgba(12,12,12,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1rem',
          letterSpacing: '-0.01em', color: 'var(--chalk)', textDecoration: 'none',
          marginRight: 'auto',
        }}>
          IK<span style={{ color: 'var(--gold)', marginLeft: '2px' }}>.</span>
        </Link>

        {/* Desktop */}
        <nav aria-label="Main navigation" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden md:flex">
          {NAV.map((l) => (
            <Link key={l.href} href={l.href} className={`nav-link ${path === l.href ? 'active' : ''}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold" style={{ padding: '0.5rem 1.25rem', fontSize: '0.75rem' }}>
            Book a Session
          </Link>
        </nav>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '1px', background: 'var(--chalk)',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: open
                ? i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                : i === 1 ? 'scaleX(0)'
                : 'rotate(-45deg) translate(4px, -4px)'
                : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </header>

      {/* Mobile drawer */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 99, backgroundColor: '#0C0C0C',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: 'clamp(1.25rem, 5vw, 3rem)',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.76,0,0.24,1)',
      }} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {NAV.map((l, i) => (
            <Link key={l.href} href={l.href} style={{
              display: 'block',
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(2rem, 8vw, 3.5rem)',
              fontWeight: 700, letterSpacing: '-0.03em',
              color: path === l.href ? 'var(--gold)' : 'var(--chalk)',
              textDecoration: 'none', lineHeight: 1.1, marginBottom: '0.5rem',
              opacity: open ? 1 : 0,
              transform: open ? 'translateX(0)' : 'translateX(20px)',
              transition: `opacity 0.4s ease ${i * 0.06}s, transform 0.4s ease ${i * 0.06}s`,
            }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn-gold" style={{
          marginTop: '2rem', alignSelf: 'flex-start',
          opacity: open ? 1 : 0, transition: 'opacity 0.4s ease 0.35s',
        }}>
          Book a Session →
        </Link>
      </div>
    </>
  )
}
