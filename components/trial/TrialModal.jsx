'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './TrialModal.module.css'
import { contact } from '@/data/contact'
import { INDIA_STATES, INDIA_STATES_DISTRICTS } from '@/data/indiaGeo'

const SIZES = ['Just me', '2 to 10', '11 to 50', '51 to 200', '200+']
const SLIDE_MS = 5000

// Per-country-code phone rules. `len` is the national subscriber length
// (country code excluded), `starts` is a regex the first digit must match,
// `hint` is the user-facing description used in error copy.
const PHONE_RULES = {
  '+91': { len: 10, starts: /^[6-9]/, hint: '10 digits starting with 6, 7, 8 or 9' },
  '+1':  { len: 10, starts: /^[2-9]/, hint: '10 digits' },
  '+44': { len: 10, starts: /^7/,     hint: '10 digits starting with 7 (mobile)' },
  '+971': { len: 9, starts: /^5/,     hint: '9 digits starting with 5 (mobile)' },
  '+65': { len: 8, starts: /^[89]/,   hint: '8 digits starting with 8 or 9' },
}

// Returns an error string, or '' if the current input is acceptable so far.
// `final` = true means we want the completed-form verdict (used on blur /
// submit). When false, we tolerate a short in-progress value.
function validatePhoneInput(code, digits, final) {
  const rule = PHONE_RULES[code]
  if (!rule) return ''
  if (!digits) return final ? 'Enter a valid mobile number.' : ''
  if (!rule.starts.test(digits)) return 'Enter a valid mobile number.'
  if (digits.length > rule.len) return 'Enter a valid mobile number.'
  if (final && digits.length !== rule.len) return 'Enter a valid mobile number.'
  return ''
}

