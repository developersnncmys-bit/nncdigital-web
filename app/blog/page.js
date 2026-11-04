import BlogIndex from '@/components/blog/BlogIndex'
import { POSTS_SORTED } from '@/data/blog'

// Blog index. Inherits the site-wide `robots: { index: false }` from
// app/layout.js and reinforces it here. Add '/blog' to INDEXABLE_PREFIXES
// in lib/site.js when the sample content is replaced with real posts.
export const metadata = {
  title: 'Blog | NNC Digital',
  description:
    'Short reads on the sales process, WhatsApp-first workflows and what we learn running NNC CRM for real teams.',
  robots: { index: false, follow: false },
}

export default function Page() {
  return <BlogIndex posts={POSTS_SORTED} />
}
