'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

// Reports a visit to the team once it ends: which pages were seen, and how
// long the visitor actually spent on each.
//
// WHY THE SUMMARY IS SENT AT THE END, NOT ON ARRIVAL
// "How long did they stay" is only knowable when the visit is over, so a ping
// fired on arrival could never answer it. Sending one summary at the end also
// keeps the inbox usable: a notification per pageview on a site with any real
// traffic is unreadable within a day, and most of it would be crawlers.
//
// TIME IS MEASURED AS ACTIVE TIME
// The clock pauses whenever the tab is hidden, so a page left open in a
// background tab overnight reports the seconds it was actually looked at
// rather than eight hours. This is the same thing GA4 calls engagement time.
//
// DELIVERY
// The payload goes to netlify/functions/visit-report.mjs, which fans it out to
// email and WhatsApp. It is posted with keepalive so it survives the page being
// closed — a normal fetch is cancelled during unload, and sendBeacon cannot set
// the JSON content type the function expects.

const KEY = 'nnc_visit'

// Tunable without a code change. A visit is only worth an alert once someone
// has actually engaged; below this it is a bounce or a bot.
const MIN_ACTIVE_SECONDS = Number(process.env.NEXT_PUBLIC_VISIT_MIN_SECONDS || 20)
const MIN_PAGES = Number(process.env.NEXT_PUBLIC_VISIT_MIN_PAGES || 2)
// A visitor who backgrounds the tab and returns gets a follow-up only after
// this much further activity, so app-switching does not spam the inbox.
const RESEND_AFTER_SECONDS = Number(process.env.NEXT_PUBLIC_VISIT_RESEND_SECONDS || 45)

const ENDPOINT = '/api/visit-report'

const BOT = /bot|crawl|spider|slurp|bingpreview|headless|lighthouse|pagespeed|gtmetrix|preview|monitor/i

// Whether this document has already had its load time credited. Module scope,
// so it survives client-side route changes and resets on a real page load.
let docAnchored = false

const isBot = () => {
  if (typeof navigator === 'undefined') return true
  if (navigator.webdriver) return true
  return BOT.test(navigator.userAgent || '')
}

const load = () => {
  try {
    const raw = sessionStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

const save = (v) => {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(v))
  } catch {
    /* private mode — the visit simply is not carried across navigations */
  }
}

export default function VisitorTracker() {
  const pathname = usePathname()
  // Start of the current page's active stretch, in performance.now() terms.
  const markRef = useRef(0)
  const pathRef = useRef(pathname)

  useEffect(() => {
    if (isBot()) return

    const now = () => (typeof performance !== 'undefined' ? performance.now() : Date.now())

    const visit = load() || {
      id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
      startedAt: new Date().toISOString(),
      // Where they came from. Same-origin means an internal navigation, which
      // is not a traffic source worth reporting.
      referrer:
        typeof document !== 'undefined' &&
        document.referrer &&
        !document.referrer.startsWith(location.origin)
          ? document.referrer
          : '',
      landing: pathname,
      screen: typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : '',
      pages: [],
      reportedSeconds: 0,
    }

    // Open a record for this page, reusing the last one if a re-render lands us
    // on the same path.
    const last = visit.pages[visit.pages.length - 1]
    if (!last || last.path !== pathname) {
      visit.pages.push({ path: pathname, seconds: 0, title: document.title || '' })
    }
    save(visit)

    pathRef.current = pathname
    let counting = document.visibilityState === 'visible'
    // null means "not counting"; 0 is a legitimate mark, so this cannot be a
    // falsy check.
    markRef.current = counting ? now() : null

    // The tracker can only start counting once React has mounted it, so the
    // seconds a visitor spends waiting for the page would otherwise vanish —
    // on a slow connection that is a real part of the time they gave it, and
    // it measured over two seconds per page here. performance.now() runs from
    // navigation start, so at first mount it IS the load duration. Credited
    // once per document: React's development strict mode mounts every effect
    // twice, and the flag stops that counting the load twice.
    if (!docAnchored && counting) {
      docAnchored = true
      const loadSeconds = Math.min(now() / 1000, 60)
      const v0 = load()
      const rec0 = v0 && v0.pages[v0.pages.length - 1]
      if (rec0) {
        rec0.seconds = Math.round((rec0.seconds + loadSeconds) * 10) / 10
        save(v0)
      }
    }

    // Folds elapsed active time into the current page's record.
    const settle = () => {
      if (!counting || markRef.current === null) return
      const elapsed = (now() - markRef.current) / 1000
      markRef.current = now()
      if (elapsed <= 0) return
      const v = load()
      if (!v) return
      const rec = v.pages.find((p) => p.path === pathRef.current) || v.pages[v.pages.length - 1]
      if (rec) rec.seconds = Math.round((rec.seconds + elapsed) * 10) / 10
      save(v)
    }

    const totalSeconds = (v) => v.pages.reduce((n, p) => n + p.seconds, 0)

    const report = () => {
      settle()
      const v = load()
      if (!v) return

      const total = totalSeconds(v)
      const engaged = total >= MIN_ACTIVE_SECONDS || v.pages.length >= MIN_PAGES
      if (!engaged) return
      // Already reported, and not enough new activity to be worth a follow-up.
      if (v.reportedSeconds && total - v.reportedSeconds < RESEND_AFTER_SECONDS) return

      const payload = {
        id: v.id,
        startedAt: v.startedAt,
        endedAt: new Date().toISOString(),
        totalSeconds: Math.round(total),
        landing: v.landing,
        exit: pathRef.current,
        referrer: v.referrer,
        screen: v.screen,
        language: navigator.language || '',
        pages: v.pages.map((p) => ({
          path: p.path,
          title: p.title,
          seconds: Math.round(p.seconds),
        })),
        followUp: v.reportedSeconds > 0,
      }

      try {
        fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => {})
      } catch {
        /* nothing to do — analytics must never break the page */
      }

      v.reportedSeconds = total
      save(v)
    }

    const onVisibility = () => {
      if (document.visibilityState === 'hidden') {
        settle()
        counting = false
        report()
      } else {
        counting = true
        markRef.current = now()
      }
    }

    // pagehide is the reliable end-of-visit signal: unlike unload it fires on
    // mobile and works with the back/forward cache.
    const onPageHide = () => {
      settle()
      counting = false
      report()
    }

    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('pagehide', onPageHide)

    return () => {
      // Route change or unmount: bank the time spent on the page we are leaving.
      settle()
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pagehide', onPageHide)
    }
  }, [pathname])

  return null
}
