import { Briefcase, Building2, Lightbulb, Users } from "lucide-react"

export function WhoThisIsForSection() {
  const personas = [
    {
      icon: Building2,
      title: "SMB Owners & Operators",
      description: "You're running lean and need AI systems that work, not more complexity",
    },
    {
      icon: Briefcase,
      title: "Consultants & Fractional Leaders",
      description: "You deliver insights but need technical muscle to implement AI solutions",
    },
    {
      icon: Lightbulb,
      title: "Early-Stage Founders",
      description: "You're building something new and want AI baked in from day one",
    },
    {
      icon: Users,
      title: "Teams in Transition",
      description: "You're overwhelmed by AI tools but hungry for real leverage",
    },
  ]

  return (
    <section id="who-this-is-for" className="scroll-mt-16 py-12 sm:py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Who This Is For
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Built for operators, consultants, and founders who value clarity, speed, and practical results.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:gap-8">
          {personas.map((persona, index) => (
            <div key={index} className="flex gap-4 rounded-lg border bg-card p-6 transition-all hover:shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <persona.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">{persona.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{persona.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
