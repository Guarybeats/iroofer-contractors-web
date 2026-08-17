import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import { FaqSchema } from '@/components/LocalSeo';

function faqItem(open){ return 'faq-item' + (open ? ' open' : ''); }

export const metadata = seo({
  title: "Roof Insurance Claim Help in Dallas, GA | iRoofer Contractors",
  description: "We inspect, document the damage, and meet your adjuster on-site so your roof claim reflects the real scope of work. Dallas, GA & Metro Atlanta. Free inspection — call (470) 236-1410.",
  path: '/services/roof-insurance-claims',
});

const faqs = [
  {
    q: "Do you help with the roof insurance claim itself?",
    a: "Yes. We inspect and document the damage, give you the details you need to file, meet your adjuster on the roof, and handle supplements when their scope misses something. You file the claim — we make sure it is scoped correctly."
  },
  {
    q: "What roof damage does homeowners insurance usually cover in Georgia?",
    a: "Sudden, storm-related damage: hail impact, wind-lifted or missing shingles, and damage from fallen trees or debris. Normal age, wear, and deferred maintenance are generally not covered."
  },
  {
    q: "How long do I have to file a roof claim after a storm?",
    a: "Most Georgia policies require the claim within one year of the date of loss, and some are stricter. If you think a past storm damaged your roof, get it inspected now rather than waiting for a leak."
  },
  {
    q: "My roof claim was denied. Is that final?",
    a: "Not always. Denials often come down to what the first adjuster documented. We re-inspect, photograph what was missed, and help you request a re-inspection with that evidence."
  },
  {
    q: "Will filing a claim raise my rates?",
    a: "Storm and hail claims are typically treated as non-preventable weather events, which insurers handle differently from liability claims. We will tell you honestly if the damage is not worth filing on."
  },
  {
    q: "What does the inspection cost?",
    a: "Nothing. The roof inspection and the written damage report are free, with no obligation to file or to hire us."
  }
];

const steps = [
  ['1. Free inspection', 'We walk the roof and fly the drone, then document hail bruising, wind creasing, and collateral damage with dated photos.'],
  ['2. You file, we arm you', 'You call your carrier. We give you the date of loss and the damage details so the claim starts on solid ground.'],
  ['3. We meet your adjuster', 'This is where claims are won or lost. We are on the roof with them so nothing gets scoped out.'],
  ['4. Scope review & supplements', 'We compare their estimate line by line against what the job actually requires and supplement where it falls short.'],
  ['5. We build the roof', 'Manufacturer-certified installation, then the final paperwork so your depreciation gets released.'],
];

export default function Page() {
  return (
    <>
      <section className="sec-light sec-pad">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="faq-grid" style={{ alignItems: 'start' }}>
            <div className="rv">
              <Link href="/services" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.8rem' }}>← All services</Link>
              <span className="eyebrow dark" style={{ marginTop: 16, display: 'inline-block' }}>Dallas, GA &amp; Metro Atlanta</span>
              <h1 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 900, lineHeight: 1.02, marginTop: 8 }}>
                Roof Insurance Claims, Handled For You
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 680 }}>
                Storm damage is stressful enough without decoding an insurance policy. We have walked hundreds of
                Metro Atlanta homeowners through the claim — from the first inspection to the final check — and we
                speak the adjuster&apos;s language.
              </p>
              <p style={{ color: '#52606b', fontSize: '.98rem', marginTop: 12, maxWidth: 680, borderLeft: '3px solid var(--orange)', paddingLeft: 12 }}>
                Local note: Paulding County&apos;s spring supercells drop the heaviest hail in the metro, and the damage
                often is not visible from the ground. We know how local adjusters scope a claim — so your paperwork moves
                instead of stalling.
              </p>
              <div className="cta" style={{ marginTop: 28 }}>
                <a className="bigphone" style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: 700, color: 'var(--orange)' }} href={`tel:${brand.phone}`}>{brand.phone}</a>
                <Link className="btn btn-solid" href="/#contact" style={{ marginLeft: 16, verticalAlign: 'middle' }}>Free damage inspection <span className="arr">→</span></Link>
              </div>
            </div>

            <div className="rv">
              <img src="/assets/storm-damage.webp" alt="Hail-damaged roof documented for an insurance claim in Dallas, GA" loading="lazy" style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%', marginBottom: 24 }} />
              <div style={{ maxWidth: 460, margin: 0 }}>
                <QuoteForm variant="contact" id="roof-insurance-claims-quote" source="Roof Insurance Claims" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">The process</span>
            <h2>How your roof claim works, step by step</h2>
          </div>
          <div className="cards" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))' }}>
            {steps.map(([t, d]) => (
              <div key={t} className="svc-card">
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800 }}>{t}</h4>
                <p style={{ color: '#52606b', fontSize: '.95rem', marginTop: 8 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Coverage</span>
            <h2>What is usually covered — and what is not</h2>
          </div>
          <div className="faq-grid rv" style={{ alignItems: 'start' }}>
            <div>
              <strong style={{ color: '#0b3d16' }}>Usually covered</strong>
              <ul style={{ lineHeight: 2, marginTop: 8, color: '#52606b' }}>
                <li>Hail impact and bruised shingles</li>
                <li>Wind-lifted, creased, or missing shingles</li>
                <li>Fallen tree limbs and storm debris</li>
                <li>Interior water damage from a storm-caused leak</li>
              </ul>
            </div>
            <div>
              <strong style={{ color: '#0b3d16' }}>Usually not covered</strong>
              <ul style={{ lineHeight: 2, marginTop: 8, color: '#52606b' }}>
                <li>Age and normal granule loss</li>
                <li>Deferred maintenance and old, unrepaired leaks</li>
                <li>Poor original installation</li>
              </ul>
              <p style={{ color: '#52606b', fontSize: '.95rem', marginTop: 12 }}>
                Not sure which one you have? That is exactly what the free inspection answers — in writing.
              </p>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <a className="btn btn-ink" href="/#contact">Get your free damage report <span className="arr">→</span></a>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Roof insurance claim FAQ</span>
            <h2>Questions homeowners ask us</h2>
          </div>
          <div className="faq-list rv">
            {faqs.map((f, i) => (
              <div key={f.q} className={faqItem(i === 0)}>
                <button className="faq-q" aria-expanded={i === 0}>{f.q}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{f.a}</p></div></div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/storm-damage-roof-repair-dallas-ga" className="btn btn-ink">Storm damage roof repair in Dallas, GA <span className="arr">→</span></Link>
            <Link href="/blog/dallas-ga-hail-storm-insurance-claims" className="btn btn-ink" style={{ marginLeft: 12 }}>Hail claim guide <span className="arr">→</span></Link>
          </div>
        </div>
      </section>
      <FaqSchema faq={faqs} />
    </>
  );
}
