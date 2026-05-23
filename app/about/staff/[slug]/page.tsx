const STAFF = [
  {
    slug: "bhupendra-ghimire",
    name: "Bhupendra Ghimire",
    country: "(Nepal)",
    role: "President",
    education: "Master in Education",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    bio:
      "Bhupendra Ghimire leads the organization with a focus on education, community development, and long-term impact.",
  },
  {
    slug: "dinesh-khatiwoda",
    name: "Dinesh Khatiwoda",
    country: "",
    role: "Volunteer Manager",
    education: "Master in Education",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    bio:
      "Dinesh manages volunteer placements and ensures smooth coordination between volunteers and local partners.",
  },
  {
    slug: "bimal-acharya",
    name: "Bimal Acharya",
    country: "",
    role: "Program Manager",
    education: "Master’s degree in social science",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop",
    bio:
      "Bimal oversees program delivery, monitoring, and improvement across VIN’s community initiatives.",
  },
  {
    slug: "richa-ghimire",
    name: "Richa Ghimire",
    country: "",
    role: "Secretary to the President",
    education: "Undergrad Student",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    bio:
      "Richa supports leadership operations and helps coordinate organizational priorities and communication.",
  },
  {
    slug: "varsha-pradhan",
    name: "Varsha Pradhan",
    country: "",
    role: "Communication officer",
    education: "Masters in Human and Nature Conservation",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
    bio:
      "Varsha manages communication efforts and helps tell VIN’s stories to a wider audience.",
  },
  {
    slug: "manita-basnet",
    name: "Manita Basnet",
    country: "",
    role: "Accountant & Logistic Management officer",
    education: "Bachelor in Business Studies",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    bio:
      "Manita ensures financial and logistic coordination to keep programs running efficiently and transparently.",
  },
];

