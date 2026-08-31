// Genuinely local, per-(service × city) copy for the 40 service-city landing pages.
//
// WHY THIS FILE EXISTS
// The 40 pages under /app/<service>-<city>/ were generated from one template with the
// city name swapped in. Measured content overlap between two services in the SAME city
// ran as high as 78%, and only ~10% of each page's text was unique — the doorway-page
// pattern Google's spam policies name explicitly. Same doctrine as CityAreaPage.jsx:
// shared chrome, genuinely different words.
//
// RULES FOR EDITING
// 1. Every entry must be written for that one service in that one city. Do NOT copy a
//    neighbouring city's paragraph and swap the name — that is the bug this file fixes.
// 2. Only verifiable facts. Permit rules below are sourced from the jurisdictions
//    themselves (see cityFacts). No invented job counts, dates, addresses or projects.
// 3. Keep claims about iRoofer's own work to things Cristian has confirmed: founded 2019,
//    Owens Corning Preferred Contractor, free inspections, same-day tarping, drone
//    documentation, daily nail sweep.
//
// SOURCES (checked 2026-08-31)
//   Paulding County (Dallas, Hiram) — paulding.gov FAQ "Do I need a permit for roofing or
//     siding replacement?": permit required only if structural work (sheathing, rafters,
//     trusses). Building & Permitting, 240 Constitution Blvd, Dallas GA; insp. 770-505-1398.
//   Douglas County (Douglasville) — douglascountyga.gov: Building Permit Dept 770-920-7201,
//     inspection requests 770-920-7333, online permitting via buildingdepartment.com.
//   Powder Springs — powderspringsga.gov/618: city issues its own permits; state license,
//     local business license and a $25,000 code compliance bond required; city publishes
//     a "Roofing" building guide.
//   Marietta — mariettaga.gov/1595: jurisdiction depends on tax district in the qPublic
//     parcel lookup — (4) MARIETTA = city permits, (9) UNINCORPORATED = Cobb County.
//     Historic districts require a Certificate of Appropriateness (Art. 7-9, Historic Pres.).
//   Kennesaw — kennesaw-ga.gov/buildingservices: city Building Services, permits applied for
//     online only, 770-429-4554 / permits@kennesaw-ga.gov; historic-district COA must be
//     approved BEFORE a building permit application.
//   Acworth — acworth-ga.gov building department: ordinary repairs including replacing
//     shingles are excluded from permit requirement; altering roof design requires a permit;
//     unpermitted work carries a 100% penalty of the permit fee (Sec. 18-56(g)(2)).
//   Austell — Cobb County: Sept 2009 flood affected 1,600+ homes countywide; Cobb holds a
//     CRS class 7 rating (15% NFIP premium discount); floodplain rules Ch. 58, Art. 2.
//   IRC R907.4 — a roof already carrying three layers must be torn to the deck.

export const cityFacts = {
  'dallas-ga':      { name: 'Dallas',        county: 'Paulding County' },
  'hiram':          { name: 'Hiram',         county: 'Paulding County' },
  'douglasville':   { name: 'Douglasville',  county: 'Douglas County' },
  'powder-springs': { name: 'Powder Springs',county: 'Cobb County' },
  'marietta':       { name: 'Marietta',      county: 'Cobb County' },
  'kennesaw':       { name: 'Kennesaw',      county: 'Cobb County' },
  'acworth':        { name: 'Acworth',       county: 'Cobb County' },
  'austell':        { name: 'Austell',       county: 'Cobb County' },
};

export const localCopy = {};

