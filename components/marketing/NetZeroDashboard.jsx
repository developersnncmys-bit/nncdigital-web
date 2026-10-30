'use client'

import { useEffect, useState } from 'react'
import styles from './NetZeroDashboard.module.css'

// Mock ESG / BRSR dashboard shown in the Net Zero CRM hero. All numbers are
// representative placeholders — not tied to any real customer data.

function Num({ to, suffix = '', decimals = 0 }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(to)
      return undefined
    }
    let raf, start
    const dur = 1100
    const ease = (t) => 1 - (1 - t) ** 3
    const step = (now) => {
      if (start === undefined) start = now
      const t = Math.min(1, (now - start) / dur)
      setN(to * ease(t))
      if (t < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [to])
  const v = decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString('en-IN')
  return <>{v}{suffix}</>
}

function Spark({ data, color = 'var(--navy, #0b5cff)' }) {
  const w = 72, h = 24
  const max = Math.max(...data), min = Math.min(...data)
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w
    const y = h - 2 - ((v - min) / (max - min || 1)) * (h - 4)
    return `${x.toFixed(1)},${y.toFixed(1)}`
  }).join(' ')
  return (
    <svg className={styles.spark} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden="true">
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

const KPIS = [
  { label: 'Scope 1 emissions', value: 842, unit: ' tCO₂e', delta: -4.2, trend: [48, 46, 45, 44, 42, 41, 40], good: true },
  { label: 'Scope 2 emissions', value: 1264, unit: ' tCO₂e', delta: -2.8, trend: [66, 65, 64, 63, 62, 60, 59], good: true },
  { label: 'Energy use', value: 1.84, unit: ' GWh', decimals: 2, delta: -1.6, trend: [92, 90, 89, 88, 87, 86, 84], good: true },
  { label: 'Water withdrawn', value: 24.6, unit: ' kL', decimals: 1, delta: 1.1, trend: [20, 22, 21, 23, 24, 24, 25], good: false },
]

const SITES = [
  { name: 'Chennai plant', scope: '420 tCO₂e', pct: 92, status: 'ok' },
  { name: 'Pune warehouse', scope: '186 tCO₂e', pct: 76, status: 'ok' },
  { name: 'Delhi office', scope: '58 tCO₂e', pct: 48, status: 'warn' },
]

export default function NetZeroDashboard() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      {/* Browser-style chrome so it reads as a product UI, not an infographic. */}
      <div className={styles.chrome}>
        <span className={styles.dot} /><span className={styles.dot} /><span className={styles.dot} />
        <span className={styles.chromeUrl}>nnc.in / net-zero / dashboard</span>
      </div>

      <div className={styles.body}>
        <div className={styles.topRow}>
          <div>
            <span className={styles.eyebrow}>BRSR Core · Q3 2026</span>
            <h4 className={styles.title}>Sustainability overview</h4>
          </div>
          <div className={styles.ready}>
            <span className={styles.readyPct}><Num to={94} suffix="%" /></span>
            <span className={styles.readyLabel}>Audit-ready</span>
          </div>
        </div>

        <div className={styles.kpiGrid}>
          {KPIS.map((k) => (
            <div className={styles.kpi} key={k.label}>
              <span className={styles.kpiLabel}>{k.label}</span>
              <span className={styles.kpiValue}>
                <Num to={k.value} decimals={k.decimals || 0} suffix={k.unit} />
              </span>
              <div className={styles.kpiFoot}>
                <span className={`${styles.delta} ${k.good ? styles.deltaGood : styles.deltaBad}`}>
                  {k.delta > 0 ? '+' : ''}{k.delta}% YoY
                </span>
                <Spark data={k.trend} color={k.good ? '#10b981' : '#ef4444'} />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.sites}>
          <div className={styles.sitesHead}>
            <span>Sites · Scope 1 + 2</span>
            <span className={styles.sitesMore}>View all →</span>
          </div>
          {SITES.map((s) => (
            <div className={styles.site} key={s.name}>
              <span className={styles.siteName}>{s.name}</span>
              <span className={styles.siteBar}>
                <span className={`${styles.siteFill} ${s.status === 'warn' ? styles.siteFillWarn : ''}`} style={{ width: `${s.pct}%` }} />
              </span>
              <span className={styles.siteVal}>{s.scope}</span>
              <span className={`${styles.badge} ${s.status === 'warn' ? styles.badgeWarn : styles.badgeOk}`}>
                {s.status === 'warn' ? 'Review' : 'On track'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
