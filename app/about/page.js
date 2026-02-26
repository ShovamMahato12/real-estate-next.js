export default function About() {
  return (
    <div className="bg-[#F4F6F9] min-h-screen">

     
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          About PropertySearch.com
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-200">
          A trusted real estate consultancy based in West Delhi, committed to
          delivering premium property solutions with transparency and integrity.
        </p>
      </section>

     
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              PropertySearch.com specializes in buying, selling, and renting
              premium residential and commercial properties across West Delhi.
              We combine deep local market knowledge with a client-first approach.
            </p>
            <p className="text-gray-600">
              Our goal is not just to close deals but to build long-term
              relationships based on trust, professionalism, and results.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To provide transparent, ethical, and data-driven real estate
              advisory services that empower clients to make confident decisions.
            </p>

            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become West Delhi’s most trusted and technology-driven
              real estate advisory brand.
            </p>
          </div>
        </div>
      </section>

      
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Why Choose PropertySearch.com?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#F4F6F9] p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-3">Local Market Expertise</h3>
              <p className="text-gray-600 text-sm">
                Deep understanding of West Delhi’s property trends, pricing,
                and investment opportunities.
              </p>
            </div>

            <div className="bg-[#F4F6F9] p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-3">Transparent Deals</h3>
              <p className="text-gray-600 text-sm">
                No hidden costs, no surprises — only honest advisory and
                fair negotiations.
              </p>
            </div>

            <div className="bg-[#F4F6F9] p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-3">End-to-End Support</h3>
              <p className="text-gray-600 text-sm">
                From property discovery to paperwork and final closure,
                we handle everything.
              </p>
            </div>

            <div className="bg-[#F4F6F9] p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-3">Premium Listings</h3>
              <p className="text-gray-600 text-sm">
                Carefully curated high-quality residential and commercial properties.
              </p>
            </div>

            <div className="bg-[#F4F6F9] p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-3">Client-Centric Approach</h3>
              <p className="text-gray-600 text-sm">
                We prioritize your goals and tailor strategies accordingly.
              </p>
            </div>

            <div className="bg-[#F4F6F9] p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-3">Technology-Driven</h3>
              <p className="text-gray-600 text-sm">
                Modern tools and CRM systems ensure smooth and organized transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="bg-blue-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold">100+</h3>
            <p className="text-sm text-gray-300">Properties Listed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">80+</h3>
            <p className="text-sm text-gray-300">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">5+ Years</h3>
            <p className="text-sm text-gray-300">Market Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">100%</h3>
            <p className="text-sm text-gray-300">Transparent Deals</p>
          </div>
        </div>
      </section>

    </div>
  );
}
