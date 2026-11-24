// Per-city copy for the shared parts of CityAreaPage (Nov 2026 dedupe).
//
// Before this file, every /service-areas/<city>/ page printed the same seven service-card
// summaries and the same six-line "why choose us" list, which made the city pages read as
// near-duplicates. Each city now gets its own lead line, card blurbs and trust list.
//
// Facts used here: Census ACS 2020-2024 5-year (B25035 median year built, B25003 tenure)
// via censusreporter.org; city/county permitting facts already sourced in localCopy.js;
// brand.js localNote facts. No prices, warranty terms, licensing claims or addresses.
// Insurance wording follows the sitewide pattern: we inspect, document with photos and can
// meet the adjuster; the insurer decides coverage; we do not guarantee approval and are not
// public adjusters.

export const cityAreaExtras = {
  acworth: {
    lead: "Looking for a roofing contractor in Acworth who traces the leak instead of guessing? We handle roof repair in Acworth, full replacements and storm work on homes from the lakefront to the newer subdivisions off the highway.",
    cards: {
      'roof-repair': 'Leaks under heavy canopy usually start at a valley or a pipe boot. We find the spot and fix it.',
      'roof-replacement': 'Tear-off to the deck, new underlayment and flashing, with tarps over your beds and a nail sweep at the end.',
      'new-construction': 'Roofs designed around the trees a wooded Acworth lot keeps, not a bare-lot plan.',
      'gutter-repair-replacement': 'Bigger runs and outlets for lots that get a full leaf drop every fall.',
      'storm-damage-roof-repair': 'Limb strikes are the most common storm call here. We tarp, photograph and repair.',
      siding: 'Siding repairs where the wall meets the roof, which is where shaded houses stay damp.',
      'exterior-painting': 'Paint and stain after we check for soft wood and moisture behind it.',
    },
    trustH: 'Why homeowners call us as their roofing contractor in Acworth',
    trust: [
      'Family-owned and run out of Dallas, GA since 2019, a short drive down to Acworth.',
      'Free inspections with dated photos of every problem we find.',
      'A written scope before work starts, and no added charges without your okay.',
      'We protect landscaping on wooded lots and run a magnetic nail sweep after every job.',
      'After a storm we document the damage and can meet your adjuster. Your insurer decides coverage.',
    ],
  },
  alpharetta: {
    lead: "We work as a roofing contractor in Alpharetta for homeowners with HOA rules to follow and roofs from the 1990s and 2000s coming due. Roof repair in Alpharetta, roof replacement and storm inspections all start with a free look.",
    cards: {
      'roof-repair': 'Leak tracing on complex rooflines, skylights and tie-ins, with photos of the cause.',
      'roof-replacement': 'Replacements that match your HOA packet, with materials staged off the street.',
      'new-construction': 'New roofs for custom builds and additions, planned with your builder.',
      'gutter-repair-replacement': 'Gutters sized for big two-story roofs, with downspouts placed where the yard drains.',
      'storm-damage-roof-repair': 'Post-storm inspections in north Fulton with photo documentation for your insurer.',
      siding: 'Siding and trim repairs at roof-to-wall lines on tall elevations.',
      'exterior-painting': 'Exterior paint and stain, after we fix any wood that is soft underneath.',
    },
    trustH: 'What you get from a roofing contractor in Alpharetta like us',
    trust: [
      'We prepare the HOA submittal with you before any material is ordered.',
      'Free inspections with photos you can share with your HOA or insurer.',
      'One written scope and one number, changed only with your approval.',
      'Crews stay off neighbors\u2019 lawns and the driveway is swept with a magnet each day.',
      'We are a family business from Dallas, GA, in operation since 2019.',
    ],
  },
  austell: {
    lead: "A good roofing contractor in Austell thinks about where the water goes after it leaves the roof. We handle roof repair in Austell, replacements and storm tarping, and we look at gutters and drainage on every call.",
    cards: {
      'roof-repair': 'Repairs on older Austell roofs, including flashing that was caulked instead of replaced.',
      'roof-replacement': 'Full tear-offs that check for a hidden second layer and tired decking.',
      'new-construction': 'New roofs planned together with gutters and downspout discharge.',
      'gutter-repair-replacement': 'Gutters and extensions that carry water well clear of the foundation.',
      'storm-damage-roof-repair': 'Emergency tarps, then photos and a written scope you can share with your insurer.',
      siding: 'Siding repairs where water gets behind the wall at the roof line.',
      'exterior-painting': 'Painting and staining on older homes, after we check the wood.',
    },
    trustH: 'Why families pick us as their roofing contractor in Austell',
    trust: [
      'Based in Dallas, GA and family-owned since 2019.',
      'Every inspection includes gutters and where your downspouts empty.',
      'Photos of the deck before we close it up, so you see what was replaced.',
      'We document storm damage and can meet your adjuster. We do not guarantee claim approval.',
      'Magnetic nail sweeps of the yard and driveway at the end of every day.',
    ],
  },
  canton: {
    lead: "As a roofing contractor in Canton and north Cherokee, we see more hail than most of metro Atlanta. Roof repair in Canton, replacements and hail inspections start with a free roof check and photos.",
    cards: {
      'roof-repair': 'Repairs for leaks, lifted shingles and cracked boots on Canton homes.',
      'roof-replacement': 'Tear-offs on foothill homes, with nailing set for the wind these ridges get.',
      'new-construction': 'Roofs for new Cherokee County homes, built to the shingle maker\u2019s instructions.',
      'gutter-repair-replacement': 'Gutter repairs, including dents we photograph before anything is replaced.',
      'storm-damage-roof-repair': 'Hail inspections that look at soft metal and shingle bruising, with full photo records.',
      siding: 'Siding checks after hail, where dents and cracks are easy to miss.',
      'exterior-painting': 'Exterior paint after storm repairs are finished and the wood is sound.',
    },
    trustH: 'Choosing a roofing contractor in Canton after a storm',
    trust: [
      'We are a local family business from Dallas, GA, not a crew that follows storms.',
      'Free hail inspections with dated photos of the evidence.',
      'We can meet your adjuster. We are not public adjusters and your insurer decides coverage.',
      'Written scope first, and no work begins until you approve it.',
      'Clean job sites with a magnetic sweep every day.',
    ],
  },
  douglasville: {
    lead: "If you need a roofing contractor in Douglasville, we cover the whole city and the rest of Douglas County. That includes roof repair in Douglasville, roof replacement and storm inspections after the spring wind.",
    cards: {
      'roof-repair': 'Fixes for wind-lifted shingles, cracked boots and failed flashing, with photos.',
      'roof-replacement': 'Replacements for owners and landlords, with a scope you can read from anywhere.',
      'new-construction': 'New roofs for builders working in Douglas County\u2019s permit process.',
      'gutter-repair-replacement': 'Gutters sized for burst rainfall, not a calm day.',
      'storm-damage-roof-repair': 'Wind and hail inspections with documentation your insurer can review.',
      siding: 'Siding repair after wind damage, especially at corners and roof lines.',
      'exterior-painting': 'Paint and stain on rentals and owner homes, after we check for moisture.',
    },
    trustH: 'Owners and landlords: your roofing contractor in Douglasville',
    trust: [
      'Family-owned in nearby Dallas, GA since 2019.',
      'Free inspections and dated photos, handy for rental owners who live elsewhere.',
      'A written number that only changes if you approve a change.',
      'Storm damage documented with photos; we can meet the adjuster, and your insurer decides coverage.',
      'Daily cleanup with a magnetic nail sweep.',
    ],
  },
  hiram: {
    lead: "We are a roofing contractor in Hiram, a few minutes from our Dallas shop. Most calls here are roof repair in Hiram, replacements on houses from the early 2000s, and storm checks after the wind comes across the ridge.",
    cards: {
      'roof-repair': 'Repairs on newer Hiram homes, from pipe boots to wind-lifted tabs.',
      'roof-replacement': 'Replacements for subdivisions where the whole street is aging at once.',
      'new-construction': 'New roofs for small Hiram builders, with phases that match.',
      'gutter-repair-replacement': 'Resetting pitch and hangers on original builder gutters, or replacing them.',
      'storm-damage-roof-repair': 'Wind damage checks, since a lifted shingle can look normal from the ground.',
      siding: 'Siding fixes on the windward side, where panels work loose.',
      'exterior-painting': 'Exterior paint on trim and fascia after any soft wood is replaced.',
    },
    trustH: 'Picking a roofing contractor in Hiram from next door',
    trust: [
      'Our shop is in Dallas, so a Hiram call is a short drive.',
      'We inspect each house on its own merits, even when the whole street is reroofing.',
      'Photos and a written scope come before any work.',
      'We document storm damage and can meet your adjuster; we do not promise coverage.',
      'Family-owned since 2019, with a magnetic sweep on every job.',
    ],
  },
  kennesaw: {
    lead: "Looking for a roofing contractor in Kennesaw with a real person on the phone? We handle roof repair in Kennesaw, replacements on late-1990s homes and storm work, with a written number up front.",
    cards: {
      'roof-repair': 'Repairs on 1990s and 2000s roofs, including missing kick-out flashing.',
      'roof-replacement': 'One-day replacements on most homes, dried in before dark.',
      'new-construction': 'New roofs built through the city\u2019s online permit process.',
      'gutter-repair-replacement': 'Gutters resized for the roof, with downspouts moved away from the slab.',
      'storm-damage-roof-repair': 'Tarps, drone photos and a written scope after storms.',
      siding: 'Siding repairs where roofs meet walls, a common leak point on production homes.',
      'exterior-painting': 'Painting and staining after we fix soft trim.',
    },
    trustH: 'How we work as your roofing contractor in Kennesaw',
    trust: [
      'A family business based in Dallas, GA since 2019, with no call center.',
      'Free inspections with photos and a written scope.',
      'Your price is fixed unless you approve a change, with photos showing why.',
      'We document storm damage and can meet your adjuster. Coverage is up to your insurer.',
      'Clean driveways and lawns, with a magnetic sweep at the end of the day.',
    ],
  },
  'lithia-springs': {
    lead: "We are a roofing contractor in Lithia Springs for homes along the I-20 corridor and the wooded streets near Sweetwater Creek. Roof repair in Lithia Springs, roof replacement and storm inspections all begin with a free roof check.",
    cards: {
      'roof-repair': 'Leak repairs on older Lithia Springs roofs, traced to the real source.',
      'roof-replacement': 'Full replacements with Douglas County permits handled for you.',
      'new-construction': 'New roofs for infill and custom homes in unincorporated Douglas County.',
      'gutter-repair-replacement': 'Gutters built to handle the leaf drop near the state park.',
      'storm-damage-roof-repair': 'Limb-strike tarping and storm inspections with photos.',
      siding: 'Siding repairs on shaded walls that stay damp.',
      'exterior-painting': 'Exterior paint after we check for rot and moisture.',
    },
    trustH: 'Choosing a roofing contractor in Lithia Springs',
    trust: [
      'Family-owned since 2019, based in Dallas, GA.',
      'We confirm your permit goes through Douglas County and pull it for you.',
      'Free inspections that include overhanging limbs and drainage.',
      'Storm damage photographed and scoped; we can meet your adjuster, and your insurer decides coverage.',
      'A magnetic nail sweep before we leave each day.',
    ],
  },
  mableton: {
    lead: "As a roofing contractor in Mableton, we work in both the new city and the parts of south Cobb that still permit through the county. Roof repair in Mableton, replacements and storm inspections are our most common calls.",
    cards: {
      'roof-repair': 'Repairs on mid-century ranches and newer homes, with photos of the cause.',
      'roof-replacement': 'Replacements with the right permit, city or county, confirmed first.',
      'new-construction': 'New roofs for builders working in Mableton\u2019s new permit process.',
      'gutter-repair-replacement': 'Gutter repair and replacement on older homes with tired fascia.',
      'storm-damage-roof-repair': 'Storm inspections, tarps and photo documentation for your insurer.',
      siding: 'Siding repairs on ranches where walls meet low roof lines.',
      'exterior-painting': 'Paint and stain after soft wood is replaced.',
    },
    trustH: 'What to expect from a roofing contractor in Mableton',
    trust: [
      'We check whether your address permits with the City of Mableton or Cobb County.',
      'Free inspections with dated photos.',
      'A written scope and price before work starts.',
      'We document storm damage and can meet your adjuster. We do not guarantee claim approval.',
      'Family-owned in Dallas, GA since 2019, with a nail sweep on every job.',
    ],
  },
  marietta: {
    lead: "Choosing a roofing contractor in Marietta means finding one who knows whether your address answers to the city or the county, and whether design review applies. We handle roof repair in Marietta, replacements and storm work with that sorted first.",
    cards: {
      'roof-repair': 'Repairs on older Marietta roofs, with more joints and more places to check.',
      'roof-replacement': 'Replacements that respect the street, with permits from the right office.',
      'new-construction': 'Infill and rebuild roofs that fit an established street.',
      'gutter-repair-replacement': 'Gutters and drip edge fixed together so fascia stops rotting.',
      'storm-damage-roof-repair': 'Storm inspections with photos, including matching notes for older shingles.',
      siding: 'Siding and trim repairs on older homes where the roof meets the wall.',
      'exterior-painting': 'Paint and stain for older homes, after we fix soft wood.',
    },
    trustH: 'How we work as a roofing contractor in Marietta',
    trust: [
      'We check the tax district and historic district status before anything is ordered.',
      'Free inspections and photos, including close-ups for shingle matching.',
      'Written scope and price, changed only with your approval.',
      'Storm damage documented; we can meet your adjuster, and your insurer decides coverage.',
      'Family-owned since 2019, with a magnetic sweep after every job.',
    ],
  },
  'powder-springs': {
    lead: "We are a roofing contractor in Powder Springs who knows the city runs its own permit office, separate from Cobb County. Roof repair in Powder Springs, replacements on ranch and two-story homes, and storm inspections are what we do most.",
    cards: {
      'roof-repair': 'Repairs on low-slope ranch roofs, where water moves slowly and finds every gap.',
      'roof-replacement': 'Replacements on ranches and steep two-story homes, planned for each.',
      'new-construction': 'New roofs that go through the city\u2019s own permit sequence.',
      'gutter-repair-replacement': 'Fall and outlet fixes before anyone sells you a full replacement.',
      'storm-damage-roof-repair': 'Hail and wind inspections, with no papers to sign on the porch.',
      siding: 'Siding repair at roof-to-wall lines and on wind-exposed walls.',
      'exterior-painting': 'Exterior paint after moisture checks and wood repair.',
    },
    trustH: 'Why owners trust us as their roofing contractor in Powder Springs',
    trust: [
      'We know the city permits its own work and we confirm what your job needs before it starts.',
      'Free inspections with photos, and no pressure to sign anything.',
      'A written scope before work starts.',
      'We document storm damage and can meet your adjuster. We are not public adjusters.',
      'Family-owned in Dallas, GA since 2019, with a nail sweep every day.',
    ],
  },
  roswell: {
    lead: "We work as a roofing contractor in Roswell on steep two-story homes and historic-district houses alike. Roof repair in Roswell, replacements that pass architectural review and storm inspections all start with a free look.",
    cards: {
      'roof-repair': 'Repairs on steep slopes and tall elevations, with photos from the roof.',
      'roof-replacement': 'Replacements that meet review rules where they apply.',
      'new-construction': 'New roofs and additions tied into existing rooflines.',
      'gutter-repair-replacement': 'Gutters and downspouts for tall elevations and sloped lots.',
      'storm-damage-roof-repair': 'Storm inspections in Fulton County with documentation for your insurer.',
      siding: 'Siding and trim repairs where tall walls meet the roof.',
      'exterior-painting': 'Exterior paint and stain after wood repairs.',
    },
    trustH: 'Working with a roofing contractor in Roswell',
    trust: [
      'We spec shingles that pass architectural review in the historic district.',
      'Free inspections with photos of every slope.',
      'Written scope and price up front.',
      'We document storm damage and can meet your adjuster; your insurer decides coverage.',
      'Family-owned in Dallas, GA since 2019, with daily cleanup.',
    ],
  },
};

