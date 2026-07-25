import RoofEstimator from '@/components/RoofEstimator';

export const metadata = { title: 'Instant Roof Estimate — iRoofer Contractors' };

export default function EstimatorPage() {
  return (
    <section className="estimator-page sec-pad">
      <div className="wrap">
        <div className="rv" style={{ textAlign: 'center', marginBottom: '2.4rem' }}>
          <span className="eyebrow">Free instant estimate</span>
          <h1 style={{ fontSize: 'clamp(2.4rem,5vw,3.8rem)', fontWeight: 900, marginTop: 12 }}>
            How much is my <span className="stroke">new roof?</span>
          </h1>
          <p className="lead" style={{ maxWidth: '40rem', margin: '1rem auto 0' }}>
            Slide a few details and get a real price range in seconds — no phone call, no pressure.
            Then lock it in with a free on-site inspection.
          </p>
        </div>
        <RoofEstimator />
      </div>
    </section>
  );
}
