import Link from 'next/link';
import { brand, cities, cityPath } from '@/lib/brand';
import { seo } from '@/lib/seo';
import ReviewButton from '@/components/ReviewButton';
import { googleReviewSummary, writtenReviews, starOnlyReviews } from '@/lib/googleReviews';
import { jobPhotos } from '@/lib/jobPhotos';
import { jobAreaLinks } from '@/lib/jobPins';
import RecentJobsMapLoader from '@/components/RecentJobsMapLoader';
import s from './reviews.module.css';

// Schema note: the site-wide graph in components/LocalSeo.jsx already emits a
// BreadcrumbList for this path (Home > Reviews). It emits no AggregateRating or
// Review nodes, and we deliberately add none here: Google treats review markup a
// business publishes about itself as self-serving and shows no stars for it.

export const metadata = seo({
  title: 'Customer Reviews | iRoofer Contractors Dallas GA',
  description:
    'Read all 54 Google reviews for iRoofer Contractors (5.0 average), roofers in Dallas, GA. See recent job photos, then call (470) 236-1410 for a free roof check.',
  path: '/reviews',
});

// Review cards that get a job photo beside them (positions in the newest-first
// list). Kept at even offsets so the two-column grid has no gaps.
const PAIRS = {
  2: '/images/jobs/01-dallas.webp',
  9: '/images/jobs/11-alpharetta.webp',
  18: '/images/jobs/15-mableton.webp',
};

function Star({ on = true }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={on ? undefined : s.starOff}>
      <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.8L10 1.5z" />
    </svg>
  );
}

