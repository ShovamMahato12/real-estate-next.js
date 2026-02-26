"use client"
import { useState } from "react"

export default function LeadForm({ propertyId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess("")
    setError("")

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          propertyId
        })
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.message)

      setSuccess("Your inquiry has been sent successfully!")
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      })
    } catch (err) {
      setError(err.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded-2xl 
                    p-4 sm:p-6 md:p-8 mt-8">

      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-center sm:text-left">
        Request Information
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-3 sm:px-4 py-2 
                     text-sm sm:text-base
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-3 sm:px-4 py-2 
                     text-sm sm:text-base
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-3 sm:px-4 py-2 
                     text-sm sm:text-base
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full border rounded-lg px-3 sm:px-4 py-2 
                     text-sm sm:text-base
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2.5 sm:py-3
                     text-sm sm:text-base
                     rounded-lg hover:bg-blue-700 transition 
                     disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Inquiry"}
        </button>

        {success && (
          <p className="text-green-600 text-sm text-center sm:text-left">
            {success}
          </p>
        )}

        {error && (
          <p className="text-red-600 text-sm text-center sm:text-left">
            {error}
          </p>
        )}
      </form>
    </div>
  )
}