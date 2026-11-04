import Link from 'next/link'
import styles from './BlogPost.module.css'

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)
const ArrowBack = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
)

function fmtDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}
function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}
function initials(name) {
  return (name || 'NN').split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase()
}

export default function BlogPost({ post, related = [] }) {
  const sections = (post.sections || []).map((s) => ({
    ...s,
    id: slugify(s.h || ''),
  }))

  return (
    <main className={styles.main}>
      {/* Dark hero band carries the title, meta and category chip. Same
          visual language as the legal pages so NNC's "content hub" pages
          feel like one system. */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <Link href="/blog" className={styles.back}>
            <ArrowBack /> Back to all posts
          </Link>
          {post.category && <span className={styles.heroChip}>{post.category}</span>}
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.heroMeta}>
            <span className={styles.author}>
              <span className={styles.avatar} aria-hidden="true">{initials(post.author?.name)}</span>
              <span>{post.author?.name || 'Team NNC'}</span>
            </span>
            <span className={styles.heroDot} aria-hidden="true" />
            <span>{fmtDate(post.publishedAt)}</span>
            <span className={styles.heroDot} aria-hidden="true" />
            <span>{post.readMinutes} min read</span>
          </div>
        </div>
      </section>

      <section className={styles.body}>
        <div className={`container ${styles.layout}`}>
          <aside className={styles.tocWrap}>
            <nav className={styles.toc} aria-label="On this page">
              <span className={styles.tocHead}>IN THIS POST</span>
              <ol className={styles.tocList}>
                {sections.map((s) => (
                  <li key={s.id} className={styles.tocItem}>
                    <a href={`#${s.id}`} className={styles.tocLink}>
                      <span className={styles.tocDot} aria-hidden="true" />
                      <span>{s.h}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className={styles.content}>
            {post.excerpt && <p className={styles.lede}>{post.excerpt}</p>}
            {sections.map((s) => (
              <section key={s.id} id={s.id} className={styles.section}>
                <h2 className={styles.sectionTitle}>{s.h}</h2>
                {(s.p || []).map((para, i) => (
                  <p key={i} className={styles.p}>{para}</p>
                ))}
                {s.bullets && (
                  <ul className={styles.bullets}>
                    {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </div>
      </section>

      {related.length > 0 && (
        <section className={styles.related}>
          <div className="container">
            <h2 className={styles.relatedTitle}>Keep reading</h2>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <Link href={`/blog/${r.slug}`} key={r.slug} className={styles.relatedCard}>
                  {r.category && <span className={styles.relatedChip}>{r.category}</span>}
                  <h3 className={styles.relatedCardTitle}>{r.title}</h3>
                  <p className={styles.relatedExcerpt}>{r.excerpt}</p>
                  <span className={styles.relatedLink}>Read <Arrow /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
