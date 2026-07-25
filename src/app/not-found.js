import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="block">
      <div className="container section-head">
        <h1>Page not found</h1>
        <p>That page slipped off the roof. Let’s get you back home.</p>
        <p><Link className="btn" href="/">Back to home</Link></p>
      </div>
    </section>
  );
}