// Enquiries are saved into the NNC CRM (under the "Enquire NNC Digital" tab) and
// also emailed via FormSubmit as a backup.
// Where enquiries are DELIVERED. Separate from the address shown to
// visitors: FormSubmit needs a one-time confirmation per recipient, so
// changing this silently drops leads until that is done.
const ENQUIRY_EMAIL = contact.enquiryEmail
// What visitors are told to write to.
const PUBLIC_EMAIL = contact.email
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${ENQUIRY_EMAIL}`
const CRM_ENDPOINT = 'https://api.nakshatranamahacreations.com/api/website-enquiry'

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

/* ---------- animated mini-demos ---------- */
function WaDemo() {
  return (
    <div className={styles.wa}>
      <div className={`${styles.waBub} ${styles.waBot} ${styles.waA}`}>Hi 👋 Welcome to NNC!</div>
      <div className={`${styles.waBub} ${styles.waUser} ${styles.waB}`}>Your business name</div>
      <div className={`${styles.waBub} ${styles.waBot} ${styles.waTyping} ${styles.waC}`} aria-hidden="true">
        <i /><i /><i />
      </div>
      <div className={`${styles.waBub} ${styles.waBot} ${styles.waD}`}>A plan tailored to you</div>
    </div>
  )
}

function ForecastDemo() {
  return (
    <div className={styles.fc}>
      <svg viewBox="0 0 240 110" className={styles.fcSvg} aria-hidden="true">
        <polyline className={styles.fcActual} points="6,86 46,72 86,78 126,52" />
        <polyline className={styles.fcCast} points="126,52 166,40 206,20 234,8" />
        <circle className={styles.fcDot} cx="126" cy="52" r="3.5" />
        <circle className={styles.fcDot} cx="234" cy="8" r="3.5" />
      </svg>
      <div className={styles.fcVal}>₹1.42Cr <span>▲ 27%</span></div>
    </div>
  )
}

function PipelineDemo() {
  const rows = [
    ['New', 92],
    ['Quoted', 64],
    ['Negotiating', 40],
    ['Won', 22],
  ]
  return (
    <div className={styles.pipe}>
      {rows.map(([label, pct], i) => (
        <div className={styles.pipeRow} key={label}>
          <span className={styles.pipeLabel}>{label}</span>
          <span className={styles.pipeTrack}>
            <span
              className={`${styles.pipeFill} ${i === rows.length - 1 ? styles.pipeWon : ''}`}
              style={{ '--w': `${pct}%`, '--d': `${i * 0.18}s` }}
            />
          </span>
        </div>
      ))}
    </div>
  )
}

function ShieldDemo() {
  return (
    <div className={styles.shield}>
      <span className={styles.ring} />
      <span className={`${styles.ring} ${styles.ring2}`} />
      <svg viewBox="0 0 120 130" className={styles.shieldSvg} aria-hidden="true">
        <path className={styles.shieldFill} d="M60 6 L106 24 V62 C106 92 86 112 60 122 C34 112 14 92 14 62 V24 Z" />
        <path className={styles.shieldEdge} d="M60 6 L106 24 V62 C106 92 86 112 60 122 C34 112 14 92 14 62 V24 Z" />
        <path className={styles.shieldCheck} d="M42 64 l13 13 l24 -28" />
      </svg>
    </div>
  )
}

const DEMOS = [
  { Comp: WaDemo, title: 'Qualify leads on WhatsApp', body: 'The assistant asks 5 questions and hands you a ready lead, 24/7.' },
  { Comp: ForecastDemo, title: 'See 3, 6 & 12 months ahead', body: 'Your real numbers turned into a clear revenue forecast.' },
  { Comp: PipelineDemo, title: 'Every enquiry, one pipeline', body: 'Captured from web, WhatsApp, calls and walk ins, automatically.' },
  { Comp: ShieldDemo, title: 'Bank grade security, built in', body: 'Encrypted, backed up, role based access and full audit trails.' },
]

export default function TrialModal() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [nameError, setNameError] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [slide, setSlide] = useState(0)
  // State needs to be lifted so the District dropdown can refresh its options.
  const [state, setState] = useState('')
  const [phoneInput, setPhoneInput] = useState('')
  const [countryCode, setCountryCode] = useState('+91')
  const firstRef = useRef(null)

  useEffect(() => {
    const onClick = (e) => {
      const t = e.target.closest('a[href$="#start"], [data-trial]')
      if (t) {
        e.preventDefault()
        setSent(false)
        setError('')
        setOpen(true)
      }
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (open) {
      const t = setTimeout(() => firstRef.current?.focus(), 120)
      return () => clearTimeout(t)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    setSlide(0)
    const id = setInterval(() => setSlide((s) => (s + 1) % DEMOS.length), SLIDE_MS)
    return () => clearInterval(id)
  }, [open])

  const onSubmit = async (e) => {
    e.preventDefault()
    if (sending) return
    const form = e.currentTarget
    const fd = new FormData(form)
    if (fd.get('_honey')) return // bot trap

    const name = (fd.get('name') || '').toString().trim()
    if (name.length < 2 || /[^\p{L}\s]/u.test(name)) {
      setNameError('Enter a valid name.')
      return
    }
    setNameError('')
    const email = (fd.get('email') || '').toString().trim()
    // Pragmatic email check — must have a local part, '@', a domain, and a TLD.
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
    const phoneValue = `${codeVal} ${phoneDigits}`.trim()
    const company = (fd.get('company') || '').toString().trim()
    const teamSize = (fd.get('teamsize') || '').toString()
    const stateVal = (fd.get('state') || '').toString()
    const districtVal = (fd.get('district') || '').toString()

    const payload = {
      Name: name,
      Email: email,
      Phone: phoneValue,
      Company: company,
      'Team size': teamSize,
      State: stateVal,
      District: districtVal,
      _subject: `New NNC Digital trial enquiry from ${name || 'website'}`,
      _template: 'table',
      _captcha: 'false',
    }

    // CRM payload — site:'nncdigital' routes it to the "Enquire NNC Digital" tab.
    const crmPayload = {
      name,
      phone: phoneValue,
      email,
      company,
      requirements: [
        `Free trial request`,
        teamSize ? `Team size: ${teamSize}` : '',
        stateVal && districtVal ? `Location: ${districtVal}, ${stateVal}` : stateVal ? `State: ${stateVal}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
      service: 'CRM & Custom Software',
      site: 'nncdigital',
      landingPage: typeof window !== 'undefined' ? window.location.pathname : '/',
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
      if (!crmRes.ok) throw new Error('Request failed')
      // Backup email — fire and forget.
      fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {})
      // Redirect to the dedicated thank-you page.
      setOpen(false)
      router.push('/thank-you/')
      return
    } catch (err) {
      // Fallback: open the visitor's mail client addressed to the enquiry inbox.
      const body = encodeURIComponent(
        `Name: ${payload.Name}\nEmail: ${payload.Email}\nPhone: ${payload.Phone}\nCompany: ${payload.Company}\nTeam size: ${payload['Team size']}\nState: ${payload.State}\nDistrict: ${payload.District}`
      )
      const subject = encodeURIComponent('NNC CRM trial enquiry')
      setError(
        `We could not send that automatically. Email us at ${PUBLIC_EMAIL} or call 94227 99466.`
      )
      if (typeof window !== 'undefined') {
        window.location.href = `mailto:${PUBLIC_EMAIL}?subject=${subject}&body=${body}`
      }
    } finally {
      setSending(false)
    }
  }

  const d = DEMOS[slide]
  const Demo = d.Comp

  return (
    <div
      className={`${styles.backdrop} ${open ? styles.open : ''}`}
      onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}
      aria-hidden={!open}
    >
      <div className={styles.dialog} role="dialog" aria-modal="true" aria-label="Start your free trial">
        {/* brand panel with cycling animated demos */}
        <aside className={styles.aside}>
          <span className={styles.glow} aria-hidden="true" />

          <span className={styles.brand}>
            <img className={styles.mark} src="/nnc-mark.png" alt="" aria-hidden="true" />
            <span className={styles.brandText}>
              NNC<span className={styles.brandLight}>digital</span>
            </span>
          </span>

          <div className={styles.stage} key={slide}>
            <div className={styles.demo}>
              <Demo />
            </div>
            <h3 className={styles.demoTitle}>{d.title}</h3>
            <p className={styles.demoBody}>{d.body}</p>
          </div>
        </aside>

        {/* form panel */}
        <div className={styles.panel}>
          <button className={styles.close} onClick={() => setOpen(false)} aria-label="Close" type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>

          {sent ? (
            <div className={styles.success}>
              <span className={styles.successMark}><Check /></span>
              <h3 className={styles.successTitle}>Thank you!</h3>
              <p className={styles.successLead}>Taking you to your confirmation…</p>
            </div>
          ) : (
            <>
              <h3 className={styles.formTitle}>Tell us about your business</h3>
              <p className={styles.formSub}>Takes under a minute. No credit card.</p>
              <form className={styles.form} onSubmit={onSubmit}>
                {/* honeypot: hidden from users, catches bots */}
                <input
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
                  aria-hidden="true"
                />
                <label className={styles.field}>
                  <span>Full name</span>
                  <input
                    ref={firstRef}
                    name="name"
                    type="text"
                    required
                    placeholder="Priya Sharma"
                    autoComplete="name"
                    value={nameInput}
                    onChange={(e) => {
                      // Letters (any script) and spaces only.
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
                  {nameError && <p className={styles.formError}>{nameError}</p>}
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
                  {emailError && <p className={styles.formError}>{emailError}</p>}
                </label>
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
                        // Re-check the already-typed number against the new rule.
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
                  {phoneError && <p className={styles.formError}>{phoneError}</p>}
                </label>
                <div className={styles.row2}>
                  <label className={styles.field}>
                    <span>Company</span>
                    <input name="company" type="text" required placeholder="Acme Pvt. Ltd." />
                  </label>
                  <label className={styles.field}>
                    <span>Team size</span>
                    <select name="teamsize" required defaultValue="">
                      <option value="" disabled>Select</option>
                      {SIZES.map((s) => (<option key={s}>{s}</option>))}
                    </select>
                  </label>
                </div>
                {/* State + District — District list depends on selected state.
                    State is lifted to React so the dependent dropdown can refresh. */}
                <div className={styles.row2}>
                  <label className={styles.field}>
                    <span>State</span>
                    <select
                      name="state"
                      required
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    >
                      <option value="" disabled>Select state</option>
                      {INDIA_STATES.map((s) => (<option key={s}>{s}</option>))}
                    </select>
                  </label>
                  <label className={styles.field}>
                    <span>District</span>
                    <select name="district" required defaultValue="" disabled={!state}>
                      <option value="" disabled>
                        {state ? 'Select district' : 'Select a state first'}
                      </option>
                      {state &&
                        INDIA_STATES_DISTRICTS[state]?.map((d) => (
                          <option key={d}>{d}</option>
                        ))}
                    </select>
                  </label>
                </div>
                <label className={styles.consent}>
                  <input type="checkbox" required />
                  <span>I agree to be contacted by NNC about my enquiry.</span>
                </label>
                {error && <p className={styles.formError}>{error}</p>}
                <button type="submit" className={styles.submit} disabled={sending}>
                  {sending ? 'Sending...' : 'Book a Demo'}
                  {!sending && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
