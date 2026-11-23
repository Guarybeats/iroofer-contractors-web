// Nov 2026 dedupe + depth pass for the service × city pages.
//
// These entries are merged into localCopy at the bottom of localCopy.js:
//   intro    replaces the page intro (puts the page's main phrase up top, in plain words)
//   rename   { 'old H2': 'new H2' } renames an existing section heading
//   at       index where `sections` are inserted (default: end). Varies section order by city.
//   sections new body sections, same shape as localCopy sections
//   faq      extra FAQ entries appended
//   faqEdit  { 'question': 'new answer' } rewrites an existing answer
//
// Same rules as localCopy.js: written for one service in one city, verifiable facts only,
// no prices, warranty terms, licensing claims, customer names or street addresses.
//
// SOURCES for facts introduced here (checked 2026-11-23)
//   Housing age, owner-occupancy, housing units: U.S. Census Bureau ACS 2020-2024 5-year,
//     tables B25035 (median year structure built), B25003 (tenure), B25001 (housing units),
//     read via Census Reporter (censusreporter.org) for each city's census place.
//   Rainfall: NOAA NCEI 1991-2020 climate normals, Atlanta Hartsfield (USW00013874):
//     50.43 in/yr; wettest month July 4.75 in, March 4.68 in; driest October 3.28 in.
//   Runoff math: 1 in of rain on 1,000 sq ft of roof footprint = about 623 gallons
//     (Rutgers Cooperative Extension FS1162; same 0.623 factor used by USGS).
//   Georgia code: DCA "Georgia State Minimum Standard Codes, January 1, 2026": IRC 2024 with
//     2026 Georgia amendments for one- and two-family homes; energy code is IECC 2015 with
//     Georgia amendments.
//   Acworth: acworth-ga.gov ("The Lake City" on Lake Acworth and Lake Allatoona; 10,000+ acres
//     of Corps of Engineers land around the lakes; Lake Acworth 260 acres).
//   Kennesaw Mountain National Battlefield Park: nps.gov/kemo (2,965 acres, Cobb County,
//     about three miles west of Marietta).
//   Silver Comet Trail: powderspringsga.gov/575 (runs through the City of Powder Springs);
//     paulding.gov/1028 (runs west through Cobb, Paulding and Polk counties).

export const additions = {};

