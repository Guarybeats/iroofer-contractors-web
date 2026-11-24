// Real CompanyCam job photos used as small galleries on service pages (Nov 2026).
//
// PRIVACY: this repo is public. Every file in /public/images/jobs/ was exported with
// all EXIF/GPS metadata stripped (magick -strip), resized to max 1600px, WebP ~q60-80.
// Captions are city-level only: no street, house number, customer name or coordinates.
// Photos showing a house number, mailbox, plate, face, yard sign or street sign were
// rejected or cropped.
//
// CITY RULE: a photo's `city` is where it was actually taken. Never caption a photo
// with another city. Pages in other cities may show it, but the caption keeps its real city.
//
// ROOF REPLACEMENT RULE: replacement pages show finished new roofs only (no tear-off,
// ladders or old roofs), except a clearly labeled "Before" in a before/after pair.

const J = '/images/jobs/';

export const jobPhotos = {
  // Alpharetta, finished roof, photographed Aug 1, 2026
  alpharettaFront: { src: `${J}roof-replacement-alpharetta-ga-1.webp`, w: 1600, h: 900, city: 'Alpharetta, GA', alt: 'Finished architectural-style shingle roof on a stucco home after a roof replacement in Alpharetta, GA', caption: 'Finished roof, front of the home' },
  alpharettaSide: { src: `${J}roof-replacement-alpharetta-ga-2.webp`, w: 1600, h: 1157, city: 'Alpharetta, GA', alt: 'New gray architectural-style shingles, ridge caps and white gutters on a replaced roof in Alpharetta, GA', caption: 'New shingles, ridges and white gutters' },
  alpharettaRidge: { src: `${J}roof-replacement-alpharetta-ga-3.webp`, w: 1280, h: 720, city: 'Alpharetta, GA', alt: 'Drone close-up of new ridge and hip caps on a roof replacement in Alpharetta, GA', caption: 'New ridge and hip caps (drone)' },
  alpharettaDroneTop: { src: `${J}roof-inspection-drone-alpharetta-ga-1.webp`, w: 1600, h: 900, city: 'Alpharetta, GA', alt: 'Top-down drone photo of a finished shingle roof taken during a roof inspection in Alpharetta, GA', caption: 'Top-down drone photo of the roof' },
  alpharettaDronePlanes: { src: `${J}roof-inspection-drone-alpharetta-ga-2.webp`, w: 1400, h: 788, city: 'Alpharetta, GA', alt: 'Drone photo of roof planes, vent pipes and ridge used for a roof inspection in Alpharetta, GA', caption: 'Drone view of roof planes and vents' },
  alpharettaFascia: { src: `${J}fascia-trim-alpharetta-ga-1.webp`, w: 1600, h: 900, city: 'Alpharetta, GA', alt: 'White fascia and roof-edge trim along new shingles in Alpharetta, GA', caption: 'White fascia and roof-edge trim' },

  // Powder Springs: before Oct 14, 2024 / after Aug 1, 2026
  powderSpringsBefore: { src: `${J}roof-replacement-powder-springs-ga-before.webp`, w: 1600, h: 611, city: 'Powder Springs, GA', alt: 'Before: weathered, streaked shingles on a brick home in Powder Springs, GA, drone photo from Oct 14, 2024', caption: 'Oct 14, 2024, weathered and streaked shingles', label: 'Before' },
  powderSpringsAfter: { src: `${J}roof-replacement-powder-springs-ga-after.webp`, w: 1600, h: 900, city: 'Powder Springs, GA', alt: 'After: replaced roof and white gutters on the same brick home in Powder Springs, GA, Aug 1, 2026', caption: 'Aug 1, 2026, replaced roof and white gutters', label: 'After' },
  powderSpringsPipeBoot: { src: `${J}pipe-boot-old-roof-powder-springs-ga.webp`, w: 1280, h: 720, city: 'Powder Springs, GA', alt: 'Pipe boot flashing on an older shingle roof checked for leaks in Powder Springs, GA', caption: 'Pipe boot flashing on the old roof' },

  // Mableton, photographed Aug 5, 2026
  mabletonHouse: { src: `${J}roof-mableton-ga-1.webp`, w: 1400, h: 788, city: 'Mableton, GA', alt: 'Shingle roof on a ranch home with a screened porch in Mableton, GA', caption: 'The home and roof' },
  mabletonTornHip: { src: `${J}torn-shingles-mableton-ga-1.webp`, w: 1280, h: 720, city: 'Mableton, GA', alt: 'Torn shingle strips along a hip exposing underlayment on a roof in Mableton, GA', caption: 'Torn shingle strips along a hip' },
  mabletonTornStrip: { src: `${J}torn-shingles-mableton-ga-2.webp`, w: 720, h: 1280, city: 'Mableton, GA', alt: 'Missing shingle strip exposing underlayment on a roof in Mableton, GA', caption: 'Missing shingle strip, underlayment showing' },
  mabletonTornField: { src: `${J}torn-shingles-mableton-ga-3.webp`, w: 1400, h: 788, city: 'Mableton, GA', alt: 'Shingles torn off below a hip leaving underlayment exposed on a roof in Mableton, GA', caption: 'Shingles torn off below a hip' },
  mabletonSlipped: { src: `${J}slipped-shingle-mableton-ga.webp`, w: 900, h: 1600, city: 'Mableton, GA', alt: 'Roofer lifting a slipped shingle course above the gutter during a roof repair check in Mableton, GA', caption: 'Slipped shingle course above the gutter' },
  mabletonPipeBoot: { src: `${J}pipe-boot-flashing-mableton-ga.webp`, w: 1000, h: 815, city: 'Mableton, GA', alt: 'Damaged pipe boot flashing, a common roof leak source, on a roof in Mableton, GA', caption: 'Damaged pipe boot flashing' },
  mabletonVent: { src: `${J}roof-vent-hip-mableton-ga.webp`, w: 1400, h: 642, city: 'Mableton, GA', alt: 'Hip caps and roof vent on a gray shingle roof in Mableton, GA', caption: 'Hip caps and roof vent' },
  mabletonGutter: { src: `${J}gutter-drip-edge-mableton-ga.webp`, w: 900, h: 1600, city: 'Mableton, GA', alt: 'White gutter and drip edge along a shingle roof edge in Mableton, GA', caption: 'Gutter and drip-edge line' },

  // Dallas, inspection photos Nov 20, 2026
  dallasPitchGauge: { src: `${J}roof-inspection-pitch-gauge-dallas-ga.webp`, w: 788, h: 1400, city: 'Dallas, GA', alt: 'Pitch and slope gauge on shingles during a roof inspection in Dallas, GA', caption: 'Measuring roof pitch during the inspection' },
  dallasRoof: { src: `${J}roof-inspection-dallas-ga.webp`, w: 1280, h: 720, city: 'Dallas, GA', alt: 'Weathered shingle slopes and ridge vent photographed during a roof inspection in Dallas, GA', caption: 'Slopes and ridge vent checked on the roof' },

  // Smyrna siding, after photos Sept 30, 2026
  smyrnaShake1: { src: `${J}shake-siding-smyrna-ga-1.webp`, w: 1050, h: 1400, city: 'Smyrna, GA', alt: 'Clean gray shake siding on a two-story home after siding work in Smyrna, GA', caption: 'Shake siding after the work' },
  smyrnaShake2: { src: `${J}shake-siding-smyrna-ga-2.webp`, w: 1050, h: 1400, city: 'Smyrna, GA', alt: 'Gray shake siding above a screened porch after siding work in Smyrna, GA', caption: 'Shake siding above the screened porch' },
};

