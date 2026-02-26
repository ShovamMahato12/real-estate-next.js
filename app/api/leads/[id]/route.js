import { leads } from "@/data/leads"

export async function PATCH(req, { params }) {
  const { id } = params
  const body = await req.json()

  const lead = leads.find(l => l.id === id)

  if (!lead) {
    return Response.json({ message: "Lead not found" }, { status: 404 })
  }

  lead.status = body.status

  return Response.json({ message: "Lead updated" })
}

export async function DELETE(req, { params }) {
  const { id } = params

  const index = leads.findIndex(l => l.id === id)

  if (index === -1) {
    return Response.json({ message: "Lead not found" }, { status: 404 })
  }

  leads.splice(index, 1)

  return Response.json({ message: "Lead deleted" })
}