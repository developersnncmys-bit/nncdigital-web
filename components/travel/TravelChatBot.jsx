'use client'

import { useEffect, useRef, useState } from 'react'
import s from './TravelLanding.module.css'
import { contactDetails, teamSizes } from '@/data/travel'
import { contact } from '@/data/contact'

// A WhatsApp-style qualifying chat.
//
// On the fifth answer the summary is delivered to the team AUTOMATICALLY — the
// visitor taps nothing. Delivery uses the same destinations the demo form on
// this page already relies on (the NNC CRM, with FormSubmit as the email
// backup), both of which post straight from the browser and need no setup.
// The WhatsApp ping in netlify/functions/whatsapp-lead.mjs rides along on top
// once its credentials exist: only the WhatsApp Business API can send without
// a human pressing send, and its token must never reach the browser, so it has
// to run server-side. A wa.me link cannot do it — that only opens WhatsApp
// with text prefilled and still waits for a tap.
//
// The manual hand-off appears only if EVERY channel fails, so a lead is never
// lost. It is deliberately not tied to WhatsApp alone: that endpoint is a
// Netlify Function, which does not run under `next dev` and returns 501 until
// the credentials are set, and judging delivery by it alone made the chat
// report failure while the CRM post beside it had actually succeeded.

const WA_NUMBER = '919164566466'
// Where enquiries are DELIVERED. Separate from the address shown to
// visitors: FormSubmit needs a one-time confirmation per recipient, so
// changing this silently drops leads until that is done.
const ENQUIRY_EMAIL = contact.enquiryEmail
// What visitors are told to write to.
const PUBLIC_EMAIL = contact.email
const CRM_ENDPOINT = 'https://newadminpanelbackendrender26.onrender.com/api/website-enquiry'
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${ENQUIRY_EMAIL}`

const QUESTIONS = [
  { key: 'name', ask: 'Hi! I can set up your Travel CRM demo in a minute. What is your name?', type: 'text', placeholder: 'Your name', label: 'Name' },
  { key: 'company', ask: 'Nice to meet you. Which travel company are you with?', type: 'text', placeholder: 'Your travel company', label: 'Company' },
  { key: 'phone', ask: 'What is the best WhatsApp number to reach you on?', type: 'tel', placeholder: '+91', label: 'WhatsApp' },
  { key: 'team', ask: 'How many people are on your team?', type: 'chips', options: teamSizes, label: 'Team size' },
  { key: 'destinations', ask: 'Last one — which destinations do you sell most?', type: 'text', placeholder: 'For example: Andaman, Kerala', label: 'Destinations' },
]

const GREETING = 'Typically replies in a few minutes'

// `inline` renders the same conversation as an ordinary section in the page
// (used above the footer site-wide) instead of a floating bubble.
export default function TravelChatBot({ inline = false }) {
  const [open, setOpen] = useState(inline)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [draft, setDraft] = useState('')
  const [typing, setTyping] = useState(true)
  // idle | sending | sent | fallback
  const [delivery, setDelivery] = useState('idle')
  // Whether the visitor has answered anything yet. Gates autofocus for the
  // inline variant so mounting the page never steals focus or scroll.
  const [touched, setTouched] = useState(false)
  // The inline chat sits above the footer, thousands of pixels down. This
  // tracks whether it is on screen so the floating jump button can hide once
  // the visitor has actually reached it.
  const [chatVisible, setChatVisible] = useState(false)

  const threadRef = useRef(null)
  const inputRef = useRef(null)
  const panelRef = useRef(null)
  const sectionRef = useRef(null)

  const done = step >= QUESTIONS.length
  const current = QUESTIONS[step]

  // Bot "types" before each question so the exchange reads as a conversation
  // rather than a form that reveals itself a field at a time.
  useEffect(() => {
    if (!open || done) return
    setTyping(true)
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const t = setTimeout(() => setTyping(false), reduce ? 0 : 520)
    return () => clearTimeout(t)
  }, [open, step, done])

  // keep the newest message in view
  useEffect(() => {
    threadRef.current?.scrollTo({ top: threadRef.current.scrollHeight, behavior: 'smooth' })
  }, [step, typing, done])

  // Focusing an input scrolls it into view. The floating panel opens on a tap,
  // so focusing it is what the visitor asked for — but the inline version
  // mounts with the page, and focusing it there threw every visitor straight
  // past the whole page down to the chat above the footer. Inline only takes
  // focus once the visitor has actually answered something.
  useEffect(() => {
    if (typing || done) return
    if (inline && !touched) return
    inputRef.current?.focus()
  }, [typing, done, step, inline, touched])

  // Escape closes; on phones the panel is full screen, so lock the page behind
  // it. Lenis moves the page from JS and ignores overflow on <body> alone, so
  // <html> is locked too and the panel carries data-lenis-prevent.
  //
  // None of this applies to the inline variant: it is an ordinary section in
  // the page, so locking the scroll behind it would freeze the whole page.
  useEffect(() => {
    if (!open || inline) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    const phone = window.matchMedia('(max-width: 640px)').matches
    const html = document.documentElement
    const prevHtml = html.style.overflow
    const prevBody = document.body.style.overflow
    if (phone) {
      html.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      html.style.overflow = prevHtml
      document.body.style.overflow = prevBody
    }
  }, [open, inline])

  // Hide the jump button once the chat itself is in view.
  useEffect(() => {
    if (!inline) return
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setChatVisible(e.isIntersecting), {
      rootMargin: '-80px 0px -80px 0px',
    })
    io.observe(el)
    return () => io.disconnect()
  }, [inline])

  const jumpToChat = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    // Focus only after the scroll settles, or the browser fights the animation.
    setTouched(true)
    setTimeout(() => inputRef.current?.focus(), 700)
  }

  const summaryLines = () =>
    QUESTIONS.map((q) => `${q.label}: ${answers[q.key] || '-'}`).join('\n')

  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hi NNC, I would like a Travel CRM demo.\n\n${summaryLines()}\n\n(Sent from the website chat)`
  )}`

  // Delivers the lead with no action from the visitor. Success tracks whether
  // the lead actually reached the team, not whether one particular channel
  // answered.
  const deliver = async (final) => {
    setDelivery('sending')

    const requirements = [
      'Travel CRM demo request (website chat).',
      `Team size: ${final.team || '-'}`,
      `Destinations sold: ${final.destinations || '-'}`,
    ].join('\n')
    const page = typeof window !== 'undefined' ? window.location.pathname : '/travel-crm/'

    const post = async (url, body) => {
      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(body),
        })
        return res.ok
      } catch {
        return false
      }
    }

    const attempts = [
      post(CRM_ENDPOINT, {
        name: final.name || '',
        phone: final.phone || '',
        email: '',
        company: final.company || '',
        requirements,
        service: 'Travel CRM',
        site: 'nncdigital',
        landingPage: page,
      }),
      post(FORM_ENDPOINT, {
        Name: final.name || '',
        Company: final.company || '',
        Phone: final.phone || '',
        'Team size': final.team || '',
        'Destinations you sell': final.destinations || '',
        Page: page,
        _subject: `New Travel CRM chat lead from ${final.name || 'website'}`,
        _template: 'table',
        _captcha: 'false',
      }),
      // Best effort. Unavailable under `next dev` and until the Netlify
      // WhatsApp credentials exist, and never the reason the chat reports
      // failure — by then the lead has already landed by CRM or email.
      post('/api/whatsapp-lead', {
        name: final.name,
        company: final.company,
        phone: final.phone,
        team: final.team,
        destinations: final.destinations,
        page,
      }),
    ]

    // Settle on the first channel that lands rather than awaiting them all:
    // the CRM runs on a free instance that can cold-start for close to a
    // minute, and the visitor should not watch a spinner through it.
    const firstOk = new Promise((resolve) => {
      let left = attempts.length
      attempts.forEach((p) =>
        p.then((ok) => {
          if (ok) resolve(true)
          else if (--left === 0) resolve(false)
        })
      )
    })
    const timeout = new Promise((resolve) => setTimeout(() => resolve(false), 15000))

    setDelivery((await Promise.race([firstOk, timeout])) ? 'sent' : 'fallback')
  }

  const commit = (value) => {
    const v = (value ?? '').toString().trim()
    if (!v) return
    setTouched(true)
    const next = { ...answers, [current.key]: v }
    setAnswers(next)
    setDraft('')
    if (step + 1 >= QUESTIONS.length) deliver(next)
    setStep(step + 1)
  }

  const restart = () => {
    setAnswers({})
    setDraft('')
    setStep(0)
    setDelivery('idle')
    setTouched(false)
  }

  // messages rendered so far: each answered question becomes a bot + user pair
  const history = QUESTIONS.slice(0, step)

  const content = (
    <>
      {!inline && !open && (
        <button
          type="button"
          className={s.chatFab}
          onClick={() => setOpen(true)}
          aria-label="Chat with us on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.93 7.93 0 0 0 3.8.97h.01a7.94 7.94 0 0 0 5.59-13.55zM12.05 18.5a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.49.65.66-2.43-.16-.25a6.59 6.59 0 1 1 5.59 3.09zm3.62-4.94c-.2-.1-1.17-.58-1.35-.64s-.31-.1-.45.1-.51.64-.63.78-.23.15-.43.05a5.39 5.39 0 0 1-1.59-.98 6 6 0 0 1-1.1-1.37c-.11-.2 0-.3.09-.4s.2-.23.3-.35a1.3 1.3 0 0 0 .2-.34.37.37 0 0 0 0-.35c0-.1-.45-1.08-.62-1.48s-.33-.34-.45-.34h-.38a.74.74 0 0 0-.53.25 2.23 2.23 0 0 0-.7 1.66 3.86 3.86 0 0 0 .82 2.06 8.86 8.86 0 0 0 3.4 3c.47.2.84.33 1.13.42a2.73 2.73 0 0 0 1.25.08 2.04 2.04 0 0 0 1.34-.95 1.66 1.66 0 0 0 .12-.94c-.05-.09-.18-.14-.38-.24z" />
          </svg>
          <span className={s.chatFabPing} aria-hidden="true" />
        </button>
      )}

      {open && (
        <div
          className={inline ? `${s.chatPanel} ${s.chatInline}` : s.chatPanel}
          ref={panelRef}
          role={inline ? undefined : 'dialog'}
          aria-modal={inline ? undefined : 'false'}
          aria-label={inline ? undefined : 'Chat with NNC Travel CRM'}
          data-lenis-prevent={inline ? undefined : true}
        >
          <div className={s.chatHead}>
            <span className={s.chatAvatar} aria-hidden="true">
              <img src="/nnc-mark.png" alt="" width={512} height={512} />
            </span>
            <span className={s.chatWho}>
              <b>NNC Travel CRM</b>
              <small>{GREETING}</small>
            </span>
            {!inline && (
            <button type="button" className={s.chatClose} onClick={() => setOpen(false)} aria-label="Close chat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
            )}
          </div>

          <div className={s.chatThread} ref={threadRef}>
            <div className={s.chatDay}>Today</div>

            {history.map((q) => (
              <div key={q.key}>
                <p className={s.chatBot}>{q.ask}</p>
                <p className={s.chatMe}>{answers[q.key]}</p>
              </div>
            ))}

            <div aria-live="polite">
              {!done && typing && (
                <p className={`${s.chatBot} ${s.chatTyping}`} aria-label="Typing">
                  <i />
                  <i />
                  <i />
                </p>
              )}
              {!done && !typing && <p className={s.chatBot}>{current.ask}</p>}

              {done && (
                <>
                  <p className={s.chatBot}>
                    Thanks {answers.name ? answers.name.split(' ')[0] : ''}! Here is what I have:
                  </p>
                  <div className={s.chatCard}>
                    {QUESTIONS.map((q) => (
                      <div key={q.key}>
                        <small>{q.label}</small>
                        <b>{answers[q.key] || '-'}</b>
                      </div>
                    ))}
                  </div>
                  {delivery === 'sending' && (
                    <p className={`${s.chatBot} ${s.chatTyping}`} aria-label="Sending">
                      <i />
                      <i />
                      <i />
                    </p>
                  )}
                  {delivery === 'sent' && (
                    <p className={s.chatBot}>
                      Sent to our team on WhatsApp. Someone will message you on {answers.phone}{' '}
                      shortly.
                    </p>
                  )}
                  {delivery === 'fallback' && (
                    <p className={s.chatBot}>
                      I could not reach our team automatically just now. Tap below and WhatsApp will
                      open with your details ready to send.
                    </p>
                  )}
                </>
              )}
            </div>
          </div>

          <div className={s.chatFoot}>
            {!done && !typing && current.type === 'chips' && (
              <div className={s.chatChips}>
                {current.options.map((o) => (
                  <button type="button" key={o} onClick={() => commit(o)}>
                    {o}
                  </button>
                ))}
              </div>
            )}

            {!done && !typing && current.type !== 'chips' && (
              <form
                className={s.chatForm}
                onSubmit={(e) => {
                  e.preventDefault()
                  commit(draft)
                }}
              >
                <input
                  ref={inputRef}
                  type={current.type}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder={current.placeholder}
                  aria-label={current.label}
                  autoComplete={
                    current.key === 'name' ? 'name' : current.key === 'phone' ? 'tel' : current.key === 'company' ? 'organization' : 'off'
                  }
                />
                <button type="submit" aria-label="Send" disabled={!draft.trim()}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </form>
            )}

            {done && (
              <div className={s.chatDone}>
                {delivery === 'sending' && (
                  <p className={s.chatStatus} aria-live="polite">
                    Sending to our team…
                  </p>
                )}

                {delivery === 'sent' && (
                  <p className={`${s.chatStatus} ${s.chatOk}`} aria-live="polite">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Sent to our team
                  </p>
                )}

                {/* Only shown when the automatic send could not go through, so a
                    lead is never lost to a misconfigured or unreachable API. */}
                {delivery === 'fallback' && (
                  <>
                    <a className={s.chatSend} href={waHref} target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.93 7.93 0 0 0 3.8.97h.01a7.94 7.94 0 0 0 5.59-13.55zM12.05 18.5a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.49.65.66-2.43-.16-.25a6.59 6.59 0 1 1 5.59 3.09z" />
                      </svg>
                      Send on WhatsApp
                    </a>
                    <p className={s.chatNote}>
                      Or message {contactDetails.whatsapp} or email {PUBLIC_EMAIL}.
                    </p>
                  </>
                )}

                {delivery !== 'sending' && (
                  <button type="button" className={s.chatRestart} onClick={restart}>
                    Start over
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )

  if (!inline) return content

  // Inline: the same conversation presented as a section of the page, with a
  // heading so it reads as a real part of the document (and is crawlable)
  // rather than a widget bolted on.
  return (
    <>
      <section className={s.chatSection} ref={sectionRef} aria-labelledby="nnc-chat-title">
      <div className={s.wrap}>
        <span className={s.kicker}>TALK TO US</span>
        <h2 id="nnc-chat-title">
          Set up your demo in a minute<span className={s.dot}>.</span>
        </h2>
        <p className={s.chatSectionLead}>
          Five quick questions, and your details reach our team straight away.
        </p>
        {content}
        </div>
      </section>

      {/* Always-visible way in. It scrolls to the conversation above rather
          than opening a second copy, so there is only ever one thread. */}
      <button
        type="button"
        className={`${s.chatJump} ${chatVisible ? s.chatJumpHidden : ''}`}
        onClick={jumpToChat}
        aria-label="Chat with us about a demo"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.93 7.93 0 0 0 3.8.97h.01a7.94 7.94 0 0 0 5.59-13.55zM12.05 18.5a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.49.65.66-2.43-.16-.25a6.59 6.59 0 1 1 5.59 3.09z" />
        </svg>
        <span>Book a demo</span>
      </button>
    </>
  )
}
