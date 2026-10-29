'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import Eyebrow from '@/components/ui/Eyebrow/Eyebrow'
import Button from '@/components/ui/Button/Button'
import Reveal from '@/components/ui/Reveal/Reveal'
import { enquiries } from '@/data/content'
import styles from './Enquiries.module.css'

const CHANNELS = [
  { label: 'Website', y: 30 },
  { label: 'WhatsApp', y: 130 },
  { label: 'Calls', y: 230 },
  { label: 'Walk-ins', y: 330 },
]
const HUB = { x: 432, y: 207, r: 66 }
const pathD = (y) =>
  `M170 ${y + 22} C 280 ${y + 22} 300 ${HUB.y} ${HUB.x - HUB.r} ${HUB.y}`

export default function Enquiries() {
  const root = useRef(null)

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const paths = gsap.utils.toArray(`.${styles.path}`)
      const riders = gsap.utils.toArray(`.${styles.rider}`)

      paths.forEach((path, i) => {
        const len = path.getTotalLength()
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: reduce ? 0 : len })
        const rider = riders[i]
        const place = (t) => {
          const p = path.getPointAtLength(t * len)
          gsap.set(rider, { attr: { cx: p.x, cy: p.y } })
        }
        if (reduce) {
          place(0.5)
          return
        }
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.1,
          ease: 'power2.inOut',
          delay: i * 0.12,
          scrollTrigger: { trigger: root.current, start: 'top 72%' },
        })
        const o = { t: 0 }
        gsap.to(o, {
          t: 1,
          duration: 2.4,
          ease: 'none',
          repeat: -1,
          delay: 0.6 + i * 0.5,
          onUpdate: () => place(o.t),
        })
      })
    },
    { scope: root }
  )

  return (
    <section className={styles.section} id="enquiries" ref={root}>
      <div className={`container ${styles.inner}`}>
        <Reveal stagger={0.09} className={styles.copy}>
          <Eyebrow>{enquiries.eyebrow}</Eyebrow>
          <h2 className={`display-l ${styles.title}`}>{enquiries.title}</h2>
          <p className={`lead ${styles.lead}`}>{enquiries.lead}</p>
          <div className={styles.cta}>
            <Button href={enquiries.cta.href} variant={enquiries.cta.variant}>
              {enquiries.cta.label}
            </Button>
          </div>
        </Reveal>

        <div className={styles.diagram}>
          <svg viewBox="0 0 560 420" className={styles.svg} aria-hidden="true">
            {/* connectors */}
            {CHANNELS.map((c) => (
              <path key={c.label} className={styles.path} d={pathD(c.y)} />
            ))}

            {/* hub */}
            <circle className={styles.hubPulse} cx={HUB.x} cy={HUB.y} r={HUB.r} />
            <circle className={styles.hubBg} cx={HUB.x} cy={HUB.y} r={HUB.r} />
            <text className={styles.hubNum} x={HUB.x} y={HUB.y - 4}>
              93
            </text>
            <text className={styles.hubLabel} x={HUB.x} y={HUB.y + 22}>
              enquiries
            </text>

            {/* channel chips */}
            {CHANNELS.map((c, i) => (
              <g key={c.label}>
                <rect className={styles.chip} x={10} y={c.y} width={160} height={44} rx={10} />
                <circle className={styles.chipDot} data-i={i} cx={32} cy={c.y + 22} r={5} />
                <text className={styles.chipLabel} x={48} y={c.y + 27}>
                  {c.label}
                </text>
              </g>
            ))}

            {/* flowing dots */}
            {CHANNELS.map((c) => (
              <circle key={c.label} className={styles.rider} r={4.5} cx={170} cy={c.y + 22} />
            ))}
          </svg>
          <p className={styles.caption}>
            Every channel, one pipeline — captured and sorted automatically.
          </p>
        </div>
      </div>
    </section>
  )
}
