import TravelKeywordPage, { buildMetadata } from '@/components/travel/TravelKeywordPage'

const SLUG = 'travel-management-software'

export const metadata = buildMetadata(SLUG)

export default function Page() {
  return <TravelKeywordPage slug={SLUG} />
}
