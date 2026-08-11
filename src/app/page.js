import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import HeroForm from '@/components/HeroForm';
import ReviewButton from '@/components/ReviewButton';
import { brand, services } from '@/lib/brand';

const svcs = [
  { n: '01', title: 'Roof Repair', tag: 'Same week', img: '/assets/service-repair.jpg',
    body: 'Water stains, lifted flashing, cracked boots and mystery leaks. We trace the source — not just the symptom — then patch, re-seal and color-match so the fix disappears into your roofline.' },
  { n: '02', title: 'Roof Replacement', tag: 'Most popular', img: '/assets/service-replacement.jpg',
    body: 'Full tear-off to the deck, ice & water shield, synthetic underlayment and architectural shingles installed to manufacturer spec. Includes ridge venting, drip edge and a magnet-sweep cleanup of every nail.' },
  { n: '03', title: 'New Construction', tag: 'Builders', img: '/assets/service-newconstruction.jpg',
    body: 'We partner with builders and homeowners on new builds to install a roof that matches the design and the budget — code-compliant, inspected, and built to last.' },
  { n: '04', title: 'Storm & Insurance Claims', tag: '24/7 response', img: '/assets/service-repair.jpg',
    body: 'Hail and wind damage documented with photos and a written scope. We meet your adjuster on-site, supplement the claim when needed, and guide you through the paperwork so you are not fronting the cost.' },
];

const reviews = [
  { q: '“After having already gotten three quotes at around the same price, I figured iRoofer’s quote would be far more. Why? The fancy metal roof over the truck bed. The fancy drone Cristian used to take pictures. The highly detailed and informative marketing materials. But nope. Their quote was very competitive and, given all the other advantages, it was a no-brainer. They got to my job extremely quickly as my insurance was due to be rescinded within a week or so. The job was done in a day and they took great pains to cover everything around the house to catch as many nails as possible. The roof looks great and within a few hours of getting the detailed completion package stock full of photos, my insurance re-applied my policy. Highly, highly recommend.”', who: 'Jarratt Bryan', where: 'Dallas, GA' },
  { q: '“Cristian and iRoofer are great! And let me tell why. As you might already know a good percentage of commercial roofers either can’t handle the job, never get back to you or your job is too big or too small. Well Cristian is definitely the opposite. He’s very professional, courteous, punctual, organized and does a great job. He haggled with the insurance companies on my behave to get an honest settlement to get my commercial warehouse roofer back to 100%. This included matching the existing roof materials, siding, custom gutters and insulation. I would highly recommend Cristian & iRoofer. B. Grace / Southern Sky Home”', who: 'Bill Grace', where: 'Dallas, GA' },
  { q: '“Iroofer Contractors in Dallas, GA, were a total lifesaver! My roof was shot, and they came to the rescue. Their crew was super friendly and knowledgeable. They explained everything clearly, from the inspection to the new roof going on. The quality of their work is top-notch. I’m so happy with how it turned out. If you need a roofing company you can trust, Iroofer Contractors is the way to go!”', who: 'Carlos Duran', where: 'Dallas, GA' },
  { q: `“This was a blessing from out of nowhere. Chris was amazing and very patient with me being a new homeowner. He explained everything thing 100 percent of why and how things should look like. He helped me understand everything down to the insurance part which I had no idea what I was doing. The crew was on time and quick. They did an amazing job.. happy homeowner.”`, who: 'Amaka Allen', where: 'Dallas, GA' },
  { q: `“I roofers were very professional and competitively priced. The project manager/owner Cristian Mendez is knowledgeable, experienced and patient He led through each step of the process of repairing and replacing my roof. He applies the latest drone and office automation technologies. I highly recommend Iroofers and Cristian Mendez.”`, who: 'Tyrone DeNeal, Sr.', where: 'Dallas, GA' },
  { q: `“Iroofer Contractors replaced my roof after a hurricane. They were honest, on time and did a great job on my roof. Next, they replaced my mother’s roof along with rotten wood since it was the original roof on the house. We love the roof and the job that was performed. I would recommend Iroofer to any of my friends and family.”`, who: 'Taakena Ross-Gober', where: 'Dallas, GA' },
  { q: `“They did very well with my old roof. The house looks new! Cristian and the crew went that extra mile on everything! I highly recommend them. They were very professional and I have absolutely nothing bad to say about them or their work. It poured down rain this morning, and there were NO LEAKS. I love ❤️ IRoofer Contractors!”`, who: 'Jill Kerns', where: 'Dallas, GA' },
  { q: `“Cristian was extremely professional and had excellent customer service skills. From the roof inspection to roof installation, it was an awesome experience. The installers worked quickly and promptly cleaned up debris upon completion. I’ll be happy to do business with them again and recommend their service.”`, who: 'Kay Hillery', where: 'Dallas, GA' },
  { q: `“IRoofer Team did a superb job. They are very knowledgeable, professional and made this process seamless. I would recommend them to anyone who wants a roofing company that does a job very well done!! Thanks.”`, who: 'Willie Holt', where: 'Dallas, GA' },
  { q: `“I will tell you this! You still have good people out here and that will help you in each and every way! I recommend this company to the fullest.. They are my new roofing company and i will stick with them and if you need any help or about your roofing they are definitely the ones to call first hand. I had no idea what I was doing me being a first new home owner myself. They guide me and was kind and caring so helpful not only with my roof repairs but other things also that I wouldn’t know about myself.. I tell you that I learned alot about being a home owner. They wait patiently and they will work with you! You have more then 5 stars from me you will get 10 stars! Thank you for working with me and being patient with me! Thank you for all you do! I have found my new roofing company! 😊 Cristian Mendez is the most responsible and helpful and will go out his way for someone! Thanks once again! His crew members are wonderful too!”`, who: 'Sharon Thomas', where: 'Dallas, GA' },
];

