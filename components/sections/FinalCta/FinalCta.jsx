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
          `.${styles.trustRow} > *`,
          { y: 10, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out' },
          '-=0.5'
        )
        .from(
          `.${styles.ctas} > *`,
          { y: 16, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out' },
          '-=0.3'
        )
    },
    { scope: root }
  )

  return (
    <section className={`container ${styles.section}`} ref={root}>
      <div className={styles.band}>
        <span className={styles.spotlight} aria-hidden="true" />
        <span className={styles.grid} aria-hidden="true" />

        <div className={styles.content}>
          {/* Trust chips above the headline — only render when there are
              provable figures to show. The row was removed when the pre-
              launch audit flagged "2,000+ businesses" / "4.8/5 rating" as
              unprovable claims. */}
          {finalCta.stats?.length > 0 && (
            <div className={styles.trustRow}>
              {finalCta.stats.map((s) => (
                <span key={s.label} className={styles.trustChip}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </span>
              ))}
            </div>
          )}

          <h2 className={styles.title}>{finalCta.title}</h2>
          <p className={styles.sub}>{finalCta.sub}</p>
          {finalCta.sub2 && <p className={styles.sub}>{finalCta.sub2}</p>}

          <div className={styles.ctas}>
            {finalCta.ctas.map((c) => {
              const external = c.href?.startsWith('http')
              return (
                <Button
                  key={c.label}
                  href={c.href}
                  variant={c.variant}
                  {...(external && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                >
                  {c.label}
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
