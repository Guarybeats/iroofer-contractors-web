import Link from 'next/link';
import { posts } from '@/lib/posts';

const STOP = new Set([
  'your', 'with', 'what', 'when', 'how', 'from', 'that', 'this', 'they', 'into',
  'will', 'have', 'are', 'for', 'the', 'and', 'dallas', 'ga', 'roof', 'roofs',
  'here', 'need', 'know', 'why', 'homeowners', 'home', 'get', 'just', 'more',
]);

export default function RelatedPosts({ slug }) {
  const current = posts.find((p) => p.slug === slug);
  if (!current) return null;

  const words =
    (current.title + ' ' + current.excerpt).toLowerCase().match(/[a-z]{4,}/g) || [];

  const scored = posts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      let score = p.category === current.category ? 3 : 0;
      const hay = (p.title + ' ' + p.excerpt).toLowerCase();
      for (const w of words) {
        if (!STOP.has(w) && hay.includes(w)) score += 0.5;
      }
      return { p, score };
    })
    .sort((a, b) => b.score - a.score);

  const related = scored.slice(0, 3).map((s) => s.p);

  return (
    <section style={{ marginTop: 48 }}>
      <h2
        style={{
          fontSize: 'clamp(1.4rem,3vw,1.9rem)',
          fontWeight: 900,
          margin: '0 0 24px',
          lineHeight: 1.1,
        }}
      >
        Related Reading
      </h2>
      <div
        style={{
          display: 'grid',
          gap: 20,
          gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
        }}
      >
        {related.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}/`}
            style={{
              display: 'block',
              background: '#fff',
              border: '1px solid rgba(22,29,37,.08)',
              borderRadius: 8,
              padding: '1.25rem',
              textDecoration: 'none',
              color: 'inherit',
              boxShadow: '0 2px 8px rgba(0,0,0,.03)',
            }}
          >
            <span
              style={{
                fontSize: '.75rem',
                fontWeight: 700,
                color: 'var(--orange)',
                textTransform: 'uppercase',
                letterSpacing: '.04em',
              }}
            >
              {p.category}
            </span>
            <h3
              style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                margin: '8px 0 12px',
                lineHeight: 1.25,
              }}
            >
              {p.title}
            </h3>
            <span
              style={{
                color: 'var(--orange)',
                fontWeight: 700,
                fontSize: '.85rem',
              }}
            >
              Read article →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
