export function HowEngagementsStartSection() {
  const steps = [
    {
      number: "01",
      title: "AI Readiness Assessment",
      description: "We map your operations, data, and workflows to identify where AI creates real leverage",
    },
    {
      number: "02",
      title: "Opportunity Mapping",
      description: "Together, we prioritize high-impact opportunities and define clear outcomes",
    },
    {
      number: "03",
      title: "Pilot or Co-Build",
      description: "We start small and focused—building proof of value before scaling",
    },
    {
      number: "04",
      title: "Ongoing Partnership",
      description: "As systems prove out, we expand, refine, and evolve with your business",
    },
  ]

  return (
    <section className="scroll-mt-16 py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            How Engagements Start
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            There's no rigid funnel. We meet you where you are and move at your pace.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                  {step.number}
                </div>
                {index < steps.length - 1 && <div className="mt-2 h-full w-px bg-border" />}
              </div>
              <div className="pb-8">
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
