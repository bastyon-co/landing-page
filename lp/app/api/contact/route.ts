import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Get API key from environment variables
    // Try multiple possible env var names
    const apiKey = 
      process.env.SYSTEME_API_KEY || 
      process.env.NEXT_PUBLIC_SYSTEME_API_KEY ||
      process.env.SYSTEMEIO_API_KEY

    if (!apiKey) {
      // Debug: Log all env vars that contain 'SYSTEME' or 'API'
      const relevantEnvVars = Object.keys(process.env)
        .filter(key => key.toUpperCase().includes('SYSTEME') || key.toUpperCase().includes('API'))
        .reduce((acc, key) => {
          acc[key] = process.env[key] ? '***SET***' : 'NOT SET'
          return acc
        }, {} as Record<string, string>)
      
      console.error("SYSTEME_API_KEY is not set in environment variables")
      console.error("Relevant env vars:", relevantEnvVars)
      console.error("Current working directory:", process.cwd())
      console.error("Make sure you have a .env or .env.local file in the lp/ directory")
      console.error("And restart your Next.js dev server after adding environment variables")
      return NextResponse.json({ 
        error: "Server configuration error: SYSTEME_API_KEY not found. Please check your .env file and restart the server." 
      }, { status: 500 })
    }

    // Split name into first name and surname (Systeme.io uses 'surname' not 'last_name')
    const trimmedName = name.trim() || "Contact"
    const nameParts = trimmedName.split(/\s+/).filter((part: string) => part.length > 0)
    const firstName = nameParts[0] || trimmedName
    const surname = nameParts.slice(1).join(" ").trim()

    // Build fields array - using Systeme.io standard field slugs
    const fields: Array<{ slug: string; value: string }> = [
      {
        slug: "first_name",
        value: firstName,
      }
    ]
    
    // Add surname if it exists
    if (surname && surname.length > 0) {
      fields.push({
        slug: "surname",
        value: surname,
      })
    }

    // Debug log to see what we're sending
    console.log("Creating contact with fields:", JSON.stringify(fields, null, 2))

    // Step 1: Create the contact in Systeme.io
    const contactResponse = await fetch("https://api.systeme.io/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
      },
      body: JSON.stringify({
        email,
        locale: "en",
        fields,
      }),
    })

    if (!contactResponse.ok) {
      const errorText = await contactResponse.text()
      console.error("Systeme.io API error creating contact:", errorText)
      return NextResponse.json({ error: "Failed to create contact" }, { status: 500 })
    }

    const contactData = await contactResponse.json()
    const contactId = contactData.id

    console.log("Contact created with ID:", contactId)

    // Step 2: Create/attach tags to the contact
    // Systeme.io requires creating tags first, then attaching them
    const tagNames = [
      "landing-page",
      "main-landing-page",
      "ai-readiness-assessment"
    ]

    // Add company as a tag if provided
    const trimmedCompany = company ? company.trim() : ""
    if (trimmedCompany.length > 0) {
      tagNames.push(`company-${trimmedCompany.replace(/\s+/g, "-").toLowerCase()}`)
    }

    // Add message indicator tag
    const trimmedMessage = message.trim()
    if (trimmedMessage.length > 0) {
      tagNames.push("has-message")
    }

    // Attach tags to contact
    // Following the PHP example: create tags first, then attach them by ID
    for (const tagName of tagNames) {
      try {
        // Step 1: Create the tag (or get existing one)
        const createTagResponse = await fetch("https://api.systeme.io/api/tags", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": apiKey,
          },
          body: JSON.stringify({
            name: tagName,
          }),
        })

        if (createTagResponse.ok) {
          const tagData = await createTagResponse.json()
          const tagId = tagData.id

          // Step 2: Attach the tag to the contact
          await fetch(`https://api.systeme.io/api/contacts/${contactId}/tags`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-API-Key": apiKey,
            },
            body: JSON.stringify({
              tagId: tagId,
            }),
          })
        } else {
          // Tag might already exist, try to attach by name or skip
          console.warn(`Could not create tag ${tagName}, it may already exist`)
        }
      } catch (tagError) {
        console.error(`Error processing tag ${tagName}:`, tagError)
        // Continue with other tags even if one fails
      }
    }

    return NextResponse.json({ success: true, data: contactData })
  } catch (error) {
    console.error("Error submitting form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
