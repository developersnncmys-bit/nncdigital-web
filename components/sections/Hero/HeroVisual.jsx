'use client'

// Decorative CRM-themed hero animation. Replaces the earlier dashboard
// mockup in the homepage hero — the dashboard worked but duplicated the
// Showcase section's product tour. This is lighter: four floating glass
// cards that each capture a CRM moment (a new lead landing, a deal
// closing, a revenue curve, a WhatsApp reply). Each card bobs gently on
// its own loop so the composition feels alive without pulling focus from
// the hero copy.
import styles from './HeroVisual.module.css'

export default function HeroVisual() {
  return (
    <div className={styles.stage} aria-hidden="true">
      {/* Soft blue glow bleed under the stack */}
      <span className={styles.glow} />

      {/* Card 1 — new lead captured */}
      <div className={`${styles.card} ${styles.cardLead}`}>
        <span className={styles.cardIcon} style={{ background: '#4d8bff' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
        <span className={styles.cardText}>
          <b>New lead captured</b>
          <i>Rohit Industries · ₹2.4L</i>
        </span>
      </div>

      {/* Card 2 — revenue curve */}
      <div className={`${styles.card} ${styles.cardChart}`}>
        <div className={styles.chartHead}>
          <span>Revenue</span>
          <span className={styles.chartTag}>▲ 27%</span>
        </div>
        <svg className={styles.chartSvg} viewBox="0 0 160 56" preserveAspectRatio="none">
          <defs>
            <linearGradient id="hvArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(77,139,255,0.6)" />
              <stop offset="100%" stopColor="rgba(77,139,255,0)" />
            </linearGradient>
            <linearGradient id="hvLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7aa2ff" />
              <stop offset="100%" stopColor="#0b5cff" />
            </linearGradient>
          </defs>
          <path
            className={styles.chartArea}
            d="M0 46 L24 42 L48 44 L72 32 L96 36 L120 20 L144 24 L160 10 L160 56 L0 56 Z"
            fill="url(#hvArea)"
          />
          <path
            className={styles.chartLine}
            d="M0 46 L24 42 L48 44 L72 32 L96 36 L120 20 L144 24 L160 10"
            fill="none"
            stroke="url(#hvLine)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1"
          />
          <circle className={styles.chartDot} cx="160" cy="10" r="3.5" fill="#0b5cff" />
        </svg>
      </div>

      {/* Card 3 — WhatsApp reply */}
      <div className={`${styles.card} ${styles.cardChat}`}>
        <span className={styles.cardIcon} style={{ background: '#25d366' }}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6A12 12 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5zM12 22a9.9 9.9 0 0 1-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A10 10 0 1 1 12 22z" />
          </svg>
        </span>
        <span className={styles.cardText}>
          <b>WhatsApp reply</b>
          <i>“Yes, send me the quote.”</i>
        </span>
      </div>

      {/* Card 4 — deal won */}
      <div className={`${styles.card} ${styles.cardWon}`}>
        <span className={styles.cardIcon} style={{ background: '#16a34a' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <span className={styles.cardText}>
          <b>Deal won</b>
          <i>Starlight Bakery · ₹1.9L</i>
        </span>
      </div>
    </div>
  )
}
