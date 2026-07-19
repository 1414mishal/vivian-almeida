/**
 * Single source of truth for Dr. Vivian R D'Almeida's practice details.
 * All real-world data — contact, address, credentials, opening hours — lives here.
 * Sourced from the doctor's existing practice information and Google listing.
 */

export const DOCTOR = {
  name: "Dr. Vivian R D'Almeida",
  fullName: "Dr. Vivian Roshan D'Almeida",
  shortName: "Dr. D'Almeida",
  title: "Orthopaedic Surgeon",
  practice: "Ortho 1 Speciality Clinic",
  practiceTagline: "Orthopaedic Specialists Under One Roof",
  practiceSubTagline: "First time in Mangalore — a single clinic where Dr. D'Almeida personally covers joint, spine, sports and hand care under one roof.",
  building: "Amritha Poly Clinic",
  affiliation: "Fr. Muller Medical College Hospital, Mangaluru",
  city: "Mangaluru",
  region: "Karnataka",
  phoneDisplay: "94496 21341",
  phoneHref: "tel:+919449621341",
  whatsappDisplay: "+91 74838 93488",
  whatsappHref: "https://wa.me/917483893488",
  instagramHandle: "@vivianroshan_10",
  instagramUrl: "https://instagram.com/vivianroshan_10",
  address: {
    line1: "Amritha Poly Clinic, KRR Road, Hampankatta",
    line2: "near Jyothi Circle, Mangaluru, Karnataka 575001",
    full: "Amritha Poly Clinic, KRR Road, Hampankatta, Mangaluru, Karnataka 575001",
  },
  expertise: [
    "Hip and knee replacement surgery",
    "Ligament reconstruction",
    "Fracture fixation",
  ],
} as const;

export const MAPS_QUERY = encodeURIComponent(
  "Amritha Poly Clinic, KRR Road, Hampankatta, Mangaluru, Karnataka 575001"
);
/** Pin-accurate iframe embed (coordinates 12.873°N, 74.849°E — Amritha Poly Clinic). */
export const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.7694099624387!2d74.84913950336544!3d12.873036365633622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2c6f4d06b9a9cbd0!2zMTLCsDUyJzIyLjkiTiA3NMKwNTAnNTkuNCJF!5e0!3m2!1sen!2sus!4v1649649465802!5m2!1sen!2sus";
/** Clinic-shared Maps short link — used for "Get Directions" CTAs. */
export const MAPS_LINK = "https://share.google/ZeDK0t5Ikj9nBeTmX";

/* ── Credentials & training ─────────────────────────────────────── */

export const CREDENTIALS = [
  "MBBS",
  "MS (Ortho)",
  "MRCS (Eng)",
  "MRCS (Ire)",
  "MRCPS (Glasgow)",
  "Fellowship — Knee & Arthroscopic Surgery",
] as const;

/** Concise credential string for compact placements (e.g. the hero). */
export const CREDENTIALS_SHORT = CREDENTIALS.slice(0, 5).join("  ·  ");

export type Qualification = {
  period: string;
  title: string;
  detail: string;
};

export const QUALIFICATIONS: Qualification[] = [
  {
    period: "MBBS",
    title: "St. John's Medical College",
    detail: "Bachelor of Medicine & Surgery — Bangalore",
  },
  {
    period: "2009",
    title: "MS in Orthopaedics",
    detail: "Master of Surgery, Orthopaedics",
  },
  {
    period: "2010",
    title: "MRCS — Royal College of Surgeons, Ireland",
    detail: "Membership of the Royal College of Surgeons",
  },
  {
    period: "2011",
    title: "MRCS — Royal College of Surgeons, England",
    detail: "Membership of the Royal College of Surgeons",
  },
  {
    period: "2012",
    title: "Fellowship in Knee Surgery",
    detail: "Paik Hospitals, Seoul, South Korea",
  },
  {
    period: "Fellowship",
    title: "Sports Medicine Training",
    detail:
      "Ortho One Hospital, Coimbatore & Hospital for Joint Diseases, NYU — New York",
  },
];

