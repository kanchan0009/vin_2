export default function ContactPage() {
  return (
    <main>
      <section className="w-full bg-white py-16 px-6 md:px-10">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          {/* Left Form Section */}
          <div>
            {/* Heading */}
            <h2 className="text-[38px] font-medium text-[#1f2a44] mb-8">
              Contact us to partner
            </h2>

            {/* Form Box */}
            <div className="bg-[#f8f9fc] border border-[#e7eaf2] rounded-md p-6 md:p-8">
              {/* Top Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Enter Name */}
                <div>
                  <label className="block text-[13px] font-medium text-[#1f2a44] mb-2">
                    Enter Name
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. Samber"
                    className="w-full h-[44px] rounded-[4px] border border-[#e5e7eb] bg-[#f4f5fb] px-4 text-[14px] text-[#374151] placeholder:text-[#9ca3af] outline-none focus:border-[#2A3495]"
                  />
                </div>

                {/* Enter Home */}
                <div>
                  <label className="block text-[13px] font-medium text-[#1f2a44] mb-2">
                    Enter Home
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. Samber"
                    className="w-full h-[44px] rounded-[4px] border border-[#e5e7eb] bg-[#f4f5fb] px-4 text-[14px] text-[#374151] placeholder:text-[#9ca3af] outline-none focus:border-[#2A3495]"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label className="block text-[13px] font-medium text-[#1f2a44] mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Related Subject"
                  className="w-full h-[44px] rounded-[4px] border border-[#e5e7eb] bg-[#f4f5fb] px-4 text-[14px] text-[#374151] placeholder:text-[#9ca3af] outline-none focus:border-[#2A3495]"
                />
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-[13px] font-medium text-[#1f2a44] mb-2">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Type your message here"
                  className="w-full rounded-[4px] border border-[#e5e7eb] bg-[#f4f5fb] px-4 py-4 text-[14px] text-[#374151] placeholder:text-[#9ca3af] outline-none resize-none focus:border-[#2A3495]"
                />
              </div>

              {/* Button */}
              <button className="w-full h-[44px] rounded-[4px] bg-[#2A3495] hover:bg-[#1f2877] transition-all text-white text-[14px] font-medium">
                Sponsor Child
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div>
            <div className="bg-[#f8f9fc] border border-[#e7eaf2] rounded-md p-6">
              {/* Organization Name */}
              <h3 className="text-[22px] font-semibold text-[#1f2a44] mb-6">
                Volunteers Initiative Nepal
              </h3>

              {/* Info */}
              <div className="space-y-5 text-[14px] leading-[26px] text-[#5b6478]">
                <div>
                  <p>Chibriti Tole 14700/26B</p>
                  <p>SWC Affiliation: 20061</p>
                  <p>PAN: 304206447</p>
                </div>

                <div>
                  <p>
                    Email:{" "}
                    <span className="text-[#2A3495]">support@vin.org.np</span>
                  </p>

                  <p>
                    Tel: <span className="text-[#2A3495]">+977 1 4962560</span>
                  </p>

                  <p>
                    Tollfree:{" "}
                    <span className="text-[#2A3495]">+977 14356679</span>
                  </p>

                  <p>
                    Whatsapp and Viber:{" "}
                    <span className="text-[#2A3495]">+977 980 109 1287</span>
                  </p>
                </div>

                {/* Address */}
                <div className="pt-4 border-t border-[#e5e7eb]">
                  <h4 className="text-[15px] font-semibold text-[#1f2a44] mb-2">
                    Postal Address:
                  </h4>

                  <p>Pepsi B.P 18737</p>
                  <p>Pokhara Road, Nayabazar</p>
                  <p>Khusibu, Kathmandu Metropolitan - 16</p>
                  <p>Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Programs Section */}
      <section className="w-full bg-[#F1F5F9] py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-start justify-between mb-10">
            {/* Left Content */}
            <div>
              <h2 className="text-[32px] font-semibold text-[#1f2a44] leading-none mb-3">
                Programs you May Like
              </h2>

              <p className="text-[14px] leading-[26px] text-[#6b7280] max-w-[620px]">
                Discover meaningful volunteer opportunities that align with your
                passion and skills while creating a lasting impact in Nepalese
                communities.
              </p>
            </div>

            {/* Explore Link */}
            <button className="flex items-center gap-2 text-[14px] font-medium text-[#1f2a44] hover:text-[#2A3495] transition-all">
              Explore All Programs
              <span className="text-[18px]">→</span>
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-md border border-[#e5e7eb] shadow-sm hover:shadow-md transition-all bg-white"
              >
                {/* Full Image */}
                <div className="relative h-[260px]">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                    alt="Program"
                    className="w-full h-full object-cover"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/20" />

                  {/* Overlapping Content */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white rounded-md px-4 py-3 shadow-md border border-[#e5e7eb]">
                      <h3 className="text-[15px] leading-[22px] font-semibold text-center text-[#1f2a44]">
                        Domestic Violence Prevention Volunteer Program in Nepal
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