// ─────────────────────────────────────────────────────────────── ROOF REPAIR
localCopy['roof-repair'] = {
  'dallas-ga': {
    intro: "A repair is only worth doing if it actually stops the water. In Dallas we start at the ceiling stain, work backwards to the entry point, and tell you plainly whether a repair will hold or whether you are paying twice.",
    sections: [
      { h: "Where Dallas roofs actually leak",
        p: "Nine times out of ten it is not the field of the roof. It is a cracked pipe boot, a chimney or sidewall flashing that was surface-caulked instead of stepped in, a valley that was closed-cut over a worn underlayment, or nails that backed out and lifted the tab above them. We photograph the entry point before we touch it, so you can see what you are paying to fix rather than taking our word for it. Where the decking underneath has gone soft, we say so at inspection — patching a good shingle over a wet deck just moves the problem a season down the road." },
      { h: "Permits: what Paulding County actually requires",
        p: "This is where a lot of Dallas homeowners get told the wrong thing. Paulding County requires a permit for roofing work only when structural elements are involved — replacing sheathing, rafters or trusses. Straight shingle repair with no structural work does not need one. If we open your roof and find rotten decking that has to come out, that changes the answer, and we pull the permit through the Building & Permitting Division on Constitution Boulevard before the work continues. We will tell you which side of that line your job falls on at the estimate, not after." },
    ],
    faq: [
      { q: "How do you find a leak you cannot see from the ground?", a: "We get on the roof and into the attic. Water travels along rafters before it shows on a ceiling, so the stain is rarely under the hole. We trace it back to the entry point and photograph it, including drone shots on steep or fragile roofs." },
      { q: "Do I need a permit to repair my roof in Dallas, GA?", a: "Usually no. Paulding County only requires a permit when structural work is involved — sheathing, rafters or trusses. A shingle-and-flashing repair does not. If we find rot that changes the scope, we tell you and pull the permit." },
      { q: "How fast can you get out to a leak in Dallas?", a: "Dallas is our home base, so it is the fastest response area we have. Active leaks get priority and we will tarp the same day if the roof is open to weather. Free inspection either way." },
      { q: "Will you tell me if I need a replacement instead of a repair?", a: "Yes, and we would rather lose the repair than sell you one that fails. If the shingles are past their service life or the deck is compromised, a patch is money wasted. We show you the photos and let you decide." },
      { q: "What does a roof repair cost in Dallas, GA?", a: "It depends entirely on what is causing the leak — a pipe boot is a different job to a rebuilt valley. We inspect free and put a written figure in your hand. No phone estimates and no pressure." },
    ],
  },
  'hiram': {
    intro: "Hiram sits at about 965 feet on the Paulding ridge line, and the wind that comes across it finds the weak fastener before you do. We trace the leak to its source, fix that, and leave the rest of your roof alone.",
    sections: [
      { h: "Small city, same county rules, faster drive",
        p: "Hiram is minutes east of our shop in Dallas, which matters more than it sounds — an active leak in Hiram gets a crew the same day rather than a slot next week. Most of what we repair here is wind-related: creased tabs along a rake edge, lifted ridge caps, and pipe boots that have gone brittle and split around the collar. We fix the failure and colour-match the replacement shingles as closely as the existing weathering allows, rather than dropping an obvious bright patch in the middle of a faded slope." },
      { h: "Permits in Hiram and unincorporated Paulding",
        p: "Hiram falls under Paulding County building and permitting, and the county draws the line at structural work. Replacing shingles, boots and flashing does not require a permit; replacing sheathing, rafters or trusses does. That distinction is worth knowing, because a contractor who tells you every repair needs a permit — or who tells you nothing ever does — is not reading the same rule book the county is. If your repair crosses into structural, we handle the permit and the inspection sign-off and hand you the paperwork." },
    ],
    faq: [
      { q: "Do you cover Hiram for small repairs, or only full roofs?", a: "Small repairs absolutely. Hiram is a short drive from our Dallas shop, so a single boot or a length of flashing is still worth our time. We would rather fix your roof twice over ten years than sell you one you did not need." },
      { q: "Is a permit required for roof repair in Hiram?", a: "Not for straightforward shingle and flashing work. Paulding County requires a permit only when structural members are involved — sheathing, rafters or trusses. We will tell you which applies before we start." },
      { q: "My shingles are lifting along the edge after a windy week. Is that urgent?", a: "It is worth looking at soon. Once the seal strip breaks, the tab flexes with every gust and the nail hole opens up. Caught early it is a cheap repair; left a season it becomes a wet deck." },
      { q: "Will the repair patch match my existing roof?", a: "We match manufacturer, line and colour as closely as the weathering allows. On a roof that has faded significantly, a perfect match is not honest to promise, and we will say so before you commit." },
      { q: "What does roof repair cost in Hiram, GA?", a: "There is no useful average — the cause dictates the price. We inspect free, photograph the failure, and give you a written quote. If a repair is not the right answer we will tell you that instead." },
    ],
  },
  'douglasville': {
    intro: "Douglasville catches straight-line wind coming off the ridge in spring, and the damage it leaves is usually mechanical rather than dramatic: broken seals, creased tabs, and flashing pulled just far enough to let water behind it.",
    sections: [
      { h: "What wind actually does to a Douglasville roof",
        p: "A gust does not need to remove a shingle to cost you a ceiling. It lifts the tab, breaks the factory seal strip, and lays it back down looking untouched from the driveway. The crease is visible from above, and so is the shiner where the nail has withdrawn. That is why we inspect on the roof rather than from the ground, and why we photograph every point of failure — those same photographs are what an insurance adjuster needs if the damage turns out to be claimable rather than a straight repair." },
      { h: "Working inside Douglas County",
        p: "Douglasville sits in Douglas County, which runs its own building and permitting department separate from anything in Cobb or Paulding, with online permitting and its own inspection scheduling line. For a routine repair that stays above the deck, permitting rarely enters the picture. It matters once decking or framing has to be replaced, and it matters if your roof already carries multiple layers — under the residential code a roof carrying three layers has to come off to the deck rather than be covered again. We check the layer count during inspection so nobody is surprised halfway through." },
    ],
    faq: [
      { q: "The wind was bad last night but my roof looks fine. Should I get it checked?", a: "Yes, and it is free. Wind damage in Douglasville is usually broken seal strips and creased tabs — invisible from the ground and still perfectly capable of leaking at the next heavy rain." },
      { q: "Is this a repair or an insurance claim?", a: "Depends on cause and extent. Storm and hail damage often is claimable; wear and age is not. We document everything either way and tell you honestly which one we think you are looking at before you call your carrier." },
      { q: "Do you need a permit for a roof repair in Douglasville?", a: "Not for typical shingle and flashing repairs. It becomes relevant if decking or framing has to be replaced. Douglas County runs its own permitting department and we handle the filing when it applies." },
      { q: "How many layers can my roof have?", a: "Under the residential code a roof already carrying three layers must be stripped to the deck rather than covered again. We check the count at inspection, because it changes both the scope and the price." },
      { q: "What does roof repair cost in Douglasville, GA?", a: "We quote after we have seen it, in writing, free. A pipe boot and a rebuilt valley are different jobs at different prices, and any number quoted over the phone before that is a guess." },
    ],
  },
  'powder-springs': {
    intro: "Powder Springs runs the gamut from single-slope ranch roofs to steep two-storey elevations, and the right repair looks different on each. We diagnose first and quote second.",
    sections: [
      { h: "Pitch changes the repair, not just the price",
        p: "On the low-slope ranch roofs common through Powder Springs, water moves slowly and lingers at valleys and transitions, so a repair that ignores underlayment beneath the shingle will leak again. On the steeper two-storey elevations the failure is usually mechanical — wind at the rake, ridge caps working loose, or step flashing that was never properly woven into a sidewall. We tell you which of those you have, and we will happily tell you that what you actually need is a ventilation fix rather than a repair, if that is what the attic shows." },
      { h: "Powder Springs issues its own permits",
        p: "Unlike much of unincorporated Cobb, the City of Powder Springs runs its own permitting process and publishes its own roofing building guide. The city requires a contractor to carry a state licence, a local business licence and a $25,000 code compliance bond before it will issue. That is a real filter, and it is worth asking any roofer knocking on your door after a storm whether they can meet it. For a repair that stays above the deck you will usually not need a permit at all; we will tell you the moment your job crosses that line." },
    ],
    faq: [
      { q: "Do you need a permit to repair a roof in Powder Springs?", a: "Typically not for shingle and flashing repair above the deck. If structural work is involved, the City of Powder Springs handles its own permitting and we file it. The city publishes a roofing guide setting out what it expects." },
      { q: "What should I ask a storm-chaser who knocks on my door?", a: "Ask for a state licence, a local business licence and proof of the $25,000 code compliance bond Powder Springs requires. Anyone who cannot produce all three cannot legally pull your permit." },
      { q: "My roof is low-slope. Does that change anything?", a: "It changes what fails and how we fix it. Water sits longer at valleys and transitions on shallow pitches, so the underlayment matters as much as the shingle. A repair that only addresses the surface will not hold." },
      { q: "Could my leak actually be a ventilation problem?", a: "Sometimes, yes. Poor attic intake and exhaust causes condensation that looks exactly like a roof leak. We check the attic as part of the inspection, and if that is the cause we will tell you rather than sell you a repair." },
      { q: "What does roof repair cost in Powder Springs, GA?", a: "It depends on cause, pitch and access — a steep two-storey repair takes longer and costs more than the same fix on a ranch. Free inspection, written quote, no pressure." },
    ],
  },
  'marietta': {
    intro: "Marietta is two roofing markets in one city: pre-war homes near the Square where what goes on the roof is regulated, and post-war and newer builds where it is not. The repair approach differs accordingly.",
    sections: [
      { h: "Older roofs need a lighter hand",
        p: "On Marietta's older housing stock the decking is often plank rather than sheet, and a repair crew used to modern sheathing will happily nail into a gap and wonder why it still leaks. We check what we are fastening into before we start. On these homes the failures tend to be at the chimney and at sidewall transitions, where decades of surface caulk have been layered over flashing that was never right to begin with. Stripping that back and stepping the flashing in properly is a bigger job than a caulk bead, and a permanent one." },
      { h: "Marietta or Cobb County? Check the tax district",
        p: "This one catches people out. Whether your Marietta address is permitted by the City of Marietta or by Cobb County depends on jurisdiction, which you can confirm in the county parcel lookup: a tax district showing (4) MARIETTA means the city handles it, while (9) UNINCORPORATED means it is Cobb County. If your home sits within one of Marietta's historic districts, exterior work can additionally require a Certificate of Appropriateness before a permit is issued — which means shingle choice is not purely your preference. We confirm your jurisdiction before quoting." },
    ],
    faq: [
      { q: "Am I in the City of Marietta or unincorporated Cobb?", a: "Check the tax district on the county parcel lookup. (4) MARIETTA means the city permits your work; (9) UNINCORPORATED means Cobb County does. We confirm this before quoting, because it changes the process." },
      { q: "My house is in a historic district. Does that affect a roof repair?", a: "It can. Marietta's historic preservation rules can require a Certificate of Appropriateness for exterior changes, which affects what you are allowed to put back. We factor that in rather than discovering it late." },
      { q: "My roof has wood plank decking, not plywood. Is that a problem?", a: "Not a problem, but it demands care. Fasteners have to land in the plank, not the gap between. It is a common feature of older Marietta homes and a common reason a previous repair did not hold." },
      { q: "The chimney has been caulked repeatedly and still leaks. Why?", a: "Because caulk is not flashing. If the step and counter flashing were never properly integrated, sealant only buys a season. We strip it back and flash it correctly — a bigger job, but the last one." },
      { q: "What does roof repair cost in Marietta, GA?", a: "Older homes with plank decking and rebuilt chimney flashing cost more than a straightforward boot replacement. We inspect free and quote in writing so you can see exactly what is driving the number." },
    ],
  },
  'kennesaw': {
    intro: "Kennesaw homeowners and small-business owners get the same thing from us: a real person on the phone, a roof-level inspection, and a written quote that does not change once the crew arrives.",
    sections: [
      { h: "Repairs on homes and on small commercial",
        p: "A fair amount of our Kennesaw work is not residential at all — small commercial buildings with low-slope sections, roof-mounted HVAC units and penetrations that were flashed once and never revisited. Those curbs and pipe penetrations are almost always where the water is getting in, not the field of the membrane. On the residential side it is more conventional: boots, valleys, ridge caps and wind-lifted tabs. Either way we photograph the failure and show you before we quote, because a roof repair you cannot see is one you have to take on faith." },
      { h: "Kennesaw permits are online-only, and the historic district comes first",
        p: "The City of Kennesaw runs its own Building Services department and requires all permit applications to be submitted online. There is a sequencing detail worth knowing: if the property sits in the historic district, a Certificate of Appropriateness has to be approved before you can even apply for the building permit, and it covers any exterior work. Most straightforward repairs do not reach permitting at all, but if yours does, we would rather have identified it at the estimate than have your job sitting still while paperwork catches up." },
    ],
    faq: [
      { q: "Do you repair flat and low-slope commercial roofs in Kennesaw?", a: "Yes. Small commercial is a regular part of our Kennesaw work — typically leaks around HVAC curbs and pipe penetrations rather than the field of the roof itself." },
      { q: "How do permits work in Kennesaw?", a: "The City of Kennesaw handles its own permitting and applications are online only. Most simple repairs do not require one. If your property is in the historic district, a Certificate of Appropriateness has to be approved before a permit application." },
      { q: "Will I talk to a real person or a call centre?", a: "A real person. iRoofer has been family-owned since 2019 and the number on this page reaches us directly, not a lead broker who sells your details on." },
      { q: "Can you repair around a rooftop HVAC unit?", a: "Yes, and it is one of the most common sources of commercial leaks we find. The curb flashing is usually the failure point, not the roof surface around it." },
      { q: "What does roof repair cost in Kennesaw, GA?", a: "Residential and small commercial price differently, and access drives a lot of it. We inspect free, show you the photographs, and put the number in writing before anything starts." },
    ],
  },
  'acworth': {
    intro: "Lakefront exposure and mature tree cover give Acworth roofs a particular set of problems: constant debris in the valleys, shaded slopes that stay damp, and limbs that do their damage in a single night.",
    sections: [
      { h: "Trees, shade and standing debris",
        p: "Around Lake Acworth and through the older shaded streets, the roofs we repair are rarely failing from sun exposure. They are failing because valleys pack with leaf litter and hold water against the shingle, because a slope that never dries grows moss and algae that lifts granules, and because overhanging limbs abrade the surface every time the wind moves them. A repair that clears and reworks the valley but ignores the limb above it is a temporary repair. We will point out what needs trimming even though we are not the ones who profit from it." },
      { h: "Acworth's permit rule, in plain terms",
        p: "The City of Acworth treats replacing shingles as an ordinary repair and does not require a permit for it. What does require a permit is altering the roof design — changing the structure rather than renewing the surface. Worth taking seriously: Acworth applies a penalty equal to 100% of the standard permit fee, on top of the fee itself, for work started without a required permit. So the question is not whether permits are a nuisance, it is whether your contractor knows which category your job falls into. We establish that before the crew is booked." },
    ],
    faq: [
      { q: "Do I need a permit to repair my roof in Acworth?", a: "For replacing shingles, no — the City of Acworth classes that as an ordinary repair. Altering the roof design does require one, and unpermitted work carries a penalty of 100% of the permit fee on top of the fee." },
      { q: "There is moss and dark streaking on my north-facing slope. Is that damage?", a: "It is a warning sign rather than damage in itself. Shaded Acworth slopes stay damp, and the growth holds moisture against the shingle and works granules loose. We assess whether it is cosmetic or whether the mat underneath has gone." },
      { q: "A limb came down on my roof. What now?", a: "Call us and stay off the roof. We inspect free, tarp the same day if the deck is open to weather, and photograph everything in case it becomes an insurance claim rather than a repair." },
      { q: "My valleys keep clogging with leaves. Can that be fixed permanently?", a: "The valley can be reworked so it sheds better, but the honest answer is that the tree above it is the actual variable. We will tell you what trimming would achieve before you spend money on the roof." },
      { q: "What does roof repair cost in Acworth, GA?", a: "Valley rebuilds and rot repair under a chronically damp slope cost more than surface work. Free inspection, photographs of what we found, written quote." },
    ],
  },
  'austell': {
    intro: "In Austell water is the whole story. Cobb County has real flood history here, and a roof that sheds properly is the first line of a defence that ends at your foundation.",
    sections: [
      { h: "Repair the roof, but follow the water all the way down",
        p: "We inspect Austell roofs with the ground in mind. A leak at a valley is a roof problem; the same volume of water discharging next to a foundation is a much more expensive problem later. So when we trace a leak here we also look at where the roof is putting its water — whether the downspouts are actually carrying it clear of the house, whether a sagging gutter run is overshooting onto a flowerbed, whether a previous repair redirected a valley into somewhere it should not be going. We flag it whether or not it is part of the job you called about." },
      { h: "Flood context worth knowing as a homeowner",
        p: "Cobb County has significant flood history — the September 2009 event affected more than 1,600 homes countywide — and the county now takes part in FEMA's Community Rating System at class 7, which earns residents a 15% discount on flood insurance premiums. Roof work does not touch floodplain permitting, which is governed separately under the county code. But if your property sits in a regulated floodplain it is worth knowing before any contractor starts moving water around your lot, and it is worth confirming you are getting the CRS discount you are entitled to." },
    ],
    faq: [
      { q: "Does a roof repair affect flood risk?", a: "Not directly, but where your roof discharges water does. We look at downspout runs and discharge points during the inspection and flag anything dumping volume next to your foundation." },
      { q: "Am I getting a flood insurance discount in Cobb County?", a: "Cobb participates in FEMA's Community Rating System at class 7, which earns residents a 15% discount on NFIP premiums. Worth confirming with your carrier that it is being applied — it is not something we handle, but it is money." },
      { q: "How fast can you tarp a roof in Austell?", a: "Same day when a roof is open to weather. Getting a tarp on before the next rain is often the difference between a repair and a claim." },
      { q: "Do I need a permit for roof repair in Austell?", a: "Austell falls under Cobb County. Routine shingle and flashing repair generally does not require one; structural work does. Floodplain permitting is a separate matter under the county code and does not apply to ordinary roof repair." },
      { q: "What does roof repair cost in Austell, GA?", a: "We quote in writing after a free inspection. If we find the real problem is drainage rather than the roof, we will tell you that — even though it is a smaller job for us." },
    ],
  },
};

