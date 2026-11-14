import type { LucideIcon } from "lucide-react"
import {
  Banknote,
  Building2,
  BusFront,
  GraduationCap,
  Layers,
  MapPinned,
  Network,
  Route,
  ShieldAlert,
  ShieldCheck,
  UserRound,
} from "lucide-react"

export type Feature = { icon: LucideIcon; title: string; text: string }

export const NAV_LINKS = [
  { label: "Problem", href: "#problem" },
  { label: "What we build", href: "#product" },
  { label: "How it works", href: "#how" },
  { label: "Methodology", href: "#roadmap" },
  { label: "Audience", href: "#who" },
] as const

export const PROBLEMS: Feature[] = [
  {
    icon: Network,
    title: "Fragmented Information",
    text: "Routes and transport information are spread across multiple disconnected sources.",
  },
  {
    icon: ShieldAlert,
    title: "Journey Uncertainty",
    text: "Commuters often don't know the fastest, safest, or most reliable option before leaving.",
  },
  {
    icon: Route,
    title: "Poor Visibility",
    text: "Travel times, estimated fares and multi-modal transfers are difficult to compare.",
  },
  {
    icon: BusFront,
    title: "Outdated Commuter Experience",
    text: "Public transport still lacks modern journey planning tools designed around commuters.",
  },
]

export const PRODUCTS: Feature[] = [
  {
    icon: Route,
    title: "Intelligent Journey Planning",
    text: "Compare routes across taxis, buses and trains in one unified view.",
  },
  {
    icon: MapPinned,
    title: "Discover Better Routes",
    text: "Find the best way to reach your destination with multi-modal directions.",
  },
  {
    icon: Network,
    title: "Compare Transport Options",
    text: "Evaluate travel times, transit modes, and transfers side-by-side.",
  },
  {
    icon: Banknote,
    title: "Fare Estimation",
    text: "Estimate travel costs and budget your commute before you leave home.",
  },
  {
    icon: Layers,
    title: "Transit Information",
    text: "Access reliable transport schedules and route data in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Saved Journeys",
    text: "Quickly access frequently travelled routes for smarter, faster travel decisions.",
  },
]

export const STEPS: Feature[] = [
  {
    icon: MapPinned,
    title: "1. Enter your destination",
    text: "Type where you want to go to instantly discover available transport routes.",
  },
  {
    icon: Route,
    title: "2. Compare options & fares",
    text: "Compare travel times, routes, and estimated fares across buses, trains, and taxis.",
  },
  {
    icon: BusFront,
    title: "3. Travel with confidence",
    text: "Choose the best journey for your commute and navigate public transport effortlessly.",
  },
]

export type Audience = { icon: LucideIcon; title: string; text: string; points: string[] }

export const AUDIENCES: Audience[] = [
  {
    icon: UserRound,
    title: "For commuters",
    text: "Plan everyday travel with complete clarity, accurate routes, and fare visibility.",
    points: [
      "Discover better routes",
      "Compare transport options & estimated costs",
      "Save time planning travel & travel with confidence",
    ],
  },
  {
    icon: BusFront,
    title: "For transport operators",
    text: "Improve route visibility, reach more commuters, and support digital transit intelligence.",
    points: [
      "Improve commuter access to transport information",
      "Increase network & route visibility",
      "Reach more commuters & support smarter mobility",
    ],
  },
  {
    icon: Building2,
    title: "For businesses & institutions",
    text: "Provide employees and students with reliable transit insights and travel planning.",
    points: [
      "Support employee mobility planning",
      "Support student travel & commute insights",
      "Enable smarter travel planning & prepare for future innovation",
    ],
  },
]

export type Phase = {
  tag: string
  title: string
  text: string
  status: "Current focus" | "Next" | "Later"
}

export const PHASES: Phase[] = [
  {
    tag: "Phase 1: Current Focus",
    title: "Discovery, validation and Journey Planning MVP",
    text: "Understand commuter needs, validate assumptions through research and stakeholder engagement, and build an intelligent journey planning platform that solves real mobility challenges.",
    status: "Current focus",
  },
  {
    tag: "Phase 2: Next",
    title: "Pilot Launch & Market Validation",
    text: "Launch controlled pilots, gather real commuter feedback, validate product-market fit and continuously improve the journey planning experience.",
    status: "Next",
  },
  {
    tag: "Phase 3: Later",
    title: "Growth & Scale",
    text: "Expand partnerships, grow the user base and evolve Commuttr into a broader connected mobility platform based on validated customer needs.",
    status: "Later",
  },
]

