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

      if (reduce) {
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
        scrollTrigger: { trigger: ref.current, start },
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
