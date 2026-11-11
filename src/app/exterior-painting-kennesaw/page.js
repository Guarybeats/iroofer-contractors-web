import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import { FaqSchema } from '@/components/LocalSeo';

export const metadata = seo({
  title: "Exterior Painting & Staining in Kennesaw, GA | iRoofer",
  description: "Exterior Painting & Staining in Kennesaw, GA (Cobb County). Family-owned Dallas, GA crew since 2019. Free visit and a written plan. Call (470) 236-1410.",
  path: '/exterior-painting-kennesaw',
});

const faqs = [
  {
    "q": "Do you offer exterior painting and staining in Kennesaw, GA?",
    "a": "Yes. iRoofer Contractors offers exterior painting and staining in Kennesaw and across Cobb County, along with our roofing work. Call (470) 236-1410 or use the form on this page."
  },
  {
    "q": "Is this the same crew that does roofs in Kennesaw?",
    "a": "Yes. We are family-owned in Dallas, GA since 2019. The same local crew that handles roofs in Cobb County also handles this work, so roof-to-wall details are not handed off to a stranger."
  },
  {
    "q": "Do you publish prices for exterior painting and staining in Kennesaw?",
    "a": "No. Every house is different \u2014 height, access, how much material has failed, and what is underneath. You get a written price after we look. We do not post ranges online."
  },
  {
    "q": "Can you do siding repair at the same time?",
    "a": "Often, yes, if the house needs both. We write each scope clearly so you can choose one or both. Start with a free visit in Kennesaw."
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
              <span className="eyebrow dark lander-eyebrow">Kennesaw, GA</span>
              <h1 style={{ fontSize: 'clamp(2.2rem,4.6vw,3.4rem)', fontWeight: 900, lineHeight: 1.08, marginTop: 8 }}>
                Exterior Painting & Staining in Kennesaw, GA
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.05rem', marginTop: 14, maxWidth: 680, lineHeight: 1.7 }}>
                Exterior painting and staining in Kennesaw is quoted the same way as our roofs: after a visit, in writing, with no surprise line items. You talk to a real person at (470) 236-1410.
              </p>
              <p style={{ marginTop: 22 }}>
                <a className="btn btn-ink" href="/contact/">Get a free visit <span className="arr">→</span></a>
                {' '}
                <a className="btn btn-ghost" href={`tel:${brand.phone}`}>{brand.phone}</a>
              </p>
            </div>
            <div className="rv">
              <QuoteForm variant="contact" id="exterior-painting-kennesaw-quote" source="Exterior Painting & Staining Kennesaw" />
            </div>
          </div>

          <div className="rv" style={{ marginTop: 48, maxWidth: 760 }}>
            <h2 style={{ fontSize: 'clamp(1.4rem,2.4vw,1.9rem)', fontWeight: 800 }}>How we work in Kennesaw</h2>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 12 }}>We inspect the walls and trim, note moisture or wood that should be repaired first, and write a prep-and-finish plan. Color samples go on the house in daylight. Work starts only after you approve the written scope.</p>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 14 }}>Kennesaw HOAs sometimes have color packets. Bring the approved list if you have one; we will sample colors on the wall in daylight before anyone opens a full bucket.</p>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 14 }}>
              Based in Dallas, GA since 2019. Serving Kennesaw in Cobb County. No published prices — you get a written number after we see the house.
            </p>
          </div>

          <div className="rv" style={{ marginTop: 36 }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: 12 }}>Related in Kennesaw</h2>
            <p>
              <Link href="/siding-kennesaw/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Siding in Kennesaw</Link>
              {' · '}
              <Link href="/roof-repair-kennesaw/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Roof repair</Link>
              {' · '}
              <Link href="/roof-replacement-kennesaw/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Roof replacement</Link>
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
