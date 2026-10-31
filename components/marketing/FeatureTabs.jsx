'use client'

// Tabbed feature showcase block used on product landing pages. Modeled on
// Salesforce's "See what Starter Suite can do" section — a horizontal row of
// tabs, a short lead, an optional CTA, and a content panel that swaps as the
// active tab changes.
//
// Shape expected on the block object:
//   {
//     type: 'featureTabs',
//     title, lead,
//     cta: { label, href },
//     tabs: [{ key, label, title, body, bullets?, media? }, ...]
//   }

import { useState } from 'react'
import Icon from '@/components/ui/Icon/Icon'
import styles from './FeatureTabs.module.css'

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export default function FeatureTabs({ block }) {
  const tabs = block.tabs || []
  const [activeKey, setActiveKey] = useState(tabs[0]?.key)
  const active = tabs.find((t) => t.key === activeKey) || tabs[0]

  if (!active) return null

  return (
    <section className={styles.section} id={block.id || undefined}>
      <div className="container">
        {block.title && <h2 className={styles.title}>{block.title}</h2>}

        <div className={styles.tabs} role="tablist" aria-label={block.title || 'Features'}>
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={t.key === active.key}
              className={`${styles.tab} ${t.key === active.key ? styles.tabActive : ''}`}
              onClick={() => setActiveKey(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {block.lead && <p className={styles.lead}>{block.lead}</p>}

        {block.cta && (
          <div className={styles.ctaRow}>
            <a href={block.cta.href} className={styles.ctaBtn} {...(block.cta.trial ? { 'data-trial': '' } : {})}>
              {block.cta.label}
              <Arrow />
            </a>
          </div>
        )}

        <div
          className={styles.panel}
          role="tabpanel"
          aria-labelledby={active.key}
          key={active.key /* re-mount on tab change so the fade-in animates */}
        >
          <div className={styles.panelText}>
            {active.title && <h3 className={styles.panelTitle}>{active.title}</h3>}
            {active.body && <p className={styles.panelBody}>{active.body}</p>}
            {active.bullets?.length > 0 && (
              <ul className={styles.bullets}>
                {active.bullets.map((b) => (
                  <li key={b}>
                    <span className={styles.tick}><Icon name="check" /></span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {active.media && (
            <div className={styles.panelMedia}>
              {/\.(mp4|webm|mov)(\?|$)/i.test(active.media.src) ? (
                <video
                  key={active.media.src /* force reload when tab switches */}
                  className={styles.mediaImg}
                  src={active.media.src}
                  poster={active.media.poster || undefined}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-label={active.media.alt || ''}
                />
              ) : (
                <img
                  src={active.media.src}
                  alt={active.media.alt || ''}
                  loading="lazy"
                  className={styles.mediaImg}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
