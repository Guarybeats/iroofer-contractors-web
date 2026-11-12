import { OG_IMAGE } from '@/lib/seo';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import BlogPostingSchema from '@/components/BlogPostingSchema';
import { brand } from '@/lib/brand';

export const metadata = {
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] },
  alternates: { canonical: 'https://iroofercontractors.com/blog/how-to-choose-storm-damage-roofer/' },
  openGraph: {
    type: 'website',
    siteName: 'iRoofer Contractors',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, alt: 'iRoofer Contractors', width: 1200, height: 630 }],
    url: 'https://iroofercontractors.com/blog/how-to-choose-storm-damage-roofer/',
  },
  title: "How to Choose a Storm Damage Roofer | Dallas, GA | iRoofer",
  description:
    "How to pick a storm damage roofer after hail or wind in Dallas, GA and west metro Atlanta: questions to ask, storm-chaser red flags, and what to get in writing. (470) 236-1410.",
};

const post = {
  slug: 'how-to-choose-storm-damage-roofer',
  title: "How to Choose a Storm Damage Roofer After a Georgia Storm",
  date: 'November 2026',
  readTime: '6 min read',
  category: 'Storm Damage',
};

export default function BlogPostPage() {
  return (
    <>
      <BlogPostingSchema slug="how-to-choose-storm-damage-roofer" post={post} />
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
              After a hail or wind storm rolls through Dallas, Hiram, or Douglasville, the trucks and door knockers show up fast. Some are good crews. Some are gone by the time a leak shows up. Picking a storm damage roofer comes down to a few plain questions you can ask anyone who knocks.
            </p>
            <p>
              iRoofer Contractors is a family-owned crew based at 152 Freedom Dr in Dallas, GA since 2019. Call <a href={`tel:${brand.phone}`}>{brand.phone}</a> or <Link href="/contact/" style={{ color: 'var(--orange)', fontWeight: 700 }}>request a free inspection</Link>.
            </p>

            <h2>Questions to ask any storm damage roofer</h2>
            <ol>
              <li><strong>Where is your office?</strong> A local street address you can drive past matters more than a phone number with an out-of-state area code.</li>
              <li><strong>Will you show me photos of the damage?</strong> You should see dated photos of each slope, not just hear "you've got hail damage."</li>
              <li><strong>What do you think is a repair, and what is a replacement?</strong> An honest roofer will tell you when a few shingles and a vent boot are all you need.</li>
              <li><strong>What goes in the written scope?</strong> Ask for the materials, the areas being repaired or replaced, and how cleanup is handled — in writing, before work starts.</li>
              <li><strong>Who will be on my roof?</strong> Ask who runs the job and who you call if something isn't right afterward.</li>
            </ol>

            <h2>Storm-chaser red flags</h2>
            <ul>
              <li>Pressure to sign today "before the adjuster comes."</li>
              <li>A contract that hands the roofer control of your insurance claim before anyone has inspected the roof.</li>
              <li>Big up-front cash payment before materials arrive.</li>
              <li>No photos, no written scope, just a number.</li>
              <li>Offers to "take care of" anything on your claim that should be between you and your insurance company. Your claim should reflect real damage, honestly reported.</li>
            </ul>

            <h2>What a good storm inspection looks like</h2>
            <p>
              A storm inspection should cover the shingles on every slope, ridge cap, flashing at walls and chimneys, vents and pipe boots, gutters and downspouts, and the attic if it's safe to get to. You should get the photos either way — even if the answer is "no storm damage, no claim needed."
            </p>
            <ul>
              <li><Link href="/storm-damage-roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Storm damage roof repair in Dallas, GA</Link></li>
              <li><Link href="/hail-damage-roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Hail damage roof repair</Link></li>
              <li><Link href="/services/roof-insurance-claims/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Roof insurance claims help</Link></li>
              <li><Link href="/blog/georgia-hail-storm-roof-checklist/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Georgia hail storm roof checklist</Link></li>
            </ul>

            <h2>Insurance: what a roofer should and shouldn't do</h2>
            <p>
              A roofer can document damage, write a scope, and meet your adjuster on site if you want them there. The claim itself is between you and your insurance company. If the damage won't support a claim, a good roofer says so and quotes the repair instead.
            </p>

            <h2>Common questions</h2>
            <p><strong>Do I have to use the roofer who knocked on my door?</strong><br />No. You can get more than one inspection and pick the crew you trust.</p>
            <p><strong>Should I wait for my adjuster before calling a roofer?</strong><br />If water is getting in, get the opening covered first and photograph everything. For non-urgent damage, many homeowners like to have their own inspection photos before the adjuster visit.</p>
            <p><strong>How do I check a roofer's reviews?</strong><br />Read the Google reviews for the business name and address, and look for reviews that mention storm or insurance jobs specifically.</p>
            <p><strong>Is iRoofer a storm chaser?</strong><br />No. We're a family-owned crew in Dallas, GA, owned by Cristian Mendez, and we install all major shingle brands, including Owens Corning.</p>

            <p style={{ marginTop: 24 }}>
              Related:{' '}
              <Link href="/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Dallas GA roofing hub</Link>
              {' · '}
              <Link href="/service-areas/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Service areas</Link>
            </p>
            <p>
              <Link href="/contact/" className="btn btn-solid">Get a free storm-damage inspection →</Link>
              {' '}
              <a className="btn btn-ghost" href={`tel:${brand.phone}`} style={{ marginLeft: 8 }}>{brand.phone}</a>
            </p>
            <RelatedPosts slug="how-to-choose-storm-damage-roofer" />
          </div>
        </div>
      </article>
    </>
  );
}
