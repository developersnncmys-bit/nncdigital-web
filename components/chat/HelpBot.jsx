'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { KB, STARTERS, GREETING, CONTACT } from '@/data/helpbot'
import styles from './HelpBot.module.css'

const norm = (s) =>
  s.toLowerCase().replace(/[^a-z0-9₹\s]/g, ' ').replace(/\s+/g, ' ').trim()

const STOP = new Set([
  'the', 'a', 'an', 'is', 'are', 'do', 'does', 'did', 'i', 'my', 'me', 'we', 'you', 'your',
  'to', 'of', 'for', 'and', 'or', 'it', 'its', 'can', 'could', 'how', 'what', 'which', 'this',
  'that', 'with', 'on', 'in', 'at', 'as', 'be', 'have', 'has', 'will', 'if', 'about', 'please',
  'need', 'want', 'tell', 'show', 'give', 'there', 'any',
])

const GREET_RE = /^(hi|hii+|hey+|hello|helo|heya|namaste|hola|good (morning|afternoon|evening))\b/
const THANKS_RE = /\b(thanks|thank you|thank u|thankyou|thx|ty)\b/
const HUMAN_RE = /\b(human|agent|representative|real person|talk to (a|someone|you)|speak to)\b/

function findEntry(text) {
  const t = norm(text)
  if (!t) return null
  const tokens = new Set(t.split(' ').filter((w) => w && !STOP.has(w)))
  let best = null
  let bestScore = 0
  for (const e of KB) {
    let score = 0
    for (const intent of e.intents) {
      const ni = norm(intent)
      if (!ni) continue
      if (t.includes(ni)) {
        score += 4 + ni.split(' ').length // intent phrase appears in the question
      } else if (t.length >= 4 && ni.includes(t)) {
        score += 3 + t.split(' ').length // the question appears inside an intent
      } else {
        const words = ni.split(' ').filter((w) => !STOP.has(w))
        const overlap = words.filter((w) => tokens.has(w)).length
        score += overlap && overlap === words.length ? overlap * 2 : overlap
      }
    }
    norm(e.question)
      .split(' ')
      .forEach((w) => {
        if (w.length > 3 && !STOP.has(w) && tokens.has(w)) score += 0.5
      })
    if (score > bestScore) {
      bestScore = score
      best = e
    }
  }
  return bestScore >= 3 ? best : null
}

function suggestionsFor(entry) {
  if (entry) {
    const related = KB.filter((e) => e.topic === entry.topic && e.id !== entry.id)
      .slice(0, 3)
      .map((e) => e.question)
    if (related.length) return related
  }
  return STARTERS.slice(0, 4)
}

function reply(text) {
  const t = norm(text)
  if (HUMAN_RE.test(t)) {
    return {
      text: `Of course. You can reach our team on ${CONTACT.phone} (${CONTACT.hours}) or email ${CONTACT.email}.`,
      link: { label: 'Contact support', href: '/support/contact' },
      suggestions: STARTERS.slice(0, 4),
    }
  }
  if (GREET_RE.test(t)) {
    return {
      text: 'Hello! How can I help? You can ask about pricing, features, the free trial, or pick a question below.',
      suggestions: STARTERS.slice(0, 4),
    }
  }
  if (THANKS_RE.test(t)) {
    return {
      text: "You're welcome! Is there anything else I can help you with?",
      suggestions: STARTERS.slice(0, 4),
    }
  }
  const entry = findEntry(text)
  if (entry) {
    return { text: entry.answer, link: entry.link, suggestions: suggestionsFor(entry) }
  }
  return {
    text: `I'm not fully sure about that one. You can browse the Help center, or reach our team on ${CONTACT.phone} or ${CONTACT.email}.`,
    link: { label: 'Help center', href: '/support/help-center' },
    suggestions: STARTERS.slice(0, 4),
  }
}

