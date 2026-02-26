// "use client"
// import { useEffect, useState } from "react"
// import Hero from "@/components/Hero"
// import PropertyCard from "@/components/PropertyCard"
// import FilterBar from "@/components/FilterBar"

// export default function Home() {
//   const [properties, setProperties] = useState([])
//   const [filtered, setFiltered] = useState([])

//   useEffect(() => {
//     fetch("/api/properties")
//       .then(res => res.json())
//       .then(data => {
//         setProperties(data)
//         setFiltered(data)
//       })
//   }, [])

//   const handleFilter = ({ location, type, maxPrice }) => {
//     let result = properties

//     if (location) {
//       result = result.filter(p => p.location === location)
//     }

//     if (type) {
//       result = result.filter(p => p.type === type)
//     }

//     if (maxPrice) {
//       result = result.filter(p => p.price <= Number(maxPrice))
//     }

//     setFiltered(result)
//   }

//   return (
//     <div className="bg-[#F4F6F9] min-h-screen">
//       <Hero />

//       <div className="max-w-7xl mx-auto px-6">
//         <FilterBar onFilter={handleFilter} />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <h2 className="text-2xl font-bold mb-8">
//           Featured Listings ({filtered.length})
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filtered.map(p => (
//             <PropertyCard key={p.id} property={p} />
//           ))}
//         </div>
//       </div>

      
//     </div>
//   )
// }


"use client"
import { useEffect, useState } from "react"
import Hero from "@/components/Hero"
import PropertyCard from "@/components/PropertyCard"
import FilterBar from "@/components/FilterBar"
import LeadForm from "@/components/LeadForm"

export default function Home() {
  const [properties, setProperties] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    fetch("/api/properties")
      .then(res => res.json())
      .then(data => {
        setProperties(data)
        setFiltered(data)
      })
  }, [])

  const handleFilter = ({ location, type, maxPrice }) => {
    let result = properties

    if (location) {
      result = result.filter(p => p.location === location)
    }

    if (type) {
      result = result.filter(p => p.type === type)
    }

    if (maxPrice) {
      result = result.filter(p => p.price <= Number(maxPrice))
    }

    setFiltered(result)
  }

  return (
    <div className="bg-[#F4F6F9] min-h-screen">
      <Hero />

      <div className="max-w-7xl mx-auto px-6">
        <FilterBar onFilter={handleFilter} />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8">
          Featured Listings ({filtered.length})
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(p => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>

        {/* ✅ Lead Form Section */}
        <div className="mt-16 bg-white shadow-lg rounded-xl p-8">
          <LeadForm properties={properties} />
        </div>

      </div>
    </div>
  )
}