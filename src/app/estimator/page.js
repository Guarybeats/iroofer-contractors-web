import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import { FaqSchema } from '@/components/LocalSeo';
import { renderInline } from '@/components/InlineText';

export const metadata = seo({
  title: 'Roof Estimate | Dallas GA | iRoofer Contractors',
  description:
    'Curious what a new roof might run in Dallas GA? See what drives cost, how our estimate works, then get a real number from a free inspection. (470) 236-1410',
  path: '/estimator',
});

const faqs = [
  {
    q: 'Do you publish prices online?',
    a: 'No. Every roof is different, so we price after a free inspection and put the number in writing.',
  },
  {
    q: 'Why won’t you quote over the phone?',
    a: 'Because we can’t see decking, layers, or safe access from a phone call — guessing misleads you.',
  },
  {
    q: 'Do you price repairs here too?',
    a: 'This page leans replacement curiosity. For leaks and stains, start with repair or contact us.',
  },
  {
    q: 'Are you an Owens Corning Preferred contractor?',
    a: 'Yes — when that system fits your house and the job.',
  },
];

const drivers = [
  { t: 'Size (squares)', d: 'More area means more material and labor.' },
  { t: 'Pitch & stories', d: 'Steeper or taller roofs need more time and safety setup.' },
  { t: 'Tear-off layers', d: 'Multiple layers mean heavier tear-off and disposal.' },
  { t: 'Decking condition', d: 'Soft sheathing found after tear-off changes scope.' },
  { t: 'Material choice', d: 'Architectural asphalt (including Owens Corning systems when they fit), other asphalt tiers, or metal — different labor and detail work.' },
  { t: 'Ventilation, ridge, flashings', d: 'Done right versus skimmed.' },
  { t: 'Add-ons', d: 'Gutters, skylights, permits when required.' },
  { t: 'Storm / insurance path', d: 'Documentation may apply; approval depends on your policy.' },
];

