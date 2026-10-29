import styles from './Breadcrumbs.module.css'

export default function Breadcrumbs({ items }) {
  return (
    <nav className={styles.crumbs} aria-label="Breadcrumb">
      <ol className={styles.list}>
        {items.map((it, i) => {
          const last = i === items.length - 1
          return (
            <li key={it.label} className={styles.item}>
              {it.href && !last ? (
                <a href={it.href} className={styles.link}>
                  {it.label}
                </a>
              ) : (
                <span className={styles.current} aria-current="page">
                  {it.label}
                </span>
              )}
              {!last && (
                <svg className={styles.sep} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
