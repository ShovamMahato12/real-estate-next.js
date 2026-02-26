"use client"
import { useState } from "react"

export default function FilterBar({ onFilter }) {
  const [location, setLocation] = useState("")
  const [type, setType] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  const handleFilter = () => {
    onFilter({ location, type, maxPrice })
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 -mt-10 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

      
        <select
          className="border p-3 rounded w-full"
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          <option value="Rajouri Garden">Rajouri Garden</option>
          <option value="Janakpuri">Janakpuri</option>
          <option value="Punjabi Bagh">Punjabi Bagh</option>
        </select>

     
        <select
          className="border p-3 rounded w-full"
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
        </select>

     
        <input
          type="number"
          placeholder="Max Price"
          className="border p-3 rounded w-full"
          onChange={(e) => setMaxPrice(e.target.value)}
        />

     
        <button
          onClick={handleFilter}
          className="bg-[#0F2C59] text-white rounded p-3 hover:bg-[#1B4B8A] transition"
        >
          Search
        </button>
      </div>
    </div>
  )
}
