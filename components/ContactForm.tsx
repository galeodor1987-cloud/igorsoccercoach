'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--color-border)',
  color: 'var(--color-chalk)',
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '1rem',
  fontWeight: 300,
  padding: '0.875rem 0',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  appearance: 'none',
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-dm-mono)',
  fontSize: '0.6875rem',
  fontWeight: 400,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--color-chalk-d)',
  display: 'block',
  marginBottom: '0.5rem',
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: 'player',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')

    try {
      // Replace with your actual form endpoint (Formspree, Resend, etc.)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setState('success')
        setForm({ name: '', email: '', type: 'player', message: '' })
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div
        style={{
          border: '1px solid rgba(201,168,76,0.3)',
          padding: '3rem 2rem',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1rem',
            color: 'var(--color-gold)',
          }}
        >
          Message Sent.
        </div>
        <p style={{ color: 'var(--color-chalk-m)', lineHeight: 1.7 }}>
          Igor will be in touch within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Name */}
      <div style={{ marginBottom: '2rem' }}>
        <label htmlFor="name" style={labelStyle}>Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderBottomColor = 'var(--color-gold)')}
          onBlur={(e) => (e.target.style.borderBottomColor = 'var(--color-border)')}
        />
      </div>

      {/* Email */}
      <div style={{ marginBottom: '2rem' }}>
        <label htmlFor="email" style={labelStyle}>Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderBottomColor = 'var(--color-gold)')}
          onBlur={(e) => (e.target.style.borderBottomColor = 'var(--color-border)')}
        />
      </div>

      {/* Type */}
      <div style={{ marginBottom: '2rem' }}>
        <label htmlFor="type" style={labelStyle}>I am a</label>
        <select
          id="type"
          name="type"
          value={form.type}
          onChange={handleChange}
          style={{
            ...inputStyle,
            cursor: 'pointer',
            color: form.type ? 'var(--color-chalk)' : 'var(--color-chalk-d)',
          }}
          onFocus={(e) => (e.target.style.borderBottomColor = 'var(--color-gold)')}
          onBlur={(e) => (e.target.style.borderBottomColor = 'var(--color-border)')}
        >
          <option value="player">Player</option>
          <option value="parent">Parent</option>
          <option value="academy">Academy Director</option>
          <option value="club">Club / Organisation</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div style={{ marginBottom: '2.5rem' }}>
        <label htmlFor="message" style={labelStyle}>Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell me about your goals, age, experience level, or what program interests you..."
          style={{
            ...inputStyle,
            resize: 'vertical',
            display: 'block',
          }}
          onFocus={(e) => (e.target.style.borderBottomColor = 'var(--color-gold)')}
          onBlur={(e) => (e.target.style.borderBottomColor = 'var(--color-border)')}
        />
      </div>

      {state === 'error' && (
        <p
          style={{
            color: '#E24B4A',
            fontFamily: 'var(--font-dm-mono)',
            fontSize: '0.8125rem',
            marginBottom: '1.5rem',
          }}
        >
          Something went wrong. Please try emailing igor@igorsoccercoach.com directly.
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="btn-primary"
        style={{
          border: 'none',
          cursor: state === 'loading' ? 'not-allowed' : 'pointer',
          opacity: state === 'loading' ? 0.7 : 1,
          width: '100%',
          justifyContent: 'center',
          fontSize: '0.875rem',
        }}
      >
        {state === 'loading' ? 'Sending...' : 'Send Message →'}
      </button>
    </form>
  )
}
