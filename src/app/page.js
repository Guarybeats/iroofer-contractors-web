import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import HeroForm from '@/components/HeroForm';
import ReviewButton from '@/components/ReviewButton';
import { brand, services } from '@/lib/brand';
import { posts } from '@/lib/posts';
import Pic from '@/components/Pic';
import FreeRoofCheckCta from '@/components/FreeRoofCheckCta';
import { renderInline } from '@/components/InlineText';
import { plainText } from '@/lib/inlineLinks';
import { GBP_URL } from '@/components/LocalSeo';


const dallasLinks = [
  { href: '/roof-replacement-dallas-ga/', label: 'Roof replacement in Dallas, GA' },
  { href: '/roof-repair-dallas-ga/', label: 'Roof repair / leak repair in Dallas, GA' },
  { href: '/storm-damage-roof-repair-dallas-ga/', label: 'Storm & hail damage roof repair Dallas' },
  { href: '/services/roof-insurance-claims/', label: 'Insurance claims help' },
  { href: '/dallas-ga-roofing/', label: 'Dallas roofing company hub' },
  { href: '/emergency-roof-repair-dallas-ga/', label: 'Emergency roof repair Dallas' },
  { href: '/gutter-repair-replacement-dallas-ga/', label: 'Gutter repair & replacement' },
  { href: '/roof-replacement-hiram/', label: 'Roof replacement in Hiram' },
  { href: '/roof-repair-hiram/', label: 'Roof repair / inspection in Hiram' },
  { href: '/blog/roof-replacement-cost-dallas-ga/', label: 'Roof replacement cost factors' },
];

const svcs = [
  { n: '01', title: 'Roof Repair', tag: 'Leaks & flashing', img: '/assets/service-repair.jpg?v=3',
    href: '/roof-repair-dallas-ga/', cta: 'Roof repair in Dallas, GA',
    body: 'Water stains, loose flashing, cracked pipe boots, and leaks you can’t find. We track down where the water gets in. Then we fix it, seal it, and match the color so the repair blends in.' },
  { n: '02', title: 'Roof Replacement', tag: 'Most popular', img: '/assets/service-replacement.jpg?v=2',
    href: '/roof-replacement-dallas-ga/', cta: 'Roof replacement in Dallas, GA',
    body: 'We take the old roof off down to the wood. We add a leak barrier, a water-proof layer, and new shingles, put on the way the maker says to. You also get a vent at the peak, metal drip edge, and a magnet sweep for every nail.' },
  { n: '03', title: 'New Construction', tag: 'Builders', img: '/assets/service-newconstruction.jpg?v=2',
    href: '/services/new-construction/', cta: 'Talk to a local roofer',
    body: 'We work with builders and homeowners on new homes. We put on a roof that fits the design and the budget. It meets code, gets inspected, and is built to last.' },
  { n: '04', title: 'Storm & Insurance Claims', tag: 'Same-day when schedule allows', img: '/assets/service-repair.jpg?v=3',
    href: '/storm-damage-roof-repair-dallas-ga/', cta: 'Storm damage roof repair Dallas',
    body: 'We take photos of hail and wind damage and write up what needs fixing. We meet your insurance adjuster at the house. If they miss items, we ask them to add them. We help with the paperwork, so you don’t pay up front for what the claim should cover.' },
  { n: '05', title: 'Gutter Repair & Replacement', tag: 'Protection', img: '/assets/service-gutters-main.jpg?v=2',
    href: '/gutter-repair-replacement-dallas-ga/', cta: 'Gutter repair & replacement Dallas',
    body: 'Clogged or broken gutters can send water back under your shingles and against your home. We clean, fix, and replace seamless gutters so water flows away from your home, not into it.' },
];


