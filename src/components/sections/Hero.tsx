import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PhoneMockup } from "@/components/app/PhoneMockup"
import { HomeScreen } from "@/components/app/screens"
import { PRODUCTS } from "@/data/content"
import { trackEvent } from "@/lib/analytics"

export function Hero() {
  return (
    <section id="top" className="relative px-3 pt-[4.75rem] sm:px-4 sm:pt-[5.5rem]">
      <div className="module relative mx-auto max-w-[1440px] overflow-hidden">
        {/* Background: orange glow + hairline grid */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 signal-glow" />
          <div className="absolute inset-0 grid-mesh opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-12 pt-14 sm:gap-14 sm:px-8 md:pb-16 md:pt-20 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div className="max-w-xl">
            <h1 className="display text-[2.15rem] leading-[1.05] text-white min-[360px]:text-[2.6rem] sm:text-5xl lg:text-[3.6rem]">
              One connected experience for{" "}
              <span className="text-[#f63d06]">every way you move.</span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg">
              Commuttr helps commuters discover routes, compare transport options, estimate
              fares, and navigate public transport with confidence. We&rsquo;re starting with
              intelligent journey planning, with a long-term vision of building a more
              connected digital mobility experience for South Africa.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a
                  href="#waitlist"
                  onClick={() => trackEvent("try_commuttr_click", { location: "hero" })}
                >
                  Try Commuttr <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#how">See How It Works</a>
              </Button>
            </div>
          </div>

          {/* Phone */}
          <div className="relative mx-auto w-[340px] max-w-full">
            <div className="animate-float">
              <PhoneMockup>
                <HomeScreen />
              </PhoneMockup>
            </div>
          </div>
        </div>

        {/* Feature ticker, separated by signal dots (impact.com logo-strip style) */}
        <div
          aria-hidden
          className="relative overflow-hidden border-t border-white/[0.06] py-5 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
        >
          <div className="flex w-max animate-marquee items-center motion-reduce:animate-none">
            {[...PRODUCTS, ...PRODUCTS].map((p, i) => (
              <span key={i} className="flex items-center whitespace-nowrap text-sm font-medium text-white/60">
                <span className="px-8">{p.title}</span>
                <span className="size-1.5 rounded-full bg-[#f63d06]" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