// ───────────────────────────────────────────────────────── ROOF REPLACEMENT
localCopy['roof-replacement'] = {
  'dallas-ga': {
    intro: "A replacement in Dallas is a one-to-two day job on most homes, and the part that determines whether it lasts thirty years happens in the four hours after the old roof comes off — while the deck is open and anyone can see what is really there.",
    sections: [
      { h: "What we do while your deck is exposed",
        p: "Tear-off to the deck is not a formality, it is the only chance anyone gets to look at the structure. We walk every sheet, mark and replace anything soft or delaminated, then dry in with synthetic underlayment rather than felt, and run ice-and-water membrane at the valleys and penetrations where water concentrates. As an Owens Corning Preferred Contractor we install to the manufacturer's specification because the shingle warranty depends on it — nailing pattern, exposure and ventilation are all conditions of coverage, not suggestions. You get photographs of the deck before it is covered." },
      { h: "Ventilation is part of the roof, not an upsell",
        p: "A great many Dallas attics are exhausting more than they can take in. Adding ridge vent without adequate soffit intake makes the imbalance worse, not better, and an attic that cooks shortens the life of the shingles you just paid for. We measure the intake before we spec the exhaust. If your existing soffit venting is painted shut or blocked with insulation — extremely common on homes here — we tell you, because it is cheap to fix while we are on the roof and expensive to care about later." },
    ],
    faq: [
      { q: "How long does a roof replacement take in Dallas, GA?", a: "Most single-family homes are a one to two day job, weather permitting. We tear off and dry in the same day — we do not leave a deck open overnight." },
      { q: "Do I need a permit to replace my roof in Dallas?", a: "Paulding County requires a permit only when structural work is involved. A tear-off and re-cover generally does not, but replacing sheathing does — and on a replacement we frequently find some. We handle it if so." },
      { q: "What happens if you find rotten decking?", a: "We photograph it, show you, and replace it. Deck replacement is priced per sheet and disclosed up front in the written quote, so it is a known rate rather than a surprise invoice." },
      { q: "What warranty do I get?", a: "The manufacturer's warranty on the Owens Corning shingles, which requires that we install to their specification — nailing, exposure and ventilation all count — plus our own workmanship warranty. We register it for you." },
      { q: "How do you protect my yard during a tear-off?", a: "We cover landscaping, stage the dumpster to protect the driveway, and run magnets across the yard at the end of every day. Nails in tyres are the most common complaint about roofers and the most avoidable." },
    ],
  },
  'hiram': {
    intro: "Most Hiram replacements are architectural shingle over a home built in the last few decades — straightforward work where the difference between contractors shows up in the details nobody photographs.",
    sections: [
      { h: "Matching the street without matching the corner-cutting",
        p: "Hiram neighbourhoods tend to have been built in phases, which means an entire street can be reaching the end of the same roof at the same time. That has two consequences. First, homeowners here want a replacement that still reads as part of the neighbourhood, so we spend real time on colour selection against the brick and trim rather than handing you a swatch book. Second, it means a lot of these roofs were originally installed to the same builder-grade spec — three-tab, felt underlayment, minimal valley protection. A replacement is the chance to correct that rather than reproduce it." },
      { h: "The layer count decides the job",
        p: "Under the residential code a roof already carrying three layers has to come off to the deck rather than be covered again — and we take everything to the deck as standard regardless, because you cannot inspect what you cannot see. On Hiram homes that have been re-covered once already, the tear-off is heavier and the quote reflects it honestly rather than being discovered as a change order. Paulding County permitting comes into play if sheathing or framing has to be replaced; we pull it through the county's Building & Permitting Division and hand you the sign-off." },
    ],
    faq: [
      { q: "Can you just go over my existing shingles?", a: "We do not. Overlays hide the deck, add weight, shorten the life of the new shingles and make future leaks harder to trace. Code requires a tear-off at three layers; we tear off at one." },
      { q: "Everyone on my street is replacing their roof at once. Should I be suspicious of that?", a: "Not necessarily — phased-built neighbourhoods age together. Be suspicious of out-of-town crews who appear after a storm, take a deposit and are unreachable when the warranty matters." },
      { q: "How do I choose a colour?", a: "Against your brick and trim, in daylight, with full-size samples on the roof — not from a brochure indoors. We bring them out. It is a thirty-year decision and it is worth twenty minutes." },
      { q: "Do I need a permit for a replacement in Hiram?", a: "Only if structural work is involved. Paulding County requires a permit for sheathing, rafter or truss work — which replacements sometimes uncover. We file it and hand you the inspection sign-off." },
      { q: "What does a roof replacement cost in Hiram, GA?", a: "Squares, pitch, access, layer count and decking condition all move it. We measure the roof — often by drone — and put a written figure in your hand. We do not quote roofs over the phone." },
    ],
  },
  'douglasville': {
    intro: "A lot of Douglasville replacements start as a storm claim. Whether yours is insurance-funded or out of pocket changes the paperwork, but it should not change the standard of the installation.",
    sections: [
      { h: "Building the roof back to spec, not to the cheque",
        p: "When an insurer settles, the scope they write is not always the scope the roof needs — drip edge, ice-and-water at valleys, ridge vent and starter course are the line items most commonly left out. We build the roof correctly and supplement the claim for what the code and the manufacturer actually require, rather than quietly installing to whatever the initial cheque covers. That is the difference between a roof that carries a full manufacturer warranty and one that technically has shingles on it. Douglas County runs its own permitting department, with its own inspection line, and we file there when structural work is in scope." },
      { h: "Layers, decking and the three-layer rule",
        p: "Older Douglasville homes have often been re-covered at least once. The residential code requires that a roof already carrying three layers be stripped to the deck rather than covered again, and we strip regardless — an overlay makes it impossible to inspect the sheathing you are about to warranty. Once the deck is open we walk it sheet by sheet, replace what is soft, and dry in the same day with synthetic underlayment. Nothing sits open overnight, which in a Douglasville spring is not a small consideration." },
    ],
    faq: [
      { q: "My insurance settled for less than your quote. What now?", a: "That is common and usually fixable. Missing line items — drip edge, valley membrane, ventilation, starter — get supplemented with documentation. We handle that with your adjuster rather than cutting the scope to fit the cheque." },
      { q: "Will you install to whatever my insurance pays?", a: "No. We install to code and to manufacturer specification, because that is what keeps the warranty valid. If there is a genuine gap we will show you exactly what it is before you commit." },
      { q: "Do you tear off or go over?", a: "Always tear off. Code mandates it at three layers; we do it at one, because the deck underneath is the part you are actually buying and nobody can inspect it through an overlay." },
      { q: "Who issues the permit in Douglasville?", a: "Douglas County runs its own building permit department with separate inspection scheduling. We file when structural work is in scope and hand you the sign-off." },
      { q: "What does a roof replacement cost in Douglasville, GA?", a: "Free inspection and a written measured quote — usually with drone imagery so you can see what we are pricing. Layer count and decking condition are the two biggest swing factors." },
    ],
  },
  'powder-springs': {
    intro: "Powder Springs replacements split neatly between low-slope ranch roofs where the underlayment does the heavy lifting and steep two-storey elevations where access and safety drive the schedule.",
    sections: [
      { h: "Pitch, access and what they actually cost",
        p: "A shallow ranch roof and a steep two-storey with limited yard access are not the same job even at identical square footage. On the low slope, water moves slowly and lingers, so we extend ice-and-water coverage further than the minimum at valleys and eaves rather than treating the shingle as the only barrier. On the steep elevations, staging and fall protection add time, and any quote that ignores that difference is either padding the easy roof or under-pricing the hard one. We measure and price the roof you actually have, and we tell you which of those two categories you are in." },
      { h: "Your contractor has to clear the city's bar",
        p: "Powder Springs runs its own permitting rather than deferring to Cobb County, and it sets a genuinely meaningful requirement: a state licence, a local business licence and a $25,000 code compliance bond before a contractor can be issued a permit. The city also publishes its own roofing building guide setting out what it expects to see. If you take one thing from this page, make it this — after the next hail event, ask every door-knocker for those three things. It filters out most of the people you do not want on your roof." },
    ],
    faq: [
      { q: "What should I check before hiring anyone in Powder Springs?", a: "State licence, local business licence, and the $25,000 code compliance bond the city requires. Those are Powder Springs' own conditions for issuing a permit, and they are easy to ask for and hard to fake." },
      { q: "Does my low-slope ranch roof need anything special?", a: "Yes. Water moves slowly on shallow pitch and lingers at valleys and eaves, so we extend the ice-and-water membrane beyond the bare minimum. Treating the shingle as the only barrier is how low-slope roofs leak." },
      { q: "Why is a steep roof more expensive?", a: "Staging and fall protection take time, and material moves up the roof more slowly. Same squares, different labour. We price the roof in front of us rather than a table average." },
      { q: "Do you handle the permit?", a: "Yes, through the City of Powder Springs, which permits separately from Cobb County. The city publishes a roofing guide setting out its requirements and we work to it." },
      { q: "What does a roof replacement cost in Powder Springs, GA?", a: "Pitch and access are the biggest variables here, alongside decking condition. Free measured inspection, written quote, and we walk you through what is driving the number." },
    ],
  },
  'marietta': {
    intro: "Replacing a roof in Marietta means answering a question before you answer any others: who has jurisdiction over your address, and is your home subject to design review?",
    sections: [
      { h: "Jurisdiction first, shingles second",
        p: "A Marietta address does not automatically mean City of Marietta permitting. The county parcel lookup shows a tax district, and (4) MARIETTA means the city handles your permit while (9) UNINCORPORATED means Cobb County does. Getting this wrong costs weeks. If the property falls within one of Marietta's historic districts, exterior work can require a Certificate of Appropriateness under the city's historic preservation rules — which means your shingle profile and colour may need approval rather than simply being your choice. We establish all of this before we quote, not after you have signed." },
      { h: "Older structure, modern performance",
        p: "Marietta's pre-war and immediate post-war homes frequently have plank decking, original framing and roof geometry with more valleys, dormers and transitions than a modern build. Every one of those is a potential entry point and every one needs flashing done properly rather than sealed. We often have to add sheathing over plank decking to get a proper nailing surface for architectural shingles — that is a real line item and it belongs in the quote, not in a change order. The goal is a roof that performs to current standard while still looking right on the house." },
    ],
    faq: [
      { q: "Who issues my roofing permit in Marietta?", a: "It depends on jurisdiction. Check the tax district in the county parcel lookup: (4) MARIETTA is the city, (9) UNINCORPORATED is Cobb County. We confirm before quoting because it changes the timeline." },
      { q: "Does a historic district limit my shingle choice?", a: "It can. Marietta's historic preservation rules can require a Certificate of Appropriateness for exterior work, which covers appearance. We spec options that pass review and still carry a full manufacturer warranty." },
      { q: "My house has plank decking. Can I still have architectural shingles?", a: "Usually yes, but it often requires sheathing over the planks to get a proper nailing surface. That is a genuine cost and we put it in the written quote rather than discovering it mid-job." },
      { q: "Will you match the character of an older home?", a: "That is most of the job on Marietta's older streets. Profile and colour against original brick and trim matter, and so does flashing that is done properly rather than caulked." },
      { q: "What does a roof replacement cost in Marietta, GA?", a: "Complex older rooflines with multiple valleys and dormers cost more than a simple gable, and decking work adds to it. Free measured inspection and a written quote that itemises the difference." },
    ],
  },
  'kennesaw': {
    intro: "A Kennesaw replacement should be boring: a firm written number, a crew that arrives when it said it would, a deck that gets inspected, and a roof dried in before dark.",
    sections: [
      { h: "The quote is the quote",
        p: "Our fixed position is that the written number does not move unless the scope genuinely changes, and if it does you see photographs first and approve it before anyone continues. Decking replacement is quoted at a disclosed per-sheet rate up front, so even the one genuine unknown in a replacement has a known price attached to it. We tear off to the deck, inspect and replace what is soft, dry in with synthetic underlayment, protect the valleys with membrane, and install Owens Corning architectural shingles to the specification their warranty requires. Daily magnet sweep, and the dumpster staged off your driveway surface." },
      { h: "Kennesaw permitting, and the historic district sequence",
        p: "The City of Kennesaw runs its own Building Services department and takes permit applications online only. If your property is inside the historic district there is an ordering requirement that trips up out-of-town crews: the Certificate of Appropriateness must be approved before the building permit application is submitted, and it applies to any exterior work. For a standard replacement outside the district it is straightforward. Either way we identify which situation you are in at the estimate, so the schedule we give you is one we can actually keep." },
    ],
    faq: [
      { q: "Will the price change once you start?", a: "Only if the scope genuinely changes, and only with your approval after you have seen photographs. Decking replacement is quoted at a disclosed per-sheet rate up front so even that is not a surprise." },
      { q: "How does Kennesaw permitting work?", a: "The City of Kennesaw permits its own jurisdiction and applications are online only. In the historic district a Certificate of Appropriateness must be approved before you can even apply for the permit." },
      { q: "Do you do commercial replacements in Kennesaw?", a: "Yes — small commercial is a regular part of our work here, including low-slope sections and rooftop equipment curbs that need flashing properly rather than sealing repeatedly." },
      { q: "Who actually shows up on the day?", a: "Our crew, with a crew chief on site. iRoofer has been family-owned since 2019; we are not brokering your job out to whoever bid lowest that week." },
      { q: "What does a roof replacement cost in Kennesaw, GA?", a: "Squares, pitch, access, layer count and decking. We measure — frequently by drone — and give you a written quote you can compare like for like against anyone else's." },
    ],
  },
  'acworth': {
    intro: "Acworth's tree cover is the best and worst thing about its roofs. Shade keeps the house cool and keeps the north slope permanently damp, and a replacement here has to account for both.",
    sections: [
      { h: "Building for shade, debris and overhang",
        p: "On heavily shaded Acworth lots the north-facing slopes rarely dry fully, which is why algae streaking and granule loss show up there first. It is worth specifying algae-resistant shingles on those elevations rather than treating all four the same, and it is worth extending valley membrane where leaf litter is going to sit no matter how often the gutters are cleared. We also protect landscaping properly on these lots — mature planting close to the house is exactly what a careless tear-off destroys, and it costs more to replace than the roofing crew saved by not covering it." },
      { h: "Permits: replacement versus redesign",
        p: "The City of Acworth does not require a permit for ordinary repairs including replacing shingles. It does require one where the roof design is being altered rather than renewed — and it enforces that with a penalty equal to 100% of the standard permit fee, charged on top of the fee, when work starts without a required permit. A straight tear-off and replacement generally sits on the exempt side; adding a dormer or changing the structure does not. We establish which one your project is before scheduling, and we file where filing is required." },
    ],
    faq: [
      { q: "Do I need a permit to replace my roof in Acworth?", a: "A like-for-like shingle replacement is treated as an ordinary repair and generally does not require one. Altering the roof design does, and unpermitted work carries a penalty of 100% of the permit fee on top of the fee." },
      { q: "My north slope is streaked and mossy. Will a new roof fix it?", a: "A new roof resets it, but the shade does not go away. We recommend algae-resistant shingles for those elevations and will tell you what trimming would do — even though tree work is not something we sell." },
      { q: "How do you protect mature landscaping during a tear-off?", a: "We cover planting and stage the dumpster to keep it off your driveway and beds. On established Acworth lots the planting is often worth more than the difference between roofing quotes." },
      { q: "Will leaf debris shorten the life of my new roof?", a: "It can if it sits in the valleys. We extend membrane protection where debris will accumulate and size the gutters for the actual load, which on a wooded lot is more than the standard assumption." },
      { q: "What does a roof replacement cost in Acworth, GA?", a: "Access on wooded lots, valley count and decking condition drive it. Free measured inspection and a written quote — no phone numbers pulled out of the air." },
    ],
  },
  'austell': {
    intro: "A replacement in Austell is a chance to fix where your house puts its water, not just what covers it — and in a county with Cobb's flood history, that is worth doing properly once.",
    sections: [
      { h: "The roof, the gutters and the ground",
        p: "We treat an Austell replacement as a drainage project that happens to involve shingles. The roof is torn to the deck, inspected sheet by sheet, dried in with synthetic underlayment and membrane at the valleys — that part is standard. What we also do here is look at whether the gutter capacity and downspout count actually match the roof area feeding them, and where that water is being discharged. A new roof draining into an undersized run that overshoots next to the foundation has solved the visible problem and left the expensive one in place." },
      { h: "Cobb County context",
        p: "Austell falls under Cobb County for permitting, and roof replacement generally reaches permitting only when structural work is involved. Separately and more importantly for homeowners here: the county has significant flood history — the September 2009 event affected more than 1,600 homes countywide — and Cobb participates in FEMA's Community Rating System at class 7, which earns residents a 15% discount on their NFIP flood insurance premiums. Floodplain development is governed under its own chapter of the county code and is not something a re-roof triggers, but it is worth knowing where your property sits." },
    ],
    faq: [
      { q: "Should I replace gutters at the same time as the roof?", a: "Often yes, and it is cheaper done together. If the existing runs are undersized or discharging next to the foundation, a new roof alone has not fixed your actual water problem." },
      { q: "Do I need a permit to replace a roof in Austell?", a: "Austell is under Cobb County. A like-for-like replacement generally does not require one unless structural work is involved. Floodplain permitting is separate and is not triggered by re-roofing." },
      { q: "Does Cobb County offer any flood insurance discount?", a: "Cobb participates in FEMA's Community Rating System at class 7, which earns residents a 15% discount on NFIP premiums. Worth confirming with your carrier that you are getting it." },
      { q: "How long will my house be exposed?", a: "It is not. We tear off and dry in the same day — we do not leave a deck open overnight, and in this part of Cobb that is not a policy we are flexible about." },
      { q: "What does a roof replacement cost in Austell, GA?", a: "Squares, pitch, layer count and decking condition. If drainage work makes sense alongside it we price that separately so you can see both numbers and decide." },
    ],
  },
};