export default function StaffSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const staff = STAFF.find((s) => s.slug === params.slug);

  if (!staff) {
    return (
      <main className="w-full bg-white py-16 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[42px] font-semibold text-[#1f2a44] mb-4">
            Staff member not found
          </h1>
          <p className="text-[15px] text-[#7b8498]">
            The requested staff profile does not exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full bg-white py-14 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <section className="w-full bg-white py-14 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">
        
        {/* =========================================
            LEFT CONTENT
        ========================================= */}
        <div>
          
          {/* TOP PROFILE SECTION */}
          <div className="flex flex-col md:flex-row gap-8 mb-10">
            
            {/* Profile Image */}
            <div className="w-[180px] h-[180px] rounded-[8px] overflow-hidden border border-[#e5e7eb] flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
                alt="Bhupendra Ghimire"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              
              {/* Name */}
              <h1 className="text-[34px] font-semibold text-[#1f2a44] leading-none mb-3">
                Bhupendra Ghimire{" "}
                <span className="text-[18px] text-[#7b8498] font-normal">
                  (Bhupi)
                </span>
              </h1>

              {/* Role */}
              <p className="text-[18px] font-medium text-[#1f2a44] mb-2">
                President
              </p>

              {/* Degree */}
              <p className="text-[15px] text-[#7b8498] mb-8">
                Master’s in Education
              </p>

              {/* Social Media */}
              <div>
                <h3 className="text-[16px] font-semibold text-[#1f2a44] mb-4">
                  Social Media
                </h3>

                <div className="flex items-center gap-4">
                  
                  {/* Whatsapp */}
                  <a
                    href="#"
                    className="w-[34px] h-[34px] rounded-full bg-[#25D366] text-white flex items-center justify-center text-[16px] hover:scale-105 transition-all"
                  >
                    ☏
                  </a>

                  {/* Facebook */}
                  <a
                    href="#"
                    className="w-[34px] h-[34px] rounded-full bg-[#1877F2] text-white flex items-center justify-center text-[16px] hover:scale-105 transition-all"
                  >
                    f
                  </a>

                  {/* X */}
                  <a
                    href="#"
                    className="w-[34px] h-[34px] rounded-full bg-black text-white flex items-center justify-center text-[15px] hover:scale-105 transition-all"
                  >
                    𝕏
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    className="w-[34px] h-[34px] rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center text-[15px] hover:scale-105 transition-all"
                  >
                    ◎
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================
              TABS
          ========================================= */}
          <div className="flex flex-wrap gap-2 border-b border-[#e5e7eb] pb-5 mb-10">
            
            {/* Active Tab */}
            <button className="px-8 h-[42px] rounded-[4px] bg-[#2A3495] text-white text-[14px] font-medium">
              Background
            </button>

            {[
              "Responsibilities",
              "Experiences",
              "Education",
              "Skills",
              "Professional Affiliations",
            ].map((tab, index) => (
              <button
                key={index}
                className="px-8 h-[42px] rounded-[4px] bg-[#f5f7fa] border border-[#e5e7eb] text-[#6b7280] text-[14px] font-medium hover:bg-white transition-all"
              >
                {tab}
              </button>
            ))}
          </div>

          {/* =========================================
              CONTENT
          ========================================= */}
          <div className="space-y-7">
            
            <div>
              <h2 className="text-[18px] font-semibold text-[#1f2a44] mb-3">
                Role at VIN
              </h2>

              <p className="text-[15px] leading-[32px] text-[#5b6478]">
                Bhupi, as Founder President of VIN, makes decisions on behalf of
                the organization. He creates new programs and formulates the
                planning accordingly. He represents VIN to its many constituents
                and stakeholders and is responsible for fundraising and
                developing networks.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold text-[#1f2a44] mb-3">
                Experience and Expertise
              </h2>

              <p className="text-[15px] leading-[32px] text-[#5b6478]">
                Bhupi worked as a teacher and school principal in Nepal for
                eight years before starting VIN. He worked with a British
                charity as a Programme Coordinator and Teacher Trainer and gained
                experience in community mobilization and children’s development.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold text-[#1f2a44] mb-3">
                Management Committee Members
              </h2>

              <p className="text-[15px] leading-[32px] text-[#5b6478]">
                Bhupi has traveled extensively to develop VIN’s network across
                the United Kingdom, Denmark, Sweden, Finland, the Netherlands,
                Austria, France, Spain, Tunisia, Italy, Slovakia, Germany,
                Belgium, Luxembourg, Slovenia, Czech Republic, Australia,
                Singapore, the Philippines, Indonesia, Turkey, Russia, UAE,
                Oman, Qatar, Armenia, South Korea, Uganda and many other
                countries promoting VIN and community development.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================
            RIGHT SIDEBAR
        ========================================= */}
        <div className="space-y-8">
          
          {/* Testimonials */}
          <div className="border border-[#e5e7eb] rounded-[8px] overflow-hidden bg-[#fafbfc]">
            
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e7eb] bg-[#f5f7fa]">
              <div>
                <h3 className="text-[20px] font-semibold text-[#1f2a44]">
                  What People Say about Bhupi
                </h3>
              </div>

              <button className="text-[12px] text-[#9ca3af] hover:text-[#2A3495] transition-all">
                see all
              </button>
            </div>

            {/* Reviews */}
            <div className="divide-y divide-[#e5e7eb]">
              
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="p-5 hover:bg-white transition-all"
                >
                  <div className="flex gap-4">
                    
                    {/* Avatar */}
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop"
                        alt="Reviewer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      
                      {/* Name + Rating */}
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <h4 className="text-[15px] font-semibold text-[#1f2a44] leading-none">
                            Charles Richardson
                          </h4>

                          <p className="text-[12px] text-[#9ca3af] mt-1">
                            Product Designer
                          </p>
                        </div>

                        <div className="text-[#fbbf24] text-[12px]">
                          ★★★★★
                        </div>
                      </div>

                      {/* Review */}
                      <p className="text-[13px] leading-[24px] text-[#5b6478]">
                        They approached each shift with professionalism and
                        enthusiasm, often going above and beyond to ensure that
                        projects were completed smoothly.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
      {/* =========================================
    INTERVIEW VIDEOS SECTION
========================================= */}
      <section className="max-w-7xl bg-white py-10">
        <div className="bg-[#f8f9fc] border border-[#e9edf5] rounded-[10px] p-6">
          {/* Heading */}
          <div className="mb-6">
            <h2 className="text-[30px] font-semibold text-[#1f2a44] mb-2">
              Interview Videos
            </h2>

            <p className="text-[14px] text-[#7b8498]">
              Listen to volunteer stories from people who chose to make a
              difference with VIN.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                {/* Thumbnail */}
                <div className="relative h-[170px] rounded-[8px] overflow-hidden border border-[#e5e7eb]">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                    alt="Interview"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-[#2A3495] ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-[15px] font-medium leading-[24px] text-[#1f2a44] group-hover:text-[#2A3495] transition-all">
                    Improved Teaching Quality Key to Nepal’s Overall Development
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
    ARTICLES SECTION
========================================= */}
      <section className="max-w-7xl bg-white py-4">
        <div className="bg-[#f8f9fc] border border-[#e9edf5] rounded-[10px] p-6">
          {/* Heading */}
          <div className="mb-6">
            <h2 className="text-[30px] font-semibold text-[#1f2a44] mb-2">
              Articles
            </h2>

            <p className="text-[14px] text-[#7b8498]">
              Read insightful stories from people who chose to make a difference
              with VIN.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                {/* Thumbnail */}
                <div className="h-[170px] rounded-[8px] overflow-hidden border border-[#e5e7eb]">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                    alt="Article"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                  />
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-[15px] font-medium leading-[24px] text-[#1f2a44] group-hover:text-[#2A3495] transition-all">
                    Improved Teaching Quality Key to Nepal’s Overall Development
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
