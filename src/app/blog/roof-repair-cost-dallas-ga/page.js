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
    'What changes roof repair cost in Dallas, GA — leak source, access, materials and storm path. Call (470) 236-1410 for a free inspection and written price.',
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
              Homeowners searching roof repair cost in Dallas, GA usually want a ballpark before they call. Fair. The
              honest answer: the number moves with what failed, how hard it is to reach, whether decking is soft, and
              whether you’re fixing one penetration or a whole slope.
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

            <h2>Repair vs replace (cost mindset)</h2>
            <p>
              Sometimes a targeted{' '}
              <Link href="/roof-repair-dallas-ga/" style={{ color: 'var(--orange)' }}>
                roof repair in Dallas
              </Link>{' '}
              is the smart spend. Sometimes stacking patches costs more than a clean{' '}
              <Link href="/roof-replacement-dallas-ga/" style={{ color: 'var(--orange)' }}>
                roof replacement in Dallas
              </Link>
              . We’ll say which after we see the roof.
            </p>

            <h2>How to get a real number</h2>
            <ol>
              <li>
                Book an inspection — <Link href="/contact/" style={{ color: 'var(--orange)' }}>contact form</Link> or
                call {brand.phone}
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
            <p>
              <strong>Do you finance repairs?</strong>
              <br />
              Ask about current options when you call — availability can change.
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
