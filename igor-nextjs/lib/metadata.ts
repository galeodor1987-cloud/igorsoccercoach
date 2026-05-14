import type { Metadata } from 'next'

const SITE_URL = 'https://www.igorsoccercoach.com'
const SITE_NAME = 'Igor Kasianenko — Elite Football Performance Coach'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Igor Kasianenko | Elite Soccer Performance Coach | Weston, FL',
    template: '%s | Igor Kasianenko',
  },
  description:
    'Elite soccer performance coach in Weston, FL. 395+ professional matches · UEFA Europa League · 5× National Champion. Train smarter with the ABP™ Methodology. Book a session today.',
  keywords: [
    'soccer coach Weston FL',
    'elite soccer coach Florida',
    'football performance coach',
    'ABP methodology soccer',
    'football intelligence training',
    'youth soccer coach Broward County',
    'player development specialist Florida',
    'UEFA coach Florida',
    'MLS NEXT coach',
    'cognitive soccer training',
    'Igor Kasianenko',
    'soccer coach near me',
    'soccer training Florida',
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
    title: 'Igor Kasianenko | Elite Soccer Performance Coach | Weston, FL',
    description:
      'UEFA-level methodology. 395+ professional matches. 5× National Champion. Now in Weston, Florida. The ABP™ System — train with intelligence.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Igor Kasianenko — Elite Football Performance Coach',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Igor Kasianenko | Elite Soccer Performance Coach',
    description:
      'UEFA-level methodology. 395+ professional matches. 5× National Champion. Weston, Florida.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
}

export function pageMetadata(overrides: Partial<Metadata>): Metadata {
  return {
    ...defaultMetadata,
    ...overrides,
    openGraph: {
      ...(defaultMetadata.openGraph as object),
      ...(overrides.openGraph as object ?? {}),
    },
    twitter: {
      ...(defaultMetadata.twitter as object),
      ...(overrides.twitter as object ?? {}),
    },
  }
}

export { SITE_URL, SITE_NAME }
