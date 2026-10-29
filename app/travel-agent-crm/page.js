import TravelKeywordPage, { buildMetadata } from '@/components/travel/TravelKeywordPage'

const SLUG = 'travel-agent-crm'

export const metadata = buildMetadata(SLUG)

export default function Page() {
  return <TravelKeywordPage slug={SLUG} />
}
