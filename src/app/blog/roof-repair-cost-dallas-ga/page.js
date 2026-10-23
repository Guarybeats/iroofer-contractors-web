import { OG_IMAGE } from '@/lib/seo';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import { brand } from '@/lib/brand';
import BlogPostingSchema from '@/components/BlogPostingSchema';

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  alternates: { canonical: 'https://iroofercontractors.com/blog/roof-repair-cost-dallas-ga/' },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: 'https://iroofercontractors.com/blog/roof-repair-cost-dallas-ga/',
  },
  title: 'Roof Repair Cost in Dallas, GA: What Changes It | iRoofer',
  description:
    'What drives roof repair cost around Dallas, GA: leak source, access, decking, materials. No price lists. Free inspection, written figure: (470) 236-1410.',
};

const post = {
  slug: 'roof-repair-cost-dallas-ga',
  title: 'Roof Repair Cost in Dallas, GA: Planning Factors (Not a Quote)',
  date: 'October 2026',
  readTime: '6 min read',
  category: 'Cost Guide',
};

export default function BlogPostPage() {
  return (
    <>
      <BlogPostingSchema slug="roof-repair-cost-dallas-ga" post={post} />
      <article className="post">
        <div className="tex" aria-hidden="true" />
        <div className="wrap">
          <div className="post-head rv">
            <span className="eyebrow dark">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="byline">By iRoofer Contractors</p>
            <p className="meta">{post.date} · {post.readTime}</p>
            <p
              style={{
                fontSize: '.9rem',
                color: '#5d6b7a',
                background: '#fff8f0',
                borderLeft: '3px solid var(--orange)',
                padding: '10px 14px',
                borderRadius: 4,
                margin: '12px 0 0',
              }}
            >
              <strong>No prices published.</strong> iRoofer puts a real figure in writing
              only after an on-site inspection.
            </p>
          </div>

          <div className="post-body rv">
            <p>
              Most people want a rough idea of what a repair will cost before they call. Fair enough. The honest
              answer: the number moves with what failed, how hard it is to reach, whether the decking is soft, and
              whether you’re fixing one pipe boot or a whole slope. This guide covers the cost factors. If you already
              know you need work done, skip to the service pages linked below.
            </p>
            <p>
              iRoofer Contractors is family-owned in Dallas since 2019. Call{' '}
              <a href={`tel:${brand.phone}`}>{brand.phone}</a> or{' '}
              <Link href="/contact/" style={{ color: 'var(--orange)', fontWeight: 700 }}>
                https://iroofercontractors.com/contact/
              </Link>
              .
            </p>

            <h2>What changes roof repair cost locally</h2>
            <ul>
              <li>
                <strong>Source of the leak</strong> — boot vs valley vs chimney flashing are different jobs
              </li>
              <li>
                <strong>Access / pitch</strong> — steeper or tight lots take more setup
              </li>
              <li>
                <strong>How many areas</strong> — one penetration vs scattered storm wear
              </li>
              <li>
                <strong>Matching shingles</strong> — color/age match availability
              </li>
              <li>
                <strong>Decking surprises</strong> — soft wood found under a “simple” patch
              </li>
              <li>
                <strong>Temporary tarp</strong> — if water is active first
              </li>
              <li>
                <strong>Storm / insurance path</strong> — documentation may apply; approval still depends on policy →{' '}
                <Link href="/services/roof-insurance-claims/" style={{ color: 'var(--orange)' }}>
                  roof insurance claims help
                </Link>
              </li>
            </ul>

            <h2>When a repair is the smart spend</h2>
            <p>
              A single failed spot, like a cracked boot, loose step flashing or a few wind-lifted shingles, usually
              costs far less to fix than people fear, and fixing it now keeps the damage from spreading. What we check,
              what we fix and how we work on local roofs is on our{' '}
              <Link href="/roof-repair-dallas-ga/" style={{ color: 'var(--orange)' }}>
                roof repair in Dallas, GA
              </Link>{' '}
              page. Book there or call {brand.phone}.
            </p>

            <h2>When replacement costs less over time</h2>
            <p>
              If you’re paying for the same leak twice, or wear shows on every slope, stacking patches can end up
              costing more than a new roof. Our{' '}
              <Link href="/roof-replacement-dallas-ga/" style={{ color: 'var(--orange)' }}>
                roof replacement in Dallas, GA
              </Link>{' '}
              page explains when replacement makes sense and how the job goes. The cost factors (size, pitch, layers,
              decking, material) are in the{' '}
              <Link href="/blog/roof-replacement-cost-dallas-ga/" style={{ color: 'var(--orange)' }}>
                roof replacement cost guide
              </Link>
              .
            </p>

            <h2>How to get a real number</h2>
            <ol>
              <li>
                Book a free inspection at{' '}
                <Link href="/contact/" style={{ color: 'var(--orange)' }}>https://iroofercontractors.com/contact/</Link> or call {brand.phone}
              </li>
              <li>We find the source and photograph it</li>
              <li>You get a written scope</li>
              <li>No pressure to sign same day</li>
            </ol>

            <h2>Related reading</h2>
            <ul>
              <li>
                <Link href="/blog/roof-replacement-cost-dallas-ga/" style={{ color: 'var(--orange)' }}>
                  Roof replacement cost factors (Dallas)
                </Link>
              </li>
              <li>
                <Link href="/blog/roof-warranty-what-is-covered/" style={{ color: 'var(--orange)' }}>
                  Roof warranty explained
                </Link>
              </li>
              <li>
                <Link href="/emergency-roof-repair-dallas-ga/" style={{ color: 'var(--orange)' }}>
                  Emergency tarping / active leaks
                </Link>
              </li>
            </ul>

            <h2>FAQ</h2>
            <p>
              <strong>Can you quote a roof repair over the phone?</strong>
              <br />
              No — not accurately. Photos help triage; a number still needs the roof.
            </p>
            <p>
              <strong>Why don’t you list prices here?</strong>
              <br />Every repair is different and prices change. A written figure after an inspection is the number you can rely on.
            </p>
            <p>
              <strong>Is emergency tarping separate?</strong>
              <br />
              Often yes when water is active — see{' '}
              <Link href="/emergency-roof-repair-dallas-ga/" style={{ color: 'var(--orange)' }}>
                emergency roof repair Dallas
              </Link>
              .
            </p>

            <RelatedPosts slug="roof-repair-cost-dallas-ga" />
            <p style={{ marginTop: 28 }}>
              <Link href="/contact/" className="btn btn-solid">
                Get a free inspection →
              </Link>{' '}
              <a className="btn btn-ghost" href={`tel:${brand.phone}`}>
                {brand.phone}
              </a>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
