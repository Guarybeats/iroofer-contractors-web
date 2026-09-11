import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import RelatedGuides from '@/components/RelatedGuides';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import { FaqSchema } from '@/components/LocalSeo';

function faqItem(open){ return 'faq-item' + (open ? ' open' : ''); }

export const metadata = seo({
  title: 'Roof Insurance Claim Help | Storm Documentation | iRoofer',
  description: 'Roof insurance claim help — we document storm damage, meet your adjuster, and help with supplements. Dallas GA. (470) 236-1410 · https://iroofercontractors.com/contact/',
  path: '/services/roof-insurance-claims',
});

const faqs = [
  {
    q: "Do you help with the roof insurance claim itself?",
    a: "Yes. We inspect and document the damage, give you the details you need to file, meet your adjuster on the roof, and handle supplements when their scope misses something. You file the claim — we make sure it is scoped correctly. We do not guarantee approvals."
  },
  {
    q: "What roof damage does homeowners insurance usually cover in Georgia?",
    a: "Sudden, storm-related damage: hail impact, wind-lifted or missing shingles, and damage from fallen trees or debris. Normal age, wear, and deferred maintenance are generally not covered. Always subject to your policy."
  },
  {
    q: "How long do I have to file a roof claim after a storm?",
    a: "Most Georgia policies require the claim within one year of the date of loss, and some are stricter. Check your policy. If you think a past storm damaged your roof, get it inspected now rather than waiting for a leak."
  },
  {
    q: "My roof claim was denied. Is that final?",
    a: "Not always. Denials often come down to what the first adjuster documented. We re-inspect, photograph what was missed, and help you request a re-inspection with that evidence."
  },
  {
    q: "Will filing a claim raise my rates?",
    a: "Carriers vary. Storm and hail claims are often treated differently from liability claims, but we never invent rate predictions. We will tell you honestly if the damage may not be worth filing on."
  },
  {
    q: "What does the inspection cost?",
    a: "Nothing. The roof inspection and the written damage report are free, with no obligation to file or to hire us."
  }
];

const steps = [
  ['1. Free inspection', 'We walk the roof and fly the drone when useful, then document hail bruising, wind creasing, and collateral damage with dated photos.'],
  ['2. You file, we arm you', 'You call your carrier. We give you the date of loss and the damage details so the claim starts on solid ground.'],
  ['3. We meet your adjuster', 'We are on the roof with them so valid damage is not scoped out from the driveway.'],
  ['4. Scope review & supplements', 'We compare their estimate line by line against what the job actually requires and supplement where it falls short.'],
  ['5. We build the roof', 'Manufacturer-minded installation, then help with the paperwork path for recoverable depreciation when it applies — still subject to your policy.'],
];

