import { notFound } from 'next/navigation'
import MarketingPage from '@/components/marketing/MarketingPage'
import { CATEGORIES } from '@/data/pages'

const CATEGORY = 'support'
// `contact` has its own bespoke page at app/support/contact
const EXCLUDE = new Set(['contact'])

export function generateStaticParams() {
  return Object.keys(CATEGORIES[CATEGORY])
    .filter((slug) => !EXCLUDE.has(slug))
    .map((slug) => ({ slug }))
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
  return <MarketingPage page={p} />
}
