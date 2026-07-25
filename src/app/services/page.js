import Link from 'next/link';
import { services } from '@/lib/brand';

export const metadata = { title: 'Roofing Services — iRoofer Contractors' };

export default function ServicesPage() {
  return (
    <section className="sec-light sec-pad">
      <div className="tex" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="sec-head rv" style={{ marginBottom: 56 }}>
          <span className="eyebrow dark">What we do</span>
          <h2>Roofing services for your home</h2>
          <p>From a quick repair to a full replacement, every job is done by the same local crew — with the same warranty and the same phone number.</p>
        </div>
        <div className="cards">
          {services.map((s) => (
            <Link className="card" key={s.slug} href={`/services/${s.slug}`} style={{ color: 'inherit' }}>
              <img src={s.image} alt={s.title} />
              <div className="body">
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <span className="more">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
