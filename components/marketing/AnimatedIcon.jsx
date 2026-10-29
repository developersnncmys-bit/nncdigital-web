import Icon from '@/components/ui/Icon/Icon'
import styles from './AnimatedIcon.module.css'

const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }

const ICONS = {
  globe: (
    <svg viewBox="0 0 24 24" className={styles.svg} {...S}>
      <circle cx="12" cy="12" r="8.5" />
      <ellipse cx="12" cy="12" rx="3.7" ry="8.5" />
      <line x1="3.5" y1="12" x2="20.5" y2="12" />
      <circle className={styles.orbit} cx="12" cy="3.5" r="1.7" fill="currentColor" stroke="none" />
    </svg>
  ),
  reports: (
    <svg viewBox="0 0 24 24" className={styles.svg} fill="currentColor" stroke="none">
      <rect className={styles.bar} x="3" y="5" width="4" height="15" rx="1.3" />
      <rect className={`${styles.bar} ${styles.bar2}`} x="10" y="5" width="4" height="15" rx="1.3" />
      <rect className={`${styles.bar} ${styles.bar3}`} x="17" y="5" width="4" height="15" rx="1.3" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" className={styles.svg} {...S}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
      <circle className={styles.dot} cx="8.5" cy="11.7" r="1.05" fill="currentColor" stroke="none" />
      <circle className={`${styles.dot} ${styles.dot2}`} cx="12" cy="11.7" r="1.05" fill="currentColor" stroke="none" />
      <circle className={`${styles.dot} ${styles.dot3}`} cx="15.5" cy="11.7" r="1.05" fill="currentColor" stroke="none" />
    </svg>
  ),
  pipeline: (
    <svg viewBox="0 0 24 24" className={styles.svg} {...S}>
      <line x1="4" y1="12" x2="20" y2="12" />
      <circle cx="4" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="20" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle className={styles.pdot} cx="4" cy="12" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" className={styles.svg} {...S}>
      <g className={styles.heart}>
        <path d="M17 19.5v-1a3.5 3.5 0 0 0-3.5-3.5h-3A3.5 3.5 0 0 0 7 18.5v1" />
        <circle cx="12" cy="8" r="3.2" />
      </g>
      <circle className={styles.ring2} cx="12" cy="12" r="8" strokeWidth="1.1" />
    </svg>
  ),
  forecast: (
    <svg viewBox="0 0 24 24" className={styles.svg} {...S} strokeWidth="1.9">
      <polyline className={styles.draw} points="3,17 9,11 13,14 21,5" />
      <polyline className={styles.draw2} points="15.5,5 21,5 21,10.5" />
    </svg>
  ),
  invoice: (
    <svg viewBox="0 0 24 24" className={styles.svg} {...S}>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <line className={styles.scan} x1="9" y1="13" x2="15" y2="13" />
    </svg>
  ),
  integrations: (
    <svg viewBox="0 0 24 24" className={styles.svg} {...S}>
      <g className={styles.layer}><path d="M12 3 3 7.5l9 4.5 9-4.5z" /></g>
      <g className={`${styles.layer} ${styles.layer2}`}><path d="M3 12l9 4.5 9-4.5" /></g>
    </svg>
  ),
  security: (
    <svg viewBox="0 0 24 24" className={styles.svg} {...S}>
      <path d="M12 21s7-3.5 7-9V5l-7-2.5L5 5v7c0 5.5 7 9 7 9z" />
      <polyline className={styles.draw2} points="8.5,12 11,14.5 15.5,9.5" />
    </svg>
  ),
}
ICONS.enquiries = ICONS.whatsapp

export default function AnimatedIcon({ name }) {
  return ICONS[name] || <Icon name={name} className={styles.svg} />
}
