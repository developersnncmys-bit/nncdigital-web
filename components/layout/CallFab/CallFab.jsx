'use client'

import { contact } from '@/data/contact'
import styles from './CallFab.module.css'

// Standalone "Call us" floating bubble. Mounted directly in SiteChrome so
// it renders on EVERY page — including travel routes where HelpBot is
// suppressed (previously the call button lived inside HelpBot and
// disappeared on those pages).
//
// Visually stacks above the green `.chatFab` from TravelChatBot (the
// WhatsApp bubble site-wide): chatFab is at bottom:22px height:58px, so
// 22 + 58 + 12 gap = 92px for the navy call bubble.
const PhoneMark = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1c0 9.39 7.61 17 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1Z" />
  </svg>
)

export default function CallFab() {
  return (
    <a
      className={styles.call}
      href={contact.phoneHref}
      aria-label={`Call NNC on ${contact.phone}`}
    >
      <PhoneMark />
      <span className={styles.tip}>Call us</span>
    </a>
  )
}
