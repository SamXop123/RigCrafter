import { NextResponse } from "next/server"
import { z } from "zod"

export const runtime = "nodejs"

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("A valid email address is required").max(254, "Email is too long"),
  subject: z.string().trim().min(1, "Subject is required").max(150, "Subject is too long"),
  message: z.string().trim().min(1, "Message is required").max(4000, "Message is too long"),
})

function truncate(value: string, maxLength: number) {
  if (value.length <= maxLength) {
    return value
  }

  return `${value.slice(0, maxLength - 1)}…`
}

export async function POST(request: Request) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL

  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Discord webhook is not configured." },
      { status: 500 }
    )
  }

  let payload: unknown

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    )
  }

  const validation = contactSchema.safeParse(payload)

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.issues[0]?.message ?? "Invalid form data." },
      { status: 400 }
    )
  }

  const { name, email, subject, message } = validation.data

  const discordResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "RigCrafter Contact",
      allowed_mentions: {
        parse: [],
      },
      embeds: [
        {
          title: truncate(subject, 256),
          color: 0x8b5cf6,
          description: truncate(message, 4096),
          fields: [
            {
              name: "Name",
              value: truncate(name, 1024),
              inline: true,
            },
            {
              name: "Email",
              value: truncate(email, 1024),
              inline: true,
            },
          ],
          footer: {
            text: "RigCrafter contact form",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    }),
  })

  if (!discordResponse.ok) {
    return NextResponse.json(
      { error: "Failed to forward the message to Discord." },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}