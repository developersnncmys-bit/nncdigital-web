import { notFound } from 'next/navigation'
import BlogPost from '@/components/blog/BlogPost'
import { POSTS, POSTS_BY_SLUG } from '@/data/blog'

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = POSTS_BY_SLUG[slug]
  if (!p) return {}
  return {
    // Prefer the SEO brief's short meta title when provided; fall back to the
    // long H1-style title for posts that don't ship a shorter alternative.
    title: p.metaTitle ? `${p.metaTitle} | NNC Digital` : `${p.title} | NNC Digital`,
    description: p.metaDescription || p.excerpt,
    robots: { index: false, follow: false },
  }
}

export default async function Page({ params }) {
  const { slug } = await params
  const post = POSTS_BY_SLUG[slug]
  if (!post) notFound()

  // "Keep reading" surfaces up to 3 other posts, most recent first.
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3)

  return <BlogPost post={post} related={related} />
}
