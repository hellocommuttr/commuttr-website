import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * The section header device — a small coloured eyebrow above a tight,
 * medium-weight title.
 */
export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
  className,
}: {
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
      <p className="eyebrow text-signal">{eyebrow}</p>
      <h2 className="display mt-4 text-3xl text-white sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      {sub && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{sub}</p>
      )}
    </div>
  )
}
