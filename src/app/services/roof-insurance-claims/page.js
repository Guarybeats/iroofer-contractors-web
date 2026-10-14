import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import FreeRoofCheckCta from '@/components/FreeRoofCheckCta';
import RelatedGuides from '@/components/RelatedGuides';
import { brand } from '@/lib/brand';
import { seo } from '@/lib/seo';
import { FaqSchema } from '@/components/LocalSeo';

function faqItem(open){ return 'faq-item' + (open ? ' open' : ''); }

export const metadata = seo({
  title: 'Roof Insurance Claims Help Dallas GA | Storm Documentation | iRoofer',
  description: 'Roof insurance claims help in Dallas, GA — photo documentation, written scopes, and adjuster meetings when scheduled. Call (470) 236-1410. No guaranteed claim outcomes.',
  path: '/services/roof-insurance-claims',
});

const faqs = [
  {
    q: "Do you help with the roof insurance claim itself?",
    a: "Yes. We check the roof and take photos of the damage. We give you the details you need to file. We meet your adjuster on the roof. If they miss something, we ask them to add it. You file the claim. We can’t promise it will be approved."
  },
  {
    q: "What roof damage does homeowners insurance usually cover in Georgia?",
    a: "Sudden storm damage: hail hits, shingles lifted or blown off by wind, and damage from fallen trees. Old age, normal wear, and skipped upkeep are usually not covered. It always depends on your policy."
  },
  {
    q: "How long do I have to file a roof claim after a storm?",
    a: "Many policies have a time limit, and some are short. Check your policy. If you think a past storm hurt your roof, get it checked now. Don’t wait for a leak."
  },
  {
    q: "My roof claim was denied. Is that final?",
    a: "Not always. A denial often comes down to what the first adjuster wrote down. We check the roof again and take photos of what they missed. Then we help you ask for a second look."
  },
  {
    q: "Will filing a claim raise my rates?",
    a: "It depends on your insurance company. We won’t guess about your rates. We will tell you honestly if the damage may not be worth a claim."
  },
  {
    q: "What does the inspection cost?",
    a: "Nothing. The roof check and the written damage report are free. You don’t have to file or hire us."
  }
];

