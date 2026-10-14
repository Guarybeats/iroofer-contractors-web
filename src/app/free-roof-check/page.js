import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import RepairOrReplaceQuiz from '@/components/RepairOrReplaceQuiz';
import { FaqSchema } from '@/components/LocalSeo';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';

export const metadata = seo({
  title: 'Free Roof Check in Dallas, GA | No Pressure | iRoofer Contractors',
  description:
    'Book a free, no-pressure roof check in Dallas, GA and nearby towns. We take photos and give you a short written summary. Call (470) 236-1410.',
  path: '/free-roof-check',
});

const looks = [
  { t: 'Shingles', d: 'Missing, cracked, curling, or bruised by hail.' },
  { t: 'Metal flashing', d: 'The metal around chimneys, walls, and vents. Loose flashing is a top leak spot.' },
  { t: 'Pipe boots and vents', d: 'The rubber seals around pipes crack with age and let water in.' },
  { t: 'Valleys and edges', d: 'Where two roof sides meet, and the drip edge at the gutters.' },
  { t: 'Gutters', d: 'Clogs, sagging runs, and shingle grit that shows wear.' },
  { t: 'Attic and ceilings', d: 'Stains, wet insulation, or daylight, when we can get to them.' },
];

const faqs = [
  { q: 'Is the roof check really free?', a: 'Yes. The roof check is free for homes in our service area. There is no cost and no pressure to hire us.' },
  { q: 'What do I get?', a: 'Photos of your roof and a short written summary. It says what we found and what we suggest: repair, new roof, or nothing for now.' },
  { q: 'Do I need to be home?', a: 'It helps if you are, so we can look at ceilings or the attic. If you can’t be there, we can check the outside and send you the photos.' },
  { q: 'Will you tell me the price?', a: 'If work is needed, we give you a written price after the check. For a rough idea first, try our estimator. It is for planning only, not a quote.' },
  { q: 'What towns do you cover?', a: 'Dallas, GA and nearby towns like Hiram, Douglasville, Powder Springs, Marietta, Acworth, Kennesaw, and Austell.' },
];

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${brand.url}/free-roof-check/#service`,
  name: 'Free Roof Check',
  serviceType: 'Roof inspection',
  description:
    'Free, no-pressure roof check in Dallas, GA and nearby towns, with photos and a short written summary.',
  url: `${brand.url}/free-roof-check/`,
  provider: { '@id': `${brand.url}/#business` },
  areaServed: brand.serviceArea.map((c) => ({ '@type': 'City', name: c.replace(', GA', '') })),
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free roof check' },
};

