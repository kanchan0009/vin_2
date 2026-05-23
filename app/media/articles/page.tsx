export default function VolunteerStoriesPage() {
  const stories = [1, 2, 3, 4, 5, 6];

  return (
    <main className="w-full bg-white py-14 px-6 md:px-10">
      <div className=" mx-auto mb-20">
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          
          {stories.map((item, index) => (
            <div key={index} className="group">
              
              {/* =========================================
                  IMAGE CARD
              ========================================= */}
              <div className="relative overflow-hidden rounded-[6px]">
                
                {/* Image */}
                <img
                  src="https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=1400&auto=format&fit=crop"
                  alt="Volunteer Story"
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition-all duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-0 left-0 w-full bg-black/60 px-4 py-2.5">
                  <h3 className="text-white text-[18px] font-medium leading-none">
                    Women Empowerment Program in Nepal
                  </h3>
                </div>
              </div>

              {/* =========================================
                  META INFO
              ========================================= */}
              <div className="flex flex-wrap items-center gap-4 mt-3 text-[11px] text-[#7b8498]">
                <span>👤 By volunteering initiative Nepal</span>
                <span>📅 18 Aug 2026</span>
                <span>💬 8 Comments</span>
              </div>

              {/* =========================================
                  TITLE
              ========================================= */}
              <h2 className="text-[24px] font-semibold leading-[34px] text-[#1f2a44] mt-3 mb-3">
                Kathmandu in Pictures: A Journalism Student’s Volunteer Journey
                with VIN
              </h2>

              {/* =========================================
                  DESCRIPTION
              ========================================= */}
              <p className="text-[14px] leading-[28px] font-normal text-[#5b6478] mb-6">
                The role as a volunteer is to develop a collaborative process
                and outcomes. Though volunteer roles are not for humanitarian
                work, they help people in rural areas gain better opportunities
                and support local communities.
              </p>

              {/* =========================================
                  BUTTONS
              ========================================= */}
              <div className="flex items-center gap-4">
                
                {/* Read More */}
                <button className="w-[150px] h-[40px] rounded-[4px] bg-[#2A3495] text-white text-[13px] font-medium hover:opacity-90 transition-all">
                  Read More
                </button>

                {/* Volunteer Now */}
                <button className="w-[150px] h-[40px] rounded-[4px] border border-[#cfd5e3] bg-white text-[#2A3495] text-[13px] font-medium hover:bg-[#f8f9fc] transition-all">
                  Volunteer Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Programs Section */}
      <section className="w-full bg-[#F1F5F9] mt-[20px] py-16 px-6 md:px-10">
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