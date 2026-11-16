'use client';

// Client-only wrapper so the static export never tries to render Leaflet on the server.
import dynamic from 'next/dynamic';

const RecentJobsMap = dynamic(() => import('./RecentJobsMap'), {
  ssr: false,
  loading: () => <div className="rjm-loading">Loading map…</div>,
});

export default function RecentJobsMapLoader(props) {
  return <RecentJobsMap {...props} />;
}
