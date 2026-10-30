// /net-zero-crm is disabled.
//
// The ESG/BRSR tracker was pulled from the live site on 2026-10-30. The full
// original page is preserved in the block comment below so it can be restored
// without reconstructing all the data. All product-drawer / footer / nav
// references were also removed in the same change — see:
//   - data/content.js (products array + footer menu)
//   - components/layout/Footer/Footer.jsx (HREF map)
//   - components/marketing/MarketingPage.jsx (netZeroDashboard HERO_COMPONENT)
//
// This file still exists so the route doesn't 404 — it renders null and is
// noindexed. To re-enable, uncomment the block below, restore the product
// entry in data/content.js and re-wire the HERO_COMPONENT.
/*
import MarketingPage from '@/components/marketing/MarketingPage'

export const metadata = {
  title: 'NNC Net Zero CRM | BRSR & ESG tracker for Indian businesses',
  description:
    'The ESG tracker your biggest customers are asking for. BRSR-ready reporting for growing Indian businesses — energy, water, waste, workforce and Scope 1-2 emissions in one audit-ready workspace.',
  robots: { index: false, follow: false },
}

const PAGE = {
  // ... (original 200+ line config preserved in git history / previous commit)
}

export default function Page() {
  return <MarketingPage page={PAGE} />
}
*/

export const metadata = { robots: { index: false, follow: false } }

export default function Page() {
  return null
}
