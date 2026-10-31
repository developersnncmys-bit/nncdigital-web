// Generates /sitemap.xml.
//
// Only lists pages that are actually indexable — submitting blocked URLs is a
// Search Console error, not a help.
//
// Live: lists every launch-ready route from INDEXABLE_PREFIXES.
// Staging: lists only the Travel CRM landing pages (the subset still allowed
// through robots.txt on staging), so Search Console previews stay sane.
import { SITE_URL, IS_LIVE, INDEXABLE_PREFIXES } from '@/lib/site'

export const dynamic = 'force-static'

// Home carries top priority, then Travel CRM flagship, then everything else.
const priorityFor = (p) => {
  if (p === '/') return 1
  if (p === '/travel-crm') return 0.9
  return 0.7
}

export default function sitemap() {
  const lastModified = new Date()
  const prefixes = IS_LIVE
    ? INDEXABLE_PREFIXES
    : INDEXABLE_PREFIXES.filter((p) => p.includes('travel') || p.includes('tour'))
  return prefixes.map((prefix) => ({
    // Avoid '//' for the home '/' entry.
    url: prefix === '/' ? `${SITE_URL}/` : `${SITE_URL}${prefix}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: priorityFor(prefix),
  }))
}
