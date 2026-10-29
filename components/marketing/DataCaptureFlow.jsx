'use client'

import { useRef, useEffect, useState } from 'react'
import styles from './DataCaptureFlow.module.css'

const Building = ({ hq }) => {
  const body = hq ? '#0b5cff' : '#15306e'
  const annex = hq ? '#3f74ff' : '#0b5cff'
  const win = 'rgba(255,255,255,0.92)'
  const W = (x, y, w, h, i) => (
    <rect key={`w${x}-${y}`} className={styles.win} style={{ '--d': `${((i * 0.41) % 2.4).toFixed(2)}s` }} x={x} y={y} width={w} height={h} rx={1} fill={win} />
  )
  const wins = []
  let i = 0
  for (let r = 0; r < 6; r += 1) {
    for (let c = 0; c < 3; c += 1) {
      wins.push(W(31 + c * 12, 24 + r * 11, 7, 7, i))
      i += 1
    }
  }
  const annexWins = [[13, 56], [21, 56], [13, 68], [21, 68], [13, 80], [21, 80]].map(
    ([x, y], k) => W(x, y, 6, 7, k + 2)
  )
  return (
    <svg viewBox="0 0 90 102" className={styles.building} aria-hidden="true">
      <rect x="8" y="48" width="24" height="54" rx="3" fill={annex} />
      {annexWins}
      <rect x="26" y="12" width="56" height="90" rx="3" fill={body} />
      {wins}
      <rect x="48" y="90" width="12" height="12" rx="1.5" fill={win} opacity="0.95" />
    </svg>
  )
}

const Avatar = ({ initials, className }) => (
  <span className={`${styles.avatar} ${className || ''}`}>{initials}</span>
)

export default function DataCaptureFlow({ title, lead, student, learners = [], centers = [] }) {
  const ref = useRef(null)
  const [mounted, setMounted] = useState(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    setMounted(true)
    const el = ref.current
    if (!el) return undefined
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className={`${styles.section} ${mounted ? styles.js : ''} ${inView ? styles.inView : ''}`}
    >
      <div className="container">
        {title && <h2 className={styles.title}>{title}</h2>}
        {lead && <p className={styles.lead}>{lead}</p>}

        <div className={styles.flow}>
          <div className={styles.left}>
            <div className={styles.card}>
              <span className={styles.live} aria-hidden="true">
                <i />Live sync
              </span>
              <div className={styles.cardHead}>
                <Avatar initials={student.initials} className={styles.cardAvatar} />
                <div className={styles.who}>
                  <span className={styles.name}>{student.name}</span>
                  <span className={styles.meta}>
                    <span>Age {student.age}</span>
                    <span className={styles.dot} aria-hidden="true" />
                    <span>{student.email}</span>
                  </span>
                </div>
              </div>
              <div className={styles.cardGrid}>
                <div className={styles.cell}>
                  <span className={styles.k}>Student ID</span>
                  <span className={styles.v}>{student.studentId}</span>
                </div>
                <div className={styles.cell}>
                  <span className={styles.k}>Campus Name / ID</span>
                  <span className={styles.v}>{student.campus}</span>
                </div>
              </div>
            </div>

            <div className={styles.learners}>
              <span className={styles.learnLabel}>Learners</span>
              <div className={styles.learnAvatars}>
                {learners.map((l) => (
                  <Avatar key={l.initials} initials={l.initials} className={styles.learnAvatar} />
                ))}
              </div>
            </div>
          </div>

          <span className={styles.bridge} style={{ '--delay': '0s' }} aria-hidden="true" />

          <div className={styles.nodes}>
            {centers.map((c, i) => (
              <div
                className={styles.nodeWrap}
                key={c.label}
                style={{ '--rdelay': `${0.15 + i * 0.14}s`, '--cdelay': `${i * 0.4}s` }}
              >
                {i > 0 && (
                  <span className={styles.conn} style={{ '--delay': `${i * 0.6}s` }} aria-hidden="true" />
                )}
                <div className={styles.node}>
                  <span className={`${styles.pill} ${c.kind === 'hq' ? styles.pillHq : ''}`}>{c.label}</span>
                  <span className={styles.circle}>
                    <span className={styles.ping} aria-hidden="true" />
                    <span className={`${styles.ping} ${styles.ping2}`} aria-hidden="true" />
                    <Building hq={c.kind === 'hq'} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
