'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import Eyebrow from '@/components/ui/Eyebrow/Eyebrow'
import { decisions } from '@/data/content'
import styles from './Decisions.module.css'

const STATS = [
  { label: 'Projected · 3 months', prefix: '₹', value: 29.4, decimals: 1, suffix: 'L', delta: 11 },
  { label: 'Projected · 6 months', prefix: '₹', value: 63.8, decimals: 1, suffix: 'L', delta: 18 },
  { label: 'Projected · 12 months', prefix: '₹', value: 1.42, decimals: 2, suffix: 'Cr', delta: 27 },
]

export default function Decisions() {
  const root = useRef(null)

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const nums = gsap.utils.toArray(`.${styles.num}`)

      if (!reduce) {
        gsap.from(`.${styles.reveal}`, {
          y: 28,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 78%' },
        })
      }

      nums.forEach((el) => {
        const target = parseFloat(el.dataset.val)
        const dec = parseInt(el.dataset.dec, 10)
        const set = (v) => (el.textContent = el.dataset.pre + v.toFixed(dec) + el.dataset.suf)
        if (reduce) {
          set(target)
          return
        }
        const o = { v: 0 }
        gsap.to(o, {
          v: target,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
          onUpdate: () => set(o.v),
        })
      })
    },
    { scope: root }
  )

  return (
    <section className={styles.section} id="decide" ref={root}>
      <div className="container">
        <div className={styles.head}>
          <div className={styles.reveal}>
            <Eyebrow>{decisions.eyebrow}</Eyebrow>
          </div>
          <h2 className={`display-l ${styles.title} ${styles.reveal}`}>
            {decisions.title}
          </h2>
          <p className={`lead ${styles.lead} ${styles.reveal}`}>
            {decisions.lead}
          </p>
        </div>

        <div className={styles.stats}>
          {STATS.map((s, i) => (
            <div className={`${styles.stat} ${styles.reveal}`} key={i}>
              <span
                className={styles.num}
                data-val={s.value}
                data-dec={s.decimals}
                data-pre={s.prefix}
                data-suf={s.suffix}
              >
                {s.prefix}0{s.suffix}
              </span>
              <span className={styles.delta}>
                <span aria-hidden="true">▲</span> {s.delta}% vs flat trend
              </span>
              <span className={styles.label}>{s.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.notes}>
          {decisions.bullets.map(([t, b]) => (
            <div className={`${styles.note} ${styles.reveal}`} key={t}>
              <span className={styles.noteTitle}>{t}</span>
              <span className={styles.noteBody}>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
