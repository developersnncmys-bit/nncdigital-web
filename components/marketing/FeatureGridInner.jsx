'use client'

// Image-top feature cards (modeled on Salesforce's Starter Suite 4-up).
// Each card has a tall media area on top and a text block below.
//
// Data shape per item:
//   { icon, title, body, href?, image?, imageAlt? }
//
// If `image` is set, it fills the media area. If not, we render a decorative
// gradient tile with the icon centered — looks intentional, keeps the layout
// consistent, and swaps cleanly to the real image when it lands.

import { useRef, useEffect, useState } from 'react'
import AnimatedIcon from './AnimatedIcon'
import styles from './FeatureGridInner.module.css'

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export default function FeatureGridInner({ items, flat = false }) {
  const ref = useRef(null)
  const [mounted, setMounted] = useState(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    setMounted(true)
    const el = ref.current
    if (!el) return undefined
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Column count follows item count so no row ever has a lonely trailing card.
  // 4 items → 2 cols (2x2 layout, wider cards for landscape illustrations).
  // 2 items → 2 cols. Everything else → 3 cols (fits 3 or 6 cleanly).
  // Responsive overrides below drop to 2 or 1 col on narrower screens.
  const cols = items.length === 4 ? 2 : items.length === 2 ? 2 : 3

  return (
    <div
      ref={ref}
      className={`${styles.grid} ${mounted ? styles.js : ''} ${inView ? styles.in : ''}`}
      style={{ '--cols': cols }}
    >
      {items.map((it, i) => {
        const Tag = it.href ? 'a' : 'div'
        // Cycle through 4 placeholder gradient variants so a grid of cards
        // without images still feels varied.
        const variant = (i % 4) + 1
        // Flat + no image → compact card: small animated icon inline at the
        // top of the body, no oversized square media tile.
        const isCompact = flat && !it.image
        return (
          <Tag
            className={`${styles.card} ${isCompact ? styles.cardCompact : ''}`}
            key={it.title}
            href={it.href}
            style={{ '--i': i }}
          >
            {it.image ? (
              <div className={styles.media}>
                <img src={it.image} alt={it.imageAlt || ''} loading="lazy" className={styles.mediaImg} />
              </div>
            ) : !flat ? (
              <div className={styles.media}>
                <span className={`${styles.mediaPlaceholder} ${styles[`v${variant}`]}`} aria-hidden="true">
                  <span className={styles.mediaIcon}>
                    <AnimatedIcon name={it.icon} />
                  </span>
                </span>
              </div>
            ) : null}
            <div className={styles.cardBody}>
              {isCompact && (
                <span className={styles.inlineIcon} aria-hidden="true">
                  <AnimatedIcon name={it.icon} />
                </span>
              )}
              <h3 className={styles.title}>{it.title}</h3>
              <p className={styles.body}>{it.body}</p>
              {it.href && (
                <span className={styles.link}>
                  Learn more <Arrow />
                </span>
              )}
            </div>
          </Tag>
        )
      })}
    </div>
  )
}
