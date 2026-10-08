import { OG_IMAGE } from '@/lib/seo';
import PriceDisclaimer from '@/components/PriceDisclaimer';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import BlogPostingSchema from '@/components/BlogPostingSchema';
import { FaqSchema } from '@/components/LocalSeo';
import { brand } from '@/lib/brand';

const TITLE = 'Roof Repair vs. Replacement: Signs It’s Time | Dallas, GA';
const DESC =
  'Repair or replace? The signs that point each way, why leaks mislead, how age and storm damage factor in — from a family-owned Dallas, GA roofing crew.';
const URL = 'https://iroofercontractors.com/blog/when-to-replace-vs-repair-a-roof/';

const post = {
  slug: 'when-to-replace-vs-repair-a-roof',
  title: 'Roof Repair vs. Replacement: How to Tell Which Your Roof Needs',
  date: 'November 2025',
  readTime: '6 min read',
  category: 'Maintenance',
};

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  alternates: { canonical: URL },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    title: TITLE,
    description: DESC,
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: URL,
  },
  title: TITLE,
  description: DESC,
};

const faqs = [
  {
    q: 'Should I repair or replace my roof?',
    a: 'Repair if the damage is in one place and the rest of the roof is sound. Replace if leaks keep appearing in new places, wear covers several slopes, or the decking is soft.',
  },
  {
    q: 'Can one leak mean I need a new roof?',
    a: 'Usually not. Most leaks come from a single failure point like a boot, flashing or a valley. It points to replacement when it’s one of several leaks or the surrounding decking and shingles are worn out.',
  },
  {
    q: 'Is it worth repairing an old roof?',
    a: 'Sometimes. If the problem is isolated and the shingles still have life in them, a repair can make sense while you plan ahead. If the roof is showing wear everywhere, repair money tends to be better spent on a replacement.',
  },
];

