"use client"


import { useEffect, useState } from "react"



export default function Admin() {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)

  
  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/leads")
      const data = await res.json()
      setLeads(data)
    } catch (error) {
      console.error("Failed to fetch leads")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeads()
  }, [])

 
  const updateStatus = async (id, newStatus) => {
    const res = await fetch(`/api/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus })
    })

    if (res.ok) {
      setLeads(prev =>
        prev.map(lead =>
          lead.id === id ? { ...lead, status: newStatus } : lead
        )
      )
    }
  }

  
  const deleteLead = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this lead?")
    if (!confirmDelete) return

    const res = await fetch(`/api/leads/${id}`, {
      method: "DELETE"
    })

    if (res.ok) {
      setLeads(prev => prev.filter(lead => lead.id !== id))
    } else {
      alert("Failed to delete lead")
    }
  }


  const clearAllLeads = async () => {
    const confirmDelete = confirm("Delete ALL leads? This cannot be undone.")
    if (!confirmDelete) return

    const res = await fetch("/api/leads", {
      method: "DELETE"
    })

    if (res.ok) {
      setLeads([])
    } else {
      alert("Failed to clear leads")
    }
  }

  return (
    <div className="bg-[#F4F6F9] min-h-screen p-6">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <button
          onClick={clearAllLeads}
          className="border border-e-black text-black px-4 py-2 rounded"
        >
          Clear All Leads
        </button>
      </div>

      
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Total Leads</h3>
          <p className="text-2xl font-bold text-blue-600">
            {leads.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold">New Leads</h3>
          <p className="text-2xl font-bold text-green-600">
            {leads.filter(l => l.status === "new").length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Closed Leads</h3>
          <p className="text-2xl font-bold text-red-600">
            {leads.filter(l => l.status === "closed").length}
          </p>
        </div>
      </div>

   
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">Property</th>
              <th className="p-3">Status</th>
              <th className="p-3">Created</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td className="p-4">Loading...</td>
              </tr>
            ) : leads.length === 0 ? (
              <tr>
                <td className="p-4">No leads found</td>
              </tr>
            ) : (
              leads.map(lead => (
                <tr key={lead.id} className="border-b">
                  <td className="p-3">{lead.name}</td>
                  <td className="p-3">{lead.phone}</td>
                  <td className="p-3">{lead.email}</td>
                  <td className="p-3">{lead.propertyId}</td>
                  <td className="p-3 capitalize">{lead.status}</td>
                  <td className="p-3 text-xs text-gray-500">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-3 flex gap-2 items-center">
                    <select
                      value={lead.status}
                      onChange={(e) =>
                        updateStatus(lead.id, e.target.value)
                      }
                      className="border rounded px-2 py-1 text-xs"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="closed">Closed</option>
                    </select>

                    <button
                      onClick={() => deleteLead(lead.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  )
}
