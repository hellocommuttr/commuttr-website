import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium outline-none transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#f63d06] text-white hover:bg-[#e03503] active:bg-[#d63200] [&_svg]:transition-transform hover:[&_svg]:translate-x-0.5",
        secondary:
          "bg-white text-ink hover:bg-white/90",
        outline:
          "border border-white/20 bg-transparent text-foreground hover:border-white hover:bg-white hover:text-ink",
        ghost: "text-foreground/80 hover:text-foreground",
        link: "text-signal underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-10 px-4 text-[0.85rem]",
        default: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-[0.95rem]",
        icon: "size-10",
        pill: "h-9 px-4 text-[0.8rem]",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

/* eslint-disable-next-line react-refresh/only-export-components */
export { Button, buttonVariants }
