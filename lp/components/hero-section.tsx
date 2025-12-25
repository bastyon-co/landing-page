import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="scroll-mt-16 relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 py-12 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-sm">
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-muted-foreground">Your AI Tech Partner</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Stop buying AI tools. Start building AI assets.
          </h1>

          <p className="mb-8 text-lg text-muted-foreground text-pretty sm:text-xl md:text-2xl">
            We help SMBs and founders replace 'AI hype' with working production systems that belong to you.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#contact">
                Start With an Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              <Link href="#testimonials">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
