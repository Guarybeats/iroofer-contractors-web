import Link from 'next/link';
import { brand } from '@/lib/brand';

export const metadata = {
  title: 'Roof Tips & News — iRoofer Contractors Blog',
  description: 'Georgia roofing insights from iRoofer Contractors. Storm damage checklists, insurance claim tips, and roof maintenance advice for Dallas, GA homeowners.',
};

const posts = [
  {
    slug: 'georgia-hail-storm-roof-checklist',
    title: 'Georgia Hail Storm Roof Checklist: What Dallas Homeowners Need to Know',
    date: 'September 2026',
    excerpt: 'North Georgia gets its share of hail storms — some the size of quarters, some larger. When the skies clear, the last thing you want is a hidden roof leak or a denied insurance claim. Follow this six-step checklist.',
    readTime: '6 min read',
    category: 'Storm Damage',
  },
  {
    slug: 'when-to-replace-vs-repair-a-roof',
    title: 'Roof Replacement vs. Roof Repair: When to Tear Off vs. Patch',
    date: 'October 2026',
    excerpt: 'After Georgia weather takes its toll, how do you know whether to patch a few shingles or tear off and start fresh? Here are the 5 questions every Dallas homeowner should ask before deciding.',
    readTime: '8 min read',
    category: 'Maintenance',
  },
];

export default function BlogPage() {
  return (
    <section className="sec-light sec-pad">
      <div className="tex" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative', maxWidth: 880, margin: '0 auto' }}>
        <div className="sec-head rv" style={{ marginBottom: 48 }}>
          <span className="eyebrow dark">From the roof</span>
          <h1 style={{ fontSize: 'clamp(2.2rem,5vw,3.2rem)', fontWeight: 900, lineHeight: 1.05 }}>
            Roof Tips &amp; News
          </h1>
          <p style={{ color: '#52606b', fontSize: '1.05rem', marginTop: 12, maxWidth: 640 }}>
            Storm damage checklists, insurance claim tips, and roof maintenance advice — written by
            Cristian Mendez, a local Dallas, GA roofer with 150+ roofs under his belt since 2019.
          </p>
        </div>

        <div style={{ display: 'grid', gap: 36 }}>
          {posts.map((p) => (
            <article key={p.slug} style={{
              background: '#fff', border: '1px solid rgba(22,29,37,.08)',
              borderRadius: 8, padding: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,.02)'
            }}>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: '.8rem', fontWeight: 700, color: 'var(--orange)',
                  textTransform: 'uppercase', letterSpacing: '.04em'
                }}>{p.category}</span>
                <span style={{ color: '#8ea2b4', fontSize: '.85rem' }}>{p.date} · {p.readTime}</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.3rem,2.5vw,1.6rem)', fontWeight: 800, margin: '0 0 12px' }}>
                <Link href={`/blog/${p.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {p.title}
                </Link>
              </h2>
              <p style={{ color: '#52606b', fontSize: '.95rem', lineHeight: 1.6, margin: '0 0 16px' }}>
                {p.excerpt}
              </p>
              <Link href={`/blog/${p.slug}`} style={{
                color: 'var(--orange)', fontWeight: 700, textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 4
              }}>
                Read the full article <span style={{ fontSize: '1.2rem' }}>→</span>
              </Link>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: 'center', color: '#8ea2b4', fontSize: '.9rem' }}>
          More posts coming soon — sign up for our monthly roof-care newsletter.
        </div>
      </div>
    </section>
  );
}
