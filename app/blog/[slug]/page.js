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
    title: `${p.title} | NNC Digital`,
    description: p.excerpt,
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