// ─────────────────────────────────────────────────────────────── NEW CONSTRUCTION
additions['new-construction'] = {
  acworth: {
    intro: "Good new construction roofing in Acworth starts with the lot, not the plan set. A wooded Acworth lot hands the finished house shade, leaf drop and big limbs that are not going anywhere, and the roof should be drawn for that from day one. We are a roofing contractor in Acworth, GA for builders and for owners running their own build.",
    rename: { 'Design for the lot you are actually building on': 'New construction roofing in Acworth: plan for the trees you keep' },
    at: 1,
    sections: [
      { h: "Lake City lots keep their trees",
        p: "Acworth calls itself the Lake City because it sits on Lake Acworth and Lake Allatoona, and the city notes that residents have more than 10,000 acres of Corps of Engineers land around those lakes. If your lot backs up to that kind of protected woods, nobody is ever going to thin the canopy for you. So we flip the usual order. We look at where the big hardwoods and pines stand, mark which roof planes will sit in shade most of the day, and then talk about pitch, valley placement and gutter size.",
        blocks: [
          "A simple gable that sheds toward open yard is easier to live with than a cut-up roof that funnels needles into three valleys. That is a drawing change, and it costs nothing if we see the plans early." ] },
      { h: "Building next to a 2000s subdivision",
        p: "Acworth's homes are young. Census figures for 2020 to 2024 put the median year built at 2000, so half the houses in town went up that year or later. A lot of infill lands right beside them. If your build sits inside an HOA, get its approved shingle and color list before anything is ordered, because the review board will hold the new house to the same rules as the neighbors. We will price the line the HOA allows, not a cheaper line you would have to swap out." },
      { h: "The code your new Acworth roof gets inspected to",
        p: "Since January 1, 2026, Georgia's minimum code for new one- and two-family homes is the 2024 International Residential Code with the state's 2026 amendments, and Acworth's Development Department enforces it on every new house in the city. For the roof that covers underlayment, flashing, drip edge, fastening and attic ventilation. We build to the shingle maker's instructions on top of that, since the manufacturer's coverage depends on it." },
    ],
    faq: [
      { q: "What code is a new Acworth house built to?", a: "The Georgia minimum standard for homes, which since January 1, 2026 is the 2024 International Residential Code with Georgia's 2026 amendments. The City of Acworth inspects new construction against it." },
      { q: "Can you work around an HOA's shingle rules?", a: "We can, and it helps to start there. Send us the approved list and we will spec and price from it so the roof passes review the first time." },
    ],
  },

  austell: {
    intro: "New construction roofing in Austell has to account for where the water goes after it leaves the roof. In this corner of south Cobb, that matters as much as the shingle. iRoofer Contractors is a roofer in Austell for builders and owners, and we plan the roof, the gutters and the discharge points as one job.",
    rename: { 'Roof, gutters and site drainage as one system': 'New construction roofing in Austell, from ridge to downspout' },
    at: 2,
    sections: [
      { h: "How much water a new Austell roof sheds",
        p: "Metro Atlanta's long-term average is about 50 inches of rain a year, going by NOAA's 1991 to 2020 normals for the airport station. Every inch that lands on 1,000 square feet of roof is roughly 623 gallons. Put a 2,000 square foot footprint under a two-inch summer storm and you are moving close to 2,500 gallons off the house in an afternoon. That is why we size gutters and pick downspout spots on paper, before the grading crew finishes the yard.",
        blocks: [
          { title: "What we settle before the roof goes on", items: [
            "How many downspouts each run needs, based on the roof area that feeds it.",
            "Where each one empties, and that the grade carries the water away from the slab.",
            "Whether a valley is dumping onto a walkway or a door, and how to fix that on the drawing." ] },
        ] },
      { h: "Austell's older streets and new infill",
        p: "Austell's housing runs older than most of our area. The Census median year built is 1993, which means a new house here often goes up next to roofs that are thirty years old or more. When we build infill on an older street we look at how the neighbors' runoff reaches your lot, too. A new house that sits lower than the lot next door may need a swale or a bigger gutter on that side, and that is far easier to plan than to fix." },
    ],
    faq: [
      { q: "How big should the gutters be on a new Austell house?", a: "It depends on the roof area feeding each run and the pitch. We work it out from the plans and add downspouts where one would be carrying too much, instead of defaulting to whatever is cheapest." },
    ],
  },

  douglasville: {
    intro: "New construction roofing in Douglasville gets tested in its first spring, when the straight-line wind and hard rain come through Douglas County. The details that carry a new roof through that are decided at framing. We are the roofing contractor in Douglasville, GA that builders call when they want those details done right the first time.",
    rename: { 'Specify for the weather this county actually gets': 'New construction roofing in Douglasville, built for spring wind' },
    sections: [
      { h: "Douglasville's housing mix and what it means for a builder",
        p: "About half of Douglasville's homes were built in 2001 or later, based on the Census 2020 to 2024 estimates, and a little under half are owner-occupied. A lot of new work here is spec homes and rentals, where the buyer never meets the roofer. We build those the same way we build a custom house, because the next owner lives with whatever got skipped. Starter strip on the rakes, correct nail line, sealed drip edge and kick-out flashing are standard on every house, not upgrades." },
      { h: "Attic ventilation on a Douglasville build",
        p: "A Georgia attic in July is brutal on shingles if the air does not move. On new construction we balance the intake at the soffits with the exhaust at the ridge before the decking goes on, and we check that insulation will not block the soffit vents once it is blown in. Getting that wrong does not leak on day one. It shows up years later as curled shingles on the south slope and a hot upstairs, and by then it is a remodel to fix.",
        blocks: [ "If the plans call for a bonus room over the garage, we flag it early. Those rooms often end up with no clear path for air above them, and they are the hardest spot in the house to vent after the fact." ] },
      { h: "Working with your schedule, not ours",
        p: "Builders in Douglas County juggle framing crews, inspectors and weather. Tell us the framing inspection date and we will plan the dry-in around it. If a storm week is coming we would rather get underlayment on and the house closed up than chase a perfect finish day." },
    ],
    faq: [
      { q: "Do you ventilate bonus rooms on new builds?", a: "Yes, and we want to see the plan before framing if we can. A room over the garage needs its own path for air, and it is far easier to build in than to add later." },
    ],
  },

  'powder-springs': {
    intro: "New construction roofing in Powder Springs runs through the city's own permit office, not Cobb County, and the city asks more of each trade than many builders expect. As a roofer in Powder Springs for builders and owners, we plan our part of the job around that sequence so the roof is ready when the framing inspection clears.",
    rename: { 'Designing the roof into the house': 'New construction roofing in Powder Springs: designing it in' },
    at: 1,
    sections: [
      { h: "A town of owners, building for the long haul",
        p: "Powder Springs has the highest share of owner-occupied homes in our area. The Census 2020 to 2024 estimate puts it at about 82 percent, and the median home was built in 1996. That tells us something about who builds here. Most new houses are going to be lived in by the people paying for them, for a long time. So we steer toward choices that make the roof easier to own: fewer valleys, a ridge vent that actually has soffit intake to work with, and step flashing you never have to think about again." },
      { h: "Near the Silver Comet, and other open ground",
        p: "The Silver Comet Trail runs right through Powder Springs, and the city has built its own trail network to connect neighborhoods to it. Lots along open corridors and cleared land catch more wind than a lot tucked in the trees. On a build like that we use the shingle maker's high-wind nailing and make sure the starter course at the rakes is there and sealed, because the roof edge is where wind gets its first grip." },
    ],
    faq: [
      { q: "Does an open lot need a different roof?", a: "Not a different roof, but the nailing and edge details matter more. We use the high-wind pattern the shingle maker calls for and make sure the rake starter is sealed." },
    ],
  },

  marietta: {
    intro: "New construction roofing in Marietta is rarely a blank field. It is usually infill, a teardown and rebuild, or an addition on a street that already has its own look, and often inside a jurisdiction that cares how the new roof will fit in. We are the roofing contractor in Marietta that slows down on the spec so the house belongs on the street.",
    rename: { 'Building new on an established street': 'New construction roofing in Marietta on an established street' },
    at: 0,
    sections: [
      { h: "Old neighbors, new house",
        p: "Marietta's homes are older than most of the county. The Census median year built for the city is 1987, and the historic districts are older still. A new house next to them is going to be compared to them every day. We bring sample boards out to the lot and hold them up against the houses on either side, in daylight, before color is locked in." },
      { h: "Rebuilds after a teardown",
        p: "When an older house comes down and a larger one goes up in its place, the roof usually gets taller and more complicated. More height means more wind exposure, and more ridges and valleys means more places for water to find. We look at whether a couple of those features can be simplified without hurting the design. Where they stay, we treat each valley and wall line as a spot that needs proper metal, not caulk.",
        blocks: [ "Near Kennesaw Mountain National Battlefield Park, which the Park Service puts about three miles west of Marietta, some lots back up to heavy woods. We plan those roofs around shade the same way we would in a wooded subdivision." ] },
    ],
    faq: [
      { q: "Can you help pick a shingle that fits an older street?", a: "Yes, we bring sample boards to the lot and compare them with the neighboring houses in daylight. It is a lot easier to choose well before the order goes in." },
    ],
  },

  kennesaw: {
    intro: "We handle new construction roofing in Kennesaw for home builders and for owners building their own place, on a written scope and a dry-in date we commit to. If you are looking for a roofer in Kennesaw who will show up the week the deck is ready, that is the job we do.",
    rename: { 'Built to manufacturer spec': 'New construction roofing in Kennesaw, built to the shingle maker\u2019s spec' },
    at: 1,
    sections: [
      { h: "What goes on a new Kennesaw roof, in order",
        p: "People ask what they are paying for on a new roof, so here is the order we install in. Each step has a reason, and skipping one is how a new house ends up with a leak in its first year.",
        blocks: [
          { ordered: true, items: [
            "Deck check after the framers leave. Loose or damaged sheets get fixed before anything covers them.",
            "Drip edge at the eaves, then underlayment, then drip edge up the rakes so water always runs over the joint.",
            "Leak barrier in the valleys and around every pipe, vent and chimney chase.",
            "Starter strip at eaves and rakes, so the first row of shingles is sealed at the edge.",
            "Shingles nailed on the maker's nail line, with step flashing woven in at every wall.",
            "Kick-out flashing where a roof edge dies into a wall, so water is pushed into the gutter instead of down the siding.",
            "Ridge vent, cut to match the soffit intake so the attic actually breathes.",
            "Magnetic nail sweep of the lot before we leave, because other trades and the owner walk that dirt next." ] },
        ] },
      { h: "Kennesaw's building boom and the roofs it left",
        p: "Kennesaw's median home was built in 1998 according to the Census 2020 to 2024 estimates, and roughly 65 percent of homes are owner-occupied. A big share of the roofs we repair here came from fast production building in the late 1990s and 2000s. The trouble spots repeat: missing kick-out flashing, ridge vents with no real soffit intake, and pipe boots that cracked early. We build new houses so the next roofer who walks that roof in twenty years finds none of that." },
      { h: "Working near the mountain",
        p: "Kennesaw Mountain National Battlefield Park covers close to 3,000 acres on the edge of town, and plenty of lots near it carry mature hardwoods. If yours does, we will talk about algae-resistant shingles on the shaded side and extra valley protection under the trees." },
    ],
    faq: [
      { q: "What is kick-out flashing?", a: "A small bent piece of metal at the bottom of a roof edge that runs into a wall. It turns water into the gutter instead of letting it run down behind the siding. It is cheap, it is easy to forget, and leaving it out causes some of the worst hidden rot we see." },
      { q: "Do you clean up the lot after a new roof?", a: "Yes, we run a magnetic nail sweep across the lot and driveway before we leave so the next crew and the owners are not picking roofing nails out of tires." },
    ],
  },

  hiram: {
    intro: "Hiram infill and small builder projects are where one roofer runs the whole job instead of a national outfit sending whoever is free. That is what we are set up for. Our new construction roofing in Hiram covers two-house infill, ten-house phases and owner builds, worked from our shop a few minutes away in Dallas.",
    rename: { 'Small builders, short chains': 'New construction roofing in Hiram for small builders' },
    at: 2,
    sections: [
      { h: "Hiram's newest-in-the-area housing",
        p: "Hiram has the youngest housing in our service area. The Census 2020 to 2024 median year built is 2004, and the city has only about 2,000 homes in total, so a single new phase can change a whole street. Builders here usually want the new houses to sit well next to subdivisions from the early 2000s, and buyers want the roofs to match. We keep a written record of every shingle line and color we install on a project so phase two looks like phase one." },
      { h: "Permits and inspections in Paulding County",
        p: "New homes in Hiram are inspected through Paulding County, and the roof is checked as part of that sequence. Since January 1, 2026, the state's minimum code for new homes has been the 2024 International Residential Code with Georgia's amendments. Most of what that asks of a roof is what a careful crew already does. Where it differs from older habits, like how underlayment is laid or how the edges are fastened, we follow the current book." },
    ],
    faq: [
      { q: "Can you keep phase two matching phase one?", a: "Yes, we record the exact shingle maker, line and color on every house we roof in a project, so later phases match instead of looking like a different batch." },
    ],
  },
};

