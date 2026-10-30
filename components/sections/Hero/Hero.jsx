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
            The Decision-Making CRM
          </span>

          <h1 className={`${styles.title} ${styles.fade}`}>
            {hero.titlePre}
            <span className={styles.accent}>{hero.titleNavy}</span>
            {hero.titlePost}
          </h1>

          <p className={`${styles.sub} ${styles.fade}`}>
            <strong>{hero.leadStrong}</strong>
          </p>
          <p className={`${styles.sub} ${styles.fade}`}>{hero.lead}</p>
          <p className={`${styles.sub} ${styles.fade}`}>{hero.lead2}</p>

          {/* Zoom-style white pricing card — Book a Demo primary + Explore
              Pricing secondary (per home-page copy brief). */}
          <div className={`${styles.priceCard} ${styles.fade}`}>
            <span className={styles.priceBar} aria-hidden="true" />
            <div className={styles.priceInfo}>
              <span className={styles.priceLabel}>Plans Starting at</span>
              <span className={styles.priceVal}>
                ₹14,999 <em>/ Year</em>
              </span>
            </div>
            <a className={styles.priceBtn} href="#start" data-trial>
              Book a Demo
            </a>
            <a className={styles.priceBtnGhost} href="/pricing">
              Explore Pricing
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
