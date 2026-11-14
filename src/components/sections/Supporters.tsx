import { Container } from "@/components/Container"
import { Reveal } from "@/components/Reveal"

import siliconOverdrive from "@/assets/supporters/silicon-overdrive.png"
import microsoftForStartups from "@/assets/supporters/microsoft-for-startups.png"
import fsatl from "@/assets/supporters/french-south-african-tech-labs.png"
import awsStartups from "@/assets/supporters/aws-startups.png"

const SUPPORTERS = [
  { name: "Silicon Overdrive", logo: siliconOverdrive, className: "max-h-14" },
  { name: "Microsoft for Startups", logo: microsoftForStartups, className: "max-h-16" },
  { name: "French South African Tech Labs, Cape Town", logo: fsatl, className: "max-h-20" },
  { name: "AWS Startups", logo: awsStartups, className: "max-h-12" },
]

/**
 * impact.com-style logo strip: a quiet eyebrow over a row of partner logos.
 * Logos sit on white tiles so their own brand colours read on the dark site.
 */
export function Supporters() {
  return (
    <section
      id="supporters"
      aria-labelledby="supporters-heading"
      className="relative py-12 sm:py-14 md:py-16"
    >
      <Container>
        <div className="flex items-center justify-center gap-2">
          <span aria-hidden className="size-1 rounded-full bg-signal" />
          <h2 id="supporters-heading" className="eyebrow text-signal">
            Supported by
          </h2>
          <span aria-hidden className="size-1 rounded-full bg-signal" />
        </div>

        <Reveal delay={80}>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {SUPPORTERS.map((s) => (
              <li
                key={s.name}
                className="flex h-32 items-center justify-center rounded-3xl bg-white px-6 py-5 sm:h-36"
              >
                <img
                  src={s.logo}
                  alt={s.name}
                  loading="lazy"
                  decoding="async"
                  className={`h-auto w-auto max-w-full object-contain ${s.className}`}
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
