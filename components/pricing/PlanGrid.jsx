'use client'

import { useState } from 'react'
import { PLANS, BILLING_TERMS } from '@/lib/pricing'
import PlanColumn from './PlanColumn'
import styles from './PlanGrid.module.css'

export default function PlanGrid() {
  const [termKey, setTermKey] = useState('yearly')
  const term = BILLING_TERMS.find((t) => t.key === termKey)

  return (
    <div>
      <div className={styles.controls}>
        <div className={styles.segment} role="tablist" aria-label="Billing term">
          {BILLING_TERMS.map((t) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={t.key === termKey}
              className={`${styles.seg} ${t.key === termKey ? styles.segOn : ''}`}
              onClick={() => setTermKey(t.key)}
            >
              {t.label}
              {t.best && <span className={styles.best}>Best value</span>}
            </button>
          ))}
        </div>
        <span className={styles.currency}>Prices in INR, plus 18% GST</span>
      </div>

      <div className={styles.grid}>
        {PLANS.map((p) => (
          <PlanColumn key={p.id} plan={p} term={term} />
        ))}
      </div>
    </div>
  )
}
