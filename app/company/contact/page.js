import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import Icon from '@/components/ui/Icon/Icon'
import ContactForm from '@/components/contact/ContactForm'
import styles from './contact.module.css'

export const metadata = {
  title: 'Contact Sales | NNC CRM',
  description:
    'Talk to the NNC team about the right plan for your business. Call 94227 99466, email hello@nncdigital.co.in, or send us a message.',
}

const METHODS = [
  { icon: 'phone', label: 'Call us', value: '94227 99466', sub: 'Monday to Saturday, 10am to 7pm', href: 'tel:9422799466' },
  { icon: 'mail', label: 'Email us', value: 'hello@nncdigital.co.in', sub: 'We reply within one business day', href: 'mailto:hello@nncdigital.co.in' },
  { icon: 'whatsapp', label: 'WhatsApp', value: 'Chat with us', sub: 'Quick answers during business hours', href: 'https://wa.me/919164566466' },
]

const OFFICES = [
  { city: 'Bengaluru', note: 'Head office' },
  { city: 'Mumbai', note: 'Thane West' },
  { city: 'Mysuru', note: 'Regional office' },
  { city: 'Hyderabad', note: 'Regional office' },
]

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Company', href: '/company/about' },
            { label: 'Contact sales' },
          ]}
        />

        <div className={styles.grid}>
          <div className={styles.info}>
            <span className={styles.eyebrow}>Contact sales</span>
            <h1 className={styles.title}>Let us find the right plan for you.</h1>
            <p className={styles.lead}>
              Tell us how your business works and we will show you exactly which modules you need
              and what it will cost. No pressure, no jargon.
            </p>

            <div className={styles.methods}>
              {METHODS.map((m) => (
                <a key={m.label} href={m.href} className={styles.method}>
                  <span className={styles.mIcon}><Icon name={m.icon} /></span>
                  <span className={styles.mText}>
                    <span className={styles.mLabel}>{m.label}</span>
                    <span className={styles.mValue}>{m.value}</span>
                    <span className={styles.mSub}>{m.sub}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className={styles.offices}>
              <span className={styles.officesLabel}>Our offices</span>
              <div className={styles.officeGrid}>
                {OFFICES.map((o) => (
                  <div key={o.city} className={styles.office}>
                    <span className={styles.oIcon}><Icon name="realestate" /></span>
                    <span>
                      <span className={styles.oCity}>{o.city}</span>
                      <span className={styles.oNote}>{o.note}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.formWrap}>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}
