type Gtag = (...args: unknown[]) => void

/** Sends a custom event to Google Analytics (gtag.js loaded in index.html). No-ops if gtag is unavailable. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return
  const gtag = (window as unknown as { gtag?: Gtag }).gtag
  if (typeof gtag !== "function") return
  gtag("event", name, params)
}
