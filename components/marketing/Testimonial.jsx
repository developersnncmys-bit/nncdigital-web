// Single large testimonial block — modeled on Salesforce's Starter Suite
// customer quote (big photo/avatar on the left, large quote + attribution on
// the right, soft tinted background band around the whole thing).
//
// Shape expected on the block object:
//   {
//     type: 'testimonial',
//     quote: '...',
//     author: 'Sneha Patil',
//     role: 'Owner',
//     company: 'Trenz Retail',
//     initials: 'SP',          // fallback when no photo
//     photo?: '/path.jpg',     // optional
//     photoAlt?: '...',
//     companyLogo?: '/path',   // optional small badge over the photo
//     companyLogoAlt?: '...',
//     cta?: { label, href },   // optional learn-more link
//   }
//
// Server component — no interactivity, no state.

import styles from './Testimonial.module.css'

const Quote = () => (
  <svg viewBox="0 0 48 36" fill="currentColor" aria-hidden="true" className={styles.mark}>
    <path d="M0 36V18.9C0 7.9 6.1.9 15.4 0l1.3 4.4c-6 1.2-9 4.8-9 10h8V36H0zm27 0V18.9c0-11 6.1-18 15.4-18.9L43.7 4.4c-6 1.2-9 4.8-9 10h8V36H27z" />
  </svg>
)

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export default function Testimonial({ block }) {
  if (!block?.quote) return null

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.photoWrap}>
            {block.photo ? (
              <img
                src={block.photo}
                alt={block.photoAlt || block.author || ''}
                loading="lazy"
                className={styles.photo}
              />
            ) : (
              <div className={styles.photoFallback} aria-hidden="true">
                <span className={styles.initials}>{block.initials || '•'}</span>
              </div>
            )}
            {block.companyLogo && (
              <span className={styles.logoBadge}>
                <img src={block.companyLogo} alt={block.companyLogoAlt || block.company || ''} />
              </span>
            )}
          </div>

          <figure className={styles.content}>
            <Quote />
            <blockquote className={styles.quote}>{block.quote}</blockquote>
            <figcaption className={styles.who}>
              <strong className={styles.author}>{block.author}</strong>
              {(block.role || block.company) && (
                <span className={styles.role}>
                  {block.role}
                  {block.role && block.company ? ', ' : ''}
                  {block.company}
                </span>
              )}
            </figcaption>
            {block.cta && (
              <a href={block.cta.href} className={styles.cta}>
                {block.cta.label}
                <Arrow />
              </a>
            )}
          </figure>
        </div>
      </div>
    </section>
  )
}
