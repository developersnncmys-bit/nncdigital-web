// /features/[slug] is disabled. It will be replaced by /products/ ("Our products").
// Original code preserved in the block comment below so it can be restored or
// used as a reference when the replacement page is wired up.
//
// generateStaticParams returns a single disabled-stub slug — Next.js 15's
// static-export mode rejects an empty array ("missing generateStaticParams"),
// so we emit one invisible placeholder route instead.
/*
import { notFound } from 'next/navigation'
import MarketingPage from '@/components/marketing/MarketingPage'
import { CATEGORIES } from '@/data/pages'

const CATEGORY = 'features'

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
  return <MarketingPage page={p} />
}
*/

export const metadata = { robots: { index: false, follow: false } }
export const dynamicParams = false

export function generateStaticParams() {
  return [{ slug: 'disabled' }]
}

export default function Page() {
  return null
}