// ─────────────────────────────────────────────────────────────── GUTTERS
additions['gutter-repair-replacement'] = {
  'dallas-ga': {
    rename: { 'Capacity, not just condition': 'Gutter repair and replacement in Dallas, GA starts with capacity' },
    at: 2,
    sections: [
      { h: "How much rain a Dallas gutter has to carry",
        p: "NOAA's 1991 to 2020 normals for the Atlanta airport put the yearly average at about 50 inches, with July and March the wettest months at close to five inches each. On a roof, each inch over 1,000 square feet of footprint works out to roughly 623 gallons. A summer storm that drops two inches in an hour on a 1,800 square foot house is asking the gutters to move over 2,200 gallons, most of it in a few minutes. That is the test a gutter system in Paulding County has to pass, and it is why we measure instead of guessing." },
      { h: "Dallas houses from the 2000s boom",
        p: "Dallas is a young town on paper. The Census 2020 to 2024 estimate puts the median year built at 2002, so about half of the houses in the city went up in the last two decades. Many still have the gutters the builder hung, which were often sized for a sales sheet rather than for the roof behind them. As those houses pass twenty years old, we see the same set of problems again and again.",
        blocks: [
          { title: "What we find most on 2000s Dallas homes", items: [
            "Five-inch runs on big two-story roofs, with one downspout covering a whole back elevation.",
            "Spikes and ferrules that have backed out, so the run sags between fasteners.",
            "Downspouts that empty onto the driveway or right at the foundation.",
            "Fascia soft at the corners where the end caps leaked for years." ] },
          "None of those need a whole new system on their own. We will tell you which ones are a repair and which mean the run is due for replacement." ] },
    ],
    faq: [
      { q: "How often should gutters be cleaned in Dallas?", a: "Under pines, at least twice a year, once after the spring pollen and needle drop and again after the leaves are down in late fall. In open subdivisions, once a year is often enough." },
    ],
  },

  hiram: {
    rename: { 'Fall, fastening and wind': 'Gutter repair and replacement in Hiram: fall, fastening and wind' },
    at: 1,
    sections: [
      { h: "Young houses, original gutters",
        p: "Half of Hiram's homes were built in 2004 or later, going by Census estimates for 2020 to 2024. That means a lot of the gutters in town are the first set the builder hung, and they are reaching the age where hangers loosen and seams start to drip. Builder gutters were often installed fast, with spikes instead of hidden hangers and a pitch set by eye. When we look at a Hiram run, we check three things: whether it holds water, whether it is still tight to the fascia, and whether the downspout count fits the roof." },
      { h: "Repair first, if it makes sense",
        p: "Plenty of Hiram gutter calls end with a repair, not a new system. Resetting the pitch, swapping spikes for hidden hangers, resealing corners and adding a downspout can give a sound run years more life. We will tell you plainly when that is enough. When the metal is bent, the seams are failing in several places, or the run is too small for the roof, replacing it with seamless gutter formed on site is the better use of your money.",
        blocks: [ "Want a second opinion before paying for new gutters? Ask us to put a level on the run first. It takes a few minutes and settles most arguments." ] },
      { h: "Where Hiram water goes next",
        p: "Many Hiram subdivisions sit on rolling lots, so the downhill side of the house gets more than its share of runoff. We look at where each downspout empties and whether the ground carries that water away. A short extension or a splash block often does more for a damp crawlspace than any gutter change." },
    ],
  },

  douglasville: {
    rename: { 'Built for the downpour, not the drizzle': 'Gutter repair and replacement in Douglasville, sized for the downpour' },
    at: 1,
    sections: [
      { h: "The numbers behind a Douglasville downpour",
        p: "Georgia rain is not gentle. The NOAA climate normals for the Atlanta airport average about 50 inches a year, and much of it falls in short, heavy bursts. One inch on 1,000 square feet of roof is about 623 gallons, so a roof that sheds well in a drizzle can still overflow when a spring storm drops an inch in twenty minutes. We size the gutter, the outlets and the downspouts for that kind of rain, which is the rain that actually does damage." },
      { h: "Rentals, spec homes and absentee owners",
        p: "Douglasville has a large rental market. Census figures for 2020 to 2024 show a little under half of the city's homes are owner-occupied. Gutters on rental homes often go years without anyone looking at them, and by the time a tenant reports a leak the fascia is gone. If you own a rental in Douglas County, we can inspect, photograph and send you a written scope so you can decide without driving out.",
        blocks: [
          { title: "What a rental gutter check covers", items: [
            "Photos of each run, the corners and the downspout outlets.",
            "Any fascia or soffit that is soft or stained.",
            "Where each downspout empties and whether water is pooling at the foundation." ] },
        ] },
    ],
    faq: [
      { q: "Can you inspect gutters on a rental I do not live near?", a: "Yes, we inspect, take dated photos and send a written scope, so you can make the call from wherever you are." },
    ],
  },

  'powder-springs': {
    rename: { 'Low pitch changes the drainage math': 'Gutter repair and replacement in Powder Springs: low pitch changes the math' },
    at: 2,
    sections: [
      { h: "Owner-occupied homes, long-term fixes",
        p: "About 82 percent of homes in Powder Springs are lived in by their owners, according to Census estimates for 2020 to 2024, and the median house was built in 1996. People here tend to stay, so we steer them toward gutter work that holds up instead of the cheapest patch. On a house that age, the original gutters are usually near the end. The question is whether the fascia behind them is still good, and that is the first thing we check." },
      { h: "Trails, open ground and wind-blown debris",
        p: "With the Silver Comet Trail and the city's own trail network running through town, a lot of Powder Springs homes sit next to wooded strips and open corridors. Wind across open ground carries leaves and pine straw onto roofs that do not have a tree right over them. Homeowners are surprised to find their gutters full when there is no big tree in the yard. We size the outlets larger on runs that catch that debris so a few leaves do not block the whole system.",
        blocks: [ "If you want guards, we will tell you honestly which style suits a low-slope ranch roof. Some guards that work on a steep roof just sit and collect a mat of debris on a shallow one." ] },
    ],
    faq: [
      { q: "Do gutter guards work on low-slope roofs?", a: "Some do, some do not. On a shallow pitch, debris does not wash off as easily, so a guard can end up holding a wet mat on top. We will tell you which kind fits your roof, or whether you are better off without one." },
    ],
  },

  marietta: {
    rename: { 'Fixing the detail, not just the gutter': 'Gutter repair and replacement in Marietta: fix the detail first' },
    at: 2,
    sections: [
      { h: "Marietta's older housing stock",
        p: "Marietta's median house was built in 1987, according to Census estimates for 2020 to 2024, and many in-town homes are much older than that. A house that age has often been through two or three sets of gutters, each hung on the same fascia with new holes every time. When we replace gutters on an older Marietta home, we look hard at that board. If it is split, rotted or full of old fastener holes, the new gutter needs solid wood to hang on." },
      { h: "Downspouts on tight in-town lots",
        p: "In the older neighborhoods around the Square, houses sit close together and side yards can be narrow. That makes it harder to move water away from the house, and easy to send it straight onto a neighbor's lot. We plan downspout locations with that in mind: toward the front or rear where the grade falls away, with extensions that keep the water on your property and away from both foundations.",
        blocks: [
          { title: "Common fixes on in-town lots", items: [
            "Moving a downspout from a narrow side yard to a corner where the ground slopes away.",
            "Adding an extension or a buried line that carries water to the street side.",
            "Splitting one long run into two so neither end overflows." ] },
        ] },
    ],
  },

  kennesaw: {
    intro: "Gutter repair and replacement in Kennesaw is mostly about capacity: runs and downspouts sized for the roof they drain, and water taken far enough from the house. Every job comes with a written number that does not move unless you approve a change. If you need a roofer in Kennesaw who looks at the gutters and the roof edge together, that is how we work.",
    rename: { 'Sizing gutters for the roof': 'Sizing for gutter repair and replacement in Kennesaw' },
    at: 1,
    sections: [
      { h: "1990s and 2000s subdivisions",
        p: "Kennesaw's median home was built in 1998, per Census estimates for 2020 to 2024. A lot of those houses came from the same handful of production builders, and the gutters were hung to a budget. On many of them we find a single downspout serving a long back run, five-inch gutter on a steep two-story roof, and end caps sealed with caulk that has long since cracked. At twenty-five years old, those systems are due for a real look." },
      { h: "Trees near the mountain",
        p: "Neighborhoods around Kennesaw Mountain National Battlefield Park, which covers close to 3,000 acres on the edge of town, tend to have mature oaks and pines close to the house. Under that kind of cover, gutters fill fast in the fall and again with pollen and needles in the spring. We size outlets larger on those houses and talk honestly about whether guards will help or just move the cleaning job up onto the roof.",
        blocks: [ "If a big limb hangs over the gutter line, we will point it out. A falling limb can tear a run off the fascia, and trimming back from the roof edge is cheaper than a new gutter." ] },
      { h: "What a Kennesaw gutter visit includes",
        p: "We walk the full gutter line, check the pitch with a level, look at the fascia from the ladder, run water through the downspouts, and note where each one empties. You get photos and a written scope. If the gutters are fine and the problem is a clogged downspout, we will say that and clear it." },
    ],
  },

  acworth: {
    rename: { 'The honest version of the gutter guard conversation': 'Gutter repair and replacement in Acworth: the honest guard talk' },
    at: 1,
    sections: [
      { h: "Living by the lakes",
        p: "Acworth calls itself the Lake City for good reason. It sits on Lake Acworth and Lake Allatoona, and the city counts more than 10,000 acres of Corps of Engineers land around them. Homes near that much protected woodland get a heavy leaf drop every fall and a coat of pine pollen every spring. Gutters on those houses work harder than gutters in open subdivisions, and they need to be built for it.",
        blocks: [
          { title: "What we change on wooded Acworth lots", items: [
            "Six-inch gutter on the runs under the heaviest trees.",
            "Larger downspouts and outlets so a handful of leaves cannot plug the system.",
            "Hidden hangers spaced closer together to carry the weight of wet debris." ] },
        ] },
      { h: "Young houses, first-set gutters",
        p: "Half of Acworth's homes were built in 2000 or later, according to Census estimates for 2020 to 2024. Many still have their original builder gutters, and under heavy canopy those have taken a beating. Corners leak, seams have opened up, and the run has pulled away from the fascia where wet leaves sat all winter. We repair what can be repaired and replace runs that cannot, and we tell you which is which before any work starts." },
    ],
  },

  austell: {
    rename: { 'Gutters as foundation protection': 'Gutter repair and replacement in Austell protects the foundation' },
    at: 1,
    sections: [
      { h: "Older Austell homes and tired gutters",
        p: "Austell's housing runs older than most of west Cobb. The Census median year built for the city is 1993, and plenty of homes are older still. On those houses the gutters have usually been patched more than once, and the fascia behind them has seen years of overflow. We start by checking the wood. If the fascia is soft, a new gutter hung on it will pull loose, so we fix the board first and then hang the gutter on something solid." },
      { h: "Rain by the numbers",
        p: "NOAA's long-term normals for the Atlanta airport put average rainfall at about 50 inches a year. On a typical Austell roof, every inch of that is hundreds of gallons heading for the gutters, and in a summer storm it arrives fast. Gutters sized right and emptied well away from the house keep that water off your foundation and out of your crawlspace. That is the whole point of the job.",
        blocks: [
          { title: "What we check on an Austell gutter call", items: [
            "Whether each run holds water or drains to the outlet.",
            "How many downspouts the roof needs, and where they empty.",
            "Whether the ground near the house slopes away or back toward the slab." ] },
        ] },
    ],
  },
};

