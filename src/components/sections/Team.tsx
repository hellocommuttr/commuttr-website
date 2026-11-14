import { Container } from "@/components/Container"
import { SectionHeading } from "@/components/SectionHeading"
import { Reveal } from "@/components/Reveal"
import { Carousel } from "@/components/Carousel"
import { LinkedInIcon } from "@/components/brand/SocialIcons"
import { TEAM } from "@/data/content"

export function Team() {
  return (
    <section id="team" className="relative py-16 sm:py-20 md:py-28">
      <Container>
        <SectionHeading
          index="09"
          eyebrow="Leadership"
          title="A founding team that ships."
          sub="Strategic leadership and product vision, paired with deep backend engineering expertise, building a secure, scalable, and commuter-first digital mobility platform."
        />

        <Reveal delay={100} className="mt-14">
          <Carousel
            label="Founding team"
            slideLabels={TEAM.map((m) => m.name)}
            gridClassName="lg:grid-cols-2 lg:gap-4"
          >
            {TEAM.map((m) => (
              <div
                key={m.name}
                className="tile flex h-full flex-col gap-5 p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-7"
              >
                {/* Initials sit behind the portrait, so they show through if the
                    image ever fails to load. */}
                <div className="relative aspect-[4/5] w-full max-w-[200px] shrink-0 self-center overflow-hidden rounded-2xl bg-surface-2 sm:w-40 sm:self-start">
                  <span
                    aria-hidden
                    className="absolute inset-0 flex items-center justify-center font-display text-3xl font-bold text-white/25"
                  >
                    {m.initials}
                  </span>
                  <img
                    src={m.image}
                    alt={`${m.name}, ${m.role}`}
                    width={320}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="relative size-full object-cover object-top"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="font-display text-xl font-medium tracking-tight text-white">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-signal">{m.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {m.bio}
                  </p>

                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:border-white hover:bg-white hover:text-ink"
                  >
                    <LinkedInIcon className="size-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </Carousel>
        </Reveal>
      </Container>
    </section>
  )
}
