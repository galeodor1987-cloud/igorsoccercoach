import type { Metadata } from 'next'

export const SITE_URL = 'https://www.igorsoccercoach.com'
const SITE_NAME = 'Igor Kasianenko — Elite Football Performance Coach'

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Igor Kasianenko | Soccer Performance Coach | Weston, FL',
    template: '%s | Igor Kasianenko',
  },
  description:
    'Elite soccer performance coach in Weston, FL. 395+ professional matches · UEFA Europa League · 5× National Champion. Train smarter with the ABP™ Methodology.',
  keywords: [
    'soccer coach Weston FL',
    'elite soccer coach Florida',
    'football performance coach',
    'ABP methodology soccer',
    'football intelligence training',
    'youth soccer coach Broward County',
    'player development specialist Florida',
    'UEFA coach Florida',
    'Igor Kasianenko',
    'soccer training Florida',
    'cognitive soccer training',
    'MLS NEXT coach Florida',
  ],
  authors: [{ name: 'Igor Kasianenko', url: SITE_URL }],
  creator: 'Igor Kasianenko',
  publisher: 'Igor Kasianenko',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Igor Kasianenko | Soccer Performance Coach | Weston, FL',
    description:
      'UEFA-level methodology. 395+ professional matches. 5× National Champion. Now in Weston, Florida. Train with the ABP™ System.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Igor Kasianenko | Soccer Performance Coach',
    description: 'UEFA-level methodology. 395+ matches. 5× National Champion. Weston, Florida.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: SITE_URL },
  verification: {
    // Add your Google Search Console verification token here:
    google: 'ADD_YOUR_GOOGLE_VERIFICATION_TOKEN_HERE',
  },
}

export function pageMeta(overrides: Partial<Metadata>): Metadata {
  return {
    ...rootMetadata,
    ...overrides,
    openGraph: { ...(rootMetadata.openGraph ?? {}), ...(overrides.openGraph ?? {}) },
    twitter:   { ...(rootMetadata.twitter   ?? {}), ...(overrides.twitter   ?? {}) },
  }
}
