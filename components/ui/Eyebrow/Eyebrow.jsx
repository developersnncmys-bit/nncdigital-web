import styles from './Eyebrow.module.css'

export default function Eyebrow({ children, inverse = false }) {
  return (
    <span className={`${styles.eyebrow} ${inverse ? styles.inverse : ''}`}>
      <span className={styles.dot} aria-hidden="true" />
      {children}
    </span>
  )
}
