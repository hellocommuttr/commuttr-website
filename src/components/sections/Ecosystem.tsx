import { ArrowRight, Compass } from "lucide-react"

import { Container } from "@/components/Container"
import { Panel } from "@/components/Panel"
import { SectionHeading } from "@/components/SectionHeading"
import { Reveal } from "@/components/Reveal"
import { PARTNERS } from "@/data/content"

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative">
      <Panel>
      <Container className="py-16 sm:py-20 md:py-24">
        {/* Vision Header */}
        <SectionHeading
          eyebrow="Building the Future of Connected Mobility"
          title="Every great journey begins with knowing the best way to travel."
          sub="Commuttr is starting with intelligent journey planning today. As we grow, we'll continue building solutions that make public transport simpler, smarter and more connected."
        />

        {/* Vision Card */}
        <Reveal delay={100} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl bg-[#f63d06] p-6 text-white md:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-[#f63d06]">
                <Compass className="size-6" />
              </span>
              <div>
                <p className="eyebrow text-white/85">
                  Our Vision
                </p>
                <p className="mt-2 font-display text-lg font-medium leading-snug tracking-tight text-white md:text-2xl">
                  &ldquo;Commuttr is starting with intelligent journey planning, with a long-term vision of building a more connected digital mobility experience for South Africa.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Partners Section */}
        <div className="mt-16">
          <h3 className="display text-2xl text-white">Mobility & Ecosystem Partners</h3>
          <p className="mt-1 text-sm text-muted-foreground">Collaborating with operators, institutions, and communities to shape connected transit.</p>
          
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {PARTNERS.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal key={p.title} delay={(i % 3) * 80}>
                  <div className="tile flex h-full flex-col justify-between p-6 text-white transition-colors duration-300 hover:border-[#f63d06]/60">
                    <div>
                      <span className="flex size-11 items-center justify-center rounded-full bg-[#f63d06] text-white">
                        <Icon className="size-5" />
                      </span>
                      <h4 className="mt-6 font-display text-base font-medium tracking-tight text-white">
                        {p.title}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {p.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}

            {/* CTA tile */}
            <Reveal delay={160}>
              <a
                href="/partner"
                className="group flex h-full flex-col justify-between rounded-3xl bg-white p-6 text-[#f63d06] transition-colors duration-300 hover:bg-white/95"
              >
                <div>
                  <h4 className="font-display text-base font-medium tracking-tight text-black">
                    Become a partner
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                    Support smarter travel planning and connected public mobility across South Africa.
                  </p>
                </div>
                <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#f63d06] px-4 py-2.5 text-sm font-medium text-white">
                  Start a conversation
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
      </Panel>
    </section>
  )
}