// One extra local section per city, rendered after the page's own sections.
// Housing figures: Census ACS 2020-2024 5-year via censusreporter.org (B25035, B25003).
const extraSections = {
  acworth: { h2: 'Acworth homes by age, and what that means for the roof',
    paras: ["Acworth's housing is young. Census estimates for 2020 to 2024 put the median year built at 2000, and about 60 percent of homes are owner-occupied. That puts a lot of original roofs right at the age where repair-or-replace becomes a real question. Our answer depends on the roof, not the birth year. A shaded 2001 roof with one bad valley gets a repair. A 1990s roof that is brittle on every slope gets an honest conversation about roof replacement in Acworth, with photos so you can judge for yourself."] },
  alpharetta: { h2: 'Alpharetta roofs from the 1990s building wave',
    paras: ["The median Alpharetta home was built in 1996, per Census estimates for 2020 to 2024, and about 65 percent are owner-occupied. Many of those houses are on their second roof already. Others are still on the first and showing it: granule loss on the south slopes, cracked pipe boots and skylights that leak at the curb. We inspect, photograph and tell you which ones are repair jobs and which ones point toward roof replacement in Alpharetta, and we line the plan up with your HOA's rules from the start."] },
  austell: { h2: 'Older homes, more to check',
    paras: ["Austell's median home was built in 1993, according to Census estimates for 2020 to 2024, and about 65 percent are owner-occupied. On houses that age we often find a second layer of shingles, older decking and flashing that has been patched with sealant more than once. A roof inspection here takes a little longer for that reason. You get photos of each problem and a straight answer on whether roof repair in Austell will hold or whether a full replacement is the better spend."] },
  canton: { h2: 'Canton is one of the newest housing markets we serve',
    paras: ["The median home in Canton was built in 2005, going by Census estimates for 2020 to 2024. Newer roofs still take hail damage, and owners often do not realize it because nothing is leaking yet. Bruised shingles lose granules faster and can fail years early. A free inspection after a hail storm tells you what is there, with photos. If the damage is real, we can meet your adjuster. If it is not, we will say so and you can stop worrying about it."] },
  douglasville: { h2: 'A city of owners and renters',
    paras: ["About 48 percent of Douglasville homes are owner-occupied, according to Census estimates for 2020 to 2024, and the median house was built in 2001. That mix shapes how we work here. Owners get a walk-through and a written scope. Landlords who live elsewhere get the same scope plus photos of every slope, so they can approve roof repair in Douglasville or a full replacement without making the drive."] },
  hiram: { h2: 'The youngest housing in our area',
    paras: ["Hiram's median home was built in 2004, per Census estimates for 2020 to 2024, and the city has only about 2,000 homes. When most of a town went up in the same decade, the roofs age together. We see that in our schedule every spring, when whole streets start calling about the same problems. Our job is to look at each house on its own and tell you whether you need roof repair in Hiram or a replacement, not whatever the neighbor got."] },
  kennesaw: { h2: 'Late-1990s roofs across Kennesaw',
    paras: ["Kennesaw's median home was built in 1998, according to Census estimates for 2020 to 2024, and about 65 percent are owner-occupied. A lot of those roofs were put on by production crews working fast, and the same issues show up again and again: thin ridge vents with too little intake, missing kick-out flashing and early pipe boot failures. When we quote roof replacement in Kennesaw we fix those details as part of the job, not as extras."] },
  'lithia-springs': { h2: 'Older housing along the I-20 corridor',
    paras: ["The median Lithia Springs home was built in 1987, per Census estimates for 2020 to 2024, and a little under half are owner-occupied. Older roofs under heavy tree cover tend to fail at the valleys and around chimneys first. When we inspect, we look at those spots closely and check the attic for old water stains that tell us how long a leak has been going. Then we tell you whether a repair will hold or a replacement makes more sense."] },
  mableton: { h2: 'Mid-century ranches next to newer subdivisions',
    paras: ["Census estimates for 2020 to 2024 put the median year built for the Mableton census area at 1988, with about 65 percent of homes owner-occupied. That average hides a wide spread: ranches from the 1950s and 1960s on one street, subdivisions from the 2000s on the next. The older houses often have plank decking and low-slope sections that need different underlayment. We check what is under the shingles before quoting any roof replacement in Mableton."] },
  marietta: { h2: 'An older city, and roofs to match',
    paras: ["Marietta's median home was built in 1987, according to Census estimates for 2020 to 2024, and about 47 percent are owner-occupied. Older homes and rentals both mean roofs that have been patched over the years, sometimes by several different crews. We sort out what was done before, photograph it, and give you a plan. Sometimes that is roof repair in Marietta on one slope. Sometimes the patches have run out and replacement is the honest answer."] },
  'powder-springs': { h2: 'A town where most people own their homes',
    paras: ["About 82 percent of Powder Springs homes are owner-occupied, the highest share in our service area, according to Census estimates for 2020 to 2024. The median house was built in 1996. People here plan to stay, so they ask good questions about how long a repair will last and what a replacement should include. We answer with photos and a written scope, and we will not push roof replacement in Powder Springs on a roof that only needs a repair."] },
  roswell: { h2: 'Roswell roofs from the late 1980s and after',
    paras: ["Roswell's median home was built in 1989, per Census estimates for 2020 to 2024, and about 72 percent are owner-occupied. Many of the tall two-story homes from that era are on their second roof now, and some are due for a third. Steep pitches and big elevations make those replacements slower and more careful. We plan staging and safety around the house, and we spec shingles that fit any review rules that apply to your street."] },
};
for (const [slug, sec] of Object.entries(extraSections)) cityAreaExtras[slug].section = sec;

