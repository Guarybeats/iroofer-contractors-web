import { OG_IMAGE } from '@/lib/seo';
import PriceDisclaimer from '@/components/PriceDisclaimer';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import { brand } from '@/lib/brand';

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  alternates: { canonical: 'https://iroofercontractors.com/blog/how-to-choose-roofing-contractor-dallas-ga' },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }], url: 'https://iroofercontractors.com/blog/how-to-choose-roofing-contractor-dallas-ga' },

  title: 'How to Choose a Roofing Contractor in Dallas, GA',
  description: "Don't hire a roofer until you read this. We break down the red flags, the questions that separate pros from storm chasers, and how to verify licenses and insurance in Georgia.",
};

const post = {
  slug: 'how-to-choose-roofing-contractor-dallas-ga',
  title: 'How to Choose a Roofing Contractor in Dallas GA: 7 Red Flags & 5 Must-Ask Questions',
  date: 'June 2026',
  readTime: '8 min read',
  category: 'Homeowner Guide',
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
            <PriceDisclaimer />
          </div>

          <div className="post-body rv">
            <p>After every major storm in North Georgia, out-of-state "storm chasers" flood Dallas neighborhoods with magnetic signs and high-pressure sales. Some do decent work. Many disappear before the first leak. Here's how to tell the difference.</p>

            <h2>7 Red Flags — Walk Away If You Hear These</h2>
            <ol>
              <li><strong>"We'll waive your deductible."</strong> Illegal in Georgia. It's insurance fraud, and you're the one on the hook if the insurer audits.</li>
              <li><strong>"Sign today or the price goes up."</strong> Legitimate contractors don't use manufactured urgency. Our quotes are valid 30 days.</li>
              <li><strong>No local office, no local references.</strong> Ask for 3 addresses in Dallas, Hiram, or Douglasville they've roofed in the last 6 months. Call them.</li>
              <li><strong>{"Cash only / large upfront deposit (>10%)."} </strong> Georgia law caps deposits at 10% or $1,000, whichever is less. More is a red flag.</li>
              <li><strong>"We'll handle the insurance — you don't need to talk to them."</strong> You need to talk to your adjuster. A roofer who discourages that is hiding something.</li>
              <li><strong>No workers' comp certificate.</strong> If a crew member gets hurt on your property and they're not covered, <em>you</em> own the liability.</li>
              <li><strong>Unmarked trucks, out-of-state plates, no uniform.</strong> Professional companies brand their fleet and crew.</li>
            </ol>

            <h2>5 Questions Every Dallas Homeowner Should Ask</h2>
            <ol>
              <li><strong>"Are you licensed and insured in Georgia? Can I see the certificates?"</strong> Verify at <a href="https://sos.ga.gov" target="_blank" rel="noopener noreferrer">sos.ga.gov</a> (search "roofing contractor").</li>
              <li><strong>"Who is my project manager, and will they be on-site daily?"</strong> You want a name and phone number, not a call center.</li>
              <li><strong>"What manufacturer certifications do your installers hold?"</strong> GAF Master Elite, CertainTeed SELECT ShingleMaster, Owens Corning Preferred — these mean trained, warrantied installs.</li>
              <li><strong>"What's your workmanship warranty, and is it transferable?"</strong> Get the term in writing and ask whether it transfers — we put ours in the contract. Many offer 1–2 years, non-transferable.</li>
              <li><strong>"Can you provide a written scope of work with line-item pricing?"</strong> Vague "roof replacement — $X" quotes hide change orders. Demand detail.</li>
            </ol>

            <h2>Verify Before You Hire (5-Minute Checklist)</h2>
            <ul>
              <li>✅ Georgia Secretary of State license lookup</li>
              <li>✅ BBB profile — look for A+ and 3+ years</li>
              <li>✅ Google reviews — 50+, 4.7+, recent</li>
              <li>✅ Manufacturer cert verification (GAF, CertainTeed, OC websites)</li>
              <li>✅ Ask for Certificate of Insurance (COI) — general liability $1M+, workers' comp</li>
            </ul>

            <h2>What Makes iRoofer Different</h2>
            <ul>
              <li>Local since 2019 — Dallas, GA based, not a storm-chaser satellite office</li>
              <li>GAF Master Elite (top 2% nationally) + CertainTeed SELECT ShingleMaster</li>
              <li>Workmanship warranty in writing on every job</li>
              <li>Project manager on-site every day, direct cell number</li>
              <li>150+ roofs in Paulding, Cobb, Douglas counties — references on request</li>
            </ul>

            <h2>Get a Second Opinion — Free</h2>
            <p>Already have a quote? We'll review it line by line at no cost. No pressure to switch — just honest feedback on scope, materials, and pricing.</p>
            <RelatedPosts slug="how-to-choose-roofing-contractor-dallas-ga" />
            <p><Link href="/estimator" className="btn btn-solid">Request a Free Quote Review →</Link></p>
          </div>
        </div>
      </article>
    </>
  );
}
