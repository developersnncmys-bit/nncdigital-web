'use client'

import { useRef, useEffect, useState } from 'react'
import styles from './LeadCaptureGraphic.module.css'

const SOURCES = [
  { key: 'facebook', label: 'Facebook', count: 2355, bg: '#1877f2', glyph: 'f', pos: { top: '3%', right: '-7%' }, fd: '0s' },
  { key: 'google', label: 'Google', count: 456, bg: '#fff', glyph: 'G', color: '#4285f4', border: true, pos: { top: '38%', right: '-11%' }, fd: '0.8s' },
  { key: 'webinar', label: 'Webinar', count: 310, bg: '#0b5cff', glyph: 'webinar', pos: { top: '71%', right: '-5%' }, fd: '1.5s' },
]

const LEARNERS = [
  { initials: 'PS', tone: '#1877f2', pos: { top: '11%', left: '-3%' }, fd: '0.4s' },
  { initials: 'AR', tone: '#ea4335', pos: { top: '42%', left: '-9%' }, fd: '1.2s' },
  { initials: 'MK', tone: '#0b5cff', pos: { top: '69%', left: '1%' }, fd: '2s' },
]

const Webcam = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="12" rx="2" />
    <path d="M8 21h8M12 17v4" />
    <circle cx="12" cy="11" r="2.4" />
  </svg>
)

function Brand({ s }) {
  if (s.glyph === 'webinar') {
    return <span className={styles.brand} style={{ background: s.bg }}><Webcam /></span>
  }
  return (
    <span
      className={styles.brand}
      style={{ background: s.bg, color: s.color || '#fff', border: s.border ? '1px solid #e6ebf3' : 'none' }}
    >
      {s.glyph}
    </span>
  )
}

function CountUp({ to, run }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!run) return undefined
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(to)
      return undefined
    }
    let raf
    let start
    const dur = 1200
    const tick = (t) => {
      if (start === undefined) start = t
      const p = Math.min(1, (t - start) / dur)
      setN(Math.round(to * (1 - (1 - p) ** 3)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, to])
  return <>{n.toLocaleString('en-IN')}</>
}

export default function LeadCaptureGraphic() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className={styles.stage} ref={ref}>
      <span className={styles.blob} aria-hidden="true" />

      <svg className={styles.wires} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path className={styles.wire} d="M58 50 C70 36, 74 20, 80 12" />
        <path className={styles.wire} style={{ animationDelay: '0.5s' }} d="M60 50 C72 48, 74 46, 80 44" />
        <path className={styles.wire} style={{ animationDelay: '1s' }} d="M58 52 C70 64, 74 72, 80 76" />
      </svg>

      <span className={styles.hub} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M4 12h16M4 17h10" /></svg>
      </span>

      <div className={styles.person}>
        <img src="/img/lead-person.jpg" alt="A counsellor capturing student leads in NNC CRM" />
      </div>

      {LEARNERS.map((l) => (
        <span className={styles.av} key={l.initials} style={{ ...l.pos, '--fd': l.fd }}>
          {l.initials}
          <i style={{ background: l.tone }} />
        </span>
      ))}

      {SOURCES.map((s) => (
        <div className={styles.card} key={s.key} style={{ ...s.pos, '--fd': s.fd }}>
          <span className={styles.count}>{inView ? <CountUp to={s.count} run={inView} /> : 0}</span>
          <Brand s={s} />
          <span className={styles.label}>{s.label}</span>
        </div>
      ))}
    </div>
  )
}
