// Generates /robots.txt.
//
// The main site is still pre-launch and stays blocked. The Travel CRM landing
// pages are open: Google matches the most specific rule, so the Allow lines
// below win over the blanket Disallow for those paths. /_next/ is allowed so
// the pages can actually be rendered and their CSS/JS fetched.
import { SITE_URL, INDEXABLE_PREFIXES } from '@/lib/site'

export const dynamic = 'force-static'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [...INDEXABLE_PREFIXES.map((p) => `${p}/`), '/_next/', '/og/'],
        disallow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
