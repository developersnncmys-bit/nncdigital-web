import { Kalam } from 'next/font/google'
import s from './TravelLanding.module.css'
import TravelHero from './TravelHero'
import TravelDecisions from './TravelDecisions'
import TravelInside from './TravelInside'
import TravelFeatures from './TravelFeatures'
import TravelHow from './TravelHow'
import TravelPricing from './TravelPricing'
import TravelBuiltFor from './TravelBuiltFor'
import TravelFaq from './TravelFaq'
import TravelCta from './TravelCta'
import TravelMobileBar from './TravelMobileBar'
import { faqItems as baseFaq, pricing, contactDetails } from '@/data/travel'
import { travelPages } from '@/data/travelPages'
import { SITE_URL } from '@/lib/site'

// Kalam is kept for the handwritten notes; the body face now comes from the
// site's own Figtree, loaded in app/layout.js, so the landing pages and
// nncdigital.co.in are set in the same type.
const kalam = Kalam({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-kalam',
})

// Every keyword page shares this shell; only the content object differs.
export function buildMetadata(slug) {
  const page = travelPages[slug]
  const url = `${SITE_URL}/${slug}/`
  const image = {
    url: `${SITE_URL}/og/${slug}.png`,
    width: 1200,
    height: 630,
    alt: page.metaTitle,
  }
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: url },
    // The site-wide default is noindex while the main site is pre-launch; the
    // Travel CRM landing pages opt back in. Kept in step with app/robots.js,
    // public/_headers and app/sitemap.js through lib/site.
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: 'website',
      locale: 'en_IN',
      siteName: 'NNC Travel CRM',
      url,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
      images: [image.url],
    },
  }
}

function jsonLd(page, slug) {
  const faq = page.faq || baseFaq
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'NNC Travel CRM',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: `${SITE_URL}/${slug}/`,
        description: page.metaDescription,
        offers: {
          '@type': 'Offer',
          price: '590',
          priceCurrency: 'INR',
          description:
            'Rs. 590 per user per month, minimum 10 users, plus 18% GST. ' + pricing.starting,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Nakshatra Namaha Creations',
          telephone: contactDetails.call,
          email: contactDetails.email,
          url: contactDetails.websiteHref,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((it) => ({
          '@type': 'Question',
          name: it.q,
          acceptedAnswer: { '@type': 'Answer', text: it.a },
        })),
      },
    ],
  }
}

export default function TravelKeywordPage({ slug }) {
  const page = travelPages[slug]

  return (
    <div className={`${s.page} ${kalam.variable}`}>
      <main id="top">
        <TravelHero page={page} />
        <TravelDecisions page={page} />
        <TravelInside page={page} />
        <TravelFeatures page={page} />
        <TravelHow />
        <TravelPricing />
        <TravelBuiltFor page={page} />
        <TravelFaq page={page} />
        <TravelCta page={page} />
      </main>
      <TravelMobileBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(page, slug)) }}
      />
    </div>
  )
}
