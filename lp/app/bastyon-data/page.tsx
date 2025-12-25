import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BastyonDataPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b bg-gradient-to-br from-primary/5 to-accent/5 py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-normal tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Bastyon Data
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                Smart market intelligence through intelligent data aggregation. Get the competitive insights you need
                without the noise.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" asChild>
                  <Link href="#contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#capabilities">See What We Track</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is Bastyon Data */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                Market Intelligence That Actually Works
              </h2>
              <div className="mt-6 space-y-4 text-lg text-muted-foreground">
                <p>
                  Bastyon Data intelligently aggregates data from multiple sources to give you a complete picture of
                  your market, competitors, and opportunities.
                </p>
                <p>
                  We don't just dump data on you. Our system filters, correlates, and prioritizes information so you get
                  actionable intelligence, not information overload.
                </p>
                <p>Track what matters. Ignore what doesn't. Make decisions based on complete context.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Sources */}
        <section id="capabilities" className="border-t bg-muted/30 py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-normal tracking-tight text-foreground sm:text-4xl">What We Track</h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Competitor Activity",
                  description: "Product launches, pricing changes, marketing campaigns, and customer sentiment.",
                },
                {
                  title: "Market Trends",
                  description: "Industry news, regulatory changes, and emerging patterns across your sector.",
                },
                {
                  title: "Customer Signals",
                  description: "Reviews, social mentions, support tickets, and feedback across channels.",
                },
                {
                  title: "Web & Social Data",
                  description: "Website changes, content strategies, social media engagement, and community trends.",
                },
                {
                  title: "Business Intelligence",
                  description: "Funding announcements, partnerships, hiring patterns, and company expansions.",
                },
                {
                  title: "Technical Data",
                  description: "Technology stack changes, API updates, and infrastructure shifts.",
                },
              ].map((source, index) => (
                <div key={index} className="rounded-lg border bg-card p-6">
                  <h3 className="text-xl font-normal text-foreground">{source.title}</h3>
                  <p className="mt-3 text-muted-foreground">{source.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="border-t py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                Smart Aggregation Process
              </h2>
              <div className="mt-8 space-y-6">
                {[
                  {
                    step: "01",
                    title: "Define Your Intelligence Needs",
                    description: "We work with you to identify what data matters for your specific business goals.",
                  },
                  {
                    step: "02",
                    title: "Configure Smart Sources",
                    description: "We set up automated monitoring across relevant channels, APIs, and data providers.",
                  },
                  {
                    step: "03",
                    title: "Intelligent Filtering",
                    description: "Our AI filters out noise and correlates signals to surface only meaningful insights.",
                  },
                  {
                    step: "04",
                    title: "Actionable Delivery",
                    description:
                      "Get timely alerts and reports that connect data points to specific business opportunities.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xl font-normal text-primary">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-normal text-foreground">{item.title}</h3>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="border-t bg-muted/30 py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-normal tracking-tight text-foreground sm:text-4xl">Common Use Cases</h2>
              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "Competitive Monitoring",
                    description:
                      "Track competitor moves and get alerted when they launch features, change pricing, or shift strategy.",
                  },
                  {
                    title: "Market Opportunity Detection",
                    description: "Identify emerging trends and customer needs before your competitors do.",
                  },
                  {
                    title: "Customer Intelligence",
                    description: "Aggregate feedback across all channels to understand what customers really want.",
                  },
                  {
                    title: "Partnership Discovery",
                    description:
                      "Find potential partners based on technology stack, market position, and growth signals.",
                  },
                ].map((useCase, index) => (
                  <div key={index} className="rounded-lg border bg-card p-6">
                    <h3 className="text-xl font-normal text-foreground">{useCase.title}</h3>
                    <p className="mt-3 text-muted-foreground">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="border-t bg-foreground py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-normal tracking-tight text-background sm:text-4xl">
                Get Smarter Market Intelligence
              </h2>
              <p className="mt-4 text-lg text-background/80">
                Let's discuss what data matters most to your business and how we can track it for you.
              </p>
              <Button size="lg" variant="secondary" className="mt-8" asChild>
                <Link href="/#contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
