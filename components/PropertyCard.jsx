export default function PropertyCard({property}){
  return(
    <div className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden">
      <img src={property.image} className="h-56 w-full object-cover"/>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{property.title}</h3>
        <p className="text-gray-500">{property.location}</p>
        <p className="text-[#2E86DE] font-bold mt-2">
          ₹{property.price.toLocaleString()}
        </p>
        <button className="mt-4 bg-[#0F2C59] text-white px-4 py-2 rounded w-full">
          Details
        </button>
      </div>
    </div>
  )
}