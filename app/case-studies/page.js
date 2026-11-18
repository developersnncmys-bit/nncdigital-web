import MarketingPage from '@/components/marketing/MarketingPage'
import { CASE_STUDIES_OVERVIEW } from '@/data/pages'

export const metadata = {
  title: CASE_STUDIES_OVERVIEW.metaTitle,
  description: CASE_STUDIES_OVERVIEW.metaDescription,
  alternates: { canonical: '/case-studies/' },
}

export default function Page() {
  return <MarketingPage page={CASE_STUDIES_OVERVIEW} />
}
