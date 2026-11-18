// Exterior painting and siding city pages. Same rules as localCopy.js:
// one entry per trade × city, no city-name swaps, no invented jobs, prices,
// or review counts. Permit facts are the ones already sourced in localCopy.js
// (checked 2026-08-31). Do not re-run scripts/gen-city-service-pages.mjs.
//
// Painting and siding in the same city must not share a paragraph. The
// Paulding structural-permit line is told from the paint side on Dallas
// (a coat is not that permit) and from the wall side on Dallas siding
// (sheathing replacement is).

export const tradeCopy = {
  'exterior-painting': {
    'dallas-ga': {
      title: 'Exterior Painting in Dallas, GA | iRoofer',
      description: 'Dallas paint fails from sun, pollen, and wind-driven rain. The crew in Dallas, GA writes the prep first. A color coat is not a Paulding structural permit.',
      h1: 'Exterior Painting & Staining in Dallas, GA',
      eyebrow: 'Dallas, GA',
      cityName: 'Dallas',
      hubHref: '/services/exterior-painting/',
      hubLabel: 'Exterior Painting',
      formId: 'exterior-painting-dallas-ga-quote',
      formSource: 'Exterior Painting & Staining Dallas',
      intro: 'Exterior painting and staining in Dallas is offered by the same family-owned crew based in Dallas, GA. We talk through what the house actually needs — peeling paint, weathered stain, or trim that is failing at the roof edge — and put the plan in writing after we see the house.',
      sections: [
        {
          h: 'What west Paulding weather does to a film',
          p: 'Summer UV chalks the south and west elevations. Pine pollen sticks in whatever is left of the binder. Wind-driven rain works into hairline cracks at outside corners. Those three show up together on Dallas houses, and they are the reason a one-coat roll-over fails by the next August. We scrape what is loose, wash what is chalking, and spot-prime bare wood before any finish goes on. Color and sheen are chosen on the wall, in daylight, against your brick and your roof. A chip fan in the shade of the truck is a different color.',
        },
        {
          h: 'A Dallas repaint is not a Paulding structural permit',
          p: 'Paulding County Building & Permitting sits at 240 Constitution Blvd in Dallas. The county FAQ says a permit is required for roofing or siding replacement only when the work is structural: sheathing, rafters, or trusses. Inspections are reached at 770-505-1398. A paint or stain coat that stays on sound material is not that filing, and we do not pull one to look official. The stop rule is the opposite case. If a fascia board comes off and the wood behind it is soft enough to be structural, coating stops. You get the photo. The county conversation happens before anyone keeps painting over rot.',
        },
        {
          h: 'Wet wood and an open eave come first',
          p: 'We will not paint wet wood, and we will not paint an active leak. Blisters are what you buy when water is still moving at the eave. If the stain on the soffit tracks back to the roof, the next page is [roof repair in Dallas, GA](/roof-repair-dallas-ga/), not another gallon. Gutters that dump onto the fascia get named in the same visit. The finish is scheduled only after you approve a written scope. Height, access, and how much film has already let go change the number, so nothing is posted here as a range.',
        },
      ],
      faq: [
        { q: 'Does every Dallas house need a county permit to be painted?', a: 'No. Paulding requires a permit when the work is structural — sheathing, rafters, or trusses — including siding replacement that reaches that point. A coat on sound material is not that. If we uncover rotten structure, we stop and call Building & Permitting at 240 Constitution Blvd before we continue.' },
        { q: 'Why do the south walls chalk and the north walls look dirty?', a: 'South and west take the UV. North and under pines stay damp, so pollen and mildew sit on the film. We treat the elevation we are standing in front of, not one recipe for the whole house.' },
        { q: 'Can you stain trim on the same visit as a roof-edge repair?', a: 'Often, if the wood is dry and the leak is already fixed. We write the paint scope and the roof scope as separate lines so you can approve one or both. Start with [roof repair in Dallas](/roof-repair-dallas-ga/) if water is still coming in.' },
        { q: 'Who shows up?', a: 'The Dallas crew. Family-owned since 2019, shop in Dallas, GA. Cristian Mendez. Same people who roof these houses, not a paint sub we hand the address to.' },
      ],
      related: [
        { href: '/siding-dallas-ga/', label: 'Siding in Dallas' },
        { href: '/roof-repair-dallas-ga/', label: 'Roof repair' },
        { href: '/roof-replacement-dallas-ga/', label: 'Roof replacement' },
        { href: '/services/exterior-painting/', label: 'Exterior painting hub' },
      ],
    },
    hiram: {
      title: 'House Painting in Hiram, GA | iRoofer',
      description: 'Hiram calls are faded south walls or peeling fascia, not a county form. We will not coat wet wood. The Dallas crew looks before a bucket is opened.',
      h1: 'Exterior Painting & Staining in Hiram, GA',
      eyebrow: 'Hiram, GA',
      cityName: 'Hiram',
      hubHref: '/services/exterior-painting/',
      hubLabel: 'Exterior Painting',
      formId: 'exterior-painting-hiram-quote',
      formSource: 'Exterior Painting & Staining Hiram',
      intro: 'A lot of Hiram paint work is faded south walls and peeling fascia after a few hot summers. We will not paint over wet wood or active leaks. If the roof edge is the real problem, we say so before anyone opens a bucket.',
      sections: [
        {
          h: 'South fade and fascia peel are different jobs',
          p: 'A wall that has gone pale on the sunny side still has film. It needs a wash and a coat that can handle another Paulding summer. Fascia that is curling at the eave is often wet behind the paint, and paint will not dry that board out. We photograph both and write them as separate lines. Homeowners who got one price for “the whole outside” usually paid to bury the wet board. You will see which boards we refuse to coat.',
        },
        {
          h: 'Shade from Hiram’s trees holds mildew, not just pollen',
          p: 'Streets with mature cover stay damp on the north and under the canopy after a storm. That film grows mildew. It is not the same failure as the chalking south wall two houses away in the open. We kill and wash the shaded side. We do not pretend a brightener is prep. If needles and leaves are piled in the gutter above that wall, the mildew comes back, and we will point at [gutter repair in Hiram](/gutter-repair-replacement-hiram/) instead of promising a five-year coat over a clogged eave.',
        },
        {
          h: 'Fascia moisture is the Hiram decision, not a form',
          p: 'The county permit line for structural work is written on our Dallas painting page, because that is where the office sits. On a Hiram house the usual decision is simpler and wetter: is the fascia board dry? We probe the peel at the eave and photograph the back of the board when it comes loose. A dry board can be scraped, back-primed, and finished. A damp board gets repaired and the water path named. That path is often [roof repair in Hiram](/service-areas/hiram/#roof-repair). We do not file a color with the county, and we do not schedule stain while the board is still drinking water.',
        },
      ],
      faq: [
        { q: 'Will you paint fascia that is peeling but still nailed on?', a: 'Only if the wood is dry and sound. Peeling at the eave is often a wet board. We probe it. Soft wood is a repair, then a coat, not a coat alone.' },
        { q: 'Do shaded Hiram walls get the same product as the sunny side?', a: 'Not by default. Sunny elevations chalk. Shaded elevations grow mildew under the trees. Prep follows the wall, and the written scope says which is which.' },
        { q: 'Is the Hiram visit a different company from the Dallas roof crew?', a: 'No. Family-owned in Dallas since 2019. Hiram is a short drive. Cristian Mendez’s crew does the look and the roof-edge call.' },
        { q: 'Do you quote Hiram painting from the street?', a: 'No. Access, height, and how much film has failed change the number. You get it in writing after we are on the house. Nothing on this page is a price.' },
      ],
      related: [
        { href: '/siding-hiram/', label: 'Siding in Hiram' },
        { href: '/service-areas/hiram/#roof-repair', label: 'Roof repair' },
        { href: '/roof-replacement-hiram/', label: 'Roof replacement' },
        { href: '/gutter-repair-replacement-hiram/', label: 'Gutters' },
        { href: '/services/exterior-painting/', label: 'Exterior painting hub' },
      ],
    },
    douglasville: {
      title: 'Douglasville Exterior Painting | iRoofer',
      description: 'Douglasville south and west walls collect pollen and red-clay dust. We wash and spot-prime first. Rotten sheathing is a county permit. A color is not.',
      h1: 'Exterior Painting & Staining in Douglasville, GA',
      eyebrow: 'Douglasville, GA',
      cityName: 'Douglasville',
      hubHref: '/services/exterior-painting/',
      hubLabel: 'Exterior Painting',
      formId: 'exterior-painting-douglasville-quote',
      formSource: 'Exterior Painting & Staining Douglasville',
      intro: 'Douglas County pollen and red-clay dust collect on south and west walls. Prep matters more than the last coat. We wash, scrape, and spot-prime before we paint or stain so the finish has a chance to last through another Georgia summer.',
      sections: [
        {
          h: 'Clay dust and pollen are the first coat whether you wanted them or not',
          p: 'Douglasville yards throw a red film onto whatever faces the afternoon sun. Pollen sticks in it. If that layer is painted over, the new film lets go with the dust. Washing is not a courtesy. It is the job. After the wall is clean we scrape only what is loose, spot-prime bare spots, and then coat. A full strip of sound paint is a waste of your money and we will say so.',
        },
        {
          h: 'Wind off the ridge cracks film at the corners',
          p: 'Spring straight-line wind shows up on Douglasville roofs as creased shingles. On the walls it shows up as cracked film at outside corners and at the edge of window casing, where the board flexes. Those cracks are not a “whole house is failing” diagnosis. We mark them, open the ones that go to bare wood, and leave sound field alone. If the crack is actually a leak from above, painting pauses and the note goes to [roof repair in Douglasville](/service-areas/douglasville/#roof-repair).',
        },
        {
          h: 'When Douglas County permitting actually enters a paint conversation',
          p: 'Douglas County’s Building Permit Department is 770-920-7201. Inspection requests go to 770-920-7333. Applications run through buildingdepartment.com. None of that is a form for “we changed the color.” It becomes the conversation when failed trim has rotten sheathing behind it and the repair is no longer a coating. We stop, show you the opening, and file what the county wants before the wall is closed and painted. We do not guess that a stain job needs a permit, and we do not skip one once the sheathing is involved.',
        },
      ],
      faq: [
        { q: 'Can you paint over the red dust if you prime it?', a: 'Prime does not glue loose clay and pollen to the wall. We wash first. Then we prime bare wood, not the dust.' },
        { q: 'Who do we call if the job turns into rotten sheathing?', a: 'We call Douglas County. Building permits 770-920-7201, inspections 770-920-7333, filing on buildingdepartment.com. You see the photo before that call becomes your bill.' },
        { q: 'Do corner cracks mean the whole elevation has to be stripped?', a: 'Usually no. Wind cracks the film where the board moves. We open those spots and coat the field if the field is still bonded.' },
        { q: 'Are you driving in from outside Douglas County?', a: 'The shop is in Dallas, in neighboring Paulding. Douglasville is regular work for the same crew, family-owned since 2019. Call (470) 236-1410 and ask for a wall visit, not a roof pitch.' },
      ],
      related: [
        { href: '/siding-douglasville/', label: 'Siding in Douglasville' },
        { href: '/service-areas/douglasville/#roof-repair', label: 'Roof repair' },
        { href: '/roof-replacement-douglasville/', label: 'Roof replacement' },
        { href: '/services/exterior-painting/', label: 'Exterior painting hub' },
      ],
    },
    'powder-springs': {
      title: 'Powder Springs House Painting | iRoofer',
      description: 'Powder Springs issues its own building permits. A sound-wall repaint is not that filing. Chalking west eaves get scraped and primed, not rolled over.',
      h1: 'Exterior Painting & Staining in Powder Springs, GA',
      eyebrow: 'Powder Springs, GA',
      cityName: 'Powder Springs',
      hubHref: '/services/exterior-painting/',
      hubLabel: 'Exterior Painting',
      formId: 'exterior-painting-powder-springs-quote',
      formSource: 'Exterior Painting & Staining Powder Springs',
      intro: 'Cobb summers cook west-facing elevations in Powder Springs. If the existing coating is chalking or peeling at the eaves, we plan the scrape and prime rather than rolling over it. You get a written scope, not a one-line “paint the house.”',
      sections: [
        {
          h: 'West eaves chalk here, and rolling over chalk is how coats slide off',
          p: 'The afternoon sun sits on west walls and on the underside of eaves that have no shade. Chalk is the binder giving up. A fresh coat rolled onto chalk bonds to the powder, and the powder lets go. We scrape, wash the chalk off, prime the bare and the stained wood, and then finish. East walls that are still tight get a different line on the scope. You should be able to read which elevation is a wash-and-coat and which one is a strip.',
        },
        {
          h: 'Inside the city, a color is not a building permit',
          p: 'Powder Springs issues building permits itself. A repaint of sound material is not that filing. The city’s contractor rules for work that does need a permit, including the license and bond language, are on the siding page for this city and on the city’s own site. If a “paint” visit turns into rotten soffit or an open wall, we stop calling it a color job and ask the city before we continue. Until then, the scope is wash, scrape, prime, and finish.',
        },
        {
          h: 'Chalk on the eaves is a binder failure, not a dirty wall',
          p: 'Run a hand under a west eave here and it comes back white. That powder is the old binder, and it has to leave the board before a new film will stay. We do that elevation fully. A north eave that is tight and only dusty gets a wash. Mixing those two into one line is how the bid looks cheap and the west eave peels again. If the peel is wet, not chalky, the water is above the paint. Read [roof repair in Powder Springs](/service-areas/powder-springs/#roof-repair) before you buy a finish for a board that is still taking on rain.',
        },
      ],
      faq: [
        { q: 'Do I pull a Powder Springs permit just to change color?', a: 'Not for a coat on sound material. The city does issue its own building permits. If we open rotten soffit, we stop and ask the city before anyone keeps painting. The license and bond rules for that permitted work are published by the city and spelled out on our Powder Springs siding page.' },
        { q: 'Why not just recoat the chalking west eave?', a: 'The white powder is dead binder. Paint sticks to the powder and falls off with it. That eave is washed, scraped, primed, and then finished. A tight east wall is not the same line.' },
        { q: 'Do you publish a Powder Springs painting number?', a: 'No. How much binder has failed, and whether any board is wet, changes the day. You get a written figure after the visit, not a range on this page.' },
        { q: 'Can the roof crew and the paint visit be the same appointment?', a: 'Yes when you want both. They are written as separate scopes. Water still entering means the roof line comes first.' },
      ],
      related: [
        { href: '/siding-powder-springs/', label: 'Siding in Powder Springs' },
        { href: '/service-areas/powder-springs/#roof-repair', label: 'Roof repair' },
        { href: '/roof-replacement-powder-springs/', label: 'Roof replacement' },
        { href: '/services/exterior-painting/', label: 'Exterior painting hub' },
      ],
    },
    marietta: {
      title: 'Marietta Exterior Painting | iRoofer',
      description: 'Marietta color follows the parcel: city (4) or Cobb (9). Historic districts need a Certificate of Appropriateness before paint. Window trim fails first.',
      h1: 'Exterior Painting & Staining in Marietta, GA',
      eyebrow: 'Marietta, GA',
      cityName: 'Marietta',
      hubHref: '/services/exterior-painting/',
      hubLabel: 'Exterior Painting',
      formId: 'exterior-painting-marietta-quote',
      formSource: 'Exterior Painting & Staining Marietta',
      intro: 'Exterior painting and staining in Marietta has to respect the house in front of us — historic trim on one block, an HOA color sheet on another. We look first, then put colors and prep in writing.',
      sections: [
        {
          h: 'Window trim and soffits fail before the field of the wall',
          p: 'Older Marietta wood trim often fails at windows and soffits before the field of the wall does. Water sits on the sill. The casing checks. The soffit peels at the outside corner while the lap in the middle of the wall is still bonded. We call that out so you are not paying to paint wood that should be repaired or replaced first. A pretty field over rotten casing is the job we decline.',
        },
        {
          h: 'City, county, or a Certificate of Appropriateness',
          p: 'Marietta jurisdiction is the tax district on the qPublic parcel, not the mailing address. District (4) MARIETTA means city permits. District (9) UNINCORPORATED means Cobb County. Two houses on a road you think of as Marietta can fall on different sides. Historic districts add another step: a Certificate of Appropriateness under Article 7-9, Historic Preservation, before an exterior change. Color is an exterior change. We do not pick a chip and hope the district agrees. If the house is inside a district, the COA is sorted out before buckets are opened. The city’s own write-up of the split is mariettaga.gov/1595.',
        },
        {
          h: 'Sills, putty, and casing get their own lines',
          p: 'A Marietta window that has checked casing often has loose glazing putty too. Paint over loose putty cracks along the glass. We cut out the failed putty, prime the bare sash, and then coat. The sill that holds water is a repair, not a color. Those lines sit on the scope next to the field of the wall so you can approve the windows without buying a whole-house strip. Bring the HOA sheet if a subdivision issued one. We sample the approved chips on the casing in daylight. One palette for every Marietta address is how the wrong color gets painted.',
        },
      ],
      faq: [
        { q: 'How do I know if my Marietta house is city or Cobb for an exterior change?', a: 'Look up the parcel and read the tax district. (4) MARIETTA is the city. (9) UNINCORPORATED is Cobb County. We confirm it before we treat a color change as “no one to tell.” The city explains the split at mariettaga.gov/1595.' },
        { q: 'What is the Certificate of Appropriateness for a paint job?', a: 'In a Marietta historic district, exterior changes go through historic preservation first. Article 7-9. Color can be the change. The certificate comes before we paint, not after a neighbor complains.' },
        { q: 'Do you paint rotten window casing if I just want it to match?', a: 'No. Older trim here fails at the windows and soffits first. Repair or replace that wood, then coat it. Painting the rot is how the peel comes back.' },
        { q: 'We have an HOA color sheet and we are not in a historic district. What do you need?', a: 'The current approved list, on the house, in daylight. We sample on the casing before a full bucket is opened. That packet is not a Certificate of Appropriateness, and we will not treat it like one.' },
      ],
      related: [
        { href: '/siding-marietta/', label: 'Siding in Marietta' },
        { href: '/service-areas/marietta/#roof-repair', label: 'Roof repair' },
        { href: '/roof-replacement-marietta/', label: 'Roof replacement' },
        { href: '/services/exterior-painting/', label: 'Exterior painting hub' },
      ],
    },
    kennesaw: {
      title: 'Kennesaw Exterior Paint & Stain | iRoofer',
      description: 'Kennesaw historic-district color needs a certificate before any building permit. HOA lists get sampled on the wall in daylight. Permits are filed online only.',
      h1: 'Exterior Painting & Staining in Kennesaw, GA',
      eyebrow: 'Kennesaw, GA',
      cityName: 'Kennesaw',
      hubHref: '/services/exterior-painting/',
      hubLabel: 'Exterior Painting',
      formId: 'exterior-painting-kennesaw-quote',
      formSource: 'Exterior Painting & Staining Kennesaw',
      intro: 'Kennesaw HOAs sometimes have color packets. Bring the approved list if you have one. We sample colors on the wall in daylight before anyone opens a full bucket. If the house is in a historic district, the city’s certificate comes before that sample becomes the job.',
      sections: [
        {
          h: 'An HOA packet is not a historic-district certificate',
          p: 'A lot of Kennesaw subdivisions hand you a short list of approved body and trim colors. That list is the HOA. It is not the City of Kennesaw. We put the approved chips on the wall in open daylight, because a swatch in the kitchen lies. You pick from what you can see on the siding. We do not open a five-gallon bucket of a color the packet does not allow, and we do not tell you the HOA “usually doesn’t notice.”',
        },
        {
          h: 'Historic districts: the certificate before the permit',
          p: 'Kennesaw Building Services takes permit applications online only. The desk is 770-429-4554 and permits@kennesaw-ga.gov. For houses in a historic district, the city requires the Certificate of Appropriateness to be approved before a building-permit application is submitted. That order matters. An ordinary repaint outside the district is often not a building permit at all. Inside the district, exterior color can be the thing the certificate covers. We do not guess which side of the line the porch sits on. The city’s building page is kennesaw-ga.gov/buildingservices.',
        },
        {
          h: 'North Cobb sun on trim that was last coated years ago',
          p: 'What we see on Kennesaw trim is checked casing, chalked body, and caulk that has pulled off the brick. Those are prep items, written one by one. Caulk is not a coat of paint. Failed sealant at a window gets cut out and replaced before stain or paint, or the joint opens up and the new film cracks along the same line. If the stain under a window is coming from the roof, we stop and route that to [roof repair in Kennesaw](/service-areas/kennesaw/#roof-repair).',
        },
      ],
      faq: [
        { q: 'Do I need a Kennesaw building permit to repaint?', a: 'Often no, outside a historic district, when nothing structural is opened. Inside a historic district the Certificate of Appropriateness comes first, and it has to be approved before a building permit application. Building Services: 770-429-4554, permits@kennesaw-ga.gov, applications online only.' },
        { q: 'What should I bring if the HOA controls colors?', a: 'The current approved list. We sample on the wall in daylight. We will not guess from a photo of a neighbor’s house.' },
        { q: 'Will you caulk every joint as part of the coat?', a: 'We replace sealant that has failed. We do not smear new caulk over old caulk and call it prep. Joints that are still tight stay.' },
        { q: 'Is this the roof crew?', a: 'Yes. Family-owned in Dallas since 2019. Kennesaw walls and Kennesaw roofs are the same people. Call (470) 236-1410.' },
      ],
      related: [
        { href: '/siding-kennesaw/', label: 'Siding in Kennesaw' },
        { href: '/service-areas/kennesaw/#roof-repair', label: 'Roof repair' },
        { href: '/roof-replacement-kennesaw/', label: 'Roof replacement' },
        { href: '/services/exterior-painting/', label: 'Exterior painting hub' },
      ],
    },
    acworth: {
      title: 'Acworth Exterior Painting | iRoofer',
      description: 'Near Lake Allatoona, Acworth walls split into shade mildew and open-wall fade. We do not treat the city’s shingle-repair exclusion as a paint rule.',
      h1: 'Exterior Painting & Staining in Acworth, GA',
      eyebrow: 'Acworth, GA',
      cityName: 'Acworth',
      hubHref: '/services/exterior-painting/',
      hubLabel: 'Exterior Painting',
      formId: 'exterior-painting-acworth-quote',
      formSource: 'Exterior Painting & Staining Acworth',
      intro: 'Moisture near Lake Allatoona and shade under big trees create two different paint problems on Acworth houses — fading on open walls, and mildew in the shade. We treat the surface we find, not a generic one-coat pitch.',
      sections: [
        {
          h: 'Lake air and tree shade are not one failure',
          p: 'Houses closer to the water carry more humidity on walls that never see full sun. Under a mature canopy that humidity grows mildew in the film. Open south and west walls on the same street chalk and fade instead. A single product and a single prep note will miss one of them. The written scope names the shaded elevations and the open ones separately. We wash mildew. We do not paint over it and call the green “aged.”',
        },
        {
          h: 'Do not borrow Acworth’s shingle exclusion for a paint job',
          p: 'Acworth’s building department excludes ordinary repairs from a permit, and it names replacing shingles as an example of that exclusion. Altering the roof design still needs a permit. Unpermitted work that did need a permit carries a penalty of 100% of the permit fee under Sec. 18-56(g)(2). None of that sentence is a paint rule. A color coat is not a shingle repair, and we will not tell you the roof exemption covers the walls. If a job moves past coating into work the city would call an alteration, we ask the building department before we start. We do not discover the penalty after the fact.',
        },
        {
          h: 'Mildew that comes back is usually the eave, not the gallon',
          p: 'If the shaded wall is being fed by a gutter that overflows, or by a roof edge that drips down the siding, a wash lasts until the next rain. We will say that on the visit. The paint line waits. [Gutter repair in Acworth](/gutter-repair-replacement-acworth/) or [roof repair](/service-areas/acworth/#roof-repair) is the honest next step. In-town houses and lakefront houses get the same crew from Dallas. They do not get the same diagnosis.',
        },
      ],
      faq: [
        { q: 'Does Acworth’s “ordinary repair” rule mean I can repaint with no questions?', a: 'The exclusion the city publishes is about ordinary repairs, and the example it gives is replacing shingles. We do not stretch that example over a paint job, and we do not stretch it over wall work that changes the exterior. If the scope leaves simple coating, we ask. Skipping a permit that was required is a 100% fee penalty under Sec. 18-56(g)(2).' },
        { q: 'Why does the lakeside wall grow mildew and the front wall fade?', a: 'Humidity off Lake Allatoona and shade under the trees feed mildew. Open walls take the sun and chalk. They are written as two preps.' },
        { q: 'Can you match a faded body color exactly?', a: 'We sample in daylight on the wall. Sun-faded film will not match a fresh can by the name on the label. You see the sample before we commit the elevation.' },
        { q: 'Who does the work?', a: 'iRoofer Contractors, family-owned in Dallas since 2019. Acworth is in our regular Cobb loop. (470) 236-1410.' },
      ],
      related: [
        { href: '/siding-acworth/', label: 'Siding in Acworth' },
        { href: '/service-areas/acworth/#roof-repair', label: 'Roof repair' },
        { href: '/roof-replacement-acworth/', label: 'Roof replacement' },
        { href: '/gutter-repair-replacement-acworth/', label: 'Gutters' },
        { href: '/services/exterior-painting/', label: 'Exterior painting hub' },
      ],
    },
    austell: {
      title: 'Austell Exterior Painting | iRoofer',
      description: 'In Austell we stop overflowing gutters before we paint fascia. A color coat is not Cobb floodplain work under Chapter 58. Splash lines get checked first.',
      h1: 'Exterior Painting & Staining in Austell, GA',
      eyebrow: 'Austell, GA',
      cityName: 'Austell',
      hubHref: '/services/exterior-painting/',
      hubLabel: 'Exterior Painting',
      formId: 'exterior-painting-austell-quote',
      formSource: 'Exterior Painting & Staining Austell',
      intro: 'If gutters are overflowing onto the fascia, paint will not last. On Austell houses we flag drainage first. Then we prep and paint or stain the surfaces that are actually dry enough to take a finish.',
      sections: [
        {
          h: 'Fascia fed by a spilling gutter will blister on a schedule',
          p: 'The failure we keep seeing is a neat-looking wall and a fascia board that peels in a stripe under the gutter. That stripe is overflow, not “old paint.” Coating it locks the water in for one season. We mark the runs that spill, and we tell you the finish is a second step. [Gutter repair in Austell](/gutter-repair-replacement-austell/) is the first conversation when the stripe is active. Dry, sound fascia can be scraped and coated in the same scope. Wet fascia cannot.',
        },
        {
          h: 'A repaint is not floodplain compliance',
          p: 'Cobb County regulates floodplains in Chapter 58, Article 2. The county’s September 2009 flood is part of why those rules are not theoretical on lower ground. Some Austell lots sit where splash and standing water stain the bottom of the wall. We look at that line. What we will not do is describe a color coat as mitigation, elevation work, or a flood repair. We did not invent a list of houses we restored after that flood, and this page will not pretend otherwise. If the work stops being paint and becomes structural wall repair on a parcel in the floodplain, we say that before any finish is promised. The rules are the county’s, not a sentence we can waive.',
        },
        {
          h: 'Tight lots change the prep day, not the standard',
          p: 'Austell yards are often too tight to stage a mess and “clean up Saturday.” Drop cloths, ladder feet, and where the wash water goes get planned the way we plan a roof day: the yard stays walkable when we leave. That is logistics. It is not a different product. You still get a written scope, and you still do not get a price off this page. Height and how much film has failed are what move the number. The shop is in Dallas. Austell is a regular drive, not a franchise territory.',
        },
      ],
      faq: [
        { q: 'Should I paint the fascia before I fix the gutter?', a: 'No, if the gutter is still spilling on that board. The new film blisters. We will coat fascia that is dry and sound. We will not coat a wet stripe and hope.' },
        { q: 'Does exterior painting satisfy Cobb floodplain rules?', a: 'No. Chapter 58, Article 2 is floodplain regulation. A color coat is not mitigation and we will not sell it as that. Structural wall work on a floodplain parcel is a separate question we raise before we start, not a claim that we have repaired specific flood houses.' },
        { q: 'What about the stained boards at the bottom of the wall?', a: 'On lower lots that stain is often splash. We find out if the wood is soft. Soft wood is repaired. A stain line on sound wood is prep, then finish.' },
        { q: 'Do you publish an Austell painting price?', a: 'No. Access on a tight lot and the amount of failed film change it. Written number after the visit. (470) 236-1410.' },
      ],
      related: [
        { href: '/siding-austell/', label: 'Siding in Austell' },
        { href: '/service-areas/austell/#roof-repair', label: 'Roof repair' },
        { href: '/roof-replacement-austell/', label: 'Roof replacement' },
        { href: '/gutter-repair-replacement-austell/', label: 'Gutters' },
        { href: '/services/exterior-painting/', label: 'Exterior painting hub' },
      ],
    },
  },
  siding: {
    'dallas-ga': {
      title: 'Siding Repair in Dallas, GA | iRoofer',
      description: 'Dallas siding stays a repair when the wall is sound. Paulding requires a permit when replacement reaches sheathing. We stop and pull it before we close.',
      h1: 'Siding Repair & Replacement in Dallas, GA',
      eyebrow: 'Dallas, GA',
      cityName: 'Dallas',
      hubHref: '/services/siding/',
      hubLabel: 'Siding',
      formId: 'siding-dallas-ga-quote',
      formSource: 'Siding Repair & Replacement Dallas',
      intro: 'Dallas and the rest of Paulding see strong Georgia sun and spring storms. That combination fades panels and opens gaps where water can reach the sheathing. We repair what can be repaired and replace what cannot, without pushing a full re-side when a section will do.',
      sections: [
        {
          h: 'A loose course is not a whole-house re-side',
          p: 'Sun bakes the south elevation. A spring gust lifts a corner that was already proud of the wall. The honest repair is often those courses, the flashing where the wall meets the roof, and a look at the sheathing behind the opening. We photograph the cavity. If the wood is dry and solid, we close a section and leave the rest of the house alone. Selling every elevation because one corner opened is how homeowners stop trusting contractors. You will see the pictures before material is ordered.',
        },
        {
          h: 'Paulding’s permit line is about the sheathing, and siding is named',
          p: 'The county FAQ is specific. A permit is required for siding replacement when the work is structural: sheathing, rafters, or trusses. Building & Permitting is at 240 Constitution Blvd in Dallas. Inspections: 770-505-1398. Re-nailing a sound panel is not that. Replacing rotten sheathing is. When we open a wall and the sheathing has to come out, work stops, you see it, and the permit is pulled before the new panels close the house. We do not finish a structural re-side and “send the paperwork later.” Our shop is in Dallas, GA, so this office is not a theory. It is the counter across town.',
        },
        {
          h: 'Roof-to-wall joints are where Dallas leaks pretend to be siding leaks',
          p: 'Kick-out flashing that was never bent, or step flashing buried under a panel, dumps water behind the siding. The panel then looks like the failure. We pull enough material to see the joint. If the roof is the source, [roof repair in Dallas, GA](/roof-repair-dallas-ga/) is the scope that actually stops the water. New panels over a bad kick-out just hide it. Fasteners get picked up before we leave. A siding day should not leave nails in the grass any more than a roof day should.',
        },
      ],
      faq: [
        { q: 'When does a Dallas siding job need a Paulding permit?', a: 'When the replacement is structural: sheathing, rafters, or trusses. The county FAQ includes siding replacement in that rule. A fastened section on sound sheathing is a repair. Soft sheathing means we stop and file with Building & Permitting, 240 Constitution Blvd, inspections 770-505-1398.' },
        { q: 'Can you replace one wall and leave the others?', a: 'Yes, when the others are sound. We match as close as current material allows and we tell you when a discontinued profile will not be invisible. You approve that in writing.' },
        { q: 'The inside wall is stained. Is the siding the leak?', a: 'Sometimes. Often the water entered at the roof-to-wall joint and ran behind the panels. We open the joint and show you. Roof leaks are quoted on the roof scope, not buried in a siding price.' },
        { q: 'Do you publish a re-side price for Dallas?', a: 'No. Stories, access, and how much sheathing is soft change it. Free look, written number, then material. (470) 236-1410.' },
      ],
      related: [
        { href: '/exterior-painting-dallas-ga/', label: 'Exterior painting in Dallas' },
        { href: '/roof-repair-dallas-ga/', label: 'Roof repair' },
        { href: '/roof-replacement-dallas-ga/', label: 'Roof replacement' },
        { href: '/services/siding/', label: 'Siding hub' },
      ],
    },
    hiram: {
      title: 'Hiram Siding Repair & Replacement | iRoofer',
      description: 'Hiram walls run from older vinyl to fiber-cement looks. We do not name the product from the curb. Panel, wall, or larger replacement waits on the sheathing.',
      h1: 'Siding Repair & Replacement in Hiram, GA',
      eyebrow: 'Hiram, GA',
      cityName: 'Hiram',
      hubHref: '/services/siding/',
      hubLabel: 'Siding',
      formId: 'siding-hiram-quote',
      formSource: 'Siding Repair & Replacement Hiram',
      intro: 'Hiram neighborhoods vary from older vinyl to newer fiber-cement looks. We do not guess the product from the street. After we see the house we tell you whether a panel swap, a wall, or a larger replacement makes sense.',
      sections: [
        {
          h: 'Vinyl and fiber-cement fail on different calendars',
          p: 'Older vinyl gets brittle and cracks at the nail hem when a limb hits it or a cold morning follows a hot week. Fiber-cement, or a product meant to look like it, fails at cut edges and at butt joints if those cuts were never primed. Treating both as “siding” and ordering one profile is how a repair flashes from the road. We identify what is on the wall from a piece in our hand, not from the driveway. Discontinued vinyl is common. We tell you the closest current match and where the eye will still see the patch.',
        },
        {
          h: 'Limbs, not age, open a lot of Hiram walls',
          p: 'Mature trees over these roofs drop limbs onto corners and scrape courses. The puncture is obvious. The question is whether water has been in the sheathing since the last storm or since the last three. A dry cavity is a panel repair. A stained, soft cavity is a bigger opening and, if sheathing has to be replaced, the Paulding structural permit. Hiram is in that county. We do not close soft sheathing and hope. Photos first. [Storm damage roof repair in Hiram](/storm-damage-roof-repair-hiram/) is the page when the limb also opened the roof.',
        },
        {
          h: 'What “a section will do” means on the estimate',
          p: 'You should be able to read three options when they are real: swap the broken panels, reside one elevation, or open more because the cavity is wet past the damage you can see. We do not pad the quiet elevations to make the loud one cheaper per square. Access and stories change labor. None of those numbers are published here, because the cavity decides them. Call (470) 236-1410 or use the form. The crew is the Dallas shop, family-owned since 2019.',
        },
      ],
      faq: [
        { q: 'Can you tell from the street if my Hiram house is vinyl or fiber-cement?', a: 'No, and we will not order from a drive-by. Profiles imitate each other. We look at an edge and a fastener before we name the product.' },
        { q: 'A limb hit one corner. Do you reside the house?', a: 'Not if the cavity is dry. The corner gets repaired. If the sheathing is soft, the opening grows and, when sheathing is replaced, Paulding’s structural permit applies. You see that photo before the scope grows.' },
        { q: 'Will a patch disappear?', a: 'On current, stocked material, often close. On discontinued vinyl, we show you the nearest match in daylight and you decide whether the patch is acceptable.' },
        { q: 'Are you a siding-only crew that does not roof?', a: 'No. Same Dallas crew that does [roof repair in Hiram](/service-areas/hiram/#roof-repair). The wall and the roof edge get one conversation.' },
      ],
      related: [
        { href: '/exterior-painting-hiram/', label: 'Exterior painting in Hiram' },
        { href: '/service-areas/hiram/#roof-repair', label: 'Roof repair' },
        { href: '/roof-replacement-hiram/', label: 'Roof replacement' },
        { href: '/storm-damage-roof-repair-hiram/', label: 'Storm damage' },
        { href: '/services/siding/', label: 'Siding hub' },
      ],
    },
    douglasville: {
      title: 'Douglasville Siding Repair | iRoofer',
      description: 'Many Douglasville houses mix brick and vinyl. We flash where new panels meet the roof so the patch does not become the leak. Open sheathing is a county filing.',
      h1: 'Siding Repair & Replacement in Douglasville, GA',
      eyebrow: 'Douglasville, GA',
      cityName: 'Douglasville',
      hubHref: '/services/siding/',
      hubLabel: 'Siding',
      formId: 'siding-douglasville-quote',
      formSource: 'Siding Repair & Replacement Douglasville',
      intro: 'Many Douglasville houses mix brick and vinyl. We match the remaining material as closely as today’s products allow, and we flash the joints where siding meets the roof so a new panel does not create a new leak.',
      sections: [
        {
          h: 'Brick on the front, vinyl on the sides, and a joint that leaks',
          p: 'The leak on these houses is often the vertical joint where vinyl dies into brick, or the sloped joint where a panel runs under a roof edge. Caulk smeared in that joint is a one-season fix. We pull the panel, look for step flashing or the lack of it, and rebuild the joint so water sheds onto the outside of the wall. Matching the vinyl comes second. A perfect color match over a joint with no flashing is a leak with a new skin.',
        },
        {
          h: 'Red clay at the bottom course',
          p: 'Splash from red-clay beds stains and holds moisture on the lowest courses. That is a Douglasville pattern we plan for. We do not reside an entire elevation because the bottom two courses are chalked with clay. We check whether those courses are soft. Soft means they come off and the sheathing behind them is inspected. Stained-but-solid means a wash and a decision about whether you want them replaced for looks. Those are different lines on the scope.',
        },
        {
          h: 'Opening sheathing is a Douglas County filing',
          p: 'Building permits: 770-920-7201. Inspection requests: 770-920-7333. The online path the county uses is buildingdepartment.com. A panel on sound sheathing does not start that process. The day we cut out rotten sheathing, it does. We stop with the wall open, show you, and file before new panels cover the repair. Wind off the ridge that creased the roof can be the same storm that cracked a corner. If the roof is open too, it is quoted on [roof repair in Douglasville](/service-areas/douglasville/#roof-repair), not folded into “siding labor” with no photo.',
        },
      ],
      faq: [
        { q: 'Can you patch vinyl where it meets the brick without replacing the front?', a: 'Yes. The front brick stays. The joint gets flashing, not a bead of caulk as the only water plan. The vinyl match is as close as current stock allows, and we show you before we order.' },
        { q: 'The bottom courses are stained red. Is the wall rotten?', a: 'Not from the stain alone. Clay splash stains sound panels. We probe the bottom courses. Soft panels come off. Stained solid ones are your choice.' },
        { q: 'Who permits a sheathing repair in Douglasville?', a: 'Douglas County. 770-920-7201 for building permits, 770-920-7333 for inspections, filing through buildingdepartment.com. We open that process when sheathing is replaced, not when a sound panel is re-fastened.' },
        { q: 'Do you give a per-square price online?', a: 'No. Brick-to-vinyl joints and soft sheathing change the day. Written price after we open what we need to see. (470) 236-1410.' },
      ],
      related: [
        { href: '/exterior-painting-douglasville/', label: 'Exterior painting in Douglasville' },
        { href: '/service-areas/douglasville/#roof-repair', label: 'Roof repair' },
        { href: '/roof-replacement-douglasville/', label: 'Roof replacement' },
        { href: '/services/siding/', label: 'Siding hub' },
      ],
    },
    'powder-springs': {
      title: 'Powder Springs Siding Repair | iRoofer',
      description: 'Powder Springs ranches and steep two-stories need different ladder plans at the roof. Soft sheathing is when we ask the city, not a loose corner.',
      h1: 'Siding Repair & Replacement in Powder Springs, GA',
      eyebrow: 'Powder Springs, GA',
      cityName: 'Powder Springs',
      hubHref: '/services/siding/',
      hubLabel: 'Siding',
      formId: 'siding-powder-springs-quote',
      formSource: 'Siding Repair & Replacement Powder Springs',
      intro: 'Powder Springs has everything from single-slope ranches to steep two-stories. Access, ladder placement, and how the siding meets a steep roof all change the plan. We write that down before we order the first panel.',
      sections: [
        {
          h: 'The roof slope decides whether the top course is a ladder job',
          p: 'On a single-slope ranch the top of the wall is a straightforward setup. On a steep two-story the top course tucks under a roof that we will not walk casually, and the panel has to be cut to a kick-out that actually kicks water past the wall. Those are different days. We write the access and the flashing detail before we talk about color. A price that ignores the slope is a price that changes when the truck arrives. You get the slope in the scope.',
        },
        {
          h: 'City hall, not the Cobb counter, if the wall has to be permitted',
          p: 'Powder Springs issues its own building permits for work inside the city. The published contractor requirements for permitted work are a state license, a local business license, and a code compliance bond. The city puts that in its roofing guide at powderspringsga.gov/618. Use it as the contractor standard, then apply it to the wall in front of us. A loose corner on dry sheathing is a repair and we do not dress it up as a permitted project. Sheathing that has to be replaced is when we call the city and meet those requirements before the wall is closed. We do not assume the roofing guide’s product notes are a siding specification.',
        },
        {
          h: 'One elevation can be enough',
          p: 'West walls take the weather. North walls under trees grow film and stay tight. We do not write four elevations because one failed. Photos of the sound walls stay in the file so you can see what we left alone. If the failure started at the roof, the link is [roof repair in Powder Springs](/service-areas/powder-springs/#roof-repair). Panels are ordered after you approve the written scope. Nothing on this page is a standing price.',
        },
      ],
      faq: [
        { q: 'Why does the house shape change a siding bid in Powder Springs?', a: 'A ranch with one slope and a steep two-story do not share a setup. The top course on a steep roof needs a real kick-out, and the ladders are a different plan. Both go in the scope before material is ordered.' },
        { q: 'Does a cracked panel need a city permit?', a: 'A repair on sound sheathing is not the permitted building work the city describes. Replacing sheathing is when we talk to Powder Springs and follow the contractor requirements they publish: state license, local business license, code compliance bond. powderspringsga.gov/618 is their page.' },
        { q: 'Will you reside all four sides if one side is bad?', a: 'Only if you want that, or if the other sides are actually failed. We photograph what we leave. The west wall can be the whole job.' },
        { q: 'Same crew as the roof work?', a: 'Yes. Dallas shop, family-owned since 2019, working Powder Springs as part of the regular area. (470) 236-1410.' },
      ],
      related: [
        { href: '/exterior-painting-powder-springs/', label: 'Exterior painting in Powder Springs' },
        { href: '/service-areas/powder-springs/#roof-repair', label: 'Roof repair' },
        { href: '/roof-replacement-powder-springs/', label: 'Roof replacement' },
        { href: '/services/siding/', label: 'Siding hub' },
      ],
    },
    marietta: {
      title: 'Marietta Siding Repair | iRoofer',
      description: 'Marietta siding follows tax district (4) or Cobb (9). Historic districts need a Certificate of Appropriateness for material and profile before we order.',
      h1: 'Siding Repair & Replacement in Marietta, GA',
      eyebrow: 'Marietta, GA',
      cityName: 'Marietta',
      hubHref: '/services/siding/',
      hubLabel: 'Siding',
      formId: 'siding-marietta-quote',
      formSource: 'Siding Repair & Replacement Marietta',
      intro: 'Marietta’s mix of older in-town homes and newer builds means the siding scope changes house to house. We repair or replace siding, and we pay attention to profiles on older walls that a production crew would cover with whatever is on the truck.',
      sections: [
        {
          h: 'Confirm the tax district before a panel is ordered',
          p: 'City of Marietta and Cobb County are not the same permit. The split is the tax district on the qPublic parcel: (4) MARIETTA is the city, (9) UNINCORPORATED is Cobb. Siding that stays a repair on sound sheathing is a different conversation from siding that replaces sheathing. We confirm the district before we order a house-lot of material for a job that may have to wait on a permit. The city describes the lookup at mariettaga.gov/1595. Guessing from the street name is how a dumpster shows up on a lot that was not ready.',
        },
        {
          h: 'Historic districts care about profile, not just color',
          p: 'Article 7-9, Historic Preservation, requires a Certificate of Appropriateness before exterior changes in a designated district. For siding, the change is often the profile and the material, not a paint chip. Covering period wood with a random lap because it was in stock is the mistake. If the house is in a district, the certificate is resolved before material lands. The Square and the historic corridors are where this comes up. East Cobb along Roswell Road and Powers Ferry is more often an HOA material note than a preservation board. Whitlock, west Marietta, and the Kennesaw Mountain side get looked up, not assumed. Our [Marietta roof replacement page](/roof-replacement-marietta/) already walks the permit split for roofs. This page is the wall version, and it is not the same scope.',
        },
        {
          h: 'In-town lots need a dumpster plan',
          p: 'Older streets near the Square do not have a side yard for a roll-off and a scaffold. We plan the drop, the daily cleanup, and how pedestrians get past the ladder before the first course comes off. That planning is part of the written scope. Roof-to-wall joints on these cut-up houses are where water gets behind panels. We open that joint rather than face-nail a new course over it. [Roof repair in Marietta](/service-areas/marietta/#roof-repair) is linked when the joint, not the panel, is the leak.',
        },
      ],
      faq: [
        { q: 'Which office permits a Marietta re-side?', a: 'Whichever the tax district names. (4) MARIETTA is the city. (9) UNINCORPORATED is Cobb County. We look it up. mariettaga.gov/1595 explains the split. Structural sheathing replacement is when the permit is real. A patch on sound sheathing is not automatically the same filing.' },
        { q: 'What does historic review ask for on siding?', a: 'A Certificate of Appropriateness under Article 7-9 before the exterior changes. Profile and material are the usual questions, not a color card. The certificate is done before we order panels for a house inside the district.' },
        { q: 'Can you get a dumpster onto a lot near the Square?', a: 'Sometimes, with a plan. Sometimes the debris leaves daily because a roll-off will not fit. We write which one before we start, so the neighbors are not the ones who discover it.' },
        { q: 'Will you cover old wood with whatever lap is cheapest?', a: 'No. On older in-town walls the profile matters, and in a historic district it may be regulated. You see the proposed material before it is ordered. No price is published on this page.' },
      ],
      related: [
        { href: '/exterior-painting-marietta/', label: 'Exterior painting in Marietta' },
        { href: '/service-areas/marietta/#roof-repair', label: 'Roof repair' },
        { href: '/roof-replacement-marietta/', label: 'Roof replacement' },
        { href: '/services/siding/', label: 'Siding hub' },
      ],
    },
    kennesaw: {
      title: 'Kennesaw Siding Repair | iRoofer',
      description: 'Kennesaw storms leave brittle vinyl, loose J-channel, and stained sheathing. Permits are online only. A historic certificate comes before the application.',
      h1: 'Siding Repair & Replacement in Kennesaw, GA',
      eyebrow: 'Kennesaw, GA',
      cityName: 'Kennesaw',
      hubHref: '/services/siding/',
      hubLabel: 'Siding',
      formId: 'siding-kennesaw-quote',
      formSource: 'Siding Repair & Replacement Kennesaw',
      intro: 'North Cobb storms and everyday UV show up on Kennesaw walls as brittle vinyl, loose J-channel, and stained sheathing where water sat. We document what we find so you can choose a repair or a larger replacement with the cavity in the photos.',
      sections: [
        {
          h: 'J-channel and the starter, not a smear of caulk',
          p: 'Vinyl that has gone brittle cracks beside the window and at the corner post first. The J-channel lets go, and people caulk the gap. The next wind opens the caulk and water runs the sheathing. We replace the channel and the cracked courses, and we look at the starter strip along the bottom. A stained sheathing patch tells us the leak is older than the last storm. That stain is photographed and measured. Dry sheathing around a fresh crack is a repair. Soft sheathing is a replacement of that area, written separately so you are not buying a whole house to fix a window return.',
        },
        {
          h: 'Online permits, and the certificate has to come first',
          p: 'Kennesaw Building Services accepts permit applications online only. Phone 770-429-4554. Email permits@kennesaw-ga.gov. The building page is kennesaw-ga.gov/buildingservices. In a historic district the Certificate of Appropriateness has to be approved before the building-permit application is submitted. For siding, that certificate is about replacing material and profile on a designated house. A re-nailed corner outside the district is not that stack of paper. A wall that needs sheathing, on a house inside the district, is. We check the district before we promise a start date. Promising Tuesday and discovering the certificate on Monday is how schedules slip.',
        },
        {
          h: 'What the photos are for',
          p: 'You get pictures of the brittle panels, the loose channel, and the sheathing. The scope names repair versus a larger replacement in those words. We do not leave it as “siding work.” If the stain lines up with a roof edge, [roof repair in Kennesaw](/service-areas/kennesaw/#roof-repair) is quoted beside the wall, not instead of an honest look. The crew is based in Dallas, family-owned since 2019. Kennesaw is regular north Cobb work. No range is published. The cavity and the height set the number.',
        },
      ],
      faq: [
        { q: 'Can you just caulk the J-channel?', a: 'No. Caulk over a loose channel opens again. We replace the channel and the cracked vinyl, then look at the sheathing behind it.' },
        { q: 'How do Kennesaw siding permits actually get filed?', a: 'Online only, through city Building Services. 770-429-4554, permits@kennesaw-ga.gov. If the house is in a historic district, the Certificate of Appropriateness is approved before that application. We do not file out of order.' },
        { q: 'Brittle vinyl on one wall. Do the other walls have to go?', a: 'Not unless they are brittle too, or you want them replaced. We photo the walls we are leaving so the scope is obvious.' },
        { q: 'Is stained sheathing an automatic full re-side?', a: 'No. The stain tells us where water sat. We replace what is soft and flash the source. The rest of a dry wall can stay. You approve that line before we order.' },
      ],
      related: [
        { href: '/exterior-painting-kennesaw/', label: 'Exterior painting in Kennesaw' },
        { href: '/service-areas/kennesaw/#roof-repair', label: 'Roof repair' },
        { href: '/roof-replacement-kennesaw/', label: 'Roof replacement' },
        { href: '/services/siding/', label: 'Siding hub' },
      ],
    },
    acworth: {
      title: 'Acworth Siding Repair | iRoofer',
      description: 'Wind near Lake Allatoona lifts Acworth siding corners and drives rain behind them. We fasten and flash. The shingle-repair exclusion is not a pass to reside.',
      h1: 'Siding Repair & Replacement in Acworth, GA',
      eyebrow: 'Acworth, GA',
      cityName: 'Acworth',
      hubHref: '/services/siding/',
      hubLabel: 'Siding',
      formId: 'siding-acworth-quote',
      formSource: 'Siding Repair & Replacement Acworth',
      intro: 'Acworth lakefront and in-town homes both see wind and moisture that work on siding fasteners and seams. We repair and replace siding, and we check the roof edge where water often starts.',
      sections: [
        {
          h: 'Wind off the lake lifts corners. Caulk will not hold them',
          p: 'On houses nearer Lake Allatoona, a gust gets under a corner that has already cupped and peels a course back. Rain then runs behind the panel and down the sheathing. The repair is mechanical: fasten the field, replace the corner assembly, and flash the edge so the next gust has nothing to grab. A bead of caulk over the gap looks closed until the next front. We do not sell that bead as the repair. In-town Acworth houses see the same wind with less lake humidity. The cupped corner is still a fastening problem, not a washing problem.',
        },
        {
          h: 'The shingle exclusion does not cover a re-side',
          p: 'Acworth excludes ordinary repairs from permits and gives replacing shingles as the example. Changing the roof’s design still needs a permit. Work that needed a permit and did not get one is penalized at 100% of the fee, Sec. 18-56(g)(2). A siding contractor who tells you “Acworth doesn’t permit repairs, so we can take the walls off” is reading the shingle example as a blank check. We will not. Corner repairs on sound sheathing stay repairs. Taking a wall down, changing the material, or replacing sheathing is when we ask the building department first. The penalty is real. We would rather ask than hand it to you.',
        },
        {
          h: 'Humidity behind a loose panel',
          p: 'Lake air keeps a shaded wall damp. Once a seam is open, that damp sits on the sheathing longer than it would on an open, sunny lot. We look in the cavity on the loose corner instead of face-screwing the panel shut. Dry wood gets closed correctly. Soft wood gets replaced and flashed, and the permit question above gets answered first. If the water is really from the roof edge, see [roof repair in Acworth](/service-areas/acworth/#roof-repair). The written scope separates the wall from the roof so you can approve either.',
        },
      ],
      faq: [
        { q: 'Will caulk keep a wind-lifted Acworth corner closed?', a: 'Not for long. We re-fasten, replace the corner piece if it is stretched, and flash the edge. Caulk is not the repair.' },
        { q: 'Does the city’s ordinary-repair rule let you reside without asking?', a: 'No. The published example is shingle replacement. We do not apply it to taking walls off. Sheathing replacement or a material change starts with a question to the building department. Unpermitted work that required a permit costs 100% of the fee under Sec. 18-56(g)(2).' },
        { q: 'Do lakefront and in-town houses get the same scope?', a: 'The crew is the same. The diagnosis is not. Lake humidity behind an open seam is a cavity check. A sunny in-town corner may only need fastening. Both are written down.' },
        { q: 'Can you repair siding and the roof edge together?', a: 'Yes. They are separate lines. Water from the roof is not hidden inside a siding total. (470) 236-1410.' },
      ],
      related: [
        { href: '/exterior-painting-acworth/', label: 'Exterior painting in Acworth' },
        { href: '/service-areas/acworth/#roof-repair', label: 'Roof repair' },
        { href: '/roof-replacement-acworth/', label: 'Roof replacement' },
        { href: '/services/siding/', label: 'Siding hub' },
      ],
    },
    austell: {
      title: 'Austell Siding Repair | iRoofer',
      description: 'Austell lots are tight, so siding debris leaves on a plan and fasteners get swept. Cobb Chapter 58 comes up before a wall is replaced on a floodplain parcel.',
      h1: 'Siding Repair & Replacement in Austell, GA',
      eyebrow: 'Austell, GA',
      cityName: 'Austell',
      hubHref: '/services/siding/',
      hubLabel: 'Siding',
      formId: 'siding-austell-quote',
      formSource: 'Siding Repair & Replacement Austell',
      intro: 'Austell lots can be tighter, so we plan material staging and daily cleanup the same way we do on our roof jobs: magnets for fasteners, hauling debris, and leaving the yard walkable.',
      sections: [
        {
          h: 'Staging on a lot that has no side yard',
          p: 'Panels, a saw, and a dump trailer have to fit without blocking the drive or the neighbor’s walk. We decide that before the material order, not when the truck is in the street. Debris goes the day it comes off the wall. Fasteners get a magnet pass. Those are the same habits as our roof days, applied to a wall, because a siding crew that leaves nails in a small yard is the thing people remember. The written scope includes where material sits. If it will not fit, we stage smaller loads. We do not pretend every Austell lot can take a roll-off.',
        },
        {
          h: 'Floodplain rules, without pretending we rebuilt the 2009 houses',
          p: 'Cobb County’s floodplain rules are Chapter 58, Article 2. The September 2009 flood is why lower ground in this part of the county is not an abstract map. We do not claim iRoofer repaired a list of those houses. We also do not decide on our own that replacing siding is, or is not, a substantial improvement under the floodplain rules. If the parcel is in the floodplain and the scope is more than a patch on sound sheathing, we say so before panels are ordered and we follow what the county requires. A new skin on a wall is not a flood-insurance product and we will not describe it as one.',
        },
        {
          h: 'Bottom courses and splash, separate from a full re-side',
          p: 'Lower lots splash the bottom courses. We probe them. Soft courses come off and the sheathing behind them is photographed. Solid stained courses can stay. That choice is yours once you can see the wood. Roof water that is running behind the panels is quoted as [roof repair in Austell](/service-areas/austell/#roof-repair), not as extra siding squares. Family-owned in Dallas since 2019. No published price. The cavity, the lot, and the floodplain question are what move the number. Call (470) 236-1410.',
        },
      ],
      faq: [
        { q: 'How do you handle debris on a tight Austell lot?', a: 'We plan the stack before we order. Debris leaves the day it comes off. Fasteners get a magnet sweep. If a roll-off will not fit, we do not force one into the drive.' },
        { q: 'Does new siding put me in compliance with Cobb’s floodplain rules?', a: 'Not by itself. Chapter 58, Article 2 is the county’s floodplain regulation. We will not call a re-side mitigation, and we will not decide for you that a replacement is or is not a substantial improvement. On a mapped parcel, that question is raised before panels are ordered. We do not claim we repaired specific houses from the September 2009 flood.' },
        { q: 'The bottom row is stained. Do all four walls come off?', a: 'No. We probe the stained courses. Soft ones are replaced and the sheathing is shown to you. Solid ones can stay. The other elevations are not automatic.' },
        { q: 'Can painting and siding be written together?', a: 'Yes, as separate scopes, so you can approve the wall repair without buying a coat, or the reverse. [Exterior painting in Austell](/exterior-painting-austell/) is the finish page. This one is the wall.' },
      ],
      related: [
        { href: '/exterior-painting-austell/', label: 'Exterior painting in Austell' },
        { href: '/service-areas/austell/#roof-repair', label: 'Roof repair' },
        { href: '/roof-replacement-austell/', label: 'Roof replacement' },
        { href: '/services/siding/', label: 'Siding hub' },
      ],
    },
  },
};
