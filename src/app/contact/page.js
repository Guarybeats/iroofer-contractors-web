import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';

export const metadata = { title: 'Contact — iRoofer Contractors' };

export default function ContactPage() {
  return (
    <section className="contact sec-pad">
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
            <div className="row">
              <span className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm1 12h-2v-6h2z" /></svg></span>
              <div><div className="lbl">Hours</div><span className="val">{brand.hours.full}</span></div>
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
      </div>
    </section>
  );
}
