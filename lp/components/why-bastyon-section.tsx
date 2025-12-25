import { Gauge, Handshake, Layers, Zap } from "lucide-react"

export function WhyBastyonSection() {
  const differentiators = [
    {
      icon: Zap,
      title: "Speed",
      description: "We move fast because we're not bound by agency politics or vendor roadmaps",
    },
    {
      icon: Gauge,
      title: "Pragmatism",
      description: "We care about outcomes, not tech for tech's sake",
    },
    {
      icon: Layers,
      title: "Technical Depth",
      description: "We don't outsource engineering. We build, deploy, and maintain.",
    },
    {
      icon: Handshake,
      title: "True Partnership",
      description: "We can both build custom solutions and deliver services. We adapt to what you need.",
    },
  ]

  return (
    <section id="why-bastyon" className="scroll-mt-16 py-12 sm:py-20 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">Why Bastyon</h2>
          <p className="text-lg text-background/70 text-pretty">
            We're not an agency. We're not a SaaS vendor. We're not traditional consultants. We're your AI tech partner.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:gap-12">
          {differentiators.map((diff, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                <diff.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">{diff.title}</h3>
                <p className="text-background/70 leading-relaxed">{diff.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