/** Doctor biography — paragraphs, sourced from the practice's own profile. */
export const BIO: string[] = [
  "Dr. Vivian R D'Almeida is an orthopaedic surgeon based in Mangaluru, specialised in joint replacement and arthroscopic keyhole surgeries. He currently serves as professor and unit chief at Fr. Muller Medical College Hospital, Mangaluru — combining everyday clinical practice with the training of the next generation of surgeons.",
  "After completing his MBBS at St. John's Medical College, Bangalore, he finished his MS in Orthopaedics in 2009. He went on to earn the MRCS from the Royal College of Surgeons of Ireland in 2010 and of England in 2011, followed by a fellowship in Knee Surgery at Paik Hospitals, Seoul in 2012. He has also trained in Sports Medicine at Ortho One Hospital, Coimbatore and the Hospital for Joint Diseases, New York University.",
  "His expertise mainly involves hip and knee replacement surgery, ligament injuries and fracture fixation. He performs a wide array of procedures that are patient-specific, with personalised care for people from every walk of life.",
  "Dr. D'Almeida personally leads Ortho 1 Speciality Clinic, located in the heart of Mangaluru — a first-of-its-kind orthopaedic practice in the city, where he covers the full range of joint, spine, sports and hand care under one roof.",
  "Beyond medicine, Dr. D'Almeida was also a keen sportsman — representing his state and university in football, table tennis and hockey.",
];

/* ── Opening hours ───────────────────────────────────────────────
   Times in 24h, clinic timezone is Asia/Kolkata (IST).
   Array index matches JS Date.getDay(): 0 = Sunday … 6 = Saturday. */

export type DayHours = { open: string; close: string } | null;

export type ScheduleEntry = {
  day: string;
  short: string;
  hours: DayHours;
};

export const SCHEDULE: ScheduleEntry[] = [
  { day: "Sunday", short: "Sun", hours: null },
  { day: "Monday", short: "Mon", hours: { open: "10:30", close: "12:30" } },
  { day: "Tuesday", short: "Tue", hours: { open: "17:30", close: "19:30" } },
  { day: "Wednesday", short: "Wed", hours: { open: "13:00", close: "14:30" } },
  { day: "Thursday", short: "Thu", hours: { open: "10:30", close: "12:30" } },
  { day: "Friday", short: "Fri", hours: { open: "17:30", close: "19:30" } },
  { day: "Saturday", short: "Sat", hours: { open: "13:00", close: "14:30" } },
];

/* ── Time helpers ── */

