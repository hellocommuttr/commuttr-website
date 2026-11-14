import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * The section header device — a small coloured eyebrow (keeping the
 * corporate profile's 01–11 numbering) above a tight, medium-weight title.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  sub,
  align = "left",
  className,
}: {
  index?: string
  eyebrow: string
  title: React.ReactNode
  sub?: React.ReactNode
  align?: "left" | "center"
  className?: string
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2",
          align === "center" && "justify-center"
        )}
      >
        {index && (
          <span className="eyebrow text-signal">{index}</span>
        )}
        {index && <span aria-hidden className="size-1 rounded-full bg-signal" />}
        <span className="eyebrow text-signal">{eyebrow}</span>
      </div>
      <h2 className="display mt-4 text-3xl text-white sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      {sub && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{sub}</p>
      )}
    </div>
  )
}
