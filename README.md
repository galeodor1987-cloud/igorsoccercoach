# Igor Kasianenko — igorsoccercoach.com
## Next.js 15 App Router · SEO-Optimised · Vercel-Ready

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS Custom Properties |
| Fonts | Syne · DM Sans · DM Mono (Google Fonts) |
| Rendering | SSR + Static Generation |
| Deployment | Vercel |
| Forms | Resend (or Formspree) |

---

## Project Structure

```
igor-nextjs/
├── app/
│   ├── layout.tsx          ← Root layout, metadata, structured data
│   ├── page.tsx            ← Home (SSG)
│   ├── globals.css         ← Design system, animations, tokens
│   ├── sitemap.ts          ← Auto-generated /sitemap.xml
│   ├── robots.ts           ← Auto-generated /robots.txt
│   ├── not-found.tsx       ← Custom 404
│   ├── about/page.tsx      ← About page (SSG)
│   ├── methodology/page.tsx← ABP™ page (SSG) — KEY SEO PAGE
│   ├── programs/page.tsx   ← Programs page (SSG)
│   ├── contact/page.tsx    ← Contact page (SSG)
│   └── api/contact/route.ts← Form submission API route
├── components/
│   ├── Nav.tsx             ← Fixed nav with mobile drawer
│   ├── Footer.tsx          ← Footer with links + credentials
│   ├── Reveal.tsx          ← IntersectionObserver scroll reveal
│   └── ContactForm.tsx     ← Client-side form with validation
├── lib/
│   ├── metadata.ts         ← Shared SEO metadata + Open Graph
│   └── structured-data.ts  ← JSON-LD schemas (Person, LocalBusiness, Service)
├── public/                 ← Static assets (add og-image.jpg here!)
├── next.config.ts
├── tailwind.config.ts
├── vercel.json
└── .env.example
```

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp .env.example .env.local
# Fill in RESEND_API_KEY and Google verification code

# 3. Run dev server
npm run dev
# → http://localhost:3000
```

---

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (first time — follow prompts)
vercel

# Production deploy
vercel --prod
```

Or connect your GitHub repo at vercel.com/new for automatic deployments.

---

## Post-Deployment SEO Checklist

### 1. Google Search Console
- [ ] Go to https://search.google.com/search-console
- [ ] Add property: `https://www.igorsoccercoach.com`
- [ ] Copy verification code → paste into `lib/metadata.ts` → `verification.google`
- [ ] Submit sitemap: `https://www.igorsoccercoach.com/sitemap.xml`
- [ ] Run URL Inspection on homepage → Request Indexing

### 2. Google Business Profile
- [ ] Go to https://business.google.com
- [ ] Create listing: "Igor Kasianenko — Soccer Performance Coach"
- [ ] Category: "Sports Coach" or "Athletic Coach"
- [ ] Address: Weston, FL
- [ ] Link to website
- [ ] Request reviews from past clients

### 3. Open Graph Image
- [ ] Create a 1200×630px image (Igor photo + name + tagline)
- [ ] Save as `public/og-image.jpg`
- [ ] Test with: https://opengraph.xyz/igorsoccercoach.com

### 4. Contact Form
- [ ] Sign up at resend.com (free tier available)
- [ ] Add `RESEND_API_KEY` to Vercel Environment Variables
- [ ] Uncomment Resend code in `app/api/contact/route.ts`
- [ ] Test form submission end-to-end

### 5. Analytics
- [ ] Set up Google Analytics 4 at analytics.google.com
- [ ] Add GA Measurement ID to `.env.local`
- [ ] Install: `npm install @next/third-parties`
- [ ] Add `<GoogleAnalytics gaId={...} />` to layout.tsx

---

## SEO Architecture

### Pages & Priorities

| URL | Type | Sitemap Priority | Target Keywords |
|---|---|---|---|
| `/` | SSG | 1.0 | igor kasianenko, soccer coach weston fl |
| `/methodology` | SSG | 0.9 | abp methodology, football intelligence training |
| `/about` | SSG | 0.9 | igor kasianenko coach, european football coach florida |
| `/programs` | SSG | 0.85 | soccer coaching weston fl, youth soccer training |
| `/contact` | SSG | 0.8 | book soccer coach florida |

### Structured Data Schemas
- `Person` — Igor's identity, credentials, career
- `SportsActivityLocation` — Local business with Weston, FL geo
- `Service` — ABP™ coaching service with offers
- `BreadcrumbList` — On every inner page

### Rendering Strategy
All pages use **Static Generation (SSG)** — they're pre-rendered at build time.
This means Google sees full HTML immediately, with no JavaScript required.

---

## Design Tokens

| Token | Value |
|---|---|
| Background | `#0C0C0C` |
| Surface | `#141414` |
| Border | `rgba(245,240,232,0.08)` |
| Chalk (text) | `#F5F0E8` |
| Gold (accent) | `#C9A84C` |
| Font Display | Syne |
| Font Body | DM Sans |
| Font Mono | DM Mono |

---

## Adding Blog Posts (Future)

```
app/
├── blog/
│   ├── page.tsx            ← Blog listing (SSG)
│   └── [slug]/
│       └── page.tsx        ← Individual post (SSG with generateStaticParams)
lib/
└── posts.ts                ← MDX or CMS integration
```

Recommended CMS: **Sanity.io** or **Contentlayer** for MDX.

---

## Support

Built for Igor Kasianenko — igorsoccercoach.com  
ABP™ Methodology · Weston, Florida · UEFA · 395+ Professional Matches