const faqs = [
  { q: 'How long does a full replacement take?', a: 'Most single-family homes in our area are torn off and rebuilt in one to two days, weather permitting. Larger or steep-pitch roofs may take three. We give you a firm schedule in writing before we start.' },
  { q: 'Do you work with my insurance company?', a: 'Yes — it’s most of what we do. We document the damage, write the scope, meet the adjuster on-site, and handle supplements so you’re not chasing paperwork.' },
  { q: 'How much does a new roof cost?', a: 'It depends on size, pitch and materials, but most replacements land in a predictable range we’ll quote to the dollar after a free inspection. We also offer financing for qualified homeowners.' },
  { q: 'What warranty do I actually get?', a: 'The manufacturer’s warranty on the shingles, registered in your name and transferred if you sell. We stand behind every job we do — ask us for the details on your specific roof.' },
  { q: 'Do I need to be home during the work?', a: 'Nope. Everything happens outside. We’ll text you photos at each milestone and do a final walkthrough whenever you’re free. We also run a magnet sweep so your kids and pets stay safe.' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bgword" aria-hidden="true">Roofing</div>
        <div className="wrap">
          <div className="hero-copy">
            <span className="eyebrow">Dallas, GA · Atlanta Metro</span>
            <h1>A roof that<br />outlasts the<br /><span className="stroke">weather.</span></h1>
            <p className="lead">Family-owned and operated since 2019. We tear off, rebuild, and stand behind every roof with expert craftsmanship and honest service.</p>
            <div className="hero-cta">
              <a className="btn btn-solid" href="/#contact">Get a Free Inspection <span className="arr">→</span></a>
              <a className="btn btn-ghost" href="/#work">See Our Work</a>
            </div>
            <div className="stats">
              <div className="stat"><div className="num"><span className="cnt" data-count="2019" data-nogroup>0</span></div><div className="lbl">Serving Dallas, GA since</div></div>
              <div className="stat"><div className="num"><span className="cnt" data-count="150">0</span><span className="suf">+</span></div><div className="lbl">Roofs completed</div></div>
              <div className="stat"><div className="num">{brand.rating}</div><div className="lbl">{brand.reviewCount} rating</div></div>
              <div className="stat"><div className="num"><span className="cnt" data-count="24">0</span><span className="suf">hr</span></div><div className="lbl">Storm response</div></div>
            </div>
          </div>

          <div className="hero-media">
            <div className="frame" aria-hidden="true"></div>
            <img className="main" src="/assets/hero.jpg" alt="iRoofer crew installing shingles on a Georgia home" />
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
                  <button className="svc-head" aria-expanded={i === 0 ? 'true' : 'false'}>
                    <span className="svc-num">{s.n}</span><span className="svc-title">{s.title}</span>
                    <span className="svc-tag">{s.tag}</span><span className="svc-plus" aria-hidden="true" />
                  </button>
                  <div className="svc-body"><div className="svc-inner"><div className="row">
                    <div>
                      <p>{s.body}</p>
                      <Link className="svc-link" href="/#contact">Get an estimate →</Link>
                    </div>
                    <img loading="lazy" src={s.img} alt={s.title} />
                  </div></div></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STORM BANNER */}
      <section className="storm" id="storm">
        <div className="wrap">
          <div className="rv">
            <span className="pulse"><span className="dot" /> Crews in your area today</span>
            <h2>Hail doesn’t wait.<br /><span className="ac">Neither do we.</span></h2>
            <p>Georgia spring storms roll through fast. If a storm just hit your neighborhood, the damage is often invisible from the ground — and your insurance window is ticking. We tarp, document and file within 24 hours.</p>
            <div className="cta">
              <a className="bigphone" href={`tel:${brand.phone}`}>{brand.phone}</a>
              <a className="btn btn-solid" href="/#contact">Request emergency tarp <span className="arr">→</span></a>
            </div>
          </div>
          <div className="steps rv">
            <h4>After a storm — do this</h4>
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
              <img className="before" src="/assets/service-repair.jpg" alt="Roof before: storm damage" loading="lazy" />
              <img className="after" src="/assets/service-replacement.jpg" alt="Roof after: full replacement" loading="lazy" />
              <span className="tag t-before">Before — storm damage</span>
              <span className="tag t-after">After — full replacement</span>
              <div className="handle" aria-hidden="true"><span className="grip">◂</span></div>
              <span className="hint">Drag to compare</span>
              <input className="range" type="range" min="0" max="100" defaultValue="52" aria-label="Reveal the after photo" />
            </div>

            <div className="gallery rv">
              <div className="gcard">
                <img loading="lazy" src="/assets/service-newconstruction.jpg" alt="New construction roof" />
                <div className="cap"><span>Paulding County</span><b>New construction</b></div>
              </div>
              <div className="gcard">
                <img loading="lazy" src="/assets/hero.jpg" alt="Aerial view of finished roofs" />
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
            <div className="step rv"><div className="n">01</div><h4>Inspect &amp; document</h4><p>Free on-roof inspection with photos and a plain-English written report — usually same week.</p><span className="arrow" aria-hidden="true">→</span></div>
            <div className="step rv"><div className="n">02</div><h4>Estimate &amp; insurance</h4><p>Transparent pricing or full claim support. We handle the adjuster and the supplements.</p><span className="arrow" aria-hidden="true">→</span></div>
            <div className="step rv"><div className="n">03</div><h4>Install &amp; clean up</h4><p>Crew arrives at 7am, roof on by dusk. Magnet sweep, dumpster hauled, lawn left spotless.</p><span className="arrow" aria-hidden="true">→</span></div>
            <div className="step rv"><div className="n">04</div><h4>Walkthrough + warranty</h4><p>We walk the roof with you, register the manufacturer warranty, and stand behind the work.</p></div>
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
            {reviews.map((r, i) => (
              <div className="rcard" key={`a${i}`}><div className="stars">★★★★★</div><p className="q">{r.q}</p><div className="who"><span className="av">{r.who.charAt(0)}</span><div><b>{r.who}</b><span>{r.where}</span></div></div></div>
            ))}
            {reviews.map((r, i) => (
              <div className="rcard" key={`b${i}`} aria-hidden="true"><div className="stars">★★★★★</div><p className="q">{r.q}</p><div className="who"><span className="av">{r.who.charAt(0)}</span><div><b>{r.who}</b><span>{r.where}</span></div></div></div>
            ))}
          </div>
        </div>

        <div className="rev-row r2" aria-hidden="true">
          <div className="rev-track">
            {[...reviews].reverse().map((r, i) => (
              <div className="rcard" key={`c${i}`}><div className="stars">★★★★★</div><p className="q">{r.q}</p><div className="who"><span className="av">{r.who.charAt(0)}</span><div><b>{r.who}</b><span>{r.where}</span></div></div></div>
            ))}
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
              <p>Still unsure about something? A real person — not a call center — will answer the phone.</p>
              <div className="faq-call">
                <div className="lbl">Talk to a roofer</div>
                <a href={`tel:${brand.phone}`}>{brand.phone}</a>
              </div>
            </div>

            <div className="faq-list rv">
              {faqs.map((f, i) => (
                <div className={`faq-item${i === 0 ? ' open' : ''}`} key={i}>
                  <button className="faq-q" aria-expanded={i === 0 ? 'true' : 'false'}>{f.q}<span className="pm" aria-hidden="true" /></button>
                  <div className="faq-a"><div><p>{f.a}</p></div></div>
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
            <p className="lead">Tell us what’s going on and we’ll get back within one business hour — usually much faster. Free inspections, free estimates, zero pressure.</p>
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
