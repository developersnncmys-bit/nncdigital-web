import TravelKeywordPage, { buildMetadata } from '@/components/travel/TravelKeywordPage'

const SLUG = 'crm-for-tour-operators'

export const metadata = buildMetadata(SLUG)

export default function Page() {
  return <TravelKeywordPage slug={SLUG} />
}