// ─────────────────────────────────────────────── STORM DAMAGE ROOF REPAIR
localCopy['storm-damage-roof-repair'] = {
  'dallas-ga': {
    intro: "After a storm in Dallas the first job is not the roof, it is the evidence. Damage that is obvious from the driveway is rare; damage an adjuster will accept is specific, and it has to be documented before the next rain rearranges it.",
    sections: [
      { h: "What adjusters actually accept as hail damage",
        p: "A bruise on an asphalt shingle is a soft spot where the mat has fractured under the granule surface — you find it by feel as much as by eye, and it is easy to confuse with blistering, which is a manufacturing defect and not covered. The evidence that settles arguments is soft metal: dents in gutters, downspouts, vents, flashing and any aluminium on the property. Those are unambiguous, they date the event, and they corroborate what we are showing you on the shingle. We photograph the lot with a drone and mark a test square, because that is the format adjusters work in." },
      { h: "Same-day tarping and the claim timeline",
        p: "If your roof is open to weather we tarp it the same day. That is not just damage control — an insurer can reduce a settlement for damage that worsened after the event because the homeowner did not mitigate, and a tarp plus a timestamp is your protection against that argument. From there the sequence is inspection, documentation, your claim, the adjuster meeting where we walk the roof together, and the repair or replacement once scope is agreed. Dallas is our home base, so post-storm response here is the fastest we run anywhere." },
    ],
    faq: [
      { q: "How do I know if I have hail damage I cannot see?", a: "You often cannot from the ground. Check gutters, downspouts and vent caps for dents — soft metal shows hail before shingles obviously do. Then get a free roof-level inspection; we photograph everything either way." },
      { q: "Should I file a claim before you inspect?", a: "Inspect first. If there is no legitimate damage, a filed claim on your record helps nobody. We tell you honestly what we found and whether it is worth filing." },
      { q: "What is the difference between bruising and blistering?", a: "Bruising is impact damage — a fractured mat under the granules, usually covered. Blistering is a manufacturing defect and generally is not. Confusing the two is how claims get denied, so we document carefully." },
      { q: "Will you meet my adjuster?", a: "Yes, on the roof. We walk it together with our documentation so the scope is agreed on site rather than negotiated by email weeks later." },
      { q: "How fast can you tarp a roof in Dallas, GA?", a: "Same day when it is open to weather. Dallas is where our shop is, so this is our quickest response area, and mitigating promptly also protects your claim." },
    ],
  },
  'hiram': {
    intro: "Hiram sits high on the Paulding ridge at around 965 feet, and wind is the storm damage we see here more often than hail — which is a problem, because wind damage is the kind that looks like nothing at all.",
    sections: [
      { h: "Wind damage hides in plain sight",
        p: "Wind does not usually strip a roof. It lifts the tab, snaps the factory seal strip, and drops it back down. From the street the roof is perfect. From above there is a crease across the tab, a shiner where the nail has withdrawn, and a shingle that will now flex in every future gust until it fails properly. We inspect at roof level and photograph the creasing, because a claim built on general assertions about a windy night goes nowhere while a claim built on photographed creased tabs and a matching storm date does not." },
      { h: "Move quickly, and keep the paperwork",
        p: "Georgia policies carry filing deadlines and insurers argue about causation as the trail cools, so the useful sequence is: free inspection while the evidence is fresh, tarp the same day if anything is open, document, then decide whether filing is worth it. We will tell you when we think it is not. If the repair turns out to involve structural work — replacing sheathing or rafters — Paulding County permitting applies and we handle it; ordinary shingle and flashing work does not require a permit here." },
    ],
    faq: [
      { q: "My roof looks fine after a windstorm. Is an inspection worth it?", a: "Yes, and it costs nothing. Wind damage is usually broken seal strips and creased tabs, invisible from the ground and entirely capable of leaking at the next hard rain." },
      { q: "How long do I have to file a storm claim?", a: "Policies vary and deadlines are real, so do not sit on it. The practical risk is not just the deadline — the longer you wait, the easier it is for an insurer to argue the damage was wear rather than the storm." },
      { q: "What is a creased shingle?", a: "A shingle that wind lifted and folded before laying it back down. The seal is broken and the crease is a permanent weak line. It is one of the clearest pieces of wind-damage evidence there is." },
      { q: "Do storm repairs need a permit in Hiram?", a: "Not for shingle and flashing work. Paulding County requires permits when structural elements — sheathing, rafters, trusses — are replaced, which storm damage sometimes does involve." },
      { q: "Do you tarp in Hiram?", a: "Same day when the roof is open. Hiram is a short drive from our Dallas shop, which is why our response time here is measured in hours rather than days." },
    ],
  },
  'douglasville': {
    intro: "Douglasville takes spring straight-line winds off the ridge most years, and the resulting damage is consistent enough that we know where to look before we are on the ladder.",
    sections: [
      { h: "Straight-line wind leaves a pattern",
        p: "Unlike hail, which scatters, straight-line wind damage is directional — concentrated on the windward slope, heaviest along the rake and ridge, tapering as you move leeward. That pattern is itself evidence, and it is what distinguishes a genuine wind event from generalised wear when a claim is being assessed. We map the damage by elevation rather than describing the roof as a whole, photograph the creasing and the lifted ridge caps, and note the fascia, gutter and fence damage that corroborates direction and timing across the rest of the property." },
      { h: "Claim scope, supplements, and building it back properly",
        p: "Insurers frequently write an initial scope that omits what the code and manufacturer actually require — drip edge, valley membrane, starter course, adequate ventilation. Those omissions are not usually bad faith, they are a desk estimate written without the roof in front of them, and they are correctable with documentation. We supplement rather than silently reducing the build to fit the cheque, because a roof installed outside manufacturer specification does not carry the warranty you think it does. Douglas County handles its own permitting and inspections when structural work is in scope." },
    ],
    faq: [
      { q: "How can you prove it was the storm and not wear?", a: "Pattern and corroboration. Straight-line wind damage concentrates on the windward slope and along the rake, and it lines up with damage to gutters, fascia and fencing. We document all of it by elevation." },
      { q: "My insurer's estimate is lower than your quote. Is one of you wrong?", a: "Usually neither — their desk estimate often omits code-required items like drip edge, valley membrane or ventilation. That gets supplemented with documentation rather than by cutting the build quality." },
      { q: "Do you do emergency tarping in Douglasville?", a: "Yes, same day when a roof is open to weather. Mitigating promptly also protects your claim, since insurers can reduce settlements for damage that worsened afterwards." },
      { q: "Who permits storm repairs in Douglasville?", a: "Douglas County, which runs its own building permit department and inspection scheduling. Permits apply where structural work is involved; surface repairs generally do not require one." },
      { q: "Do I have to use the contractor my insurer suggests?", a: "No. You choose your contractor. A preferred-vendor list is a convenience for the insurer, not an obligation on you." },
    ],
  },
  'powder-springs': {
    intro: "After a hail event in Powder Springs your roof gets a lot of attention from people you did not call. Here is how to tell a legitimate inspection from a sales pitch.",
    sections: [
      { h: "The door-knocker filter",
        p: "The City of Powder Springs requires any contractor pulling a permit here to hold a state licence, a local business licence and a $25,000 code compliance bond. That is a genuinely useful filter and it costs you nothing to apply it at your front door. Ask for all three before anyone climbs on your roof, and be wary of anyone asking you to sign a document authorising them to deal with your insurer before you have seen a written scope. A legitimate contractor inspects, documents, and gives you a quote you can take to anyone." },
      { h: "Documenting hail on a low-slope roof",
        p: "Many Powder Springs homes are single-slope ranches, and hail behaves differently on a shallow pitch — impacts land closer to perpendicular, so bruising is often more pronounced than on a steep elevation catching the same storm at a glancing angle. We mark test squares, photograph soft-metal denting on gutters, vents and flashing as corroborating evidence, and drone the property so the whole roof is on record. Then we meet your adjuster on the roof and agree scope there rather than by correspondence." },
    ],
    faq: [
      { q: "Someone knocked on my door after the hail. Should I sign anything?", a: "Not before you have a written scope you understand. Be especially careful with documents authorising a contractor to negotiate with your insurer on your behalf. Get the quote, keep the choice." },
      { q: "How do I check a storm contractor is legitimate here?", a: "Ask for a Georgia state licence, a local business licence and proof of the $25,000 code compliance bond Powder Springs requires. Without all three they cannot be issued a permit in this city." },
      { q: "Does a low-slope roof get worse hail damage?", a: "It can present differently — shallow pitches catch impacts closer to perpendicular, so bruising is often more pronounced than on a steep slope hit by the same storm. We mark test squares to document it properly." },
      { q: "Will you meet my adjuster on site?", a: "Yes. Agreeing scope on the roof with photographs in hand is far faster and far less contentious than arguing it by email after the fact." },
      { q: "What does storm damage repair cost in Powder Springs, GA?", a: "If it is a covered claim, often your deductible plus any upgrades you choose. If it is not, we quote the repair in writing after a free inspection. We will tell you which it is." },
    ],
  },
  'marietta': {
    intro: "Storm damage on a Marietta home comes with a wrinkle the newer suburbs do not have: what you are permitted to put back may be regulated, and that affects the claim before it affects the roof.",
    sections: [
      { h: "When the repair is subject to design review",
        p: "If your property sits within one of Marietta's historic districts, exterior work can require a Certificate of Appropriateness under the city's historic preservation ordinance. That matters for a storm claim because like-for-like replacement may not be an available option, and the specification you are required to install may cost more than the insurer's default scope assumes. It is a documentable difference and it belongs in the claim from the start rather than being discovered at approval stage. We confirm your jurisdiction and any review requirement before writing the scope." },
      { h: "Older rooflines, more places to look",
        p: "Marietta's older homes carry more valleys, dormers, chimneys and sidewall transitions than a modern build, and every one is both a likely damage point and a likely leak point. After a storm we inspect each of those individually rather than assessing the roof as a single surface, and we check the attic for daylight and moisture. We tarp the same day where anything is open. Whether your address is permitted by the city or by Cobb County depends on your tax district, and we establish that up front." },
    ],
    faq: [
      { q: "Does living in a historic district change my storm claim?", a: "It can. If a Certificate of Appropriateness governs what you may install, like-for-like may not be permitted and the required specification can cost more. That difference is documentable and belongs in the claim." },
      { q: "Who permits storm repairs at my Marietta address?", a: "Depends on tax district: (4) MARIETTA means the City of Marietta, (9) UNINCORPORATED means Cobb County. We confirm before scoping, because it changes both process and timeline." },
      { q: "Why do older homes need a longer inspection?", a: "More valleys, dormers, chimneys and sidewall transitions — each one an individual failure point. We assess them separately rather than treating the roof as one surface, and we check the attic too." },
      { q: "Do you tarp in Marietta?", a: "Same day when a roof is open to weather. Prompt mitigation also protects your claim, since insurers can reduce settlement for damage that worsened afterwards." },
      { q: "Will you meet my adjuster?", a: "Yes, on site with full photographic documentation, including drone imagery on steep or fragile older roofs where walking every slope is not sensible." },
    ],
  },
  'kennesaw': {
    intro: "Storm response in Kennesaw covers homes and small commercial buildings alike, and on the commercial side the damage that costs the most is almost never on the part of the roof anyone looks at.",
    sections: [
      { h: "Commercial storm damage is a flashing story",
        p: "On the low-slope sections common to Kennesaw's small commercial buildings, wind and hail damage concentrates at the edges and the penetrations: perimeter metal lifted by uplift, seams opened, HVAC curb flashing displaced, and vent stacks knocked out of plumb. The membrane field can look untouched while water is entering at three curbs. We inspect the perimeter and every penetration individually and photograph each, because a commercial claim assessed on a general statement about the roof will be settled generally too." },
      { h: "Permits and the historic district ordering rule",
        p: "The City of Kennesaw operates its own Building Services department and takes permit applications online only. For properties inside the historic district there is a sequencing requirement that catches out crews from elsewhere: the Certificate of Appropriateness must be approved before a building permit application can be made, and it covers any exterior work. In a post-storm rush that ordering is exactly the kind of thing that stalls a job for weeks, so we identify it at inspection rather than at the permit counter." },
    ],
    faq: [
      { q: "Do you handle commercial storm claims in Kennesaw?", a: "Yes. Small commercial is a regular part of our work here — perimeter metal, seams, HVAC curb flashing and vent penetrations are where we find most of the actual damage." },
      { q: "My membrane looks fine but we have leaks after the storm. How?", a: "Almost always the edges and penetrations rather than the field. Uplift opens perimeter metal and displaces curb flashing while the middle of the roof looks perfect from the parapet." },
      { q: "How does Kennesaw permitting affect a storm repair?", a: "The city permits its own jurisdiction, online only. In the historic district a Certificate of Appropriateness must be approved before you can apply for the permit — worth knowing before the schedule slips." },
      { q: "Will you work directly with my adjuster?", a: "Yes, on site. For commercial claims especially, agreeing scope on the roof with photographs beats correspondence that drags on while the building keeps taking water." },
      { q: "How fast can you respond in Kennesaw?", a: "We tarp the same day where a roof is open to weather, residential or commercial, and inspections are free either way." },
    ],
  },
  'acworth': {
    intro: "In Acworth the storm damage that puts a hole in your roof usually arrives attached to a tree. Mature canopy is why the neighbourhood looks the way it does and why limb strikes are our most common emergency call here.",
    sections: [
      { h: "Limb strikes, punctures and what to do first",
        p: "A limb strike is different from wind or hail: the damage is concentrated, structural, and often includes broken decking or a cracked rafter rather than just lost shingles. Stay off the roof. Call, and we will tarp the same day so the interior is protected before the next rain, then assess what is actually broken underneath. Because a limb strike has an obvious cause and an obvious date, these claims tend to be less contested than hail — but the scope still needs documenting properly, including any structural member that has to be replaced rather than sistered." },
      { h: "Permits: repair versus altering the roof",
        p: "The City of Acworth does not require a permit for ordinary repairs such as replacing shingles, but structural work is a different matter, and limb damage frequently involves exactly that. Acworth also charges a penalty equal to 100% of the standard permit fee, in addition to the fee, for work begun without a required permit — a genuine risk when a homeowner is under pressure to get a roof closed up fast and a crew offers to start immediately. We establish what your job needs before we start, and we file where filing is required." },
    ],
    faq: [
      { q: "A tree limb hit my roof. What do I do right now?", a: "Stay off the roof and call us. We tarp the same day when the deck is open, then assess the structure underneath — limb strikes often break decking or crack a rafter, not just shingles." },
      { q: "Are limb-strike claims easier than hail claims?", a: "Generally less contested, because cause and date are obvious. The scope still has to be documented properly, especially any structural member that needs replacing rather than reinforcing." },
      { q: "Do I need a permit for storm repairs in Acworth?", a: "Not for replacing shingles, which the city treats as ordinary repair. Structural work does require one, and limb damage often involves structural work. Unpermitted work carries a 100% penalty on top of the fee." },
      { q: "Should I have the tree removed too?", a: "That is a question for an arborist, not a roofer, but we will tell you honestly what we can see from the roof about what is overhanging and what has already been abrading your shingles." },
      { q: "How fast can you get a tarp on in Acworth?", a: "Same day when the roof is open to weather. Getting it sealed before the next rain is usually the difference between a roof claim and a roof-plus-interior claim." },
    ],
  },
  'austell': {
    intro: "In Austell a storm rarely does one kind of damage. Wind opens the roof, the rain that follows finds the opening, and in a part of Cobb with real flood history the water keeps going after it gets inside.",
    sections: [
      { h: "Sequence matters: seal it, then document it",
        p: "Our first move on an Austell storm call is to stop the intrusion — same-day tarping wherever the deck is exposed — and only then to work through documentation. That order matters here more than most places because the interior damage escalates fast and because insurers can reduce a settlement for loss that worsened through failure to mitigate. Once it is sealed we photograph the roof by elevation, drone the property, and record the soft-metal denting on gutters, vents and flashing that corroborates the event date." },
      { h: "Flood, wind and two different policies",
        p: "It is worth being clear which policy covers what, because homeowners here are often dealing with both. Wind and hail damage to the roof is a homeowners claim. Rising water is not — that falls under flood insurance, and Cobb County has significant history there: the September 2009 event affected more than 1,600 homes countywide. Cobb participates in FEMA's Community Rating System at class 7, which earns residents a 15% discount on NFIP premiums. We handle the roof side and document it properly; we will not pretend to be your flood adjuster." },
    ],
    faq: [
      { q: "Is storm damage to my roof covered by flood insurance?", a: "No — wind and hail damage to a roof is a homeowners claim. Flood insurance covers rising water. They are separate policies and after a bad storm in Austell you may unfortunately be dealing with both." },
      { q: "How fast can you tarp in Austell?", a: "Same day when the deck is open. Sealing it first is both the right order of operations and protection for your claim, since insurers can reduce settlement for damage that worsened afterwards." },
      { q: "Does Cobb County give a flood insurance discount?", a: "Cobb participates in FEMA's Community Rating System at class 7, which earns residents a 15% discount on NFIP premiums. Worth confirming with your carrier that it is applied." },
      { q: "Do storm repairs need a permit in Austell?", a: "Austell falls under Cobb County. Surface repairs generally do not require a permit; structural work does. Floodplain permitting is governed separately under the county code." },
      { q: "Will you meet my adjuster on the roof?", a: "Yes, with the documentation already prepared. Agreeing scope on site is faster and cleaner than negotiating it afterwards while the building keeps taking water." },
    ],
  },
};

