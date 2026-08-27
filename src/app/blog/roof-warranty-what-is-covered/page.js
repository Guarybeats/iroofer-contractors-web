import { OG_IMAGE } from '@/lib/seo';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import { brand } from '@/lib/brand';

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  alternates: { canonical: 'https://iroofercontractors.com/blog/roof-warranty-what-is-covered' },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }], url: 'https://iroofercontractors.com/blog/roof-warranty-what-is-covered' },

  title: "Roof Warranties Explained: What's Covered",
  description:
    'Manufacturer warranties, workmanship warranties, and what happens when your roof fails after year 5. We decode the fine print so you know what you’re really getting.',
};

const post = {
  slug: 'roof-warranty-what-is-covered',
  title: 'Roof Warranty Explained: What’s Covered (And What the Fine Print Hides)',
  date: 'April 2027',
  readTime: '8 min read',
  category: 'Warranty',
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
            <p>You’ve just invested $12,000 in a new roof. The contractor handed you a packet of warranty paperwork and said, “Call this number.” Then life gets busy. Three years later, a shingle blows off and you realize: you don’t actually know what’s covered, who to call, or how long the process takes. In Georgia’s climate, a misunderstanding about warranty terms can cost you $3,000–$8,000. Here’s everything you need to know.</p>

            <h2>The Two Warranty Layers You Must Understand</h2>
            <p>Every residential roof in Georgia comes with two distinct warranties. Missing one is like having car insurance but forgetting you also have AAA.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '24px 0' }}>
              <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: '16px' }}>
                <h3 style={{ marginTop: 0, color: 'var(--orange)' }}>Manufacturer Warranty</h3>
                <p>Covers the <strong>shingles themselves</strong> — defects in materials, premature granule loss, color fading.</p>
                <p style={{ fontSize: '.85rem', color: '#8ea2b4' }}>This is what GAF, CertainTeed, and Owens Corning warranty.</p>
              </div>
              <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: '16px' }}>
                <h3 style={{ marginTop: 0, color: 'var(--orange)' }}>Workmanship Warranty</h3>
                <p>Covers <strong>how the roof was installed</strong> — leaks from improper flashing, nails driven too deep, incorrect valley weaving.</p>
                <p style={{ fontSize: '.85rem', color: '#8ea2b4' }}>This is what your roofer warrants — not the shingle manufacturer.</p>
              </div>
            </div>

            <h2>Manufacturer Warranty: What the Fine Print Says</h2>
            <p>We install three manufacturers in Dallas homes — here’s what their warranties actually cover:</p>

            <h3>GAF Timberline HDZ (What We Install as Standard)</h3>
            <ul>
              <li><strong>50-year limited warranty</strong> — transferable to the next homeowner, prorated after year 20.</li>
              <li><strong>Better warranty</strong> — covers algae resistance for the full 50 years.</li>
              <li><strong>Wind rating</strong> — Class 3 (110 mph winds). Class 4 (150 mph) upgrade available for $200 extra.</li>
              <li><strong>Hail rating</strong> — Class 3 (resists 2-inch steel ball impact).</li>
              <li><strong>Fine print gotcha:</strong> Warranty is prorated to <strong>25–30% of replacement cost</strong> after year 10. So a $10,000 roof replacement at year 20 gets you $2,500 from GAF — you pay the rest.</li>
            </ul>

            <h3>Premium GAF Legacy (Optional Upgrade)</h3>
            <ul>
              <li><strong>50-year limited warranty</strong> — same as HDZ but with <strong>StainGuard Plus</strong> algae protection.</li>
              <li><strong>Color care warranty</strong> — covers significant color fading (rare in Georgia).</li>
              <li><strong>Full manufacturer coverage</strong> on labor and materials if registered.</li>
              <li><strong>Fine print:</strong> Must be registered within 30 days of installation and installed by a <strong>GAF Master Elite</strong> contractor (that’s us).</li>
            </ul>

            <h2>Workmanship Warranty: What’s Really Guaranteed</h2>
            <p>Our workmanship warranty covers:</p>
            <ul>
              <li>Leaks caused by improper installation (flashing, valleys, nail placement).</li>
              <li>Wind uplift on improperly sealed shingles.</li>
              <li>Underlayment or ice/water shield defects from installation.</li>
            </ul>
            <p style={{ fontSize: '.85rem', color: '#8ea2b4', fontStyle: 'italic' }}>Note: Workmanship warranties don’t cover storm damage, acts of God, or normal wear — those are insurance claims, not warranty claims.</p>

            <h2>What’s NOT Covered (The Big Gotchas)</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', margin: '16px 0' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #eee' }}>
                  <th align="left" style={{ padding: '8px 0' }}>Exclusion</th>
                  <th align="left" style={{ padding: '8px 0' }}>Who Pays</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '6px 0' }}>Storm/hail damage</td>
                  <td style={{ padding: '6px 0' }}>Insurance claim — not a warranty issue</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '6px 0' }}>Moss/lichen growth</td>
                  <td style={{ padding: '6px 0' }}>Homeowner maintenance — requires annual treatment</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '6px 0' }}>Granule loss after 10 years</td>
                  <td style={{ padding: '6px 0' }}>Prorated manufacturer payout (often $0)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '6px 0' }}>Damage from improper maintenance</td>
                  <td style={{ padding: '6px 0' }}>Homeowner — no warranty covers neglect</td>
                </tr>
                <tr>
                  <td style={{ padding: '6px 0' }}>Color fading in non-warranted areas</td>
                  <td style={{ padding: '6px 0' }}>Usually $0 manufacturer payout</td>
                </tr>
              </tbody>
            </table>

            <h2>How Long Does a Warranty Claim Take?</h2>
            <p>Realistic timelines for Atlanta/Dallas area:</p>
            <table style={{ width: '100%', borderCollapse: 'collapse', margin: '16px 0' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #eee' }}>
                  <th align="left" style={{ padding: '8px 0' }}>Claim Type</th>
                  <th align="left" style={{ padding: '8px 0' }}>Timeline</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '6px 0' }}>Workmanship (iRoofer)</td><td style={{ padding: '6px 0' }}>2–5 business days</td></tr>
                <tr><td style={{ padding: '6px 0' }}>Manufacturer (GAF)</td><td style={{ padding: '6px 0' }}>30–60 days</td></tr>
              </tbody>
            </table>
            <p style={{ fontSize: '.85rem', color: '#8ea2b4' }}>Manufacturer claims require photo documentation, proof of purchase, and often a “field representative” visit — which costs $200 in inspection fees that the homeowner usually pays upfront.</p>

            <h2>How to File a Warranty Claim</h2>
            <p><strong>For workmanship issues (leaks, improper installation):</strong></p>
            <ol>
              <li>Call us at <a href={`tel:${brand.phone}`}>{brand.phone}</a> — we track your case in our system.</li>
              <li>Send 6–8 photos of the issue (from safe ground-level angles).</li>
              <li>We schedule a free site visit within 3 business days.</li>
              <li>We fix it, warrant the repair for 2 years, and follow up.</li>
            </ol>
            <p><strong>For manufacturer issues (shingle defects, granule loss):</strong></p>
            <ol>
              <li>We handle this for you — just call us. We’re a GAF Master Elite contractor, so we can file claims directly.</li>
              <li>GAF pays us directly — you’re not on the hook for the first $1,200. Some contractors make you pay upfront and reimburse later.</li>
              <li>Typical payout covers 75–100% of the replacement cost if you’re within 10 years of installation.</li>
            </ol>

            <h2>Transferability: What Happens When You Sell</h2>
            <p>In Georgia, the manufacturer warranty transfers to the next homeowner when you sell — but <strong>only if it was registered</strong>. We register every GAF warranty in your name automatically. At closing, hand the warranty packet to the buyer. If they don’t register within 30 days of purchase, the warranty is void.</p>
            <p><strong>Workmanship warranty does NOT transfer</strong> — it stays with us (iRoofer). If the new owner needs service, they’ll need to call us with your original invoice number.</p>

            <h2>iRoofer’s Warranty Promise</h2>
            <p>We back every roof we install with:</p>
            <ul>
              <li><strong>10-year workmanship warranty</strong> — one of the longest in the Dallas market.</li>
              <li><strong>24-hour emergency response</strong> — call us anytime, we’ll secure your roof.</li>
              <li><strong>Full warranty management</strong> — we handle manufacturer claims directly, no $200 inspection fees passed to you.</li>
              <li><strong>Annual inspection program</strong> — $99/year (includes one visit, photo report, and priority scheduling).</li>
            </ul>

            <h2>Questions About Your Warranty?</h2>
            <p>If you had your roof installed by someone else or you’re unsure what’s covered, we’ll review your paperwork for free. Call us or schedule a consultation — we’ll tell you the truth, even if we can’t help.</p>
            <p><Link href="/contact" className="btn btn-solid">Review My Warranty →</Link></p>
          </div>
        </div>
            <RelatedPosts slug="roof-warranty-what-is-covered" />
      </article>
    </>
  );
}
