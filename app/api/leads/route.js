import { leads, addLead } from "@/data/leads"

// GET all leads
export async function GET() {
  return Response.json(leads)
}

// Create new lead
export async function POST(req) {
  try {
    const body = await req.json()

    if (!body.name || !body.email || !body.phone) {
      return Response.json(
        { message: "Missing required fields" },
        { status: 400 }
      )
    }

    const newLead = {
      id: Date.now().toString(),
      ...body,
      status: "new",
      createdAt: new Date().toISOString()
    }

    addLead(newLead)

    return Response.json(
      { message: "Lead captured successfully" },
      { status: 201 }
    )

  } catch (error) {
    return Response.json(
      { message: "Server error" },
      { status: 500 }
    )
  }
}

// 🔥 DELETE ALL LEADS
export async function DELETE() {
  leads.length = 0
  return Response.json({ message: "All leads deleted" })
}