// ─────────────────────────────────────────────────────────────── ROOF REPLACEMENT
additions['roof-replacement'] = {
  acworth: {
    rename: { 'Building for shade, debris and overhang': 'Roof replacement in Acworth under shade, debris and overhang' },
    at: 1,
    sections: [
      { h: "Acworth roofs from the 2000s are coming due",
        p: "Half of Acworth's homes were built in 2000 or later, going by Census estimates for 2020 to 2024. Plenty of them still carry their first roof. On a shaded lot that roof has spent twenty-some years holding damp leaf litter in its valleys and growing algae on the north side, and it often looks older than it is. When we inspect one, we tell you whether it is truly worn out or just dirty. Streaks alone are not a reason to replace a roof. Brittle shingles, bare spots where granules are gone, and soft decking are." },
      { h: "What a tear-off looks like on a wooded lot",
        p: "Big trees make a replacement slower and messier if nobody plans for them. We set tarps over beds and shrubs, keep the dumpster off the root zones when we can, and run a magnetic nail sweep across the yard and driveway at the end of each day. If a limb hangs over the roof, we will point out whether it should be trimmed before the new shingles go on.",
        blocks: [
          { title: "Things we upgrade during an Acworth replacement", items: [
            "Leak barrier carried farther up the valleys that collect leaves.",
            "Algae-resistant shingles on the slopes that stay in shade.",
            "New pipe boots and flashing, not the old metal reused." ] },
          "As a roofing contractor in Acworth, GA, we would rather spend an extra hour on those details than come back for a leak next fall." ] },
    ],
  },

  austell: {
    rename: { 'The roof, the gutters and the ground': 'Roof replacement in Austell: the roof, the gutters and the ground' },
    at: 2,
    sections: [
      { h: "Austell homes are older than most in Cobb",
        p: "Austell's median home was built in 1993, per Census estimates for 2020 to 2024, and many houses in the older parts of town predate that by decades. A roof replacement on a house that age often turns up surprises under the shingles. We regularly find a second layer nailed over the first, plank or older plywood decking, and flashing that was bent and caulked instead of replaced. We note every one of those in the written scope so you know before tear-off what might change and why." },
      { h: "What changes when we find a second layer",
        p: "Two layers of shingles add weight and hide what is happening on the deck. We take both off, look at the wood, and replace any sheets that are soft or delaminated. If decking work is needed, we photograph it and get your okay before we add it. You will not find a surprise charge on the final bill.",
        blocks: [
          { title: "A typical Austell replacement, step by step", items: [
            "Tarps over beds and the driveway, dumpster placed where you want it.",
            "Full tear-off to the deck and a walk of every sheet.",
            "Drip edge, underlayment and leak barrier in the valleys.",
            "New shingles, flashing, pipe boots and ridge vent.",
            "Gutters checked and reset if they were pulled during the work.",
            "Magnetic sweep of the yard and a final walk with you." ] },
          "If you are looking for a roofer in Austell who will show you the deck before closing it up, ask to see the photos. We take them on every job." ] },
    ],
  },

  douglasville: {
    rename: { 'Building the roof back to spec, not to the check': 'Roof replacement in Douglasville, built to spec and not to the check' },
    at: 1,
    sections: [
      { h: "Replacing a roof on a Douglasville rental",
        p: "A little under half of Douglasville's homes are owner-occupied, based on Census estimates for 2020 to 2024. That means a lot of replacements here are for landlords who do not live in the house. We make that easy. We inspect, photograph every slope, write a scope you can read from anywhere, and coordinate with your tenant on the day of the job. You get before-and-after photos when we are done." },
      { h: "Douglasville roofs from the 2000s",
        p: "About half of the city's homes were built in 2001 or later. Many of those roofs are now past twenty years and showing the same signs: granules in the gutters, cracked pipe boots, and shingles that crack instead of bend on a cold morning. Not every roof that age needs replacing. If yours has a few years left and one problem area, we will tell you to repair it.",
        blocks: [
          { title: "Signs it is time, not just a repair", items: [
            "Bald patches where granules have washed off, on more than one slope.",
            "Shingles that crack when lifted gently.",
            "Repeated leaks in different places within a year or two.",
            "Soft spots underfoot that point to tired decking." ] },
          "We are a roofing contractor in Douglasville, GA that would rather lose a sale than sell you a roof you do not need." ] },
    ],
  },

  kennesaw: {
    intro: "A roof replacement in Kennesaw should be boring: a firm written number, a crew that shows up when it said it would, a deck that gets inspected, and a house that is dried in before dark. That is what we aim for on every job. If you are comparing roofers in Kennesaw, hold every bid to that standard, including ours.",
    rename: { 'The quote is the quote': 'Roof replacement in Kennesaw: the quote is the quote' },
    at: 1,
    sections: [
      { h: "Kennesaw's late-1990s roofs",
        p: "Kennesaw's median home was built in 1998, according to Census estimates for 2020 to 2024. A roof installed that year is now well past the life most standard shingles were made for, and many have already been replaced once. When we inspect a Kennesaw house from that era, we look for the problems production builders left behind: ridge vents without enough soffit intake, missing kick-out flashing at the garage wall, and pipe boots that cracked years ago. A replacement is the time to fix all three." },
      { h: "How replacement day goes",
        p: "Most Kennesaw replacements take one working day, sometimes two on a larger or steeper roof. Here is what that day looks like.",
        blocks: [
          { ordered: true, items: [
            "The crew arrives early and covers beds, AC units and the driveway.",
            "Old shingles come off one section at a time, so the house is never wide open.",
            "We walk the deck and photograph any sheet that needs replacing before we fix it.",
            "Underlayment, leak barrier, flashing and shingles go on, then the ridge vent.",
            "We clean up, run a magnetic sweep and walk the roof with you." ] },
          "If weather threatens, we stop tearing off and seal what is open. We never leave a Kennesaw roof uncovered overnight." ] },
      { h: "Near the battlefield park",
        p: "Homes close to Kennesaw Mountain National Battlefield Park, which covers close to 3,000 acres on the edge of town, often have big hardwoods over the roof. On those we recommend algae-resistant shingles on the shaded slopes and extra leak barrier in the valleys." },
    ],
  },

  'powder-springs': {
    rename: { 'Pitch, access and what they actually cost': 'Roof replacement in Powder Springs: pitch, access and what they change' },
    at: 2,
    sections: [
      { h: "Most Powder Springs homes are owner-occupied",
        p: "Powder Springs has an unusually high share of owner-occupied homes, about 82 percent in Census estimates for 2020 to 2024, and a median year built of 1996. That combination means many families here are on their second roof and plan to stay for the third. We talk with them about the long view: ventilation that keeps the attic cooler, flashing that will outlast the shingles, and a shingle line they will still like in fifteen years." },
      { h: "Ranch roofs and two-story roofs need different plans",
        p: "A low-slope ranch roof and a steep two-story house are different jobs, even on the same street. On the ranch we pay most attention to underlayment and the seal along the eaves, because water moves slowly on a shallow pitch. On the two-story we plan for safety, staging and protecting the yard below. Both get a full tear-off, deck inspection and new flashing.",
        blocks: [ "Homes along the Silver Comet Trail and the city's trail network often sit next to open, windy strips. On those we use the shingle maker's high-wind nailing pattern and seal the starter strip at the rakes. As a roofer in Powder Springs, we see edge blow-offs on houses that skipped that step." ] },
    ],
  },

  hiram: {
    rename: { 'Matching the street without matching the corner-cutting': 'Roof replacement in Hiram: matching the street, not the shortcuts' },
    sections: [
      { h: "Why Hiram roofs wear out together",
        p: "Hiram has the youngest housing in our area, with a median year built of 2004 in Census estimates for 2020 to 2024. When a whole subdivision goes up in two or three years, the roofs age on the same clock. That is why one storm or one hot summer can send half a street looking for a roofer in Hiram at once. We schedule fairly, inspect each house on its own merits, and do not tell a homeowner they need a full roof just because the neighbor did." },
    ],
  },

  marietta: {
    rename: { 'Jurisdiction first, shingles second': 'Roof replacement in Marietta: jurisdiction first, shingles second' },
    faq: [
      { q: "How do I know if my Marietta roof needs replacing or just repair?", a: "We inspect it and tell you straight. Repeated leaks on several slopes, widespread granule loss and brittle shingles mean replacement. One failed area on an otherwise sound roof means repair. Either way, you get photos to decide with." },
    ],
  },

  'dallas-ga': {
    faq: [
      { q: "Do you replace roofs outside Dallas?", a: "Yes, we are based in Dallas and replace roofs across Paulding County and the nearby parts of Cobb and Douglas counties, including Hiram, Powder Springs and Douglasville." },
    ],
  },
};

