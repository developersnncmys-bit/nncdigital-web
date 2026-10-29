'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { hero } from '@/data/content'
import styles from './Hero.module.css'

export default function Hero() {
  const root = useRef(null)

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduce) return
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from(`.${styles.fade}`, { y: 24, opacity: 0, duration: 0.8, stagger: 0.09 })
        .from(`.${styles.videoCard}`, { y: 34, opacity: 0, duration: 0.9 }, '-=0.5')
    },
    { scope: root }
  )

  return (
    <section className={styles.hero} id="top" ref={root}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={`${styles.kicker} ${styles.fade}`}>
            <span className={styles.kickerDot} aria-hidden="true" />
            The decision making CRM
          </span>

          <h1 className={`${styles.title} ${styles.fade}`}>
            {hero.titlePre}
            <span className={styles.accent}>{hero.titleNavy}</span>
            {hero.titlePost}
          </h1>

          <p className={`${styles.sub} ${styles.fade}`}>
            <strong>{hero.leadStrong}</strong> {hero.lead}
          </p>

          {/* Zoom-style white pricing card */}
          <div className={`${styles.priceCard} ${styles.fade}`}>
            <span className={styles.priceBar} aria-hidden="true" />
            <div className={styles.priceInfo}>
              <span className={styles.priceLabel}>Plans starting at</span>
              <span className={styles.priceVal}>
                ₹14,999 <em>/ year</em>
              </span>
            </div>
            <a className={styles.priceBtn} href="#start" data-trial>
              Start free trial
            </a>
          </div>
        </div>

        {/* stitched product reel */}
        <div className={styles.videoCard}>
          <video
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/hero-reel.jpg"
            aria-hidden="true"
          >
            <source src="/hero-reel.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}
