import { OG_IMAGE } from '@/lib/seo';
import PriceDisclaimer from '@/components/PriceDisclaimer';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import { brand } from '@/lib/brand';
import BlogPostingSchema from '@/components/BlogPostingSchema';

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  alternates: { canonical: 'https://iroofercontractors.com/blog/roof-warranty-what-is-covered/' },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: 'https://iroofercontractors.com/blog/roof-warranty-what-is-covered/',
  },
  title: 'Roof Warranty Explained: What’s Covered vs Workmanship | Dallas GA | iRoofer',
  description:
    'Manufacturer vs workmanship roof warranties — what they cover, what they don’t, and how to get help in Dallas, GA. Call iRoofer at (470) 236-1410 or contact us.',
};

const post = {
  slug: 'roof-warranty-what-is-covered',
  title: 'Roof Warranty Explained: What’s Covered (Manufacturer vs Workmanship)',
  date: 'May 2026',
  readTime: '7 min read',
  category: 'Warranty',
};

export default function BlogPostPage() {
  return (
    <>
      <BlogPostingSchema slug="roof-warranty-what-is-covered" post={post} />
      <article className="post">
        <div className="tex" aria-hidden="true" />
        <div className="wrap">
          <div className="post-head rv">
            <span className="eyebrow dark">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="byline">By iRoofer Contractors</p>
            <p className="meta">{post.date} · {post.readTime}</p>
            <PriceDisclaimer />
          </div>

          <div className="post-body rv">
            <p>
              A new roof usually comes with <strong>two</strong> warranties: one from the shingle manufacturer, and one from the contractor for workmanship. Mixing them up is how homeowners lose time when something goes wrong. iRoofer Contractors — Dallas, GA, family-owned since 2019 — registers manufacturer coverage when we install and puts workmanship terms in writing.
            </p>
            <p>
              Ready to talk about your roof? Visit{' '}
              <Link href="/contact/" style={{ color: 'var(--orange)', fontWeight: 700 }}>https://iroofercontractors.com/contact/</Link>
              {' '}or call <a href={`tel:${brand.phone}`}>{brand.phone}</a>.
            </p>

            <h2>The two layers (keep this scannable)</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '24px 0' }}>
              <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: '16px' }}>
                <h3 style={{ marginTop: 0, color: 'var(--orange)' }}>Manufacturer</h3>
                <p>Material defects in the shingles/system per the written warranty.</p>
                <p style={{ fontSize: '.85rem', color: '#8ea2b4' }}>Shingle manufacturer (e.g. Owens Corning when that system is installed).</p>
              </div>
              <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: '16px' }}>
                <h3 style={{ marginTop: 0, color: 'var(--orange)' }}>Workmanship</h3>
                <p>Installation-related failures (flashing mistakes, improper fastening, etc.) per <em>your contract</em>.</p>
                <p style={{ fontSize: '.85rem', color: '#8ea2b4' }}>Your roofing contractor — not the shingle brand.</p>
              </div>
            </div>
            <p>
              Storm damage, fallen limbs, and weather events are typically <strong>insurance</strong>, not warranty. Neglect and lack of maintenance are usually exclusions — read your packet.
            </p>

            <h2>What manufacturer warranties usually require</h2>
            <ul>
              <li>Installation by an eligible contractor (Preferred / certified programs often matter)</li>
              <li>Registration within the manufacturer’s window</li>
              <li>Use of the specified underlayment / system components when the enhanced warranty requires them</li>
            </ul>
            <p>
              We install as an <strong>Owens Corning Preferred Contractor</strong> when that product line is on the job — useful for registration and system eligibility, not a blank promise that “everything is covered forever.”
            </p>

            <h2>What workmanship coverage is (and is not)</h2>
            <p>
              Workmanship covers how the roof was put on — not every future weather event. Terms, length, and transfer rules should be in your written agreement. We explain ours at estimate and at completion. We do <strong>not</strong> invent decade-long guarantees in marketing copy that are not in the contract.
            </p>

            <h2>How to get help if you already have a roof</h2>
            <ol>
              <li>Find the warranty packet / invoice.</li>
              <li>Note whether the issue looks like a leak at flashing (often workmanship/install) vs a shingle manufacturing defect (rarer; manufacturer process).</li>
              <li>Call the installing contractor first for workmanship; call us at {brand.phone} if we installed it — or if you want a free paperwork review and honest read even if we did not.</li>
              <li>
                For storm damage, use insurance paths:{' '}
                <Link href="/storm-damage-roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>storm damage roof repair Dallas</Link>
                {' '}and{' '}
                <Link href="/services/roof-insurance-claims/" style={{ color: 'var(--orange)', fontWeight: 700 }}>roof insurance claims</Link>.
              </li>
            </ol>

            <h2>Related service paths</h2>
            <ul>
              <li><Link href="/roof-replacement-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Roof replacement in Dallas, GA</Link> — when a new install is the right conversation</li>
              <li><Link href="/roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Roof repair in Dallas, GA</Link> — when a targeted fix is enough</li>
              <li><Link href="/about/" style={{ color: 'var(--orange)', fontWeight: 700 }}>About iRoofer</Link> — who stands behind the work (Cristian Mendez, 152 Freedom Dr)</li>
              <li><Link href="/contact/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Contact</Link></li>
            </ul>

            <h2>Common questions</h2>
            <p><strong>Does a manufacturer warranty cover storm damage?</strong><br />Usually no — that is an insurance conversation.</p>
            <p><strong>Does workmanship transfer when I sell?</strong><br />Often no, or only under specific written terms. Manufacturer transfer rules vary — registration matters. Ask us to review your packet.</p>
            <p><strong>Can you explain a warranty another company wrote?</strong><br />We can give an honest read of common terms; we cannot rewrite another contractor’s obligations.</p>
            <p><strong>Who do I call for an iRoofer install?</strong><br />{brand.phone} or https://iroofercontractors.com/contact/</p>

            <p>
              <Link href="/contact/" className="btn btn-solid">Review my warranty paperwork →</Link>
              {' '}
              <a className="btn btn-ghost" href={`tel:${brand.phone}`} style={{ marginLeft: 8 }}>{brand.phone}</a>
            </p>
            <RelatedPosts slug="roof-warranty-what-is-covered" />
          </div>
        </div>
      </article>
    </>
  );
}