// ─────────────────────────────────────────────────────────────── STORM DAMAGE
additions['storm-damage-roof-repair'] = {
  'dallas-ga': {
    rename: { 'Our storm damage process in Dallas, GA': 'Storm damage roof repair in Dallas, GA: our process' },
  },
  douglasville: {
    rename: { 'Straight-line wind leaves a pattern': 'Storm damage roof repair in Douglasville: wind leaves a pattern' },
  },
  kennesaw: {
    rename: { 'What storms do to Kennesaw homes': 'Storm damage roof repair in Kennesaw: what storms do to homes here' },
  },

  acworth: {
    rename: { 'Limb strikes, punctures and what to do first': 'Storm damage roof repair in Acworth: limb strikes come first' },
    at: 1,
    sections: [
      { h: "Why trees do most of the damage here",
        p: "Acworth sits on Lake Acworth and Lake Allatoona, and the city counts more than 10,000 acres of Corps of Engineers woods around the lakes. A lot of homes back right up to that tree line. When a thunderstorm comes through with strong gusts, it is usually a limb, not the wind itself, that opens the roof. A limb can crack rafters and decking even when the shingles above look only scuffed, so we check the attic side of every strike before we decide on a repair." },
      { h: "The order we work in after a strike",
        p: "Safety first, then water, then paperwork. That order keeps you from making a small problem bigger.",
        blocks: [
          { ordered: true, items: [
            "Stay out of any room where the ceiling is sagging or wet, and keep kids and pets clear.",
            "Call a tree service to get the limb off. We do not cut large limbs on a roof.",
            "Once the limb is off, we tarp the opening and photograph the damage before it is covered.",
            "We inspect the decking and framing from inside, so the repair scope covers what is really broken.",
            "You get a written scope and the photos. If you file a claim, we can meet your adjuster on the roof." ] },
          "We are not public adjusters and we cannot promise a claim will be approved. Your insurer decides coverage. What we can do as a roofer in Acworth is make sure the damage is documented clearly and the repair is done right." ] },
    ],
  },

  austell: {
    rename: { 'Sequence matters: seal it, then document it': 'Storm damage roof repair in Austell: seal it, then document it' },
    at: 1,
    sections: [
      { h: "Older roofs take storms harder",
        p: "Austell's housing is older than most of our area. The Census median year built is 1993, and many homes in the older parts of town are much older. A roof that is already brittle does not bend in a gust, it cracks. Tabs that would have lifted and resealed on a newer roof snap off on an older one. After a storm we look closely at the edges and ridges first, because that is where an aging Austell roof gives way." },
      { h: "What a storm inspection includes",
        p: "A storm inspection is more than a glance from the driveway. Here is what we check and photograph.",
        blocks: [
          { title: "On the roof", items: [
            "Missing, creased or lifted shingles along eaves, rakes and ridges.",
            "Dents in vents, flashing and pipe collars, which show hail size and direction.",
            "Granule loss and bruised spots on the shingles themselves." ] },
          { title: "Around and inside the house", items: [
            "Gutters and downspouts for dents or separation.",
            "Attic decking for wet spots or daylight.",
            "Ceilings and walls below any suspected opening." ] },
          "You get the photos and a written scope. We can meet your adjuster, but we do not negotiate claims and cannot promise what your insurer will cover." ] },
    ],
  },

  hiram: {
    rename: { 'Wind damage hides in plain sight': 'Storm damage roof repair in Hiram: wind damage hides in plain sight' },
    sections: [
      { h: "Young roofs still get storm damage",
        p: "Half of Hiram's homes were built in 2004 or later, going by Census estimates for 2020 to 2024. Owners of newer houses often assume their roof is too young to have storm damage. It is not. A strong gust can break the seal strip on a ten-year-old shingle as easily as on an old one, and once the seal is broken the next storm can lift it again. If a big storm has come through and you have not had anyone look, it is worth a free check." },
      { h: "What happens after you call",
        p: "We set a time, walk the roof, and photograph anything that looks storm-related. If water is coming in, we tarp first. If the damage is minor, we will repair it and tell you it probably is not worth a claim. If it is widespread, we write a scope you can share with your insurer and can be there when the adjuster inspects.",
        blocks: [
          { title: "What you can do before we get there", items: [
            "Take photos of any shingles or pieces of metal in the yard.",
            "Put a bucket under any drip and move valuables away from it.",
            "Write down the date and time of the storm." ] },
          "As a roofing contractor in Hiram, GA, we inspect and document. Your insurer decides coverage." ] },
    ],
  },

  marietta: {
    intro: "Storm damage roof repair in Marietta comes with a wrinkle the newer suburbs do not have: what you are allowed to put back may be regulated, and that can shape the claim before it shapes the roof. We inspect, photograph the damage and write a scope that fits your address. If you need a roofer in Marietta after a storm, start with a free inspection.",
    rename: { 'Older rooflines, more places to look': 'Storm damage roof repair in Marietta on older rooflines' },
    at: 1,
    sections: [
      { h: "Marietta's older homes after a storm",
        p: "Marietta's median house was built in 1987, per Census estimates for 2020 to 2024, and many homes in the historic districts are far older. Older roofs have more joints: dormers, chimneys, porches added later, and additions tied into the main roof. Each one is a place wind can lift a shingle or drive rain under flashing. We take longer on these inspections because there is simply more roof to look at." },
      { h: "Matching what was there",
        p: "On an older house, a storm repair often means matching shingles that are no longer made in the same color or profile. We bring samples and show you the closest match in daylight. If a true match is not possible, we explain your options in writing, including what that means for a claim. Your insurer decides how to handle a mismatch. We document it clearly so they can.",
        blocks: [
          { title: "What we photograph on Marietta storm calls", items: [
            "Each damaged area, close up and from a distance, so the location is clear.",
            "The existing shingle, for matching.",
            "Flashing at chimneys, walls and additions.",
            "Any interior water stains or wet decking in the attic." ] },
          "We can meet your adjuster on site. We are not public adjusters and do not promise approval." ] },
      { h: "Trees near the battlefield park",
        p: "Neighborhoods near Kennesaw Mountain National Battlefield Park, which the Park Service puts about three miles west of Marietta, often have mature oaks over the house. Limb strikes are common after a strong storm. We tarp first, then inspect the decking and framing under the strike." },
    ],
  },

  'powder-springs': {
    rename: { 'The door-knocker filter': 'Storm damage roof repair in Powder Springs: the door-knocker filter' },
    at: 2,
    sections: [
      { h: "A town of homeowners is a target after hail",
        p: "About 82 percent of Powder Springs homes are owner-occupied, according to Census estimates for 2020 to 2024. Out-of-town storm crews know that. After a hail event they work neighborhoods street by street, and some ask homeowners to sign papers on the porch. You do not have to sign anything to get an inspection. Get a local roofer in Powder Springs to look first, compare what they find with what your insurer's adjuster sees, and only then decide who does the work." },
      { h: "What we document after hail",
        p: "Hail leaves evidence beyond the shingles, and adjusters look for it. We photograph all of it so nothing is missed.",
        blocks: [
          { title: "Where we look", items: [
            "Soft metal: vents, flashing, gutters and downspouts, where dents show hail size.",
            "Shingles: bruises, cracks and spots where granules have been knocked loose.",
            "Siding, window screens and fences on the side the storm came from.",
            "Older damage, which we note separately so it is not confused with the new storm." ] },
          "You get a written scope. We can meet your adjuster. Your insurer decides what is covered, and we will tell you honestly if the damage looks too minor to claim." ] },
    ],
  },
};

