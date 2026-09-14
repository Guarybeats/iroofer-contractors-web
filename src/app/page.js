import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import HeroForm from '@/components/HeroForm';
import ReviewButton from '@/components/ReviewButton';
import { brand, services } from '@/lib/brand';
import { posts } from '@/lib/posts';
import { reviews } from '@/lib/reviews';
import Pic from '@/components/Pic';

// Marquee rows: split the review set in half so no quote is rendered more than
// twice (once per row track). Each track repeats the *other* half to keep the
// scroll seamless without triplicating review text in the HTML.
const revA = reviews.slice(0, Math.ceil(reviews.length / 2));
const revB = reviews.slice(Math.ceil(reviews.length / 2));

const dallasLinks = [
  { href: '/roof-replacement-dallas-ga/', label: 'Roof replacement in Dallas, GA' },
  { href: '/roof-repair-dallas-ga/', label: 'Roof repair in Dallas, GA' },
  { href: '/storm-damage-roof-repair-dallas-ga/', label: 'Storm damage roof repair Dallas' },
  { href: '/blog/wind-damage-roof-repair-dallas/', label: 'Wind damage roof repair in Dallas' },
  { href: '/emergency-roof-repair-dallas-ga/', label: 'Emergency roof repair Dallas' },
  { href: '/roof-repair-hiram/', label: 'Roof repair in Hiram' },
  { href: '/gutter-repair-replacement-dallas-ga/', label: 'Gutter repair & replacement' },
  { href: '/new-construction-dallas-ga/', label: 'New construction roofing' },
  { href: '/dallas-ga-roofing/', label: 'All Dallas, GA roofing services' },
];

const svcs = [
  { n: '01', title: 'Roof Repair', tag: 'Same week', img: '/assets/service-repair.jpg?v=3',
    href: '/roof-repair-dallas-ga/', cta: 'Roof repair in Dallas, GA',
    body: 'Water stains, lifted flashing, cracked boots and mystery leaks. We trace the source — not just the symptom — then patch, re-seal and color-match so the fix disappears into your roofline.' },
  { n: '02', title: 'Roof Replacement', tag: 'Most popular', img: '/assets/service-replacement.jpg?v=2',
    href: '/roof-replacement-dallas-ga/', cta: 'Roof replacement in Dallas, GA',
    body: 'Full tear-off to the deck, ice & water shield, synthetic underlayment and architectural shingles installed to manufacturer spec. Includes ridge venting, drip edge and a magnet-sweep cleanup of every nail.' },
  { n: '03', title: 'New Construction', tag: 'Builders', img: '/assets/service-newconstruction.jpg?v=2',
    body: 'We partner with builders and homeowners on new builds to install a roof that matches the design and the budget — code-compliant, inspected, and built to last.' },
  { n: '04', title: 'Storm & Insurance Claims', tag: '24/7 response', img: '/assets/service-repair.jpg?v=3',
    href: '/storm-damage-roof-repair-dallas-ga/', cta: 'Storm damage roof repair Dallas',
    body: 'Hail and wind damage documented with photos and a written scope. We meet your adjuster on-site, supplement the claim when needed, and guide you through the paperwork so you are not fronting the cost.' },
  { n: '05', title: 'Gutter Repair & Replacement', tag: 'Protection', img: '/assets/service-gutters-main.jpg?v=2', link: '/services/gutter-repair-replacement',
    body: 'Clogged or failing gutters are the #1 cause of preventable roof and foundation damage. We clean, repair, and replace seamless gutters so water flows away from your home, not into it.' },
];


