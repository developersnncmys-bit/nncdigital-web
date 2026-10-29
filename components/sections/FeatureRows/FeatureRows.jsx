'use client'

import Reveal from '@/components/ui/Reveal/Reveal'
import { featureRows } from '@/data/zoom'
import styles from './FeatureRows.module.css'

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export default function FeatureRows() {
  return (
    <section className={styles.section} id="features">
      <div className="container">
        {featureRows.map((r, i) => (
          <Reveal
            key={i}
            className={`${styles.row} ${r.side === 'left' ? styles.imgLeft : ''}`}
          >
            <div className={styles.text}>
              <span className={styles.eyebrow}>{r.eyebrow}</span>
              <h2 className={styles.title}>{r.title}</h2>
              <p className={styles.body}>{r.body}</p>
              <ul className={styles.bullets}>
                {r.bullets.map((b) => (
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
              <img src={r.img} alt="" loading="lazy" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