export function to12h(t: string): string {
  const [h, m] = t.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${m.toString().padStart(2, "0")} ${period}`;
}

export function hoursLabel(hours: DayHours): string {
  return hours ? `${to12h(hours.open)} – ${to12h(hours.close)}` : "Closed";
}

function toMinutes(t: string): number {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

/** Current weekday + minutes-since-midnight in the clinic's timezone (IST). */
function istNow(): { dayIndex: number; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const get = (type: string) =>
    parts.find((p) => p.type === type)?.value ?? "";

  const weekdayMap: Record<string, number> = {
    Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
  };

  const dayIndex = weekdayMap[get("weekday")] ?? new Date().getDay();
  const hour = parseInt(get("hour"), 10) % 24;
  const minute = parseInt(get("minute"), 10);

  return { dayIndex, minutes: hour * 60 + minute };
}

export type ClinicState = "open" | "closing-soon" | "opens-later" | "closed";

export type ClinicStatus = {
  state: ClinicState;
  label: string;
  detail: string;
  todayIndex: number;
  todayHoursLabel: string;
};

/** Live open/closed status, computed against IST. */
export function getClinicStatus(): ClinicStatus {
  const { dayIndex, minutes } = istNow();
  const today = SCHEDULE[dayIndex];
  const todayHoursLabel = hoursLabel(today.hours);

  const findNextOpen = (): ScheduleEntry | null => {
    for (let i = 1; i <= 7; i++) {
      const entry = SCHEDULE[(dayIndex + i) % 7];
      if (entry.hours) return entry;
    }
    return null;
  };

  if (today.hours) {
    const open = toMinutes(today.hours.open);
    const close = toMinutes(today.hours.close);

    if (minutes < open) {
      return {
        state: "opens-later",
        label: `Opens ${to12h(today.hours.open)}`,
        detail: `Today · closes ${to12h(today.hours.close)}`,
        todayIndex: dayIndex,
        todayHoursLabel,
      };
    }

    if (minutes >= open && minutes < close) {
      const closingSoon = close - minutes <= 30;
      return {
        state: closingSoon ? "closing-soon" : "open",
        label: closingSoon ? "Closing soon" : "Open now",
        detail: `Closes ${to12h(today.hours.close)}`,
        todayIndex: dayIndex,
        todayHoursLabel,
      };
    }
  }

  const next = findNextOpen();
  return {
    state: "closed",
    label: "Closed now",
    detail: next ? `Opens ${next.day} · ${to12h(next.hours!.open)}` : "Closed",
    todayIndex: dayIndex,
    todayHoursLabel,
  };
}

/* ── Specialties ───────────────────────────────────────────────── */

export type SpecialtyKey =
  | "joint"
  | "back"
  | "sports"
  | "hand"
  | "arthroscopy"
  | "fractures";

export type Specialty = {
  key: SpecialtyKey;
  title: string;
  blurb: string;
  description: string;
  chips: string[];
};

/** The six services as listed on Ortho 1's existing practice site. */
export const SPECIALTIES: Specialty[] = [
  {
    key: "joint",
    title: "Knee & Hip Replacement",
    blurb: "Joint arthroplasty",
    description:
      "Primary and complex knee and hip replacement surgery — restoring pain-free movement and lasting joint function.",
    chips: ["Knee", "Hip", "Arthroplasty"],
  },
  {
    key: "back",
    title: "Backache Problems",
    blurb: "Spine & back care",
    description:
      "Evaluation and treatment of back pain and spine conditions — surgical and non-surgical, personally managed by Dr. D'Almeida.",
    chips: ["Back Pain", "Spine", "Disc"],
  },
  {
    key: "sports",
    title: "Sports Medicine",
    blurb: "Injury & rehabilitation",
    description:
      "Ligament injuries, cartilage repair and structured rehabilitation — helping athletes return to play safely and confidently.",
    chips: ["Ligament", "Rehab", "Return-to-Play"],
  },
  {
    key: "hand",
    title: "Hand & Micro Vascular Surgery",
    blurb: "Fine surgical care",
    description:
      "Hand, wrist and micro-vascular procedures — delivered with the same precision and personal attention as every other speciality at Ortho 1.",
    chips: ["Hand", "Wrist", "Micro Surgery"],
  },
  {
    key: "arthroscopy",
    title: "Arthroscopic Surgery",
    blurb: "Keyhole procedures",
    description:
      "Minimally invasive keyhole surgery to diagnose and treat joint problems through small incisions — less pain, faster recovery.",
    chips: ["Keyhole", "Minimally Invasive", "Day-care"],
  },
  {
    key: "fractures",
    title: "Fractures",
    blurb: "Bone injury management",
    description:
      "Prompt, precise management of fractures and orthopaedic trauma — from simple breaks to complex bone and joint injuries.",
    chips: ["Fracture", "Trauma", "Fixation"],
  },
];

/* ── Conditions treated ── */

export type Condition = {
  title: string;
  blurb: string;
};

export const CONDITIONS: Condition[] = [
  { title: "Joint Pain", blurb: "Knee, hip & shoulder" },
  { title: "Sports & Ligament Injuries", blurb: "Injury & rehabilitation" },
  { title: "Fractures & Trauma", blurb: "Bone injury management" },
  { title: "Back Pain", blurb: "Spine & back care" },
  { title: "Geriatric Orthopaedics", blurb: "Care for older adults" },
  { title: "Degenerative Medicine", blurb: "Long-term joint conditions" },
  { title: "Hand, Foot & Ankle Problems", blurb: "Fine surgical care" },
];

/* ── Practice highlights ── */

export type Stat = { value: string; label: string };

export const STATS: Stat[] = [
  { value: "2009", label: "Practising Since" },
  { value: "6", label: "Specialty Areas" },
  { value: "5", label: "Countries Trained In" },
  { value: "Mon–Sat", label: "Clinic Days a Week" },
];

/* ── How a visit works ── */

export type JourneyStep = { step: string; title: string; text: string };

export const PATIENT_JOURNEY: JourneyStep[] = [
  {
    step: "01",
    title: "Consultation",
    text: "An unhurried conversation about your symptoms, history and how the problem affects daily life.",
  },
  {
    step: "02",
    title: "Assessment & Diagnosis",
    text: "Focused clinical examination and, where needed, imaging — all explained in plain language.",
  },
  {
    step: "03",
    title: "Personalised Plan",
    text: "A treatment plan built around you, weighing non-surgical options before any surgery is considered.",
  },
  {
    step: "04",
    title: "Treatment",
    text: "Whether guided rehabilitation or precise keyhole surgery, every step is discussed before it happens.",
  },
  {
    step: "05",
    title: "Recovery & Follow-up",
    text: "Structured follow-up and rehabilitation guidance, so you know what to expect at every stage.",
  },
];

/* ── Professional highlights ── */

export type HighlightKey = "faculty" | "global" | "focus";

export type Highlight = { key: HighlightKey; title: string; text: string };

export const HIGHLIGHTS: Highlight[] = [
  {
    key: "faculty",
    title: "Professor & Unit Chief",
    text: "Serves as professor and unit chief at Fr. Muller Medical College Hospital, Mangaluru — training the next generation of orthopaedic surgeons.",
  },
  {
    key: "global",
    title: "Internationally Trained",
    text: "Fellowship and training across Ireland, England, South Korea and the United States.",
  },
  {
    key: "focus",
    title: "Sub-specialised Focus",
    text: "Dedicated expertise in joint replacement and arthroscopic keyhole surgery of the knee.",
  },
];

/* ── Clinic locations ──────────────────────────────────────────── */

export type LocationKind = "primary" | "weekly" | "monthly" | "appointment";

export type Location = {
  name: string;
  building?: string;
  street?: string;
  area: string;
  city: string;
  pin?: string;
  timing?: string;
  phones?: { display: string; href: string }[];
  whatsapp?: { display: string; href: string };
  mapsUrl: string;
  kind: LocationKind;
};

export const LOCATIONS: Location[] = [
  {
    name: "Ortho 1 Speciality Clinic",
    building: "Amritha Poly Clinic",
    street: "KRR Road, Hampankatta",
    area: "near Jyothi Circle",
    city: "Mangaluru, Karnataka 575001",
    timing: "Monday to Saturday — see visiting hours",
    phones: [{ display: "94496 21341", href: "tel:+919449621341" }],
    mapsUrl: "https://share.google/ZeDK0t5Ikj9nBeTmX",
    kind: "primary",
  },
  {
    name: "Healthcare Medical Centre",
    building: "Akarshan Building",
    street: "Main Road",
    area: "Bajpe",
    city: "Mangaluru",
    timing: "Monday & Thursday",
    whatsapp: { display: "+91 74838 93488", href: "https://wa.me/917483893488" },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Akarshan+Building+Bajpe+Mangaluru",
    kind: "weekly",
  },
  {
    name: "Mount Rosary Hospital",
    area: "Alangar",
    city: "Moodubidri",
    timing: "Every Thursday · 4:30 – 7:00 PM",
    mapsUrl: "https://g.page/MountRosary?share",
    kind: "weekly",
  },
];

/* ── Press, research, articles & community appearances ────────── */

export type MediaCategory =
  | "research"
  | "article"
  | "video"
  | "community"
  | "press";

export type MediaItem = {
  date?: string;
  title: string;
  description?: string;
  source: string;
  url: string;
  category: MediaCategory;
};

export const MEDIA: MediaItem[] = [
  {
    date: "17 Jul 2026",
    title:
      "Father Muller Performs Coastal Karnataka's First Robotic Hip Replacement",
    description:
      "Dr. Vivian Roshan D'Almeida leads the region's first full robotic total hip replacement at Father Muller Medical College Hospital, Mangaluru.",
    source: "News Karnataka",
    url: "https://newskarnataka.com/mangaluru/father-muller-performs-coastal-karnatakas-first-robotic-hip-replacement-surgery/17072026/",
    category: "press",
  },
  {
    date: "03 Jan 2017",
    title: "Bolaike Daaiz — Konkani Health Show",
    description:
      "Dr. Vivian Roshan D'Almeida on the popular Konkani-language health programme.",
    source: "YouTube",
    url: "https://youtu.be/quuX7blZrU0",
    category: "video",
  },
  {
    date: "13 Jan 2017",
    title: "Know All About Total Knee Replacement",
    description:
      "Joint deterioration (osteoarthritis) affects every aspect of life — this article explains the path through total knee replacement.",
    source: "Daijiworld",
    url: "http://www.daijiworld.com/chan/exclusiveDisplay.aspx?articlesID=3917",
    category: "article",
  },
  {
    date: "28 Feb 2016",
    title: "Osteoporosis: All You Wanted to Know",
    description:
      "Osteoporosis weakens bone abnormally due to mineral loss, raising the chance of fractures even after a trivial injury.",
    source: "Daijiworld",
    url: "http://www.daijiworld.com/chan/exclusiveDisplay.aspx?articlesID=2539",
    category: "article",
  },
  {
    date: "04 Aug 2015",
    title: "Sports Injuries of the Knee",
    description:
      "Knee injuries can have long-term effects, especially in younger patients. An overview of anatomy, common injuries and treatment.",
    source: "Daijiworld",
    url: "http://www.daijiworld.com/chan/exclusiveDisplay.aspx?articlesID=2485",
    category: "article",
  },
  {
    title: "Scientific Contributions",
    description:
      "Peer-reviewed research papers and contributions by Dr. Vivian Roshan D'Almeida.",
    source: "ResearchGate",
    url: "https://www.researchgate.net/scientific-contributions/2097186200_Vivian_Roshan_DAlmeida",
    category: "research",
  },
  {
    date: "12 Jun 2017",
    title:
      "Proximal Femoral Nailing vs Dynamic Hip Screw — Intertrochanteric Fractures",
    description:
      "A comparative study of proximal femoral nailing versus the dynamic hip screw device in the surgical management of intertrochanteric fractures.",
    source: "International Journal of Orthopaedics Sciences",
    url: "http://www.orthopaper.com/archives/2017/vol3issue3/PartK/3-2-110-945.pdf",
    category: "research",
  },
  {
    date: "27 Feb 2013",
    title:
      "Arthroscopic Excision of Solitary Intra-articular Osteochondroma of the Knee",
    description:
      "Osteochondroma is the most common benign tumour of the growing bone, commonly involving the knee joint region.",
    source: "NCBI / PMC",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3597844/",
    category: "research",
  },
  {
    date: "31 Jan 2018",
    title: "SANJEEVINI — The Blood Donation Camp",
    description:
      "Held on 31 January 2018 at the AIMIT campus, Beeri, of St Aloysius College.",
    source: "St Aloysius Mangalore",
    url: "https://twitter.com/staloymangalore/status/958994456031694848",
    category: "community",
  },
  {
    date: "25 Nov 2017",
    title: "St Aloysius Hr Pr School Sports Day",
    description:
      "Today's Aloysians, Future Sportsmen of India — St Aloysius Higher Primary School Sports Day.",
    source: "Mangalorean.com",
    url: "http://www.mangalorean.com/todays-aloysians-future-sportsmen-of-india-st-aloysius-hr-pr-school-sports-day-kicks-off/",
    category: "community",
  },
  {
    title: "Dr Vivian D'Almeida Secures MRCS from Ireland",
    source: "Daijiworld",
    url: "http://www.daijiworld.com/news/newsDisplay.aspx?newsID=91915",
    category: "press",
  },
  {
    title: "Dr Vivian Roshan D'Almeida Bags Fifth Rank in MS Orthopaedics",
    source: "Daijiworld",
    url: "http://www.daijiworld.com/news/newsDisplay.aspx?newsID=71639",
    category: "press",
  },
  {
    title: "Dr Vivian Roshan D'Almeida Gets 5th Rank",
    source: "Mangalore Today",
    url: "http://www.mangaloretoday.com/newsbriefs/Dr-Vivian-Roshan-D-rsquo-Almeida-gets-5th-rank.html",
    category: "press",
  },
];

/** Human-readable label + ordering for media category badges. */
export const MEDIA_CATEGORY_LABEL: Record<MediaCategory, string> = {
  research: "Research",
  article: "Article",
  video: "Media",
  community: "Community",
  press: "Press",
};
