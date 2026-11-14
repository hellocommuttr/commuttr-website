import { Container } from "@/components/Container"
import { SectionHeading } from "@/components/SectionHeading"
import { Reveal } from "@/components/Reveal"
import { PROBLEMS } from "@/data/content"

export function Problem() {
  return (
    <section id="problem" className="relative py-16 sm:py-20 md:py-28">
      <Container>
        <SectionHeading
          index="01"
          eyebrow="The commuter problem"
          title="Public transport is fragmented, unpredictable, and disconnected."
          sub="Millions of South Africans rely on public transport every day, yet commuters struggle to find reliable routes, compare options, estimate fares, and make confident travel decisions."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.title} delay={i * 80}>
                <div className="tile h-full p-6 text-white transition-colors duration-300 hover:border-[#f63d06]/60">
                  <span className="flex size-11 items-center justify-center rounded-full bg-[#f63d06] text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-medium tracking-tight text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
