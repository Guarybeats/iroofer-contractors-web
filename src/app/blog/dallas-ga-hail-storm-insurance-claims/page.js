import { OG_IMAGE } from '@/lib/seo';
import PriceDisclaimer from '@/components/PriceDisclaimer';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import BlogPostingSchema from '@/components/BlogPostingSchema';

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  alternates: { canonical: 'https://iroofercontractors.com/blog/dallas-ga-hail-storm-insurance-claims' },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }], url: 'https://iroofercontractors.com/blog/dallas-ga-hail-storm-insurance-claims' },

  title: 'Hail Damage Insurance Claims | Dallas, GA Roofing',
  description:
    'After hail in Dallas, GA: how to document roof damage, meet the adjuster, understand your deductible and what to do if the estimate looks short.',
};

const post = {
  slug: 'dallas-ga-hail-storm-insurance-claims',
  title: 'Dallas, GA Hail Damage: How to Document and File a Roof Insurance Claim',
  date: 'December 2025',
  readTime: '7 min read',
  category: 'Storm Damage',
};

export default function BlogPostPage() {
  return (
    <>
      <BlogPostingSchema slug="dallas-ga-hail-storm-insurance-claims" post={post} />
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
            <p>Dallas and Paulding County get their share of spring and summer hail. When a storm rolls through, your roof takes a beating, and a lot of homeowners are filing an insurance claim for the first time. Here’s how to document damage, work with the adjuster, and what to do if the first offer looks short. Your policy decides what’s covered; this guide is about giving it the best information to work with.</p>

            <h2>Why claims get disputed</h2>
            <p>The most common problem is <strong>weak documentation</strong>. Adjusters look for hail impacts on shingles, granule loss, and dents on soft metals like vents, gutters and downspouts. Without clear photos taken soon after the storm, it’s easier for damage to be called “pre-existing” or “normal wear.”</p>

            <h2>Step 1: Document soon after the storm</h2>
            <p>From the ground and inside, before anything is repaired:</p>
            <ol>
              <li><strong>Every side of the roof you can safely see.</strong></li>
              <li><strong>Gutters, downspouts and vents</strong>, where hail leaves visible dents.</li>
              <li><strong>Siding, fences, screens and cars</strong>, which show the storm hit your property.</li>
              <li><strong>Hail on the ground</strong>, with something for scale, if it’s still there.</li>
              <li><strong>Any interior leaks or stains.</strong></li>
            </ol>
            <p>Don’t walk on the roof. Let a roofer get up there.</p>

            <h2>Step 2: Get a roof inspection</h2>
            <p>A local roofer can inspect the roof, photograph damage slope by slope, and tell you whether it looks like hail damage worth a claim, or wear that isn’t. A good roofer will:</p>
            <ul>
              <li>Inspect for free and without pressure.</li>
              <li>Give you photos and a written scope.</li>
              <li>Help you think through whether the damage is likely to exceed your deductible.</li>
              <li>Never pressure you into signing before you understand your claim.</li>
            </ul>

            <h2>Step 3: File and meet the adjuster</h2>
            <p>You file the claim with your insurance company. Check your policy for its deadlines and notice requirements, and file promptly. When the adjuster comes out, be there if you can, or have your roofer there. Point out:</p>
            <ul>
              <li>Hail hits on shingles (dark bruises or spots where granules are knocked off).</li>
              <li>Granules in the gutters and at downspout outlets.</li>
              <li>Dents in vents, flashing, gutters and siding.</li>
              <li>Any slopes the adjuster didn’t look at.</li>
            </ul>

            <h2>Step 4: If the estimate looks short</h2>
            <ol>
              <li><strong>Ask questions in writing.</strong> Ask what was included, what wasn’t, and why.</li>
              <li><strong>Request a re-inspection</strong> if damage was missed.</li>
              <li><strong>Send supporting documentation:</strong> your photos and the roofer’s written scope of what’s missing.</li>
              <li><strong>Know your options.</strong> Some homeowners hire a licensed public adjuster (they charge a fee), and the Georgia Office of Insurance and Safety Fire Commissioner takes consumer complaints.</li>
            </ol>

            <h2>About the deductible</h2>
            <p>Many Georgia policies have a separate wind/hail deductible, sometimes written as a percentage of the home’s insured value rather than a flat amount. Check your declarations page. If the damage is below your deductible, a claim may not pay anything, so it’s worth knowing your number before you file.</p>

            <h2>How we help after a storm</h2>
            <ul>
              <li>Free roof inspection with photos of every damaged surface we find.</li>
              <li>A written scope of what needs to be repaired or replaced.</li>
              <li>We help you document damage for your insurance claim and can meet your adjuster on-site.</li>
              <li>We schedule the work once you’re ready.</li>
            </ul>
            <p>We don’t promise claim outcomes. Your policy and your insurer decide that. See <Link href="/services/roof-insurance-claims/">roof insurance claims help</Link>, <Link href="/storm-damage-roof-repair-dallas-ga/">storm damage roof repair in Dallas</Link>, and our <Link href="/blog/georgia-hail-storm-roof-checklist/">hail damage roof checklist</Link>.</p>

            <h2>Not sure whether you have damage?</h2>
            <p>Book a free storm-damage inspection at <Link href="/contact/">https://iroofercontractors.com/contact/</Link> or call (470) 236-1410. You’ll get photos and a written report, with no pressure and no obligation.</p>
            <p><Link href="/contact/" className="btn btn-solid">Schedule a free storm-damage inspection →</Link></p>
          </div>
        </div>
            <RelatedPosts slug="dallas-ga-hail-storm-insurance-claims" />
      </article>
    </>
  );
}
