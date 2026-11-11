import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import { FaqSchema } from '@/components/LocalSeo';

export const metadata = seo({
  title: "Siding Repair & Replacement in Marietta, GA | iRoofer",
  description: "Siding Repair & Replacement in Marietta, GA (Cobb County). Family-owned Dallas, GA crew since 2019. Free visit and a written plan. Call (470) 236-1410.",
  path: '/siding-marietta',
});

const faqs = [
  {
    "q": "Do you offer siding repair and replacement in Marietta, GA?",
    "a": "Yes. iRoofer Contractors offers siding repair and replacement in Marietta and across Cobb County, along with our roofing work. Call (470) 236-1410 or use the form on this page."
  },
  {
    "q": "Is this the same crew that does roofs in Marietta?",
    "a": "Yes. We are family-owned in Dallas, GA since 2019. The same local crew that handles roofs in Cobb County also handles this work, so roof-to-wall details are not handed off to a stranger."
  },
  {
    "q": "Do you publish prices for siding repair and replacement in Marietta?",
    "a": "No. Every house is different \u2014 height, access, how much material has failed, and what is underneath. You get a written price after we look. We do not post ranges online."
  },
  {
    "q": "Can you do exterior painting at the same time?",
    "a": "Often, yes, if the house needs both. We write each scope clearly so you can choose one or both. Start with a free visit in Marietta."
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
              <Link href="/services/siding/" className="lander-back">
                ← Siding
              </Link>
              <span className="eyebrow dark lander-eyebrow">Marietta, GA</span>
              <h1 style={{ fontSize: 'clamp(2.2rem,4.6vw,3.4rem)', fontWeight: 900, lineHeight: 1.08, marginTop: 8 }}>
                Siding Repair & Replacement in Marietta, GA
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.05rem', marginTop: 14, maxWidth: 680, lineHeight: 1.7 }}>
                Marietta’s mix of older in-town homes and newer builds means siding scope changes house to house. We repair or replace siding, and we pay attention to details on older trim that a production crew would cover up.
              </p>
              <p style={{ marginTop: 22 }}>
                <a className="btn btn-ink" href="/contact/">Get a free visit <span className="arr">→</span></a>
                {' '}
                <a className="btn btn-ghost" href={`tel:${brand.phone}`}>{brand.phone}</a>
              </p>
            </div>
            <div className="rv">
              <QuoteForm variant="contact" id="siding-marietta-quote" source="Siding Repair & Replacement Marietta" />
            </div>
          </div>

          <div className="rv" style={{ marginTop: 48, maxWidth: 760 }}>
            <h2 style={{ fontSize: 'clamp(1.4rem,2.4vw,1.9rem)', fontWeight: 800 }}>How we work in Marietta</h2>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 12 }}>We walk the house, take photos, and show you what failed. You get a written plan and price before anyone orders material. We protect landscaping, clean up each day, and walk the job with you when we finish.</p>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 14 }}>City of Marietta and Cobb County permits are not the same. We pull what the job requires and keep the site clean in tighter in-town lots where dumpsters and scaffolding need a plan.</p>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 14 }}>
              Based in Dallas, GA since 2019. Serving Marietta in Cobb County. No published prices — you get a written number after we see the house.
            </p>
          </div>

          <div className="rv" style={{ marginTop: 36 }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: 12 }}>Related in Marietta</h2>
            <p>
              <Link href="/exterior-painting-marietta/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Exterior painting in Marietta</Link>
              {' · '}
              <Link href="/roof-repair-marietta/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Roof repair</Link>
              {' · '}
              <Link href="/roof-replacement-marietta/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Roof replacement</Link>
              {' · '}
              <Link href="/services/siding/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Siding hub</Link>
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
