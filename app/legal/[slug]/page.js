import { notFound } from 'next/navigation'
import MarketingPage from '@/components/marketing/MarketingPage'
import LegalPage from '@/components/legal/LegalPage'
import { CATEGORIES } from '@/data/pages'

const CATEGORY = 'legal'

// Slugs that render with the dedicated LegalPage layout (dark hero + TOC +
// numbered sections). The compliance page also uses this layout but passes
// through an extra cards block + CTA band appended under the sections.
const LEGAL_LAYOUT_SLUGS = new Set([
  'privacy',
  'terms',
  'acceptable-use',
  'cookies',
  'trust-center',
  'compliance',
])

export function generateStaticParams() {
  return Object.keys(CATEGORIES[CATEGORY]).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = CATEGORIES[CATEGORY][slug]
  return p ? { title: p.metaTitle, description: p.metaDescription } : {}
}

export default async function Page({ params }) {
  const { slug } = await params
  const p = CATEGORIES[CATEGORY][slug]
  if (!p) notFound()

  if (LEGAL_LAYOUT_SLUGS.has(slug)) {
    const prose = p.blocks?.find((b) => b.type === 'prose')
    const cardsBlock = p.blocks?.find((b) => b.type === 'cards')
    const related = cardsBlock
      ? { title: cardsBlock.title, items: cardsBlock.items }
      : undefined
    return (
      <LegalPage
        title={p.hero?.title || ''}
        intro={p.hero?.lead}
        lastUpdated={p.lastUpdated}
        sections={prose?.sections || []}
        related={related}
        cta={p.cta || undefined}
      />
    )
  }

  return <MarketingPage page={p} />
}
