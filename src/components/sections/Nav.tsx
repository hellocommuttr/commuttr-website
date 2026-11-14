import * as React from "react"
import { ArrowRight, Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Wordmark } from "@/components/brand/Wordmark"
import { NAV_LINKS } from "@/data/content"
import { trackEvent } from "@/lib/analytics"

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the drawer on Escape, and whenever the viewport grows into the
  // desktop nav so the two can never be open at once.
  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    const mq = window.matchMedia("(min-width: 1024px)")
    const onChange = () => mq.matches && setOpen(false)
    window.addEventListener("keydown", onKey)
    mq.addEventListener("change", onChange)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      mq.removeEventListener("change", onChange)
      document.body.style.overflow = ""
    }
  }, [open])

  const navigateTo = (path: string, hash: string = "") => (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)
    const targetUrl = path + hash
    if (window.location.pathname !== path) {
      window.history.pushState({}, "", targetUrl)
      window.dispatchEvent(new Event("popstate"))
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash)
          if (el) el.scrollIntoView({ behavior: "smooth" })
        }, 100)
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    } else if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      } else {
        window.location.hash = hash
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div
        className={cn(
          "mx-auto max-w-[1440px] overflow-hidden border transition-[background-color,border-color,box-shadow,border-radius] duration-300",
          open ? "rounded-[1.75rem]" : "rounded-[2rem]",
          open
            ? "border-white/10 bg-carbon shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
            : scrolled
            ? "border-white/10 bg-carbon/85 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            : "border-white/[0.08] bg-carbon/60 backdrop-blur-md"
        )}
      >
      <div className="flex h-14 w-full items-center justify-between gap-4 pl-5 pr-2 sm:h-16 sm:pl-6 sm:pr-3">
        <a
          href="/"
          onClick={navigateTo("/", "")}
          className="flex shrink-0 items-center py-2"
          aria-label="Commuttr home"
        >
          <Wordmark className="text-[1.2rem] sm:text-[1.35rem]" />
        </a>

        {/* Desktop nav — only once there is room for every link on one line */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                if (window.location.pathname !== "/") {
                  navigateTo("/", link.href)(e)
                }
              }}
              className="whitespace-nowrap rounded-full px-3 py-2 text-sm text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Button variant="ghost" size="sm" asChild>
            <a
              href="/#waitlist"
              onClick={(e) => {
                trackEvent("try_commuttr_click", { location: "desktop_nav" })
                navigateTo("/", "#waitlist")(e)
              }}
              className="whitespace-nowrap"
            >
              Try Commuttr
            </a>
          </Button>
          <Button size="sm" asChild>
            <a
              href="/partner"
              onClick={(e) => {
                trackEvent("partner_click", { location: "desktop_nav" })
                navigateTo("/partner")(e)
              }}
              className="whitespace-nowrap"
            >
              Partner with us <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>

        {/* Mobile / tablet trigger */}
        <button
          type="button"
          className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/[0.06] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile / tablet drawer */}
      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-white/[0.06] transition-[max-height] duration-300 ease-out lg:hidden",
          open ? "max-h-[80vh] border-t" : "max-h-0"
        )}
      >
        <nav className="flex max-h-[80vh] flex-col gap-1 overflow-y-auto px-5 py-4 sm:px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                setOpen(false)
                if (window.location.pathname !== "/") {
                  navigateTo("/", link.href)(e)
                }
              }}
              className="rounded-xl px-3 py-3 text-base text-white/75 transition-colors hover:bg-white/[0.05] hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-2 border-t border-white/[0.06] pt-4">
            <Button variant="outline" className="w-full" asChild>
              <a
                href="/#waitlist"
                onClick={(e) => {
                  trackEvent("try_commuttr_click", { location: "mobile_drawer" })
                  navigateTo("/", "#waitlist")(e)
                }}
              >
                Try Commuttr
              </a>
            </Button>
            <Button className="w-full" asChild>
              <a
                href="/partner"
                onClick={(e) => {
                  trackEvent("partner_click", { location: "mobile_drawer" })
                  navigateTo("/partner")(e)
                }}
              >
                Partner with us
              </a>
            </Button>
          </div>
        </nav>
      </div>
      </div>
    </header>
  )
}
