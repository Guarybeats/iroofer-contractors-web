import { OG_IMAGE } from '@/lib/seo';
import PriceDisclaimer from '@/components/PriceDisclaimer';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import { brand } from '@/lib/brand';
import BlogPostingSchema from '@/components/BlogPostingSchema';

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  alternates: { canonical: 'https://iroofercontractors.com/blog/skylight-leak-repair-dallas-ga' },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }], url: 'https://iroofercontractors.com/blog/skylight-leak-repair-dallas-ga' },

  title: 'Skylight Leak Repair in Dallas, GA',
  description: 'Skylights are a common source of roof leaks in Dallas homes. Why they fail, leak vs. condensation, and when to repair or replace.',
};

const post = {
  slug: 'skylight-leak-repair-dallas-ga',
  title: 'Skylight Leak Repair in Dallas GA: Why They Leak, How We Fix Them, and When to Replace',
  date: 'July 2026',
  readTime: '6 min read',
  category: 'Repairs',
};

export default function BlogPostPage() {
  return (
    <>
      <BlogPostingSchema slug="skylight-leak-repair-dallas-ga" post={post} />
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
            <p>We get the call every spring: "Water's dripping from my skylight after the rain." Skylight leaks are one of the most common non-storm roof repairs we see around Dallas. Here's why they fail and what to do.</p>

            <h2>Why Skylights Leak (The 4 Most Common Causes)</h2>
            <ol>
              <li><strong>Failed flashing:</strong> The step flashing and counter-flashing around the curb is the first line of defense. Georgia's freeze-thaw cycles crack sealant, and wind-driven rain finds the gaps.</li>
              <li><strong>Condensation (not a leak):</strong> In humid Georgia summers, warm moist air hits the cold glass — looks like a leak, but it's interior condensation. Proper ventilation and insulated glazing fix this.</li>
              <li><strong>Cracked or yellowed dome:</strong> Older acrylic domes (pre-2005) become brittle. Hail cracks them; UV yellows them. Water follows the cracks.</li>
              <li><strong>Improper installation:</strong> No ice & water shield under the curb, shingles not woven into step flashing, curb too low ({"<"} 4&quot;). It's more common than you'd think.</li>
            </ol>

            <h2>Repair vs. Replace: The Decision Matrix</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', margin: '16px 0' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #ddd' }}>
                  <th style={{ padding: '8px', textAlign: 'left' }}></th>
                  <th style={{ padding: '8px', textAlign: 'center' }}>Repair</th>
                  <th style={{ padding: '8px', textAlign: 'center' }}>Replace</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '6px' }}>Flashing only</td><td style={{ padding: '6px', textAlign: 'center' }}>✅ Usually</td><td style={{ padding: '6px', textAlign: 'center' }}>Overkill</td></tr>
                <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '6px' }}>Cracked dome, frame OK</td><td style={{ padding: '6px', textAlign: 'center' }}>✅ Dome swap</td><td style={{ padding: '6px', textAlign: 'center' }}>Optional</td></tr>
                <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '6px' }}>Rotted curb / frame</td><td style={{ padding: '6px', textAlign: 'center' }}>❌ Band-aid</td><td style={{ padding: '6px', textAlign: 'center' }}>✅ Usually</td></tr>
                <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '6px' }}>Old original unit</td><td style={{ padding: '6px', textAlign: 'center' }}>❌ Recurring</td><td style={{ padding: '6px', textAlign: 'center' }}>✅ Modern glazing</td></tr>
                <tr><td style={{ padding: '6px' }}>Multiple past repairs</td><td style={{ padding: '6px', textAlign: 'center' }}>❌ Diminishing returns</td><td style={{ padding: '6px', textAlign: 'center' }}>✅ Fresh warranty</td></tr>
              </tbody>
            </table>

            <h2>What a Proper Skylight Replacement Includes</h2>
            <p>We don't just swap the unit. A full replacement means:</p>
            <ul>
              <li>Remove the shingles around the curb</li>
              <li>Remove old curb, inspect deck for rot</li>
              <li>Rebuild the curb if needed, to the manufacturer’s and code height requirements</li>
              <li>Ice & water shield full wrap + step flashing woven into each shingle course</li>
              <li>A new unit with the manufacturer’s flashing kit and warranty</li>
              <li>Re-shingle with architectural shingles to match</li>
            </ul>

            <h2>Insurance: Does It Cover Skylight Leaks?</h2>
            <p>If a covered peril (hail, wind, fallen tree) damaged the skylight — yes. If it's age/wear/poor install — no. We document the cause with photos and a written report for your adjuster.</p>

            <h2>Prevention: Annual Skylight Checklist</h2>
            <ul>
              <li>Inspect flashing sealant every spring — re-caulk with polyurethane (not silicone)</li>
              <li>Clear debris from the curb corners — leaves hold moisture</li>
              <li>Check interior for condensation stains — add a vent fan if needed</li>
              <li>After hail: have a roofer inspect the glass for micro-cracks</li>
            </ul>

            <h2>Leaking Skylight? We'll Diagnose It Free.</h2>
            <p>Not sure if it's a leak or condensation? We'll climb up, run a hose test, and tell you exactly what's happening — no charge if you're in our service area. Book at <Link href="/contact/">https://iroofercontractors.com/contact/</Link> or call (470) 236-1410.</p>
            <RelatedPosts slug="skylight-leak-repair-dallas-ga" />
            <p><Link href="/contact/" className="btn btn-solid">Schedule a skylight inspection →</Link></p>
          </div>
        </div>
      </article>
    </>
  );
}