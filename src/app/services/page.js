import { services } from '@/lib/brand';

export default function ServicesPage() {
  return (
    <section className="block">
      <div className="container">
        <div className="section-head">
          <h1>Our Roofing Services</h1>
          <p>From a quick repair to a full replacement, we handle it with the same care.</p>
        </div>
        <div className="cards">
          {services.map((s) => (
            <a className="card" key={s.slug} href={`/services/${s.slug}`} style={{ color: 'inherit' }}>
              <img src={s.image} alt={s.title} />
              <div className="body">
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <span className="more">Learn more →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
