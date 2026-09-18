'use client';

import { brand, services } from '@/lib/brand';
import { usePathname } from 'next/navigation';

// Google Business Profile link — real GBP Maps short link (provided by owner).
// Verified to resolve to Iroofer Contractors (Dallas, GA).
export const GBP_URL = 'https://maps.app.goo.gl/oZg9a1cuNvUi3Ut99';

// Review/leave-a-review link. Google's writereview?placeid=<hex CID> endpoint
// returns a dead stub for legacy CIDs, so we point customers at the verified
// GBP Maps link — it opens the business profile with "Write a review" one tap.
export const REVIEW_URL = GBP_URL;

// Drop in your real street address to unlock LocalBusiness + geo ranking signals.
export const STREET_ADDRESS = '152 Freedom Dr';

const BBB_URL =
  'https://www.bbb.org/us/ga/dallas/profile/roofing-contractors/iroofer-contractors-0443-91832627';
const BIRDEYE_URL = 'https://reviews.birdeye.com/iroofer-contractors-175458550841887';

/** Absolute URL with trailing slash (live site + sitemap convention). */
function absUrl(pathname) {
  const base = brand.url.replace(/\/$/, '');
  if (!pathname || pathname === '/') return `${base}/`;
  const clean = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${clean.endsWith('/') ? clean : `${clean}/`}`;
}

/** Human breadcrumb label — never leave raw "Dallas Ga". */
function titleCaseSlug(slug) {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\bGa\b/g, 'GA');
}

function breadcrumbLabel(segment) {
  const known = {
    services: 'Services',
    'service-areas': 'Service Areas',
    blog: 'Blog',
    about: 'About',
    contact: 'Contact',
    estimator: 'Estimator',
    privacy: 'Privacy',
    terms: 'Terms',
    'dallas-ga': 'Dallas GA',
    'dallas-ga-roofing': 'Dallas GA Roofing',
    'roof-repair': 'Roof Repair',
    'roof-replacement': 'Roof Replacement',
    'new-construction': 'New Construction',
    'gutter-repair-replacement': 'Gutter Repair & Replacement',
    'storm-damage-roof-repair': 'Storm Damage Roof Repair',
    'roof-insurance-claims': 'Roof Insurance Claims',
    'emergency-roof-repair-dallas-ga': 'Emergency Roof Repair Dallas GA',
    'roof-repair-dallas-ga': 'Roof Repair Dallas GA',
    'roof-replacement-dallas-ga': 'Roof Replacement Dallas GA',
    'storm-damage-roof-repair-dallas-ga': 'Storm Damage Roof Repair Dallas GA',
    'gutter-repair-replacement-dallas-ga': 'Gutter Repair & Replacement Dallas GA',
    'new-construction-dallas-ga': 'New Construction Dallas GA',
  };
  if (known[segment]) return known[segment];

  // Combo pages: roof-repair-hiram → Roof Repair Hiram, etc.
  const cityMatch = segment.match(
    /^(roof-repair|roof-replacement|storm-damage-roof-repair|gutter-repair-replacement|new-construction)-(.+)$/
  );
  if (cityMatch) {
    const serviceLabel = known[cityMatch[1]] || titleCaseSlug(cityMatch[1]);
    return `${serviceLabel} ${titleCaseSlug(cityMatch[2])}`;
  }

  return titleCaseSlug(segment);
}

// Build the JSON-LD schema graph. Pure function so it can render in <head>.
export function buildSeoGraph(path) {
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
    image: `${brand.url}/assets/logo.png`,
    logo: `${brand.url}/assets/logo.png`,
    sameAs: [
      GBP_URL,
      'https://twitter.com/irooferc',
      'https://www.facebook.com/iroofercontractors',
      'https://www.instagram.com/iroofercontractors',
      BBB_URL,
      BIRDEYE_URL,
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
      // Matches the verified Google Business Profile pin for 152 Freedom Dr,
      // Dallas, GA 30157. Do not change without re-checking the GBP map pin —
      // a mismatch between schema geo and the GBP pin weakens local ranking.
      latitude: 33.8810,
      longitude: -84.8204,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '19:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '17:00' },
      // Sunday omitted on purpose = closed. '00:00'-'00:00' reads as ambiguous/open-24h.
    ],
    // Self-hosted review markup (aggregateRating + embedded reviews) is ignored by
    // Google for LocalBusiness since 2019 and reads as self-serving to quality checks.
    // Ratings live on the Google Business Profile, linked in sameAs above.
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
    url: absUrl(`/services/${s.slug}`),
  }));

  // NOTE (2026-08-30): the per-city combo Service nodes were removed. 32 near-identical
  // Service objects on every page is schema bloat with no ranking benefit; the four core
  // Service nodes above already carry areaServed for the full service area, and each
  // combo landing page states its own city in copy, title and breadcrumb.
  const comboServiceGraph = [];

  // BreadcrumbList — machine-readable navigation trail for answer engines.
  const breadcrumb = (() => {
    const segs = (path || '').replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);
    if (!segs.length) return null;
    const trail = [{ name: 'Home', url: absUrl('/') }];
    let acc = '';
    for (const s of segs) {
      acc += `/${s}`;
      trail.push({ name: breadcrumbLabel(s), url: absUrl(acc) });
    }
    return {
      '@type': 'BreadcrumbList',
      itemListElement: trail.map((t, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: t.name,
        item: t.url,
      })),
    };
  })();

  return {
    '@context': 'https://schema.org',
    '@graph': [localBusiness, webSite, ...serviceGraph, ...comboServiceGraph, ...(breadcrumb ? [breadcrumb] : [])],
  };
}

// Lightweight FAQPage-only schema — use on pages that render an FAQ section so
// Google can surface the Q&A as a rich result, without re-emitting the full
// LocalBusiness graph (which is already rendered globally in layout).
export function FaqSchema({ faq }) {
  if (!faq || !faq.length) return null;
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  );
}

export default function LocalSeo({ faq = null }) {
  const pathname = usePathname();
  const graph = buildSeoGraph(pathname || '/');

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
