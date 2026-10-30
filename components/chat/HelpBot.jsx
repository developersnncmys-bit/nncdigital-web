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

// Standalone greeting only — "hi, what's the price?" should route to pricing,
// not the generic greeting response.
const GREET_RE = /^(hi+|hey+|hello+|helo|heya|namaste|hola|good (morning|afternoon|evening))[\s!.?,]*$/
const THANKS_RE = /\b(thanks|thank you|thank u|thankyou|thx|ty)\b/
const HUMAN_RE = /\b(human|agent|representative|real person|talk to (a|someone|you)|speak to)\b/

// What the voice flow speaks when a chat session opens. Kept short so there's
// no awkward delay before the user can start talking.
const VOICE_GREETING = "Hi there! I'm the NNC assistant. How can I help you today?"

// Rewrites things that TTS reads badly (digit-by-digit numbers, Rs/₹ as
// letters, slashes read as "slash") into natural spoken phrases. Called once
// before each utterance so the message log keeps the clean written form.
const prepareForSpeech = (text) =>
  text
    .replace(/₹\s?/g, 'rupees ')
    .replace(/\bRs\.?\s?/gi, 'rupees ')
    // Phone numbers: any run of digits + separators that totals 10+ digits
    // becomes spaced digits so TTS says "nine four two..." instead of
    // "ninety-four thousand...". Runs BEFORE comma-stripping so numbers like
    // "+91 94227 99466" and "94227-99466" are both caught.
    .replace(/(?:\+?\d[\d\s\-]{8,}\d)/g, (match) => {
      const digits = match.replace(/\D/g, '')
      return digits.length >= 10 ? digits.split('').join(' ') : match
    })
    .replace(/(\d),(?=\d)/g, '$1') // 14,999 → 14999 so engines read it as "fourteen thousand..."
    .replace(/\/\s?year\b/gi, ' per year')
    .replace(/\/\s?mo(nth)?\b/gi, ' per month')
    .replace(/\/\s?qtr\b/gi, ' per quarter')
    .replace(/\bGST\b/g, 'G S T')
    .replace(/\bCRM\b/g, 'C R M')
    .replace(/\bAI\b/g, 'A I')
    .replace(/\bAPI\b/g, 'A P I')
    .replace(/\(/g, ', ')
    .replace(/\)/g, '')
    .replace(/\s+/g, ' ')
    .trim()

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

