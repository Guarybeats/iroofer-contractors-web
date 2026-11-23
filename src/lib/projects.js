// Completed-project case studies (Nov 2026).
//
// PRIVACY: this repo is public. City-level locations only. Never add a street
// address, house number, exact coordinates or a customer name.
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
    title: 'New roof and gutters on a two-story home in Powder Springs',
    summary: 'A roof replacement with new gutters on a two-story brick and siding home in Powder Springs.',
    scope: [
      'Roof replacement',
      'New architectural shingles',
      'New gutters',
    ],
    materials: ['Architectural shingles'],
    photos: [
      { src: '/images/jobs/02-powder-springs.webp', w: 1200, h: 900, alt: 'New architectural shingle roof on a two-story brick and siding home, Powder Springs GA', caption: 'New architectural shingles' },
    ],
  },
  {
    id: 'austell-roof-decking',
    city: 'Austell, GA',
    citySlug: 'austell',
    cityHref: '/service-areas/austell/',
    cityLabel: 'Roofing in Austell',
    service: 'Roof replacement',
    serviceHref: '/roof-replacement-austell/',
    serviceLabel: 'Roof replacement in Austell',
    title: 'Tear-off and new decking in Austell',
    summary: 'A roof replacement in Austell where the old roof came off and new wood decking went down before the new roof.',
    scope: [
      'Tear-off of the old roof',
      'New wood decking',
      'Roof replacement',
    ],
    photos: [
      { src: '/images/jobs/23-austell.webp', w: 1200, h: 675, alt: 'Roof tear-off with new wood decking going down, Austell GA', caption: 'Tear-off with new decking' },
    ],
  },
];

export function projectForCity(citySlug) {
  return projects.find((p) => p.citySlug === citySlug) || null;
}