// ──────────────────────────────────────────── GUTTER REPAIR & REPLACEMENT
localCopy['gutter-repair-replacement'] = {
  'dallas-ga': {
    intro: "Gutters are the cheapest part of your roof system and the one most likely to cost you a foundation. In Dallas we size them to the roof that is actually feeding them rather than to whatever the builder put up.",
    sections: [
      { h: "Capacity, not just condition",
        p: "Most failing gutter runs we see in Dallas are not broken, they are undersized or under-drained. A five-inch run with a single downspout serving a large steep slope will overshoot in any real Georgia downpour no matter how clean it is, and the water it throws lands exactly where you least want it. We calculate the roof area feeding each run, check the fall, and tell you whether you need six-inch, more downspouts, or simply a realignment. Seamless aluminium formed on site means the only joints are at corners and outlets — the places that leak on sectional gutter are the joints you do not need." },
      { h: "Fascia rot and what it is telling you",
        p: "Soft fascia behind a gutter is not a gutter problem, it is a history of one. Water has been getting behind the run — usually because the drip edge was missing or the gutter was hung above the shingle line rather than below it — and the wood has been wet for seasons. Bolting a new gutter onto rotten fascia is a job that fails within a year, so we replace what has gone and correct the detail that caused it. Gutter work does not require a permit in Paulding County, but replacing structural wood may, and we will tell you if your job reaches that point." },
    ],
    faq: [
      { q: "My gutters overflow even though they are clean. Why?", a: "Almost always capacity or fall, not blockage. An undersized run or too few downspouts for the roof area will overshoot in a heavy Georgia downpour regardless of how clear it is." },
      { q: "Five-inch or six-inch gutters?", a: "It depends on the roof area and pitch feeding each run. Six-inch with properly placed downspouts is often the right answer on larger or steeper slopes. We measure rather than defaulting." },
      { q: "Do gutter guards actually work?", a: "They reduce cleaning, they do not eliminate it, and a cheap guard on an undersized gutter makes overflow worse. We will tell you whether yours is a guard problem or a capacity problem." },
      { q: "The wood behind my gutter is soft. Is that included?", a: "It has to be addressed — hanging new gutter on rotten fascia fails fast. We quote the fascia work separately so you can see exactly what it is, and we fix the detail that let water behind in the first place." },
      { q: "Do I need a permit for gutter work in Dallas, GA?", a: "No. Paulding County requires permits for structural work, not gutters. If replacing rotten structural wood becomes part of the job we will tell you before we start." },
    ],
  },
  'hiram': {
    intro: "On Hiram's exposed ridge-line lots, gutters take wind as well as water — and a run that has been pulled loose at one end quietly stops draining long before anyone notices.",
    sections: [
      { h: "Fall, fastening and wind",
        p: "A gutter only works if it falls consistently toward the outlet, and at 965 feet with regular wind exposure, hangers work loose and runs sag out of pitch faster here than in sheltered neighbourhoods. A sag of half an inch in the wrong place turns a gutter into a trough that holds standing water, breeds mosquitoes, freezes in a Georgia cold snap and eventually pulls the fascia with its own weight. We check fall with a level rather than by eye, refasten with hidden hangers at proper spacing, and replace runs where the metal has already deformed." },
      { h: "Doing it once, alongside the roof",
        p: "If you are already replacing the roof, doing the gutters at the same time is materially cheaper — the access is paid for, the drip edge and gutter apron can be integrated properly rather than retro-fitted, and there is no second mobilisation. Where homeowners lose money is in replacing a roof, then deciding a year later that the gutters were tired too, and paying for the same set-up twice. Gutter work does not require a permit in Paulding County; we will tell you if any structural wood replacement changes that." },
    ],
    faq: [
      { q: "Why do my gutters keep pulling away from the house?", a: "Usually hanger spacing, weight from standing water in a sagging run, or fascia that has already softened. On exposed Hiram lots wind accelerates all three. We fix the cause, not just the symptom." },
      { q: "Should I replace gutters at the same time as the roof?", a: "If they are near the end anyway, yes — the access is already paid for and the drip edge can be integrated properly. Doing it separately means paying to set up twice." },
      { q: "There is standing water in my gutter. Is that a problem?", a: "Yes. It means the fall is wrong or the run has sagged. Standing water adds weight, accelerates the sag, and eventually takes the fascia with it." },
      { q: "Seamless or sectional?", a: "Seamless, formed on site. Sectional gutter leaks at exactly the joints you do not need to have. With seamless the only joints are corners and outlets." },
      { q: "Do I need a permit for gutters in Hiram?", a: "No. Paulding County requires permits for structural work only. If rotten structural wood has to be replaced we will flag it before starting." },
    ],
  },
  'douglasville': {
    intro: "Douglasville's spring storms deliver rainfall in short, intense bursts, which is the specific condition undersized gutters fail in — and the condition nobody tests for on a calm day.",
    sections: [
      { h: "Built for the downpour, not the drizzle",
        p: "A gutter run that handles ordinary rain perfectly can overshoot completely in the intense burst rainfall Douglasville gets in spring, and that is when water goes behind the fascia and against the foundation. So we size for the peak rather than the average: roof area per downspout, gutter width, and outlet placement all get calculated instead of matched to whatever the builder installed. Where a storm has already bent or detached a run, that is often documentable damage — soft-metal deformation on gutters is exactly the evidence adjusters use, so it may belong in a roof claim rather than being paid for separately." },
      { h: "Storm damage to gutters is evidence",
        p: "This is worth knowing before you have a damaged run replaced quickly and quietly. Dents in gutters, downspouts and other soft metal are among the clearest indicators that a hail event actually occurred at your address, and they corroborate damage to the roof itself. If you have had hail, photograph the gutters or have us inspect before anything is repaired or removed. Douglas County runs its own permitting department, though gutter work itself does not require a permit — only structural replacement would." },
    ],
    faq: [
      { q: "My gutters overflow only in heavy storms. Is that normal?", a: "It is common and it is still a problem. It means the run is sized for average rain, not for the burst rainfall Douglasville gets in spring — which is exactly when overflow does damage." },
      { q: "My gutters are dented after hail. Should I just replace them?", a: "Get them inspected and photographed first. Soft-metal denting is some of the strongest evidence that hail hit your address, and it corroborates damage to the roof. Replacing first removes the evidence." },
      { q: "How many downspouts do I need?", a: "It depends on the roof area feeding each run and the pitch. One downspout serving a large slope is the single most common cause of overflow we find. We calculate rather than guess." },
      { q: "Do gutters need a permit in Douglasville?", a: "No. Douglas County permits structural work; gutters are not that. If rotten structural wood needs replacing we will tell you before we start." },
      { q: "What does gutter replacement cost in Douglasville, GA?", a: "Linear footage, gutter size, downspout count and any fascia repair. Free inspection and a written quote that itemises those separately so you can see what you are paying for." },
    ],
  },
  'powder-springs': {
    intro: "On the low-slope ranch roofs common through Powder Springs, gutters carry more of the load than people expect — shallow pitch means water arrives slower but stays longer, and the run has to be right.",
    sections: [
      { h: "Low pitch changes the drainage maths",
        p: "On a steep roof water arrives at the gutter fast and with momentum, which is why overshoot is the classic steep-roof gutter failure. On the shallow pitches common here the opposite problem dominates: water arrives slowly and spreads along the edge, so any low spot in the run collects, any inadequate fall holds, and debris that would be flushed off a steep roof settles instead. The fix is fall and outlet placement rather than simply bigger gutter, and it is worth getting a level on the existing run before anyone sells you a full replacement you may not need." },
      { h: "Licensing, bonds and who is allowed to work here",
        p: "The City of Powder Springs permits separately from Cobb County and requires contractors to hold a state licence, a local business licence and a $25,000 code compliance bond. Gutter work on its own does not require a permit, so that requirement is not directly triggered — but it is a reasonable standard to hold any contractor to regardless, and it is a fast way to sort a company that will honour a warranty from one that will not be reachable next spring." },
    ],
    faq: [
      { q: "Do I need bigger gutters or just better fall?", a: "On a low-slope roof it is very often fall and outlet placement rather than size. We put a level on the existing run before recommending a replacement you may not need." },
      { q: "Why does debris sit in my gutters even without many trees?", a: "Shallow pitch does not flush. Water arrives slowly and spreads along the edge rather than washing debris through, so it settles. It is a pitch characteristic, not neglect." },
      { q: "Do gutters require a permit in Powder Springs?", a: "No. The city permits building work, and gutters on their own are not that. It is still worth asking any contractor for the licence, business licence and bond the city requires of permit holders." },
      { q: "Can you add downspouts without replacing everything?", a: "Often yes, and it is frequently the cheapest real fix. Adding capacity where the run is overloaded beats replacing a run that is otherwise sound." },
      { q: "What does gutter work cost in Powder Springs, GA?", a: "A realignment and extra downspout is a fraction of a full seamless replacement. We inspect free and tell you which one you actually need." },
    ],
  },
  'marietta': {
    intro: "On Marietta's older homes the gutter is often fighting details that were never right to begin with — no drip edge, original fascia, and half-round runs replaced with whatever was cheapest in 1994.",
    sections: [
      { h: "Fixing the detail, not just the gutter",
        p: "A great deal of the fascia rot we find on older Marietta homes traces to a missing gutter apron or drip edge, which lets water wick back behind the run every time it rains. Replacing the gutter without correcting that simply resets the clock on the same failure. We install the flashing detail properly, replace fascia that has gone, and where a home has architectural character worth keeping we will talk through half-round and appropriate profiles rather than defaulting to standard K-style on a house it does not suit." },
      { h: "Historic district considerations",
        p: "If your property sits in one of Marietta's historic districts, exterior changes can require a Certificate of Appropriateness, and gutter profile and material are exterior changes. That does not make the work difficult, it makes it worth checking before you order materials. Which authority handles your address depends on tax district — (4) MARIETTA is the city, (9) UNINCORPORATED is Cobb County. Gutter work by itself does not require a building permit in either, but design review is a separate question from permitting." },
    ],
    faq: [
      { q: "Why does my fascia keep rotting even after new gutters?", a: "Almost always a missing gutter apron or drip edge letting water wick back behind the run. Replacing the gutter without fixing that detail just restarts the same slow failure." },
      { q: "Does a historic district affect gutter replacement?", a: "It can. Profile and material are exterior changes, and Marietta's historic districts can require a Certificate of Appropriateness. Worth confirming before ordering material rather than after." },
      { q: "Can I keep half-round gutters?", a: "Yes, and on some older Marietta homes it is the right call aesthetically. We will price both honestly rather than steering you to standard K-style because it is quicker to hang." },
      { q: "Do gutters need a permit in Marietta?", a: "Gutter work on its own does not require a building permit. Design review in a historic district is a separate matter. Which authority applies depends on your tax district — city or unincorporated Cobb." },
      { q: "What does gutter replacement cost in Marietta, GA?", a: "Profile, material, linear footage and any fascia repair. Older homes often need the flashing detail corrected too, and we itemise that rather than burying it." },
    ],
  },
  'kennesaw': {
    intro: "Kennesaw gutter work runs from straightforward residential replacement to commercial runs handling far more water than anyone sized them for. Both come with a written number that does not move.",
    sections: [
      { h: "Residential and commercial capacity",
        p: "On the small commercial buildings we work on around Kennesaw, drainage is frequently the original design carrying twenty years of added roof-top equipment and modified surfaces, and internal drains or scuppers that were adequate in 2001 back up in a hard rain. On residential the problems are more familiar — undersized runs, too few downspouts, discharge too close to the house. In both cases the calculation is the same: roof area, pitch, and outlet capacity. We measure it rather than replacing like for like and hoping the original spec was right." },
      { h: "Where the water goes after the downspout",
        p: "The most commonly skipped part of a gutter job is the last two feet. A downspout that discharges at the base of the wall has moved water from your roof to your foundation, which is not a solution. Extensions, splash blocks or a buried run to daylight cost very little relative to the gutters themselves and determine whether the job was worth doing. Gutter work does not require a building permit from the City of Kennesaw, which permits online only for work that does — worth knowing if the job grows to include structural repair." },
    ],
    faq: [
      { q: "Do you do commercial gutters in Kennesaw?", a: "Yes. Small commercial drainage is often the original design carrying two decades of added rooftop equipment. We recalculate capacity rather than replacing like for like." },
      { q: "Where should my downspouts discharge?", a: "Clear of the foundation — extensions, splash blocks or a buried run to daylight. A downspout emptying at the base of the wall has just moved the problem from your roof to your footing." },
      { q: "Do gutters need a permit in Kennesaw?", a: "No. The City of Kennesaw permits building work and does so online only. Gutters alone do not require it, though structural repair discovered during the job would." },
      { q: "Will the price change once you start?", a: "Only with your approval, after photographs, and only if the scope genuinely changes — fascia rot being the usual reason. The written number is the number." },
      { q: "What does gutter replacement cost in Kennesaw, GA?", a: "Linear footage, size, downspout count, and whether fascia repair is needed. Residential and commercial price differently. Free inspection, written quote." },
    ],
  },
  'acworth': {
    intro: "If you have mature trees in Acworth, your gutters are not a maintenance item, they are the system most likely to fail — and guards are a smaller part of the answer than the people selling them suggest.",
    sections: [
      { h: "The honest version of the gutter guard conversation",
        p: "Under heavy canopy no guard eliminates cleaning. A good one converts a twice-yearly clear-out into an annual check, and a bad one traps a mat of wet leaf litter on top where you cannot see it and the gutter overflows behind it while looking pristine from the ground. What actually determines performance on a wooded Acworth lot is capacity: six-inch runs, more downspouts, oversized outlets. Get the capacity right first, then decide about guards. Anyone who leads with the guard and never mentions the sizing is selling a product rather than solving your drainage." },
      { h: "Wet slopes, standing debris and fascia",
        p: "Shaded lots stay damp, and a gutter packed with decomposing leaf litter holds moisture against the fascia continuously rather than seasonally. That is why the fascia rot we find here tends to be worse than in open neighbourhoods with the same age of house. Replacing the gutter is only half the job if the wood behind it has gone. Acworth does not require a permit for ordinary repairs, and gutter work is not permitted work — but be aware the city charges a 100% penalty on top of the fee for work that did require a permit and started without one." },
    ],
    faq: [
      { q: "Will gutter guards mean I never clean my gutters again?", a: "No, and anyone saying otherwise on a wooded Acworth lot is overselling. A good guard turns twice-yearly cleaning into an annual check. A bad one hides overflow until the fascia has gone." },
      { q: "What size gutters do I need under heavy trees?", a: "Usually six-inch with additional downspouts and oversized outlets. Capacity matters more than guards here, and it should be sorted first." },
      { q: "My fascia is soft behind the gutter. How bad is that?", a: "It needs replacing — new gutter hung on rotten wood fails within a year. On shaded lots the rot is often worse than on comparable houses in open neighbourhoods, because the debris stays wet." },
      { q: "Do gutters require a permit in Acworth?", a: "No. The city permits building work; gutters are not that. Note that Acworth charges a penalty of 100% of the permit fee for permitted work started without one, so it is worth knowing which category any job falls into." },
      { q: "What does gutter replacement cost in Acworth, GA?", a: "Footage, size, downspout count and fascia repair, plus access on wooded lots. Free inspection and an itemised written quote." },
    ],
  },
  'austell': {
    intro: "Nowhere in our service area do gutters matter more than in Austell. In a county with Cobb's flood history, the run of metal along your roof edge is the first decision about where thousands of gallons go.",
    sections: [
      { h: "Gutters as foundation protection",
        p: "The purpose of a gutter is not to keep your porch dry, it is to move roof water far enough from the structure that it does not saturate the soil around your footing. On an average home a single inch of rain puts well over a thousand gallons onto the roof, and every gallon of that is either carried clear or delivered to the perimeter. We size the runs for the roof area feeding them, add downspouts where one is doing the work of two, and — the part most often skipped — extend the discharge properly rather than emptying at the base of the wall." },
      { h: "Flood context for Austell homeowners",
        p: "Cobb County has real flood history: the September 2009 event affected more than 1,600 homes countywide, and the county now participates in FEMA's Community Rating System at class 7, earning residents a 15% discount on NFIP flood insurance premiums. Gutters do not change your flood zone and no honest contractor will claim otherwise. What they do change is surface water management immediately around your house, which is worth doing properly and is entirely within your control. Floodplain development is regulated separately under the county code." },
    ],
    faq: [
      { q: "Do better gutters reduce my flood risk?", a: "They do not change your flood zone, and anyone claiming otherwise is overselling. What they change is surface water around your foundation — which is real, within your control, and worth doing right." },
      { q: "Where should the water actually go?", a: "Well clear of the structure — extended downspouts, splash blocks, or a buried run to daylight. Discharging at the base of the wall saturates the soil against your footing." },
      { q: "Does Cobb County offer a flood insurance discount?", a: "Cobb participates in FEMA's Community Rating System at class 7, which earns residents a 15% discount on NFIP premiums. Worth checking your carrier is applying it." },
      { q: "How much water is actually coming off my roof?", a: "More than people expect — an inch of rain on an average home is well over a thousand gallons. That volume is either carried clear of the house or delivered to the foundation." },
      { q: "What does gutter replacement cost in Austell, GA?", a: "Footage, gutter size, downspout count and discharge work. Free inspection and a written quote. If a couple of extensions solve it we will say so rather than selling a full replacement." },
    ],
  },
};

