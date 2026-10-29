'use client'

import { useEffect, useRef, useState } from 'react'
import Eyebrow from '@/components/ui/Eyebrow/Eyebrow'
import Button from '@/components/ui/Button/Button'
import Reveal from '@/components/ui/Reveal/Reveal'
import { whatsapp } from '@/data/content'
import { sampleChat } from '@/data/chatbot'
import styles from './WhatsApp.module.css'

export default function WhatsApp() {
  const phoneRef = useRef(null)
  const chatRef = useRef(null)
  const [count, setCount] = useState(0)
  const [typing, setTyping] = useState(false)

  // play the conversation when the phone scrolls into view
  useEffect(() => {
    const el = phoneRef.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setCount(sampleChat.length)
      return
    }

    const timers = []
    let started = false
    const run = () => {
      let i = 0
      const step = () => {
        if (i >= sampleChat.length) return
        const m = sampleChat[i]
        if (m.from === 'bot') {
          setTyping(true)
          timers.push(
            setTimeout(() => {
              setTyping(false)
              setCount(i + 1)
              i++
              timers.push(setTimeout(step, 520))
            }, 900)
          )
        } else {
          setCount(i + 1)
          i++
          timers.push(setTimeout(step, 680))
        }
      }
      step()
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true
          timers.push(setTimeout(run, 400))
          io.disconnect()
        }
      },
      { threshold: 0.45 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      timers.forEach(clearTimeout)
    }
  }, [])

  // keep the newest message in view
  useEffect(() => {
    const c = chatRef.current
    if (c) c.scrollTo({ top: c.scrollHeight, behavior: 'smooth' })
  }, [count, typing])

  return (
    <section className={styles.section} id="whatsapp">
      <div className={`container ${styles.inner}`}>
        <div className={styles.phoneWrap} ref={phoneRef}>
          <span className={styles.deviceTag} aria-hidden="true">
            LIVE DEMO · WHATSAPP
          </span>
          <div className={styles.phone}>
            <div className={styles.statusBar} aria-hidden="true">
              <span className={styles.statusTime}>9:41</span>
              <span className={styles.statusIcons}>
                <span className={styles.signal} />
                <span className={styles.battery} />
              </span>
            </div>
            <div className={styles.waHead}>
              <span className={styles.waBack} aria-hidden="true">‹</span>
              <span className={styles.waAvatar} aria-hidden="true">N</span>
              <span className={styles.waMeta}>
                <span className={styles.waName}>NNC Assistant</span>
                <span className={styles.waStatus}>
                  <span className={styles.waDot} aria-hidden="true" />
                  {typing ? 'typing…' : 'online'}
                </span>
              </span>
            </div>

            <div className={styles.chat} ref={chatRef}>
              {sampleChat.slice(0, count).map((m, i) => (
                <div
                  key={i}
                  className={`${styles.bubble} ${
                    m.from === 'bot' ? styles.bot : styles.user
                  }`}
                >
                  {m.text}
                  <span className={styles.bubbleTime} aria-hidden="true">
                    {m.from === 'bot' ? '9:41' : '9:41 ✓✓'}
                  </span>
                </div>
              ))}

              {typing && (
                <div className={`${styles.bubble} ${styles.bot} ${styles.typing}`}>
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                </div>
              )}
            </div>

            <div className={styles.inputBar} aria-hidden="true">
              <span className={styles.inputField}>Message</span>
              <span className={styles.sendBtn}>➤</span>
            </div>
          </div>
        </div>

        <Reveal stagger={0.09} className={styles.copy}>
          <span className={styles.index} aria-hidden="true">06</span>
          <Eyebrow>{whatsapp.eyebrow}</Eyebrow>
          <h2 className={`display-l ${styles.title}`}>{whatsapp.title}</h2>
          <p className={`lead ${styles.lead}`}>{whatsapp.lead}</p>
          <ol className={styles.steps}>
            {whatsapp.steps.map((s, i) => (
              <li className={styles.step} key={i}>
                <span className={styles.num} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={styles.stepText}>{s}</span>
              </li>
            ))}
          </ol>
          <div className={styles.cta}>
            <Button href={whatsapp.cta.href} variant={whatsapp.cta.variant}>
              {whatsapp.cta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
