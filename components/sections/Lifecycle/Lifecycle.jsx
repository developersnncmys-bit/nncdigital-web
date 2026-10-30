'use client'

import { useState } from 'react'
import { lifecycle } from '@/data/zoom'
import styles from './Lifecycle.module.css'

export default function Lifecycle() {
  const [tab, setTab] = useState(0)
  const t = lifecycle.tabs[tab]

  return (
    <section className={styles.section} id="features">
      <div className="container">
        <h2 className={styles.title}>{lifecycle.title}</h2>
        <p className={styles.lead}>{lifecycle.lead}</p>

        <div className={styles.tabs} role="tablist" aria-label="Customer journey">
          {lifecycle.tabs.map((x, i) => (
            <button
              key={x.label}
              role="tab"
              aria-selected={i === tab}
              className={`${styles.tab} ${i === tab ? styles.tabOn : ''}`}
              onClick={() => setTab(i)}
            >
              {x.label}
            </button>
          ))}
        </div>

        <div className={styles.panel} key={tab}>
          <div className={styles.text}>
            <h3 className={styles.pTitle}>{t.title}</h3>
            <p className={styles.pBody}>{t.body}</p>
            <ul className={styles.bullets}>
              {t.bullets.map((b) => (
                <li key={b}>
                  <span className={styles.dot} aria-hidden="true" />
                  <span className={styles.bulletText}>{b}</span>
                </li>
              ))}
            </ul>
            {t.cta && (
              <a
                className={styles.cta}
                href={t.cta.href}
                {...(t.cta.href === '#start' ? { 'data-trial': '' } : {})}
              >
                {t.cta.label}
              </a>
            )}
          </div>
          <div className={styles.media}>
            <div className={styles.mediaFrame}>
              <img src={t.img} alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
