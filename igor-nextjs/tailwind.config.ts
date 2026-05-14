import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pitch: {
          950: '#080808',
          900: '#0C0C0C',
          800: '#141414',
          700: '#1C1C1C',
          600: '#242424',
          500: '#2E2E2E',
        },
        chalk: {
          DEFAULT: '#F5F0E8',
          muted: 'rgba(245,240,232,0.55)',
          dim: 'rgba(245,240,232,0.25)',
          ghost: 'rgba(245,240,232,0.08)',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C96A',
          dark: '#9A7B2E',
        },
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        '9xl':  ['8rem',  { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        '8xl':  ['6rem',  { lineHeight: '0.92', letterSpacing: '-0.03em' }],
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'line-grow':  'lineGrow 1s ease forwards',
        'counter':    'counter 2s ease-out forwards',
        'grain':      'grain 8s steps(10) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineGrow: {
          '0%':   { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        grain: {
          '0%,100%': { transform: 'translate(0,0)' },
          '10%':     { transform: 'translate(-2%,-3%)' },
          '20%':     { transform: 'translate(3%,2%)' },
          '30%':     { transform: 'translate(-1%,4%)' },
          '40%':     { transform: 'translate(4%,-1%)' },
          '50%':     { transform: 'translate(-3%,3%)' },
          '60%':     { transform: 'translate(2%,-4%)' },
          '70%':     { transform: 'translate(-4%,1%)' },
          '80%':     { transform: 'translate(1%,-2%)' },
          '90%':     { transform: 'translate(3%,4%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
