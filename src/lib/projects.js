// Completed-project case studies (Nov 2026).
//
// PRIVACY: this repo is public. City-level locations only. Never add a street
// address, house number, exact coordinates or a customer name.
//
// Nov 23 2026: added HD CompanyCam photos (EXIF/GPS stripped) for Powder Springs
// (before Oct 14 2024 / after Aug 1 2026), Alpharetta (Aug 1 2026) and Mableton (Aug 5 2026).
// The Austell study was removed: its only photo was a tear-off, and replacement studies
// show finished roofs only.
//
// FACTS: every field below comes from something the owner already published or
// supplied: the job photos and their captions (EXIF-stripped CompanyCam photos,
// city-only captions, from branch feature/reviews-page-2026-11-15 src/lib/jobPhotos.js
// and src/lib/jobPins.js) or the homepage's existing description of the Dallas
// replacement photos. Fields we do not have (original problem, inspection findings,
// shingle brand/color, completion date, customer comments) are left out on purpose.
// Add them only when the owner confirms them. Optional fields render only when present:
//   problem, findings (string), materials (string[]), completed (string), quote (string)

export const projects = [
  {
    id: 'dallas-roof-replacement',
    city: 'Dallas, GA',
    citySlug: 'dallas-ga',
    cityHref: '/',
    cityLabel: 'Roofing in Dallas, GA',
    service: 'Roof replacement',
    serviceHref: '/roof-replacement-dallas-ga/',
    serviceLabel: 'Roof replacement in Dallas, GA',
    title: 'Full roof replacement in Dallas, GA',
    summary: 'A full roof replacement on a Dallas home, finished with new architectural shingles. The close-up shows the shingles where they meet the pipe boot and the ridge vent.',
    scope: [
      'Roof replacement',
      'New architectural shingles',
    ],
    materials: ['Architectural shingles'],
    photos: [
      { src: '/assets/cc-dallas-replacement-ridge.webp?v=1', w: 1280, h: 720, alt: 'Finished architectural shingle roof and ridge on a Dallas, GA home after an iRoofer replacement', caption: 'Finished roof and ridge' },
      { src: '/assets/cc-dallas-replacement-shingles.webp?v=1', w: 1280, h: 720, alt: 'Close-up of new architectural shingles, pipe boot, and ridge vent on a Dallas, GA roof', caption: 'Shingles, pipe boot and ridge vent' },
    ],
  },
  {
    id: 'powder-springs-roof-gutters',
    city: 'Powder Springs, GA',
    citySlug: 'powder-springs',
    cityHref: '/service-areas/powder-springs/',
    cityLabel: 'Roofing in Powder Springs',
    service: 'Roof replacement and gutters',
    serviceHref: '/roof-replacement-powder-springs/',
    serviceLabel: 'Roof replacement in Powder Springs',
    extraLinks: [{ href: '/gutter-repair-replacement-powder-springs/', label: 'Gutter repair and replacement in Powder Springs' }],
    title: 'Before and after: new roof and gutters on a brick home in Powder Springs',
    summary: 'A roof replacement with new gutters on a two-story brick home in Powder Springs. Our drone photos from October 14, 2024 show the old roof: weathered shingles with dark streaks running down the slopes. The after photos from August 1, 2026 show the replaced roof with white gutters along the eaves.',
    scope: [
      'Roof replacement',
      'New architectural shingles',
      'New gutters',
    ],
    materials: ['Architectural shingles'],
    beforeAfter: true,
    coverIndex: 1,
    photos: [
      { src: '/images/jobs/roof-replacement-powder-springs-ga-before.webp', w: 1600, h: 611, label: 'Before', alt: 'Before: weathered, streaked shingles on a brick home in Powder Springs, GA, drone photo from Oct 14, 2024', caption: 'Oct 14, 2024, weathered and streaked shingles' },
      { src: '/images/jobs/roof-replacement-powder-springs-ga-after.webp', w: 1600, h: 900, label: 'After', alt: 'After: replaced roof and white gutters on the same brick home in Powder Springs, GA, Aug 1, 2026', caption: 'Aug 1, 2026, replaced roof and white gutters' },
      { src: '/images/jobs/02-powder-springs.webp', w: 1200, h: 900, alt: 'New architectural shingle roof on a two-story brick and siding home, Powder Springs GA', caption: 'The finished roof from the driveway side' },
    ],
  },
  {
    id: 'alpharetta-roof-replacement',
    city: 'Alpharetta, GA',
    citySlug: 'alpharetta',
    cityHref: '/service-areas/alpharetta/',
    cityLabel: 'Roofing in Alpharetta',
    service: 'Roof replacement and gutters',
    serviceHref: '/roof-replacement-dallas-ga/',
    serviceLabel: 'Roof replacement',
    extraLinks: [{ href: '/services/roof-inspection/', label: 'Drone roof inspections' }],
    title: 'New shingle roof and white gutters in Alpharetta',
    summary: 'A finished roof replacement on a two-story stucco home in Alpharetta, photographed from the ground and by drone when the job was done. The photos show new gray architectural-style shingles, new ridge and hip caps, and new white gutters and fascia trim along the roof edges.',
    scope: [
      'Roof replacement',
      'New architectural-style shingles',
      'New ridge and hip caps',
      'New white gutters',
      'Drone photos of the finished roof',
    ],
    completed: 'August 1, 2026',
    photos: [
      { src: '/images/jobs/roof-replacement-alpharetta-ga-1.webp', w: 1600, h: 900, alt: 'Finished architectural-style shingle roof on a stucco home after a roof replacement in Alpharetta, GA', caption: 'Finished roof, front of the home' },
      { src: '/images/jobs/roof-replacement-alpharetta-ga-2.webp', w: 1600, h: 1157, alt: 'New gray architectural-style shingles, ridge caps and white gutters on a replaced roof in Alpharetta, GA', caption: 'New shingles, ridges and white gutters' },
      { src: '/images/jobs/roof-replacement-alpharetta-ga-3.webp', w: 1280, h: 720, alt: 'Drone close-up of new ridge and hip caps on a roof replacement in Alpharetta, GA', caption: 'New ridge and hip caps (drone)' },
      { src: '/images/jobs/roof-inspection-drone-alpharetta-ga-1.webp', w: 1600, h: 900, alt: 'Top-down drone photo of the finished shingle roof in Alpharetta, GA', caption: 'Top-down drone photo of the finished roof' },
      { src: '/images/jobs/fascia-trim-alpharetta-ga-1.webp', w: 1600, h: 900, alt: 'White fascia and roof-edge trim along new shingles in Alpharetta, GA', caption: 'White fascia and roof-edge trim' },
    ],
  },
  {
    id: 'mableton-roof-repair',
    city: 'Mableton, GA',
    citySlug: 'mableton',
    cityHref: '/service-areas/mableton/',
    cityLabel: 'Roofing in Mableton',
    cityHeading: 'A recent roof job in Mableton',
    service: 'Roof repair and damage documentation',
    serviceHref: '/roof-repair-dallas-ga/',
    serviceLabel: 'Roof repair',
    extraLinks: [{ href: '/storm-damage-roof-repair-dallas-ga/', label: 'Storm damage roof repair' }],
    title: 'Torn shingles documented on a shingle roof in Mableton',
    summary: 'A roof check on a ranch home with a screened porch in Mableton, photographed on August 5, 2026. The roof has gray architectural-style shingles that still look fairly new, with hip caps, roof vents and a drip edge, but several shingle strips along a hip and in the field had torn loose and left the underlayment showing. The worst area is outlined in yellow on the photo below.',
    findings: 'Shingle strips torn off along a hip and in the open field, with the underlayment exposed; a slipped shingle course above the gutter; damaged flashing on a pipe boot.',
    scope: [
      'Roof check with dated photos',
      'Torn and slipped shingles photographed and marked',
      'Pipe boot flashing checked',
    ],
    photos: [
      { src: '/images/jobs/roof-mableton-ga-1.webp', w: 1400, h: 788, alt: 'Shingle roof on a ranch home with a screened porch in Mableton, GA', caption: 'The home and roof' },
      { src: '/images/jobs/torn-shingles-mableton-ga-1.webp', w: 1280, h: 720, alt: 'Torn shingles along a hip outlined in yellow on a damage photo in Mableton, GA', caption: 'Torn shingles along a hip, marked for repair' },
      { src: '/images/jobs/torn-shingles-mableton-ga-2.webp', w: 720, h: 1280, alt: 'Missing shingle strip exposing underlayment on a roof in Mableton, GA', caption: 'Missing shingle strip, underlayment showing' },
      { src: '/images/jobs/roof-vent-hip-mableton-ga.webp', w: 1400, h: 642, alt: 'Hip caps and roof vent on a gray shingle roof in Mableton, GA', caption: 'Hip caps and roof vent' },
    ],
  },
];

export function projectForCity(citySlug) {
  return projects.find((p) => p.citySlug === citySlug) || null;
}

// The photo used on cards and city pages (the "after" for a before/after study).
export function coverPhoto(p) {
  return p.photos[p.coverIndex || 0];
}