// The mic that opens voice chat. An audio-equalizer icon — four vertical
// bars that scale Y out of phase — so the button visibly reads as "voice /
// mic". Preferred over a static mic silhouette because the moving bars tell
// users at a glance that this is a listening/speaking control.
const AiMic = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <rect className={`${styles.waveBar} ${styles.waveBar1}`} x="3.5" y="8" width="2.5" height="8" rx="1.25" />
    <rect className={`${styles.waveBar} ${styles.waveBar2}`} x="8.25" y="5" width="2.5" height="14" rx="1.25" />
    <rect className={`${styles.waveBar} ${styles.waveBar3}`} x="13" y="7" width="2.5" height="10" rx="1.25" />
    <rect className={`${styles.waveBar} ${styles.waveBar4}`} x="17.75" y="9.5" width="2.5" height="5" rx="1.25" />
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
  // Closed by default now — the FAB is the entry point and it opens straight
  // into the expanded centred modal (no more compact pill in between).
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ from: 'bot', text: GREETING }])
  const [suggestions, setSuggestions] = useState(STARTERS)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [listening, setListening] = useState(false)
  const [speaking, setSpeaking] = useState(false)
  const [micSupported, setMicSupported] = useState(false)
  // Compact-first: panel opens showing only the orb + Speak button + greeting.
  // Expands on toggle, or automatically when the first question is asked.
  const [expanded, setExpanded] = useState(false)
  // ChatGPT-style continuous conversation. When true, after each TTS reply we
  // automatically reopen the mic, so the user can just talk back and forth
  // without pressing anything.
  const [conversing, setConversing] = useState(false)
  // Intro phase of a voice chat: bot is greeting + listening but no actual
  // user turn has landed yet. The big centered orb lives here; the mini bar
  // takes over once the user asks their first question.
  const [voiceIntro, setVoiceIntro] = useState(false)
  const bodyRef = useRef(null)
  const inputRef = useRef(null)
  const timerRef = useRef(null)
  const recognitionRef = useRef(null)
  const panelRef = useRef(null)
  // Set when the current question came in through the mic, so only voice turns
  // get spoken replies. Typed questions stay silent, as users expect.
  const voiceReplyRef = useRef(false)
  // Mirrors state into refs so callbacks created inside long-lived listeners
  // (SpeechSynthesisUtterance.onend, SpeechRecognition.onend) read the current
  // value instead of a stale closure.
  const conversingRef = useRef(false)
  const speakingRef = useRef(false)
  const typingRef = useRef(false)
  const listeningRef = useRef(false)

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [messages, typing, open, expanded])

  // The chat trigger lives in the Navbar now ([data-chat-open]). We listen on
  // the document so any element with that attribute opens the modal — matches
  // the same pattern TrialModal uses for `[data-trial]` links.
  useEffect(() => {
    const onClick = (e) => {
      const t = e.target.closest('[data-chat-open]')
      if (!t) return
      e.preventDefault()
      setOpen(true)
      setExpanded(true)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  // Previously reset to compact on open; now the FAB opens straight into the
  // expanded modal, so we don't force-collapse here.

  useEffect(() => {
    if (open && expanded) inputRef.current?.focus()
  }, [open, expanded])

  useEffect(() => { conversingRef.current = conversing }, [conversing])
  useEffect(() => { speakingRef.current = speaking }, [speaking])
  useEffect(() => { typingRef.current = typing }, [typing])
  useEffect(() => { listeningRef.current = listening }, [listening])

  // Scroll trap. Listener is at document level with capture:true so we see the
  // wheel/touchmove *before* anything else — including the browser's own
  // page-scroll handler. If the event is inside the panel, we preventDefault
  // and move the inner scroller ourselves. If it's outside, we leave it alone
  // and the page scrolls normally.
  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    if (!panel) return
    const findScroller = (target) => {
      let el = target
      while (el && el !== panel && el.nodeType === 1) {
        const style = getComputedStyle(el)
        if (/auto|scroll/.test(style.overflowY) && el.scrollHeight > el.clientHeight) return el
        el = el.parentElement
      }
      return null
    }
    const onWheel = (e) => {
      if (!panel.contains(e.target)) return
      e.preventDefault()
      const scroller = findScroller(e.target)
      if (scroller) scroller.scrollTop += e.deltaY
    }
    let touchY = 0
    const onTouchStart = (e) => {
      if (!panel.contains(e.target)) return
      touchY = e.touches[0]?.clientY || 0
    }
    const onTouchMove = (e) => {
      if (!panel.contains(e.target)) return
      e.preventDefault()
      const y = e.touches[0]?.clientY || 0
      const deltaY = touchY - y
      touchY = y
      const scroller = findScroller(e.target)
      if (scroller) scroller.scrollTop += deltaY
    }
    // Belt: capture-phase wheel/touch trap (above).
    // Braces: lock the html's overflow while the pointer is over the panel.
    // Chrome's scroll-chain prevention through preventDefault isn't reliable,
    // but overflow:hidden on html absolutely stops the viewport from moving.
    // We restore it as soon as the pointer leaves so the page is scrollable
    // again outside the chat.
    const html = document.documentElement
    const prevOverflow = html.style.overflow
    const lock = () => { html.style.overflow = 'hidden' }
    const unlock = () => { html.style.overflow = prevOverflow }
    const onEnter = (e) => { if (panel.contains(e.target)) lock() }
    const onLeave = (e) => {
      // relatedTarget is where the pointer went; if it's not inside the panel
      // (or null, as happens when the pointer leaves the window), unlock.
      if (!e.relatedTarget || !panel.contains(e.relatedTarget)) unlock()
    }
    document.addEventListener('wheel', onWheel, { passive: false, capture: true })
    document.addEventListener('touchstart', onTouchStart, { passive: true, capture: true })
    document.addEventListener('touchmove', onTouchMove, { passive: false, capture: true })
    panel.addEventListener('pointerenter', onEnter)
    panel.addEventListener('pointerleave', onLeave)
    return () => {
      document.removeEventListener('wheel', onWheel, { capture: true })
      document.removeEventListener('touchstart', onTouchStart, { capture: true })
      document.removeEventListener('touchmove', onTouchMove, { capture: true })
      panel.removeEventListener('pointerenter', onEnter)
      panel.removeEventListener('pointerleave', onLeave)
      html.style.overflow = prevOverflow
    }
  }, [open])

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
    conversingRef.current = false
    setConversing(false)
    try { recognitionRef.current?.stop?.() } catch {}
    if (typeof window !== 'undefined') {
      try { window.speechSynthesis?.cancel?.() } catch {}
    }
    setListening(false)
    setSpeaking(false)
  }, [open])

  const startListen = useCallback(() => {
    const rec = recognitionRef.current
    if (!rec || !conversingRef.current || listeningRef.current) return
    try {
      rec.start()
      setListening(true)
    } catch {
      // start() throws if recognition is already active; swallow it.
    }
  }, [])

  // In continuous conversation mode, we try to reopen the mic whenever the
  // assistant isn't busy. Anything that mutates speaking/typing/listening ends
  // by calling tick() in a microtask, so the cycle self-sustains.
  const tick = useCallback(() => {
    if (!conversingRef.current) return
    if (speakingRef.current || typingRef.current || listeningRef.current) return
    startListen()
  }, [startListen])

  const speak = useCallback((text) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    const synth = window.speechSynthesis
    synth.cancel()
    const u = new SpeechSynthesisUtterance(prepareForSpeech(text))
    u.lang = 'en-IN'
    // Slightly slower + a touch higher pitch reads as a polite assistant rather
    // than a stock robot voice.
    u.rate = 0.95
    u.pitch = 1.1
    const voices = synth.getVoices()
    const voice =
      voices.find((v) => /neerja|aditi|heera|raveena/i.test(v.name)) ||
      voices.find((v) => /female|zira|samantha|google.*(en.?gb|en.?in)/i.test(v.name)) ||
      voices.find((v) => v.lang === 'en-IN') ||
      voices.find((v) => v.lang === 'en-GB') ||
      voices.find((v) => v.lang?.startsWith('en'))
    if (voice) u.voice = voice
    u.onstart = () => { speakingRef.current = true; setSpeaking(true) }
    const finish = () => {
      speakingRef.current = false
      setSpeaking(false)
      // Short beat after TTS stops before the mic reopens, so the mic doesn't
      // pick up the tail of the synthesiser. 150ms is barely perceptible but
      // enough to avoid the engine hearing itself.
      setTimeout(tick, 150)
    }
    u.onend = finish
    u.onerror = finish
    synth.speak(u)
  }, [tick])

  const ask = useCallback((text) => {
    const q = text.trim()
    if (!q) return
    setExpanded(true)
    // Any user turn exits the intro state and reveals the message history.
    setVoiceIntro(false)
    setMessages((m) => [...m, { from: 'user', text: q }])
    setSuggestions([])
    typingRef.current = true
    setTyping(true)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      const r = reply(q)
      typingRef.current = false
      setTyping(false)
      setMessages((m) => [...m, { from: 'bot', text: r.text, link: r.link }])
      setSuggestions(r.suggestions || [])
      if (voiceReplyRef.current) {
        voiceReplyRef.current = false
        speak(r.text)
      } else {
        // Typed input in conversing mode still triggers the auto-listen cycle.
        setTimeout(tick, 150)
      }
    }, 550)
  }, [speak, tick])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SR) return
    setMicSupported(true)
    const rec = new SR()
    rec.lang = 'en-IN'
    // Continuous + interim lets the user pause mid-sentence without the engine
    // deciding they're done at the first half-second of silence. We decide
    // when the turn ends ourselves, below.
    rec.continuous = true
    rec.interimResults = true
    rec.maxAlternatives = 1

    // The turn ends after this long of silence (no new audio recognised).
    // 1.3s is the sweet spot — snappy enough that the back-and-forth doesn't
    // feel laggy, long enough that normal mid-sentence breaths don't cut
    // the user off.
    const END_OF_TURN_MS = 1300
    // Absolute cap if the user never says anything after the mic opens, so
    // the recognition doesn't idle forever. Generous because thinking pauses
    // between turns are common.
    const INITIAL_SILENCE_MS = 20000
    let accumulated = ''
    let interim = ''
    let turnTimer = null
    const clearTurnTimer = () => { if (turnTimer) { clearTimeout(turnTimer); turnTimer = null } }
    const submitTurn = () => {
      clearTurnTimer()
      // Chrome sometimes closes the turn before it marks the last utterance
      // final. Falling back to the latest interim ensures the user's words
      // don't get swallowed by that race.
      const text = (accumulated + ' ' + interim).replace(/\s+/g, ' ').trim()
      accumulated = ''
      interim = ''
      try { rec.stop() } catch {}
      if (text) {
        voiceReplyRef.current = true
        ask(text)
      }
    }
    rec.onstart = () => {
      accumulated = ''
      interim = ''
      clearTurnTimer()
      turnTimer = setTimeout(() => { try { rec.stop() } catch {} }, INITIAL_SILENCE_MS)
    }
    rec.onresult = (e) => {
      let newInterim = ''
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i]
        if (r.isFinal) accumulated += r[0].transcript + ' '
        else newInterim += r[0].transcript + ' '
      }
      interim = newInterim
      // Any speech activity (interim or final) resets the end-of-turn timer.
      clearTurnTimer()
      turnTimer = setTimeout(submitTurn, END_OF_TURN_MS)
    }
    rec.onerror = () => {
      clearTurnTimer()
      accumulated = ''
      listeningRef.current = false
      setListening(false)
    }
    rec.onend = () => {
      clearTurnTimer()
      listeningRef.current = false
      setListening(false)
      // In conversing mode, if nothing else is in flight the mic should pop
      // back on quickly. 100ms is enough for Chrome's recognizer teardown.
      setTimeout(tick, 100)
    }
    recognitionRef.current = rec
    return () => {
      clearTurnTimer()
      try { rec.abort() } catch {}
    }
  }, [ask, tick])

  const startConversation = () => {
    if (!recognitionRef.current) return
    if (typeof window !== 'undefined') {
      try { window.speechSynthesis?.cancel?.() } catch {}
    }
    speakingRef.current = false
    setSpeaking(false)
    conversingRef.current = true
    setConversing(true)
    setVoiceIntro(true)
    // Speak a polite greeting at the top of the session. speak()'s onend calls
    // tick(), which opens the mic — so no explicit startListen() here.
    speak(VOICE_GREETING)
  }

  const stopConversation = () => {
    conversingRef.current = false
    setConversing(false)
    setVoiceIntro(false)
    try { recognitionRef.current?.stop?.() } catch {}
    if (typeof window !== 'undefined') {
      try { window.speechSynthesis?.cancel?.() } catch {}
    }
    listeningRef.current = false
    speakingRef.current = false
    setListening(false)
    setSpeaking(false)
  }

  // Mic button in the input row — a single-turn ask (not a continuous
  // conversation). Pressing again while listening cancels the attempt.
  const toggleMic = () => {
    const rec = recognitionRef.current
    if (!rec) return
    if (listening) {
      try { rec.stop() } catch {}
      listeningRef.current = false
      setListening(false)
      return
    }
    if (typeof window !== 'undefined') {
      try { window.speechSynthesis?.cancel?.() } catch {}
    }
    speakingRef.current = false
    setSpeaking(false)
    try {
      rec.start()
      listeningRef.current = true
      setListening(true)
    } catch {
      listeningRef.current = false
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

      {/* Floating FAB moved to the Navbar. Any element with [data-chat-open]
          opens the modal via the document-level click listener above. Keeping
          the old markup commented so we can drop it back in if needed.
      <button
        type="button"
        className={`${styles.fab} ${open ? styles.fabOpen : ''}`}
        onClick={() => {
          if (open) { setOpen(false) }
          else { setOpen(true); setExpanded(true) }
        }}
        aria-label={open ? 'Close NNC assistant' : 'Open NNC assistant'}
        aria-expanded={open}
      >
        <span className={styles.fabBadge} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 1 L13.6 10.4 L23 12 L13.6 13.6 L12 23 L10.4 13.6 L1 12 L10.4 10.4 Z" />
          </svg>
        </span>
        <svg className={styles.fabClose} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
      */}

      {/* Dim overlay behind the expanded (centred) modal so the panel stands out
          from the page. Not rendered in compact mode — the pill shouldn't need
          one. Clicking it collapses back to the compact pill. */}
      <div
        className={`${styles.backdrop} ${open && expanded ? styles.backdropOn : ''}`}
        aria-hidden="true"
        onClick={() => setExpanded(false)}
      />

      <div
        ref={panelRef}
        className={`${styles.panel} ${open ? styles.panelOpen : ''} ${expanded ? styles.panelExpanded : styles.panelCompact}`}
        role="dialog"
        aria-label="NNC help chat"
        aria-hidden={!open}
        // Lenis (components/providers/SmoothScroll.jsx) runs a site-wide
        // smooth-scroll that intercepts wheel events and animates the page
        // itself, bypassing standard preventDefault. This attribute tells it
        // to skip wheel events inside the panel so the inner body scrolls
        // natively and the page behind stays put.
        data-lenis-prevent
      >
        <header className={styles.head}>
          <div className={styles.headText}>
            <span className={styles.headName}>NNC assistant</span>
            <span className={styles.headRole}>AI Agent</span>
          </div>
          {/* Expand/collapse toggle hidden while the compact UI is disabled —
              there's nothing meaningful to collapse to. Uncomment together
              with the compact blocks below if the two-step launch comes back.
          <button
            type="button"
            className={styles.headIcon}
            onClick={() => setExpanded((v) => !v)}
            aria-label={expanded ? 'Collapse chat' : 'Expand chat'}
            aria-pressed={expanded}
          >
            {expanded ? <Collapse /> : <Expand />}
          </button>
          */}
          <button type="button" className={styles.headIcon} onClick={() => setOpen(false)} aria-label="Close chat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        </header>

        {/* Big orb intro — shown while voice chat is starting up (greeting +
            waiting for the first user turn). Replaces the message body while
            active; once the user asks something, voiceIntro flips to false
            and the regular body + mini-orb-bar layout returns below. */}
        {voiceIntro && (
          <div className={styles.orbStage}>
            <div
              className={`${styles.orb} ${listening ? styles.orbListening : ''} ${speaking ? styles.orbSpeaking : ''}`}
              aria-hidden="true"
            >
              <span className={styles.orbSheen} />
              <span className={`${styles.orbBand} ${styles.orbBandA}`} />
              <span className={`${styles.orbBand} ${styles.orbBandB}`} />
              <span className={`${styles.orbBand} ${styles.orbBandC}`} />
              <span className={styles.orbHighlight} />
            </div>
            <p className={styles.orbStatus} aria-live="polite">
              {listening ? 'Listening…' : speaking ? 'Speaking…' : 'Say something'}
            </p>
            <button type="button" className={styles.orbEnd} onClick={stopConversation} aria-label="End voice conversation">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2" /></svg>
              <span>End</span>
            </button>
          </div>
        )}

        {/* Compact intro greeting — kept commented out; the modal opens
            expanded straight away now.
        {!expanded && (
          <div className={styles.compactIntro}>
            <p className={styles.compactGreeting}>{GREETING}</p>
          </div>
        )}
        */}

        {expanded && !voiceIntro && (
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

        {/* Mini orb bar — shown once the first user turn has landed. During
            the greeting/intro phase the big centred orb above is used instead. */}
        {conversing && expanded && !voiceIntro && (
          <div className={`${styles.miniOrbRow} ${listening ? styles.miniListening : ''} ${speaking ? styles.miniSpeaking : ''}`}>
            <div
              className={`${styles.orb} ${styles.orbMini} ${listening ? styles.orbListening : ''} ${speaking ? styles.orbSpeaking : ''}`}
              aria-hidden="true"
            >
              <span className={styles.orbSheen} />
              <span className={`${styles.orbBand} ${styles.orbBandA}`} />
              <span className={`${styles.orbBand} ${styles.orbBandB}`} />
              <span className={`${styles.orbBand} ${styles.orbBandC}`} />
              <span className={styles.orbHighlight} />
            </div>
            <span className={styles.miniStatus} aria-live="polite">
              {listening ? 'Listening…' : speaking ? 'Speaking…' : 'Say something'}
            </span>
            <button type="button" className={styles.miniEnd} onClick={stopConversation} aria-label="End voice conversation">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2" /></svg>
            </button>
          </div>
        )}

        <form className={styles.inputRow} onSubmit={onSubmit}>
          {micSupported && (
            <button
              type="button"
              className={`${styles.aiMicBtn} ${conversing ? styles.aiMicBtnOn : ''}`}
              onClick={conversing ? stopConversation : startConversation}
              aria-label={conversing ? 'End voice conversation' : 'Start voice conversation'}
              aria-pressed={conversing}
              title={conversing ? 'End voice chat' : 'Start voice chat'}
            >
              {conversing ? (
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2" /></svg>
              ) : (
                <AiMic />
              )}
            </button>
          )}
          <input
            ref={inputRef}
            className={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={conversing ? 'Voice chat active' : 'Ask NNC a question'}
            aria-label="Type your question"
            disabled={conversing}
          />
          <button type="submit" className={styles.inlineBtn} aria-label="Send" disabled={!input.trim() || conversing}>
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
