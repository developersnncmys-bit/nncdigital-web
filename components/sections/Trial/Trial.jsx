'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import styles from './Trial.module.css'

const TILES = [
  { n: 'Northwind', x: 3, y: 4, s: 1 },
  { n: 'Lumio', x: 40, y: 0, s: 1.15 },
  { n: 'Vertex Co', x: 73, y: 8, s: 1 },
  { n: 'Helia', x: 12, y: 28, s: 1.28 },
  { n: 'Brightpath', x: 48, y: 24, s: 1.05 },
  { n: 'Cobalt', x: 80, y: 34, s: 1.1 },
  { n: 'Meridian', x: 1, y: 56, s: 1 },
  { n: 'Orbit', x: 38, y: 50, s: 1.22 },
  { n: 'Apex', x: 70, y: 58, s: 1 },
  { n: 'Zenith', x: 18, y: 78, s: 1.1 },
  { n: 'Pinnacle', x: 52, y: 80, s: 1 },
  { n: 'Northstar', x: 82, y: 74, s: 0.95 },
]

export default function Trial() {
  const root = useRef(null)

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const tiles = gsap.utils.toArray(`.${styles.tile}`)
      if (reduce) {
        gsap.set(tiles, { opacity: 1, scale: 1 })
        return
      }
      gsap.from(tiles, {
        opacity: 0,
        scale: 0.5,
        duration: 0.7,
        ease: 'back.out(1.6)',
        stagger: { each: 0.06, from: 'random' },
        scrollTrigger: { trigger: root.current, start: 'top 75%' },
      })
      tiles.forEach((t, i) => {
        gsap.to(t, {
          y: i % 2 ? 16 : -16,
          x: i % 3 ? 8 : -6,
          rotation: i % 2 ? 1.5 : -1.5,
          duration: 3 + (i % 4) * 0.6,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: i * 0.12,
        })
      })
    },
    { scope: root }
  )

  return (
    <section className={styles.section} id="start" ref={root}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.logos} aria-hidden="true">
          <div className={styles.logosGrid} />
          {TILES.map((t, i) => (
            <span
              key={t.n}
              className={styles.tile}
              style={{ left: `${t.x}%`, top: `${t.y}%`, '--s': t.s }}
            >
              <span className={styles.tileDot} data-i={i % 5} />
              {t.n}
            </span>
          ))}
          <p className={styles.logosCaption}>
            Trusted by growing teams in every industry
          </p>
        </div>

        <div className={styles.ctaPanel}>
          <span className={styles.kicker}>Start free trial</span>
          <h2 className={styles.ctaTitle}>Ready to build your CRM?</h2>
          <p className={styles.ctaSub}>
            Pick a plan, start free for 30 days, and have your team up and
            running today — no credit card required.
          </p>
          <a className={styles.ctaBtn} href="#start" data-trial>
            Start free trial
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <p className={styles.ctaNote}>Join growing teams across every industry.</p>
        </div>
      </div>
    </section>
  )
}