export default function FreeRoofCheckPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <section className="sec-light sec-pad">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="faq-grid" style={{ alignItems: 'start' }}>
            <div className="rv">
              <span className="eyebrow dark">Free · No pressure</span>
              <h1 style={{ fontSize: 'clamp(2.2rem,4.6vw,3.6rem)', fontWeight: 900, lineHeight: 1.04 }}>
                Free Roof Check in <span className="ac">Dallas, GA</span>
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.08rem', marginTop: 14, maxWidth: 600 }}>
                Not sure what your roof needs? We will come look for free. We take photos and give you a short written summary.
                Then you decide. No pressure, no hard sell.
              </p>
              <ul style={{ lineHeight: 2, color: '#52606b', marginTop: 14 }}>
                <li>Free for homes in Dallas, GA and nearby towns</li>
                <li>Photos of your roof, so you see what we see</li>
                <li>A short written summary in plain words</li>
                <li>A local, family-owned crew since 2019</li>
              </ul>
              <p style={{ marginTop: 14, color: '#52606b' }}>
                <strong>{brand.rating} on Google from {brand.reviewCount} reviews.</strong> Owens Corning Contractor Rewards Member.
              </p>
              <p style={{ marginTop: 18 }}>
                <a className="btn btn-ghost" href={`tel:${brand.phone}`}>Call or text {brand.phone}</a>
              </p>
            </div>
            <div className="rv" id="book">
              <QuoteForm variant="detail" id="quote-free-roof-check" source="Free Roof Check" title="Book Your Free Roof Check" />
            </div>
          </div>

          <div className="rv" style={{ marginTop: 64, maxWidth: 900 }}>
            <span className="eyebrow dark">What we look at</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', fontWeight: 900 }}>What we check on your roof</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 18, marginTop: 18 }}>
              {looks.map((l) => (
                <div key={l.t} style={{ background: '#fff', border: '1px solid rgba(22,29,37,.1)', borderRadius: 8, padding: '16px 18px' }}>
                  <h3 style={{ fontWeight: 800, fontSize: '1.05rem' }}>{l.t}</h3>
                  <p style={{ color: '#52606b', marginTop: 6 }}>{l.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rv" style={{ marginTop: 56, maxWidth: 780 }}>
            <span className="eyebrow dark">What you get</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', fontWeight: 900 }}>Photos and a written summary</h2>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 10 }}>
              We send you photos of what we found. You also get a short written summary. It tells you what we saw and what we suggest:
              a repair, a new roof, or nothing for now. If it looks like storm damage, the photos help when you talk to your insurance company.
              We can’t promise what insurance will approve.
            </p>
          </div>

          <div className="rv" id="price-range" style={{ marginTop: 56, maxWidth: 780, scrollMarginTop: 90 }}>
            <span className="eyebrow dark">Planning tool</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', fontWeight: 900 }}>See your price range in 60 seconds</h2>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 10 }}>
              Want a rough idea first? Our estimator asks about the size of your roof, how steep it is, and the shingle you want.
              It shows a planning range. It is not a quote. Your real price comes in writing after the free roof check.
            </p>
            <p style={{ marginTop: 16 }}>
              <Link className="btn btn-ink" href="/estimator/">Open the estimator <span className="arr">→</span></Link>
            </p>
          </div>

          <div style={{ marginTop: 56, maxWidth: 780 }} id="quiz">
            <span className="eyebrow dark">Quick quiz</span>
            <h2 className="rv" style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', fontWeight: 900 }}>Repair or replace?</h2>
            <p className="rv" style={{ color: '#52606b', margin: '10px 0 18px' }}>Five quick questions. You get an honest first guess. Then let us check it for free.</p>
            <RepairOrReplaceQuiz />
          </div>

          <div className="rv" style={{ marginTop: 56, maxWidth: 780 }}>
            <span className="eyebrow dark">How to book</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', fontWeight: 900 }}>Three easy steps</h2>
            <ol style={{ color: '#52606b', lineHeight: 1.9, marginTop: 12 }}>
              <li>Fill out the <a href="#book" style={{ color: 'var(--orange)', fontWeight: 700 }}>short form</a>, or call or text <a href={`tel:${brand.phone}`} style={{ color: 'var(--orange)', fontWeight: 700 }}>{brand.phone}</a>.</li>
              <li>We call you back to pick a time that works.</li>
              <li>We check your roof and send you photos and a written summary.</li>
            </ol>
            <p style={{ color: '#52606b', marginTop: 12 }}>
              Water coming in right now? Call us and say so. See <Link href="/emergency-roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>emergency roof repair</Link>.
            </p>
            <p style={{ color: '#52606b', marginTop: 12 }}>
              {brand.name} · 152 Freedom Dr, Dallas, GA 30157 · <a href={`tel:${brand.phone}`} style={{ color: 'var(--orange)', fontWeight: 700 }}>{brand.phone}</a>
            </p>
            <p style={{ marginTop: 12, fontSize: '.95rem' }}>
              More help: <Link href="/services/roof-repair/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Roof repair</Link>
              {' · '}<Link href="/services/roof-replacement/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Roof replacement</Link>
              {' · '}<Link href="/services/storm-damage-roof-repair/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Storm damage</Link>
              {' · '}<Link href="/dallas-ga-roofing/" style={{ color: 'var(--orange)', fontWeight: 700 }}>Dallas GA roofing</Link>
            </p>
          </div>

          <div className="rv" style={{ marginTop: 56, maxWidth: 780 }}>
            <span className="eyebrow dark">Good to know</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', fontWeight: 900 }}>Questions about the free roof check</h2>
            <div className="faq-list" style={{ marginTop: 16 }}>
              {faqs.map((f, i) => (
                <div className={`faq-item${i === 0 ? ' open' : ''}`} key={f.q}>
                  <button className="faq-q" aria-expanded={i === 0 ? 'true' : 'false'}>{f.q}<span className="pm" aria-hidden="true" /></button>
                  <div className="faq-a"><div><p>{f.a}</p></div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FaqSchema faq={faqs} />
    </>
  );
}
