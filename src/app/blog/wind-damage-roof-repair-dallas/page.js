import { OG_IMAGE } from '@/lib/seo';
import PriceDisclaimer from '@/components/PriceDisclaimer';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import BlogPostingSchema from '@/components/BlogPostingSchema';
import { brand } from '@/lib/brand';

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  alternates: { canonical: 'https://iroofercontractors.com/blog/wind-damage-roof-repair-dallas/' },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: 'https://iroofercontractors.com/blog/wind-damage-roof-repair-dallas/',
  },
  title: 'Wind Damage Roof Repair in Dallas, GA | What to Check After a Storm | iRoofer',
  description:
    'What wind does to Dallas-area roofs, what to check safely from the ground, and when to call for repair or documentation. iRoofer: (470) 236-1410 · contact page.',
};

const post = {
  slug: 'wind-damage-roof-repair-dallas',
  title: 'Wind Damage Roof Repair in Dallas, GA — What Homeowners Should Do Next',
  date: 'March 2026',
  readTime: '6 min read',
  category: 'Storm Damage',
};

export default function BlogPostPage() {
  return (
    <>
      <BlogPostingSchema slug="wind-damage-roof-repair-dallas" post={post} />
      <article className="post">
        <div className="tex" aria-hidden="true" />
        <div className="wrap">
          <div className="post-head rv">
            <span className="eyebrow dark">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="byline">By iRoofer Contractors</p>
            <p className="meta">{post.date} · {post.readTime}</p>
            <PriceDisclaimer />
          </div>

          <div className="post-body rv">
            <p>
              After a windy night in Dallas or west metro Atlanta, homeowners usually want two answers: Is the roof still protecting the house? And do I need a repair — or a claim? iRoofer Contractors is the local crew at 152 Freedom Dr: family-owned since 2019, licensed, bonded, insured. CertainTeed Storm Restoration Specialist (GA) when storm work is the natural fit.
            </p>
            <p>
              Ready to talk about your roof? Visit{' '}
              <Link href="/contact/" style={{ color: 'var(--orange)', fontWeight: 700 }}>https://iroofercontractors.com/contact/</Link>
              {' '}or call <a href={`tel:${brand.phone}`}>{brand.phone}</a>.
            </p>

            <h2>What wind actually does to asphalt roofs here</h2>
            <p>Wind rarely “peels the whole house” in one neat sheet. More often we see:</p>
            <ul>
              <li>Lifted or missing tabs on the windward slopes</li>
              <li>Ridge cap that has started to open</li>
              <li>Flashing edges that worked loose at chimneys, walls, and skylights</li>
              <li>Creased shingles that still look attached from the street but will leak on the next rain</li>
            </ul>
            <p>
              Limb strikes and soft-metal dings (vents, caps) often travel with the same cell. Hail is a different inspection conversation — do not assume every storm is “hail damage” from the driveway.
            </p>

            <h2>Safe checks from the ground (before anyone climbs)</h2>
            <ol>
              <li>Walk the exterior and photograph missing or flipped shingles.</li>
              <li>Look in the attic (if safe) for daylight, wet sheathing, or new drips.</li>
              <li>Check ceilings and upper-floor corners after the next rain.</li>
              <li>Note gutters full of granules or shingle pieces.</li>
            </ol>
            <p>Do not walk a wet or steep roof yourself. Call a licensed crew for the ladder work.</p>

            <h2>Repair vs replace after wind</h2>
            <p>
              A few tabs and a ridge section is usually a repair. Widespread uplift across multiple slopes, repeated prior repairs, or a roof already near end of life can push the honest recommendation toward replacement. We say which one — and why — after a photo-documented inspection.
            </p>
            <ul>
              <li><Link href="/storm-damage-roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Storm damage roof repair in Dallas</Link></li>
              <li><Link href="/roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Roof repair in Dallas, GA</Link></li>
              <li><Link href="/roof-replacement-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Roof replacement in Dallas, GA</Link></li>
              <li><Link href="/emergency-roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Emergency roof repair Dallas GA</Link></li>
              <li><Link href="/services/roof-insurance-claims/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Roof insurance claims help</Link></li>
            </ul>

            <h2>Insurance documentation without the hard sell</h2>
            <p>
              If you file a claim, dated photos, a roof diagram, and a written scope help the adjuster see what you see. We meet adjusters on site when you want us there. If the damage will not support a claim, we tell you and quote the repair — a denied claim should not leave you without a dry house.
            </p>

            <h2>What we deliberately do not invent here</h2>
            <p>
              No mph threshold tables, no “X% of roofs fail at Y,” no dollar repair grids. Those belong only if verified from manufacturer literature or your own job data — and even then, label as examples, not quotes. This update is qualitative guidance plus clear next steps.
            </p>

            <h2>Common questions</h2>
            <p><strong>Should I call after every windy night?</strong><br />Call if you see missing shingles, have a leak, or heard impact. A free inspection beats guessing.</p>
            <p><strong>Can you tarp the same day?</strong><br />When the roof is open to weather, tarping is the priority — then permanent repair when conditions allow.</p>
            <p><strong>Is wind damage the same as hail damage?</strong><br />Not always. We inspect for both; documentation differs. Be honest with your carrier about what you observed.</p>
            <p><strong>Who owns iRoofer?</strong><br />Cristian Mendez — family-owned in Dallas since 2019.</p>

            <p style={{ marginTop: 24 }}>
              Related:{' '}
              <Link href="/dallas-ga-roofing/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Dallas GA roofing hub</Link>
              {' · '}
              <Link href="/service-areas/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Service areas</Link>
            </p>
            <p>
              <Link href="/contact/" className="btn btn-solid">Get a free wind-damage inspection →</Link>
              {' '}
              <a className="btn btn-ghost" href={`tel:${brand.phone}`} style={{ marginLeft: 8 }}>{brand.phone}</a>
            </p>
            <RelatedPosts slug="wind-damage-roof-repair-dallas" />
          </div>
        </div>
      </article>
    </>
  );
}
