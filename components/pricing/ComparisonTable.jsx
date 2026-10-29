import { Fragment } from 'react'
import { PLANS, COMPARISON } from '@/lib/pricing'
import styles from './ComparisonTable.module.css'

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

function Cell({ v }) {
  if (v === true) return <span className={styles.yes}><Check /></span>
  if (v === false) return <span className={styles.no} aria-label="Not included">✕</span>
  return <span className={styles.val}>{v}</span>
}

export default function ComparisonTable() {
  return (
    <>
      <p className={styles.hint} aria-hidden="true">Swipe to compare plans →</p>
      <div className={styles.wrap}>
        <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.featHead} scope="col">
              Features
            </th>
            {PLANS.map((p) => (
              <th
                key={p.id}
                scope="col"
                className={`${styles.planHead} ${p.popular ? styles.popHead : ''}`}
              >
                <span className={styles.planName}>{p.name}</span>
                <span className={styles.planUsers}>{p.users}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPARISON.map((g) => (
            <Fragment key={g.group}>
              <tr className={styles.groupRow}>
                <td colSpan={PLANS.length + 1}>{g.group}</td>
              </tr>
              {g.rows.map((r) => (
                <tr key={r.label} className={styles.row}>
                  <th scope="row" className={styles.feat}>
                    {r.label}
                  </th>
                  {r.values.map((v, i) => (
                    <td
                      key={i}
                      className={`${styles.cell} ${PLANS[i].popular ? styles.popCell : ''}`}
                    >
                      <Cell v={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
        </table>
      </div>
    </>
  )
}
