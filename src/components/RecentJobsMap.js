'use client';

// Leaflet map of recent jobs (city-level pins only; see src/lib/jobPins.js).
// Loaded client-side only via RecentJobsMapLoader (dynamic import, ssr:false),
// because Leaflet touches `window` on import.
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { jobPins } from '@/lib/jobPins';

const esc = (v) =>
  String(v).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

// CSS-only pin (avoids Leaflet's default PNG marker paths, which break under bundlers).
const pinIcon = L.divIcon({
  className: 'rjm-pin',
  html: '<span></span>',
  iconSize: [26, 26],
  iconAnchor: [13, 26],
  popupAnchor: [0, -24],
});

function popupHtml(p) {
  const img = p.photo
    ? `<img src="${esc(p.photo)}" alt="${esc(`${p.type}, ${p.city}`)}" width="200" height="113" loading="lazy" decoding="async" />`
    : '';
  return `<div class="rjm-pop">${img}<b>${esc(p.city)}</b><span>${esc(p.type)}</span><small>${esc(p.when)}</small></div>`;
}

export default function RecentJobsMap({ className }) {
  const el = useRef(null);

  useEffect(() => {
    if (!el.current) return undefined;
    const map = L.map(el.current, { scrollWheelZoom: false, zoomControl: true });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
    }).addTo(map);

    const pins = jobPins();
    const markers = pins.map((p) =>
      L.marker([p.lat, p.lng], { icon: pinIcon, title: `${p.city}: ${p.type}, ${p.when}`, alt: `${p.city} job` })
        .bindPopup(popupHtml(p), { maxWidth: 220, minWidth: 200 })
        .addTo(map)
    );

    map.fitBounds(L.featureGroup(markers).getBounds(), { padding: [36, 36], maxZoom: 12 });

    return () => map.remove();
  }, []);

  return (
    <div
      ref={el}
      className={className}
      role="region"
      aria-label="Map of recent iRoofer job locations by city"
    />
  );
}
