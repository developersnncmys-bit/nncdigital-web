import { Fragment } from 'react'
import styles from './CompareTable.module.css'

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

export default function CompareTable({ block }) {
  const { plans, groups, popularIndex } = block
  return (
    <section className={styles.section}>
      <div className="container">
        {block.title && <h2 className={styles.title}>{block.title}</h2>}
        {block.lead && <p className={styles.lead}>{block.lead}</p>}

        <p className={styles.hint} aria-hidden="true">Swipe to compare plans →</p>
        <div className={styles.wrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.featHead} scope="col">Functionality</th>
                {plans.map((p, i) => (
                  <th key={p} scope="col" className={`${styles.planHead} ${i === popularIndex ? styles.popHead : ''}`}>
                    {p}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {groups.map((g) => (
                <Fragment key={g.group}>
                  <tr className={styles.groupRow}>
                    <td colSpan={plans.length + 1}>{g.group}</td>
                  </tr>
                  {g.rows.map((r) => (
                    <tr key={r.label} className={styles.row}>
                      <th scope="row" className={styles.feat}>{r.label}</th>
                      {r.values.map((v, i) => (
                        <td key={i} className={`${styles.cell} ${i === popularIndex ? styles.popCell : ''}`}>
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
      </div>
    </section>
  )
}
