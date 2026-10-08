import { OG_IMAGE } from '@/lib/seo';
import PriceDisclaimer from '@/components/PriceDisclaimer';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import { brand } from '@/lib/brand';
import BlogPostingSchema from '@/components/BlogPostingSchema';

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  alternates: { canonical: 'https://iroofercontractors.com/blog/how-to-choose-roofing-contractor-dallas-ga' },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }], url: 'https://iroofercontractors.com/blog/how-to-choose-roofing-contractor-dallas-ga' },

  title: 'How to Choose a Roofing Contractor in Dallas, GA',
  description: 'Red flags, the questions that separate pros from storm chasers, and how to verify a roofer’s license and insurance in Georgia.',
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
      <BlogPostingSchema slug="how-to-choose-roofing-contractor-dallas-ga" post={post} />
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
              <li><strong>"We'll waive your deductible."</strong> Covering or rebating your deductible can be insurance fraud, and you can end up on the hook too.</li>
              <li><strong>"Sign today or the price goes up."</strong> Legitimate contractors don't use manufactured urgency. Ask how long a quote is good for and get it in writing.</li>
              <li><strong>No local office, no local references.</strong> Ask for recent local references and a local address you can verify.</li>
              <li><strong>Cash only, or a large deposit before any materials arrive.</strong> Understand exactly what a deposit pays for and when, and get it in the contract.</li>
              <li><strong>"We'll handle the insurance — you don't need to talk to them."</strong> You need to talk to your adjuster. A roofer who discourages that is hiding something.</li>
              <li><strong>No workers' comp certificate.</strong> If a crew member gets hurt on your property and they're not covered, <em>you</em> own the liability.</li>
              <li><strong>Unmarked trucks, out-of-state plates, no uniform.</strong> Professional companies brand their fleet and crew.</li>
            </ol>

            <h2>5 Questions Every Dallas Homeowner Should Ask</h2>
            <ol>
              <li><strong>"Can I see your Georgia license and a current certificate of insurance?"</strong> Ask what license they hold and look it up with the Georgia Secretary of State’s licensing verification at <a href="https://sos.ga.gov" target="_blank" rel="noopener noreferrer">sos.ga.gov</a>.</li>
              <li><strong>"Who is my project manager, and will they be on-site daily?"</strong> You want a name and phone number, not a call center.</li>
              <li><strong>"What manufacturer certifications do your installers hold?"</strong> GAF Master Elite, Owens Corning Preferred, and similar manufacturer programs — these mean trained, warrantied installs.</li>
              <li><strong>"What's your workmanship warranty, and is it transferable?"</strong> Get the terms in writing and ask whether they transfer if you sell.</li>
              <li><strong>"Can you provide a written scope of work with line-item pricing?"</strong> A single lump-sum "roof replacement" line hides change orders. Demand detail.</li>
            </ol>

            <h2>Verify Before You Hire</h2>
            <ul>
              <li>✅ Georgia Secretary of State license lookup</li>
              <li>✅ BBB profile and complaint history</li>
              <li>✅ Google reviews — read recent ones, not just the star average</li>
              <li>✅ Manufacturer cert verification (check the manufacturer’s own contractor locator)</li>
              <li>✅ Ask for a current Certificate of Insurance (COI) for general liability and workers' comp</li>
            </ul>

            <h2>What Makes iRoofer Different</h2>
            <ul>
              <li>Local since 2019 — Dallas, GA based, not a storm-chaser satellite office</li>
              <li>Owens Corning Preferred Contractor</li>
              <li>Family-owned, led by owner Cristian Mendez — you talk to a real person at (470) 236-1410</li>
              <li>Written scope and pricing after a free inspection</li>
            </ul>

            <h2>Get a Second Opinion — Free</h2>
            <p>Already have a quote? We'll review it line by line at no cost. No pressure to switch — just honest feedback on scope, materials, and pricing.</p>
            <RelatedPosts slug="how-to-choose-roofing-contractor-dallas-ga" />
            <p><Link href="/contact/" className="btn btn-solid">Request a free quote review →</Link></p>
          </div>
        </div>
      </article>
    </>
  );
}
