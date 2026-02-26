"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Message sent successfully!")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="bg-[#F4F6F9] min-h-screen">

   
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Get In Touch
        </h1>
        <p className="max-w-2xl mx-auto text-gray-200 text-sm sm:text-base">
          Have questions about buying, selling, or renting property?
          Our team is here to help you.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

       
        <div className="space-y-8">

          <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
            <MapPin className="text-blue-600" />
            <div>
              <h3 className="font-semibold">Office Address</h3>
              <p className="text-gray-600 text-sm">
                Rajouri Garden, New Delhi
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
            <Phone className="text-blue-600" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600 text-sm">
                +91 9876543210
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
            <Mail className="text-blue-600" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600 text-sm">
                info@propertyadvisory.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
            <Clock className="text-blue-600" />
            <div>
              <h3 className="font-semibold">Working Hours</h3>
              <p className="text-gray-600 text-sm">
                Mon – Sat: 10:00 AM – 7:00 PM
              </p>
            </div>
          </div>

        </div>

       
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-6">
            Send Us a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </section>

    </div>
  )
}
