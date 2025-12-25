import { User } from "lucide-react"

export function TeamSection() {
  return (
    <section className="py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Meet Your Partners
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Experienced builders who understand both technology and business
          </p>
        </div>

        <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-32 h-32 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <User className="w-16 h-16 text-accent" />
            </div>
            <h3 className="font-bold text-xl mb-2">Co-Founder</h3>
            <p className="text-sm text-muted-foreground mb-3">Technical Lead & AI Architect</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              15+ years building systems that scale. Focused on turning complex AI into practical business tools.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-32 h-32 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <User className="w-16 h-16 text-accent" />
            </div>
            <h3 className="font-bold text-xl mb-2">Co-Founder</h3>
            <p className="text-sm text-muted-foreground mb-3">Strategy & Business Operations</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Former operator and consultant. Helps businesses identify high-leverage AI opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
