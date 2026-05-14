'use client'

import { useState } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const INPUT: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--border)',
  color: 'var(--chalk)',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '1rem',
  fontWeight: 300,
  padding: '0.875rem 0',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  appearance: 'none',
}

const LABEL: React.CSSProperties = {
  display: 'block',
  fontFamily: "'DM Mono', monospace",
  fontSize: '0.6875rem',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--chalk-d)',
  marginBottom: '0.5rem',
}

function focus(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
  e.target.style.borderBottomColor = 'var(--gold)'
}
function blur(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
  e.target.style.borderBottomColor = 'var(--border)'
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', type: 'player', message: '' })

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'sent' : 'error')
      if (res.ok) setForm({ name: '', email: '', type: 'player', message: '' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') return (
    <div style={{ border: '1px solid rgba(201,168,76,0.3)', padding: '3rem 2rem', textAlign: 'center' }}>
      <p style={{ fontFamily: "'Syne', sans-serif", fontSize: '2rem', fontWeight: 700, color: 'var(--gold)', marginBottom: '1rem' }}>
        Message Sent.
      </p>
      <p style={{ color: 'var(--chalk-m)' }}>Igor will be in touch within 24 hours.</p>
    </div>
  )

  return (
    <form onSubmit={submit} noValidate>
      <div style={{ marginBottom: '2rem' }}>
        <label htmlFor="name" style={LABEL}>Full Name</label>
        <input id="name" name="name" type="text" required placeholder="Your name"
          value={form.name} onChange={set} onFocus={focus} onBlur={blur} style={INPUT} />
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <label htmlFor="email" style={LABEL}>Email Address</label>
        <input id="email" name="email" type="email" required placeholder="your@email.com"
          value={form.email} onChange={set} onFocus={focus} onBlur={blur} style={INPUT} />
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <label htmlFor="type" style={LABEL}>I am a</label>
        <select id="type" name="type" value={form.type} onChange={set} onFocus={focus} onBlur={blur}
          style={{ ...INPUT, cursor: 'pointer' }}>
          <option value="player">Player</option>
          <option value="parent">Parent</option>
          <option value="academy">Academy Director</option>
          <option value="club">Club / Organisation</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div style={{ marginBottom: '2.5rem' }}>
        <label htmlFor="message" style={LABEL}>Message</label>
        <textarea id="message" name="message" required rows={5}
          placeholder="Tell me about your goals, age, and current level..."
          value={form.message} onChange={set} onFocus={focus} onBlur={blur}
          style={{ ...INPUT, resize: 'vertical', display: 'block' }} />
      </div>
      {status === 'error' && (
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8125rem', color: '#E24B4A', marginBottom: '1.25rem' }}>
          Something went wrong. Email igor@igorsoccercoach.com directly.
        </p>
      )}
      <button type="submit" disabled={status === 'sending'} className="btn-gold"
        style={{ border: 'none', width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}>
        {status === 'sending' ? 'Sending...' : 'Send Message →'}
      </button>
    </form>
  )
}
