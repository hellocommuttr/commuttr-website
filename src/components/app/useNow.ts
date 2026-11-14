import * as React from "react"

/**
 * The visitor's current time, refreshed when the minute changes, so the phone
 * mockups (status-bar clock, greeting, departure times, planner date) read as
 * live rather than frozen at a fixed moment.
 */
export function useNow() {
  const [now, setNow] = React.useState(() => new Date())

  React.useEffect(() => {
    const id = window.setInterval(() => {
      const next = new Date()
      setNow((prev) => (prev.getMinutes() === next.getMinutes() ? prev : next))
    }, 15_000)
    return () => window.clearInterval(id)
  }, [])

  return now
}

/** `now` shifted by a number of minutes. */
export function addMinutes(date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * 60_000)
}

/** 24-hour "HH:MM", as the app shows departure and arrival times. */
export function hhmm(date: Date) {
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`
}

/** Status-bar clock: "9:41" style, no leading zero on the hour. */
export function clock(date: Date) {
  return `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`
}

export function greeting(date: Date) {
  const h = date.getHours()
  if (h >= 5 && h < 12) return "Good morning"
  if (h >= 12 && h < 17) return "Good afternoon"
  return "Good evening"
}

/** "14 Nov 2026" */
export function shortDate(date: Date) {
  return date.toLocaleDateString("en-ZA", { day: "numeric", month: "short", year: "numeric" })
}

/** "1h 3m" / "45 min" */
export function duration(minutes: number) {
  if (minutes < 60) return `${minutes} min`
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`
}
