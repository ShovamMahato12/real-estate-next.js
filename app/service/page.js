export default function Service() {
  return (
    <div className="bg-[#F4F6F9] min-h-screen">

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Our Services
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-200">
          Comprehensive real estate solutions designed to simplify buying,
          selling, and renting premium properties in West Delhi.
        </p>
      </section>

      {/* Core Services */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Property Buying</h3>
            <p className="text-gray-600 mb-4">
              We help you find premium residential and commercial properties
              that match your budget and lifestyle preferences.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Curated premium listings</li>
              <li>• Site visits & evaluation</li>
              <li>• Price negotiation support</li>
              <li>• Legal & documentation assistance</li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Property Selling</h3>
            <p className="text-gray-600 mb-4">
              Sell your property at the best market value with professional
              marketing and strategic advisory.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Property valuation</li>
              <li>• Professional listing exposure</li>
              <li>• Buyer screening</li>
              <li>• Smooth transaction management</li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Rental Services</h3>
            <p className="text-gray-600 mb-4">
              Verified tenants and hassle-free rental management for both
              landlords and tenants.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Tenant verification</li>
              <li>• Rental pricing strategy</li>
              <li>• Agreement assistance</li>
              <li>• End-to-end support</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            Our Working Process
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-3">01</div>
              <h4 className="font-semibold mb-2">Consultation</h4>
              <p className="text-sm text-gray-600">
                Understanding your requirements and investment goals.
              </p>
            </div>

            <div>
              <div className="text-3xl font-bold text-blue-600 mb-3">02</div>
              <h4 className="font-semibold mb-2">Property Matching</h4>
              <p className="text-sm text-gray-600">
                Shortlisting properties that align with your needs.
              </p>
            </div>

            <div>
              <div className="text-3xl font-bold text-blue-600 mb-3">03</div>
              <h4 className="font-semibold mb-2">Negotiation</h4>
              <p className="text-sm text-gray-600">
                Ensuring the best price and transparent transaction.
              </p>
            </div>

            <div>
              <div className="text-3xl font-bold text-blue-600 mb-3">04</div>
              <h4 className="font-semibold mb-2">Closure</h4>
              <p className="text-sm text-gray-600">
                Documentation and final handover support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Why Work With PropertySearch.com?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-200 text-sm sm:text-base">
          We combine market expertise, ethical advisory, and technology-driven
          solutions to deliver seamless real estate experiences. Our client-first
          approach ensures transparency, efficiency, and long-term value.
        </p>
      </section>

    </div>
  )
}