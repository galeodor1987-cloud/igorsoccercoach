import type { MetadataRoute } from 'next'

const SITE = 'https://www.igorsoccercoach.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: SITE,                      lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE}/about`,           lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/methodology`,     lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/programs`,        lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE}/contact`,         lastModified: now, changeFrequency: 'yearly',  priority: 0.8 },
  ]
}