// ─────────────────────────────────────────────────────────────── TOP-UPS
// Short extra sections so every service × city page carries at least ~800 words of body copy.
const more = (svc, city, ...secs) => { const a = (additions[svc][city] ||= {}); (a.sections ||= []).push(...secs); };

more('new-construction', 'hiram',
  { h: "What we need from you to quote a Hiram build",
    p: "Send the roof plan or elevations, the shingle line you have in mind, and your framing schedule. If you are still choosing a color, tell us the brick or siding so we can bring boards that go with it. For a small builder with several lots, a single walk of the first house usually lets us quote the rest of the phase the same week." });
more('new-construction', 'marietta',
  { h: "Additions that tie into an old roof",
    p: "An addition on an older Marietta house means joining new framing to a roof that may have settled for decades. The tie-in is where these jobs leak if it is rushed. We open up enough of the old roof to weave the new underlayment under it, replace the flashing at the joint instead of reusing it, and match the shingle as closely as today's colors allow. If an exact match is not possible, we will show you the options before anything is ordered." });
more('new-construction', 'powder-springs',
  { h: "Ventilation planned from the framing stage",
    p: "Most attic heat problems we see on 1990s Powder Springs homes go back to the original build: a ridge vent with little or no soffit intake, or soffit vents covered by insulation. On a new house we work out the intake and exhaust from the framing plan, so the attic moves air from day one. It is one of the cheapest things to get right on a new roof and one of the hardest to fix later." });

