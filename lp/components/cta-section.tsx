"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setIsSuccess(true)
      ;(e.target as HTMLFormElement).reset()
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="scroll-mt-16 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">Let's Talk</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              No pressure. No sales pitch. Just a conversation about where AI could create real value for your business.
            </p>
          </div>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>Start With an AI Readiness Assessment</CardTitle>
              <CardDescription className="text-base">
                Tell us a bit about your business and what you're trying to solve. We'll be in touch within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <CheckCircle2 className="mb-4 h-16 w-16 text-green-500" />
                  <h3 className="mb-2 text-2xl font-bold">Thank you!</h3>
                  <p className="text-muted-foreground">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="John Smith" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" placeholder="Your company name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your challenge</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="What are you trying to solve? Where do you think AI could help?"
                      rows={5}
                      required
                    />
                  </div>

                  {error && <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">{error}</div>}

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