const P = jobPhotos;

// Gallery sets, by page type. `title` is the gallery heading.
export const jobPhotoSets = {
  replacement: { title: 'Finished roof replacement photos', photos: [P.alpharettaFront, P.alpharettaSide, P.alpharettaRidge] },
  'replacement-dallas': { title: 'More finished roof replacement photos', photos: [P.alpharettaFront, P.alpharettaRidge] },
  'replacement-powder-springs': { title: 'Before and after: a Powder Springs roof', photos: [P.powderSpringsBefore, P.powderSpringsAfter] },
  repair: { title: 'Roof repair problems we photograph', photos: [P.mabletonSlipped, P.mabletonTornStrip, P.mabletonPipeBoot] },
  leak: { title: 'Common leak sources from real jobs', photos: [P.mabletonPipeBoot, P.powderSpringsPipeBoot, P.mabletonTornField] },
  storm: { title: 'Storm damage photos from real jobs', photos: [P.mabletonTornHip, P.mabletonTornField, P.dallasPitchGauge] },
  'storm-dallas': { title: 'Storm inspection photos from real jobs', photos: [P.dallasPitchGauge, P.dallasRoof, P.mabletonTornHip] },
  inspection: { title: 'Drone and on-roof inspection photos', photos: [P.alpharettaDroneTop, P.alpharettaDronePlanes, P.dallasPitchGauge] },
  gutter: { title: 'Gutter and roof-edge photos from real jobs', photos: [P.mabletonGutter, P.alpharettaFascia] },
  'gutter-powder-springs': { title: 'Gutter photos from real jobs', photos: [P.powderSpringsAfter, P.mabletonGutter] },
  siding: { title: 'Shake siding photos from a real job', photos: [P.smyrnaShake1, P.smyrnaShake2] },
};
