import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BastyonAIPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b bg-gradient-to-br from-primary/5 to-accent/5 py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-normal tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Bastyon AI
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                AIxBI: Leveraging generative AI to build intelligent dashboards that transform your data into actionable
                insights
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" asChild>
                  <Link href="#contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is Bastyon AI */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                AI-Powered Business Intelligence
              </h2>
              <div className="mt-6 space-y-4 text-lg text-muted-foreground">
                <p>
                  Bastyon AI combines the power of generative AI with business intelligence to create dashboards that
                  don't just show data—they understand it.
                </p>
                <p>
                  Our AIxBI platform goes beyond traditional BI tools by using AI to automatically identify patterns,
                  generate insights, and even suggest actions based on your business context.
                </p>
                <p>No more staring at static charts. Get intelligent analysis that adapts to your needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="border-t bg-muted/30 py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-normal tracking-tight text-foreground sm:text-4xl">What You Get</h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Natural Language Queries",
                  description:
                    "Ask questions about your data in plain English. Get instant answers and visualizations.",
                },
                {
                  title: "Automated Insights",
                  description: "AI identifies trends, anomalies, and opportunities you might miss manually.",
                },
                {
                  title: "Custom Dashboards",
                  description: "Dashboards that adapt to your role, priorities, and business context.",
                },
                {
                  title: "Predictive Analytics",
                  description: "Forecast trends and outcomes based on your historical data and market patterns.",
                },
                {
                  title: "Smart Alerts",
                  description: "Get notified only about what matters, with context-aware recommendations.",
                },
                {
                  title: "Seamless Integration",
                  description: "Connects to your existing data sources without complex ETL pipelines.",
                },
              ].map((feature, index) => (
                <div key={index} className="rounded-lg border bg-card p-6">
                  <h3 className="text-xl font-normal text-foreground">{feature.title}</h3>
                  <p className="mt-3 text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="border-t py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-normal tracking-tight text-foreground sm:text-4xl">How It Works</h2>
              <div className="mt-8 space-y-6">
                {[
                  {
                    step: "01",
                    title: "Connect Your Data",
                    description: "Link your databases, APIs, and data warehouses. We handle the technical integration.",
                  },
                  {
                    step: "02",
                    title: "Define Your Context",
                    description:
                      "Tell us about your business, goals, and key metrics. The AI learns what matters to you.",
                  },
                  {
                    step: "03",
                    title: "Start Asking Questions",
                    description:
                      "Query your data naturally, get instant visualizations, and let AI surface hidden insights.",
                  },
                  {
                    step: "04",
                    title: "Act on Insights",
                    description: "Make data-driven decisions with confidence, backed by AI-generated recommendations.",
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

        {/* CTA */}
        <section id="contact" className="border-t bg-foreground py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-normal tracking-tight text-background sm:text-4xl">
                Ready to Transform Your Data?
              </h2>
              <p className="mt-4 text-lg text-background/80">
                Let's discuss how Bastyon AI can help you make better decisions faster.
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
