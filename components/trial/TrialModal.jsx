'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './TrialModal.module.css'
import { contact } from '@/data/contact'
import { INDIA_STATES, INDIA_STATES_DISTRICTS } from '@/data/indiaGeo'

const SIZES = ['Just me', '2 to 10', '11 to 50', '51 to 200', '200+']
const SLIDE_MS = 5000

// Enquiries are saved into the NNC CRM (under the "Enquire NNC Digital" tab) and
// also emailed via FormSubmit as a backup.
// Where enquiries are DELIVERED. Separate from the address shown to
// visitors: FormSubmit needs a one-time confirmation per recipient, so
// changing this silently drops leads until that is done.
const ENQUIRY_EMAIL = contact.enquiryEmail
// What visitors are told to write to.
const PUBLIC_EMAIL = contact.email
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${ENQUIRY_EMAIL}`
const CRM_ENDPOINT = 'https://newadminpanelbackendrender26.onrender.com/api/website-enquiry'

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
  const [slide, setSlide] = useState(0)
  // State needs to be lifted so the District dropdown can refresh its options.
  const [state, setState] = useState('')
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
    const email = (fd.get('email') || '').toString().trim()
    const phone = `${fd.get('code') || ''} ${fd.get('phone') || ''}`.trim()
    const company = (fd.get('company') || '').toString().trim()
    const teamSize = (fd.get('teamsize') || '').toString()
    const stateVal = (fd.get('state') || '').toString()
    const districtVal = (fd.get('district') || '').toString()

    const payload = {
      Name: name,
      Email: email,
      Phone: phone,
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
      phone,
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
                  <input ref={firstRef} name="name" type="text" required placeholder="Priya Sharma" />
                </label>
                <label className={styles.field}>
                  <span>Work email</span>
                  <input name="email" type="email" required placeholder="you@company.com" />
                </label>
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
                  {sending ? 'Sending...' : 'Start free trial'}
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
