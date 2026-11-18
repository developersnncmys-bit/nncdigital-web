import MarketingPage from '@/components/marketing/MarketingPage'
import { INDUSTRIES_OVERVIEW } from '@/data/pages'

export const metadata = {
  title: INDUSTRIES_OVERVIEW.metaTitle,
  description: INDUSTRIES_OVERVIEW.metaDescription,
  alternates: { canonical: '/industries/' },
}

export default function Page() {
  return <MarketingPage page={INDUSTRIES_OVERVIEW} />
}
