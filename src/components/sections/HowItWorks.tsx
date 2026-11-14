import { Container } from "@/components/Container"
import { Panel } from "@/components/Panel"
import { SectionHeading } from "@/components/SectionHeading"
import { Reveal } from "@/components/Reveal"
import { STEPS } from "@/data/content"

export function HowItWorks() {
  return (
    <section id="how" className="relative">
      <Panel>
      <Container className="py-16 sm:py-20 md:py-24">
        <SectionHeading
          index="04"
          eyebrow="How it works"
          title="Three simple steps to plan your trip."
          sub="Getting around shouldn't be guesswork. Commuttr gives you route clarity, travel times, and estimated costs before you leave."
        />

        <div className="relative mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
          {STEPS.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.title} delay={i * 100}>
                <div className="tile relative flex h-full flex-col items-start p-6 sm:p-7">
                  <span className="relative z-10 flex size-12 items-center justify-center rounded-full bg-[#f63d06] text-white">
                    <Icon className="size-5" />
                  </span>
                  <span className="eyebrow mt-5 text-[#f63d06]">Step 0{i + 1}</span>
                  <h3 className="mt-2 font-display text-lg font-medium tracking-tight text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
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
