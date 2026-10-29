// Single source of truth for the production origin.
// Used by metadataBase, canonical tags, og:url, robots.txt and sitemap.xml so
// they can never drift apart. Override per environment with NEXT_PUBLIC_SITE_URL.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nncdigital.co.in').replace(
  /\/$/,
  ''
)

// Only the Travel CRM landing pages are open to search engines for now; the
// rest of the site stays blocked until it launches. Kept here so robots.txt,
// _headers, sitemap.xml and the per-page metadata all agree.
export const INDEXABLE_PREFIXES = ['/travel-crm', '/travel-crm-software', '/travel-agency-crm', '/travel-agency-crm-software', '/crm-for-travel-agencies', '/travel-agent-crm', '/travel-agent-software', '/travel-management-software', '/tour-operator-crm', '/tour-operator-crm-software', '/crm-for-tour-operators', '/travel-quotation-software', '/travel-itinerary-software']
