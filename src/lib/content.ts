export type Region = "uttarakhand" | "western-ghats" | "nilgiris";
export type Difficulty = "easy" | "moderate" | "difficult" | "expert";
export type DepartureStatus = "open" | "filling" | "full";

export interface DepartureInput {
  id: string;
  batchLabel: string;
  startDate: string; // ISO yyyy-mm-dd
  endDate: string;
  seatsTotal: number;
  seatsLeft: number;
  status: DepartureStatus;
}

export interface TrekContent {
  id: string;
  slug: string;
  name: string;
  region: Region;
  difficulty: Difficulty;
  altitudeM: number;
  distanceKm: number;
  durationDays: number;
  priceInr: number;
  basecamp: string;
  bestSeason: string;
  heroImage: string;
  blurb: string;
  highlights: string[];
  skills: string[];
  sortOrder: number;
  departures: DepartureInput[];
}

export const REGION_LABEL: Record<Region, string> = {
  uttarakhand: "Uttarakhand",
  "western-ghats": "Western Ghats",
  nilgiris: "Nilgiris",
};

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  easy: "Grade I · Easy",
  moderate: "Grade II · Moderate",
  difficult: "Grade III · Difficult",
  expert: "Grade IV · Expert",
};

const px = (id: number, h = 900, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=${h}&w=${w}`;

export const HERO_VIDEO =
  "https://videos.pexels.com/video-files/36510405/15481160_3840_2160_60fps.mp4";
export const HERO_POSTER =
  "https://images.pexels.com/videos/36510405/4k-4k-hd-free-videos-4k-india-4k-video-36510405.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=720&w=1280";
export const HERO_BG = px(18068038, 1080, 1920);
export const CAMPFIRE_IMG = px(20732894, 900, 1400);

export const TREKS: TrekContent[] = [
  {
    id: "trek-kedarkantha",
    slug: "kedarkantha-summit",
    name: "Kedarkantha Summit",
    region: "uttarakhand",
    difficulty: "moderate",
    altitudeM: 3810,
    distanceKm: 20,
    durationDays: 6,
    priceInr: 16900,
    basecamp: "Sankri, Govind Wildlife Sanctuary",
    bestSeason: "Dec – Apr · snow window",
    heroImage: px(37911658),
    blurb:
      "India's definitive winter summit. Four days through snow-laden deodar forests to a 360° summit dawn over Swargarohini and Bandarpoonch.",
    highlights: [
      "True summit climb with ridge-line finale",
      "Snow-craft & crampon basics module",
      "Juda-ka-Talab frozen lake bivouac",
      "Max 18 trekkers · 1:6 leader ratio",
    ],
    skills: ["Snow-craft", "Fire in sub-zero", "Cold-weather first aid"],
    sortOrder: 1,
    departures: [
      { id: "dep-kd-1", batchLabel: "BCH-07", startDate: "2026-11-21", endDate: "2026-11-26", seatsTotal: 18, seatsLeft: 7, status: "filling" },
      { id: "dep-kd-2", batchLabel: "BCH-08", startDate: "2026-12-19", endDate: "2026-12-24", seatsTotal: 18, seatsLeft: 14, status: "open" },
      { id: "dep-kd-3", batchLabel: "BCH-09", startDate: "2027-01-16", endDate: "2027-01-21", seatsTotal: 18, seatsLeft: 18, status: "open" },
    ],
  },
  {
    id: "trek-kuari",
    slug: "kuari-pass-curzon-trail",
    name: "Kuari Pass · Curzon Trail",
    region: "uttarakhand",
    difficulty: "moderate",
    altitudeM: 3876,
    distanceKm: 33,
    durationDays: 6,
    priceInr: 18900,
    basecamp: "Joshimath / Dhak village",
    bestSeason: "Mar – Jun · Sep – Nov",
    heroImage: px(18068038),
    blurb:
      "Lord Curzon's 1905 amphitheatre walk. Unbroken front-row views of Nanda Devi (7,816 m) across ancient oak and rhododendron forest.",
    highlights: [
      "Grandstand view of 12 Himalayan giants",
      "Map, compass & terrain-association lab",
      "Gulling Top satellite peak option",
      "Auli cable-car descent day",
    ],
    skills: ["Land navigation", "Route planning", "Altitude protocols"],
    sortOrder: 2,
    departures: [
      { id: "dep-kp-1", batchLabel: "BCH-11", startDate: "2026-04-11", endDate: "2026-04-16", seatsTotal: 16, seatsLeft: 9, status: "open" },
      { id: "dep-kp-2", batchLabel: "BCH-12", startDate: "2026-09-26", endDate: "2026-10-01", seatsTotal: 16, seatsLeft: 16, status: "open" },
    ],
  },
  {
    id: "trek-bali",
    slug: "bali-pass-traverse",
    name: "Bali Pass Traverse",
    region: "uttarakhand",
    difficulty: "difficult",
    altitudeM: 4950,
    distanceKm: 60,
    durationDays: 8,
    priceInr: 24900,
    basecamp: "Sankri → Yamunotri crossing",
    bestSeason: "May – Jun · Sep – Oct",
    heroImage: px(37898606),
    blurb:
      "A committing high pass between the Har-ki-Dun and Yamunotri valleys. Roped glacier sections, Ruinsara Tal and raw expedition discipline.",
    highlights: [
      "4,950 m pass with fixed-line sections",
      "Ropework & glacier-travel certification",
      "Ruinsara Tal alpine camp",
      "Small expedition batch of 12",
    ],
    skills: ["Rope systems", "Glacier travel", "Expedition planning"],
    sortOrder: 3,
    departures: [
      { id: "dep-bp-1", batchLabel: "BCH-14", startDate: "2026-06-06", endDate: "2026-06-13", seatsTotal: 12, seatsLeft: 5, status: "filling" },
      { id: "dep-bp-2", batchLabel: "BCH-15", startDate: "2026-09-12", endDate: "2026-09-19", seatsTotal: 12, seatsLeft: 12, status: "open" },
    ],
  },
  {
    id: "trek-kudremukh",
    slug: "kudremukh-ridge",
    name: "Kudremukh Ridge",
    region: "western-ghats",
    difficulty: "moderate",
    altitudeM: 1894,
    distanceKm: 22,
    durationDays: 3,
    priceInr: 7900,
    basecamp: "Mullodi / Kalasa, Chikkamagaluru",
    bestSeason: "Oct – Feb",
    heroImage: px(38999700),
    blurb:
      "The horse-face peak of Karnataka. Rolling shola-grassland ridgelines, leech discipline and cloud-forest navigation in a national park.",
    highlights: [
      "UNESCO heritage shola ecosystem",
      "Forest-permit handling done for you",
      "River-crossing technique module",
      "Homestay base with local kitchens",
    ],
    skills: ["River crossing", "Monsoon craft", "Leech & tick protocol"],
    sortOrder: 4,
    departures: [
      { id: "dep-km-1", batchLabel: "BCH-21", startDate: "2026-10-09", endDate: "2026-10-11", seatsTotal: 20, seatsLeft: 6, status: "filling" },
      { id: "dep-km-2", batchLabel: "BCH-22", startDate: "2026-11-13", endDate: "2026-11-15", seatsTotal: 20, seatsLeft: 15, status: "open" },
      { id: "dep-km-3", batchLabel: "BCH-23", startDate: "2026-12-11", endDate: "2026-12-13", seatsTotal: 20, seatsLeft: 20, status: "open" },
    ],
  },
  {
    id: "trek-kumaraparvatha",
    slug: "kumaraparvatha-pushpagiri",
    name: "Kumaraparvatha · Pushpagiri",
    region: "western-ghats",
    difficulty: "difficult",
    altitudeM: 1712,
    distanceKm: 15,
    durationDays: 2,
    priceInr: 6900,
    basecamp: "Kukke Subramanya, Dakshina Kannada",
    bestSeason: "Oct – Feb",
    heroImage: px(35710118),
    blurb:
      "The toughest single-day climb in Karnataka. 1,500 m of vertical gain through dense jungle to a rocky summit above the clouds.",
    highlights: [
      "1,500 m vertical gain — true grinder",
      "Pacing, hydration & heat management lab",
      "Bhattara Mane forest-house halt",
      "Sunrise summit above cloud inversion",
    ],
    skills: ["Energy systems", "Jungle movement", "Water discipline"],
    sortOrder: 5,
    departures: [
      { id: "dep-kv-1", batchLabel: "BCH-25", startDate: "2026-10-17", endDate: "2026-10-18", seatsTotal: 16, seatsLeft: 0, status: "full" },
      { id: "dep-kv-2", batchLabel: "BCH-26", startDate: "2026-11-07", endDate: "2026-11-08", seatsTotal: 16, seatsLeft: 11, status: "open" },
    ],
  },
  {
    id: "trek-rajgad",
    slug: "rajgad-torna-fort-traverse",
    name: "Rajgad–Torna Fort Traverse",
    region: "western-ghats",
    difficulty: "easy",
    altitudeM: 1382,
    distanceKm: 18,
    durationDays: 2,
    priceInr: 5900,
    basecamp: "Pune muster point",
    bestSeason: "Jun – Feb · monsoon special",
    heroImage: px(14137273),
    blurb:
      "Two Maratha citadels in one ridgeline walk. Monsoon waterfalls, cloud walks and a beginner-perfect first field exercise.",
    highlights: [
      "Ideal first trek / family batch format",
      "Fort-architecture battlefield history",
      "Monsoon green-window batches",
      "4 h drive from Mumbai/Pune hubs",
    ],
    skills: ["Field basics", "Buddy system", "Weather reading"],
    sortOrder: 6,
    departures: [
      { id: "dep-rt-1", batchLabel: "BCH-28", startDate: "2026-07-11", endDate: "2026-07-12", seatsTotal: 24, seatsLeft: 19, status: "open" },
      { id: "dep-rt-2", batchLabel: "BCH-29", startDate: "2026-08-08", endDate: "2026-08-09", seatsTotal: 24, seatsLeft: 16, status: "open" },
    ],
  },
  {
    id: "trek-mukurthi",
    slug: "mukurthi-silent-valley",
    name: "Mukurthi · Silent Valley Rim",
    region: "nilgiris",
    difficulty: "easy",
    altitudeM: 2554,
    distanceKm: 26,
    durationDays: 3,
    priceInr: 8900,
    basecamp: "Ooty / Avalanche",
    bestSeason: "Nov – May",
    heroImage: px(35659936),
    blurb:
      "Inside the Nilgiri Biosphere — quota-controlled entry into shola-grassland wilderness, tahr country and glassy high-altitude lakes.",
    highlights: [
      "Mukurthi NP permit quotas handled",
      "Nilgiri tahr & shola ecology walk",
      "Zero-trace camping module",
      "Max 12 — forest-department cap",
    ],
    skills: ["Leave No Trace", "Silent movement", "Wildlife protocol"],
    sortOrder: 7,
    departures: [
      { id: "dep-mk-1", batchLabel: "BCH-31", startDate: "2026-11-20", endDate: "2026-11-22", seatsTotal: 12, seatsLeft: 3, status: "filling" },
      { id: "dep-mk-2", batchLabel: "BCH-32", startDate: "2026-12-18", endDate: "2026-12-20", seatsTotal: 12, seatsLeft: 9, status: "open" },
    ],
  },
  {
    id: "trek-doddabetta",
    slug: "doddabetta-kattadiparai-traverse",
    name: "Doddabetta–Kattadiparai",
    region: "nilgiris",
    difficulty: "moderate",
    altitudeM: 2637,
    distanceKm: 30,
    durationDays: 4,
    priceInr: 10900,
    basecamp: "Kotagiri",
    bestSeason: "Oct – May",
    heroImage: px(9411177),
    blurb:
      "South India's second-highest summit linked to hidden Toda hamlets and the cliff-edge Kattadiparai viewpoint over the emerald lowlands.",
    highlights: [
      "2,637 m South-India high point approach",
      "Toda cultural exchange & embroidery",
      "Tea-estate ridgeline traverse",
      "Winter wildflower belt in bloom",
    ],
    skills: ["Multi-day camps", "Compass bearings", "Camp routine"],
    sortOrder: 8,
    departures: [
      { id: "dep-db-1", batchLabel: "BCH-34", startDate: "2026-10-02", endDate: "2026-10-05", seatsTotal: 14, seatsLeft: 10, status: "open" },
      { id: "dep-db-2", batchLabel: "BCH-35", startDate: "2026-12-04", endDate: "2026-12-07", seatsTotal: 14, seatsLeft: 14, status: "open" },
    ],
  },
  {
    id: "trek-rangaswamy",
    slug: "rangaswamy-pillar-night-ops",
    name: "Rangaswamy Pillar · Night Ops",
    region: "nilgiris",
    difficulty: "moderate",
    altitudeM: 1788,
    distanceKm: 14,
    durationDays: 2,
    priceInr: 7400,
    basecamp: "Coonoor",
    bestSeason: "Year-round",
    heroImage: px(3714923),
    blurb:
      "A signature night-navigation exercise up the sacred pillar above Kil Kotagiri. Stars, radio discipline and a tea-garden dawn.",
    highlights: [
      "Night navigation under star charts",
      "Handheld-radio procedure training",
      "Sacred Irula heritage trail",
      "Weekend format ex-Bengaluru/Chennai",
    ],
    skills: ["Night navigation", "Radio procedure", "Stealth movement"],
    sortOrder: 9,
    departures: [
      { id: "dep-rs-1", batchLabel: "BCH-37", startDate: "2026-08-15", endDate: "2026-08-16", seatsTotal: 20, seatsLeft: 14, status: "open" },
      { id: "dep-rs-2", batchLabel: "BCH-38", startDate: "2026-09-19", endDate: "2026-09-20", seatsTotal: 20, seatsLeft: 11, status: "open" },
    ],
  },
];

export interface LeaderContent {
  id: string;
  name: string;
  rank: string;
  service: string;
  image: string;
  bio: string;
  credentials: string[];
  sortOrder: number;
}

export const LEADERS: LeaderContent[] = [
  {
    id: "ldr-vikram",
    name: "Col. Vikram Rana",
    rank: "Colonel (Retd.)",
    service: "Para Special Forces · 21 yrs",
    image: "/images/leaders/vikram.jpg",
    bio: "Two tenures in high-altitude CI operations across Kargil and Siachen-adjacent sectors. Founded a battalion survival school in the Uttarkashi hills. Now Target Hike's Chief of Expedition Standards.",
    credentials: [
      "Para SF · combat survival instructor",
      "NIM Advanced Mountaineering (A grade)",
      "4 first ascents in Garhwal",
    ],
    sortOrder: 1,
  },
  {
    id: "ldr-meera",
    name: "Meera Kulkarni",
    rank: "Expedition Lead",
    service: "Everest Summiteer · IMF",
    image: "/images/leaders/meera.jpg",
    bio: "Summited Everest via the South Col in 2019 and Lhotse in 2022. Wilderness First Responder. Leads our altitude protocols, women's batches and the leadership-under-fatigue curriculum.",
    credentials: [
      "Everest 2019 · Lhotse 2022",
      "Wilderness First Responder (WFR)",
      "HMI Method of Instruction course",
    ],
    sortOrder: 2,
  },
  {
    id: "ldr-arjun",
    name: "Maj. Arjun Nair",
    rank: "Major (Retd.)",
    service: "MARCOS · 16 yrs",
    image: "/images/leaders/arjun.jpg",
    bio: "Marine commando and jungle-warfare instructor from CIJW Vairengte. Built our jungle-craft syllabus and runs night-navigation 'Night Ops' exercises in the Western Ghats and Nilgiris.",
    credentials: [
      "MARCOS operator · 16 yrs",
      "CIJW jungle-warfare instructor",
      "Swift-water & rope rescue certified",
    ],
    sortOrder: 3,
  },
];

export const PILLARS = [
  {
    icon: "Compass",
    title: "Special Forces command",
    copy: "Every batch is led by veterans of Para SF, MARCOS or Everest-expedition backgrounds. 1 leader to 6 trekkers — no exceptions, no junior stand-ins.",
  },
  {
    icon: "Flame",
    title: "Skills, not just summits",
    copy: "Each trek embeds a field-craft syllabus — fire, water, navigation, first aid — taught hands-on and audited on every departure.",
  },
  {
    icon: "Route",
    title: "Off-beat by design",
    copy: "Batches capped at 12–18 on scouted, low-traffic routes across Uttarakhand, the Western Ghats and the Nilgiris. No trail queues.",
  },
  {
    icon: "ShieldCheck",
    title: "Lean by doctrine",
    copy: "Asset-light ops: rented expedition gear, regional ground partners, no offices. Capital goes to safety systems — not overhead.",
  },
];

export const SKILL_MODULES = [
  { icon: "Flame", title: "Fire craft", detail: "Friction, feather-sticks, one-match discipline in rain and wind", outcome: "Light a fire in 90% of conditions" },
  { icon: "Droplets", title: "Water discipline", detail: "Sourcing, filtration, boiling windows, rationing tables", outcome: "Never carry panic-water again" },
  { icon: "Compass", title: "Land navigation", detail: "Map, compass, pacing & terrain association off-grid", outcome: "Navigate 5 km off-trail to a grid reference" },
  { icon: "Tent", title: "Shelter systems", detail: "Tarp knots, bivouac selection, wind & drainage logic", outcome: "Raise a storm-proof shelter in 12 minutes" },
  { icon: "HeartPulse", title: "Wilderness first aid", detail: "WFR protocol: bleeds, sprains, hypothermia, evacuation calls", outcome: "Run a primary survey under pressure" },
  { icon: "Anchor", title: "Rope & river work", detail: "Figure-8 family, body belays, tyrolean basics, crossings", outcome: "Cross a monsoon stream safely" },
  { icon: "Leaf", title: "Jungle craft", detail: "Reading sign, foraging ethics, leech/tick protocol, stillness", outcome: "Move through forest without leaving trace" },
  { icon: "Users", title: "Leadership under fatigue", detail: "Mission planning, rotating command, after-action reviews", outcome: "Lead a tired team to a hard objective" },
];

export const MARKET = {
  stats: [
    { value: 2.3, prefix: "$", suffix: "B", decimals: 1, label: "India's adventure-tourism market, 2025 est." },
    { value: 20, prefix: "", suffix: "%", decimals: 0, label: "projected CAGR of adventure travel to 2030" },
    { value: 64, prefix: "", suffix: "%", decimals: 0, label: "of organised trekkers are aged 21–35" },
    { value: 71, prefix: "", suffix: "%", decimals: 0, label: "of demand flows from just 6 metro cities" },
  ],
  cities: [
    { name: "Delhi NCR", share: 33 },
    { name: "Bengaluru", share: 17 },
    { name: "Mumbai", share: 13 },
    { name: "Pune", share: 9 },
    { name: "Hyderabad", share: 8 },
    { name: "Chennai", share: 5 },
    { name: "Kolkata", share: 4 },
    { name: "Tier-2 · Jaipur, Indore, Lucknow, Coimbatore, Kochi", share: 11 },
  ],
  motivations: [
    { label: "Nature connect & digital detox", pct: 72 },
    { label: "Fitness & metabolic reset", pct: 61 },
    { label: "Achievement & adrenaline", pct: 56 },
    { label: "Social bonding with a tribe", pct: 47 },
    { label: "Photography & content", pct: 38 },
    { label: "Silence / spiritual reset", pct: 29 },
  ],
  painPoints: [
    { title: "Hidden costs & opaque pricing", severity: 86, answer: "One all-inclusive fee with a published cost sheet on every invoice" },
    { title: "Safety, rescue & medical readiness", severity: 81, answer: "1:6 leader ratio, WFR medics, sat-linked emergency SOP, evacuation contracts" },
    { title: "Trail overcrowding & overrun camps", severity: 77, answer: "Batches capped at 12–18 on scouted off-beat routes" },
    { title: "Hygiene, food quality & toilets", severity: 74, answer: "Crew-run kitchens, RO water, private dry-toilet tents" },
    { title: "Inexperienced or uncertified guides", severity: 69, answer: "Only Special-Forces veterans & Everest-certified leaders" },
    { title: "Refund & cancellation friction", severity: 63, answer: "Tiered refund policy printed on the invoice — no fine print" },
    { title: "Last-mile transport chaos", severity: 58, answer: "Door-to-trail transport bundled into every batch" },
    { title: "Pre-trek communication gap", severity: 55, answer: "D-21 brief cycle: fitness plan, kit list, batch WhatsApp" },
  ],
};

export const PERSONAS = [
  {
    name: "The Metro Resetter",
    age: "25–34",
    base: "Bengaluru · Gurugram · Pune",
    work: "IT, consulting, startups — ₹9–20 LPA",
    behavior: "Books with 3–5 friends; one long trek + two weekenders a year",
    channel: "Instagram reels + friend referrals",
    ltv: "1.8 treks / yr · high referral",
  },
  {
    name: "The Milestone Climber",
    age: "28–42",
    base: "Delhi NCR · Mumbai · Hyderabad",
    work: "Mid-managers, founders, consultants — ₹18–40 LPA",
    behavior: "Joins solo, premium batches, trains for the objective, wants skills certified",
    channel: "YouTube films + Google search",
    ltv: "High ticket · bootcamp upsell",
  },
  {
    name: "The Cadet & Aspirant",
    age: "18–24",
    base: "NCC units & colleges — Tier 1 & 2",
    work: "Students, defence aspirants",
    behavior: "Budget batches; the survival-skills hook is decisive; brings batches back home",
    channel: "YouTube shorts + campus ambassadors",
    ltv: "Volume · alumni pipeline",
  },
  {
    name: "The HR Offsite Buyer",
    age: "30–55",
    base: "Tech & BFSI hubs",
    work: "L&D / HR business partners",
    behavior: "15–60 pax offsites in Q1/Q3 budgets; outcome-led programming",
    channel: "LinkedIn + direct outreach",
    ltv: "₹3–8L per engagement",
  },
];

export const MARKETING = {
  campaign: "OPERATION TREELINE",
  platforms: [
    { name: "Instagram", role: "Discovery engine", cadence: "4 reels/wk — veteran skill clips, after-movies, batch calls", kpi: "CAC ≤ ₹900 via saves/shares" },
    { name: "YouTube", role: "Trust engine", cadence: "1 expedition film + 4 shorts / month", kpi: "Watch time → branded search" },
    { name: "Google Ads", role: "Intent capture", cadence: "Trek-name + 'best trekking company' keywords @ ₹18–32 CPC", kpi: "Landing conversion ≥ 3.5%" },
    { name: "WhatsApp", role: "Conversion engine", cadence: "Broadcast lists, batch groups, D-21 briefs", kpi: "40% of bookings touch WA" },
    { name: "LinkedIn", role: "B2B offsites", cadence: "2 founder posts/wk + HR decision-maker outreach", kpi: "4 corporate wins in Y2" },
    { name: "Ground ops", role: "City clinics", cadence: "Decathlon demo days, run clubs, NCC & campus fests", kpi: "600 qualified leads / quarter" },
  ],
  funnel: [
    { stage: "Awareness", detail: "Reels, shorts, founder films — survival micro-skills as the scroll-stopper" },
    { stage: "Nurture", detail: "Free 'Jungle Skills Sunday' city workshops in parks + WhatsApp batches" },
    { stage: "Convert", detail: "Founding-batch scarcity, 25% booking, Razorpay EMI at checkout" },
    { stage: "Evangelise", detail: "Battle-Buddy referral (₹1,000 each way) + alumni Regiment tiers" },
  ],
  launch: [
    "Founding 100 — first 100 seats get a numbered morale patch + lifetime alumni pricing",
    "Veteran AMA webinars: 'Ask a commando anything' before every Himalayan season",
    "Launch film: a 3-minute expedition documentary cut for YouTube + cinema pre-rolls in 6 metros",
  ],
  budgetNote: "Y1 marketing budget ₹7.0L (~10% of revenue): 55% performance media, 30% content production, 15% ground clinics.",
};

export const ORG = {
  roles: [
    { title: "Founder / CEO", type: "Co-founder", cost: "₹0 draw in Y1", brief: "Strategy, partnerships, capital, brand" },
    { title: "Head of Operations", type: "Co-founder (veteran)", cost: "₹45k/mo + 5% profit share", brief: "SOPs, safety board, leader pipeline, vendor empannelment" },
    { title: "Trek Leaders × 6–8", type: "Freelance, certified", cost: "₹4,200/day + ₹500/day zero-incident bonus", brief: "WFR + BMC/AMC mandatory; paid net-7 after each batch" },
    { title: "Marketing & Content Lead", type: "FTE", cost: "₹35k/mo", brief: "Reels, films, CRM, WhatsApp funnels, SEO" },
    { title: "Customer Success", type: "FTE · remote", cost: "₹20k/mo", brief: "Enquiries, payments, batch communications" },
    { title: "Retainers", type: "Contract", cost: "₹17k/mo total", brief: "Wilderness medic ₹8k · CA ₹4k · legal counsel ₹5k" },
  ],
  triggers: [
    "Y2: add Ops Coordinator (₹28k/mo) once batch count crosses 60/yr",
    "Y3: Bootcamp Commandant + gear technician when bootcamps cross 8/yr",
    "Rule: fixed payroll stays ≤ 32% of revenue in every quarter",
  ],
};

export const FIN = {
  unit: {
    title: "Unit economics — Himalayan 6-day batch @ ₹18,900 / trekker",
    items: [
      { label: "Transport — hub ↔ trail", v: 3900 },
      { label: "Leaders & local crew", v: 2400 },
      { label: "Food & camp kitchen", v: 2100 },
      { label: "Permits · forest fees · camping", v: 1700 },
      { label: "Gear amortisation", v: 800 },
      { label: "Insurance & medical kit", v: 650 },
      { label: "Vendor buffer & comms", v: 650 },
    ],
    price: 18900,
  },
  years: [
    { fy: "FY 2026–27", label: "Year 1 · Foundation", batches: "36 batches", trekkers: 540, revenue: 67.9, direct: 44.1, contribution: 23.8, fixed: 24.1, ebitda: -0.3, note: "Cash break-even in Q4 · month 14" },
    { fy: "FY 2027–28", label: "Year 2 · Scale", batches: "96 + 4 offsites", trekkers: 1450, revenue: 202.5, direct: 127.6, contribution: 74.9, fixed: 49.2, ebitda: 25.7, note: "Corporate offsites + winter programme scale" },
    { fy: "FY 2028–29", label: "Year 3 · Expansion", batches: "168 + 12 bootcamps", trekkers: 2860, revenue: 438.0, direct: 262.8, contribution: 175.2, fixed: 86.4, ebitda: 88.8, note: "Bootcamps & custom expeditions layer on" },
  ],
  capital: [
    { label: "Safety & camp gear (seed)", v: 3.2 },
    { label: "Launch marketing", v: 2.2 },
    { label: "Brand, film & website", v: 1.4 },
    { label: "Incorporation & legal", v: 1.1 },
    { label: "Insurance — year 1", v: 1.0 },
    { label: "Working-capital buffer", v: 0.7 },
  ],
  pricingTiers: [
    { name: "Western Ghats weekend", days: "2–3 days", price: "₹5,900 – 7,900" },
    { name: "Nilgiris wilderness", days: "3–4 days", price: "₹7,400 – 10,900" },
    { name: "Uttarakhand summit", days: "6–8 days", price: "₹16,900 – 24,900" },
    { name: "Bootcamp (Year 2)", days: "5-day residential", price: "₹21,000" },
    { name: "Custom expeditions (Year 3)", days: "team of 4–8", price: "₹2.5 – 6L / team" },
  ],
  payrollTerms: [
    "Salaries credited by the 7th of each month; no advance against salary",
    "Trek leaders: net-7 payout after batch close-out, zero-incident bonus of ₹500/day",
    "Ground vendors: 50% advance at muster, 50% on debrief sign-off",
    "Trekkers: 25% booking amount, balance at D-21; 5% early-bird till D-60",
    "Refunds: D-30 → 90% · D-15 → 50% · D-7 → trek credit only (monsoon-proof)",
  ],
  revenueTargets: [
    "Fill rate ≥ 65% of published seats is the pricing-in assumption",
    "CAC ≤ ₹900 blended · repeat + referral share ≥ 30% by Y2",
    "NPS ≥ 70 audited every batch · contributions banked to a safety reserve of ₹3L",
  ],
  seasonality: [
    { m: "Jan", r: "UK❄ WG NG" }, { m: "Feb", r: "UK❄ WG NG" }, { m: "Mar", r: "UK WG" },
    { m: "Apr", r: "UK" }, { m: "May", r: "UK" }, { m: "Jun", r: "UK · WG🌧" },
    { m: "Jul", r: "WG🌧 NG" }, { m: "Aug", r: "WG🌧 NG" }, { m: "Sep", r: "UK WG" },
    { m: "Oct", r: "UK WG NG" }, { m: "Nov", r: "UK WG NG" }, { m: "Dec", r: "UK❄ WG NG" },
  ],
};

export const LEGAL_PHASES = [
  {
    phase: "Phase 0",
    title: "Company & tax",
    timeline: "Weeks 0–4 · ₹1.1L",
    items: [
      "Private Limited via SPICe+ (2 directors, DIN, name reservation)",
      "PAN / TAN / current account / Razorpay KYC",
      "GST registration — SAC 9985, tour-operator 5% without ITC (or 18% with ITC)",
      "Udyam (MSME) + Shops & Establishment (home state)",
      "Trademark wordmark + patch — classes 39 (travel), 41 (training), 25 (merch)",
      "Founders' agreement + 10% ESOP pool for veteran hires",
    ],
  },
  {
    phase: "Phase 1",
    title: "Permits & operating rights",
    timeline: "Weeks 2–8 · per-region",
    items: [
      "Uttarakhand Tourism Development Board registration; district NOCs",
      "Forest entry & camping permits per batch — DFO, Govind WLS / Gangotri NP fees",
      "Karnataka: online trek permits (Kudremukh NP quotas), check-post entries",
      "Tamil Nadu: Mukurthi NP permits — strict 12-person daily quotas",
      "Leader certs: BMC/AMC (NIM/HMI/ABVIMAS) + Wilderness First Responder",
      "ATOAI membership · ISO 21101 safety standard adopted as internal SOP",
    ],
  },
  {
    phase: "Phase 2",
    title: "Risk, insurance & indemnity",
    timeline: "Before first batch",
    items: [
      "Public-liability policy for adventure operations (₹1Cr cover)",
      "Batch-wise group personal-accident cover — adventure-sports rider, not standard PA",
      "Signed informed-consent + indemnity bond (Indian Contract Act) per trekker",
      "Medical certificate mandatory above 4,000 m; guardian consent for minors",
      "Incident register + evacuation contracts with local rescue vendors",
      "DPDP Act 2023 privacy notice for customer & health data",
    ],
  },
  {
    phase: "Phase 3",
    title: "Scale compliance & governance",
    timeline: "As team grows",
    items: [
      "EPF ≥ 20 employees · ESI ≥ 10 · POSH committee ≥ 10",
      "TDS u/s 194C on contractor payouts (1–2%) · state professional tax",
      "Annual ROC filings (AOC-4, MGT-7) + statutory audit + ITR-6",
      "Quarterly safety-board review; third-party audit of SOPs each Y2",
      "Leave No Trace + waste carry-back bonds as enforceable trek rules",
      "Treasurer discipline: client advances parked until batch delivery",
    ],
  },
];

export const ROADMAP = [
  {
    tag: "P0 · Pre-launch",
    title: "Ground truth",
    points: [
      "3 pilot batches with friends-of-force; NPS ≥ 75 gate before paid sales",
      "Founder walks every route with a route-recon dossier & evacuation grid",
    ],
  },
  {
    tag: "Y1 · Foundation",
    title: "3 regions, 9 routes",
    points: [
      "36 batches · 540 trekkers · break-even by Q4",
      "Leader pool of 8 via DGR / AWPO veteran-resettlement networks",
    ],
  },
  {
    tag: "Y2 · Scale",
    title: "Bootcamps + B2B",
    points: [
      "5-day residential bootcamp, leased campus (Dehradun / Sakleshpur shortlist)",
      "4 corporate offsites; trigger: 3 consecutive months ≥ 70% fill rate",
    ],
  },
  {
    tag: "Y3 · Expansion",
    title: "Custom expeditions",
    points: [
      "Bespoke teams of 4–8 incl. Nepal (TCS 20% foreign-remittance handling)",
      "Himachal & Sahyadri routes; alumni Regiment with graded certifications",
    ],
  },
];

export const BLIND_SPOTS = [
  { title: "Crisis doctrine", copy: "24×7 ops desk, comms tree, satellite communicators on Grade III+ routes, incident commander protocol rehearsed quarterly." },
  { title: "The moat", copy: "A hiring pipeline into veteran resettlement networks — competitors can copy routes, not command." },
  { title: "Local dividend", copy: "8–10% of every batch fee stays in the village: porters, homestays, local produce — permits get easier when villages vouch for you." },
  { title: "Tech spine", copy: "Booking engine + CRM, Razorpay with EMI, WhatsApp API automation, per-batch NPS loops feeding the safety board." },
];

export const NAV_LINKS = [
  { label: "Intelligence", href: "#intelligence" },
  { label: "Expeditions", href: "#expeditions" },
  { label: "Fieldcraft", href: "#fieldcraft" },
  { label: "Command", href: "#command" },
  { label: "Blueprint", href: "#blueprint" },
  { label: "Numbers", href: "#numbers" },
  { label: "Legal", href: "#legal" },
];
