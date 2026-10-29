'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import s from './TravelLanding.module.css'
import { Fragment } from 'react'
import { FlightCta } from './TravelArt'
import { UnderlineCtaFlex } from './TravelArtFlex'
import { PhoneOnDark, MessageCircleOnDark, MailOnDark, GlobeOnDark } from './TravelIcons'
import { contactDetails, pricing, teamSizes } from '@/data/travel'
import { contact } from '@/data/contact'

// Same destinations as components/contact/ContactForm: the enquiry is saved
// into the NNC CRM and FormSubmit is the backup so a lead is never lost.
// Where enquiries are DELIVERED. Separate from the address shown to
// visitors: FormSubmit needs a one-time confirmation per recipient, so
// changing this silently drops leads until that is done.
const ENQUIRY_EMAIL = contact.enquiryEmail
// What visitors are told to write to.
const PUBLIC_EMAIL = contact.email
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${ENQUIRY_EMAIL}`
const CRM_ENDPOINT = 'https://newadminpanelbackendrender26.onrender.com/api/website-enquiry'

export default function TravelCta({ page }) {
  const router = useRouter()
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    if (sending) return
    const fd = new FormData(e.currentTarget)
    if (fd.get('_honey')) return

    const name = (fd.get('name') || '').toString().trim()
    const company = (fd.get('company') || '').toString().trim()
    const phone = (fd.get('phone') || '').toString().trim()
    const teamSize = (fd.get('teamsize') || '').toString()
    const destinations = (fd.get('destinations') || '').toString().trim()

    if (!name || !phone) {
      setError('Please enter your name and phone number.')
      return
    }

    const requirements = [
      'Travel CRM demo request.',
      teamSize ? `Team size: ${teamSize}` : '',
      destinations ? `Destinations sold: ${destinations}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    const crmPayload = {
      name,
      phone,
      email: '',
      company,
      requirements,
      service: 'Travel CRM',
      site: 'nncdigital',
      landingPage: typeof window !== 'undefined' ? window.location.pathname : '/travel-crm/',
    }

    const emailPayload = {
      Name: name,
      Company: company,
      Phone: phone,
      'Team size': teamSize,
      'Destinations you sell': destinations,
      _subject: `New Travel CRM demo request from ${name || 'website'}`,
      _template: 'table',
      _captcha: 'false',
    }

    setSending(true)
    setError('')
    try {
      const crmRes = await fetch(CRM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(crmPayload),
      })

      if (crmRes.ok) {
        // Backup email goes out, but success does not wait on it.
        fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(emailPayload),
        }).catch(() => {})
        router.push('/thank-you/')
        return
      }

      // CRM unreachable → email only, so the lead still lands somewhere.
      const mailRes = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(emailPayload),
      })
      if (!mailRes.ok) throw new Error('both failed')
      router.push('/thank-you/')
    } catch {
      setError(
        `We could not send that automatically. Please email ${PUBLIC_EMAIL} or call ${contactDetails.call}.`
      )
    } finally {
      setSending(false)
    }
  }

  return (
    <section className={s.cta} id="demo">
      <div className={s.deco}>
        <img src="/travel-crm/doodles/dark-contours.svg" alt="" width={700} height={700} loading="lazy" decoding="async" />
      </div>

      <div className={`${s.wrap} ${s.grid}`}>
        <div style={{ position: 'relative' }}>
          <span className={s.kicker}>BOOK A DEMO</span>
          <h2>
            {page.cta.lines.map((line) => (
              <Fragment key={line}>
                {line}
                <br />
              </Fragment>
            ))}
            <span className={s.u}>
              {page.cta.underline}
              <span className={s.dot}>.</span>
              <span className={`${s.deco} ${s.stretch}`}>
                <UnderlineCtaFlex />
              </span>
            </span>
          </h2>
          <p className={s.lead}>
            Book a live demo for your team. We will show the full flow, from a new enquiry to a paid,
            vouchered booking.
          </p>

          <a className={s.contact} href={contactDetails.callHref}>
            <span className={s.badge}>
              <PhoneOnDark />
            </span>
            <span>
              <small>CALL US</small>
              <b className={s.ph}>{contactDetails.call}</b>
            </span>
          </a>
          <a
            className={s.contact}
            href={contactDetails.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={s.badge}>
              <MessageCircleOnDark />
            </span>
            <span>
              <small>WHATSAPP</small>
              <b className={s.ph}>{contactDetails.whatsapp}</b>
            </span>
          </a>
          <a className={s.contact} href={`mailto:${contactDetails.email}`}>
            <span className={s.badge}>
              <MailOnDark />
            </span>
            <span>
              <small>EMAIL</small>
              <b>{contactDetails.email}</b>
            </span>
          </a>
          <a
            className={s.contact}
            href={contactDetails.websiteHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={s.badge}>
              <GlobeOnDark />
            </span>
            <span>
              <small>WEBSITE</small>
              <b>{contactDetails.website}</b>
            </span>
          </a>

          <div className={`${s.deco} ${s.flightdeco}`}>
            <FlightCta />
          </div>
        </div>

        <form className={s.form} onSubmit={onSubmit}>
          <span className={`${s.hand} ${s.talk}`} aria-hidden="true">
            let&rsquo;s talk!
          </span>
          <h3>Request your demo</h3>
          <p>Tell us a little about your team.</p>

          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
          />

          <label>
            Full name
            <input name="name" type="text" required placeholder="Your name" autoComplete="name" />
          </label>
          <label>
            Company name
            <input
              name="company"
              type="text"
              required
              placeholder="Your travel company"
              autoComplete="organization"
            />
          </label>
          <label>
            Phone or WhatsApp
            <input
              name="phone"
              type="tel"
              required
              placeholder="+91"
              pattern="(\+91)?[ ]?[6-9][0-9 ]{9,11}"
              autoComplete="tel"
            />
          </label>
          <label>
            Team size
            <select name="teamsize" required defaultValue="">
              <option value="">Select team size</option>
              {teamSizes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
          <label>
            Destinations you sell
            <input name="destinations" type="text" placeholder="For example: Kerala, Goa, Bali" />
          </label>

          <button type="submit" className={`${s.btn} ${s.btnPrimary}`} disabled={sending}>
            {sending ? 'Sending...' : 'Book my demo'}
          </button>

          {error && <div className={s.err}>{error}</div>}

          <small>
            {pricing.perUser} per user per month | minimum 10 users | + 18% GST
          </small>
        </form>
      </div>
    </section>
  )
}
