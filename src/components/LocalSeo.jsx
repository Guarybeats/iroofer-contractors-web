import { brand, services } from '@/lib/brand';
import { reviews as SHARED_REVIEWS } from '@/lib/reviews';

// Google Business Profile link — real GBP Maps short link (provided by owner).
export const GBP_URL = 'https://maps.app.goo.gl/4N6Buw4pRivTJjMW6';

// Review link. The GBP is a maps.app.goo.gl short link; appending /review works
// for redirect short links and lands customers on the write-a-review flow.
// If Google ever changes this, replace with the "Get more reviews" link from
// the GBP dashboard.
export const REVIEW_URL = 'https://maps.app.goo.gl/4N6Buw4pRivTJjMW6';

// Drop in your real street address to unlock LocalBusiness + geo ranking signals.
// Dallas, GA has no street number confirmed — leave empty to omit PostalAddress.
export const STREET_ADDRESS = '152 Freedom Dr';

// Build the JSON-LD schema graph. Pure function so it can render in <head>.
export function buildSeoGraph() {
  const nowIso = new Date().toISOString();

  const localBusiness = {
    '@type': ['RoofingContractor', 'LocalBusiness'],
    '@id': `${brand.url}/#business`,
    name: brand.name,
    description: brand.pitch,
    url: brand.url,
    telephone: brand.phone,
    email: brand.email,
    priceRange: '$$',
    foundingDate: String(brand.founded),
    founder: { '@type': 'Person', name: brand.owner },
    image: `${brand.url}/assets/logo.png`,
    logo: `${brand.url}/assets/logo.png`,
    sameAs: [
      GBP_URL,
      'https://twitter.com/irooferc',
      'https://www.facebook.com/iroofercontractors',
      'https://www.instagram.com/iroofercontractors',
    ],
    areaServed: [
      ...brand.serviceArea.map((c) => ({
        '@type': 'City',
        name: c.replace(', GA', ''),
        address: { '@type': 'PostalAddress', addressRegion: 'GA', addressCountry: 'US' },
      })),
      { '@type': 'AdministrativeArea', name: 'Atlanta Metro' },
    ],
    address: STREET_ADDRESS
      ? {
          '@type': 'PostalAddress',
          streetAddress: STREET_ADDRESS,
          addressLocality: 'Dallas',
          addressRegion: 'GA',
          postalCode: '30157',
          addressCountry: 'US',
        }
      : {
          '@type': 'PostalAddress',
          addressLocality: 'Dallas',
          addressRegion: 'GA',
          addressCountry: 'US',
        },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.9218,
      longitude: -84.8424,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '19:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '17:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '00:00', closes: '00:00' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: brand.reviewCount,
      bestRating: '5',
    },
    review: (globalThis.__reviews || SHARED_REVIEWS).map((r) => ({
      '@type': 'Review',
      reviewBody: r.q.replace(/[“”]/g, ''),
      author: { '@type': 'Person', name: r.who },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      datePublished: nowIso,
    })),
  };

  const webSite = {
    '@type': 'WebSite',
    '@id': `${brand.url}/#website`,
    url: brand.url,
    name: brand.name,
    publisher: { '@type': 'Organization', name: brand.name },
  };

  const serviceGraph = services.map((s) => ({
    '@type': 'Service',
    name: s.title,
    serviceType: s.title,
    provider: { '@type': 'RoofingContractor', name: brand.name, '@id': `${brand.url}/#business` },
    areaServed: brand.serviceArea.map((c) => c.replace(', GA', '')),
    description: s.summary,
    url: `${brand.url}/services/${s.slug}`,
  }));

  return {
    '@context': 'https://schema.org',
    '@graph': [localBusiness, webSite, ...serviceGraph],
  };
}

export default function LocalSeo({ reviews = SHARED_REVIEWS, faq = null }) {
  // expose reviews to buildSeoGraph without prop drilling into a module global
  globalThis.__reviews = reviews;
  const graph = buildSeoGraph();

  // Optional FAQPage schema (rich-result eligible). Pass `faq` from a page that
  // renders an FAQ section so Google can surface the Q&A directly in search.
  const faqSchema = faq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
