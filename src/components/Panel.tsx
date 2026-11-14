import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * impact.com-style "module": a large rounded panel inset from the viewport
 * edges, used to alternate section surfaces down the page.
 */
export function Panel({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className="px-3 sm:px-4">
      <div className={cn("module relative mx-auto max-w-[1440px] overflow-hidden", className)}>
        {children}
      </div>
    </div>
  )
}