// Second paragraph for each city's extra section.
const secondParas = {
  acworth: "If you are not sure where to start, book the free inspection. We walk the roof, check the attic if we can get in, and send you dated photos with notes on what we would do first and what can wait.",
  alpharetta: "Most Alpharetta jobs start with the HOA. Send us the architectural guidelines or the approved shingle list and we will build the scope around them, so the submittal goes in once and the crew is not waiting on approval with the dumpster in your driveway.",
  austell: "Because so many Austell homes sit low or near creeks, we also look at where the gutters send water. A roof can be in fine shape and the crawlspace still be wet because a downspout empties against the slab. We will point that out even if it is not the job you called about.",
  canton: "Canton jobs are a longer drive from our Dallas shop than most, so we group inspections by day and tell you up front when the crew can get there. If water is coming in, call and say so, and we will tell you honestly how fast we can tarp.",
  douglasville: "Douglasville also gets straight-line wind most springs. Wind lifts shingle tabs and breaks the seal strip, and the tab often lays back down looking normal. We check for the crease lines that give it away, along the rakes and ridges first, and photograph what we find so you have a record whether or not you file a claim.",
  hiram: "Hiram is also the closest city to our shop, so we can often get out the same week for an inspection and sooner when water is coming in. If you want a second opinion on a quote from another company, we are glad to look at it and tell you what we agree with and what we would change.",
  kennesaw: "Kennesaw permits are applied for online only through the city's Building Services, and if your house is in the historic district, the Certificate of Appropriateness has to be approved before the permit application goes in. We check which rules apply to your address before we schedule anything, so the job does not stall halfway through.",
  'lithia-springs': "Lithia Springs is unincorporated, so roofing permits go through Douglas County rather than a city office. We confirm that for your address and handle the permit when one is needed. Near Sweetwater Creek State Park, we also check overhanging limbs and gutters on every visit, because that is where the next leak usually starts.",
  mableton: "Mableton became a city in 2022 and began issuing its own building permits inside city limits in March 2025. Some addresses with a Mableton mailing address are still under Cobb County. We check which office covers your house before we schedule work, and we pull the permit from the right one.",
  marietta: "Before we order anything in Marietta, we check two things: whether your address is permitted by the city or by Cobb County, and whether it sits in a historic district where exterior changes need a Certificate of Appropriateness. Sorting that out first keeps the job from stopping halfway.",
  'powder-springs': "The City of Powder Springs runs its own permit office and publishes its own roofing guide, separate from Cobb County. If your job needs a permit, we handle it. If it does not, we tell you that too, so you are not paying for paperwork you do not need.",
  roswell: "In the Canton Street historic district, architectural review can limit what goes on a roof. Outside it, many Roswell neighborhoods have HOA rules on color and profile. Either way, we start with the rules for your street and build the shingle choice and scope around them, so the approval goes through the first time.",
};
for (const [slug, p] of Object.entries(secondParas)) cityAreaExtras[slug].section.paras.push(p);
