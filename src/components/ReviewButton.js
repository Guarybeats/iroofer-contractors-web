import Link from 'next/link';
import { REVIEW_URL } from '@/components/LocalSeo';

// "Leave a Google review" CTA. Links to the GBP review URL (set REVIEW_URL in
// LocalSeo.jsx). Opens in a new tab. Optional `variant` matches site buttons.
export default function ReviewButton({
  variant = 'ink',
  label = 'Leave us a Google review',
  className = '',
}) {
  return (
    <Link
      href={REVIEW_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-${variant} ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
      aria-label="Leave iRoofer Contractors a review on Google"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFD400" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5l-3.5-2.1.9-4.1L12 9.8l2.6-1.5.9 4.1L12 16.5z" />
      </svg>
      {label}
      <span className="arr" aria-hidden="true">→</span>
    </Link>
  );
}
