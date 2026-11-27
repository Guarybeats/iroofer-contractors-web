// Shared SEO metadata builder.
// Emits a self-referencing canonical WITH trailing slash (matching live site,
// next.config trailingSlash: true, and public/sitemap.xml), plus full Open Graph
// and Twitter card tags for every page that uses it.
import { brand } from './brand';

const BASE = brand.url.replace(/\/$/, ''); // https://iroofercontractors.com
export const OG_IMAGE = `${BASE}/assets/og-roof-replacement.jpg`;

// JSON-LD Organization.logo / LocalBusiness.image.
// Google wants a crawlable PNG or JPG at least 112x112. Do not point schema at logo.webp.
// public/assets/logo.png is the same artwork as the visible header logo (/assets/logo.webp), 767x488.
// Changing this URL or replacing the file is a schema change and needs an explicit yes before publish.
export const SCHEMA_LOGO = `${BASE}/assets/logo.png`;

/** Absolute site URL with trailing slash. Root → https://iroofercontractors.com/ */
export function absoluteUrl(path = '') {
  if (!path || path === '/' || path === '') return `${BASE}/`;
  const clean = String(path).startsWith('/') ? String(path) : `/${path}`;
  const withSlash = clean.endsWith('/') ? clean : `${clean}/`;
  return `${BASE}${withSlash}`;
}

export function seo({
  title,
  description,
  path = '',
  noIndex = false,
  canonicalPath,
}) {
  const url = absoluteUrl(path);
  const canonical = absoluteUrl(canonicalPath || path);
  return {
    title,
    description,
    metadataBase: new URL(BASE),
    alternates: { canonical },
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
      images: [{ url: OG_IMAGE, alt: `New roof on a home by ${brand.name}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
