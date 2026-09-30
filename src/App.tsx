import * as React from "react"

import { Nav } from "@/components/sections/Nav"
import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"
import { Products } from "@/components/sections/Products"
import { AppShowcase } from "@/components/sections/AppShowcase"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { Principles } from "@/components/sections/Principles"
import { Audiences } from "@/components/sections/Audiences"
import { Roadmap } from "@/components/sections/Roadmap"
import { Ecosystem } from "@/components/sections/Ecosystem"
import { Team } from "@/components/sections/Team"
import { Faq } from "@/components/sections/Faq"
import { Waitlist } from "@/components/sections/Waitlist"
import { PartnerPage } from "@/components/pages/PartnerPage"
import { PrivacyPage } from "@/components/pages/PrivacyPage"
import { Footer } from "@/components/sections/Footer"
import { setPageMeta } from "@/lib/seo"

const HOME_META = {
  title: "Commuttr: Intelligent Journey Planning for South Africa",
  description:
    "Commuttr helps South African commuters discover routes, compare transport options, estimate fares, and navigate public transport with confidence.",
  path: "/",
}

const PARTNER_META = {
  title: "Partner With Us | Commuttr",
  description:
    "Partner with Commuttr to help build South Africa's intelligent journey planning platform for commuters, transport operators, and institutions.",
  path: "/partner",
}

const PRIVACY_META = {
  title: "Privacy Policy | Commuttr",
  description:
    "Read how Commuttr collects, uses, and protects the personal information of website visitors and commuters, in line with South Africa's POPIA.",
  path: "/privacy",
}

export default function App() {
  const [path, setPath] = React.useState(() => window.location.pathname)

  React.useEffect(() => {
    const onLocationChange = () => {
      setPath(window.location.pathname)
    }
    window.addEventListener("popstate", onLocationChange)
    return () => window.removeEventListener("popstate", onLocationChange)
  }, [])

  const isPartnerPage =
    path === "/partner" ||
    path === "/contact" ||
    path === "/partner-with-us"

  const isPrivacyPage =
    path === "/privacy" ||
    path === "/privacy-policy"

  React.useEffect(() => {
    setPageMeta(isPartnerPage ? PARTNER_META : isPrivacyPage ? PRIVACY_META : HOME_META)
  }, [isPartnerPage, isPrivacyPage])

  React.useEffect(() => {
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
    if (typeof gtag !== "function") return
    gtag("event", "page_view", {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [path])

  return (
    <div className="relative min-h-screen bg-ink">
      <Nav />
      <main>
        {isPartnerPage ? (
          <PartnerPage />
        ) : isPrivacyPage ? (
          <PrivacyPage />
        ) : (
          <>
            <Hero />
            <Problem />
            <Products />
            <AppShowcase />
            <HowItWorks />
            <Principles />
            <Audiences />
            <Roadmap />
            <Ecosystem />
            <Team />
            <Faq />
            <Waitlist />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
