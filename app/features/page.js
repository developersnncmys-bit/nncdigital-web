// /features/ is disabled. It will be replaced by /products/ ("Our products").
// Original code preserved in the block comment below so it can be restored or
// used as a reference when the replacement page is wired up.
/*
import MarketingPage from '@/components/marketing/MarketingPage'
import { FEATURES_OVERVIEW } from '@/data/pages'

export const metadata = {
  title: FEATURES_OVERVIEW.metaTitle,
  description: FEATURES_OVERVIEW.metaDescription,
}

export default function Page() {
  return <MarketingPage page={FEATURES_OVERVIEW} />
}
*/

export const metadata = { robots: { index: false, follow: false } }

export default function Page() {
  return null
}
