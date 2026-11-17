import { brand } from '@/lib/brand';
import { posts } from '@/lib/posts';

const BASE = brand.url.replace(/\/$/, '');
const MONTHS = {
  january: '01', february: '02', march: '03', april: '04', may: '05', june: '06',
  july: '07', august: '08', september: '09', october: '10', november: '11', december: '12',
};

// "August 2026" -> "2026-08-01". Posts are dated by month, so we publish the
// first of that month rather than inventing a precise timestamp.
function isoDate(label) {
  if (!label) return null;
  const m = /([A-Za-z]+)\s+(\d{4})/.exec(label);
  if (!m) return null;
  const mm = MONTHS[m[1].toLowerCase()];
  return mm ? `${m[2]}-${mm}-01` : null;
}

export default function BlogPostingSchema({ slug, post: override }) {
  const post = override || posts.find((p) => p.slug === slug);
  if (!post) return null;
  const url = `${BASE}/blog/${slug}/`;
  const published = isoDate(post.date);

  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    headline: post.title.length > 110 ? `${post.title.slice(0, 107)}...` : post.title,
    ...(post.excerpt ? { description: post.excerpt } : {}),
    ...(post.category ? { articleSection: post.category } : {}),
    ...(published ? { datePublished: published, dateModified: published } : {}),
    image: [`${BASE}/assets/hero.jpg`],
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    author: { '@type': 'Organization', name: brand.name, url: `${BASE}/` },
    publisher: {
      '@type': 'Organization',
      name: brand.name,
      url: `${BASE}/`,
      logo: { '@type': 'ImageObject', url: `${BASE}/assets/logo.png` },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