const faqs = [
  { q: 'How long does a full replacement take?', a: 'Most single-family homes in our area are torn off and rebuilt in one to two days, weather permitting. Larger or steep-pitch roofs may take three. We give you a firm schedule in writing before we start.' },
  { q: 'Do you work with my insurance company?', a: 'Yes — it’s most of what we do. We document the damage, write the scope, meet the adjuster on-site, and handle supplements so you’re not chasing paperwork.' },
  { q: 'How much does a new roof cost?', a: 'It depends on size, pitch and materials, but most replacements land in a predictable range we’ll quote to the dollar after a free inspection. We also offer financing for qualified homeowners.' },
  { q: 'What warranty do you actually get?', a: 'The manufacturer’s warranty on the shingles, registered in your name and transferred if you sell. We stand behind every job we do — ask us for the details on your specific roof.' },
  { q: 'Do I need to be home during the work?', a: 'Nope. Everything happens outside. We’ll text you photos at each milestone and do a final walkthrough whenever you’re free. We also run a magnet sweep so your kids and pets stay safe.' },
];

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
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
            <h1>Dallas GA Roof Repair <br />&amp; Replacement <br /><span className="stroke">done right.</span></h1>
            <p className="lead">Family-owned and operated since 2019. We tear off, rebuild, and stand behind every roof with expert craftsmanship and honest service.</p>
            <div className="hero-cta">
              <a className="btn btn-solid" href="/#contact">Get a Free Inspection <span className="arr">→</span></a>
              <a className="btn btn-ghost" href="/#work">See Our Work</a>
            </div>
            <div className="stats">
              <div className="stat"><div className="num"><span className="cnt" data-count="2019" data-nogroup>2019</span></div><div className="lbl">Serving Dallas, GA since</div></div>
              <div className="stat"><div className="num"><span className="cnt" data-count="150">150</span><span className="suf">+</span></div><div className="lbl">Roofs completed</div></div>
              <div className="stat"><div className="num">{brand.rating}</div><div className="lbl">{brand.reviewCount} Google reviews</div></div>
              <div className="stat"><div className="num"><span className="cnt" data-count="24">24</span><span className="suf">hr</span></div><div className="lbl">Storm response</div></div>
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

      {/* CERT MARQUEE */}
      <div className="certs" aria-label="Credentials">
        <div className="track">
          <div className="set">
            <div className="c">Owens Corning Preferred</div>
            <div className="c">Licensed · Bonded · Insured</div><div className="c">Local & Family-Owned</div><div className="c">5-Star Rated</div>
          </div>
          <div className="set" aria-hidden="true">
            <div className="c">Owens Corning Preferred</div>
            <div className="c">Licensed · Bonded · Insured</div><div className="c">Local & Family-Owned</div><div className="c">5-Star Rated</div>
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
              <h2>Every job on your roof, done by one crew.</h2>
              <p>From a single missing shingle to a full tear-off after a storm — same team, same warranty, same phone number. Tap a service to see what’s included.</p>
              <a className="btn btn-ink" href="/#contact">Start a project <span className="arr">→</span></a>
            </div>

            <div className="svc-list rv">
              {svcs.map((s, i) => (
                <article className={`svc${i === 0 ? ' open' : ''}`} key={s.n}>
                  {s.link ? (
                    <Link className="svc-head" href={s.link} aria-label={`${s.n} ${s.title}`}>
                      <span className="svc-num">{s.n}</span><span className="svc-title">{s.title}</span>
                      <span className="svc-tag">{s.tag}</span><span className="svc-cta" aria-hidden="true">View service →</span>
                    </Link>
                  ) : (
                    <button className="svc-head" aria-expanded={i === 0 ? 'true' : 'false'}>
                      <span className="svc-num">{s.n}</span><span className="svc-title">{s.title}</span>
                      <span className="svc-tag">{s.tag}</span><span className="svc-plus" aria-hidden="true" />
                    </button>
                  )}
                  {!s.link && (
                    <div className="svc-body"><div className="svc-inner"><div className="row">
                      <div>
                        <p>{s.body}</p>
                        <Link className="svc-link" href={s.href || "/#contact"}>{s.cta || "Get an estimate"} →</Link>
                      </div>
                      <Pic src={s.img} alt={`${s.title} by iRoofer Contractors in Dallas, GA`} />
                    </div></div></div>
                  )}
                </article>
              ))}
            </div>
          </div>

          {/* Dallas, GA service links — gives the city/service pages an internal link
              from the strongest page on the site. See skills note: Google was serving
              the homepage for "roof replacement dallas ga" while these pages sat unlinked. */}
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
            <span className="pulse"><span className="dot" /> Crews in your area today</span>
            <h2>Hail doesn’t wait. <br /><span className="ac">Neither do we.</span></h2>
            <p>Georgia spring storms roll through fast. If a storm just hit your neighborhood, the damage is often invisible from the ground — and your insurance window is ticking. We tarp, document and file within 24 hours.</p>
            <div className="cta">
              <a className="bigphone" href={`tel:${brand.phone}`}>{brand.phone}</a>
              <a className="btn btn-solid" href="/storm-damage-roof-repair-dallas-ga/">Storm damage roof repair Dallas <span className="arr">→</span></a>
            </div>
          </div>
          <div className="steps rv">
            <h2>After a storm — do this</h2>
            <ol>
              <li>Don’t climb up. Snap ground-level photos of debris, dents on gutters and any interior stains.</li>
              <li>Call us for a free damage inspection and a temporary tarp if you’re leaking.</li>
              <li>We write the scope, meet your adjuster, and you sign off before a single shingle moves.</li>
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
            <p>A storm-battered roof on a Dallas two-story, fully torn off and rebuilt in two days. Slide the handle — then scroll the recent ridgelines on the right.</p>
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
                <div className="cap"><span>Subdivision · 14 homes</span><b>Storm rebuild</b></div>
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
            <p>Four steps, no surprises, no pressure. You’ll know exactly what’s happening on your roof and why.</p>
          </div>
          <div className="steps-grid">
            <div className="step rv"><div className="n">01</div><h3>Inspect &amp; document</h3><p>Free on-roof inspection with photos and a plain-English written report — usually same week.</p><span className="arrow" aria-hidden="true">→</span></div>
            <div className="step rv"><div className="n">02</div><h3>Estimate &amp; insurance</h3><p>Transparent pricing or full claim support. We handle the adjuster and the supplements.</p><span className="arrow" aria-hidden="true">→</span></div>
            <div className="step rv"><div className="n">03</div><h3>Install &amp; clean up</h3><p>Crew arrives at 7am, roof on by dusk. Magnet sweep, dumpster hauled, lawn left spotless.</p><span className="arrow" aria-hidden="true">→</span></div>
            <div className="step rv"><div className="n">04</div><h3>Walkthrough + warranty</h3><p>We walk the roof with you, register the manufacturer warranty, and stand behind the work.</p></div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews sec-pad" id="reviews">
        <div className="wrap">
          <div className="head-row rv">
            <div className="sec-head" style={{ maxWidth: '34rem' }}>
              <span className="eyebrow">Word travels fast</span>
              <h2>Neighbors trust us with their roofs.</h2>
            </div>
            <div className="rating-big">
              <div className="sc">{brand.rating}</div>
              <div><div className="stars">★★★★★</div><div className="meta">{brand.reviewCount} verified reviews &middot; Google</div></div>
            </div>
          </div>
        </div>

        <div className="rev-row r1" aria-label="Customer reviews">
          <div className="rev-track">
            {revA.map((r, i) => (
              <div className="rcard" key={`a${i}`}><div className="stars">★★★★★</div><p className="q">{r.q}</p><div className="who"><span className="av">{r.who.charAt(0)}</span><div><b>{r.who}</b><span>{r.where}</span></div></div></div>
            ))}
            {revB.map((r, i) => (
              <div className="rcard" key={`b${i}`}><div className="stars">★★★★★</div><p className="q">{r.q}</p><div className="who"><span className="av">{r.who.charAt(0)}</span><div><b>{r.who}</b><span>{r.where}</span></div></div></div>
            ))}
          </div>
        </div>

        <div className="rev-row r2" aria-hidden="true">
          <div className="rev-track">
            {[...revB, ...revA].map((r, i) => (
              <div className="rcard" key={`c${i}`}><div className="stars">★★★★★</div><p className="q">{r.q}</p><div className="who"><span className="av">{r.who.charAt(0)}</span><div><b>{r.who}</b><span>{r.where}</span></div></div></div>
            ))}
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
            <p>Checklists, insurance-claim walkthroughs, and maintenance advice written by a local Dallas, GA roofer — not a content farm.</p>
          </div>
          <div className="blog-grid rv">
            {posts.slice(0, 3).map((p) => (
              <Link href={`/blog/${p.slug}/`} key={p.slug} className="bcard">
                <span className="cat">{p.categ