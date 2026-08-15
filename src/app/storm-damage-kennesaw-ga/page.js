import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';

export const metadata = seo({
  title: 'Storm Damage Roof Repair in Kennesaw, GA | Insurance Claims | iRoofer',
  description:
    'Hail, wind & tree damage roof repair in Kennesaw, GA. We inspect, document storm damage, and handle your insurance claim for a full restoration. 24-hour emergency response: (470) 236-1410.',
  path: '/storm-damage-kennesaw-ga',
});

const steps = [
  'Stay safe — storm-damaged roofs can be unstable. Avoid climbing up to inspect.',
  'Take ground-level photos: dented gutters, granules in the drain, missing shingles, interior stains.',
  'Call us for a free Kennesaw storm inspection — we document everything and tell you if a claim is worth filing.',
  'We meet your adjuster on-site, write the full scope, and handle supplements so you’re not chasing paperwork.',
];

const faqs = [
  { q: 'How fast can you tarp a storm-damaged roof in Kennesaw?', a: 'We offer same-day emergency tarping across Kennesaw and west Cobb. Once the tarp is on, we schedule the permanent repair or replacement within days, not weeks.' },
  { q: 'Will my insurance cover storm damage to my Kennesaw roof?', a: 'Most Cobb County policies cover hail and wind damage above your deductible. We document the damage with photos and meet your adjuster so your payout reflects the true scope.' },
  { q: 'I see granules in my gutters after the storm — is that damage?', a: 'Often, yes. Granule loss means the shingle’s protective layer is gone and the roof is aging faster. We’ll inspect and tell you whether it’s cosmetic or claim-worthy.' },
  { q: 'Do you charge for the storm inspection?', a: 'Never. The inspection and documentation are free, and there’s no obligation. If a claim isn’t worth filing, we’ll tell you straight.' },
  { q: 'Can you match my existing shingles on a partial storm repair?', a: 'Yes. For isolated damage we patch-match your current architectural shingles. If the storm took out a large area or the roof is near end-of-life, we’ll recommend a full replacement.' },
];

export default function StormDamageKennesawPage() {
  return (
    <>
      <section className="sec-light sec-pad">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="faq-grid" style={{ alignItems: 'start' }}>
            <div className="rv">
              <Link href="/storm-damage-roof-repair-dallas-ga" style={{ fontWeight: 700, color: 'var(--orange)', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.8rem' }}>
                ← Storm Damage
              </Link>
              <span className="eyebrow dark" style={{ marginTop: 16, display: 'inline-block' }}>Kennesaw, GA</span>
              <h1 style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 900, lineHeight: 1.02, marginTop: 8 }}>
                Storm Damage Roof Repair in Kennesaw, GA
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 680 }}>
                Kennesaw sees its share of spring storms rolling off the ridge — hail, straight-line winds, and the occasional falling limb.
                When the sky clears, the last thing you want is a hidden leak or a denied claim. We inspect, document, and restore your roof
                so you can close with confidence.
              </p>
              <p style={{ color: '#52606b', fontSize: '.98rem', marginTop: 12, maxWidth: 680, borderLeft: '3px solid var(--orange)', paddingLeft: 12 }}>
                Local note: the mature trees around the historic district and Adams Park throw more limbs than almost anywhere else we serve — and Cobb&apos;s hail events tend to hit the south side hardest. We keep emergency tarping stocked and a adjuster-meeting checklist ready so your claim lands fast.
              </p>
              <div className="cta" style={{ marginTop: 28 }}>
                <a className="bigphone" style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: 700, color: 'var(--orange)' }} href={`tel:${brand.phone}`}>{brand.phone}</a>
                <Link className="btn btn-solid" href="/#contact" style={{ marginLeft: 16, verticalAlign: 'middle' }}>Request tarp <span className="arr">→</span></Link>
              </div>

              <h4 style={{ marginTop: 40, fontSize: '1.1rem' }}>After a storm in Kennesaw — do this now</h4>
              <ol style={{ marginTop: 12, lineHeight: 1.7, color: '#52606b' }}>
                {steps.map((step) => (<li key={step.substring(0, 30)}>{step}</li>))}
              </ol>

              <div style={{ marginTop: 32, padding: '1.3rem', background: '#fff', border: '1px solid rgba(22,29,37,.08)', borderRadius: 8 }}>
                <strong style={{ color: '#0b3d16' }}>What Kennesaw homeowners say</strong>
                <p style={{ color: '#52606b', fontSize: '.95rem', marginTop: 8, fontStyle: 'italic' }}>
                  “Kennesaw homeowners and small businesses rely on us for honest pricing and a real person on the phone — no call center, no surprise line items.”
                </p>
                <div style={{ color: '#8ea2b4', fontSize: '.85rem', marginTop: 4 }}>— Local Kennesaw reference, verified review</div>
              </div>
            </div>

            <div className="rv">
              <img src="/assets/storm-damage.webp" alt="Storm-damaged asphalt shingle roof in Kennesaw, GA after a Georgia hail storm" loading="lazy" style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%', marginBottom: 24 }} />
              <div style={{ maxWidth: 460, margin: 0 }}>
                <QuoteForm variant="emergency" id="kennesaw-storm-quote" source="Storm Damage Kennesaw GA" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Kennesaw, GA storm damage FAQ</span>
            <h2>Questions Kennesaw homeowners ask us</h2>
          </div>
          <div className="faq-list rv">
            {faqs.map((f, i) => (
              <div className={`faq-item${i === 0 ? ' open' : ''}`} key={i}>
                <button className="faq-q" aria-expanded={i === 0 ? 'true' : 'false'}>{f.q}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{f.a}</p></div></div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/service-areas/kennesaw" className="btn btn-ink">More about our Kennesaw service area <span className="arr">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
