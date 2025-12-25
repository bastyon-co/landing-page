"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "Do I need an internal technical team?",
    answer:
      "No. That is our role. We act as your technical partner, handling the build, deployment, and maintenance until you are ready to hire in-house.",
  },
  {
    question: "Do you keep our data?",
    answer:
      "Absolutely not. We build systems on your infrastructure (or a secure private cloud we set up for you). You own the IP and the data.",
  },
  {
    question: "How much does a pilot project cost?",
    answer:
      "We typically start with a fixed-fee pilot ranging from €5k-€15k depending on complexity, so you can see value before committing to a larger build.",
  },
  {
    question: "What if we just need strategy, not code?",
    answer:
      "We offer 'Deliver' services specifically for this. Our Readiness Assessment is a standalone product designed to give you a roadmap without development commitment.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-8 sm:py-12 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">Common questions about working with Bastyon</p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border rounded-lg bg-card">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