more('gutter-repair-replacement', 'acworth',
  { h: "Cleaning versus fixing",
    p: "A lot of Acworth calls start as a request to clean the gutters. We are glad to do that, and while we are up there we check the hangers, the seams and the fascia. If something needs repair, you get photos and a short written note, not a sales pitch on the ladder." });
more('gutter-repair-replacement', 'austell',
  { h: "When a repair is enough",
    p: "Not every Austell gutter problem needs new gutters. A sagging run can often be re-pitched and rehung. A leaking corner can be resealed. A downspout that dumps at the foundation can be extended for very little. We start with the cheapest fix that actually solves the problem, and we only recommend replacement when the metal is bent, the seams are failing in several places, or the run is too small for the roof above it." });
more('gutter-repair-replacement', 'douglasville',
  { h: "Gutters after a storm",
    p: "After hail or high wind, look at your gutters and downspouts before anything else. Dents in soft metal show the size and direction of hail, and they help document what the roof took. Photograph them or have us inspect before you replace anything. We record the damage, and if you file a claim we can meet your adjuster. Your insurer decides coverage." });
more('gutter-repair-replacement', 'hiram',
  { h: "Seamless gutter formed on site",
    p: "When a Hiram run does need replacing, we form seamless aluminum gutter on site to the exact length of each wall. The only joints are at the corners and outlets, so there are fewer places to leak." });
