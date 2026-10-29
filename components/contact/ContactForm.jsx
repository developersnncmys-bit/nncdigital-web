'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './ContactForm.module.css'
import { contact } from '@/data/contact'

// Where enquiries are DELIVERED. Separate from the address shown to
// visitors: FormSubmit needs a one-time confirmation per recipient, so
// changing this silently drops leads until that is done.
const ENQUIRY_EMAIL = contact.enquiryEmail
// What visitors are told to write to.
const PUBLIC_EMAIL = contact.email
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${ENQUIRY_EMAIL}`
// NNC CRM backend — public enquiry endpoint (same one the main NNC website uses).
// Saves the enquiry into the CRM under the "Enquire NNC Digital" tab + sends the
// admin/confirmation emails via the CRM's SMTP (info@nakshatranamahacreations.com).
// NNC CRM backend — public enquiry endpoint. Saves the enquiry into the CRM under
// the "Enquire NNC Digital" tab (site:'nncdigital') + sends the admin/confirmation
// emails via the CRM's SMTP (info@nakshatranamahacreations.com).
const CRM_ENDPOINT = 'https://newadminpanelbackendrender26.onrender.com/api/website-enquiry'
const SIZES = ['Just me', '2 to 10', '11 to 50', '51 to 200', '200+']

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export default function ContactForm({
  title = 'Send us a message',
  sub = 'Takes under a minute. No pressure, no jargon.',
  subjectLabel = 'enquiry',
}) {
  const router = useRouter()
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    if (sending) return
    const form = e.currentTarget
    const fd = new FormData(form)
    if (fd.get('_honey')) return

    const name    = (fd.get('name') || '').toString().trim()
    const email   = (fd.get('email') || '').toString().trim()
    const phone   = `${fd.get('code') || ''} ${fd.get('phone') || ''}`.trim()
    const company = (fd.get('company') || '').toString().trim()
    const teamSize = (fd.get('teamsize') || '').toString()
    const message = (fd.get('message') || '').toString().trim()

    if (!name || !phone) {
      setError('Please enter your name and phone number.')
      return
    }

    // Requirements text combines the message + team size context for the CRM.
    const requirements = [message, teamSize ? `Team size: ${teamSize}` : '']
      .filter(Boolean)
      .join('\n')

    // Payload for the NNC CRM — site:'nncdigital' routes it to the
    // "Enquire NNC Digital" tab. The CRM saves it and sends the emails.
    const crmPayload = {
      name,
      phone,
      email,
      company,
      requirements,
      service: 'CRM & Custom Software',
      site: 'nncdigital',
      landingPage: typeof window !== 'undefined' ? window.location.pathname : '/',
    }

    // Backup email payload (FormSubmit) — kept so enquiries still email through
    // even if the CRM backend is briefly unreachable.
    const emailPayload = {
      Name: name,
      Email: email,
      Phone: phone,
      Company: company,
      'Team size': teamSize,
      Message: message,
      _subject: `New NNC Digital ${subjectLabel} from ${name || 'website'}`,
      _template: 'table',
      _captcha: 'false',
    }

    setSending(true)
    setError('')
    try {
      // Primary: save into the CRM.
      const crmRes = await fetch(CRM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(crmPayload),
      })

      if (crmRes.ok) {
        // Fire the backup email but don't block success on it.
        fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(emailPayload),
        }).catch(() => {})
        router.push('/thank-you/')
        return
      }

      // CRM failed → fall back to email-only so the lead isn't lost.
      const mailRes = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(emailPayload),
      })
      if (!mailRes.ok) throw new Error('both failed')
      router.push('/thank-you/')
      return
    } catch (err) {
      setError(`We could not send that automatically. Please email ${PUBLIC_EMAIL} or call 94227 99466.`)
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div className={styles.card}>
        <div className={styles.success}>
          <span className={styles.successMark}><Check /></span>
          <h2 className={styles.successTitle}>Thank you!</h2>
          <p className={styles.successLead}>Taking you to your confirmation…</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardSub}>{sub}</p>
      <form className={styles.form} onSubmit={onSubmit}>
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />

        <div className={styles.row2}>
          <label className={styles.field}>
            <span>Full name</span>
            <input name="name" type="text" required placeholder="Priya Sharma" />
          </label>
          <label className={styles.field}>
            <span>Work email</span>
            <input name="email" type="email" required placeholder="you@company.com" />
          </label>
        </div>

        <div className={styles.row2}>
          <label className={styles.field}>
            <span>Phone</span>
            <div className={styles.phoneRow}>
              <select name="code" aria-label="Country code" defaultValue="+91">
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
                <option>+971</option>
                <option>+65</option>
              </select>
              <input name="phone" type="tel" required placeholder="98765 43210" />
            </div>
          </label>
          <label className={styles.field}>
            <span>Company</span>
            <input name="company" type="text" required placeholder="Acme Pvt. Ltd." />
          </label>
        </div>

        <label className={styles.field}>
          <span>Team size</span>
          <select name="teamsize" required defaultValue="">
            <option value="" disabled>Select</option>
            {SIZES.map((s) => (<option key={s}>{s}</option>))}
          </select>
        </label>

        <label className={styles.field}>
          <span>How can we help?</span>
          <textarea name="message" rows={4} placeholder="Tell us a little about your business and what you are looking for." />
        </label>

        <label className={styles.consent}>
          <input type="checkbox" required />
          <span>I agree to be contacted by NNC about my enquiry.</span>
        </label>

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.submit} disabled={sending}>
          {sending ? 'Sending...' : 'Send message'}
          {!sending && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          )}
        </button>
      </form>
    </div>
  )
}
