/**
 * Single source of truth for Dr. Vivian R D'Almeida's practice details.
 * All real-world data — contact, address, credentials, opening hours — lives here.
 * Sourced from the doctor's existing practice information and Google listing.
 */

export const DOCTOR = {
  name: "Dr. Vivian R D'Almeida",
  shortName: "Dr. D'Almeida",
  title: "Orthopaedic Surgeon",
  practice: "Ortho 1 Speciality Clinic",
  practiceTagline: "Orthopaedic Specialists Under One Roof",
  building: "Amritha Poly Clinic",
  affiliation: "Fr. Muller Medical College Hospital, Mangaluru",
  city: "Mangaluru",
  region: "Karnataka",
  phoneDisplay: "081474 21567",
  phoneHref: "tel:+918147421567",
  reviewsUrl:
    "https://www.google.com/search?q=Dr.+Vivian+R+D%27Almeida+Orthopaedic+Surgeon+Mangaluru",
  address: {
    line1: "KRR Road, Hampankatta",
    line2: "Mangaluru, Karnataka 575001",
    full: "KRR Road, Hampankatta, Mangaluru, Karnataka 575001",
  },
} as const;

export const MAPS_QUERY = encodeURIComponent(
  "Amritha Poly Clinic, KRR Road, Hampankatta, Mangaluru, Karnataka 575001"
);
export const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

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
  "Dr. Vivian R D'Almeida is an orthopaedic surgeon based in Mangaluru, specialised in joint replacement and arthroscopic keyhole surgeries.",
  "He currently serves as faculty at Fr. Muller Medical College Hospital, Mangaluru — combining everyday clinical practice with the training of the next generation of surgeons.",
  "After completing his MBBS at St. John's Medical College, Bangalore, he finished his MS in Orthopaedics in 2009. He went on to earn the MRCS from the Royal College of Surgeons of Ireland in 2010 and of England in 2011, followed by a fellowship in Knee Surgery at Paik Hospitals, Seoul in 2012. He has also trained in Sports Medicine at Ortho One Hospital, Coimbatore and the Hospital for Joint Diseases, New York University.",
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
  { day: "Monday", short: "Mon", hours: { open: "10:00", close: "11:30" } },
  { day: "Tuesday", short: "Tue", hours: { open: "17:00", close: "19:30" } },
  { day: "Wednesday", short: "Wed", hours: { open: "13:00", close: "14:30" } },
  { day: "Thursday", short: "Thu", hours: { open: "10:00", close: "11:30" } },
  { day: "Friday", short: "Fri", hours: { open: "17:00", close: "19:30" } },
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
  | "arthroscopy"
  | "knee"
  | "sports"
  | "trauma"
  | "arthritis";

export type Specialty = {
  key: SpecialtyKey;
  title: string;
  blurb: string;
  description: string;
  chips: string[];
};

export const SPECIALTIES: Specialty[] = [
  {
    key: "joint",
    title: "Joint Replacement",
    blurb: "Knee & hip replacement",
    description:
      "Primary and complex knee and hip replacement — including advanced joint surgery — to restore pain-free movement and lasting function.",
    chips: ["Knee", "Hip", "Advanced"],
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
    key: "knee",
    title: "Knee Surgery",
    blurb: "ACL, meniscus & cartilage",
    description:
      "Dedicated knee care — from ligament reconstruction and meniscal repair to cartilage procedures and persistent knee pain.",
    chips: ["ACL", "Meniscus", "Cartilage"],
  },
  {
    key: "sports",
    title: "Sports Medicine",
    blurb: "Injury & rehabilitation",
    description:
      "Treatment of sports and ligament injuries with structured rehabilitation, helping athletes return to play safely and confidently.",
    chips: ["Ligament", "Rehab", "Return-to-Play"],
  },
  {
    key: "trauma",
    title: "Fracture & Trauma Care",
    blurb: "Bone injury management",
    description:
      "Prompt, precise management of fractures and orthopaedic trauma — from simple breaks to complex bone and joint injuries.",
    chips: ["Fracture", "Trauma", "Fixation"],
  },
  {
    key: "arthritis",
    title: "Arthritis Management",
    blurb: "Bone & joint disorders",
    description:
      "Long-term care for arthritis and degenerative bone and joint disorders, with surgical and non-surgical options matched to your stage.",
    chips: ["Arthritis", "Joint Pain", "Non-surgical"],
  },
];

/* ── Conditions treated ── */

export const CONDITIONS: string[] = [
  "ACL Tears",
  "Meniscus Injuries",
  "Knee Pain",
  "Hip Pain",
  "Shoulder Pain",
  "Arthritis",
  "Sports Injuries",
  "Fractures & Trauma",
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
    title: "Faculty Surgeon",
    text: "Serves as faculty at Fr. Muller Medical College Hospital, Mangaluru — training the next generation of orthopaedic surgeons.",
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
