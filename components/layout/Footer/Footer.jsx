import { footer } from '@/data/content'
import { travelPages } from '@/data/travelPages'
import styles from './Footer.module.css'

// Travel CRM footer column — reduced from 13 near-identical keyword links
// (flagged as keyword stuffing in the pre-launch audit) to 4 pages that
// serve genuinely different intents and audiences. The other 9 keyword
// pages still exist for direct SEO landings; they just aren't linked here.
const TRAVEL_FOOTER_SLUGS = [
  'travel-crm',
  'tour-operator-crm',
  'travel-quotation-software',
  'travel-itinerary-software',
]

// "travel agency crm" -> "Travel agency CRM". Sentence case with CRM kept in
// capitals, which is also the most readable label for the link.
const keywordLabel = (kw) =>
  kw
    .split(' ')
    .map((w, i) => (w === 'crm' ? 'CRM' : i === 0 ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ')

const SOCIAL = {
  linkedin: <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4z" />,
  x: <path d="M17.53 3H20.5l-6.49 7.41L21.75 21h-6.02l-4.71-6.16L5.6 21H2.63l6.94-7.93L2.25 3h6.17l4.26 5.63L17.53 3zm-1.05 16.2h1.65L7.6 4.71H5.83l10.65 14.49z" />,
  youtube: <path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.77-1.77C19.33 5.1 12 5.1 12 5.1s-7.33 0-8.83.43A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.77 1.77C4.67 18.9 12 18.9 12 18.9s7.33 0 8.83-.43a2.5 2.5 0 0 0 1.77-1.77C23 15.2 23 12 23 12zM9.75 15.02V8.98L15 12l-5.25 3.02z" />,
  facebook: <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />,
  instagram: <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.12 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a5.9 5.9 0 0 0 1.38 2.12 5.9 5.9 0 0 0 2.12 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a6.15 6.15 0 0 0 3.5-3.5c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.12A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />,
}

const HREF = {
  // Products — mirrors the Products drawer in the nav.
  'NNC CRM': '/',
  'Travel CRM': '/travel-crm/',
  'Training Institutes CRM': '/multi-center-training-institutes-crm/',
  'Car Studio CRM': '/car-studio-crm/',
  'Small Business CRM': '/small-business-crm/',
  Pricing: '/pricing',
  // Industries
  'Sales teams': '/industries/sales-teams',
  'Service businesses': '/industries/service-businesses',
  Manufacturing: '/industries/manufacturing',
  'Retail and distribution': '/industries/retail',
  Healthcare: '/industries/healthcare',
  Education: '/industries/education',
  'Real estate': '/industries/real-estate',
  // Company
  'About us': '/company/about',
  Careers: '/company/careers',
  Blog: '/company/blog',
  Partners: '/company/partners',
  'Customer stories': '/company/customers',
  'Contact sales': '/company/contact',
  Press: '/company/press',
  // Support
  'Help center': '/support/help-center',
  'Getting started': '/support/getting-started',
  'API documentation': '/support/api',
  'System status': '/support/status',
  Security: '/support/security',
  'Data privacy': '/support/data-privacy',
  'Contact support': '/support/contact',
  // Legal
  Terms: '/legal/terms',
  Privacy: '/legal/privacy',
  'Trust Center': '/legal/trust-center',
  'Acceptable Use': '/legal/acceptable-use',
  'Legal and Compliance': '/legal/compliance',
  'Cookie Settings': '/legal/cookies',
  'Site Map': '/sitemap',
}
const hrefFor = (l) => HREF[l] || '#'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* brand / contact column */}
        <div className={styles.brandCol}>
          <a className={styles.brand} href="/" aria-label="NNC Digital, go to home page">
            <img className={styles.mark} src="/nnc-mark.png" alt="" aria-hidden="true" />
            <span className={styles.brandText}>
              NNC<span className={styles.brandLight}>digital</span>
            </span>
          </a>
          <p className={styles.brandLine}>{footer.brandLine}</p>

          <div className={styles.contact}>
            <span className={styles.contactLabel}>{footer.contactLabel}</span>
            <a className={styles.phone} href={`tel:${footer.phone.replace(/\s/g, '')}`}>
              {footer.phone}
            </a>
            <a className={styles.email} href={`mailto:${footer.email}`}>
              {footer.email}
            </a>
          </div>

          <div className={styles.social}>
            {footer.social.map((s) => (
              <a key={s} href="#" className={styles.socialLink} aria-label={s}>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  {SOCIAL[s]}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* link columns */}
        <div className={styles.cols}>
          {footer.columns.map((col) => (
            <nav key={col.title} className={styles.col} aria-label={col.title}>
              <h4 className={styles.colTitle}>{col.title}</h4>
              {col.links.map((l) => (
                <a key={l} href={hrefFor(l)} className={styles.colLink}>
                  {l}
                </a>
              ))}
            </nav>
          ))}

          {/* Travel CRM column — 4 genuinely different pages instead of all
              13 keyword variants. The remaining 9 are still live routes for
              direct SEO landings, just not linked here. */}
          <nav className={styles.col} aria-label="Travel CRM">
            <h4 className={styles.colTitle}>Travel CRM</h4>
            {TRAVEL_FOOTER_SLUGS.map((slug) => {
              const p = travelPages[slug]
              if (!p) return null
              return (
                <a key={slug} href={`/${slug}/`} className={styles.colLink}>
                  {keywordLabel(p.keyword)}
                </a>
              )
            })}
          </nav>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <div className={styles.copyWrap}>
          <span className={styles.copyright}>{footer.copyright}</span>
          <span className={styles.madeIn}>{footer.madeIn}</span>
        </div>
        <div className={styles.legal}>
          {footer.legal.map((l) => (
            <a key={l} href={hrefFor(l)} className={styles.legalLink}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
