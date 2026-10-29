'use client'

import { useState } from 'react'
import { lifecycle } from '@/data/zoom'
import styles from './Lifecycle.module.css'

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

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
                  <span className={styles.tick}>
                    <Check />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <a className={styles.link} href="#start" data-trial>
              Start free trial
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
          <div className={styles.media}>
            <img src={t.img} alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
