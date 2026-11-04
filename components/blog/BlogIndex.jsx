'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import styles from './BlogIndex.module.css'

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

function fmtDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

// Reference design splits the H1 into two tones. Last ~2 words switch to
// the accent color. Works for 2–5 word titles cleanly.
function TitleTwoTone({ text, accentFrom = 2 }) {
  const parts = text.split(/\s+/)
  if (parts.length <= accentFrom) {
    return <span className={styles.titleAccent}>{text}</span>
  }
  const main = parts.slice(0, parts.length - accentFrom).join(' ')
  const accent = parts.slice(parts.length - accentFrom).join(' ')
  return (
    <>
      <span className={styles.titleMain}>{main} </span>
      <span className={styles.titleAccent}>{accent}</span>
    </>
  )
}

export default function BlogIndex({ posts }) {
  // Build the filter list from categories actually present in the posts, so
  // we never show an empty "Category (0)" chip. "All" is always first.
  const categories = useMemo(() => {
    const set = new Set()
    posts.forEach((p) => { if (p.category) set.add(p.category) })
    return ['All', ...Array.from(set)]
  }, [posts])

  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? posts : posts.filter((p) => p.category === active)

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <h1 className={styles.title}>
            <TitleTwoTone text="NNC Digital Blog & Insights" accentFrom={3} />
          </h1>
          <p className={styles.lead}>
            Short reads on the sales process, WhatsApp-first workflows and what
            we learn running NNC CRM for real teams. Written for owners and
            managers, not for other vendors.
          </p>
        </div>
      </section>

      <section className={styles.body}>
        <div className="container">
          <div className={styles.filters} role="tablist" aria-label="Filter posts by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={c === active}
                className={`${styles.pill} ${c === active ? styles.pillOn : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <p className={styles.count}>
            {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
          </p>

          <div className={styles.grid}>
            {filtered.map((p) => (
              <Link href={`/blog/${p.slug}`} key={p.slug} className={styles.card}>
                <span className={styles.cardAccent} aria-hidden="true" />
                <div className={styles.cardHead}>
                  {p.category && <span className={styles.chip}>{p.category}</span>}
                  <span className={styles.readTime}>{p.readMinutes} min read</span>
                </div>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <div className={styles.cardFoot}>
                  <span className={styles.date}>{fmtDate(p.publishedAt)}</span>
                  <span className={styles.readMore}>Read more <Arrow /></span>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className={styles.empty}>No posts in this category yet.</p>
          )}
        </div>
      </section>
    </main>
  )
}
