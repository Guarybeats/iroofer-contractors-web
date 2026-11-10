import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="block sec-light sec-pad">
      <meta name="robots" content="noindex, nofollow" />
      <div className="wrap">
        <h1>Page not found</h1>
        <p style={{ marginTop: 12, maxWidth: 520 }}>That page slipped off the roof. Try one of these, or call (470) 236-1410.</p>
        <p style={{ marginTop: 20 }}>
          <Link className="btn btn-ink" href="/">Back to home</Link>
          {' '}
          <Link className="btn btn-ghost" href="/services/">Services</Link>
          {' '}
          <Link className="btn btn-ghost" href="/contact/">Contact</Link>
        </p>
      </div>
    </section>
  );
}
