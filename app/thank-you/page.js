import Link from 'next/link'
import styles from './thankyou.module.css'

export const metadata = {
  title: 'Thank you | NNC Digital',
  description: 'We have received your enquiry and will get back to you within one business day.',
  robots: { index: false, follow: false },
}

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export default function ThankYouPage() {
  return (
    <main className={styles.wrap}>
      <div className={styles.inner}>
        <span className={styles.mark}><Check /></span>

        <h1 className={styles.title}>Thank you!</h1>

        <p className={styles.lead}>
          We&apos;ve received your enquiry and will get back to you within{' '}
          <strong>one business day</strong> to set up your free trial.
        </p>
        <p className={styles.sub}>
          A product specialist will review your requirements and call or email you
          to get your NNC CRM account ready.
        </p>

        <div className={styles.hint}>Need it faster?</div>
        <div className={styles.actions}>
          <a className={styles.call} href="tel:+919422799466">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call +91 94227 99466
          </a>
          <a className={styles.wa} href="https://wa.me/919164566466" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.93 7.93 0 0 0 3.8.97h.01a7.94 7.94 0 0 0 5.59-13.55zM12.05 18.5a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.49.65.66-2.43-.16-.25a6.59 6.59 0 1 1 5.59 3.09zm3.62-4.94c-.2-.1-1.17-.58-1.35-.64s-.31-.1-.45.1-.51.64-.63.78-.23.15-.43.05a5.39 5.39 0 0 1-1.59-.98 6 6 0 0 1-1.1-1.37c-.11-.2 0-.3.09-.4s.2-.23.3-.35a1.3 1.3 0 0 0 .2-.34.37.37 0 0 0 0-.35c0-.1-.45-1.08-.62-1.48s-.33-.34-.45-.34h-.38a.74.74 0 0 0-.53.25 2.23 2.23 0 0 0-.7 1.66 3.86 3.86 0 0 0 .82 2.06 8.86 8.86 0 0 0 3.4 3c.47.2.84.33 1.13.42a2.73 2.73 0 0 0 1.25.08 2.04 2.04 0 0 0 1.34-.95 1.66 1.66 0 0 0 .12-.94c-.05-.09-.18-.14-.38-.24z" />
            </svg>
            WhatsApp us
          </a>
        </div>

        <div className={styles.badges}>
          <span><Check /> 30-day free trial</span>
          <span><Check /> No credit card needed</span>
          <span><Check /> Cancel anytime</span>
        </div>

        <Link className={styles.back} href="/">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Back to home
        </Link>
      </div>
    </main>
  )
}
