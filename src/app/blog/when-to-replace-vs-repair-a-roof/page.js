import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import { notFound } from 'next/navigation';

const post = {
  slug: 'when-to-replace-vs-repair-a-roof',
  title: 'Roof Replacement vs. Roof Repair: When to Tear Off vs. Patch',
  date: 'October 2026',
  readTime: '8 min read',
  category: 'Maintenance',
};

export const metadata = {
  alternates: { canonical: 'https://iroofercontractors.com/blog/when-to-replace-vs-repair-a-roof' },
  openGraph: { url: 'https://iroofercontractors.com/blog/when-to-replace-vs-repair-a-roof' },

  title: 'Roof Replacement vs. Roof Repair: When to Tear Off vs. Patch',
  description: 'How to decide between roof repair and full replacement. Signs you need a new roof, when patching makes sense, and what to expect for cost and timeline in Dallas, GA.',
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
            <p>Georgia weather is kind — until it isn't. Hail the size of quarters, wind gusts that peel shingles, and summer heat that bakes asphalt until it cracks. The question every Dallas homeowner faces after a storm: <strong>repair or replace</strong>?</p>

            <h2>Signs You Need a Full Roof Replacement</h2>
            <p>These red flags mean it's time to tear off and start fresh:</p>
            <ul>
              <li><strong>Missing or cracked shingles</strong> visible from the ground — especially in clusters larger than a dinner plate</li>
              <li><strong>Granule loss</strong> — let it go</li>
              <li><strong>Sagging deck</strong> or soft spots underfoot (only safe if you <em>don't</em> walk on it)</li>
              <li><strong>Age over 15 years</strong> with original asphalt shingles — manufacturers recommend replacement</li>
              <li><strong>Multiple leak spots</strong> or water stains appearing after every major storm</li>
            </ul>

            <h2>When Roof Repair Makes Sense</h2>
            <p>Not every issue warrants a full tear-off:</p>
            <ul>
              <li><strong>Single missing or cracked shingle</strong> — patch, seal, and monitor</li>
              <li><strong>Small puncture</strong> (tennis ball, branch) — patch from the inside or replace 1-2 shingles</li>
              <li><strong>Flashing leak</strong> around chimney or vent — re-seal the flashing</li>
              <li><strong>Lift edge (6 inches or less)</strong> — glue down with roofing adhesive</li>
            </ul>

            <h2>How to Decide in 5 Questions</h2>
            <ol>
              <li><strong>How many shingles are damaged?</strong> If it's 1-2 out of hundreds, repair. If 10+ in one area, replace that slope at minimum.</li>
              <li><strong>How old is the roof?</strong> Under 10? Repair likely fine. Over 20? Replacement may be more cost-effective long-term.</li>
              <li><strong>Are there recurring leaks?</strong> Multiple leaks in different spots usually signal systemic failure — time to replace.</li>
              <li><strong>Is insurance covering it?</strong> If your insurer offers Actual Cash Value (depreciated) vs. Replacement Cost, you may come out ahead replacing.</li>
              <li><strong>What's your timeline?</strong> Emergency? Temporary patch. Planning ahead? Full replacement.</li>
            </ol>

            <h2>What to Expect: Timeline & Cost</h2>
            <p><strong>Roof repair:</strong> 1-3 hours, $150-$500 for minor fixes. We can often schedule same-day.</p>
            <p><strong>Roof replacement:</strong> 1-2 days for tear-off + install, $8,000-$30,000 depending on square footage and materials. We provide exact quotes with no obligation.</p>

            <h2>Still Unsure? Get a Second Opinion</h2>
            <p>Every roof inspection from iRoofer includes a detailed written report with photos. No pressure, no upsell. If you're within your insurance window, we'll help you document the damage for your claim.</p>
            <RelatedPosts slug="when-to-replace-vs-repair-a-roof" />
            <p><Link href="/estimator" className="btn btn-solid">Get a Free Roof Inspection →</Link></p>
          </div>
        </div>
      </article>
    </>
  );
}
