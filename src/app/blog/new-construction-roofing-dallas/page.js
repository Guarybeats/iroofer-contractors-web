import { OG_IMAGE } from '@/lib/seo';
import PriceDisclaimer from '@/components/PriceDisclaimer';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import BlogPostingSchema from '@/components/BlogPostingSchema';

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  alternates: { canonical: 'https://iroofercontractors.com/blog/new-construction-roofing-dallas' },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }], url: 'https://iroofercontractors.com/blog/new-construction-roofing-dallas' },

  title: 'New Construction Roofing in Dallas, GA',
  description:
    'From permit requirements to shingle selection to warranty coordination — a checklist for builders installing roofs on new Dallas homes.',
};

const post = {
  slug: 'new-construction-roofing-dallas',
  title: 'New Construction Roofing in Dallas GA: What Builders Need to Know',
  date: 'January 2026',
  readTime: '5 min read',
  category: 'New Construction',
};

export default function BlogPostPage() {
  return (
    <>
      <BlogPostingSchema slug="new-construction-roofing-dallas" post={post} />
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
            <p>Roofing a new home is different from replacing an old roof. You start with a clean deck, but you’re also working inside a builder’s schedule, the inspection sequence, and a homeowner’s expectations. Here’s what we pay attention to when we roof new construction around Dallas.</p>

            <h2>Permits and inspections</h2>
            <p>New-construction roofing is covered under the home’s building permit, and inspections follow the local jurisdiction’s sequence. Requirements and fees differ between Paulding County, Cobb County and the cities inside them, so confirm with the jurisdiction issuing the permit. We coordinate our work around the builder’s inspection schedule.</p>

            <h2>Before shingles go on</h2>
            <ul>
              <li><strong>Deck:</strong> sheathing installed to spec with proper spacing and fastening, no damaged or wet panels left in place.</li>
              <li><strong>Edges:</strong> drip edge at eaves and rakes, installed in the right order with the underlayment.</li>
              <li><strong>Underlayment:</strong> synthetic underlayment over the field, ice and water shield at valleys, penetrations and other vulnerable areas as the manufacturer and code require.</li>
              <li><strong>Ventilation:</strong> enough soffit intake and ridge exhaust for the attic. Getting this right on day one is much easier than fixing it later.</li>
            </ul>

            <h2>Shingle selection</h2>
            <p>Architectural asphalt shingles are the usual choice on new homes around Dallas. As an Owens Corning Preferred contractor, we install Owens Corning systems when that line fits the build. Color and line are usually set by the builder’s spec or the homeowner’s selections. See <Link href="/blog/architectural-vs-3-tab-shingles/">architectural vs. 3-tab shingles</Link>.</p>

            <h2>Warranties: who covers what</h2>
            <ul>
              <li><strong>Manufacturer warranty:</strong> covers the shingles and system components per the manufacturer’s terms. Registration requirements vary by product line.</li>
              <li><strong>Contractor workmanship:</strong> covers installation. Ask for the terms in writing.</li>
              <li><strong>Builder warranty:</strong> whatever the builder provides to the homeowner.</li>
            </ul>
            <p>Make sure everyone knows who registers the manufacturer warranty and who the homeowner calls if there’s a problem.</p>

            <h2>Scheduling</h2>
            <p>How long a new roof takes depends on the size and complexity of the roof, crew size, weather and inspection timing. We give the builder a realistic window in writing and keep them updated if weather moves it.</p>

            <h2>What builders tell us matters</h2>
            <ul>
              <li><strong>Showing up when we say.</strong></li>
              <li><strong>Clean sites:</strong> magnet sweeps and debris hauled off.</li>
              <li><strong>Photos at milestones</strong>, so the builder knows the work is done right even when they’re not on site.</li>
              <li><strong>One point of contact</strong> who answers the phone.</li>
            </ul>

            <h2>Talk to us about your next build</h2>
            <p>iRoofer Contractors is family-owned in Dallas, GA since 2019. Send us your plans and schedule, and we’ll put pricing in writing. See <Link href="/new-construction-dallas-ga/">new construction roofing in Dallas, GA</Link>, request a quote at <Link href="/contact/">https://iroofercontractors.com/contact/</Link>, or call (470) 236-1410.</p>
            <p><Link href="/new-construction-dallas-ga/" className="btn btn-solid">New construction roofing →</Link></p>
          </div>
        </div>
            <RelatedPosts slug="new-construction-roofing-dallas" />
      </article>
    </>
  );
}
