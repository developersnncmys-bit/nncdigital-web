import styles from './Button.module.css'

const ArrowIcon = () => (
  <svg
    className={styles.arrow}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export default function Button({
  variant = 'primary',
  href = '#',
  children,
  arrow = true,
  ...rest
}) {
  return (
    <a href={href} className={`${styles.btn} ${styles[variant]}`} {...rest}>
      <span>{children}</span>
      {arrow && <ArrowIcon />}
    </a>
  )
}