export const PARTNERS: Feature[] = [
  {
    icon: BusFront,
    title: "Transport Operators",
    text: "Helping improve commuter access to transport information.",
  },
  {
    icon: ShieldCheck,
    title: "Government & Strategic Partners",
    text: "Supporting innovation in connected public mobility.",
  },
  {
    icon: GraduationCap,
    title: "Businesses & Institutions",
    text: "Exploring smarter mobility experiences for employees and students.",
  },
]

export const FAQS = [
  {
    q: "What is Commuttr building today?",
    a: "Commuttr is an intelligent journey planning platform built for South African commuters. We help people discover routes, compare transport options, estimate journey costs, and navigate public transport with confidence.",
  },
  {
    q: "Where does Commuttr work?",
    a: "Commuttr currently works in Cape Town, with Golden Arrow, MyCiTi and Metrorail services. We plan to expand to other South African cities. If you’re outside Cape Town, follow us on social media or email hello@commuttr.co.za and we’ll let you know when we launch in your city.",
  },
  {
    q: "Which transport options are supported?",
    a: "Commuttr brings route and schedule data for Golden Arrow and MyCiTi buses and Metrorail trains together in one place. Minibus taxi routes aren\u2019t in the app yet; we\u2019re building towards them.",
  },
  {
    q: "How does Commuttr collect its information?",
    a: "Our schedules come from official sources: the timetables published by Golden Arrow, MyCiTi and Metrorail. On top of that, commuters report disruptions in the app, such as strikes, services not running or skipped stops, so everyone on that route sees what is happening.",
  },
  {
    q: "Is Commuttr information official?",
    a: "Our schedules are official: they come straight from the operators\u2019 published timetables. They are scheduled times, not live vehicle tracking. Disruption reports come from fellow commuters and are shown as rider reports. Commuttr is independent and is not affiliated with or endorsed by Golden Arrow, MyCiTi or Metrorail.",
  },
  {
    q: "Is Commuttr free to use?",
    a: "Yes. Commuttr is free for commuters on the web app, on Android and in the iOS beta. For businesses, we sell access to the Commuttr API, so you can build our South African transit schedules, routes and disruption data into your own products. Email hello@commuttr.co.za to find out more.",
  },
  {
    q: "How do I report a disruption?",
    a: "Tap Report a disruption on the home screen, choose the service (Golden Arrow, MyCiTi, Metrorail or Taxi), say what happened and where. Other riders see it straight away. Taxi schedules aren\u2019t in Commuttr yet, but taxi riders can already report taxi issues, so we record taxi disruptions while we build towards full taxi support.",
  },
  {
    q: "How do I get alerts for my routes?",
    a: "Open Preferences, then Notifications, to turn on journey updates and disruption alerts. Save your routes and set your Home and Work under Favourites so the alerts match the trips you actually take.",
  },
] as const

export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/commuttr/posts/?feedView=all" },
  { label: "Instagram", href: "https://www.instagram.com/p/DbiYzVECBAw/" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591064297485" },
] as const

export const APP_LINKS = {
  web: "https://app.commuttr.co.za",
  ios: "https://testflight.apple.com/join/DgWwZHmt",
  android:
    "https://play.google.com/store/apps/details?id=za.co.commuttr&pcampaignid=web_share",
} as const

export const ENDPOINTS = {
  contact:
    (import.meta.env.VITE_CONTACT_ENDPOINT as string) ||
    "https://script.google.com/macros/s/AKfycbwnmCI2y-C4rqkGtKYSEvbjZ7C7N8aoKK6Wi_TIEACebHbZaRpLXSKalH9co8b4oIgguQ/exec",
  waitlist:
    (import.meta.env.VITE_WAITLIST_ENDPOINT as string) ||
    "https://script.google.com/macros/s/AKfycbwpEn0ukizh-1zOAgNWnC__jvTJj0PoR0iGubUFQH1baqIiq8FQflFrn8MMAVvXM4w/exec",
} as const

export const CONTACT = {
  email: "hello@commuttr.co.za",
  hq: "South Africa",
  /** Google Apps Script Web App endpoint backing the contact form. */
  formEndpoint: ENDPOINTS.contact,
} as const

export const WAITLIST = {
  endpoint: ENDPOINTS.waitlist,
  transportModes: [
    "Taxi",
    "Bus",
    "Train",
    "E-hailing",
    "Walking",
    "Multiple",
  ] as const,
} as const

