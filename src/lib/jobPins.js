// Recent jobs shown on the /reviews/ map.
//
// PRIVACY: this repo is public. Each job is placed at its CITY CENTER plus a small
// deterministic offset (0.3–0.6 mi) so pins in one city don't stack. Never add a
// street address, house number, exact coordinates of a home, or a customer name.
//
// To add a job: append an entry to `jobs` with a city key from `cityCenters`
// (add the city there first if it's new), a job type, a YYYY-MM month (or a
// `when` label for a span), and optionally a photo from public/images/jobs/.

// City-center coordinates (OpenStreetMap / Nominatim place centroids).
export const cityCenters = {
  'dallas-ga': { name: 'Dallas', state: 'GA', lat: 33.9237, lng: -84.8408, areaPath: '/' },
  'powder-springs': { name: 'Powder Springs', state: 'GA', lat: 33.8595, lng: -84.6838, areaPath: '/service-areas/powder-springs/' },
  alpharetta: { name: 'Alpharetta', state: 'GA', lat: 34.0756, lng: -84.2946, areaPath: '/service-areas/alpharetta/' },
  mableton: { name: 'Mableton', state: 'GA', lat: 33.8188, lng: -84.5823, areaPath: '/service-areas/mableton/' },
  'villa-rica': { name: 'Villa Rica', state: 'GA', lat: 33.7321, lng: -84.9191, areaPath: null },
  austell: { name: 'Austell', state: 'GA', lat: 33.8126, lng: -84.6344, areaPath: '/service-areas/austell/' },
  conley: { name: 'Conley', state: 'GA', lat: 33.6357, lng: -84.3294, areaPath: null },
  rockmart: { name: 'Rockmart', state: 'GA', lat: 34.0026, lng: -85.0416, areaPath: null },
};

export const jobs = [
  { id: 'dallas-2026-09', city: 'dallas-ga', type: 'Roof replacement', month: '2026-09', photo: '/images/jobs/01-dallas.webp' },
  { id: 'dallas-2026-05', city: 'dallas-ga', type: 'Roof inspection', month: '2026-05' },
  { id: 'powder-springs-2024-10', city: 'powder-springs', type: 'Roof replacement + gutters', month: '2024-10', photo: '/images/jobs/02-powder-springs.webp' },
  { id: 'powder-springs-2026-08', city: 'powder-springs', type: 'Roof replacement + gutters', month: '2026-08', photo: '/images/jobs/21-powder-springs.webp' },
  { id: 'powder-springs-2026-07', city: 'powder-springs', type: 'Roof replacement', month: '2026-07', photo: '/images/jobs/06-powder-springs.webp' },
  { id: 'alpharetta-2026-08', city: 'alpharetta', type: 'Roof replacement + chimney flashing', month: '2026-08', photo: '/images/jobs/11-alpharetta.webp' },
  { id: 'mableton-2026-08', city: 'mableton', type: 'Roof replacement', month: '2026-08', photo: '/images/jobs/15-mableton.webp' },
  { id: 'villa-rica-2026-06', city: 'villa-rica', type: 'Roof replacement + gutters', month: '2026-06', photo: '/images/jobs/20-villa-rica.webp' },
  { id: 'austell-2026-03', city: 'austell', type: 'Roof replacement', month: '2026-03', when: 'Mar–Jun 2026', photo: '/images/jobs/23-austell.webp' },
  { id: 'conley-2024-07', city: 'conley', type: 'Storm damage inspection', month: '2024-07' },
  { id: 'rockmart-2024-08', city: 'rockmart', type: 'New roof', month: '2024-08' },
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function jobWhen(job) {
  if (job.when) return job.when;
  const [y, m] = job.month.split('-').map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

// Small stable string hash (FNV-1a) so offsets never change between builds.
function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const MILES_PER_DEG_LAT = 69.0;

// Pins with display-safe coordinates: city center + 0.3–0.6 mi deterministic offset.
// Jobs in the same city are fanned out by the golden angle so they never overlap.
export function jobPins() {
  const seen = {};
  return jobs.map((job) => {
    const c = cityCenters[job.city];
    const i = (seen[job.city] = (seen[job.city] ?? -1) + 1);
    const h = hash(job.city);
    const angle = (((h % 360) + i * 137.5) * Math.PI) / 180;
    const frac = (((h >>> 9) % 1000) / 1000 + i * 0.618) % 1;
    const miles = 0.3 + 0.3 * frac;
    const dLat = (miles * Math.sin(angle)) / MILES_PER_DEG_LAT;
    const dLng = (miles * Math.cos(angle)) / (MILES_PER_DEG_LAT * Math.cos((c.lat * Math.PI) / 180));
    return {
      id: job.id,
      cityKey: job.city,
      city: `${c.name}, ${c.state}`,
      type: job.type,
      when: jobWhen(job),
      photo: job.photo || null,
      lat: +(c.lat + dLat).toFixed(4),
      lng: +(c.lng + dLng).toFixed(4),
    };
  });
}

// Cities on the map that have their own area page, in first-appearance order.
export function jobAreaLinks() {
  const out = [];
  for (const job of jobs) {
    const c = cityCenters[job.city];
    if (c.areaPath && !out.some((x) => x.key === job.city)) {
      out.push({ key: job.city, label: `${c.name}, ${c.state}`, href: c.areaPath });
    }
  }
  return out;
}
