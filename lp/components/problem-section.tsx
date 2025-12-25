import { AlertCircle, Blocks, Handshake, Target } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: Blocks,
      title: "Too many tools",
      description: "Everyone's pitching AI products, but none fit how you actually work",
    },
    {
      icon: Target,
      title: "No strategy",
      description: "You know AI matters, but you don't know where it creates real leverage",
    },
    {
      icon: Handshake,
      title: "No technical partner",
      description: "Agencies want projects. Vendors want subscriptions. You need a partner.",
    },
    {
      icon: AlertCircle,
      title: "Demos that go nowhere",
      description: "Proof of concepts that never turn into production systems",
    },
  ]

  return (
    <section className="scroll-mt-16 py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Why AI adoption is failing for SMBs
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Most businesses are stuck in AI purgatory—overwhelmed by options, underwhelmed by results.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:gap-12">
          {problems.map((problem, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <problem.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
