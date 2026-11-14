import {
  ArrowLeftRight,
  ArrowRight,
  ArrowUpDown,
  Bell,
  BusFront,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Clock,
  HelpCircle,
  Info,
  LocateFixed,
  MapPin,
  MoreVertical,
  Navigation,
  Plus,
  Route,
  SlidersHorizontal,
  Square,
  TrainFront,
  X,
} from "lucide-react"

import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { AppTabBar } from "./PhoneMockup"
import { addMinutes, duration, greeting, hhmm, shortDate, useNow } from "./useNow"

const BRAND = "#f63d06"

/* ---------------- 1. Home Screen: plan a journey ---------------- */

type Leg = { operator: string; line: string }

type RouteOption = {
  icon: LucideIcon
  duration: number
  legs: Leg[]
  from: string
  to: string
  detail: string
  fare: string
  tickets?: string
  /** minutes from now */
  departsIn: number
}

const RECOMMENDED: RouteOption[] = [
  {
    icon: TrainFront,
    duration: 16,
    legs: [{ operator: "Metrorail", line: "Northern Line" }],
    from: "Bellville Station",
    to: "Cape Town Station",
    detail: "Direct · 400 m walk",
    fare: "R25",
    departsIn: 4,
  },
  {
    icon: BusFront,
    duration: 22,
    legs: [{ operator: "Golden Arrow", line: "Hout Bay via CBD" }],
    from: "Bellville Station",
    to: "Civic Centre",
    detail: "6 stops · 600 m walk",
    fare: "R14",
    departsIn: 7,
  },
]

/* Mirrors the app's "Journeys with a change" list: two legs, one transfer. */
const WITH_CHANGE: RouteOption = {
  icon: ArrowLeftRight,
  duration: 34,
  legs: [
    { operator: "Metrorail", line: "Northern Line" },
    { operator: "MyCiTi", line: "T01" },
  ],
  from: "Bellville Station",
  to: "Civic Centre",
  detail: "1 change at Cape Town Station",
  fare: "R31.50",
  tickets: "2 tickets",
  departsIn: 9,
}

/* Route card laid out like the app: duration | route | fare & departure,
   each column split by a hairline so every card lines up. */
function RouteCard({ route, now }: { route: RouteOption; now: Date }) {
  const Icon = route.icon
  return (
    <div className="flex items-stretch rounded-xl border border-white/[0.07] bg-[#131418] py-2 pl-1.5 pr-1">
      <div className="flex w-9 shrink-0 flex-col items-center justify-center gap-1 border-r border-white/[0.07] pr-1.5">
        <p className="text-[12px] font-bold leading-none text-white">
          {route.duration}
          <span className="ml-0.5 text-[7.5px] font-medium text-mist">min</span>
        </p>
        <Icon className="size-3.5 text-mist" />
      </div>

      <div className="min-w-0 flex-1 px-2 leading-tight">
        <div className="space-y-0.5">
          {route.legs.map((leg, i) => (
            <div key={leg.operator + leg.line} className="flex items-center gap-1">
              <span className="shrink-0 rounded bg-[#f63d06] px-1.5 py-px text-[8.5px] font-bold text-white">
                {leg.operator}
              </span>
              <span className="truncate rounded border border-white/15 px-1 py-px text-[8.5px] font-semibold text-white">
                {leg.line}
              </span>
              {i < route.legs.length - 1 && (
                <ArrowRight className="size-2.5 shrink-0 text-mist" />
              )}
            </div>
          ))}
        </div>
        <p className="mt-1 truncate text-[9.5px] text-mist">
          {route.from} <span className="text-white/70">→</span> {route.to}
        </p>
        <p className="mt-0.5 truncate text-[8.5px] text-mist/80">{route.detail}</p>
      </div>

      <div className="flex w-16 shrink-0 flex-col items-end justify-center gap-0.5 border-l border-white/[0.07] pl-1.5 text-right leading-tight">
        <span className="rounded bg-white/[0.08] px-1.5 py-px text-[9.5px] font-bold text-white">
          {route.fare}
        </span>
        {route.tickets && <span className="text-[7.5px] text-mist">{route.tickets}</span>}
        <span className="mt-0.5 whitespace-nowrap text-[8px] font-semibold text-[#f63d06]">
          Departs {hhmm(addMinutes(now, route.departsIn))}
        </span>
        <span className="text-[7.5px] text-mist">in {route.departsIn} min</span>
      </div>

      <div className="flex shrink-0 items-center pl-0.5">
        <ChevronRight className="size-3 text-mist/60" />
      </div>
    </div>
  )
}

