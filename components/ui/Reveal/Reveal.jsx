'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

export default function Reveal({
  as: Tag = 'div',
  y = 26,
  delay = 0,
  stagger = 0,
  start = 'top 87%',
  className,
  children,
  ...rest
}) {
  const ref = useRef(null)

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      // When staggering, animate direct children; otherwise animate the element.
      const targets =
        stagger > 0 ? Array.from(ref.current.children) : ref.current

      // Only hide elements that are still BELOW the fold on mount. If the
      // element is already in view OR the user has already scrolled past it
      // (fast scroll, deep-link, link preview), leave it visible — previously
      // these cases could end up stuck at opacity:0 because ScrollTrigger
      // waits for the element to re-enter from the bottom.
      const rect = ref.current.getBoundingClientRect()
      const belowFold = rect.top > window.innerHeight * 0.95

      if (reduce || !belowFold) {
        gsap.set(targets, { opacity: 1, y: 0 })
        return
      }

      gsap.set(targets, { opacity: 0, y })
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay,
        stagger,
        scrollTrigger: { trigger: ref.current, start, once: true },
      })
    },
    { scope: ref, dependencies: [] }
  )

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
