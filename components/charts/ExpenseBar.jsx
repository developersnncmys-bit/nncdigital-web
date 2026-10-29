import styles from './ExpenseBar.module.css'

// Segmented horizontal expense breakdown using the navy monochrome ramp.
const RAMP = ['var(--navy)', 'var(--navy-2)', 'var(--navy-3)', 'var(--grey-soft)']

export default function ExpenseBar({ title, total, segments = [] }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <span className={styles.title}>{title}</span>
        <span className={styles.total}>{total} spent</span>
      </div>

      <div className={styles.bar} role="img" aria-label="Expense breakdown">
        {segments.map((s, i) => (
          <span
            key={s.label}
            className={styles.seg}
            style={{ width: `${s.pct}%`, background: RAMP[i % RAMP.length] }}
          />
        ))}
      </div>

      <div className={styles.legend}>
        {segments.map((s, i) => (
          <span key={s.label} className={styles.legendItem}>
            <span
              className={styles.swatch}
              style={{ background: RAMP[i % RAMP.length] }}
            />
            {s.label} <b>{s.pct}%</b>
          </span>
        ))}
      </div>
    </div>
  )
}
