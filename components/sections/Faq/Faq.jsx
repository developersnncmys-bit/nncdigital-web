'use client'

import { useRef, useState, useId } from 'react'
import Eyebrow from '@/components/ui/Eyebrow/Eyebrow'
import Button from '@/components/ui/Button/Button'
import { faq } from '@/data/content'
import styles from './Faq.module.css'

function Item({ item, index, open, onToggle }) {
  const panelRef = useRef(null)
  const base = useId()
  const btnId = `${base}-b`
  const panelId = `${base}-p`
  const num = String(index + 1).padStart(2, '0')

  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <button
        id={btnId}
        className={styles.q}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => onToggle(index)}
      >
        <span className={styles.num}>{num}</span>
        <span className={styles.qText}>{item.q}</span>
        <span className={styles.toggle} aria-hidden="true">
          <span className={styles.toggleBar} />
          <span className={`${styles.toggleBar} ${styles.toggleBarV}`} />
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={styles.panel}
        ref={panelRef}
        style={{ maxHeight: open ? `${panelRef.current?.scrollHeight ?? 400}px` : 0 }}
      >
        <p className={styles.a}>{item.a}</p>
      </div>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)
  const toggle = (i) => setOpenIndex((cur) => (cur === i ? -1 : i))

  return (
    <section className={`container ${styles.section}`} id="faq">
      <div className={styles.inner}>
        <aside className={styles.aside}>
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <h2 className={`display-l ${styles.title}`}>{faq.title}</h2>
          <p className={styles.lead}>
            Everything you need to know about NNC CRM. Can&apos;t find your
            answer? Start a free trial and ask us anything.
          </p>
          <div className={styles.cta}>
            <Button href="#start" variant="primary">
              Start free trial
            </Button>
          </div>
        </aside>

        <div className={styles.list}>
          {faq.items.map((item, i) => (
            <Item
              key={i}
              item={item}
              index={i}
              open={openIndex === i}
              onToggle={toggle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
