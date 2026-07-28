import { brand, services } from '@/lib/brand';

// Google Business Profile link — update this to your real GBP URL.
// Find it in your Google Business dashboard or by searching the business name on Maps.
export const GBP_URL = 'https://g.page/iroofer-contractors';

// Drop in your real street address to unlock LocalBusiness + geo ranking signals.
// Dallas, GA has no street number confirmed — leave empty to omit PostalAddress.
export const STREET_ADDRESS = ''; // e.g. '152 Freedom Dr'

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
          postalCode: '30132',
          addressCountry: 'US',
        }
      : {
          '@type': 'PostalAddress',
          addressLocality: 'Dallas',
          addressRegion: 'GA',
          addressCountry: 'US',
        },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: brand.reviewCount,
      bestRating: '5',
    },
    review: (globalThis.__reviews || []).map((r) => ({
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

export default function LocalSeo({ reviews = [] }) {
  // expose reviews to buildSeoGraph without prop drilling into a module global
  globalThis.__reviews = reviews;
  const graph = buildSeoGraph();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
