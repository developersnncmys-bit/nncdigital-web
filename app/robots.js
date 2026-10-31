// Generates /robots.txt.
//
// Live (nncdigital.co.in): fully open — crawlers follow the per-page robots
// meta tag for anything that should stay noindex (case studies, car studio,
// small business, net zero stub, features, thank-you).
//
// Staging / preview / localhost: blanket disallow, with only the Travel CRM
// landing pages allowed through (Google matches the most specific rule, so
// Allow beats Disallow for those paths). /_next/ is allowed so the open
// pages can actually be rendered and their CSS/JS fetched.
import { SITE_URL, IS_LIVE, INDEXABLE_PREFIXES } from '@/lib/site'

export const dynamic = 'force-static'

// Travel CRM paths kept open on staging so SEO work on them is testable
// before launch. Everything else on staging stays blocked.
const STAGING_ALLOW = INDEXABLE_PREFIXES.filter((p) => p.includes('travel') || p.includes('tour'))

export default function robots() {
  return {
    rules: IS_LIVE
      ? [{ userAgent: '*', allow: '/' }]
      : [
          {
            userAgent: '*',
            allow: [...STAGING_ALLOW.map((p) => `${p}/`), '/_next/', '/og/'],
            disallow: '/',
          },
        ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
