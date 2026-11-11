// Verified Google review totals for schema.
// Do not invent ratingValue or reviewCount. Site Audit 2026-11-10 found no
// AggregateRating on the live site and published no star rating. A conversation
// mention of "54 Google reviews" is not a verified ratingValue.
//
// Google Search docs: self-serving AggregateRating on LocalBusiness from
// third-party reviews is generally not eligible for review-snippet rich results
// (policy since 2019). Even with a verified rating, expect this markup to be
// ignored for stars in Google Search.
export const googleReviewStats = {
  ratingValue: null,
  reviewCount: null,
  bestRating: '5',
  worstRating: '1',
  source: null,
};

export function aggregateRatingNode() {
  const { ratingValue, reviewCount, bestRating, worstRating } = googleReviewStats;
  if (!ratingValue || !reviewCount) return null;
  return {
    '@type': 'AggregateRating',
    ratingValue: String(ratingValue),
    reviewCount: String(reviewCount),
    bestRating,
    worstRating,
  };
}
