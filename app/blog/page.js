import BlogIndex from '@/components/blog/BlogIndex'
import { POSTS_SORTED } from '@/data/blog'

export const metadata = {
  title: 'Blog | NNC Digital',
  description:
    'Short reads on the sales process, WhatsApp-first workflows and what we learn running NNC CRM for real teams.',
  alternates: { canonical: '/blog/' },
}

export default function Page() {
  return <BlogIndex posts={POSTS_SORTED} />
}
