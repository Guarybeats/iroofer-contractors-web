import { OG_IMAGE } from '@/lib/seo';
import PriceDisclaimer from '@/components/PriceDisclaimer';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import { brand } from '@/lib/brand';
import BlogPostingSchema from '@/components/BlogPostingSchema';

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  alternates: { canonical: 'https://iroofercontractors.com/blog/solar-panels-roof-dallas-ga' },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }], url: 'https://iroofercontractors.com/blog/solar-panels-roof-dallas-ga' },

  title: 'Solar Panels on Your Dallas, GA Roof: What to Know',
  description: 'Solar + roofing: the install order matters, flashing details make or break leaks, and removal/reinstall costs. Get it right the first time.',
};

const post = {
  slug: 'solar-panels-roof-dallas-ga',
  title: 'Solar Panels on Your Dallas Roof: What Homeowners Need to Know Before Installing',
  date: 'August 2026',
  readTime: '8 min read',
  category: 'Homeowner Guide',
};

export default function BlogPostPage() {
  return (
    <>
      <BlogPostingSchema slug="solar-panels-roof-dallas-ga" post={post} />
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
            <PriceDisclaimer />
          </div>

          <div className="post-body rv">
            <p>Solar is booming in Dallas — Georgia Power buyback rates, federal 30% tax credit, and rising electric bills make the math work. But we see 3–4 botched solar installs a year where the roof leaks within 18 months. Here's how to avoid being one of them.</p>

            <h2>The Golden Rule: Roof First, Solar Second</h2>
            <p>If your roof has fewer than 15 years of life left, replace it <em>before</em> solar goes on. Removing and reinstalling a 20-panel array costs $3,000–$5,000 — plus you void the solar workmanship warranty if a roofer touches it.</p>
            <p style={{ background: '#fff3cd', padding: '12px', borderRadius: 6, border: '1px solid #ffeaa7' }}>
              <strong>Real scenario:</strong> Homeowner installs solar on 12-year-old architectural shingles. Year 3: leak at a racking penetration. Solar company says "not our fault, roof is old." Roofer says "can't warranty, solar rails in the way." Homeowner pays twice.
            </p>

            <h2>Roof Age Guidelines for Solar</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', margin: '16px 0' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '6px 0' }}><strong>Roof Age</strong></td><td style={{ padding: '6px 0', textAlign: 'center' }}><strong>Action</strong></td></tr>
                <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '6px 0' }}>0–5 years</td><td style={{ padding: '6px 0', textAlign: 'center' }}>✅ Solar ready — coordinate with solar co.</td></tr>
                <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '6px 0' }}>6–10 years</td><td style={{ padding: '6px 0', textAlign: 'center' }}>⚠️ Inspect first — likely OK if architectural</td></tr>
                <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '6px 0' }}>11–15 years</td><td style={{ padding: '6px 0', textAlign: 'center' }}>⚠️ Replace if 3-tab; assess if architectural</td></tr>
                <tr><td style={{ padding: '6px 0' }}>15+ years</td><td style={{ padding: '6px 0', textAlign: 'center' }}>❌ Replace first — no exceptions</td></tr>
              </tbody>
            </table>

            <h2>The 4 Flashing Details That Prevent Leaks</h2>
            <ol>
              <li><strong>Flashing feet, not lag bolts through shingles.</strong> Every penetration needs a flashed base (aluminum or galvanized) that integrates with step flashing — not a lag bolt caulked over.</li>
              <li><strong>Double-flashed attachments.</strong> Base flash + counter-flash. We use Quick Mount PV or Unirac FlashFoot2 — engineered, tested, warrantied.</li>
              <li><strong>No penetrations on low-slope sections.</strong> 2:12 or less? Ballasted racking only. Penetrations on low slope = guaranteed leak.</li>
              <li><strong>Conduit flashing at the roof-to-wall transition.</strong> The #1 leak spot we see: where solar conduit enters the attic. Needs a proper pipe boot + counter-flash.</li>
            </ol>

            <h2>Who Warrants What?</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', margin: '16px 0' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #ddd' }}>
                  <th style={{ padding: '8px', textAlign: 'left' }}>Component</th>
                  <th style={{ padding: '8px', textAlign: 'center' }}>Warrantied By</th>
                  <th style={{ padding: '8px', textAlign: 'center' }}>Typical Term</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '6px' }}>Roof shingles</td><td style={{ padding: '6px', textAlign: 'center' }}>Manufacturer (GAF, etc.)</td><td style={{ padding: '6px', textAlign: 'center' }}>30–50 yr</td></tr>
                <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '6px' }}>Roof workmanship</td><td style={{ padding: '6px', textAlign: 'center' }}>Roofing contractor</td><td style={{ padding: '6px', textAlign: 'center' }}>10 yr (us)</td></tr>
                <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '6px' }}>Racking/flashing</td><td style={{ padding: '6px', textAlign: 'center' }}>Solar installer</td><td style={{ padding: '6px', textAlign: 'center' }}>10–25 yr</td></tr>
                <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '6px' }}>Panels (product)</td><td style={{ padding: '6px', textAlign: 'center' }}>Panel manufacturer</td><td style={{ padding: '6px', textAlign: 'center' }}>25 yr</td></tr>
                <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '6px' }}>Panels (performance)</td><td style={{ padding: '6px', textAlign: 'center' }}>Panel manufacturer</td><td style={{ padding: '6px', textAlign: 'center' }}>25 yr (80%+)</td></tr>
                <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '6px' }}>Inverter</td><td style={{ padding: '6px', textAlign: 'center' }}>Inverter manufacturer</td><td style={{ padding: '6px', textAlign: 'center' }}>10–25 yr</td></tr>
                <tr><td style={{ padding: '6px' }}>Solar workmanship</td><td style={{ padding: '6px', textAlign: 'center' }}>Solar installer</td><td style={{ padding: '6px', textAlign: 'center' }}>5–10 yr</td></tr>
              </tbody>
            </table>
            <p><strong>Critical:</strong> Get written confirmation from <em>both</em> contractors that the other's work doesn't void their warranty. We sign a coordination letter with every solar partner.</p>

            <h2>Removal & Reinstall: The Hidden Cost</h2>
            <p>If you <em>must</em> replace the roof under existing solar:</p>
            <ul>
              <li>Solar company removes panels + racking: $1,500–$2,500</li>
              <li>We replace roof: $8,000–$30,000</li>
              <li>Solar company reinstalls + re-permits: $1,500–$2,500</li>
              <li><strong>Total adder: $3,000–$5,000</strong> + 2–3 weeks without solar production</li>
            </ul>
            <p>Some solar PPAs/leases require <em>their</em> approved roofer — check your contract.</p>

            <h2>Our Solar-Ready Roof Package</h2>
            <p>We work with 3 vetted Dallas-area solar installers. When you bundle:</p>
            <ul>
              <li>Single point of contact — we manage the schedule</li>
              <li>Coordinated flashing plan — zero finger-pointing</li>
              <li>Combined warranty letter — both warranties intact</li>
              <li>Preferred pricing on both sides</li>
            </ul>

            <h2>Thinking Solar? Start With a Roof Assessment.</h2>
            <p>We'll tell you exactly how much life your roof has left, whether it's solar-ready, and what (if anything) needs doing first. Free for Dallas GA homeowners.</p>
            <RelatedPosts slug="solar-panels-roof-dallas-ga" />
            <p><Link href="/estimator/" className="btn btn-solid">Get a Solar-Ready Roof Assessment →</Link></p>
          </div>
        </div>
      </article>
    </>
  );
}