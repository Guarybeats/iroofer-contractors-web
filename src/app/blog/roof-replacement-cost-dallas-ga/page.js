import { OG_IMAGE } from '@/lib/seo';
import PriceDisclaimer from '@/components/PriceDisclaimer';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import { brand } from '@/lib/brand';
import BlogPostingSchema from '@/components/BlogPostingSchema';

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  alternates: { canonical: 'https://iroofercontractors.com/blog/roof-replacement-cost-dallas-ga' },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: 'https://iroofercontractors.com/blog/roof-replacement-cost-dallas-ga',
  },
  title: 'Roof Replacement Cost in Dallas, GA | What Actually Changes the Price | iRoofer',
  description:
    'What drives roof replacement cost in Dallas GA — squares, pitch, materials, decking, tear-off — with a clear not-a-quote disclaimer. Call (470) 236-1410 or https://iroofercontractors.com/contact/',
};

const post = {
  slug: 'roof-replacement-cost-dallas-ga',
  title: 'Roof Replacement Cost in Dallas, GA: Planning Factors (Not a Quote)',
  date: 'September 2026',
  readTime: '7 min read',
  category: 'Cost Guide',
};

export default function BlogPostPage() {
  return (
    <>
      <BlogPostingSchema slug="roof-replacement-cost-dallas-ga" post={post} />
      <article className="post">
        <div className="tex" aria-hidden="true" />
        <div className="wrap">
          <div className="post-head rv">
            <span className="eyebrow dark">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="byline">By iRoofer Contractors</p>
            <p className="meta">{post.date} · {post.readTime}</p>
            <PriceDisclaimer />
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
              <strong>Not a quote.</strong> Every roof is different. The factors below help you plan a conversation.
              iRoofer puts a real figure in writing only after an on-site inspection. We are not publishing dollar tables here.
            </p>
          </div>

          <div className="post-body rv">
            <p>
              Homeowners searching roof replacement cost in Dallas, GA usually want a ballpark before they call. Fair.
              The honest answer is: the number moves with the roof you actually have — size, pitch, layers, decking condition,
              and material choice — plus access and disposal.
            </p>
            <p>
              iRoofer Contractors is family-owned in Dallas since 2019. Owens Corning Preferred when that system fits.
              We&apos;ll walk the roof and write the number — not guess it on the phone.
              Call <a href={`tel:${brand.phone}`}>{brand.phone}</a> or{' '}
              <Link href="/contact/" style={{ color: 'var(--orange)' }}>https://iroofercontractors.com/contact/</Link>.
            </p>

            <h2>What changes roof replacement cost locally</h2>
            <ol>
              <li><strong>Squares (size)</strong> — more roof area, more material and labor</li>
              <li><strong>Pitch / access</strong> — steeper or tight lots take longer and more safety setup</li>
              <li><strong>Tear-off layers</strong> — multiple layers mean heavier tear-off and disposal</li>
              <li><strong>Decking repairs</strong> — soft or damaged sheathing found after tear-off</li>
              <li><strong>Materials</strong> — architectural asphalt lines (including Owens Corning options) vs other systems</li>
              <li><strong>Flashings, ventilation, ridge details</strong> — done right, not skimmed</li>
              <li>
                <strong>Storm / insurance path</strong> — if hail or wind applies, documentation matters; approval still depends on your policy →{' '}
                <Link href="/services/roof-insurance-claims/" style={{ color: 'var(--orange)' }}>roof insurance claims help</Link>
              </li>
            </ol>

            <h2>Repair vs replace (cost mindset)</h2>
            <p>
              Sometimes a targeted{' '}
              <Link href="/roof-repair-dallas-ga/" style={{ color: 'var(--orange)' }}>roof repair in Dallas</Link>
              {' '}is the smart spend. Sometimes stacking patches costs more than a clean{' '}
              <Link href="/roof-replacement-dallas-ga/" style={{ color: 'var(--orange)' }}>roof replacement in Dallas</Link>.
              We&apos;ll say which after we see the roof.
            </p>

            <h2>How to get a real number</h2>
            <ol>
              <li>Book an inspection — <Link href="/contact/" style={{ color: 'var(--orange)' }}>contact form</Link> or call {brand.phone}</li>
              <li>We measure and photograph</li>
              <li>You get a written proposal</li>
              <li>No pressure to sign same day</li>
            </ol>

            <h2>FAQ</h2>
            <p><strong>Can you quote over the phone?</strong><br />No — not accurately.</p>
            <p><strong>Do you finance?</strong><br />Ask about current options when you call; availability can change (no invented APR on this page).</p>
            <p><strong>Why don&apos;t you list prices here?</strong><br />Because a blog table becomes wrong fast and misleads neighbors. Factors + a written inspection beat a fake chart.</p>

            <h2>Related Dallas pages</h2>
            <ul>
              <li><Link href="/roof-replacement-dallas-ga/" style={{ color: 'var(--orange)' }}>Roof replacement Dallas GA</Link></li>
              <li><Link href="/roof-repair-dallas-ga/" style={{ color: 'var(--orange)' }}>Roof repair Dallas GA</Link></li>
              <li><Link href="/storm-damage-roof-repair-dallas-ga/" style={{ color: 'var(--orange)' }}>Storm damage roof repair Dallas</Link></li>
              <li><Link href="/dallas-ga-roofing/" style={{ color: 'var(--orange)' }}>Dallas GA roofing hub</Link></li>
              <li><Link href="/contact/" style={{ color: 'var(--orange)' }}>Contact / free inspection</Link></li>
            </ul>

            <RelatedPosts slug="roof-replacement-cost-dallas-ga" />
            <p style={{ marginTop: 28 }}>
              <Link href="/contact/" className="btn btn-solid">Get a free inspection →</Link>
              {' '}
              <a className="btn btn-ghost" href={`tel:${brand.phone}`}>{brand.phone}</a>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
