import Link from 'next/link';
import { brand } from '@/lib/brand';
import { reviews } from '@/lib/reviews';
import { seo } from '@/lib/seo';
import { GBP_URL } from '@/components/LocalSeo';
import QuoteForm from '@/components/QuoteForm';
import ReviewButton from '@/components/ReviewButton';

export const metadata = seo({
  title: 'iRoofer Reviews | Dallas, GA Homeowner Feedback',
  description:
    'Read what Dallas, GA homeowners say about iRoofer Contractors. Real comments we already publish on the site, plus a link to our Google Business Profile.',
  path: '/reviews',
});

export default function ReviewsPage() {
  return (
    <section className="sec-light sec-pad">
      <div className="tex" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <span className="eyebrow dark">Homeowner feedback</span>
        <h1 style={{ fontSize: 'clamp(2.2rem,4.6vw,3.6rem)', fontWeight: 900 }}>
          Reviews of iRoofer Contractors
        </h1>
        <p style={{ color: '#52606b', fontSize: '1.05rem', marginTop: 14, maxWidth: 720, lineHeight: 1.7 }}>
          These comments already appear on our homepage. They are from homeowners we worked with in the Dallas, GA area.
          We do not invent reviews for this page. To see our Google Business Profile, or to leave a review there, use the Google link below.
        </p>
        <p style={{ marginTop: 18 }}>
          <ReviewButton variant="orange" label="See us on Google" />
          {' '}
          <a className="btn btn-ghost" href={`tel:${brand.phone}`} style={{ marginLeft: 8 }}>{brand.phone}</a>
        </p>
        <p style={{ marginTop: 12, color: '#52606b' }}>
          Google profile:{' '}
          <a href={GBP_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange)', fontWeight: 700 }}>{GBP_URL}</a>
        </p>

        <div className="cards" style={{ marginTop: 40, gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))' }}>
          {reviews.map((r) => (
            <article key={r.who} className="svc-card" style={{ padding: '1.4rem' }}>
              <p style={{ color: '#3d4a54', lineHeight: 1.65, fontSize: '.95rem' }}>{r.q}</p>
              <p style={{ marginTop: 14, fontWeight: 800 }}>
                {r.who}
                {r.where ? <span style={{ fontWeight: 600, color: '#52606b' }}> · {r.where}</span> : null}
              </p>
            </article>
          ))}
        </div>

        <div style={{ maxWidth: 460, marginTop: 48 }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 12 }}>Need work of your own?</h2>
          <QuoteForm variant="contact" id="reviews-quote" source="Reviews page" />
        </div>
        <p style={{ marginTop: 24, color: '#52606b' }}>
          <Link href="/about/" style={{ color: 'var(--orange)', fontWeight: 700 }}>About us</Link>
          {' · '}
          <Link href="/contact/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Contact</Link>
        </p>
      </div>
    </section>
  );
}
