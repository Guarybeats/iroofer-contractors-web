import { OG_IMAGE } from '@/lib/seo';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import BlogPostingSchema from '@/components/BlogPostingSchema';
import { brand } from '@/lib/brand';

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  alternates: { canonical: 'https://iroofercontractors.com/blog/hail-damage-repair-or-replace-georgia/' },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: 'https://iroofercontractors.com/blog/hail-damage-repair-or-replace-georgia/',
  },
  title: "Hail Damage: Repair or Replace Your Roof? | Georgia | iRoofer",
  description:
    "After hail in Dallas, GA and west metro Atlanta: how to tell whether your roof needs a repair or a replacement, what hail damage looks like, and how documentation works. (470) 236-1410.",
};

const post = {
  slug: 'hail-damage-repair-or-replace-georgia',
  title: "Hail Damage in Georgia: Repair or Replace Your Roof?",
  date: 'November 2026',
  readTime: '6 min read',
  category: 'Storm Damage',
};

export default function BlogPostPage() {
  return (
    <>
      <BlogPostingSchema slug="hail-damage-repair-or-replace-georgia" post={post} />
      <article className="post">
        <div className="tex" aria-hidden="true" />
        <div className="wrap">
          <div className="post-head rv">
            <span className="eyebrow dark">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="byline">By iRoofer Contractors</p>
            <p className="meta">{post.date} · {post.readTime}</p>
          </div>

          <div className="post-body rv">
            <p>
              After hail, the first question is usually "Do I need a new roof?" Sometimes yes. Often the honest answer is a repair, or nothing at all. The decision comes from what's actually on the roof, not from how loud the storm sounded.
            </p>
            <p>
              iRoofer Contractors is a family-owned crew in Dallas, GA. Call <a href={`tel:${brand.phone}`}>{brand.phone}</a> or <Link href="/contact/" style={{ color: 'var(--orange)', fontWeight: 700 }}>request a free inspection</Link>.
            </p>

            <h2>What hail damage looks like on asphalt shingles</h2>
            <ul>
              <li>Dark, soft spots where the granules were knocked off</li>
              <li>Cracked or bruised shingles (the mat underneath is damaged even if the surface looks okay)</li>
              <li>Dents in vents, gutters, downspouts, and flashing</li>
              <li>Heavy granules piling up at the bottom of downspouts</li>
            </ul>
            <p>
              Dented gutters alone don't prove the shingles are damaged. A proper inspection checks each slope, because hail usually hits the side facing the storm hardest.
            </p>

            <h2>When a repair usually makes sense</h2>
            <ul>
              <li>Damage is limited to a few spots or one slope</li>
              <li>The roof is otherwise in good shape and not near the end of its life</li>
              <li>Matching shingles are still available</li>
            </ul>

            <h2>When replacement starts to make sense</h2>
            <ul>
              <li>Hits are spread across several slopes</li>
              <li>The roof was already worn, curling, or had repeated repairs</li>
              <li>The decking underneath has gone soft</li>
              <li>Your shingles are discontinued and a patch would not match</li>
            </ul>
            <p>
              We put the reason in writing either way. For the general version of this question, see <Link href="/blog/when-to-replace-vs-repair-a-roof/" style={{ color: 'var(--orange)', fontWeight: 700 }}>when to repair vs. replace a roof</Link>.
            </p>

            <h2>Documentation and insurance</h2>
            <p>
              Dated photos of every slope, a roof diagram, and a written scope help your adjuster see what you see. We meet adjusters on site when you want us there. If the damage won't support a claim, we tell you and quote the repair. Step-by-step: <Link href="/blog/dallas-ga-hail-storm-insurance-claims/" style={{ color: 'var(--orange)', fontWeight: 700 }}>how to document and file a hail claim</Link>.
            </p>
            <ul>
              <li><Link href="/hail-damage-roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Hail damage roof repair in Dallas, GA</Link></li>
              <li><Link href="/storm-damage-roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Storm damage roof repair</Link></li>
              <li><Link href="/blog/georgia-hail-storm-roof-checklist/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Georgia hail storm roof checklist</Link></li>
            </ul>

            <h2>Common questions</h2>
            <p><strong>Who should check my roof after a hailstorm?</strong><br />A local roofing crew that will show you dated photos of each slope and tell you plainly whether it's a repair, a replacement, or nothing.</p>
            <p><strong>Can I see hail damage from the ground?</strong><br />Sometimes you can see dented gutters or vents. Shingle bruising usually needs a close look. Don't climb a wet or steep roof yourself.</p>
            <p><strong>Does hail always mean an insurance claim?</strong><br />No. Small hail may leave no real damage. Get an inspection first, then decide with your insurance company.</p>
            <p><strong>Who owns iRoofer?</strong><br />Cristian Mendez — family-owned in Dallas since 2019, and an Owens Corning Contractor Rewards member.</p>

            <p style={{ marginTop: 24 }}>
              Related:{' '}
              <Link href="/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Dallas GA roofing hub</Link>
              {' · '}
              <Link href="/service-areas/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Service areas</Link>
            </p>
            <p>
              <Link href="/contact/" className="btn btn-solid">Get a free hail-damage inspection →</Link>
              {' '}
              <a className="btn btn-ghost" href={`tel:${brand.phone}`} style={{ marginLeft: 8 }}>{brand.phone}</a>
            </p>
            <RelatedPosts slug="hail-damage-repair-or-replace-georgia" />
          </div>
        </div>
      </article>
    </>
  );
}
