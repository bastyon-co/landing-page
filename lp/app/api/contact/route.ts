import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const apiKey = process.env.SYSTEME_API_KEY || "glygzp2vsbvpl9xjnnxn5974yjh58ng6hh9qjtriw6p4sot6e43bpmvvxzi35uth"

    const systemeResponse = await fetch("https://api.systeme.io/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
      },
      body: JSON.stringify({
        email,
        fields: [
          {
            slug: "first_name",
            value: name,
          },
          {
            slug: "company",
            value: company || "",
          },
          {
            slug: "message",
            value: message,
          },
        ],
        tags: ["website-contact", "ai-readiness-assessment"],
      }),
    })

    if (!systemeResponse.ok) {
      const errorText = await systemeResponse.text()
      return NextResponse.json({ error: "Failed to create contact" }, { status: 500 })
    }

    const contactData = await systemeResponse.json()

    return NextResponse.json({ success: true, data: contactData })
  } catch (error) {
    console.error("Error submitting form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
