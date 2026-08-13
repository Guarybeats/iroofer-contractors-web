// Shared SEO metadata builder.
// Emits a self-referencing canonical (no trailing slash, matching sitemap.xml),
// full Open Graph, and Twitter card tags for every page that uses it.
import { brand } from './brand';

const BASE = brand.url.replace(/\/$/, ''); // https://iroofercontractors.com
const OG_IMAGE = `${BASE}/assets/logo.png`;

export function seo({
  title,
  description,
  path = '',
  noIndex = false,
}) {
  const url = path === '' ? BASE : `${BASE}${path}`;
  return {
    title,
    description,
    metadataBase: new URL(BASE),
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: 'website',
      url,
      siteName: brand.name,
      title,
      description,
      locale: 'en_US',
      images: [{ url: OG_IMAGE, alt: `${brand.name} logo`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
