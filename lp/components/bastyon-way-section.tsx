import { CheckCircle2 } from "lucide-react"

export function BastyonWaySection() {
  const principles = [
    "Business-first: We start with your operations, not our tech stack",
    "AI as infrastructure: Not hype, not magic—just practical systems that deliver",
    "Built for reality: We work within real-world constraints, budgets, and timelines",
    "Long-term partnership: We're here after launch, not just until deployment",
  ]

  return (
    <section className="scroll-mt-16 py-8 sm:py-12 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
              The Bastyon Way
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              We're not here to sell you AI. We're here to help you use it.
            </p>
          </div>

          <div className="space-y-6">
            {principles.map((principle, index) => (
              <div key={index} className="flex gap-4 rounded-lg border bg-card p-6 transition-all hover:shadow-md">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" />
                <p className="text-lg leading-relaxed">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
