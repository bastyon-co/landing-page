import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Cpu, Hammer } from "lucide-react"
import { DashboardMockup } from "./dashboard-mockup"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WhatWeDoSection() {
  return (
    <section id="services" className="scroll-mt-16 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">What We Do</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Three complementary paths to AI value—not separate offers, but flexible ways to work together.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          {/* BUILD Card */}
          <Card className="relative overflow-hidden transition-all hover:shadow-xl border-2">
            <div className="absolute top-0 right-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-primary/5" />
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <div className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                BUILD
              </div>
              <CardTitle className="text-2xl">Custom AI Systems</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                We build AI systems that fit your business, not the other way around.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-accent">→</span>
                  <span>AI-powered BI dashboards and reporting layers</span>
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-accent">→</span>
                  <span>Natural-language interfaces for business data</span>
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-accent">→</span>
                  <span>Internal AI copilots for ops, sales, finance</span>
                </li>
              </ul>

              {/* Visual proof - Dashboard mockup */}
              <div className="pt-4 flex justify-center">
                <div className="scale-75 origin-top">
                  <DashboardMockup />
                </div>
              </div>

              <div className="pt-4">
                <p className="text-xs text-muted-foreground text-center">Pilots start at €5k-€15k</p>
              </div>
            </CardContent>
          </Card>

          {/* DELIVER Card */}
          <Card className="relative overflow-hidden transition-all hover:shadow-xl border-2 border-accent/20">
            <div className="absolute top-0 right-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-accent/5" />
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Cpu className="h-6 w-6 text-accent" />
              </div>
              <div className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                DELIVER
              </div>
              <CardTitle className="text-2xl">AI-Enabled Services</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Sometimes the fastest path to value isn't software—it's systems.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Updated services */}
              <ul className="space-y-3">
                <li className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-accent">→</span>
                  <span>AI coaching for SMB owners and teams</span>
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-accent">→</span>
                  <span>Workflow audits to identify AI leverage points</span>
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-accent">→</span>
                  <span>Implementation support and team training</span>
                </li>
              </ul>

              <Button asChild className="w-full mt-4 bg-transparent" variant="outline">
                <Link href="#contact">Book Assessment</Link>
              </Button>
            </CardContent>
          </Card>

          {/* CO-BUILD Card */}
          <Card className="relative overflow-hidden transition-all hover:shadow-xl border-2">
            <div className="absolute top-0 right-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-primary/5" />
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Hammer className="h-6 w-6 text-primary" />
              </div>
              <div className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                CO-BUILD
              </div>
              <CardTitle className="text-2xl">Partner With You</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                If you see the opportunity, we help you build it.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-accent">→</span>
                  <span>You bring domain insight and real problems</span>
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-accent">→</span>
                  <span>We bring product thinking, AI execution, and speed</span>
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-accent">→</span>
                  <span>Outcomes include internal tools or revenue-generating software</span>
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-accent">→</span>
                  <span>Long-term partnerships that grow with your vision</span>
                </li>
              </ul>

              <div className="pt-6">
                <p className="text-xs text-muted-foreground text-center">Custom engagement models</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-sm text-muted-foreground">
            Working with trusted partners like{" "}
            <Link
              href="https://roclas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              Roclas
            </Link>{" "}
            to deliver comprehensive solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
