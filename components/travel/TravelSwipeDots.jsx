'use client'

import { useEffect } from 'react'
import s from './TravelLanding.module.css'

// Rows that scroll horizontally on mobile. Their CSS-module class names are
// hashed at build time, so we have to import the style map to build the
// selector list — can't hard-code `.modGrid` etc.
const ROW_CLASSES = [s.modGrid, s.aroundGrid, s.aud, s.decisionList].filter(Boolean)
const ROW_SELECTOR = ROW_CLASSES.map((c) => '.' + c).join(', ')

// Only show dots at the breakpoint where the rows actually scroll horizontally.
const MOBILE_MQ = '(max-width: 900px)'

// Attaches a pill-dot indicator under each swipeable card row on the Travel
// Landing page. Zero-touch for the sections themselves — they don't need
// refs or props; this component finds the rows by querying the DOM for
// their CSS-module classes on mount.
export default function TravelSwipeDots() {
  useEffect(() => {
    if (typeof window === 'undefined' || !ROW_SELECTOR) return
    const mq = window.matchMedia(MOBILE_MQ)
    let mounted = []

    const attach = () => {
      detach()
      document.querySelectorAll(ROW_SELECTOR).forEach((row) => {
        const n = row.children.length
        if (n < 2) return

        const dots = document.createElement('div')
        dots.className = s.swipeDots
        dots.setAttribute('aria-hidden', 'true')
        const nodes = []
        for (let i = 0; i < n; i++) {
          const d = document.createElement('span')
          d.className = s.swipeDot
          dots.appendChild(d)
          nodes.push(d)
        }
        row.parentNode.insertBefore(dots, row.nextSibling)

        const update = () => {
          const first = row.children[0]
          if (!first) return
          const step = first.getBoundingClientRect().width + 14 // matches CSS gap
          const idx = Math.round(row.scrollLeft / step)
          const clamped = Math.min(Math.max(idx, 0), nodes.length - 1)
          for (let i = 0; i < nodes.length; i++) {
            nodes[i].className = i === clamped ? s.swipeDotOn : s.swipeDot
          }
        }
        update()
        row.addEventListener('scroll', update, { passive: true })
        mounted.push({ row, dots, update })
      })
    }

    const detach = () => {
      mounted.forEach(({ row, dots, update }) => {
        row.removeEventListener('scroll', update)
        dots.remove()
      })
      mounted = []
    }

    const sync = () => (mq.matches ? attach() : detach())
    // Give the page a tick so any late-mounting children settle first.
    const t = setTimeout(sync, 60)
    mq.addEventListener('change', sync)
    window.addEventListener('resize', () => mounted.forEach(({ update }) => update()))

    return () => {
      clearTimeout(t)
      mq.removeEventListener('change', sync)
      detach()
    }
  }, [])

  return null
}