more('gutter-repair-replacement', 'kennesaw',
  { h: "Gutters and the roof edge",
    p: "On a lot of Kennesaw houses, the gutter is fine and the roof edge is the problem. If the shingles stop short of the gutter, or there is no drip edge, water runs behind the gutter and down the fascia. That looks like a gutter leak but it is a roof detail. We check the edge on every gutter visit and fix it at the same time if it is missing." });
more('gutter-repair-replacement', 'marietta',
  { h: "Half-round and K-style on older homes",
    p: "Some older Marietta homes were built with half-round gutters, and many were later switched to standard K-style. If you want to go back to half-round for the look of the house, we can price it. If K-style suits the house and your budget, we will hang it with hidden hangers and a profile that does not look out of place. We will give you both options in writing." });
more('gutter-repair-replacement', 'powder-springs',
  { h: "What a Powder Springs gutter visit includes",
    p: "We check each run with a level, look at the fascia from the ladder, run water through the downspouts and note where each one empties. You get photos and a written scope." });

more('roof-replacement', 'acworth',
  { h: "Permits and the 100% penalty",
    p: "In Acworth, replacing shingles counts as an ordinary repair and is exempt from a permit. Changing the roof's design is different, and the city charges a penalty of 100% of the permit fee on top of the fee if permitted work starts without one. If your replacement includes changing a pitch, adding a dormer or reworking a roof line, we will tell you before work starts." });
more('roof-replacement', 'austell',
  { h: "Gutters during a replacement",
    p: "Replacing gutters at the same time as the roof saves a second trip and lets us install the drip edge and gutter apron properly. If your gutters are in good shape, we protect them during the tear-off and leave them in place." });
more('roof-replacement', 'douglasville',
  { h: "Insurance-funded replacements",
    p: "If your Douglasville replacement follows a storm, we inspect, photograph the damage and write a scope. We can meet your adjuster on the roof. We are not public adjusters, we do not negotiate your claim, and your insurer decides what is covered. Whatever the claim pays, the roof gets installed to the shingle maker's instructions." });
more('roof-replacement', 'hiram',
  { h: "Getting on the schedule",
    p: "Call or use the form with your address and what you are seeing. We set a time for a free inspection and send photos and a written scope." });
more('roof-replacement', 'kennesaw',
  { h: "After the job",
    p: "When we finish a Kennesaw replacement, you get photos of the deck, the underlayment and the finished roof, plus the shingle line and color for your records. Keep them with your house papers. They help if you sell, refinance or ever need to file a claim." });
more('roof-replacement', 'powder-springs',
  { h: "Permits in Powder Springs",
    p: "The City of Powder Springs issues its own building permits and publishes its own building guide for roofing, separate from Cobb County. Before a replacement starts, we confirm with you whether your job needs a permit and handle the paperwork if it does." });

more('storm-damage-roof-repair', 'austell',
  { h: "Wind and flood are separate claims",
    p: "In Austell, a storm can bring both roof damage and rising water. Those are usually handled by different policies. Wind and hail damage to the roof falls under your homeowners policy. Flood damage falls under flood insurance, if you carry it. Cobb County's CRS class 7 rating gives residents a 15% discount on NFIP flood premiums. We document the roof damage. Your insurers decide coverage on each." },
  { h: "Tarping in Austell",
    p: "If the roof is open, we tarp it as soon as it is safe to get up there, then come back for the permanent repair once it has dried out." });
more('storm-damage-roof-repair', 'hiram',
  { h: "Repair or replace after a Hiram storm",
    p: "Most wind damage on a younger roof is a repair: reseal or replace the lifted shingles and move on. If the damage covers several slopes, or the shingles are brittle and cracking, replacement may make more sense. We give you photos and our honest opinion either way." });
more('storm-damage-roof-repair', 'marietta',
  { h: "Who permits the repair",
    p: "Whether a storm repair at your address goes through the City of Marietta or Cobb County depends on your tax district in the county parcel lookup. We check before work starts." });
more('storm-damage-roof-repair', 'powder-springs',
  { h: "Low-slope roofs after a storm",
    p: "Many Powder Springs homes are ranches with shallow pitches. After a storm, water sits on a low-slope roof longer, so a small opening leaks more. We check the underlayment and decking under any damaged area, not just the shingle on top. If the roof is open, we tarp first and photograph what we find." });

more('gutter-repair-replacement', 'acworth',
  { h: "Getting a gutter quote in Acworth",
    p: "Tell us your address and what you are seeing: overflow at one corner, a run pulling loose, or stains on the fascia. We set a time to look, check the whole system with a level and a hose, and send you photos with a written scope. If the fix is a cleaning and a couple of new hangers, that is what the scope will say." });
more('gutter-repair-replacement', 'marietta',
  { h: "What to send us before the visit",
    p: "A few phone photos help: the corner that overflows, any stained or peeling trim, and where the downspouts empty. If you know your house is in a historic district, mention it so we bring profile options that fit. Then we come out, measure and put the plan in writing." });
more('roof-replacement', 'powder-springs',
  { h: "What you get in writing",
    p: "Every Powder Springs replacement quote lists the tear-off, decking allowance, underlayment, flashing, ventilation and cleanup as separate lines. If we find soft decking once the old roof is off, we photograph it and ask before replacing it. Nothing gets added to the bill without your okay." });
more('storm-damage-roof-repair', 'powder-springs',
  { h: "Book a storm inspection",
    p: "Call or use the form with your address and the date of the storm. We will set a time, walk the roof and send you photos and a written scope you can share with your insurer." });

// Links from service pages back to the local completed project (see src/lib/projects.js).
more('roof-replacement', 'austell',
  { h: "A recent Austell replacement",
    p: "On one recent Austell job, the old roof came off and new wood decking went down before the new roof was installed. You can see the photo and the scope on our [completed projects page](/projects/#austell-roof-decking)." });
more('roof-replacement', 'powder-springs',
  { h: "A recent Powder Springs project",
    p: "We recently replaced the roof and gutters on a two-story brick and siding home in Powder Springs, finished in architectural shingles. The photo and scope are on our [completed projects page](/projects/#powder-springs-roof-gutters)." });
more('gutter-repair-replacement', 'powder-springs',
  { h: "Gutters on a recent Powder Springs roof job",
    p: "New gutters went on with a recent roof replacement on a two-story home here. See it on our [Powder Springs project page](/projects/#powder-springs-roof-gutters)." });
more('roof-replacement', 'dallas-ga',
  { h: "A recent Dallas replacement",
    p: "Photos from a full roof replacement on a Dallas home, finished with new architectural shingles, are on our [completed projects page](/projects/#dallas-roof-replacement)." });