function Stars({ n = 5, small = false }) {
  return (
    <span className={`${s.stars}${small ? ` ${s.starsSm}` : ''}`} role="img" aria-label={`${n} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => <Star key={i} on={i <= n} />)}
    </span>
  );
}

function GoogleIcon() {
  return (
    <svg className={s.gicon} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

function ReviewCard({ r }) {
  return (
    <article className={s.card}>
      <div className={s.cardTop}>
        <Stars n={r.stars} />
        <time className={s.date} dateTime={r.iso}>{r.date}</time>
      </div>
      <p className={s.text}>{r.text}</p>
      <div className={s.who}>
        <GoogleIcon />
        <div>
          <b>{r.name}</b>
          <br />
          <small>Google review{r.ownerReplied ? ' · Owner replied' : ''}</small>
        </div>
      </div>
    </article>
  );
}

function PairPhoto({ src }) {
  const p = jobPhotos.find((x) => x.src === src);
  if (!p) return null;
  return (
    <figure className={s.photo}>
      <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" decoding="async" />
      <figcaption><span>Recent job · {p.city}</span><b>{p.title}</b></figcaption>
    </figure>
  );
}

export default function ReviewsPage() {
  const { rating, count, asOf, url: googleUrl } = googleReviewSummary;

  return (
    <>
      {/* HERO */}
      <section className={s.hero}>
        <div className="wrap">
          <nav className={s.crumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link> / <span aria-current="page">Reviews</span>
          </nav>
          <div className={s.heroGrid}>
            <div>
              <span className="eyebrow">Why homeowners in Dallas trust iRoofer</span>
              <h1>iRoofer Contractors Reviews: <span className="ac">Dallas, GA Roofing</span></h1>
              <p className={s.heroLead}>
                Every review on this page comes straight from our Google Business Profile, word for word.
                Neighbors in Dallas, Paulding County, and west metro Atlanta talk about the drone photos,
                the help with insurance claims, the clean-up, and how {brand.owner} explains each step.
              </p>
              <div className={s.heroCta}>
                <a className="btn btn-solid" href="/contact/">Get a free roof check <span className="arr">→</span></a>
                <a className="btn btn-ghost" href={`tel:${brand.phone}`}>Call or text {brand.phone}</a>
              </div>
            </div>
            <div className={s.scoreCard}>
              <div className={s.scoreTop}>
                <div className={s.scoreNum}>{rating}</div>
                <div className={s.scoreMeta}>
                  <Stars n={5} />
                  <b>{count} Google reviews</b>
                  {rating} average rating
                </div>
              </div>
              <p className={s.scoreNote}>As shown on Google, {asOf}.</p>
              <a className={s.scoreLink} href={googleUrl} target="_blank" rel="noopener noreferrer">Read all reviews on Google →</a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP — verified facts only */}
      <div className={s.trust} aria-label="Why customers choose iRoofer">
        <div className="wrap">
          <ul className={s.trustList}>
            <li><span className={s.trustNum}>{rating} <span className="ac">★</span> on Google</span><span className={s.trustLbl}>From {count} reviews</span></li>
            <li><span className={s.trustNum}>Drone roof inspections</span><span className={s.trustLbl}>Photos from above, mentioned in reviews</span></li>
            <li><span className={s.trustNum}>Insurance claim help</span><span className={s.trustLbl}>Photos and paperwork for your claim</span></li>
            <li><span className={s.trustNum}>Latino-owned</span><span className={s.trustLbl}>Local and family-owned in Dallas, GA</span></li>
          </ul>
        </div>
      </div>

      {/* REVIEWS */}
      <section className="sec-light sec-pad" id="reviews">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className={s.listHead}>
            <div>
              <span className="eyebrow dark">Word for word from Google</span>
              <h2>Most recent reviews ({count})</h2>
              <p>{count} Google reviews, {rating} average. {writtenReviews.length} written reviews below, newest first, plus {starOnlyReviews.length} star-only ratings.</p>
            </div>
            <ReviewButton variant="ink" label="Leave a review" />
          </div>

          <div className={s.grid}>
            {writtenReviews.map((r, i) =>
              PAIRS[i] ? (
                <div className={s.pair} key={`${r.name}-${i}`}>
                  <ReviewCard r={r} />
                  <PairPhoto src={PAIRS[i]} />
                </div>
              ) : (
                <ReviewCard r={r} key={`${r.name}-${i}`} />
              )
            )}
          </div>

          <div className={s.starOnly}>
            <h3>{starOnlyReviews.length} more 5-star ratings</h3>
            <p>These customers left a star rating on Google without a written review.</p>
            <ul className={s.starOnlyList}>
              {starOnlyReviews.map((r, i) => (
                <li key={`${r.name}-${i}`}>
                  <GoogleIcon />
                  {r.name}
                  <Stars n={r.stars} small />
                </li>
              ))}
            </ul>
          </div>

          <div className={s.googleRow}>
            <a className="btn btn-solid" href={googleUrl} target="_blank" rel="noopener noreferrer">Read all reviews on Google <span className="arr">→</span></a>
            <ReviewButton variant="ink" label="Leave a review" />
          </div>
        </div>
      </section>

      {/* RECENT JOBS MAP — city-level pins only (see src/lib/jobPins.js) */}
      <section className={`${s.mapSec} sec-pad`} id="jobs-map">
        <div className="wrap">
          <div className={s.mapHead}>
            <span className="eyebrow dark">Recent jobs map</span>
            <h2>Where we&apos;ve worked recently</h2>
            <p>Roof replacements, gutters, inspections, and storm work across west metro Atlanta. Tap a pin to see the job type, the month, and a photo where we have one.</p>
          </div>
          <div className={s.mapBox}>
            <RecentJobsMapLoader className={s.map} />
          </div>
          <p className={s.mapNote}>Pins show the city, not the exact home, to protect customer privacy.</p>
          <nav className={s.mapLinks} aria-label="Service areas on the map">
            <span>Roofing in these areas:</span>
            <ul>
              {jobAreaLinks().map((a) => (
                <li key={a.key}><Link href={a.href}>{a.label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* RECENT JOBS */}
      <section className={`${s.jobs} sec-pad`} id="recent-jobs">
        <div className="wrap">
          <div className={s.sh}>
            <span className="eyebrow">Real job photos, not stock</span>
            <h2>Recent <span className="ac">jobs.</span></h2>
            <p>New roofs, gutters, flashing, and decking from recent iRoofer jobs around west metro Atlanta, many shot from our drone.</p>
          </div>
          <ul className={s.jobGrid}>
            {jobPhotos.map((p) => (
              <li key={p.src}>
                <figure>
                  <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" decoding="async" />
                  <figcaption><span>{p.city}</span>{p.title}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <p className={s.jobsNote}>Photos are from recent jobs and are not tied to any one review.</p>
        </div>
      </section>

      {/* CTA + SERVICE AREAS */}
      <section className={`${s.cta} sec-pad`} id="quote">
        <div className="wrap">
          <div className={s.ctaGrid}>
            <div>
              <span className="eyebrow">Your roof next</span>
              <h2>Get a free <span className="ac">roof check.</span></h2>
              <p>Tell us what is going on with your roof. We come out, take photos, and give you a written plan with no pressure.</p>
              <div className={s.heroCta}>
                <a className="btn btn-solid" href="/contact/">Request a free quote <span className="arr">→</span></a>
              </div>
              <a className={s.bigphone} href={`tel:${brand.phone}`}>{brand.phone}</a>
            </div>
            <div className={s.areas}>
              <h3>Areas we serve</h3>
              <ul className={s.areaList}>
                {cities.map((c) => (
                  <li key={c.slug}><Link href={cityPath(c)}>{c.name}, {c.state}</Link></li>
                ))}
                <li><Link href="/service-areas/">All service areas →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
