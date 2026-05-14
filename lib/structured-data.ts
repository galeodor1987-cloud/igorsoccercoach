const SITE_URL = 'https://www.igorsoccercoach.com'

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Igor Kasianenko',
  url: SITE_URL,
  jobTitle: 'Elite Football Performance Coach',
  description: 'Elite soccer performance coach with 395+ professional matches, UEFA Europa League experience, and 5× National Champion title. Creator of the ABP™ Methodology.',
  address: { '@type': 'PostalAddress', addressLocality: 'Weston', addressRegion: 'FL', addressCountry: 'US' },
  knowsAbout: ['Football Intelligence', 'Player Development', 'Soccer Performance Training', 'ABP Methodology', 'Cognitive Football Training'],
  alumniOf: [{ '@type': 'Organization', name: 'FC Astana' }, { '@type': 'Organization', name: 'FC Zorya Luhansk' }],
  award: ['5× National Champion', 'UEFA Europa League Participant'],
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Igor Kasianenko — Elite Football Performance Coach',
  url: SITE_URL,
  email: 'igor@igorsoccercoach.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Weston', addressRegion: 'FL', addressCountry: 'US' },
  geo: { '@type': 'GeoCoordinates', latitude: 26.1003654, longitude: -80.3997592 },
  description: 'Elite soccer performance coaching in Weston, FL. ABP™ Methodology. UEFA-level training.',
  priceRange: '$$',
}

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ABP™ Soccer Performance Coaching',
  provider: { '@type': 'Person', name: 'Igor Kasianenko', url: SITE_URL },
  serviceType: 'Soccer Performance Coaching',
  areaServed: { '@type': 'Place', name: 'Weston, Florida, USA' },
  description: 'The ABP™ Methodology — a structured system for developing football intelligence, decision-making, and elite physical performance.',
  offers: [
    { '@type': 'Offer', name: 'Private Sessions', description: '1-on-1 elite performance coaching.' },
    { '@type': 'Offer', name: 'Group Training', description: 'Small-group football intelligence sessions.' },
    { '@type': 'Offer', name: 'Academy Partnerships', description: 'Curriculum design for soccer academies.' },
  ],
}

export function breadcrumb(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}