export function HomeScreen() {
  const now = useNow()
  return (
    <div className="flex flex-1 flex-col bg-[#0c0d10] text-white">
      <div className="flex flex-1 flex-col px-3.5 pt-4">
        {/* Greeting */}
        <header className="flex items-center justify-between">
          <p className="text-[13px] font-bold text-white">{greeting(now)}</p>
          <span className="relative text-mist">
            <Bell className="size-4" />
            <span className="absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-[#f63d06]" />
          </span>
        </header>

        {/* Search intent */}
        <div className="mt-2 leading-tight">
          <h2 className="text-[15px] font-bold tracking-tight text-white">
            Where we commuting to?
          </h2>
          <p className="mt-0.5 text-[10.5px] text-mist">Plan smarter. Move better.</p>
        </div>

        {/* From / To */}
        <div className="relative mt-2">
          <div className="space-y-1.5 pr-9">
            <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-[#131418] px-2.5 py-1.5">
              <span className="size-2.5 shrink-0 rounded-full border-2 border-mist/70" />
              <div className="min-w-0 flex-1 leading-tight">
                <p className="text-[9px] text-mist">From</p>
                <p className="truncate text-[11.5px] font-semibold text-white">
                  Bellville Station, Cape Town
                </p>
              </div>
              <X className="size-3 shrink-0 text-mist/70" />
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-[#131418] px-2.5 py-1.5">
              <MapPin className="size-3 shrink-0 text-[#f63d06]" />
              <div className="min-w-0 flex-1 leading-tight">
                <p className="text-[9px] text-mist">To</p>
                <p className="truncate text-[11.5px] font-semibold text-white">
                  Cape Town CBD, Civic Centre
                </p>
              </div>
              <X className="size-3 shrink-0 text-mist/70" />
            </div>
          </div>
          <span className="absolute right-0 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.07] bg-[#1b1c21] text-white">
            <ArrowUpDown className="size-3.5" />
          </span>
        </div>

        {/* Depart / filter */}
        <div className="mt-2 flex items-center justify-between text-[10.5px] font-semibold text-mist">
          <span className="flex items-center gap-1.5">
            <Clock className="size-3" /> Depart now <ChevronDown className="size-2.5" />
          </span>
          <span className="flex items-center gap-1.5">
            Filter <SlidersHorizontal className="size-3" />
          </span>
        </div>

        {/* Recommended routes */}
        <p className="mt-2 text-[11.5px] font-bold text-white">Recommended routes</p>
        <div className="mt-1 space-y-1">
          {RECOMMENDED.map((r) => (
            <RouteCard key={r.legs[0].operator} route={r} now={now} />
          ))}
        </div>

        {/* Journeys with a change */}
        <p className="mt-2 text-[11.5px] font-bold text-white">Journeys with a change</p>
        <div className="mt-1">
          <RouteCard route={WITH_CHANGE} now={now} />
        </div>

        {/* Planner preview */}
        <p className="mt-2 text-[11.5px] font-bold text-white">Your planner</p>
        <div className="mt-1.5 rounded-xl border border-white/[0.07] bg-[#131418] p-2">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1 leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="flex size-3.5 shrink-0 items-center justify-center rounded-full border border-[#f63d06] text-[8px] font-bold text-[#f63d06]">
                  1
                </span>
                <p className="truncate text-[10.5px] font-bold text-white">Bellville Station</p>
              </div>
              <p className="ml-5 mt-0.5 text-[9px] text-mist">
                Departs {hhmm(addMinutes(now, 15))} · Platform A1
              </p>
            </div>
            <span className="shrink-0 text-[9px] font-semibold text-[#f63d06]">
              MyCiTi Bus T01
            </span>
          </div>
          <div className="mt-1.5 leading-tight">
            <div className="flex items-center gap-1.5">
              <span className="flex size-3.5 shrink-0 items-center justify-center rounded-full border border-[#f63d06] text-[8px] font-bold text-[#f63d06]">
                2
              </span>
              <p className="truncate text-[10.5px] font-bold text-white">Adderley St</p>
            </div>
            <p className="ml-5 mt-0.5 text-[9px] text-mist">Arrives {hhmm(addMinutes(now, 31))}</p>
          </div>
          <button className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#f63d06] py-1.5 text-[11px] font-bold text-white">
            Start journey <ChevronRight className="size-3" />
          </button>
        </div>
      </div>
      <AppTabBar active={0} />
    </div>
  )
}

/* ---------------- 2. Planner Screen: saved journeys ---------------- */

const PLANNED_JOURNEYS = [
  {
    index: 1,
    startsIn: 15,
    minutes: 16,
    operator: "Golden Arrow",
    line: "2311",
    from: "Bellville Station",
    fromMeta: "Platform A1",
    to: "Adderley St",
    toMeta: "Stop ID 0487",
  },
  {
    index: 2,
    startsIn: 65,
    minutes: 23,
    operator: "Golden Arrow",
    line: "T01",
    from: "Adderley St",
    fromMeta: "Stop ID 0487",
    to: "Civic Centre",
    toMeta: "Stop ID 0293",
  },
  {
    index: 3,
    startsIn: 130,
    minutes: 24,
    operator: "Golden Arrow",
    line: "101A",
    from: "Civic Centre",
    fromMeta: "Stop ID 0293",
    to: "Strand St",
    toMeta: "Stop ID 0211",
  },
]

export function PlannerScreen() {
  const realNow = useNow()
  const totalMinutes = PLANNED_JOURNEYS.reduce((sum, j) => sum + j.minutes, 0)
  // Journeys start shortly after the visitor's current time. Late at night that
  // would spill past midnight under a "Today" label, so the day's plan moves to
  // tomorrow morning instead.
  const last = PLANNED_JOURNEYS[PLANNED_JOURNEYS.length - 1]
  const spillsPastMidnight =
    addMinutes(realNow, last.startsIn + last.minutes).getDate() !== realNow.getDate()
  const now = spillsPastMidnight
    ? new Date(realNow.getFullYear(), realNow.getMonth(), realNow.getDate() + 1, 6, 0)
    : realNow
  const dayLabel = spillsPastMidnight ? "Tomorrow" : "Today"
  return (
    <div className="flex flex-1 flex-col bg-[#0c0d10] text-white">
      <div className="flex flex-1 flex-col px-3.5 pt-4">
        {/* Header */}
        <header className="flex items-start justify-between">
          <div className="leading-tight">
            <h2 className="text-[15px] font-bold tracking-tight text-white">Planner</h2>
            <p className="mt-0.5 text-[10px] text-mist">Your saved journeys for the day.</p>
          </div>
          <span className="flex items-center gap-1 text-[10.5px] font-semibold text-[#f63d06]">
            <Plus className="size-3.5" /> Add journey
          </span>
        </header>

        {/* Date selector */}
        <div className="mt-2 flex items-center justify-between rounded-xl border border-white/[0.07] bg-[#131418] px-2.5 py-1">
          <ChevronLeft className="size-3.5 text-mist" />
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-white">
            <CalendarDays className="size-3.5 text-mist" /> {dayLabel}, {shortDate(now)}
            <ChevronDown className="size-2.5 text-mist" />
          </span>
          <ChevronRight className="size-3.5 text-mist" />
        </div>

        {/* Trip summary */}
        <div className="mt-1.5 grid grid-cols-3 divide-x divide-white/[0.07] rounded-xl border border-white/[0.07] bg-[#131418] py-1.5 text-center">
          {[
            { icon: Route, value: "3", label: "Journeys" },
            { icon: Clock, value: duration(totalMinutes), label: "Total travel time" },
            { icon: BusFront, value: "Golden Arrow", label: "Transport mode" },
          ].map((s) => {
            const Icon = s.icon
            return (
              <div key={s.label} className="px-0.5 leading-tight">
                <div className="flex items-center justify-center gap-0.5">
                  <Icon className="size-3 shrink-0 text-mist" />
                  <span className="truncate text-[9.5px] font-bold text-[#f63d06]">
                    {s.value}
                  </span>
                </div>
                <p className="mt-0.5 truncate text-[8.5px] text-mist">{s.label}</p>
              </div>
            )
          })}
        </div>

        {/* Tabs */}
        <div className="mt-1.5 grid grid-cols-2 rounded-xl border border-white/[0.07] bg-[#131418] text-center text-[11px] font-semibold">
          <span className="border-b-2 border-[#f63d06] py-1.5 text-[#f63d06]">Planned</span>
          <span className="border-b-2 border-transparent py-1.5 text-mist">Completed</span>
        </div>

        {/* Journey cards */}
        <div className="mt-2 space-y-1.5">
          {PLANNED_JOURNEYS.map((j) => (
            <div
              key={j.index}
              className="rounded-xl border border-white/[0.07] bg-[#131418] p-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="flex size-4 items-center justify-center rounded-full border border-[#f63d06] text-[8.5px] font-bold text-[#f63d06]">
                    {j.index}
                  </span>
                  <p className="text-[12px] font-bold text-white">
                    {hhmm(addMinutes(now, j.startsIn))} → {hhmm(addMinutes(now, j.startsIn + j.minutes))}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="rounded bg-white/[0.08] px-1.5 py-px text-[8.5px] font-semibold text-white">
                    {duration(j.minutes)}
                  </span>
                  <MoreVertical className="size-3 text-mist" />
                </div>
              </div>

              <div className="ml-5.5 mt-1 flex items-center gap-1">
                <span className="rounded bg-[#f63d06] px-1.5 py-px text-[8.5px] font-bold text-white">
                  {j.operator}
                </span>
                <span className="rounded border border-white/15 px-1.5 py-px text-[8.5px] font-semibold text-white">
                  {j.line}
                </span>
              </div>

              <div className="ml-5.5 mt-1.5 space-y-1">
                <div className="flex items-start gap-1.5 leading-tight">
                  <span className="mt-0.5 size-2 shrink-0 rounded-full border-2 border-[#f63d06]" />
                  <div className="min-w-0">
                    <p className="truncate text-[10.5px] font-semibold text-white">{j.from}</p>
                    <p className="text-[8.5px] text-mist">{j.fromMeta}</p>
                  </div>
                </div>
                <div className="flex items-start gap-1.5 leading-tight">
                  <span className="mt-0.5 size-2 shrink-0 rounded-full border-2 border-white" />
                  <div className="min-w-0">
                    <p className="truncate text-[10.5px] font-semibold text-white">{j.to}</p>
                    <p className="text-[8.5px] text-mist">{j.toMeta}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estimate note */}
        <div className="mt-1 flex items-center gap-1.5 rounded-xl border border-white/[0.07] bg-[#131418] px-2 py-1.5 text-[9px] text-mist">
          <Info className="size-3 shrink-0" />
          Times are estimated — arrive at your stop 5 minutes early.
        </div>
      </div>
      <AppTabBar active={1} />
    </div>
  )
}

/* ---------------- 3. Live Journey Screen: trip in progress ---------------- */

const LIVE_STOPS = [
  { label: "Bellville Station", state: "done" },
  { label: "Adderley St", state: "current" },
  { label: "Strand St", state: "upcoming" },
  { label: "Civic Centre", state: "upcoming" },
  { label: "Kaapstad", state: "upcoming" },
]

function TripMap() {
  return (
    <div className="relative mt-2 h-[112px] overflow-hidden rounded-xl border border-white/[0.07] bg-[#101115]">
      <svg viewBox="0 0 260 92" className="absolute inset-0 size-full" aria-hidden>
        {/* Faint street grid */}
        <g stroke="rgba(255,255,255,0.05)" strokeWidth="6">
          <path d="M-10 20 H270" />
          <path d="M-10 58 H270" />
          <path d="M40 -10 V102" />
          <path d="M130 -10 V102" />
          <path d="M205 -10 V102" />
        </g>
        {/* Travelled route */}
        <polyline
          points="18,44 62,62 92,54 132,46"
          fill="none"
          stroke={BRAND}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Remaining route */}
        <polyline
          points="132,46 172,30 210,34"
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="2.5"
          strokeDasharray="5 5"
          strokeLinecap="round"
        />
        <circle cx="18" cy="44" r="4" fill="#ffffff" />
        <circle cx="62" cy="62" r="3.5" fill={BRAND} />
        <circle cx="92" cy="54" r="3.5" fill={BRAND} />
        <circle cx="210" cy="34" r="4" fill="rgba(255,255,255,0.55)" />
      </svg>

      {/* Origin / destination labels */}
      <span className="absolute left-2 top-2 rounded-md bg-[#1b1c21] px-1.5 py-0.5 text-[8px] font-semibold text-white ring-1 ring-white/10">
        Bellville Station
      </span>
      <span className="absolute right-2 top-2 rounded-md bg-[#1b1c21] px-1.5 py-0.5 text-[8px] font-semibold text-white ring-1 ring-white/10">
        Adderley St
      </span>

      {/* Live vehicle marker */}
      <span className="absolute left-[47%] top-[42%] flex size-6 items-center justify-center rounded-full bg-white text-[#f63d06] shadow-md ring-2 ring-[#f63d06]">
        <BusFront className="size-3.5" />
      </span>

      {/* Map controls */}
      <div className="absolute bottom-2 right-2 flex flex-col gap-1">
        <span className="flex size-5 items-center justify-center rounded-md bg-[#1b1c21] text-white ring-1 ring-white/10">
          <LocateFixed className="size-3" />
        </span>
        <span className="flex size-5 items-center justify-center rounded-md bg-[#1b1c21] text-white ring-1 ring-white/10">
          <Navigation className="size-3" />
        </span>
      </div>
    </div>
  )
}

export function LiveJourneyScreen() {
  const now = useNow()
  return (
    <div className="flex flex-1 flex-col bg-[#0c0d10] text-white">
      <div className="flex flex-1 flex-col px-3.5 pt-4">
        {/* Header */}
        <header className="flex items-start justify-between">
          <div className="leading-tight">
            <h2 className="text-[15px] font-bold tracking-tight text-white">Live Journey</h2>
            <p className="mt-0.5 text-[10px] text-mist">You&rsquo;re on your way</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-lg border border-white/15 px-2 py-1 text-[10px] font-semibold text-[#f63d06]">
            <Square className="size-2.5" /> End journey
          </span>
        </header>

        {/* Active trip */}
        <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/[0.07] bg-[#131418] p-2">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-white">
            <BusFront className="size-3.5" />
          </span>
          <div className="min-w-0 flex-1 leading-tight">
            <div className="flex items-center gap-1">
              <span className="rounded bg-[#f63d06] px-1.5 py-px text-[8.5px] font-bold text-white">
                Golden Arrow
              </span>
              <span className="rounded border border-white/15 px-1.5 py-px text-[8.5px] font-semibold text-white">
                2311
              </span>
            </div>
            <p className="mt-1 truncate text-[9.5px] text-mist">
              Bellville Station <span className="text-white/70">→</span> Adderley St
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-0.5 rounded-lg border border-white/15 px-1.5 py-1 text-[8.5px] font-semibold text-white">
            View trip <ChevronRight className="size-2.5" />
          </span>
        </div>

        {/* Next stop + progress */}
        <div className="mt-2 rounded-xl border border-white/[0.07] bg-[#131418] p-2.5">
          <div className="flex items-start justify-between">
            <div className="leading-tight">
              <p className="text-[9px] text-mist">Next stop in</p>
              <p className="mt-0.5 text-[13.5px] font-bold text-white">
                4 stops <span className="text-[10.5px] text-[#f63d06]">(12 min)</span>
              </p>
            </div>
            <span className="flex items-center gap-1 text-[10px] font-semibold text-[#f63d06]">
              <Bell className="size-3" /> Get off
            </span>
          </div>

          <div className="mt-1.5 leading-tight">
            <p className="text-[12.5px] font-bold text-white">Adderley St</p>
            <p className="text-[9px] text-mist">Stop ID 0487</p>
          </div>

          {/* Horizontal stop tracker */}
          <div className="relative mt-2.5">
            <div className="absolute left-[10%] right-[10%] top-[5px] h-0.5 bg-white/15" />
            <div className="absolute left-[10%] top-[5px] h-0.5 w-[20%] bg-[#f63d06]" />
            <div className="relative flex justify-between">
              {LIVE_STOPS.map((s) => (
                <div key={s.label} className="flex w-1/5 flex-col items-center gap-1">
                  <span
                    className={cn(
                      "rounded-full",
                      s.state === "current"
                        ? "flex size-3 items-center justify-center bg-[#f63d06] ring-2 ring-[#131418]"
                        : s.state === "done"
                          ? "mt-[1px] size-2.5 border-2 border-[#f63d06] bg-[#131418]"
                          : "mt-[1px] size-2.5 bg-white/35"
                    )}
                  />
                  <span
                    className={cn(
                      "text-center text-[8.5px] leading-tight",
                      s.state === "current"
                        ? "font-bold text-[#f63d06]"
                        : "font-medium text-mist"
                    )}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <TripMap />

        {/* Trip timeline */}
        <div className="mt-2 rounded-xl border border-white/[0.07] bg-[#131418] p-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-white">Your trip</p>
            <p className="text-[8.5px] text-mist">Total travel time: 16 min</p>
          </div>

          <div className="relative mt-1.5 space-y-1.5">
            {[
              { time: hhmm(addMinutes(now, -4)), name: "Bellville Station", meta: "Platform A1", state: "done" },
              { time: hhmm(addMinutes(now, 12)), name: "Adderley St", meta: "Stop ID 0487", state: "current" },
              { time: "—", name: "2 more stops", meta: "", state: "upcoming" },
              { time: hhmm(addMinutes(now, 28)), name: "Civic Centre", meta: "Stop ID 0293 · est.", state: "upcoming" },
            ].map((row) => (
              <div key={row.name} className="flex items-start gap-1.5">
                <span className="w-8 shrink-0 pt-px text-right text-[8.5px] font-semibold text-mist">
                  {row.time}
                </span>
                <span
                  className={cn(
                    "mt-1 size-2 shrink-0 rounded-full",
                    row.state === "done"
                      ? "bg-[#f63d06]"
                      : row.state === "current"
                        ? "border-2 border-[#f63d06]"
                        : "border-2 border-white"
                  )}
                />
                <div className="min-w-0 flex-1 leading-tight">
                  <p
                    className={cn(
                      "truncate text-[10.5px]",
                      row.meta ? "font-semibold text-white" : "text-mist"
                    )}
                  >
                    {row.name}
                  </p>
                  {row.meta ? <p className="text-[8.5px] text-mist">{row.meta}</p> : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support */}
        <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/[0.07] bg-[#131418] p-2">
          <HelpCircle className="size-4 shrink-0 text-mist" />
          <div className="min-w-0 flex-1 leading-tight">
            <p className="text-[10.5px] font-bold text-white">Need help?</p>
            <p className="text-[8.5px] text-mist">Get support or report an issue on this trip.</p>
          </div>
          <span className="shrink-0 rounded-lg border border-white/15 px-2 py-1 text-[9px] font-semibold text-[#f63d06]">
            Get help
          </span>
        </div>
      </div>
      <AppTabBar active={2} />
    </div>
  )
}
