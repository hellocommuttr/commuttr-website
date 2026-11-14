import { Check } from "lucide-react"

import { Container } from "@/components/Container"
import { Panel } from "@/components/Panel"
import { SectionHeading } from "@/components/SectionHeading"
import { Reveal } from "@/components/Reveal"
import { AUDIENCES } from "@/data/content"

export function Audiences() {
  return (
    <section id="who" className="relative">
      <Panel>
      <Container className="py-16 sm:py-20 md:py-24">
        <SectionHeading
          eyebrow="Value proposition"
          title="Built for everyone who moves the city."
          sub="Creating value for commuters, transport operators, and the institutions that support them."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
          {AUDIENCES.map((a, i) => {
            const Icon = a.icon
            return (
              <Reveal key={a.title} delay={i * 90}>
                <div className="tile flex h-full flex-col p-7 text-white transition-colors duration-300 hover:border-[#f63d06]/60">
                  <span className="flex size-11 items-center justify-center rounded-full bg-[#f63d06] text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-white">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {a.text}
                  </p>
                  {/* Absorbs uneven intro-copy heights so every card's rule and
                      bullet list start on the same line across the row. */}
                  <div aria-hidden className="flex-1" />
                  <ul className="mt-6 space-y-3 border-t border-white/[0.08] pt-6">
                    {a.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm leading-5 text-white/90">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#f63d06] text-white">
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                        <span className="min-w-0 flex-1">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
      </Panel>
    </section>
  )
}
