import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import Icon from '@/components/ui/Icon/Icon'
import ContactForm from '@/components/contact/ContactForm'
import styles from './contact.module.css'

export const metadata = {
  title: 'Contact Support | NNC CRM',
  description:
    'Need help? Reach the NNC support team by email, WhatsApp or phone. We respond fast.',
}

const METHODS = [
  { icon: 'phone', label: 'Call us', value: '94227 99466', sub: 'Monday to Saturday, 10am to 7pm', href: 'tel:9422799466' },
  { icon: 'mail', label: 'Email us', value: 'hello@nncdigital.co.in', sub: 'Replies within one business day', href: 'mailto:hello@nncdigital.co.in' },
  { icon: 'whatsapp', label: 'WhatsApp', value: 'Chat with us', sub: 'Quick answers during business hours', href: 'https://wa.me/919164566466' },
]

const LINKS = [
  { icon: 'help', title: 'Help center', body: 'Guides and answers to common questions.', href: '/support/help-center' },
  { icon: 'rocket', title: 'Getting started', body: 'Set up your account in four quick steps.', href: '/support/getting-started' },
  { icon: 'status', title: 'System status', body: 'Check live status and recent incidents.', href: '/support/status' },
]

export default function ContactSupportPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Support', href: '/support/help-center' },
            { label: 'Contact support' },
          ]}
        />

        <div className={styles.grid}>
          <div className={styles.info}>
            <span className={styles.eyebrow}>Support</span>
            <h1 className={styles.title}>We are here to help.</h1>
            <p className={styles.lead}>
              Our team is here to help you get the most out of NNC CRM. Reach us directly, or find a
              quick answer below.
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

            <div className={styles.find}>
              <span className={styles.findLabel}>Find answers faster</span>
              <div className={styles.findGrid}>
                {LINKS.map((l) => (
                  <a key={l.title} href={l.href} className={styles.link}>
                    <span className={styles.lIcon}><Icon name={l.icon} /></span>
                    <span>
                      <span className={styles.lTitle}>{l.title}</span>
                      <span className={styles.lBody}>{l.body}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.formWrap}>
            <ContactForm
              title="Message our support team"
              sub="Tell us what you need and we will get back to you fast."
              subjectLabel="support request"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