export default function BlogPostPage() {
  return (
    <>
      <BlogPostingSchema slug="when-to-replace-vs-repair-a-roof" post={post} />
      <article className="post">
        <div className="tex" aria-hidden="true" />
        <div className="wrap">
          <div className="post-head rv">
            <span className="eyebrow dark">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="byline">
              By iRoofer Contractors
            </p>
            <p className="meta">Updated October 2026 · {post.readTime}</p>
            <PriceDisclaimer />
          </div>

          <div className="post-body rv">
            <p><strong>Short answer:</strong> repair when the damage is in one place and the rest of the roof is sound. Replace when problems keep showing up in different places, wear covers more than one slope, or the decking underneath is failing. The rest of this post is how to tell which one you’ve got. It’s what we look at on every inspection around Dallas and Paulding County.</p>

            <h2>Signs your roof can be repaired</h2>
            <ul>
              <li><strong>The damage is in one spot.</strong> A few shingles blown off, a cracked pipe boot, one valley, one run of flashing at a wall or chimney.</li>
              <li><strong>The rest of the roof still looks healthy.</strong> Shingles lie flat, granules are mostly intact, no curling or cracking across the slopes.</li>
              <li><strong>The decking is solid.</strong> No soft spots, no sagging between rafters.</li>
              <li><strong>It’s the first problem in a while</strong>, not the third leak this year.</li>
            </ul>
            <p>Typical repairs: pipe boots, step and chimney flashing, ridge caps, wind-lifted or creased shingles, a worn valley, a nail that’s backed out under a shingle.</p>

            <h2>Signs it’s time to replace</h2>
            <ul>
              <li><strong>Leaks keep showing up in new places.</strong> One leak is a repair. A pattern means the roof is failing as a system.</li>
              <li><strong>Wear across several slopes.</strong> Widespread granule loss (bare, shiny patches, or granules piling up in gutters), curling or cracked shingles, or shingles that have gone brittle.</li>
              <li><strong>Soft or sagging decking.</strong> That’s water damage underneath, and it doesn’t get fixed from the top.</li>
              <li><strong>Storm damage across the roof</strong>, not just one corner. Hail bruising on every slope, or wind damage that’s lifted seals all over.</li>
              <li><strong>More repair money keeps going into the same roof.</strong> At some point you’re paying for a new roof in installments without ever getting one.</li>
            </ul>

            <h2>Roof leak: repair or replace?</h2>
            <p>A leak by itself doesn’t mean you need a new roof. Most leaks we trace come from one failure point: a boot, a flashing gap, a valley. The catch is that <strong>the stain on your ceiling is rarely right under the leak.</strong> Water gets in, runs along the decking, and drips somewhere else. That’s why patching the spot above the stain so often fails, and why it’s worth having someone trace it from the attic and confirm it on the roof.</p>
            <p>When does a leak point to replacement? When it’s one of several, when the decking around it has rotted, or when the shingles around the leak are worn out too and won’t take a clean repair.</p>

            <h2>How roof age factors in</h2>
            <p>Age matters, but it’s a clue, not a verdict. A well-installed, well-ventilated roof can outlast a neglected one installed years later. In Georgia, summer heat bakes shingles from above and a poorly ventilated attic bakes them from below. So rather than going by the calendar, we look at the shingles themselves: granules, flexibility, cracking, how the seal strips are holding. If your roof is getting older <em>and</em> showing the replacement signs above, it’s time to start planning, ideally before the next storm forces the timing.</p>

            <h2>Storm damage changes the math</h2>
            <p>After hail or high wind, the question isn’t only “repair or replace” but also “what does the damage support?” Scattered damage may be a straightforward repair. Damage across the whole roof may support a replacement through your homeowner’s policy, depending on your coverage and deductible. Get it documented before anything is repaired: photos by slope, dented gutters and vents noted, a written scope. We don’t promise claim outcomes. Your policy decides that. But good documentation is what lets the adjuster see what you see. More: <Link href="/storm-damage-roof-repair-dallas-ga/">storm damage roof repair in Dallas, GA</Link> and <Link href="/services/roof-insurance-claims/">roof insurance claims help</Link>.</p>

            <h2>Don’t DIY the decision from the ground</h2>
            <p>Plenty of roof damage is invisible from the driveway, and walking a damaged or steep roof is how people get hurt. Take photos from the ground and inside, then let a roofer get up there. A good inspection ends with photos and a written answer (repair it, keep an eye on it, or plan a replacement), and an honest roofer will sometimes tell you “you’re fine for now.”</p>

            <h2>What it costs</h2>
            <p>We won’t put a price table in a blog post. A boot on a walkable ranch roof and a rebuilt valley on a steep two-story are different jobs, and a replacement depends on size, pitch, layers, decking and material. For the factors that move the number, see <Link href="/blog/roof-repair-cost-dallas-ga/">roof repair cost factors</Link> and <Link href="/blog/roof-replacement-cost-dallas-ga/">roof replacement cost factors</Link>. For a real figure, we inspect and put it in writing, free.</p>

            <h2>Get a straight answer</h2>
            <p>iRoofer Contractors is a family-owned roofing crew based in Dallas, GA since 2019, led by owner Cristian Mendez. We’d rather do a good repair today and earn your replacement years from now than sell you a roof you don’t need. Book a free inspection at <Link href="/contact/">https://iroofercontractors.com/contact/</Link> or call <a href={`tel:${brand.phone}`}>{brand.phone}</a>.</p>
            <p>Local pages: <Link href="/roof-repair-dallas-ga/">roof repair in Dallas, GA</Link> · <Link href="/roof-replacement-dallas-ga/">roof replacement in Dallas, GA</Link> · <Link href="/roof-repair-hiram/">roof repair in Hiram</Link></p>

            <h2>Repair vs. replace: common questions</h2>
            {faqs.map((f) => (
              <div key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}

            <RelatedPosts slug="when-to-replace-vs-repair-a-roof" />
            <p>
              <Link href="/contact/" className="btn btn-solid">Book a free roof inspection →</Link>
              {' '}
              <a href={`tel:${brand.phone}`} className="btn btn-ghost" style={{ marginLeft: 8 }}>{brand.phone}</a>
            </p>
          </div>
        </div>
      </article>
      <FaqSchema faq={faqs} />
    </>
  );
}
