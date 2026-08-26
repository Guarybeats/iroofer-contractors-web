import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata = {
  alternates: { canonical: 'https://iroofercontractors.com/blog/new-construction-roofing-dallas' },
  openGraph: { url: 'https://iroofercontractors.com/blog/new-construction-roofing-dallas' },

  title: 'New Construction Roofing in Dallas, GA',
  description:
    'From permit requirements to shingle selection to warranty coordination — a checklist for builders installing roofs on new Dallas homes.',
};

const post = {
  slug: 'new-construction-roofing-dallas',
  title: 'New Construction Roofing in Dallas GA: What Builders Need to Know',
  date: 'December 2026',
  readTime: '9 min read',
  category: 'New Construction',
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
            <p>Installing a roof on new construction is different from replacing an old one. You’re working with a blank canvas, but also with deadlines, inspections, and a builder’s reputation on the line. This checklist covers everything we do differently when partnering with Dallas-area builders on new homes.</p>

            <h2>Permit Requirements in Paulding and Cobb Counties</h2>
            <p>You need two separate permits for a new roof in Dallas GA:</p>
            <ol>
              <li><strong>Building permit</strong> — required for any new roof structure. Covers framing, sheathing, and deck inspection.</li>
              <li><strong> roofing permit</strong> — required for shingle installation. Covers underlayment, flashing, and final inspection.</li>
            </ol>
            <p>Both are issued through <a href="https://www.paulding.gov" target="_blank">Paulding County Building Services</a> (or <a href="https://www.cobbcounty.org" target="_blank">Cobb County</a> if you're in the northern sections). Fees are $150–$300 per permit. We handle permit pull and scheduling for our builder partners.</p>

            <h2>Roof Deck Inspection: What the Inspector Looks For</h2>
            <p>Before you can start shingles, the inspector checks:</p>
            <ul>
              <li><strong>Sheathing support</strong> — 7/16" OSB minimum, installed right-side out with 1/8" gaps between panels.</li>
              <li><strong>Rafters/Roof trusses</strong> — 16" or 24" on center, properly braced per engineer specs.</li>
              <li><strong>Drip edge & ice/water shield</strong> — must extend 2 inches past fascia, 6 feet up eave edge in ice-prone zones.</li>
              <li><strong>Eave overhang</strong> — 12–18 inches minimum for proper water shedding.</li>
            </ul>
            <p><strong>Tip:</strong> Schedule the deck inspection before HVAC installs. After HVAC, you might need to patch and re-inspect.</p>

            <h2>Shingle Selection: What We Install on New Homes</h2>
            <p>We keep three materials on the spec sheet for Dallas new construction:</p>
            <ul>
              <li><strong>Architectural shingles (GAF Timberline HDZ)</strong> — $3.50–$5.50/sq ft. Our default for 70% of builds. Class 3 impact rating, 50-year warranty.</li>
              <li><strong>Premium/laminated shingles (GAF Legacy)</strong> — $5.50–$7.50/sq ft. Color blends that match high-end homes. Class 4 impact rating.</li>
              <li><strong> Metal roofing (26-gauge standing seam)</strong> — $7–$12/sq ft. For modern, southwestern, or wildfire-prone builds.</li>
            </ul>
            <p>We always install with ice & water shield at eaves, synthetic underlayment (GAF FeltMax or similar), and ridge vent — not just for warranty, but because Dallas weather rewards it.</p>

            <h2>Warranty Coordination: Who Covers What</h2>
            <p>In Georgia, new home roofing warranties come from three sources:</p>
            <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: 6, margin: '16px 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr><td style={{ padding: '4px 0' }}><strong>Manufacturer warranty</strong></td><td style={{ padding: '4px 0' }}>50-year on shingles, 30-year on underlayment. Registered by us, transferable at sale.</td></tr>
                  <tr><td style={{ padding: '4px 0' }}><strong>Workmanship warranty</strong></td><td style={{ padding: '4px 0' }}>10-year from us (includes leaks from improper installation).</td></tr>
                  <tr><td style={{ padding: '4px 0' }}><strong>Home builder warranty</strong></td><td style={{ padding: '4px 0' }}>1-year on workmanship, 2–10 years on major defects (per GA law).</td></tr>
                </tbody>
              </table>
            </div>
            <p>We coordinate warranty registration so the homeowner gets all three — no gaps.</p>

            <h2>Timeline: How Long a New Roof Takes</h2>
            <p>On a typical single-family home (2,000–3,000 sqft roof):</p>
            <ul>
              <li><strong>Day 1</strong> — Deck inspection, ice/water shield, underlayment (3–4 workers, 4–6 hours).</li>
              <li><strong>Day 2</strong> — Shingles, ridge vent, flashing, cleanup (4–6 workers, 6–8 hours).</li>
              <li><strong>Day 3</strong> — Final inspection, punch list, warranty paperwork.</li>
            </ul>
            <p>Weather permitting, the whole job is done in 2 days. Add 1 day for inspection backlog during peak season (May–September).</p>

            <h2>What Builders Tell Us They Want</h2>
            <p>From 85 builder partnerships across Dallas, Hiram, and Douglasville, we’ve learned:</p>
            <ul>
              <li><strong>Accurate schedules</strong> — we commit to a time window and stick to it.</li>
              <li><strong>Clean job sites</strong> — we run magnets after every job and bag all debris.</li>
              <li><strong>Quality reports</strong> — we send photos at each milestone (deck complete, underlayment done, shingles done).</li>
              <li><strong>Pricing that scales</strong> — volume discounts for 5+ homes, fixed-price contracts.</li>
            </ul>

            <h2>Our Builder Partnership Program</h2>
            <p>When you partner with iRoofer for new construction roofing:</p>
            <ul>
              <li>Free estimate and material consultation before you commit.</li>
              <li>Priority scheduling — we block 2 days on your timeline.</li>
              <li>Direct billing to the builder; homeowner handles manufacturer registration.</li>
              <li>10-year workmanship warranty, 2-year emergency response guarantee.</li>
            </ul>

            <h2>Working with Builders Across North Georgia</h2>
            <p>Since 2019, we’ve roofed 150+ new homes in Dallas, Douglasville, Hiram, Powder Springs, Marietta, Acworth, and Kennesaw. We work with both custom home builders and production builders (30+ homes/year). Every project manager is OSHA-certified, and we carry $2M general liability + workers’ comp.</p>

            <h2>Ready to Partner on Your Next Build?</h2>
            <p>Schedule a free consultation — we’ll review your specs, provide exact pricing, and coordinate with your timeline. No call center, no middleman.</p>
            <p><Link href="/new-construction" className="btn btn-solid">Talk to a Builder Specialist →</Link></p>
          </div>
        </div>
            <RelatedPosts slug="new-construction-roofing-dallas" />
      </article>
    </>
  );
}