const faqs = [
  { q: 'Do you do roof repair in Dallas, GA?', a: 'Yes. Leaks, loose flashing, pipe boots, and storm wear are everyday work for us. Start at [roof repair in Dallas, GA](/roof-repair-dallas-ga/). Not sure what you need? Book a [free roof check](/free-roof-check/).' },
  { q: 'Do you replace roofs in Dallas, GA?', a: 'Yes. See [roof replacement in Dallas, GA](/roof-replacement-dallas-ga/). It shows what we do, how it works, and what comes next.' },
  { q: 'Hail or wind after a Dallas storm?', a: 'See [storm damage roof repair in Dallas](/storm-damage-roof-repair-dallas-ga/) and [roof insurance claims help](/services/roof-insurance-claims/). We take photos of the damage. What insurance approves depends on your policy, so we can’t promise a result.' },
  { q: 'Need Hiram help?', a: 'Go to [roof repair in Hiram](/roof-repair-hiram/) or [roof replacement in Hiram](/roof-replacement-hiram/). It’s the same crew from Dallas. Call (470) 236-1410.' },
  { q: 'Looking for a Dallas roofing contractor?', a: 'Pick the service you need: repair, new roof, or storm. Or see all of it on our [Dallas roofing company hub](/dallas-ga-roofing/). You can also call (470) 236-1410 or use https://iroofercontractors.com/contact/.' },
  { q: 'How long does a full replacement take?', a: 'It depends on the size and steepness of the roof, how many old layers come off, wood repairs, and weather. We give you a real schedule in writing before we start.' },
  { q: 'Do I need to be home during the work?', a: 'No. All the work is outside. We text you photos as we go and walk the job with you when you’re free. We sweep for nails with a magnet on every new roof.' },
];

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: plainText(f.a) },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bgword" aria-hidden="true">Roofing</div>
        <div className="wrap">
          <div className="hero-copy">
            <span className="eyebrow">Dallas, GA · Atlanta Metro</span>
            <h1>Dallas GA Roof Repair, Replacement &amp; Storm Damage <br /><span className="stroke">— done local.</span></h1>
            <p className="lead">Family-owned in Dallas since 2019. Need a leak fixed this week? A new roof? Help after hail or wind? Cristian Mendez’s crew checks your roof, puts the plan in writing, and stands behind the work. We install Owens Corning shingles as an Owens Corning Contractor Rewards member.</p>
            <div className="hero-cta">
              <a className="btn btn-solid" href="/free-roof-check/">Get a Free Roof Check <span className="arr">→</span></a>
              <a className="btn btn-ghost" href={`tel:${brand.phone}`}>Call or text {brand.phone}</a>
            </div>
            <div className="stats">
              <div className="stat"><div className="num"><span className="cnt" data-count="2019" data-nogroup>2019</span></div><div className="lbl">Family-owned in Dallas since</div></div>
              <div className="stat"><div className="num">Free</div><div className="lbl">No-pressure roof inspections</div></div>
              <div className="stat"><div className="num">Local</div><div className="lbl">Owens Corning Contractor Rewards Member</div></div>
              <div className="stat"><div className="num">Real</div><div className="lbl">Crew — not a call center</div></div>
            </div>
          </div>

          <div className="hero-media">
            <div className="frame" aria-hidden="true"></div>
            <img className="main" src="/assets/hero.webp?v=3" alt="iRoofer crew installing architectural shingles on a Georgia home in Dallas" width={800} height={1000} loading="eager" decoding="async" fetchPriority="high" />
            <div className="badge" aria-hidden="true">
              <svg viewBox="0 0 120 120"><defs><path id="circ" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" /></defs>
                <text fill="#f3f5f4" fontFamily="Public Sans" fontSize="11.5" fontWeight="700" letterSpacing="2.4"><textPath href="#circ">FREE INSPECTIONS • STORM RESPONSE • </textPath></text>
              </svg>
              <span className="star">★</span>
            </div>

            <HeroForm />
          </div>
        </div>
      </section>


      {/* ATF INTENT CARDS — service links */}
      <section className="sec-light" style={{ padding: '28px 0 8px' }} aria-label="Start with the service you need">
        <div className="wrap">
          <p style={{ color: '#52606b', marginBottom: 14, maxWidth: 720 }}>
            Looking for a roofer in Dallas? Pick the service you need. Then call (470) 236-1410 or use{' '}
            <a href="/contact/" style={{ color: 'var(--orange)', fontWeight: 700 }}>https://iroofercontractors.com/contact/</a>.
          </p>
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '.55rem 1.2rem', listStyle: 'none', padding: 0, margin: 0 }}>
            {dallasLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '.95rem' }}>{l.label} →</Link>
              </li>
            ))}
          </ul>
          <FreeRoofCheckCta style={{ margin: '24px 0 16px' }} />
        </div>
      </section>

      {/* CERT MARQUEE */}
      <div className="certs" aria-label="Credentials">
        <div className="track">
          <div className="set">
            <div className="c">Owens Corning Contractor Rewards Member</div>
            <div className="c">Serving Paulding County Since 2019</div><div className="c">Local & Family-Owned</div><div className="c">Real Google Reviews</div>
          </div>
          <div className="set" aria-hidden="true">
            <div className="c">Owens Corning Contractor Rewards Member</div>
            <div className="c">Serving Paulding County Since 2019</div><div className="c">Local & Family-Owned</div><div className="c">Real Google Reviews</div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="sec-light sec-pad" id="services">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="svc-grid">
            <div className="svc-intro rv">
              <span className="eyebrow dark">What we do</span>
              <h2>Every job on your roof, one local crew.</h2>
              <p>From one leak to a whole new roof after hail, the same local team does it. We install Owens Corning shingles as an Owens Corning Contractor Rewards member. Tap a service to see what you get.</p>
              <a className="btn btn-ink" href="/contact/">Start a project <span className="arr">→</span></a>
            </div>

            <div className="svc-list rv">
              {svcs.map((s, i) => (
                <article className={`svc${i === 0 ? ' open' : ''}`} key={s.n}>
                  <button
                    className="svc-head"
                    aria-expanded={i === 0 ? 'true' : 'false'}
                    aria-label={`${s.n} ${s.title} — ${s.tag}`}
                  >
                    <span className="svc-num">{`${s.n} `}</span>
                    <span className="svc-title">{`${s.title} `}</span>
                    <span className="svc-tag">{s.tag}</span>
                    <span className="svc-plus" aria-hidden="true" />
                  </button>
                  <div className="svc-body"><div className="svc-inner"><div className="row">
                    <div>
                      <p>{s.body}</p>
                      <Link className="svc-link" href={s.href || "/contact/"}>{s.cta || "Get an estimate"} →</Link>
                    </div>
                    <Pic src={s.img} alt={`${s.title} by iRoofer Contractors in Dallas, GA`} />
                  </div></div></div>
                </article>
              ))}
            </div>
          </div>

          {/* Dallas, GA service links */}
          <div className="rv" style={{ marginTop: 46, borderTop: '1px solid rgba(22,29,37,.12)', paddingTop: 22 }}>
            <span className="eyebrow dark">Roofing in Dallas, GA</span>
            <p style={{ color: '#52606b', marginTop: 8, maxWidth: 640 }}>
              Straight to the service you need in Dallas and Paulding County:
            </p>
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem 1.4rem', marginTop: 12, listStyle: 'none', padding: 0 }}>
              {dallasLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '.95rem' }}>{l.label} →</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* STORM BANNER */}
      <section className="storm" id="storm">
        <div className="wrap">
          <div className="rv">
            <span className="pulse"><span className="dot" /> Storm response</span>
            <h2>After hail or a storm. <br /><span className="ac">Don’t climb.</span></h2>
            <p>Take photos from the ground. Call (470) 236-1410. We take photos up top, tarp if needed, and tell you if it’s a repair or a new roof. Hail can leave marks you can’t see from the driveway.</p>
            <div className="cta">
              <a className="bigphone" href={`tel:${brand.phone}`}>{brand.phone}</a>
              <a className="btn btn-solid" href="/storm-damage-roof-repair-dallas-ga/">Storm &amp; hail damage roof repair <span className="arr">→</span></a>
            </div>
          </div>
          <div className="steps rv">
            <h2>After a storm — do this</h2>
            <ol>
              <li>Don’t climb up. Take photos from the ground of debris, dents in gutters, and any stains inside.</li>
              <li>Call us for a free damage check, and a tarp if you’re leaking.</li>
              <li>We write up the plan and meet your adjuster. Nothing starts until you say yes.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* WORK / BEFORE-AFTER */}
      <section className="sec-light sec-pad work" id="work">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="sec-head rv">
            <span className="eyebrow dark">Proof, not promises</span>
            <h2>Drag to see the <span className="ac">difference.</span></h2>
            <p>A storm-hit roof on a two-story home in Dallas. We tore it all off and rebuilt it. Slide the handle to see the change, then scroll the recent roofs on the right.</p>
          </div>

          <div className="ba-wrap">
            <div className="ba rv" id="ba" style={{ '--pos': '52%' }}>
              <img className="before" src="/assets/service-repair.webp?v=4" alt="Before photo: storm-damaged roof on a Dallas, GA two-story home" loading="lazy" />
              <img className="after" src="/assets/service-replacement.webp?v=3" alt="After photo: full roof replacement with new architectural shingles" loading="lazy" />
              <span className="tag t-before">Before — storm damage</span>
              <span className="tag t-after">After — full replacement</span>
              <div className="handle" aria-hidden="true"><span className="grip">◂</span></div>
              <span className="hint">Drag to compare</span>
              <input className="range" type="range" min="0" max="100" defaultValue="52" aria-label="Reveal the after photo" />
            </div>

            <div className="gallery rv">
              <div className="gcard">
                <img loading="lazy" src="/assets/service-newconstruction.webp?v=3" alt="New construction roof installation on a Paulding County home" />
                <div className="cap"><span>Paulding County</span><b>New construction</b></div>
              </div>
              <div className="gcard">
                <img loading="lazy" src="/assets/hero.webp?v=3" alt="Aerial view of a finished storm rebuild with multiple new roofs" />
                <div className="cap"><span>West metro Atlanta</span><b>Storm rebuild</b></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process sec-pad" id="process">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">How it works</span>
            <h2>From first call to final nail.</h2>
            <p>Four steps. No surprises, no pressure. You’ll know what we’re doing on your roof and why.</p>
          </div>
          <div className="steps-grid">
            <div className="step rv"><div className="n">01</div><h3>Inspect &amp; document</h3><p>Free roof check with photos and a short written report in plain words.</p><span className="arrow" aria-hidden="true">→</span></div>
            <div className="step rv"><div className="n">02</div><h3>Estimate &amp; insurance</h3><p>A written price, or help with photos for your insurance claim. We can meet your adjuster.</p><span className="arrow" aria-hidden="true">→</span></div>
            <div className="step rv"><div className="n">03</div><h3>Install &amp; clean up</h3><p>The crew shows up when we say. We sweep for nails, haul the dumpster, and leave your lawn clean.</p><span className="arrow" aria-hidden="true">→</span></div>
            <div className="step rv"><div className="n">04</div><h3>Walkthrough + warranty</h3><p>We walk the job with you and sign you up for the shingle warranty. We stand behind our work.</p></div>
          </div>
        </div>
      </section>

      {/* REVIEWS — no quotes or ratings on-site; send people to the live Google Business Profile */}
      <section className="reviews sec-pad" id="reviews">
        <div className="wrap">
          <div className="head-row rv">
            <div className="sec-head" style={{ maxWidth: '34rem' }}>
              <span className="eyebrow">Word travels fast</span>
              <h2>See what neighbors say.</h2>
              <p>Read our reviews directly on our Google Business Profile.</p>
            </div>
            <div>
              <a className="btn btn-solid" href={GBP_URL} target="_blank" rel="noopener noreferrer">Read our Google reviews <span className="arr">→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="sec-light sec-pad" id="blog">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="sec-head rv">
            <span className="eyebrow dark">From the roof</span>
            <h2>Roof tips &amp; storm advice.</h2>
            <p>Checklists, insurance claim tips, and roof care advice. Written by a local roofer in Dallas, GA.</p>
          </div>
          <div className="blog-grid rv">
            {posts.slice(0, 3).map((p) => (
              <Link href={`/blog/${p.slug}/`} key={p.slug} className="bcard">
                <span className="cat">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <span className="more">Read the full article →</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/blog/" className="btn btn-ink">Read all articles <span className="arr">→</span></Link>
          </div>
          <div style={{ marginTop: 28, borderTop: '1px solid #e6e9ee', paddingTop: 20 }}>
            <p style={{ fontSize: '.8rem', letterSpacing: '.04em', textTransform: 'uppercase', color: '#8ea2b4', marginBottom: 10 }}>Popular guides</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <Link href="/blog/roof-replacement-cost-dallas-ga/" className="chip" style={{ textDecoration: 'none' }}>Roof replacement cost factors</Link>
              <Link href="/blog/roof-repair-cost-dallas-ga/" className="chip" style={{ textDecoration: 'none' }}>Roof repair cost Dallas GA</Link>
              <Link href="/blog/when-to-replace-vs-repair-a-roof/" className="chip" style={{ textDecoration: 'none' }}>Replace vs. repair guide</Link>
              <Link href="/blog/dallas-ga-hail-storm-insurance-claims/" className="chip" style={{ textDecoration: 'none' }}>How to file an insurance claim</Link>
              <Link href="/blog/georgia-hail-storm-roof-checklist/" className="chip" style={{ textDecoration: 'none' }}>Hail damage inspection checklist</Link>
              <Link href="/storm-damage-roof-repair-dallas-ga/" className="chip" style={{ textDecoration: 'none' }}>Emergency storm response</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec-light sec-pad" id="faq">
        <div className="tex" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="faq-grid">
            <div className="faq-side rv">
              <span className="eyebrow dark">Good to know</span>
              <h2>Questions we hear every week.</h2>
              <p>Still not sure? Call us. A real person answers, not a call center.</p>
              <div className="faq-call">
                <div className="lbl">Talk to a roofer</div>
                <a href={`tel:${brand.phone}`}>{brand.phone}</a>
              </div>
            </div>

            <div className="faq-list rv">
              {faqs.map((f, i) => (
                <div className={`faq-item${i === 0 ? ' open' : ''}`} key={i}>
                  <button className="faq-q" aria-expanded={i === 0 ? 'true' : 'false'}>{f.q}<span className="pm" aria-hidden="true" /></button>
                  <div className="faq-a"><div><p>{renderInline(f.a)}</p></div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact sec-pad" id="contact">
        <div className="wrap">
          <div className="rv">
            <span className="eyebrow">Let’s talk</span>
            <h2>Talk to a <span className="ac">real roofer.</span></h2>
            <p className="lead">Tell us what’s going on and we’ll get back to you. Free roof checks, free quotes, no pressure.</p>
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
                <div><div className="lbl">Shop &amp; office</div><span className="val">{brand.location}</span></div>
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
            <QuoteForm variant="contact" id="cform" />
          </div>
        </div>

        <div style={{ marginTop: 28, textAlign: 'center' }}>
          <ReviewButton variant="orange" label="Leave us a Google review" />
        </div>
      </section>
    </>
  );
}
