// City-level JSON-LD for a /service-areas/<city> page.
//
// The global LocalBusiness graph (LocalSeo) already declares the business and its
// areaServed. This adds page-scoped nodes so each city page has its own machine-
// readable entity: a Service node per offering tied to that City, plus an optional
// FAQPage. Keep this in sync with the copy on the page — schema that claims things
// the page does not say is a spam signal, not a ranking signal.
import { brand, services } from '@/lib/brand';

function absUrl(pathname) {
  const base = brand.url.replace(/\/$/, '');
  if (!pathname || pathname === '/') return `${base}/`;
  const clean = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${clean.endsWith('/') ? clean : `${clean}/`}`;
}

export default function CitySchema({ city, faq = null }) {
  const cityPath = `/service-areas/${city.slug}`;
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
      '@id': `${absUrl(cityPath)}#webpage`,
      url: absUrl(cityPath),
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
      url: absUrl(`/services/${s.slug}`),
    })),
  ];

  if (faq && faq.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${absUrl(cityPath)}#faq`,
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
