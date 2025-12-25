import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { BastyonWaySection } from "@/components/bastyon-way-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhoThisIsForSection } from "@/components/who-this-is-for-section"
import { HowEngagementsStartSection } from "@/components/how-engagements-start-section"
import { WhyBastyonSection } from "@/components/why-bastyon-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div id="home">
          <HeroSection />
        </div>
        <div id="problem">
          <ProblemSection />
        </div>
        <div id="solution">
          <BastyonWaySection />
        </div>
        <div id="services">
          <WhatWeDoSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="who">
          <WhoThisIsForSection />
        </div>
        <div id="how-it-works">
          <HowEngagementsStartSection />
        </div>
        <div id="why">
          <WhyBastyonSection />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
        <div id="contact">
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
