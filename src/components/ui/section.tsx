import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  padding?: "none" | "sm" | "md" | "lg" | "xl"
  background?: "default" | "muted" | "accent"
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, padding = "lg", background = "default", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          {
            "py-8 sm:py-12": padding === "sm",
            "py-12 sm:py-16": padding === "md", 
            "py-16 sm:py-20 lg:py-24": padding === "lg",
            "py-20 sm:py-24 lg:py-32": padding === "xl",
          },
          {
            "bg-background": background === "default",
            "bg-muted/50": background === "muted",
            "bg-accent/50": background === "accent",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Section.displayName = "Section"

export { Section }
