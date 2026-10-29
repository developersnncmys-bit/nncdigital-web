import TravelKeywordPage, { buildMetadata } from '@/components/travel/TravelKeywordPage'

const SLUG = 'tour-operator-crm-software'

export const metadata = buildMetadata(SLUG)

export default function Page() {
  return <TravelKeywordPage slug={SLUG} />
}
