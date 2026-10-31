// Single source of truth for the production origin.
// Used by metadataBase, canonical tags, og:url, robots.txt and sitemap.xml so
// they can never drift apart. Override per environment with NEXT_PUBLIC_SITE_URL.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nncdigital.co.in').replace(
  /\/$/,
  ''
)

// True ONLY when deployed to the production domain. Any other host (localhost,
// Vercel preview, custom staging URL set via NEXT_PUBLIC_SITE_URL) is treated
// as non-production and gets a sitewide noindex. This is what guarantees that
// staging stays private while the live site is fully indexable.
export const IS_LIVE = /nncdigital\.co\.in$/i.test(new URL(SITE_URL).hostname)

// Launch-ready, indexable routes. On the LIVE domain these are allowed in
// robots.txt and listed in sitemap.xml. On staging, the sitewide disallow in
// robots.js still blocks them (the per-page `index: false` is skipped only
// when IS_LIVE is true).
//
// Pages NOT in this list that should also stay noindex on live keep their own
// explicit `robots: { index: false, follow: false }` metadata override — e.g.
// /case-studies, /small-business-crm, /car-studio-crm, /net-zero-crm (stub),
// /features/*, /thank-you.
export const INDEXABLE_PREFIXES = [
  // Home + core marketing
  '/',
  '/pricing',
  '/industries',
  '/industries/sales-teams',
  '/industries/service-businesses',
  '/industries/manufacturing',
  '/industries/retail',
  '/industries/healthcare',
  '/industries/education',
  '/industries/real-estate',
  // Live products
  '/multi-center-training-institutes-crm',
  // Travel CRM — flagship + keyword siblings
  '/travel-crm',
  '/travel-crm-software',
  '/travel-agency-crm',
  '/travel-agency-crm-software',
  '/crm-for-travel-agencies',
  '/travel-agent-crm',
  '/travel-agent-software',
  '/travel-management-software',
  '/tour-operator-crm',
  '/tour-operator-crm-software',
  '/crm-for-tour-operators',
  '/travel-quotation-software',
  '/travel-itinerary-software',
]
