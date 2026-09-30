import * as React from "react"
import { ArrowLeft, ShieldCheck } from "lucide-react"

import { Container } from "@/components/Container"
import { CONTACT } from "@/data/content"

export function PrivacyPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navigateHome = (e: React.MouseEvent) => {
    e.preventDefault()
    window.history.pushState({}, "", "/")
    window.dispatchEvent(new Event("popstate"))
  }

  return (
    <div className="pt-24 pb-16 sm:pt-28 md:pt-36">
      <Container>
        {/* Back Link */}
        <div className="mb-8">
          <a
            href="/"
            onClick={navigateHome}
            className="inline-flex items-center gap-2 text-sm font-medium text-mist transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4 text-signal" /> Back to Commuttr Home
          </a>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <ShieldCheck className="size-5 text-signal" />
            <span className="eyebrow text-mist">Legal & Privacy</span>
          </div>
          <h1 className="display mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Protecting your personal information with clarity, transparency, and care.
          </p>
          <p className="mt-3 text-xs font-medium text-mist">
            Last Updated: 30 September 2026
          </p>
        </div>

        {/* Policy Content */}
        <div className="mt-12 max-w-4xl space-y-8 text-sm leading-relaxed text-muted-foreground">
          {/* Section 1: Introduction */}
          <section className="rounded-none border border-white/[0.08] bg-carbon p-6 md:p-8">
            <h2 className="font-display text-lg font-bold text-white">
              1. Introduction
            </h2>
            <p className="mt-3">
              Commuttr (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your personal information and respecting your privacy. This Privacy Policy outlines how we collect, use, store, and safeguard information provided by visitors to the Commuttr website and by people using the Commuttr app, on Android and in a browser at app.commuttr.co.za.
            </p>
          </section>

          {/* Section 2: Information We Collect */}
          <section className="rounded-none border border-white/[0.08] bg-carbon p-6 md:p-8">
            <h2 className="font-display text-lg font-bold text-white">
              2. Information We Collect
            </h2>
            <p className="mt-3">
              We collect personal information that you voluntarily submit to us when interacting with our website, specifically when you join our Waitlist or submit an enquiry through our Contact Us page.
            </p>
            <p className="mt-3 font-semibold text-white">
              This information may include:
            </p>
            <ul className="mt-2 space-y-2 list-disc pl-5 text-mist">
              <li>Full name</li>
              <li>Email address</li>
              <li>Organisation or institution (optional)</li>
              <li>City or location</li>
              <li>Primary or preferred mode of transport (optional)</li>
              <li>Messages, questions, or feedback submitted via contact forms</li>
            </ul>
          </section>

          {/* Section 3: Why We Collect Your Information */}
          <section className="rounded-none border border-white/[0.08] bg-carbon p-6 md:p-8">
            <h2 className="font-display text-lg font-bold text-white">
              3. Why We Collect Your Information
            </h2>
            <p className="mt-3">
              The information we collect is used strictly for legitimate business and operational purposes to support our commuters and partners:
            </p>
            <ul className="mt-2 space-y-2 list-disc pl-5 text-mist">
              <li>Responding to user enquiries, feedback, and support requests</li>
              <li>Managing and administering the Commuttr early-access waitlist</li>
              <li>Sharing product updates, feature announcements, and news</li>
              <li>Sending beta testing invitations and release insights</li>
              <li>Improving Commuttr&rsquo;s journey planning tools and platform features</li>
              <li>Communicating with users regarding their expressed interest in Commuttr</li>
            </ul>
          </section>

          {/* Section 4: How We Store Information */}
          <section className="rounded-none border border-white/[0.08] bg-carbon p-6 md:p-8">
            <h2 className="font-display text-lg font-bold text-white">
              4. How We Store Information
            </h2>
            <p className="mt-3">
              Information submitted through our website is stored and managed using trusted service providers that support the operation of the Commuttr platform. Access to personal information is limited to authorised members of the Commuttr team who require it for legitimate business and operational purposes. We take reasonable technical and organisational measures to help protect the information we collect from unauthorised access, disclosure, misuse or loss.
            </p>
          </section>

          {/* Section 5: Sharing Information */}
          <section className="rounded-none border border-white/[0.08] bg-carbon p-6 md:p-8">
            <h2 className="font-display text-lg font-bold text-white">
              5. Sharing Information
            </h2>
            <p className="mt-3">
              Commuttr does not sell, rent, trade, or monetize your personal information to any third parties. We will only share information where necessary to operate our services (such as verified cloud platform providers, and the providers named in sections 6 to 8) or where explicitly required by law, regulation, or legal process.
            </p>
            <p className="mt-3">
              We do publish and sell <span className="text-white">aggregate counts and patterns</span> drawn from journey searches in the app &mdash; which trips, places and routes are searched, at what times, and where people look for a service that does not exist &mdash; to transport operators, the City of Cape Town and researchers, so that planning reflects what commuters actually look for. What is sold is always counts, never you: it carries no name, number, email, account or IP address, and it is grouped before it leaves us so that no row describes one person or one phone.
            </p>
          </section>

          {/* Section 5b: The app */}
          <section className="rounded-none border border-white/[0.08] bg-carbon p-6 md:p-8">
            <h2 className="font-display text-lg font-bold text-white">
              6. The Commuttr App
            </h2>
            <p className="mt-3">
              The app has no accounts and asks for no name, email or phone number. It processes only what it needs to answer a journey:
            </p>
            <ul className="mt-2 space-y-2 list-disc pl-5 text-mist">
              <li>The stops or map points you plan between, and the travel date and time</li>
              <li>The text you type to find a place by name</li>
              <li>Server logs of the requests our API receives, including your IP address</li>
              <li>An identifier the app creates on first launch, so that ten searches from one phone are not counted as ten people. It is a random value, not a device identifier, and it is not linked to you</li>
            </ul>
            <p className="mt-3">
              Your location is used only when you tap &ldquo;Use my location&rdquo; or &ldquo;Nearby stops&rdquo;, and only with your permission. A point sent to plan a trip is stored only <span className="text-white">rounded to about 500 metres</span>, never exactly. Your profile details, planner, favourites, recent searches, settings and saved timetables stay on your device and are never uploaded.
            </p>
            <p className="mt-3">
              All of this can be switched off in the app under <span className="text-white">Profile &rarr; Preferences &rarr; Privacy</span>, which also forgets the identifier. That switch governs everything described in sections 6 and 7.
            </p>
          </section>

          {/* Section 5c: Analytics */}
          <section className="rounded-none border border-white/[0.08] bg-carbon p-6 md:p-8">
            <h2 className="font-display text-lg font-bold text-white">
              7. Analytics
            </h2>
            <p className="mt-3">
              To understand how the app is used &mdash; how many people open it, whether they return, which screens they use and where they give up &mdash; we use <span className="text-white">Google Analytics for Firebase</span>. This website uses <span className="text-white">Google Analytics</span> for the same reason.
            </p>
            <p className="mt-3">
              It measures the app, not your journeys. Google is not sent where you are travelling, what you searched for, or your location. It creates an identifier for the installation, and processes this for us as our operator, on servers outside South Africa. We have turned off the setting that would allow this data to be used to target advertising.
            </p>
          </section>

          {/* Section 5d: Advertising */}
          <section className="rounded-none border border-white/[0.08] bg-carbon p-6 md:p-8">
            <h2 className="font-display text-lg font-bold text-white">
              8. Advertising
            </h2>
            <p className="mt-3">
              Commuttr is free to use, and the Android app is supported by advertising supplied by <span className="text-white">Google AdMob</span>. To serve and measure those ads, Google receives your device&rsquo;s advertising identifier and technical information such as device type, operating system and approximate location derived from your IP address.
            </p>
            <p className="mt-3">
              Ads are not targeted using your journeys. What you search for, where you travel and the places you look up are not shared with Google or with any advertiser.
            </p>
            <p className="mt-3">
              You can reset or delete your advertising identifier, and limit ad personalisation, in your device settings &mdash; on Android under Settings &rarr; Google &rarr; Ads. How Google uses information from sites and apps that use its services is described at{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noreferrer"
                className="text-signal underline-offset-4 hover:underline font-medium"
              >
                policies.google.com/technologies/partner-sites
              </a>
              .
            </p>
          </section>

          {/* Section 6: Marketing Communications */}
          <section className="rounded-none border border-white/[0.08] bg-carbon p-6 md:p-8">
            <h2 className="font-display text-lg font-bold text-white">
              9. Marketing &amp; Product Communications
            </h2>
            <p className="mt-3">
              By joining the Commuttr waitlist, you agree to receive product updates, beta invitations, launch announcements, and essential service communications. You retain full control over your preferences and may unsubscribe from future communications at any time by contacting us directly.
            </p>
          </section>

          {/* Section 7: Data Security */}
          <section className="rounded-none border border-white/[0.08] bg-carbon p-6 md:p-8">
            <h2 className="font-display text-lg font-bold text-white">
              10. Data Security
            </h2>
            <p className="mt-3">
              We implement reasonable technical and organizational measures to safeguard personal information against unauthorized access, loss, alteration, or disclosure. However, please be aware that no method of transmission over the Internet or electronic storage system can be guaranteed to be 100% secure.
            </p>
          </section>

          {/* Section 8: Your Rights */}
          <section className="rounded-none border border-white/[0.08] bg-carbon p-6 md:p-8">
            <h2 className="font-display text-lg font-bold text-white">
              11. Your Data Rights
            </h2>
            <p className="mt-3">
              You have the right to request access to the personal information we hold about you, request corrections to inaccurate data, request deletion of your information, or withdraw consent for future communications.
            </p>
            <p className="mt-3">
              To exercise any of these rights, please contact our team at:{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-signal underline-offset-4 hover:underline font-medium"
              >
                {CONTACT.email}
              </a>
            </p>
          </section>

          {/* Section 9: POPIA Compliance */}
          <section className="rounded-none border border-white/[0.08] bg-carbon p-6 md:p-8">
            <h2 className="font-display text-lg font-bold text-white">
              12. POPIA Compliance (South Africa)
            </h2>
            <p className="mt-3">
              Commuttr aims to process all personal information in accordance with the Protection of Personal Information Act (POPIA) of South Africa. We collect only necessary information, handle data lawfully and transparently, and protect user privacy in line with South African data protection principles.
            </p>
          </section>

          {/* Section 10: Changes to this Policy */}
          <section className="rounded-none border border-white/[0.08] bg-carbon p-6 md:p-8">
            <h2 className="font-display text-lg font-bold text-white">
              13. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time as Commuttr grows and introduces new features. Any updates will be published directly on this page with a revised &ldquo;Last Updated&rdquo; date at the top of the policy.
            </p>
          </section>
        </div>
      </Container>
    </div>
  )
}
