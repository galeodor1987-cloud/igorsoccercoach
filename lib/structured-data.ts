const SITE_URL = 'https://www.igorsoccercoach.com'

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Igor Kasianenko',
    url: SITE_URL,
    image: `${SITE_URL}/igor-kasianenko.jpg`,
    jobTitle: 'Elite Football Performance Coach',
    description:
      'Elite soccer performance coach with 395+ professional matches, UEFA Europa League experience, and 5× National Champion title. Creator of the ABP™ Methodology.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Weston',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    sameAs: [
      'https://www.linkedin.com/in/igor-kasianenko',
      'https://www.instagram.com/igorsoccercoach',
    ],
    knowsAbout: [
      'Football Intelligence',
      'Player Development',
      'Soccer Performance Training',
      'ABP Methodology',
      'Youth Soccer Coaching',
      'Cognitive Football Training',
    ],
    alumniOf: [
      { '@type': 'Organization', name: 'FC Astana' },
      { '@type': 'Organization', name: 'FC Zorya Luhansk' },
    ],
    award: [
      '5× National Champion',
      'UEFA Europa League Participant',
    ],
  }
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: 'Igor Kasianenko — Elite Football Performance Coach',
    url: SITE_URL,
    telephone: '',
    email: 'igor@igorsoccercoach.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Weston',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.1003654,
      longitude: -80.3997592,
    },
    openingHours: 'Mo-Sa 07:00-20:00',
    priceRange: '$$',
    description:
      'Elite soccer performance coaching in Weston, FL. ABP™ Methodology. UEFA-level training for players of all ages.',
    image: `${SITE_URL}/og-image.jpg`,
    sameAs: [SITE_URL],
    hasMap: 'https://maps.google.com/?q=Weston,FL',
  }
}

export function serviceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'ABP™ Soccer Performance Coaching',
    provider: {
      '@type': 'Person',
      name: 'Igor Kasianenko',
      url: SITE_URL,
    },
    serviceType: 'Soccer Performance Coaching',
    areaServed: {
      '@type': 'Place',
      name: 'Weston, Florida, USA',
    },
    description:
      'The ABP™ Methodology — a structured system for developing football intelligence, decision-making, and elite physical performance in youth and professional players.',
    offers: [
      {
        '@type': 'Offer',
        name: 'Private Sessions',
        description: '1-on-1 elite performance coaching with the ABP™ system.',
      },
      {
        '@type': 'Offer',
        name: 'Group Training',
        description: 'Small-group sessions focusing on football intelligence and tactical awareness.',
      },
      {
        '@type': 'Offer',
        name: 'Academy Partnerships',
        description: 'Curriculum design and coaching delivery for soccer academies.',
      },
    ],
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
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
