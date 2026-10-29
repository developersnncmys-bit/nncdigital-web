// Generates /sitemap.xml.
//
// Only lists pages that are actually indexable — submitting blocked URLs is a
// Search Console error, not a help. The flagship /travel-crm/ carries the
// highest priority; the rest are its keyword siblings.
import { SITE_URL, INDEXABLE_PREFIXES } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap() {
  const lastModified = new Date()
  return INDEXABLE_PREFIXES.map((prefix) => ({
    url: `${SITE_URL}${prefix}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: prefix === '/travel-crm' ? 1 : 0.8,
  }))
}
