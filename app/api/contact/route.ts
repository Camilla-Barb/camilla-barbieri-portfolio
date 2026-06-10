import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.TO_EMAIL

    if (apiKey && toEmail) {
      const { Resend } = await import("resend")
      const resend = new Resend(apiKey)
      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: toEmail,
        subject: `New message from ${name}`,
        replyTo: email,
        text: `From: ${name} (${email})\n\n${message}`,
      })
    } else {
      console.log("Contact form submission (no email configured):", { name, email, message })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
