'use client'

import { useState } from 'react'
import { inr } from '@/lib/format'
import styles from './PlanColumn.module.css'

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const Chevron = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

const ICONS = {
  sales: <path d="M3 5h18M6 12h12M10 19h4" />,
  billing: <><path d="M6 2h9l5 5v15H6z" /><path d="M15 2v5h5M9 13h6M9 17h6" /></>,
  insights: <path d="M5 21V11M12 21V7M19 21V3M3 21h18" />,
  support: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />,
  forecast: <><path d="M3 17 9 11l4 4 8-8" /><path d="M21 7v6h-6" /></>,
  money: <><path d="M20 7H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-3" /><path d="M21 11h-4a2 2 0 0 0 0 4h4M3 9V7a2 2 0 0 1 2-2h11" /></>,
  engagement: <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 0 1-9 9 9 9 0 0 1-4-1l-5 1 1-5a9 9 0 1 1 17-4z" />,
  scale: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  security: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></>,
  platform: <><path d="M12 2 2 7l10 5 10-5z" /><path d="m2 17 10 5 10-5M2 12l10 5 10-5" /></>,
}

const Icon = ({ name }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {ICONS[name]}
  </svg>
)

// renders **bold** segments
const rich = (s) =>
  s.split('**').map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))

export default function PlanColumn({ plan, term }) {
  const [open, setOpen] = useState(true)
  const price = plan.prices[term.key]

  return (
    <article className={`${styles.card} ${plan.highlight ? styles.blue : ''}`}>
      <span className={styles.tierPill}>{plan.name}</span>
      <span className={styles.category}>{plan.category}</span>
      <span className={styles.name}>{plan.name}</span>

      <div className={styles.priceRow}>
        <span className={styles.amount}>{inr(price)}</span>
        <span className={styles.per}>{term.per}</span>
      </div>
      <span className={styles.gst}>plus 18% GST</span>
      <span className={styles.seats}>
        {plan.seats} · {term.sub}
      </span>

      <a href="#start" data-trial className={styles.cta}>
        Book a Demo
      </a>

      <button
        type="button"
        className={styles.featHead}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{plan.featuresHeader}:</span>
        <Chevron className={`${styles.chev} ${open ? styles.chevOpen : ''}`} />
      </button>

      {open && (
        <div className={styles.groups}>
          {plan.groups.map((g) => (
            <div className={styles.group} key={g.title}>
              <div className={styles.groupHead}>
                <span className={styles.gicon}>
                  <Icon name={g.icon} />
                </span>
                {g.title}
              </div>
              <ul className={styles.items}>
                {g.items.map((it) => (
                  <li key={it}>
                    <span className={styles.tick}>
                      <Check />
                    </span>
                    <span>{rich(it)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <a className={styles.more} href="/pricing">
        See all features
      </a>
    </article>
  )
}
