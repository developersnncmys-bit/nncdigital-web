'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/layout/Navbar/Navbar'
import Footer from '@/components/layout/Footer/Footer'
import TrialModal from '@/components/trial/TrialModal'
import HelpBot from '@/components/chat/HelpBot'
import TravelChatBot from '@/components/travel/TravelChatBot'
import { faq } from '@/data/content'
import { SITE_URL } from '@/lib/site'
import { travelPageSlugs } from '@/data/travelPages'
import { contact } from '@/data/contact'

// The Travel CRM keyword pages now use the site's own header and footer, so
// they are no longer "bare". What still sets them apart is their structured
// data: each emits its own SoftwareApplication and FAQPage, so the site-wide
// graph must not be added on top or every page would declare two of each.
const OWN_JSONLD_ROUTES = travelPageSlugs.map((slug) => `/${slug}`)

const DESC =
  'A modular CRM with sales pipeline, enquiries, forecasting, invoicing and WhatsApp in one platform. Build your own plan. Pay quarterly, half yearly or yearly.'

const org = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#org`,
  name: 'Nakshatra Namaha Creations',
  alternateName: 'NNC Digital',
  url: SITE_URL,
  email: contact.email,
  telephone: contact.phone,
  areaServed: 'IN',
  description:
    'Nakshatra Namaha Creations builds NNC CRM, the decision making CRM for every industry.',
}

const softwareApplication = {
  '@type': 'SoftwareApplication',
  name: 'NNC CRM',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: DESC,
  publisher: { '@id': `${SITE_URL}/#org` },
  offers: {
    '@type': 'Offer',
    price: '14999',
    priceCurrency: 'INR',
    description: 'Plans by team size, billed quarterly, half yearly or yearly. GST extra.',
  },
}

const faqPage = {
  '@type': 'FAQPage',
  mainEntity: faq.items.map((it) => ({
    '@type': 'Question',
    name: it.q,
    acceptedAnswer: { '@type': 'Answer', text: it.a },
  })),
}

export default function SiteChrome({ children }) {
  const pathname = usePathname() || '/'
  const ownJsonLd = OWN_JSONLD_ROUTES.some(
    (r) => pathname === r || pathname.startsWith(`${r}/`)
  )

  // FAQPage is only valid where the questions are actually visible, which is
  // the home page. Emitting it site-wide made /legal/privacy claim FAQs it does
  // not show — a structured-data guideline violation.
  const isHome = pathname === '/'
  const graph = isHome ? [org, softwareApplication, faqPage] : [org, softwareApplication]

  return (
    <>
      <span className="grain" aria-hidden="true" />
      <Navbar />
      {children}

      <Footer />

      {/* The WhatsApp chat: a sticky launcher in the bottom-right corner that
          opens the conversation in place, on every page of the site. It also
          supports an `inline` variant that renders the same conversation as a
          band above the footer — kept because it is tested and may be wanted
          again, but the sticky widget is what ships. */}
      <TravelChatBot />

      {/* The travel pages run their own demo flow plus the chat above, so the
          trial modal and help bot would be a third and fourth way to start the
          same conversation there. HelpBot's own WhatsApp shortcut is off
          everywhere: the chat launcher now owns that entry point. */}
      {!ownJsonLd && <TrialModal />}
      {!ownJsonLd && <HelpBot showWhatsApp={false} />}

      {!ownJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
          }}
        />
      )}
    </>
  )
}
