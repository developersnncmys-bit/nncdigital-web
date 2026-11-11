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
// NNC CRM backend — public enquiry endpoint. Saves the enquiry into the CRM
// under the "Enquire NNC Digital" tab (site:'nncdigital') + sends the
// admin/confirmation emails via the CRM's SMTP.
const CRM_ENDPOINT = 'https://api.nakshatranamahacreations.com/api/website-enquiry'
const SIZES = ['Just me', '2 to 10', '11 to 50', '51 to 200', '200+']

// Per-country-code phone rules. Mirrors TrialModal.jsx so both forms accept
// the same inputs and show the same hint text on failure.
const PHONE_RULES = {
  '+91': { len: 10, starts: /^[6-9]/, hint: '10 digits starting with 6, 7, 8 or 9' },
  '+1':  { len: 10, starts: /^[2-9]/, hint: '10 digits' },
  '+44': { len: 10, starts: /^7/,     hint: '10 digits starting with 7 (mobile)' },
  '+971': { len: 9, starts: /^5/,     hint: '9 digits starting with 5 (mobile)' },
  '+65': { len: 8, starts: /^[89]/,   hint: '8 digits starting with 8 or 9' },
}

function validatePhoneInput(code, digits, final) {
  const rule = PHONE_RULES[code]
  if (!rule) return ''
  if (!digits) return final ? 'Enter a valid mobile number.' : ''
  if (!rule.starts.test(digits)) return 'Enter a valid mobile number.'
  if (digits.length > rule.len) return 'Enter a valid mobile number.'
  if (final && digits.length !== rule.len) return 'Enter a valid mobile number.'
  return ''
}

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
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [phoneInput, setPhoneInput] = useState('')
  const [countryCode, setCountryCode] = useState('+91')

  const onSubmit = async (e) => {
    e.preventDefault()
    if (sending) return
    const form = e.currentTarget
    const fd = new FormData(form)
    if (fd.get('_honey')) return

    const name = (fd.get('name') || '').toString().trim()
    if (name.length < 2 || /[^\p{L}\s]/u.test(name)) {
      setNameError('Enter a valid name.')
      return
    }
    setNameError('')

    const email = (fd.get('email') || '').toString().trim()
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
    if (!emailOk) {
      setEmailError('Please enter a valid email address.')
      return
    }
    setEmailError('')

    const phoneDigits = (fd.get('phone') || '').toString().replace(/\D/g, '')
    const codeVal = (fd.get('code') || countryCode).toString()
    const phoneMsg = validatePhoneInput(codeVal, phoneDigits, true)
    if (phoneMsg) {
      setPhoneError(phoneMsg)
      return
    }
    setPhoneError('')

    const phone = `${codeVal} ${phoneDigits}`.trim()
    const company = (fd.get('company') || '').toString().trim()
    const teamSize = (fd.get('teamsize') || '').toString()
    const message = (fd.get('message') || '').toString().trim()

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
            <input
              name="name"
              type="text"
              required
              placeholder="Priya Sharma"
              autoComplete="name"
              value={nameInput}
              onChange={(e) => {
                const cleaned = e.target.value.replace(/[^\p{L}\s]/gu, '')
                setNameInput(cleaned)
                if (nameError) setNameError('')
              }}
              onBlur={(e) => {
                const v = e.target.value.trim()
                if (!v) return
                if (v.length < 2) setNameError('Enter a valid name.')
              }}
              aria-invalid={!!nameError}
            />
            {nameError && <p className={styles.error}>{nameError}</p>}
          </label>
          <label className={styles.field}>
            <span>Work email</span>
            <input
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              autoComplete="email"
              onChange={() => emailError && setEmailError('')}
              onBlur={(e) => {
                const v = e.target.value.trim()
                if (!v) return
                const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
                setEmailError(ok ? '' : 'Please enter a valid email address.')
              }}
              aria-invalid={!!emailError}
            />
            {emailError && <p className={styles.error}>{emailError}</p>}
          </label>
        </div>

        <div className={styles.row2}>
          <label className={styles.field}>
            <span>Phone</span>
            <div className={styles.phoneRow}>
              <select
                name="code"
                aria-label="Country code"
                value={countryCode}
                onChange={(e) => {
                  const next = e.target.value
                  setCountryCode(next)
                  const digits = phoneInput.replace(/\D/g, '')
                  setPhoneError(validatePhoneInput(next, digits, false))
                }}
              >
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
                <option>+971</option>
                <option>+65</option>
              </select>
              <input
                name="phone"
                type="tel"
                required
                placeholder={countryCode === '+91' ? '98765 43210' : 'Phone number'}
                inputMode="numeric"
                autoComplete="tel"
                maxLength={PHONE_RULES[countryCode]?.len ?? 15}
                value={phoneInput}
                onChange={(e) => {
                  const cleaned = e.target.value.replace(/\D/g, '')
                  setPhoneInput(cleaned)
                  setPhoneError(validatePhoneInput(countryCode, cleaned, false))
                }}
                onBlur={(e) => {
                  const digits = e.target.value.replace(/\D/g, '')
                  if (!digits) return
                  setPhoneError(validatePhoneInput(countryCode, digits, true))
                }}
                aria-invalid={!!phoneError}
              />
            </div>
            {phoneError && <p className={styles.error}>{phoneError}</p>}
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