const Send = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const Mic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="3" width="6" height="12" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0" />
    <path d="M12 18v3" />
  </svg>
)

const Expand = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 3h6v6M14 10l7-7M9 21H3v-6M10 14l-7 7" />
  </svg>
)

const Collapse = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7" />
  </svg>
)

// Built-in illustrated avatar used when no /public/assistant.{mp4,jpg} is
// supplied. Flat-illustration style, aligns at the bottom of the stage so the
// Speak-with-NNC button sits over the shoulders rather than the face.
const AssistantSvg = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 380 240"
    preserveAspectRatio="xMidYMax slice"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="asst-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#c3dcff" />
        <stop offset="1" stopColor="#e6effc" />
      </linearGradient>
      <linearGradient id="asst-skin" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#f3c8aa" />
        <stop offset="1" stopColor="#e5b394" />
      </linearGradient>
      <linearGradient id="asst-shirt" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#1a2a4a" />
        <stop offset="1" stopColor="#0a1836" />
      </linearGradient>
    </defs>

    <rect width="380" height="240" fill="url(#asst-bg)" />

    <g transform="translate(190,0)">
      {/* shoulders / blazer */}
      <path d="M-130 240 Q-80 170 -40 170 L40 170 Q80 170 130 240 Z" fill="url(#asst-shirt)" />
      {/* white shirt + collar */}
      <path d="M-24 170 L0 202 L24 170 L22 240 L-22 240 Z" fill="#fff" />
      <path d="M-24 170 L-40 182 L-38 240 L-22 240 Z" fill="#111f3d" />
      <path d="M24 170 L40 182 L38 240 L22 240 Z" fill="#111f3d" />

      {/* neck */}
      <path d="M-14 150 L-14 180 Q0 192 14 180 L14 150 Z" fill="url(#asst-skin)" />
      <path d="M-14 170 Q0 178 14 170" stroke="#d19278" strokeWidth="1" fill="none" opacity="0.5" />

      {/* hair back layer */}
      <path d="M-55 150 Q-62 70 0 50 Q62 70 55 150 Q50 175 36 180 L-36 180 Q-50 175 -55 150 Z" fill="#3a2614" />

      {/* face */}
      <ellipse cx="0" cy="110" rx="44" ry="54" fill="url(#asst-skin)" />

      {/* bangs */}
      <path d="M-44 92 Q-46 48 0 42 Q46 48 44 92 Q34 74 18 82 Q10 72 0 72 Q-10 72 -18 82 Q-34 74 -44 92 Z" fill="#3a2614" />

      {/* side hair strands */}
      <path d="M-45 100 Q-55 135 -45 165 Q-52 145 -48 115 Z" fill="#2e1c0f" />
      <path d="M45 100 Q55 135 45 165 Q52 145 48 115 Z" fill="#2e1c0f" />

      {/* eyebrows */}
      <path d="M-27 103 Q-18 98 -9 103" stroke="#3a2614" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M9 103 Q18 98 27 103" stroke="#3a2614" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* eyes */}
      <ellipse cx="-17" cy="116" rx="3.6" ry="4.6" fill="#1a2a4a" />
      <ellipse cx="17" cy="116" rx="3.6" ry="4.6" fill="#1a2a4a" />
      <circle cx="-15.5" cy="114" r="1.1" fill="#fff" />
      <circle cx="18.5" cy="114" r="1.1" fill="#fff" />

      {/* nose */}
      <path d="M-2 126 Q-2 137 -6 141 Q0 144 6 141" stroke="#d19278" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* smile */}
      <path d="M-14 148 Q0 158 14 148" stroke="#a94740" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M-11 149 Q0 154 11 149 Z" fill="#d78983" opacity="0.65" />

      {/* blush */}
      <ellipse cx="-30" cy="132" rx="7" ry="4" fill="#f0988c" opacity="0.3" />
      <ellipse cx="30" cy="132" rx="7" ry="4" fill="#f0988c" opacity="0.3" />

      {/* earrings */}
      <circle cx="-45" cy="128" r="2" fill="#d4af37" />
      <circle cx="45" cy="128" r="2" fill="#d4af37" />
    </g>
  </svg>
)

