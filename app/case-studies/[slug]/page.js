import { notFound } from 'next/navigation'
import MarketingPage from '@/components/marketing/MarketingPage'
import { CATEGORIES } from '@/data/pages'

const CATEGORY = 'caseStudies'

export function generateStaticParams() {
  return Object.keys(CATEGORIES[CATEGORY]).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = CATEGORIES[CATEGORY][slug]
  return p
    ? {
        title: p.metaTitle,
        description: p.metaDescription,
        alternates: { canonical: `/case-studies/${slug}/` },
      }
    : {}
}

export default async function Page({ params }) {
  const { slug } = await params
  const p = CATEGORIES[CATEGORY][slug]
  if (!p) notFound()
  return <MarketingPage page={p} />
}
