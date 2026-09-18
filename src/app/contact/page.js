import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';
import ReviewButton from '@/components/ReviewButton';
import { seo } from '@/lib/seo';
import { FaqSchema } from '@/components/LocalSeo';

export const metadata = seo({
  title: 'Contact iRoofer Contractors | Free Roof Inspection Dallas GA',
  description:
    'Talk to a real Dallas GA roofer — call (470) 236-1410 or use the form. Free inspections, clear estimates, zero pressure. Family-owned since 2019.',
  path: '/contact',
});

const faqs = [
  {
    q: 'How fast do you reply?',
    a: 'We aim for within one business hour during posted hours; urgent leak calls get prioritized when crews allow.',
  },
  {
    q: 'Do I need to be home for the inspection?',
    a: 'For most exterior roof inspections, not always — we will confirm access. Final walkthroughs can be scheduled when you are free.',
  },
  {
    q: 'Is the inspection really free?',
    a: 'Yes — inspection and clear findings with no obligation to hire us for the work.',
  },
  {
    q: 'Can I text photos?',
    a: 'Yes. Text (470) 236-1410 with ceiling stains, missing shingles, or ground-level storm debris — it helps us prep.',
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="contact sec-pad">
        <div className="wrap">
          <div className="rv">
            <span className="eyebrow">Let&apos;s talk</span>
            <h1>Talk to a <span className="ac">real roofer.</span></h1>
            <p className="lead">
              Tell us what&apos;s going on with the roof and we&apos;ll get back within one business hour — usually faster.
              Free inspections, free estimates, zero pressure. You&apos;re reaching iRoofer Contractors in Dallas, GA —
              owner {brand.owner}&apos;s crew, not a national call center.
            </p>
            <div className="cinfo">
              <div className="row">
                <span className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .56 3.5 1 1 0 0 1-.25 1Z" /></svg></span>
                <div><div className="lbl">Call or text</div><a href={`tel:${brand.phone}`}>{brand.phone}</a></div>
              </div>
              <div className="row">
                <span className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.4l8 5 8-5V6H4Zm16 2.7-7.4 4.6a1 1 0 0 1-1.2 0L4 8.7V18h16V8.7Z" /></svg></span>
                <div><div className="lbl">Email</div><a href={`mailto:${brand.email}`}>{brand.email}</a></div>
              </div>
              <div className="row">
                <span className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" /></svg></span>
                <div><div className="lbl">Shop &amp; office</div><span className="val">{brand.location} — 152 Freedom Dr, Dallas, GA 30157 (by appointment)</span></div>
              </div>
            </div>
            <div className="towns">
              <div className="lbl">Proudly serving</div>
              <div className="chips">
                {brand.serviceArea.map((a) => <span className="chip" key={a}>{a}</span>)}
              </div>
            </div>
          </div>
          <div className="rv">
            <QuoteForm variant="contact" id="quote-contact" />
          </div>

          <div style={{ marginTop: 28, textAlign: 'center' }}>
            <ReviewButton variant="orange" label="Leave us a Google review" />
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="rv" style={{ maxWidth: 780 }}>
            <h2 style={{ fontSize: 'clamp(1.5rem,2.6vw,2rem)', fontWeight: 800 }}>What happens after you reach out</h2>
            <ol style={{ color: '#52606b', lineHeight: 1.8, marginTop: 12 }}>
              <li><strong>We read what you sent</strong> — leak, storm, replacement curiosity, gutters, or &quot;not sure yet.&quot;</li>
              <li><strong>A real person follows up</strong> — usually phone or text to confirm address, urgency, and whether water is actively entering.</li>
              <li><strong>Inspection scheduled</strong> — on-roof look with photos when we visit; attic clues when accessible.</li>
              <li><strong>Written scope</strong> — repair, tarp, replacement, or &quot;you&apos;re fine for now.&quot; No surprise pressure.</li>
              <li><strong>If insurance may apply</strong> — we explain documentation and adjuster meetups without promising claim approval. See{' '}
                <Link href="/services/roof-insurance-claims/" style={{ color: 'var(--orange)', fontWeight: 700 }}>roof insurance claims</Link>.
              </li>
            </ol>
          </div>

          <div className="faq-grid" style={{ marginTop: 48, alignItems: 'start' }}>
            <div className="rv">
              <h2 style={{ fontSize: 'clamp(1.4rem,2.4vw,1.85rem)', fontWeight: 800 }}>Who you&apos;re contacting</h2>
              <p style={{ color: '#52606b', marginTop: 12, lineHeight: 1.75 }}>
                iRoofer Contractors is family-owned in Dallas since 2019. Licensed, bonded, and insured.
                Owens Corning Preferred when that system fits the job. CertainTeed Storm Restoration Specialist in Georgia when storm restoration details matter.
              </p>
              <p style={{ color: '#52606b', marginTop: 12, lineHeight: 1.75 }}>
                When neighbors call about a drip in Dallas, a storm in Hiram, or a full tear-off in Powder Springs, the same local crew shows up.
                Cristian runs estimates, storm documentation (drone when it helps), and scheduling.
              </p>
            </div>
            <div className="rv">
              <h2 style={{ fontSize: 'clamp(1.4rem,2.4vw,1.85rem)', fontWeight: 800 }}>When to call vs. use the form</h2>
              <ul style={{ color: '#52606b', lineHeight: 1.85, marginTop: 12 }}>
                <li><strong>Call/text now</strong> if water is dripping indoors, a tree opened the deck, or you need same-day tarp guidance — also see{' '}
                  <Link href="/emergency-roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>emergency roof repair Dallas</Link>.</li>
                <li><strong>Form is fine</strong> for planning a replacement, a non-urgent repair, gutters, or a general inspection.</li>
                <li><strong>Either path</strong> gets you to a human — use whichever is easier.</li>
              </ul>
            </div>
          </div>

          <div className="rv" style={{ marginTop: 48, maxWidth: 820 }}>
            <h2 style={{ fontSize: 'clamp(1.4rem,2.4vw,1.85rem)', fontWeight: 800 }}>Common reasons people contact us</h2>
            <ul style={{ color: '#52606b', lineHeight: 1.9, marginTop: 12 }}>
              <li>Ceiling stains or active leaks → <Link href="/roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>roof repair Dallas</Link></li>
              <li>Full roof replacement questions → <Link href="/roof-replacement-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>roof replacement Dallas</Link></li>
              <li>Wind, hail, or storm damage → <Link href="/storm-damage-roof-repair-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>storm damage</Link></li>
              <li>Gutters overflowing or pulling away → <Link href="/gutter-repair-replacement-dallas-ga/" style={{ color: 'var(--orange)', fontWeight: 700 }}>gutter repair &amp; replacement</Link></li>
              <li>New build roofing → <Link href="/services/new-construction/" style={{ color: 'var(--orange)', fontWeight: 700 }}>new construction</Link></li>
              <li>Hiram jobs → <Link href="/roof-repair-hiram/" style={{ color: 'var(--orange)', fontWeight: 700 }}>repair</Link> · <Link href="/roof-replacement-hiram/" style={{ color: 'var(--orange)', fontWeight: 700 }}>replacement</Link></li>
            </ul>
          </div>

          <div className="rv" style={{ marginTop: 40, maxWidth: 720 }}>
            <h2 style={{ fontSize: 'clamp(1.3rem,2.2vw,1.7rem)', fontWeight: 800 }}>Trust notes</h2>
            <ul style={{ color: '#52606b', lineHeight: 1.85, marginTop: 10 }}>
              <li>Local owner on the line</li>
              <li>Written scopes before work</li>
              <li>Clean job sites / magnet sweeps on installs</li>
              <li>No invented &quot;#1 in Atlanta&quot; claims — read neighbors on Google</li>
            </ul>
            <p style={{ marginTop: 20 }}>
              <a className="btn btn-ink" href={`tel:${brand.phone}`}>Call {brand.phone} <span className="arr">→</span></a>
              {' '}
              <Link className="btn btn-ghost" href="/about/" style={{ marginLeft: 8 }}>About iRoofer</Link>
              {' '}
              <Link className="btn btn-ghost" href="/dallas-ga-roofing/" style={{ marginLeft: 8 }}>Dallas roofing hub</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="sec-light sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow dark">Contact FAQ</span>
            <h2>Questions before you hit send</h2>
          </div>
          <div className="faq-list rv">
            {faqs.map((f, i) => (
              <div key={f.q} className={'faq-item' + (i === 0 ? ' open' : '')}>
                <button className="faq-q" aria-expanded={i === 0}>{f.q}<span className="pm" aria-hidden="true" /></button>
                <div className="faq-a"><div><p>{f.a}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FaqSchema faq={faqs} />
    </>
  );
}