export default function Page() {
  return (
    <>
      <section className="sec-light sec-pad">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="faq-grid" style={{ alignItems: 'start' }}>
            <div className="rv">
              <Link href="/services/" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.8rem' }}>← All services</Link>
              <span className="eyebrow dark" style={{ marginTop: 16, display: 'inline-block' }}>Dallas, GA &amp; Metro Atlanta</span>
              <h1 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 900, lineHeight: 1.02, marginTop: 8 }}>
                Roof Insurance Claims, Handled With You
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 680 }}>
                Storm damage is stressful enough without decoding a policy alone. We walk homeowners from inspection to finished roof
                and speak the adjuster&apos;s language — without a hard sell.
              </p>
              <p style={{ color: '#52606b', fontSize: '.98rem', marginTop: 12, maxWidth: 680, borderLeft: '3px solid var(--orange)', paddingLeft: 12 }}>
                Local note: West Metro Atlanta weather swings — spring storms, summer UV, wet winters — punish asphalt and flashing.
                Documentation quality matters. We know how local adjusters scope a claim so your paperwork moves instead of stalling.
                <strong> No win-rates. No guaranteed approvals.</strong>
              </p>
              <div className="cta" style={{ marginTop: 28 }}>
                <a className="bigphone" style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: 700, color: 'var(--orange)' }} href={`tel:${brand.phone}`}>{brand.phone}</a>
                <Link className="btn btn-solid" href="/contact/" style={{ marginLeft: 16, verticalAlign: 'middle' }}>Free damage inspection <span className="arr">→</span></Link>
              </div>
            </div>

            <div className="rv">
              <img src="/assets/storm-damage.webp?v=2" alt="Hail-damaged roof documented for an insurance claim in Dallas, GA" loading="lazy" style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%', marginBottom: 24 }} />
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
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800 }}>{t}</h3>
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
              <strong style={{ color: '#0b3d16' }}>Usually covered (policy-dependent)</strong>
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

          <div className="rv" style={{ marginTop: 40, maxWidth: 780 }}>
            <h2 style={{ fontSize: 'clamp(1.35rem,2.2vw,1.75rem)', fontWeight: 800 }}>Why documentation quality matters</h2>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 10 }}>
              Adjusters scope what they can see and what you can show. Date-stamped photos, clear notes on wind crease versus impact bruising,
              and a line-by-line read of the carrier estimate are how supplements get grounded in the roof — not in argument.
            </p>
            <h3 style={{ marginTop: 24, fontSize: '1.15rem', fontWeight: 800 }}>What we don&apos;t do</h3>
            <ul style={{ color: '#52606b', lineHeight: 1.85, marginTop: 8 }}>
              <li>We don&apos;t file the claim for you (you own the policy relationship)</li>
              <li>We don&apos;t guarantee approvals, timelines, or ACV/RCV outcomes</li>
              <li>We don&apos;t invent &quot;we win X% of claims&quot; marketing</li>
              <li>We do show up with evidence and a repair plan that matches the damage</li>
            </ul>
            <h3 style={{ marginTop: 24, fontSize: '1.15rem', fontWeight: 800 }}>Homeowner checklist before you call the carrier</h3>
            <ol style={{ color: '#52606b', lineHeight: 1.85, marginTop: 8 }}>
              <li>Photos from the ground</li>
              <li>Note the storm date if you know it</li>
              <li>Don&apos;t authorize random door-knockers without a written scope</li>
              <li>Call {brand.phone} for an inspection if you want local documentation first</li>
            </ol>
            <p style={{ color: '#52606b', marginTop: 16, lineHeight: 1.75 }}>
              After the check clears, recoverable depreciation and final paperwork still need attention on many policies.
              Document promptly after a storm when it&apos;s safe. Quiet leaks that show up weeks later still deserve photos and an inspection.
            </p>
          </div>

          <div style={{ marginTop: 24 }}>
            <Link className="btn btn-ink" href="/contact/">Get your free damage report <span className="arr">→</span></Link>
            <RelatedGuides slug="roof-insurance-claims" />
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
            <p style={{ color: '#52606b', marginBottom: 12 }}>
              Family-owned in Dallas since 2019. {brand.owner}&apos;s crew documents and repairs — licensed, bonded, insured.
              Owens Corning Preferred on permanent systems when selected. CertainTeed Storm Restoration Specialist (GA) when storm restoration details apply.
            </p>
            <Link href="/storm-damage-roof-repair-dallas-ga/" className="btn btn-ink">Storm damage roof repair in Dallas, GA <span className="arr">→</span></Link>
            <Link href="/emergency-roof-repair-dallas-ga/" className="btn btn-ink" style={{ marginLeft: 12 }}>Emergency Dallas <span className="arr">→</span></Link>
            <Link href="/blog/dallas-ga-hail-storm-insurance-claims/" className="btn btn-ink" style={{ marginLeft: 12 }}>Hail claim guide <span className="arr">→</span></Link>
            <Link href="/contact/" className="btn btn-ghost" style={{ marginLeft: 12 }}>Contact</Link>
          </div>
        </div>
      </section>
      <FaqSchema faq={faqs} />
    </>
  );
}
