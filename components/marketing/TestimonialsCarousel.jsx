'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './TestimonialsCarousel.module.css'

const ACCENTS = [
  'linear-gradient(135deg,#3f74ff,#0b5cff)',
  'linear-gradient(135deg,#16a34a,#0f7a43)',
  'linear-gradient(135deg,#a855f7,#7c3aed)',
  'linear-gradient(135deg,#f59e0b,#ea580c)',
  'linear-gradient(135deg,#0ea5e9,#0369a1)',
]

export default function TestimonialsCarousel({ title, lead, items = [] }) {
  const ref = useRef(null)
  const [run, setRun] = useState(false)
  const [paused, setPaused] = useState(false)
  const [i, setI] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const io = new IntersectionObserver(([e]) => setRun(e.isIntersecting), { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!run || paused || items.length < 2) return undefined
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const id = setInterval(() => setI((p) => (p + 1) % items.length), 5200)
    return () => clearInterval(id)
  }, [run, paused, items.length, i])

  if (!items.length) return null
  const a = items[i]

  return (
    <section className={styles.section}>
      <div className="container">
        {title && <h2 className={styles.title}>{title}</h2>}
        {lead && <p className={styles.lead}>{lead}</p>}

        <div
          className={styles.layout}
          ref={ref}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <figure className={styles.featured} key={i}>
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.mark} aria-hidden="true">&ldquo;</span>
            {a.result && <span className={styles.result}>{a.result}</span>}
            <blockquote className={styles.quote}>{a.quote}</blockquote>
            <figcaption className={styles.who}>
              <span className={styles.avatar} style={{ background: ACCENTS[i % ACCENTS.length] }}>{a.initials}</span>
              <span className={styles.meta}>
                <strong className={styles.name}>{a.name}</strong>
                <span className={styles.role}>{a.role}{a.company ? ` · ${a.company}` : ''}</span>
              </span>
              <span className={styles.stars} aria-label="5 out of 5">★★★★★</span>
            </figcaption>
          </figure>

          <div className={styles.rail} role="tablist" aria-label="Customer stories">
            {items.map((t, idx) => (
              <button
                type="button"
                key={idx}
                role="tab"
                aria-selected={idx === i}
                className={`${styles.railItem} ${idx === i ? styles.railActive : ''}`}
                onClick={() => setI(idx)}
              >
                <span className={styles.rAv} style={{ background: ACCENTS[idx % ACCENTS.length] }}>{t.initials}</span>
                <span className={styles.rMeta}>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </span>
                {idx === i && (
                  <span
                    className={`${styles.progress} ${paused ? styles.progressPaused : ''}`}
                    key={`p${i}`}
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