// Floating WhatsApp shortcut, stacked directly above the chat launcher.
const WA_NUMBER = '919164566466'
const WA_TEXT = 'Hi NNC, I would like to know more about NNC CRM.'
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`

const WhatsAppMark = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.17-1.35a9.93 9.93 0 0 0 4.87 1.25h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2zm0 1.87c2.16 0 4.19.84 5.72 2.37a8.03 8.03 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.1 8.09a8.06 8.06 0 0 1-4.11-1.13l-.3-.17-3.07.8.82-2.99-.19-.31a8.03 8.03 0 0 1-1.24-4.29c0-4.46 3.63-8.09 8.1-8.09zm-4.6 4.06c-.22 0-.57.08-.86.4-.3.32-1.13 1.1-1.13 2.69s1.16 3.12 1.32 3.33c.16.22 2.25 3.44 5.46 4.69 2.66 1.05 3.2.84 3.78.79.58-.05 1.87-.76 2.13-1.5.26-.74.26-1.38.19-1.5-.08-.13-.3-.21-.61-.37-.32-.16-1.87-.92-2.16-1.03-.29-.11-.5-.16-.71.16-.21.32-.81 1.03-1 1.24-.18.21-.37.24-.68.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.19-.31-.02-.48.14-.64.14-.14.32-.37.47-.56.16-.18.21-.31.32-.53.1-.21.05-.4-.03-.56-.08-.16-.7-1.76-.99-2.4-.25-.57-.5-.56-.71-.57h-.62z" />
  </svg>
)

// showWhatsApp: the site-wide lead chat now owns the WhatsApp entry point, so
// this shortcut is suppressed where that chat is present to avoid stacking
// three floating buttons in the same corner.
export default function HelpBot({ showWhatsApp = true }) {
  const [open, setOpen] = useState(true)
  const [messages, setMessages] = useState([{ from: 'bot', text: GREETING }])
  const [suggestions, setSuggestions] = useState(STARTERS)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [listening, setListening] = useState(false)
  const [speaking, setSpeaking] = useState(false)
  const [micSupported, setMicSupported] = useState(false)
  // Compact-first: panel opens showing only the avatar + Speak button + greeting.
  // Expands on toggle, or automatically when the first question is asked.
  const [expanded, setExpanded] = useState(false)
  // Start with the built-in SVG avatar; upgrade to a real video or image only
  // if the file actually exists under /public. A `<video>`/`<img>` with a 404
  // src silently stalls in some browsers instead of firing onError, so a HEAD
  // check up front is the reliable way to pick the right source.
  const [avatarVideoOk, setAvatarVideoOk] = useState(false)
  const [avatarImageOk, setAvatarImageOk] = useState(false)
  const bodyRef = useRef(null)
  const inputRef = useRef(null)
  const timerRef = useRef(null)
  const recognitionRef = useRef(null)
  // Set when the current question came in through the mic, so only voice turns
  // get spoken replies. Typed questions stay silent, as users expect.
  const voiceReplyRef = useRef(false)

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [messages, typing, open])

  useEffect(() => {
    if (open) setExpanded(false)
  }, [open])

  useEffect(() => {
    if (open && expanded) inputRef.current?.focus()
  }, [open, expanded])

  useEffect(() => () => {
    clearTimeout(timerRef.current)
    try { recognitionRef.current?.abort?.() } catch {}
    if (typeof window !== 'undefined') {
      try { window.speechSynthesis?.cancel?.() } catch {}
    }
  }, [])

  // Stop mic and TTS when the panel closes so nothing talks to an empty room.
  useEffect(() => {
    if (open) return
    try { recognitionRef.current?.stop?.() } catch {}
    if (typeof window !== 'undefined') {
      try { window.speechSynthesis?.cancel?.() } catch {}
    }
    setListening(false)
    setSpeaking(false)
  }, [open])

  const speak = useCallback((text) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    const synth = window.speechSynthesis
    synth.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'en-IN'
    u.rate = 1
    u.pitch = 1.05
    const voices = synth.getVoices()
    const voice =
      voices.find((v) => /female|zira|aditi|samantha|neerja/i.test(v.name)) ||
      voices.find((v) => v.lang === 'en-IN') ||
      voices.find((v) => v.lang?.startsWith('en'))
    if (voice) u.voice = voice
    u.onstart = () => setSpeaking(true)
    u.onend = () => setSpeaking(false)
    u.onerror = () => setSpeaking(false)
    synth.speak(u)
  }, [])

  const ask = useCallback((text) => {
    const q = text.trim()
    if (!q) return
    setExpanded(true)
    setMessages((m) => [...m, { from: 'user', text: q }])
    setSuggestions([])
    setTyping(true)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      const r = reply(q)
      setTyping(false)
      setMessages((m) => [...m, { from: 'bot', text: r.text, link: r.link }])
      setSuggestions(r.suggestions || [])
      if (voiceReplyRef.current) {
        voiceReplyRef.current = false
        speak(r.text)
      }
    }, 550)
  }, [speak])

  useEffect(() => {
    if (typeof window === 'undefined') return
    let cancelled = false
    const check = (url) =>
      fetch(url, { method: 'HEAD' })
        .then((r) => r.ok && !/text\/html/i.test(r.headers.get('content-type') || ''))
        .catch(() => false)
    check('/assistant.mp4').then((ok) => { if (!cancelled && ok) setAvatarVideoOk(true) })
    check('/assistant.jpg').then((ok) => { if (!cancelled && ok) setAvatarImageOk(true) })
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SR) return
    setMicSupported(true)
    const rec = new SR()
    rec.lang = 'en-IN'
    rec.interimResults = false
    rec.maxAlternatives = 1
    rec.onresult = (e) => {
      const transcript = e.results?.[0]?.[0]?.transcript || ''
      setListening(false)
      if (transcript) {
        voiceReplyRef.current = true
        ask(transcript)
      }
    }
    rec.onerror = () => setListening(false)
    rec.onend = () => setListening(false)
    recognitionRef.current = rec
    return () => {
      try { rec.abort() } catch {}
    }
  }, [ask])

  const toggleMic = () => {
    const rec = recognitionRef.current
    if (!rec) return
    if (listening) {
      try { rec.stop() } catch {}
      setListening(false)
      return
    }
    if (typeof window !== 'undefined') {
      try { window.speechSynthesis?.cancel?.() } catch {}
    }
    setSpeaking(false)
    try {
      rec.start()
      setListening(true)
    } catch {
      setListening(false)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    voiceReplyRef.current = false
    ask(input)
    setInput('')
  }

  return (
    <>
      {showWhatsApp && (
      <a
        className={`${styles.wa} ${open ? styles.waHidden : ''}`}
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with NNC on WhatsApp"
        aria-hidden={open}
        tabIndex={open ? -1 : 0}
      >
        <WhatsAppMark />
        <span className={styles.waTip}>Chat on WhatsApp</span>
      </a>
      )}

      <button
        type="button"
        className={`${styles.fab} ${open ? styles.fabOpen : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close help chat' : 'Open help chat'}
        aria-expanded={open}
      >
        <svg className={styles.fabChat} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
        </svg>
        <svg className={styles.fabClose} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      <div
        className={`${styles.panel} ${open ? styles.panelOpen : ''} ${expanded ? styles.panelExpanded : styles.panelCompact}`}
        role="dialog"
        aria-label="NNC help chat"
        aria-hidden={!open}
      >
        <header className={styles.head}>
          <div className={styles.headText}>
            <span className={styles.headName}>NNC assistant</span>
            <span className={styles.headRole}>AI Agent</span>
          </div>
          <button
            type="button"
            className={styles.headIcon}
            onClick={() => setExpanded((v) => !v)}
            aria-label={expanded ? 'Collapse chat' : 'Expand chat'}
            aria-pressed={expanded}
          >
            {expanded ? <Collapse /> : <Expand />}
          </button>
          <button type="button" className={styles.headIcon} onClick={() => setOpen(false)} aria-label="Close chat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        </header>

        {/* Avatar stage. Drops in /public/assistant.mp4 (idle loop) if present,
            falls back to /public/assistant.jpg, then to the NNC mark. The
            "Speak" button overlays the bottom and triggers the mic. */}
        <div className={`${styles.avatarStage} ${speaking ? styles.avatarStageSpeaking : ''} ${listening ? styles.avatarStageListening : ''}`}>
          {avatarVideoOk ? (
            <video
              className={styles.avatarMedia}
              src="/assistant.mp4"
              autoPlay
              muted
              loop
              playsInline
              onError={() => setAvatarVideoOk(false)}
            />
          ) : avatarImageOk ? (
            <img
              className={styles.avatarMedia}
              src="/assistant.jpg"
              alt=""
              aria-hidden="true"
              onError={() => setAvatarImageOk(false)}
            />
          ) : (
            <AssistantSvg className={styles.avatarMedia} />
          )}
          {micSupported && (
            <button
              type="button"
              className={`${styles.speakBtn} ${listening ? styles.speakBtnOn : ''}`}
              onClick={toggleMic}
              aria-label={listening ? 'Stop listening' : 'Speak with NNC'}
              aria-pressed={listening}
            >
              <Mic />
              <span>{listening ? 'Listening…' : 'Speak with NNC'}</span>
            </button>
          )}
        </div>

        {!expanded && (
          <div className={styles.compactIntro}>
            <p className={styles.compactGreeting}>{GREETING}</p>
          </div>
        )}

        {expanded && (
        <div className={styles.body} ref={bodyRef}>
          {messages.map((m, i) => (
            <div key={i} className={`${styles.row} ${m.from === 'user' ? styles.rowUser : ''}`}>
              <div className={`${styles.bubble} ${m.from === 'user' ? styles.bubbleUser : styles.bubbleBot}`}>
                {m.text}
                {m.link && (
                  <a
                    className={styles.bubbleLink}
                    href={m.link.href}
                    {...(m.link.href === '#start' ? { 'data-trial': '' } : {})}
                  >
                    {m.link.label}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </a>
                )}
              </div>
            </div>
          ))}

          {typing && (
            <div className={styles.row}>
              <div className={`${styles.bubble} ${styles.bubbleBot} ${styles.typing}`}>
                <span /><span /><span />
              </div>
            </div>
          )}

          {!typing && suggestions.length > 0 && (
            <div className={styles.chips}>
              {suggestions.map((s) => (
                <button key={s} type="button" className={styles.chip} onClick={() => ask(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        )}

        <form className={styles.inputRow} onSubmit={onSubmit}>
          {micSupported && (
            <button
              type="button"
              className={`${styles.inlineBtn} ${listening ? styles.inlineBtnOn : ''}`}
              onClick={toggleMic}
              aria-label={listening ? 'Stop listening' : 'Speak'}
              aria-pressed={listening}
            >
              <Mic />
            </button>
          )}
          <input
            ref={inputRef}
            className={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={listening ? 'Listening…' : 'Ask NNC a question'}
            aria-label="Type your question"
          />
          <button type="submit" className={styles.inlineBtn} aria-label="Send" disabled={!input.trim()}>
            <Send />
          </button>
        </form>

        <p className={styles.disclaimer}>
          NNC assistant is an AI and can make mistakes. This conversation may be recorded.
        </p>
      </div>
    </>
  )
}
