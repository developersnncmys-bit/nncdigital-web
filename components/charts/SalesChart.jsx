import { useId } from 'react'
import styles from './SalesChart.module.css'

// Pure-SVG actual-vs-forecast line. No chart library.
export default function SalesChart({
  actual = [42, 47, 44, 52, 57, 61],
  forecast = [61, 66, 70, 75],
}) {
  const gid = useId().replace(/:/g, '')
  const W = 520
  const H = 180
  const PAD = { l: 14, r: 14, t: 16, b: 22 }

  const all = [...actual, ...forecast.slice(1)]
  const n = all.length
  const min = Math.min(...all)
  const max = Math.max(...all)
  const span = max - min || 1

  const x = (i) => PAD.l + (i * (W - PAD.l - PAD.r)) / (n - 1)
  const y = (v) => PAD.t + (1 - (v - min) / span) * (H - PAD.t - PAD.b)
  const base = H - PAD.b

  const joinIdx = actual.length - 1
  const actualPts = actual.map((v, i) => [x(i), y(v)])
  const forecastPts = []
  for (let i = joinIdx; i < n; i++) forecastPts.push([x(i), y(all[i])])

  const toLine = (pts) => pts.map((p) => p.join(',')).join(' ')
  const areaD =
    `M${actualPts[0][0]},${base} ` +
    actualPts.map((p) => `L${p[0]},${p[1]}`).join(' ') +
    ` L${actualPts[actualPts.length - 1][0]},${base} Z`

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={styles.chart} role="img" aria-label="Sales: actual vs forecast">
      <defs>
        <linearGradient id={`area-${gid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" className={styles.areaTop} />
          <stop offset="100%" className={styles.areaBottom} />
        </linearGradient>
      </defs>

      {/* area under actual */}
      <path d={areaD} fill={`url(#area-${gid})`} />

      {/* today divider */}
      <line
        x1={x(joinIdx)}
        x2={x(joinIdx)}
        y1={PAD.t - 4}
        y2={base}
        className={styles.today}
      />
      <text x={x(joinIdx) + 5} y={PAD.t + 4} className={styles.todayLabel}>
        today
      </text>

      {/* forecast (dashed) */}
      <polyline points={toLine(forecastPts)} className={styles.forecast} />

      {/* actual (solid) */}
      <polyline points={toLine(actualPts)} className={styles.actual} />

      {/* actual dots */}
      {actualPts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="3" className={styles.dot} />
      ))}
    </svg>
  )
}
