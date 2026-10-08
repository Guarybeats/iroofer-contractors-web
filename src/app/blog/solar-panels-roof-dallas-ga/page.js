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
  readTime: '5 min read',
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
            <p>More Dallas-area homeowners are adding solar. Panels sit on your roof for decades, so the roof underneath matters as much as the panels. Here’s what to think about before the racking goes on.</p>

            <h2>Roof first, solar second</h2>
            <p>If your roof is getting near the end of its life, it usually makes sense to replace it <em>before</em> solar goes on. Replacing a roof under an existing array means paying to have the panels and racking removed and reinstalled, and the system is offline while that happens. A roof inspection before you sign a solar contract tells you where you stand.</p>
            <p style={{ background: '#fff3cd', padding: '12px', borderRadius: 6, border: '1px solid #ffeaa7' }}>
              <strong>A common problem:</strong> a leak shows up at a racking penetration, and the solar company and the roofer each say it’s the other’s responsibility. Sorting out who is responsible for what <em>before</em> installation avoids that.
            </p>

            <h2>How to judge whether your roof is solar-ready</h2>
            <ul>
              <li><strong>Shingle condition:</strong> granule loss, curling, cracking or brittle shingles mean the roof may not outlast the panels.</li>
              <li><strong>Decking:</strong> soft spots or sagging need to be fixed first.</li>
              <li><strong>Flashing and penetrations:</strong> worn pipe boots and flashing are easier to replace before panels cover them.</li>
              <li><strong>Age and history:</strong> past leaks, storm damage, or a roof installed over an older layer all factor in.</li>
            </ul>

            <h2>Flashing details that prevent leaks</h2>
            <ol>
              <li><strong>Flashed attachments.</strong> Every roof penetration for racking should use a flashed mount that ties into the shingle courses, not a bolt sealed with caulk.</li>
              <li><strong>Mounts follow the manufacturer’s instructions</strong> for the roof type and slope.</li>
              <li><strong>Low-slope sections</strong> need attachment methods designed for low slope.</li>
              <li><strong>Conduit and wire penetrations</strong> into the attic need proper boots and flashing too. They’re a frequent leak point.</li>
            </ol>

            <h2>Who warrants what?</h2>
            <ul>
              <li><strong>Shingles:</strong> the shingle manufacturer, per its warranty terms.</li>
              <li><strong>Roof workmanship:</strong> your roofing contractor.</li>
              <li><strong>Racking, mounts and roof penetrations from the solar install:</strong> usually the solar installer.</li>
              <li><strong>Panels and inverter:</strong> their manufacturers.</li>
            </ul>
            <p>Get it in writing from both contractors that the other’s work won’t void their warranty, and read your solar contract. Some leases and PPAs require their own approved roofer for removal and reinstall.</p>

            <h2>Start with a roof assessment</h2>
            <p>We’ll tell you how much life your roof has left and what, if anything, needs doing before solar goes on. The inspection is free. Book at <Link href="/contact/">https://iroofercontractors.com/contact/</Link> or call (470) 236-1410. Related: <Link href="/roof-replacement-dallas-ga/">roof replacement in Dallas, GA</Link>.</p>
            <RelatedPosts slug="solar-panels-roof-dallas-ga" />
            <p><Link href="/contact/" className="btn btn-solid">Get a free roof assessment →</Link></p>
          </div>
        </div>
      </article>
    </>
  );
}