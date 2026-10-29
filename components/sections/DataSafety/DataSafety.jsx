'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import Eyebrow from '@/components/ui/Eyebrow/Eyebrow'
import Reveal from '@/components/ui/Reveal/Reveal'
import { icons } from '@/components/ui/icons'
import { dataSafety } from '@/data/content'
import styles from './DataSafety.module.css'

const SHIELD = 'M60 6 L106 24 V62 C106 92 86 112 60 122 C34 112 14 92 14 62 V24 Z'

export default function DataSafety() {
  const root = useRef(null)
  // left column gets cards 0 & 2, right gets 1 & 3
  const left = [dataSafety.cards[0], dataSafety.cards[2]]
  const right = [dataSafety.cards[1], dataSafety.cards[3]]

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduce) return
      gsap.from(`.${styles.line}`, {
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: { trigger: `.${styles.diagram}`, start: 'top 75%' },
      })
      gsap.from(`.${styles.shield}`, {
        scale: 0.6,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.6)',
        scrollTrigger: { trigger: `.${styles.diagram}`, start: 'top 75%' },
      })
      gsap.from(`.${styles.card}`, {
        opacity: 0,
        y: 16,
        scale: 0.92,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: `.${styles.diagram}`, start: 'top 72%' },
      })
    },
    { scope: root }
  )

  const Card = ([title, body, icon], side) => {
    const Icon = icons[icon]
    return (
      <article className={`${styles.card} ${styles[side]}`} key={title}>
        <span className={styles.well}>{Icon && <Icon width={20} height={20} />}</span>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardBody}>{body}</p>
      </article>
    )
  }

  return (
    <section className={`container ${styles.section}`} id="safety" ref={root}>
      <div className={styles.block}>
        <Reveal stagger={0.09} className={styles.head}>
          <Eyebrow inverse>{dataSafety.eyebrow}</Eyebrow>
          <h2 className={`display-l ${styles.title}`}>{dataSafety.title}</h2>
          <p className={styles.lead}>{dataSafety.lead}</p>
        </Reveal>

        <div className={styles.diagram}>
          <svg
            className={styles.lines}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line className={styles.line} x1="50" y1="50" x2="22" y2="30" />
            <line className={styles.line} x1="50" y1="50" x2="22" y2="70" />
            <line className={styles.line} x1="50" y1="50" x2="78" y2="30" />
            <line className={styles.line} x1="50" y1="50" x2="78" y2="70" />
          </svg>

          <div className={styles.grid}>
            <div className={styles.col}>{left.map((c) => Card(c, 'fromL'))}</div>

            <div className={styles.shieldWrap}>
              <span className={styles.glow} aria-hidden="true" />
              <div className={styles.shield}>
                <svg viewBox="0 0 120 130" className={styles.shieldSvg} aria-hidden="true">
                  <path className={styles.shieldFill} d={SHIELD} />
                  <path className={styles.shieldEdge} d={SHIELD} />
                  <path className={styles.check} d="M42 64 l13 13 l24 -28" />
                </svg>
                <span className={styles.shieldLabel}>Bank-grade</span>
              </div>
            </div>

            <div className={styles.col}>{right.map((c) => Card(c, 'fromR'))}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
