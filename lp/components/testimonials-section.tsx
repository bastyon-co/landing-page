export function TestimonialsSection() {
  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Client Stories
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">Real results from businesses we've partnered with</p>
        </div>

        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-secondary/20 border rounded-lg">
            <p className="text-foreground italic mb-4 leading-relaxed">
              "We were drowning in manual data entry. Bastyon didn't just sell us a tool; they built a custom ingestion
              engine that saved us 40 hours a week."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center font-bold text-accent">
                JL
              </div>
              <div>
                <p className="font-semibold text-sm">James L.</p>
                <p className="text-xs text-muted-foreground">COO, Logistics Co.</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-secondary/20 border rounded-lg">
            <p className="text-foreground italic mb-4 leading-relaxed">
              "The 'AI Readiness Assessment' was the best money we spent this year. It stopped us from wasting €50k on a
              tool we didn't need."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center font-bold text-accent">
                SK
              </div>
              <div>
                <p className="font-semibold text-sm">Sarah K.</p>
                <p className="text-xs text-muted-foreground">Founder, EdTech Startup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
