import { OG_IMAGE } from '@/lib/seo';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  alternates: { canonical: 'https://iroofercontractors.com/blog/roof-repair-cost-dallas-ga' },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }], url: 'https://iroofercontractors.com/blog/roof-repair-cost-dallas-ga' },

  title: 'Roof Repair Costs in Dallas, GA (2026 Guide)',
  description:
    'Leak fixes, shingle repair, flashing, and storm patch pricing for Dallas, GA homes — real per-repair ranges from a local roofer, plus when repair beats replacement.',
};

const post = {
  slug: 'roof-repair-cost-dallas-ga',
  title: '$250–$3,500: What Roof Repair Costs in Dallas, GA (2026 Pricing)',
  date: 'January 2027',
  readTime: '9 min read',
  category: 'Cost Guide',
};

export default function BlogPostPage() {
  return (
    <>
      <article className="post">
        <div className="tex" aria-hidden="true" />
        <div className="wrap">
          <div className="post-head rv">
            <span className="eyebrow dark">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="byline">
              By iRoofer Contractors
            </p>
            <p className="meta">{post.date} · {post.readTime}</p>
          </div>

          <div className="post-body rv">
            <p>“How much will it cost to fix my roof?” is the call we get most after a storm or a ceiling stain shows up. The honest answer: most Dallas, GA roof repairs run <strong>$250–$3,500</strong>, with the average leak repair landing around $450–$900. This guide breaks down the real numbers we quote every week in Paulding and Cobb counties — so you know what’s fair before we climb the ladder.</p>

            <h2>Roof Repair vs. Replacement: The $ Line</h2>
            <p>The fastest way to know which you need: if the damage is isolated (one slope, one valley, a few shingles) and the rest of the roof is under 15 years old, repair almost always wins. If leaks are showing in multiple rooms or the shingles are curling across the whole roof, see our <Link href="/blog/when-to-replace-vs-repair-a-roof" style={{ color: 'var(--orange)' }}>roof replacement vs. repair guide →</Link>.</p>

            <h2>Dallas GA Repair Pricing by Job Type (2026)</h2>
            <p>These are the ranges we actually quote — not national averages:</p>
            <table style={{ width: '100%', borderCollapse: 'collapse', margin: '16px 0' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #eee' }}>
                  <th align="left" style={{ padding: '8px 0' }}>Repair Type</th>
                  <th align="left" style={{ padding: '8px 0' }}>Typical Range</th>
                  <th align="left" style={{ padding: '8px 0' }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '6px 0' }}>Single leak patch</td>
                  <td style={{ padding: '6px 0' }}>$250–$600</td>
                  <td style={{ padding: '6px 0' }}>One penetration, pipe boot, or small flashing leak.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '6px 0' }}>Missing / blown-off shingles (≤1 square)</td>
                  <td style={{ padding: '6px 0' }}>$300–$750</td>
                  <td style={{ padding: '6px 0' }}>Includes matching architectural shingles + seal.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '6px 0' }}>Valley re-flash</td>
                  <td style={{ padding: '6px 0' }}>$600–$1,200</td>
                  <td style={{ padding: '6px 0' }}>Open valleys are the #1 leak source on Atlanta-area roofs.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '6px 0' }}>Chimney / skylight flashing</td>
                  <td style={{ padding: '6px 0' }}>$500–$1,400</td>
                  <td style={{ padding: '6px 0' }}>Step flashing replacement; skylights often need a new pan.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '6px 0' }}>Small section re-roof (1–3 squares)</td>
                  <td style={{ padding: '6px 0' }}>$900–$2,200</td>
                  <td style={{ padding: '6px 0' }}>When a slope is past patch but rest is sound.</td>
                </tr>
                <tr>
                  <td style={{ padding: '6px 0' }}>Emergency tarping (before repair)</td>
                  <td style={{ padding: '6px 0' }}>$300–$500</td>
                  <td style={{ padding: '6px 0' }}>Stops active leaks until the full repair.</td>
                </tr>
              </tbody>
            </table>

            <h2>What Drives the Price Up or Down</h2>
            <ul>
              <li><strong>Height &amp; pitch</strong> — two-story and steep roofs need more safety gear and time (1.1x–1.5x).</li>
              <li><strong>Access</strong> — tight side yards or no driveway access add setup cost.</li>
              <li><strong>Deck condition</strong> — if plywood is rotted under the leak, add $15–$35 per 4×8 sheet.</li>
              <li><strong>Insurance</strong> — storm-caused damage is often covered; see our <Link href="/blog/dallas-ga-hail-storm-insurance-claims" style={{ color: 'var(--orange)' }}>insurance claim walkthrough →</Link>.</li>
            </ul>

            <h2>When Repair Is the Wrong Call</h2>
            <p>We’ll tell you straight: if you’ve had 2+ leaks in 12 months, or the shingles are 15+ years old with widespread granule loss, repeated patches cost more than a full <Link href="/blog/cost-of-new-roof-2026-dallas-ga" style={{ color: 'var(--orange)' }}>replacement ($8K–$30K) →</Link>. A free inspection tells you which side you’re on.</p>

            <h2>Real Repairs We Did This Month</h2>
            <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: 6, margin: '16px 0' }}>
              <p><strong>Austell ranch, pipe-boot leak</strong><br />One boot + seal → <strong>$320</strong></p>
              <p><strong>Dallas two-story, valley re-flash</strong><br />Open valley, 18 ft → <strong>$1,050</strong></p>
              <p><strong>Powder Springs, 4 shingles + flashing after hail</strong><br />Insurance-covered, $0 out of pocket → <strong>$680</strong></p>
            </div>
            <p style={{ fontSize: '.85rem', color: '#8ea2b4' }}>Real jobs from October 2026 — actual prices vary with site conditions.</p>

            <h2>Get a Free Repair Quote</h2>
            <p>Every repair starts with a free inspection and a written price — no surprises, no pressure. If it’s storm damage, we’ll document it for your claim.</p>
            <RelatedPosts slug="roof-repair-cost-dallas-ga" />
            <p><Link href="/estimator" className="btn btn-solid">Get a Free Quote →</Link></p>
          </div>
        </div>
      </article>
    </>
  );
}
