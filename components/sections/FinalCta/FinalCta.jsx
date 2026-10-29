'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import Button from '@/components/ui/Button/Button'
import { finalCta } from '@/data/content'
import styles from './FinalCta.module.css'

export default function FinalCta() {
  const root = useRef(null)

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
      if (reduce) return

      const tl = gsap.timeline({
        scrollTrigger: { trigger: `.${styles.band}`, start: 'top 84%' },
      })
      tl.from(`.${styles.band}`, {
        y: 48,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      })
        .from(
          `.${styles.ctas} > *`,
          { y: 16, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out' },
          '-=0.4'
        )
        .from(
          `.${styles.stat}`,
          { y: 14, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
          '-=0.35'
        )
    },
    { scope: root }
  )

  return (
    <section className={`container ${styles.section}`} ref={root}>
      <div className={styles.band}>
        <span className={styles.glow} aria-hidden="true" />
        <span className={styles.grid} aria-hidden="true" />

        <div className={styles.content}>
          <h2 className={styles.title}>{finalCta.title}</h2>
          <p className={styles.sub}>{finalCta.sub}</p>

          <div className={styles.ctas}>
            {finalCta.ctas.map((c) => (
              <Button key={c.label} href={c.href} variant={c.variant}>
                {c.label}
              </Button>
            ))}
          </div>

          <div className={styles.stats}>
            {finalCta.stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
