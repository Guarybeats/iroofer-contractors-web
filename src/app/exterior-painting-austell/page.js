import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import { FaqSchema } from '@/components/LocalSeo';

export const metadata = seo({
  title: "Exterior Painting & Staining in Austell, GA | iRoofer",
  description: "Exterior Painting & Staining in Austell, GA (Cobb County). Family-owned Dallas, GA crew since 2019. Free visit and a written plan. Call (470) 236-1410.",
  path: '/exterior-painting-austell',
});

const faqs = [
  {
    "q": "Do you offer exterior painting and staining in Austell, GA?",
    "a": "Yes. iRoofer Contractors offers exterior painting and staining in Austell and across Cobb County, along with our roofing work. Call (470) 236-1410 or use the form on this page."
  },
  {
    "q": "Is this the same crew that does roofs in Austell?",
    "a": "Yes. We are family-owned in Dallas, GA since 2019. The same local crew that handles roofs in Cobb County also handles this work, so roof-to-wall details are not handed off to a stranger."
  },
  {
    "q": "Do you publish prices for exterior painting and staining in Austell?",
    "a": "No. Every house is different \u2014 height, access, how much material has failed, and what is underneath. You get a written price after we look. We do not post ranges online."
  },
  {
    "q": "Can you do siding repair at the same time?",
    "a": "Often, yes, if the house needs both. We write each scope clearly so you can choose one or both. Start with a free visit in Austell."
  }
];

export default function Page() {
  return (
    <>
      <FaqSchema faq={faqs} />
      <section className="sec-light sec-pad">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="faq-grid" style={{ alignItems: 'start' }}>
            <div className="rv">
              <Link href="/services/exterior-painting/" className="lander-back">
                ← Exterior Painting
              </Link>
              <span className="eyebrow dark lander-eyebrow">Austell, GA</span>
              <h1 style={{ fontSize: 'clamp(2.2rem,4.6vw,3.4rem)', fontWeight: 900, lineHeight: 1.08, marginTop: 8 }}>
                Exterior Painting & Staining in Austell, GA
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.05rem', marginTop: 14, maxWidth: 680, lineHeight: 1.7 }}>
                Exterior painting and staining in Austell is available from the same Dallas-based crew. We will not paint a wall that is still taking on water from a roof or gutter problem.
              </p>
              <p style={{ marginTop: 22 }}>
                <a className="btn btn-ink" href="/contact/">Get a free visit <span className="arr">→</span></a>
                {' '}
                <a className="btn btn-ghost" href={`tel:${brand.phone}`}>{brand.phone}</a>
              </p>
            </div>
            <div className="rv">
              <QuoteForm variant="contact" id="exterior-painting-austell-quote" source="Exterior Painting & Staining Austell" />
            </div>
          </div>

          <div className="rv" style={{ marginTop: 48, maxWidth: 760 }}>
            <h2 style={{ fontSize: 'clamp(1.4rem,2.4vw,1.9rem)', fontWeight: 800 }}>How we work in Austell</h2>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 12 }}>We inspect the walls and trim, note moisture or wood that should be repaired first, and write a prep-and-finish plan. Color samples go on the house in daylight. Work starts only after you approve the written scope.</p>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 14 }}>If gutters are overflowing onto the fascia, paint will not last. We flag drainage issues first. Then we prep and paint or stain the surfaces that are actually ready.</p>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 14 }}>
              Based in Dallas, GA since 2019. Serving Austell in Cobb County. No published prices — you get a written number after we see the house.
            </p>
          </div>

          <div className="rv" style={{ marginTop: 36 }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: 12 }}>Related in Austell</h2>
            <p>
              <Link href="/siding-austell/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Siding in Austell</Link>
              {' · '}
              <Link href="/roof-repair-austell/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Roof repair</Link>
              {' · '}
              <Link href="/roof-replacement-austell/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Roof replacement</Link>
              {' · '}
              <Link href="/services/exterior-painting/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Exterior Painting hub</Link>
            </p>
          </div>

          <div className="faq-list rv" style={{ marginTop: 40 }}>
            <h2 style={{ fontSize: 'clamp(1.4rem,2.4vw,1.9rem)', fontWeight: 800, marginBottom: 12 }}>Questions</h2>
            {faqs.map((f, i) => (
              <div className={i === 0 ? 'faq-item open' : 'faq-item'} key={f.q}>
                <button className="faq-q" aria-expanded={i === 0}>{f.q}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{f.a}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