const steps = [
  ['1. Free inspection', 'We walk the roof, and fly a drone when it helps. We take dated photos of hail hits, wind creases, and damage to vents, gutters, and siding.'],
  ['2. You file, we back you up', 'You call your insurance company. We give you the storm date and the damage details, so your claim starts strong.'],
  ['3. We meet your adjuster', 'We get on the roof with them, so real damage isn’t missed from the driveway.'],
  ['4. We check their estimate', 'We go over their estimate line by line. If it leaves out work the job needs, we ask them to add it.'],
  ['5. We build the roof', 'We install the roof the way the shingle maker says to. Then we help with the last paperwork to get any held-back money, when your policy allows it.'],
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
                Roof Insurance Claims Help in Dallas, GA
              </h1>
              <p style={{ color: '#52606b', fontSize: '1.1rem', marginTop: 14, maxWidth: 680 }}>
                After hail or wind, the paperwork can feel worse than the storm. iRoofer Contractors is family-owned in Dallas since 2019. We take photos of what we find on the roof and write a clear plan. We can meet your adjuster at your home. The owner is Cristian Mendez. We install Owens Corning shingles as an Owens Corning Contractor Rewards member.
              </p>
              <p style={{ color: '#52606b', fontSize: '.98rem', marginTop: 12, maxWidth: 680, borderLeft: '3px solid var(--orange)', paddingLeft: 12 }}>
                Paulding storms often leave hail and wind damage you can&apos;t see from the driveway.
                We take the kind of photos and notes adjusters look for, so your claim keeps moving.
                <strong> No win-rates. No guaranteed approvals.</strong>
              </p>
              <div className="cta" style={{ marginTop: 28 }}>
                <a className="bigphone" style={{ display: 'inline-block', fontSize: '1.4rem', fontWeight: 700, color: 'var(--orange)' }} href={`tel:${brand.phone}`}>{brand.phone}</a>
                <Link className="btn btn-solid" href="/contact/" style={{ marginLeft: 16, verticalAlign: 'middle' }}>Free damage inspection <span className="arr">→</span></Link>
              </div>
            </div>

            <div className="rv">
              <img src="/assets/storm-damage.webp?v=2" alt="Hail-damaged roof documented for an insurance claim in Dallas, GA" loading="lazy" style={{ borderRadius: 8, border: '1px solid rgba(22,29,37,.1)', width: '100%', marginBottom: 24 }} />
              <FreeRoofCheckCta />
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
          <div className="rv" style={{ maxWidth: 780 }}>
            <h2 style={{ fontSize: 'clamp(1.35rem,2.2vw,1.75rem)', fontWeight: 800 }}>Hail claims: photos, not promises</h2>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 10 }}>
              We take dated photos that show hail hits, not just wear. We meet your adjuster. We ask for missed items.
              What gets approved depends on your policy. Start at{' '}
              <Link href="/storm-damage-roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>storm damage roof repair Dallas</Link>.
              Call {brand.phone} or{' '}
              <Link href="/contact/" style={{ color: 'var(--orange)', fontWeight: 700 }}>https://iroofercontractors.com/contact/</Link>.
            </p>
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
                <li>Old age and normal loss of shingle grit</li>
                <li>Skipped upkeep and old leaks that were never fixed</li>
                <li>A roof that was put on wrong</li>
              </ul>
              <p style={{ color: '#52606b', fontSize: '.95rem', marginTop: 12 }}>
                Not sure which one you have? A free roof check tells you, in writing.
              </p>
            </div>
          </div>

          <div className="rv" style={{ marginTop: 40, maxWidth: 780 }}>
            <h2 style={{ fontSize: 'clamp(1.35rem,2.2vw,1.75rem)', fontWeight: 800 }}>Why good photos matter</h2>
            <p style={{ color: '#52606b', lineHeight: 1.75, marginTop: 10 }}>
              Adjusters pay for what they can see and what you can show. Dated photos, clear notes on wind versus hail damage,
              and a line-by-line check of their estimate let us ask for missed items based on facts, not arguments.
            </p>
            <h3 style={{ marginTop: 24, fontSize: '1.15rem', fontWeight: 800 }}>What we don&apos;t do</h3>
            <ul style={{ color: '#52606b', lineHeight: 1.85, marginTop: 8 }}>
              <li>We don&apos;t file the claim for you (it’s your policy)</li>
              <li>We don&apos;t guarantee approvals, timelines, or ACV/RCV outcomes</li>
              <li>We don&apos;t invent &quot;we win X% of claims&quot; marketing</li>
              <li>We do show up with photos and a repair plan that matches the damage</li>
            </ul>
            <h3 style={{ marginTop: 24, fontSize: '1.15rem', fontWeight: 800 }}>Homeowner checklist before you call the carrier</h3>
            <ol style={{ color: '#52606b', lineHeight: 1.85, marginTop: 8 }}>
              <li>Photos from the ground</li>
              <li>Note the storm date if you know it</li>
              <li>Don&apos;t sign with door-knockers who give you no written plan</li>
              <li>Call {brand.phone} if you want a local roofer to take photos first</li>
            </ol>
            <p style={{ color: '#52606b', marginTop: 16, lineHeight: 1.75 }}>
              On many policies, some money is held back until the work is done. That last paperwork still matters after the first check comes.
              Take photos soon after a storm, when it&apos;s safe. Leaks that show up weeks later still need photos and a roof check.
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
              Family-owned in Dallas since 2019. {brand.owner}&apos;s crew takes the photos and does the repairs.
              Owens Corning Contractor Rewards member.
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
