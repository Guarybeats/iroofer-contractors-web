// City-level JSON-LD for a /service-areas/<city> page.
//
// The global LocalBusiness graph (LocalSeo) already declares the business and its
// areaServed. This adds page-scoped nodes so each city page has its own machine-
// readable entity: a Service node per offering tied to that City, plus an optional
// FAQPage. Keep this in sync with the copy on the page — schema that claims things
// the page does not say is a spam signal, not a ranking signal.
import { brand, services } from '@/lib/brand';

export default function CitySchema({ city, faq = null }) {
  const cityNode = {
    '@type': 'City',
    name: city.name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.state,
      addressCountry: 'US',
    },
    containedInPlace: { '@type': 'AdministrativeArea', name: city.county },
  };

  const graph = [
    {
      '@type': 'WebPage',
      '@id': `${brand.url}/service-areas/${city.slug}#webpage`,
      url: `${brand.url}/service-areas/${city.slug}`,
      name: `Roofing in ${city.name}, ${city.state}`,
      about: { '@id': `${brand.url}/#business` },
      isPartOf: { '@id': `${brand.url}/#website` },
    },
    ...services.map((s) => ({
      '@type': 'Service',
      name: `${s.title} in ${city.name}, ${city.state}`,
      serviceType: s.title,
      description: s.summary,
      provider: { '@id': `${brand.url}/#business` },
      areaServed: cityNode,
      url: `${brand.url}/services/${s.slug}`,
    })),
  ];

  if (faq && faq.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${brand.url}/service-areas/${city.slug}#faq`,
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
      }}
    />
  );
}
