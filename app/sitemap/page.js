import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
// FEATURES_OVERVIEW import removed: /features/ is disabled while the Product
// group is in transition to /products/ ('Our products'). Re-add this import
// (and its usages below) when the replacement page is wired up.
import { CATEGORIES, INDUSTRIES_OVERVIEW } from '@/data/pages'
import { travelPages } from '@/data/travelPages'
import styles from './sitemap.module.css'

export const metadata = {
  title: 'Site Map | NNC CRM',
  description: 'All pages on the NNC CRM website.',
}

const label = (cat, slug) => CATEGORIES[cat][slug].breadcrumb.at(-1).label
const links = (cat) => Object.keys(CATEGORIES[cat]).map((slug) => ({ href: `/${cat}/${slug}`, label: label(cat, slug) }))

// Travel CRM landing pages. Listed by keyword, which is both the page topic
// and the clearest label for a reader.
const travelLabel = (kw) =>
  kw.split(' ').map((w, i) => (w === 'crm' ? 'CRM' : i === 0 ? w[0].toUpperCase() + w.slice(1) : w)).join(' ')
const travelLinks = Object.entries(travelPages).map(([slug, p]) => ({
  href: `/${slug}`,
  label: travelLabel(p.keyword),
}))

const GROUPS = [
  // Features overview and sub-pages are disabled while the Product group is
  // in transition to /products/ ('Our products'). The Pricing link stays.
  // Original: items: [{ href: '/features', label: 'Features overview' }, ...links('features'), { href: '/pricing', label: 'Pricing' }]
  { title: 'Product', items: [{ href: '/pricing', label: 'Pricing' }] },
  { title: 'Industries', items: [{ href: '/industries', label: 'Industries overview' }, ...links('industries'), { href: '/multi-center-training-institutes-crm', label: 'Training institutes & coaching CRM' }] },
  { title: 'Travel CRM', items: travelLinks },
  { title: 'Company', items: links('company') },
  { title: 'Support', items: links('support') },
  { title: 'Legal', items: links('legal') },
]

export default function SiteMapPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Site Map' }]} />
        <h1 className={styles.title}>Site Map</h1>
        <p className={styles.lead}>Every page on the NNC CRM website, in one place.</p>

        <div className={styles.grid}>
          {GROUPS.map((g) => (
            <nav key={g.title} className={styles.col} aria-label={g.title}>
              <h2 className={styles.colTitle}>{g.title}</h2>
              {g.items.map((it) => (
                <a key={it.href} href={it.href} className={styles.link}>
                  {it.label}
                </a>
              ))}
            </nav>
          ))}
        </div>
      </div>
    </main>
  )
}