// ──────────────────────────────────────────────────────── NEW CONSTRUCTION
localCopy['new-construction'] = {
  'dallas-ga': {
    intro: "On a new build the roof is a schedule item before it is a finished surface. Getting a house dried in on the day the framing is ready is worth more to a Dallas builder than anything we could say about shingles.",
    sections: [
      { h: "Dry-in on schedule, every time",
        p: "The roof sits between framing and everything that happens inside, so a roofer who slips a week costs the builder far more than the roof line item. We schedule against the framing inspection rather than against a hopeful date, dry in as soon as the deck is signed off, and keep the house closed to weather while the trades that follow us get on with it. On homeowner-led builds in Dallas the same principle applies, it just matters to a different person. We work directly with Paulding County's Building and Permitting Division, which sits on Constitution Boulevard here in town." },
      { h: "Specifying the roof properly at the start",
        p: "New construction is the only moment when the ventilation, the underlayment and the shingle can be specified together as a system rather than compromised into an existing structure. Balanced intake and exhaust designed in from the framing stage costs almost nothing and determines how long the roof lasts. Installing as an Owens Corning Preferred Contractor means the manufacturer's specification is followed on nailing, exposure and ventilation, which is what makes the warranty real rather than nominal. We register it in the homeowner's name at completion." },
    ],
    faq: [
      { q: "Do you work with builders on a schedule?", a: "That is most of our new construction work. We schedule against the framing inspection and dry in as soon as the deck is signed off, because a roofer who slips the schedule costs a builder far more than the roof." },
      { q: "Who pulls the permit on new construction in Dallas?", a: "New construction is fully permitted through Paulding County's Building and Permitting Division, here in Dallas. On builder projects it is typically part of the overall building permit; we coordinate our inspections into it." },
      { q: "Can I choose the shingle on a spec build?", a: "If you are the buyer, usually yes, and earlier is better. Colour and profile are far easier to change before material is ordered than after the first squares are on the roof." },
      { q: "Is ventilation included?", a: "It is designed in, not added on. New construction is the one chance to balance intake and exhaust properly from the framing stage, and it is what determines how long the roof actually lasts." },
      { q: "What warranty comes with a new construction roof?", a: "The Owens Corning manufacturer warranty, which depends on installing to their specification, plus our workmanship warranty. We register it in the homeowner's name at completion." },
    ],
  },
  'hiram': {
    intro: "Hiram infill and small-scale development is the sort of work where one roofer handles the whole project rather than a national outfit sending whoever is free. That is what we are set up for.",
    sections: [
      { h: "Small builders, short chains",
        p: "On a two-house or ten-house project the value is in not having to manage us. One point of contact, a crew that has done the previous house on the same street, and a dry-in date we hold. Because Hiram is minutes from our Dallas shop we can work in tight windows around framing and inspection rather than needing a full week blocked out, which is the difference between fitting into a small builder's schedule and dictating it. Materials get staged so they are not sitting on a lot in weather for three weeks before we need them." },
      { h: "Getting the details right before they are buried",
        p: "New construction is where valley protection, step flashing at every sidewall, kick-out flashing at roof-to-wall terminations, and correctly integrated drip edge are cheap and easy. Retro-fitting any of them later is neither. Kick-out flashing in particular is one of the most commonly omitted details in production building, and its absence puts water inside a wall where nobody sees it for years. We install them as standard rather than as an upgrade, and the work is inspected through Paulding County like the rest of the build." },
    ],
    faq: [
      { q: "Do you take on small builder projects in Hiram?", a: "Yes — small and mid-size projects are a good fit for us. One point of contact, the same crew across the project, and dry-in dates we hold rather than dates we hope for." },
      { q: "What is kick-out flashing and why does it matter?", a: "It diverts water away from the wall where a roof edge meets a vertical surface. It is one of the most commonly omitted details in production building, and without it water gets inside the wall unseen. We fit it as standard." },
      { q: "How quickly can you dry a house in?", a: "As soon as the deck is ready and signed off. Hiram is minutes from our shop, so we can work in tight windows around framing rather than requiring a whole week blocked out." },
      { q: "Who handles permits on a new build in Hiram?", a: "New construction is permitted through Paulding County. On builder-led projects it is part of the overall building permit and we coordinate our work into that inspection sequence." },
      { q: "Can homeowners hire you directly for a custom build?", a: "Yes. We work with builders and directly with homeowners, and on a self-managed build we will walk you through the specification decisions rather than just quoting squares." },
    ],
  },
  'douglasville': {
    intro: "A new roof in Douglasville has to survive its first spring, and the details that get it through the storms are decided during framing — not after the first leak.",
    sections: [
      { h: "Specify for the weather this county actually gets",
        p: "Douglasville sees straight-line wind most springs, and a new roof is where wind resistance is decided. Nailing pattern and placement determine wind rating more than shingle choice does, and a high-wind nailing pattern costs a handful of fasteners per square rather than a meaningful line item. Add proper starter course at eaves and rakes — the piece production crews skip most often — and the roof edge, which is where wind uplift starts, is dramatically more resistant. We install to manufacturer specification because that is the condition of the wind warranty, not an optional extra." },
      { h: "Coordination with Douglas County",
        p: "Douglas County runs its own building department, with its own permitting and its own inspection request line, separate from anything in Cobb or Paulding. On a new build the roofing work sits inside the wider inspection sequence, so our timing is dictated by when the framing inspection clears rather than by our own calendar. We plan around it. For builders working across county lines, that difference in process is exactly the sort of thing that quietly costs a week if the roofing subcontractor has not worked here before." },
    ],
    faq: [
      { q: "What makes a new roof wind resistant?", a: "Nailing pattern and placement more than shingle choice, plus a proper starter course at eaves and rakes. The edge is where uplift begins, and it is the detail production crews skip most often." },
      { q: "Do you follow the county inspection sequence?", a: "Yes. Douglas County runs its own building department and inspection scheduling. Our work slots into the wider sequence, which means we plan around the framing inspection rather than around our own calendar." },
      { q: "Is high-wind nailing more expensive?", a: "Barely — a handful of extra fasteners per square. It is also a condition of the manufacturer's wind warranty, so skipping it costs far more than it saves." },
      { q: "Do you work for builders across county lines?", a: "Yes, and knowing that Douglas, Cobb and Paulding each run different processes is part of the job. That difference is where schedules quietly slip for crews who have not worked here before." },
      { q: "Can you match a roof across a phased development?", a: "Yes. We record the exact manufacturer, line and colour so later phases match rather than being visibly a different batch or product." },
    ],
  },
  'powder-springs': {
    intro: "New construction inside Powder Springs city limits runs through the city's own permitting process, and it has requirements that catch out subcontractors who assume Cobb County rules apply.",
    sections: [
      { h: "The city's requirements are specific",
        p: "Powder Springs issues its own building permits rather than deferring to Cobb County, and it requires each trade contractor to submit a state licence, a local business licence and a $25,000 code compliance bond. There is a defined sequence — plan review, permit issue for foundation, an approved foundation survey before framing may begin — and the city publishes its own building guides including one for roofing. For a builder, a roofing subcontractor who already meets those conditions and knows the sequence is worth more than one who is marginally cheaper and discovers the requirements at the counter." },
      { h: "Designing the roof into the house",
        p: "On new construction we would rather be involved before the roof geometry is final. Every additional valley, dormer and roof-to-wall transition is a permanent future maintenance point, and some of them appear on plans purely because they looked good in elevation. Where the design is settled, the work is in executing it properly: balanced ventilation designed from the framing stage, kick-out and step flashing at every wall termination, membrane in the valleys, and a starter course that is actually there." },
    ],
    faq: [
      { q: "Does Powder Springs permit its own new construction?", a: "Yes, the city permits separately from Cobb County, with its own plan review sequence and its own published building guides — including one for roofing." },
      { q: "What does the city require of trade contractors?", a: "A state licence, a local business licence and a $25,000 code compliance bond. Each trade contractor submits their own. It is worth confirming any subcontractor can meet it before the schedule depends on them." },
      { q: "Can you advise on roof design before plans are final?", a: "We would prefer it. Every extra valley, dormer and wall transition is a permanent maintenance point, and some exist only because they looked good in elevation." },
      { q: "How does the inspection sequence work here?", a: "Plan review, then permit for the foundation, then an approved foundation survey before framing begins. Roofing follows the framing inspection. Knowing the order matters more than most people expect." },
      { q: "Do you work with builders on multi-home projects?", a: "Yes, and consistency across phases is part of it — same crew, recorded material specification so later houses match the earlier ones." },
    ],
  },
  'marietta': {
    intro: "New construction in Marietta is rarely a blank field. It is usually infill, a rebuild, or an addition on a street with existing character — and often inside a jurisdiction with an opinion about how it should look.",
    sections: [
      { h: "Building new on an established street",
        p: "Infill work in Marietta has an aesthetic obligation the outer suburbs do not: a new roof on an old street is visible from the moment it goes on, and profile, colour and even shingle scale determine whether the house sits comfortably among its neighbours or announces itself. We spend real time on that specification. The technical work is standard new construction done properly — designed-in ventilation, membrane at valleys, step and kick-out flashing at every wall termination, correct starter course — but the specification conversation is longer here, and it should be." },
      { h: "Jurisdiction and design review",
        p: "Two things have to be settled before anything is ordered. First, whether your address is permitted by the City of Marietta or by Cobb County — the county parcel lookup shows the tax district, where (4) MARIETTA means the city and (9) UNINCORPORATED means the county. Second, whether the property falls within a historic district, in which case exterior work can require a Certificate of Appropriateness under the city's historic preservation ordinance, and roofing material is exterior. On infill next to a historic district that question is worth asking early rather than assuming." },
    ],
    faq: [
      { q: "Who permits new construction at my Marietta address?", a: "Depends on the tax district in the county parcel lookup — (4) MARIETTA means the City of Marietta, (9) UNINCORPORATED means Cobb County. This should be settled before anything is ordered." },
      { q: "Does a historic district affect a new build?", a: "It can, including on infill near one. Marietta's historic preservation rules can require a Certificate of Appropriateness for exterior work, and roofing material is exterior. Worth asking early." },
      { q: "How do you choose a roof for a house on an old street?", a: "Profile, colour and scale against the neighbours, not just against the brick. A new roof on an established street is visible immediately, and it is a long time to live with the wrong call." },
      { q: "Do you do additions as well as full builds?", a: "Yes, and tying new roof geometry into existing structure well is its own skill — the transition is where these jobs leak if the flashing is treated as an afterthought." },
      { q: "Can you work to an architect's specification?", a: "Yes. If the specification has gaps around ventilation or flashing details we will raise them rather than building in a problem and pointing at the drawing later." },
    ],
  },
  'kennesaw': {
    intro: "We handle new construction roofing in Kennesaw for residential builders and small commercial projects alike, on a fixed written scope and a dry-in date we commit to.",
    sections: [
      { h: "Residential and light commercial",
        p: "On the commercial side, new construction means getting the transitions right where low-slope meets steep-slope, and planning penetrations before the mechanical contractor starts cutting. Every rooftop unit is a curb that has to be flashed properly, and coordinating that during construction is a fraction of the cost of chasing leaks around it later. On residential the work is conventional — designed-in ventilation, valley membrane, step and kick-out flashing, high-wind nailing — done to manufacturer specification because that is what the warranty is conditional on." },
      { h: "Kennesaw's permitting process",
        p: "The City of Kennesaw operates its own Building Services department and requires all permit applications to be submitted online, with a defined certificate-of-occupancy checklist at the end of the process. If the site sits within the historic district there is an ordering requirement worth knowing before the schedule is set: the Certificate of Appropriateness must be approved before the building permit application is made, and it applies to any exterior work. On a new build that is not a detail to discover late." },
    ],
    faq: [
      { q: "Do you do commercial new construction in Kennesaw?", a: "Yes, light commercial. The critical work is low-slope to steep-slope transitions and planning penetrations before mechanical starts cutting — coordinating that during the build is far cheaper than chasing leaks later." },
      { q: "How does Kennesaw permitting work for a new build?", a: "Through the City of Kennesaw's own Building Services department, with online-only applications and a certificate-of-occupancy checklist at completion." },
      { q: "What if the site is in the historic district?", a: "The Certificate of Appropriateness has to be approved before the building permit application — not alongside it. Worth building into the programme rather than discovering it at the counter." },
      { q: "Will you hold the dry-in date?", a: "That is the commitment. We schedule against the framing inspection rather than a hopeful date, because everything after us depends on the house being closed to weather." },
      { q: "Do you coordinate with the mechanical contractor?", a: "On commercial, yes, and it matters. Every rooftop unit is a curb that has to be flashed properly, and that is much easier planned than retrofitted." },
    ],
  },
  'acworth': {
    intro: "Building new on a wooded Acworth lot means designing a roof for conditions the finished house will face for thirty years — shade, debris and overhang that are not going anywhere.",
    sections: [
      { h: "Design for the lot you are actually building on",
        p: "A roof specified without reference to the canopy above it is a roof that will underperform here. On shaded lots we recommend algae-resistant shingles on the elevations that will not dry, extended valley membrane where leaf litter will inevitably collect, and gutter capacity sized for a debris load rather than a bare-roof calculation. None of this is expensive at construction stage; all of it is expensive to retrofit. We will also flag where planned roof geometry creates a valley directly under a mature limb, because that is a maintenance obligation the eventual owner inherits forever." },
      { h: "Permits for building versus repairing",
        p: "The distinction matters in Acworth. The city treats ordinary repairs, including replacing shingles, as exempt from permitting — but new construction and any alteration of roof design is fully permitted work, inspected through the City of Acworth's Building Services department across foundation, framing and the rest. Acworth also applies a penalty equal to 100% of the standard permit fee, on top of the fee, where permitted work begins without a permit. On a new build there is no ambiguity: it is permitted, and we work inside that process." },
    ],
    faq: [
      { q: "Does tree cover change how you spec a new roof?", a: "It should. Algae-resistant shingles on shaded elevations, extended valley membrane where litter will collect, and gutters sized for a debris load. Cheap at build stage, expensive to retrofit." },
      { q: "Is new construction permitted in Acworth?", a: "Yes, fully — through the City of Acworth's Building Services department with inspections across the build. It is repairs like re-shingling that are exempt, not new construction." },
      { q: "What is the penalty for unpermitted work?", a: "Acworth charges 100% of the standard permit fee on top of the fee itself for work started without a required permit. On new construction there is no grey area about whether one is needed." },
      { q: "Can you advise on roof geometry before plans are final?", a: "Yes, and it is worth doing. A valley placed directly under a mature limb is a maintenance obligation the owner inherits permanently, and it is free to avoid on paper." },
      { q: "Do you work with builders or homeowners?", a: "Both. On a self-managed build we walk you through the specification decisions rather than just pricing squares off a plan." },
    ],
  },
  'austell': {
    intro: "Building in Austell means thinking about water from the ridge to the lot line. The roof is where it starts, but in this part of Cobb it is not where the design conversation should end.",
    sections: [
      { h: "Roof, gutters and site drainage as one system",
        p: "On a new build in Austell we would rather specify the roof drainage alongside the site drainage than hand off at the downspout. Roof area per downspout, outlet placement, and where discharge is directed all get decided at design stage, when moving a downspout is a line on a drawing rather than a retrofit. The roof itself is conventional good practice — designed-in balanced ventilation, membrane at valleys and penetrations, step and kick-out flashing at wall terminations, high-wind nailing to manufacturer specification so the warranty holds." },
      { h: "Cobb County, floodplain and what applies",
        p: "Austell falls under Cobb County for permitting, and new construction is fully permitted and inspected. Separately, if any part of the site sits in a regulated floodplain, that is governed under its own chapter of the county code with its own requirements, and it is a matter for the site and civil work rather than the roof. Context worth having: the September 2009 flood affected more than 1,600 homes across Cobb, and the county now holds a FEMA Community Rating System class 7, giving residents a 15% discount on NFIP premiums." },
    ],
    faq: [
      { q: "Should roof drainage be designed with site drainage?", a: "On an Austell build, yes. Downspout placement and discharge are trivial to get right on a drawing and expensive to fix afterwards. We would rather specify them together than hand off at the downspout." },
      { q: "Who permits new construction in Austell?", a: "Cobb County. New construction is fully permitted and inspected. Floodplain development, if any part of the site is in a regulated floodplain, is governed separately under the county code." },
      { q: "Does flood zone affect the roof?", a: "Not the roof itself — floodplain requirements are a site and civil matter. It is worth knowing where your lot sits, but no roofing decision changes it and we will not pretend otherwise." },
      { q: "What is Cobb's flood insurance rating?", a: "Cobb participates in FEMA's Community Rating System at class 7, which earns residents a 15% discount on NFIP premiums. The county has real history here — the 2009 event affected more than 1,600 homes." },
      { q: "Do you work with builders in Austell?", a: "Yes, on residential new construction, with dry-in scheduled against the framing inspection so the house is closed to weather on time." },
    ],
  },
};
