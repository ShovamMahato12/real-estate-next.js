import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#0f2b4c] text-white px-6 py-12 mt-16">
      
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
   
        <div>
          <Link href="/">
            <Image
              src="/logo.webp"
              alt="PropertySerch Logo"
              width={160}
              height={60}
              className="h-12 w-auto mb-4"
            />
          </Link>

          <p className="text-sm text-gray-300 leading-relaxed">
            PropertySerch.com is a trusted property management company providing 
            complete end-to-end solutions for residential and commercial properties 
            across Delhi NCR. We ensure transparent, secure, and hassle-free services 
            for owners and NRIs.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Expertise</h3>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Property Management</li>
            <li>Construction Company</li>
            <li>Estate Agent Services</li>
            <li>Sale, Purchase & Leasing</li>
            <li>Tenant Sourcing & Rent Collection</li>
          </ul>
        </div>

  
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

          <p className="text-sm text-gray-300 leading-relaxed">
            G-53, Vardhman Location Plaza, Plot No.4,<br/>
            J-Block Community Centre,<br/>
            Rajouri Garden, New Delhi-110027
          </p>

          <p className="mt-4 text-sm text-gray-300">
            📍 Delhi NCR<br/>
            📧 info@propertyserch.com
          </p>
        </div>

      </div>

      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} PropertySerch.com | All Rights Reserved
      </div>

    </footer>
  )
}
