'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './IndustrySwitcher.module.css'

const ICON = {
  travel: 'M2 16l20-7-9 20-2-9z',
  education: 'M12 3 2 8l10 5 10-5zM6 10v6a6 6 0 0 0 12 0v-6',
  healthcare: 'M12 2v20M2 12h20',
  manufacturing: 'M3 20h18M5 20V9l4 3V9l4 3V9l4 3V9l2-2v13',
  retail: 'M6 2 3 7v13h18V7l-3-5zM3 7h18M8 11a4 4 0 0 0 8 0',
  sales: 'M3 17l6-6 4 4 8-8M14 7h7v7',
}

const Svg = ({ d, sw = 2 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d.split('M').filter(Boolean).map((seg, i) => <path key={i} d={'M' + seg} />)}
  </svg>
)

// Each industry supplies the same shape — label row, 3 pipeline stages with
// stage-specific counts, a key metric chip, and an "activity line". The card
// chrome stays identical; only the content changes to reinforce "same CRM,
// your language".
const INDUSTRIES = [
  {
    key: 'travel', name: 'Travel & Tourism', tint: '#0ea5e9',
    stages: [
      { label: 'Enquiry', n: 42 },
      { label: 'Itinerary', n: 18 },
      { label: 'Booked', n: 9, won: true },
    ],
    chip: { k: '₹14.6L', v: 'trips booked this month' },
    row: { who: 'Kavya', what: 'sent Bali itinerary · Patel family' },
  },
  {
    key: 'education', name: 'Education', tint: '#8b5cf6',
    stages: [
      { label: 'Enquiry', n: 128 },
      { label: 'Counselled', n: 54 },
      { label: 'Admitted', n: 31, won: true },
    ],
    chip: { k: '31', v: 'admissions this week' },
    row: { who: 'Rohan', what: 'confirmed admission · Grade 9 · Science' },
  },
  {
    key: 'healthcare', name: 'Healthcare & Clinics', tint: '#10b981',
    stages: [
      { label: 'Enquiry', n: 64 },
      { label: 'Appointment', n: 38 },
      { label: 'Follow up', n: 22, won: true },
    ],
    chip: { k: '38', v: 'appointments today' },
    row: { who: 'Dr. Mehta', what: 'booked follow-up · Mrs. Shah' },
  },
  {
    key: 'manufacturing', name: 'Manufacturing', tint: '#f59e0b',
    stages: [
      { label: 'Enquiry', n: 24 },
      { label: 'Quoted', n: 11 },
      { label: 'Dispatched', n: 6, won: true },
    ],
    chip: { k: '₹18.2L', v: 'quotations open' },
    row: { who: 'Imran', what: 'sent PI #4421 · Luma Textiles' },
  },
]

export default function IndustrySwitcher() {
  const ref = useRef(null)
  const [run, setRun] = useState(false)
  const [paused, setPaused] = useState(false)
  const [idx, setIdx] = useState(0)
  const [prev, setPrev] = useState(null)
  const prevRef = useRef(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const io = new IntersectionObserver(([e]) => setRun(e.isIntersecting), { threshold: 0.25 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!run || paused) return undefined
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const id = setInterval(() => setIdx((i) => (i + 1) % INDUSTRIES.length), 3600)
    return () => clearInterval(id)
  }, [run, paused])

  useEffect(() => {
    if (prevRef.current === idx) return undefined
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      prevRef.current = idx
      return undefined
    }
    setPrev(prevRef.current)
    prevRef.current = idx
    const t = setTimeout(() => setPrev(null), 480)
    return () => clearTimeout(t)
  }, [idx])

  const cur = INDUSTRIES[idx]
  const prevIn = prev !== null ? INDUSTRIES[prev] : null

  return (
    <div
      className={styles.stage}
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <span className={styles.glow} aria-hidden="true" />

      <div className={styles.card}>
        <div className={styles.head}>
          <span className={styles.brand}>
            <span className={styles.brandDot} aria-hidden="true" />
            <span className={styles.brandName}>NNC CRM</span>
          </span>
          <span className={styles.tabs} aria-hidden="true">
            <i /><i /><i />
          </span>
        </div>

        <div className={styles.panel}>
          {prevIn && (
            <div className={`${styles.content} ${styles.exit}`} key={`exit-${prev}`} style={{ '--tint': prevIn.tint }}>
              <IndustryContent data={prevIn} />
            </div>
          )}
          <div
            className={`${styles.content} ${prevIn ? styles.enter : ''}`}
            key={`enter-${idx}`}
            style={{ '--tint': cur.tint }}
          >
            <IndustryContent data={cur} />
          </div>
        </div>

        <div className={styles.dots} aria-hidden="true">
          {INDUSTRIES.map((it, i) => (
            <button
              type="button"
              key={it.key}
              className={`${styles.dot} ${i === idx ? styles.dotOn : ''}`}
              onClick={() => setIdx(i)}
              aria-label={`Show ${it.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function IndustryContent({ data }) {
  return (
    <>
      <div className={styles.titleRow}>
        <span className={styles.ind}>
          <span className={styles.indIcon}><Svg d={ICON[data.key]} /></span>
          <span className={styles.indName}>{data.name}</span>
        </span>
        <span className={styles.pill}>Pipeline</span>
      </div>

      <div className={styles.pipe}>
        {data.stages.map((s) => (
          <div className={`${styles.stage1} ${s.won ? styles.stageWon : ''}`} key={s.label}>
            <span className={styles.sLabel}>{s.label}</span>
            <span className={styles.sNum}>{s.n}</span>
            <span className={styles.sBar}><i style={{ width: `${Math.min(100, s.n * 2.4)}%` }} /></span>
          </div>
        ))}
      </div>

      <div className={styles.footRow}>
        <span className={styles.chip}>
          <b>{data.chip.k}</b>
          <i>{data.chip.v}</i>
        </span>
        <span className={styles.activity}>
          <span className={styles.actDot} />
          <span><b>{data.row.who}</b> {data.row.what}</span>
        </span>
      </div>
    </>
  )
}