export default function EstimatorPage() {
  return (
    <>
      <section className="estimator-page sec-pad">
        <div className="wrap">
          <div className="rv" style={{ textAlign: 'center', marginBottom: '2.4rem' }}>
            <span className="eyebrow">Free roof estimate</span>
            <h1 style={{ fontSize: 'clamp(2.4rem,5vw,3.8rem)', fontWeight: 900, marginTop: 12 }}>
              Get a Roof Estimate
            </h1>
            <p className="lead" style={{ maxWidth: '42rem', margin: '1rem auto 0' }}>
              Request a free estimate and we&apos;ll come out, inspect and measure the roof, and put a real number in writing.
              Your Dallas roof&apos;s pitch, layers, decking, and access decide the price, so we don&apos;t guess over the phone or online.
            </p>
            <p style={{ color: '#52606b', maxWidth: '40rem', margin: '0.85rem auto 0', fontSize: '.98rem' }}>
              iRoofer Contractors is family-owned here since 2019. {brand.owner}&apos;s local crew
              measures what you actually have — then puts it in writing.
            </p>
            <p style={{ marginTop: 14 }}>
              <a href={`tel:${brand.phone}`} style={{ fontWeight: 800, color: 'var(--orange)' }}>{brand.phone}</a>
              {' · '}
              <Link href="/contact/" style={{ fontWeight: 700, color: 'var(--orange)' }}>Contact form</Link>
            </p>
          </div>
          <div style={{ maxWidth: '42rem', margin: '0 auto 1.6rem', padding: '1rem 1.2rem', background: '#fff4ec', border: '1px solid rgba(232,93,4,.25)', borderRadius: 8, textAlign: 'center', color: '#3b4752' }}>
            <strong>Leaking right now?</strong> Skip the form. Call{' '}
            <a href={`tel:${brand.phone}`} style={{ fontWeight: 800, color: 'var(--orange)' }}>{brand.phone}</a>
            {' '}or see{' '}
            <Link href="/emergency-roof-repair-dallas-ga/" style={{ fontWeight: 700, color: 'var(--orange)' }}>emergency roof repair</Link>.
            {' '}This form is for estimates, not for active water.
          </div>
          <div style={{ maxWidth: 520, margin: '0 auto' }}>
            <QuoteForm variant="contact" id="quote-estimator" source="Estimator Page" title="Request a Free Roof Estimate" />
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Cost drivers</span>
            <h2>What actually drives roof replacement cost</h2>
            <p style={{ color: '#52606b', maxWidth: 680 }}>
              Qualitative factors — not a price table. More depth on our{' '}
              <Link href="/roof-replacement-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>roof replacement Dallas</Link>
              {' '}page and our{' '}
              <Link href="/blog/roof-replacement-cost-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>replacement cost factors guide</Link> (not a quote).
            </p>
          </div>
          <div className="cards" style={{ marginTop: 24 }}>
            {drivers.map((d) => (
              <div className="card" key={d.t}><div className="body"><h3>{d.t}</h3><p style={{ color: '#52606b' }}>{d.d}</p></div></div>
            ))}
          </div>

          <div className="faq-grid" style={{ marginTop: 56, alignItems: 'start' }}>
            <div className="rv">
              <h2 style={{ fontSize: 'clamp(1.5rem,2.6vw,2rem)', fontWeight: 800 }}>How a real iRoofer estimate works</h2>
              <ol style={{ color: '#52606b', lineHeight: 1.85, marginTop: 12 }}>
                <li>You share address + what&apos;s going on (form, text, or call)</li>
                <li>We inspect and photograph</li>
                <li>We measure (drone when useful)</li>
                <li>You get a <strong>written</strong> proposal — tear-off, decking assumptions, materials, flashings</li>
                <li>You decide — no same-day hard sell</li>
              </ol>
              <p style={{ color: '#52606b', marginTop: 12 }}>The inspection is the quote. Request one at{' '}
                <Link href="/contact/" style={{ color: 'var(--orange)', fontWeight: 700 }}>https://iroofercontractors.com/contact/</Link> or call {brand.phone}.</p>
            </div>
            <div className="rv">
              <h2 style={{ fontSize: 'clamp(1.5rem,2.6vw,2rem)', fontWeight: 800 }}>Repair vs replace</h2>
              <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 12 }}>
                Not every leak needs a full replacement. If the failure is a boot, flashing, or a small wind lift —{' '}
                <Link href="/roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>roof repair in Dallas</Link>
                {' '}may be the smart spend. If patches keep stacking or wear is widespread, replacement is cleaner.
                We&apos;ll say which after we see the roof.
              </p>
              <h3 style={{ marginTop: 24, fontSize: '1.15rem', fontWeight: 800 }}>What&apos;s usually in a replacement conversation</h3>
              <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 8 }}>
                Full tear-off as scoped · decking repairs as found · underlayment / ice &amp; water where needed ·
                flashings · shingles · ridge/vent details · cleanup / magnet sweep · warranty paperwork walkthrough.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Estimator FAQ</span>
            <h2>Questions about estimates</h2>
          </div>
          <div className="faq-list rv">
            {faqs.map((f, i) => (
              <div key={f.q} className={'faq-item' + (i === 0 ? ' open' : '')}>
                <button className="faq-q" aria-expanded={i === 0}>{f.q}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{renderInline(f.a)}</p></div></div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            <a className="btn btn-ink" href={`tel:${brand.phone}`}>Lock a real number: {brand.phone}</a>
            {' '}
            <Link className="btn btn-ghost" href="/contact/" style={{ marginLeft: 8 }}>Book a free inspection →</Link>
            {' '}
            <Link className="btn btn-ghost" href="/emergency-roof-repair-dallas-ga/" style={{ marginLeft: 8 }}>Emergency? →</Link>
            {' '}
            <Link className="btn btn-ghost" href="/roof-replacement-dallas-ga/" style={{ marginLeft: 8 }}>Replacement Dallas</Link>
            {' '}
            <Link className="btn btn-ghost" href="/dallas-ga-roofing/" style={{ marginLeft: 8 }}>Dallas hub</Link>
          </p>
        </div>
      </section>
      <FaqSchema faq={faqs} />
    </>
  );
}
