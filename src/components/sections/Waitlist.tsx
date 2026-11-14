import { CheckCircle2, Clock, Globe } from "lucide-react"

import { AppleIcon, GooglePlayIcon } from "@/components/brand/SocialIcons"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/Container"
import { APP_LINKS } from "@/data/content"
import { trackEvent } from "@/lib/analytics"

export function Waitlist() {
  return (
    <section id="waitlist" className="relative pb-6 pt-16 sm:pt-20 md:pb-10 md:pt-28">
      <Container>
        <div className="module relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 signal-glow" />
          <div className="relative grid lg:grid-cols-2">
            {/* Pitch / Info */}
            <div className="relative p-8 md:p-12">
              <div className="relative">
                <div className="flex items-center gap-2">
                  <span className="eyebrow text-signal">11</span>
                  <span aria-hidden className="size-1 rounded-full bg-signal" />
                  <span className="eyebrow text-signal">Available Now</span>
                </div>
                <h2 className="display mt-4 text-3xl text-white md:text-[2.6rem]">
                  Try Commuttr today
                </h2>
                <div className="mt-5 space-y-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  <p>
                    Commuttr is live. Plan smarter journeys across South African public transport right now, on the web, on iOS, or on Android.
                  </p>
                  <p>
                    No waitlist, no waiting. Pick your platform and start planning your next trip.
                  </p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 text-xs">
                    <Clock className="mt-0.5 size-4 shrink-0 text-signal" />
                    <div>
                      <div className="font-semibold text-white">Live today</div>
                      <div className="text-mist">Plan journeys right now, no sign-up needed</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 text-xs">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-signal" />
                    <div>
                      <div className="font-semibold text-white">On every device</div>
                      <div className="text-mist">Web, iOS beta and Android</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform access */}
            <div className="px-6 pb-6 md:px-12 md:pb-12 lg:pt-12">
              <div className="flex h-full flex-col justify-center gap-5 rounded-3xl border border-white/[0.06] bg-ink/60 p-6 md:p-8">
                <div>
                  <Button size="lg" className="w-full" asChild>
                    <a
                      href={APP_LINKS.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("app_web_click", { location: "try" })}
                    >
                      <Globe className="size-4" /> Try Commuttr on the Web
                    </a>
                  </Button>
                </div>

                <div className="space-y-2">
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <a
                      href={APP_LINKS.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("app_ios_click", { location: "try" })}
                    >
                      <AppleIcon className="size-4" /> Join the iOS Beta
                    </a>
                  </Button>
                  <p className="px-1 text-xs leading-relaxed text-mist">
                    iPhone users will need Apple&rsquo;s TestFlight app to install the beta.
                  </p>
                </div>

                <div>
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <a
                      href={APP_LINKS.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("app_android_click", { location: "try" })}
                    >
                      <GooglePlayIcon className="size-4" /> Download on Google Play
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
