import QuoteForm from '@/components/QuoteForm';
import { brand } from '@/lib/brand';

export default function ContactPage() {
  return (
    <section className="block">
      <div className="container service-hero">
        <div>
          <h1>Contact iRoofer Contractors</h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem' }}>
            The fastest way to get a free quote is the form — but we’re local, so feel free to call.
          </p>
          <p style={{ marginTop: 16, lineHeight: 2 }}>
            <strong>Phone:</strong> <a href={`tel:${brand.phone}`}>{brand.phone}</a><br />
            <strong>Email:</strong> <a href={`mailto:${brand.email}`}>{brand.email}</a><br />
            <strong>Location:</strong> {brand.location}<br />
            <strong>Service area:</strong> {brand.serviceArea.join(', ')}
          </p>
        </div>
        <QuoteForm variant="contact" id="quote-contact" />
      </div>
    </section>
  );
}
