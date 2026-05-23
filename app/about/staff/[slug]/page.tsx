import { notFound } from "next/navigation";

/* =========================================================
   STAFF DATA
========================================================= */

const STAFF = [
  {
    slug: "bhupendra-ghimire",
    name: "Bhupendra Ghimire",
    nickname: "Bhupi",
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
    nickname: "",
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
    nickname: "",
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
    nickname: "",
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
    nickname: "",
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
    nickname: "",
    country: "",
    role: "Accountant & Logistic Management officer",
    education: "Bachelor in Business Studies",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    bio:
      "Manita ensures financial and logistic coordination to keep programs running efficiently and transparently.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default async function StaffSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const staff = STAFF.find((s) => s.slug === slug);

  if (!staff) {
    notFound();
  }

  return (
    <main className="w-full bg-white py-14 px-4 sm:px-6 md:px-10">
      
      {/* MAIN SECTION */}
      <section className=" mx-auto grid mt-15 grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">
        
        {/* LEFT CONTENT */}
        <div>
          
          {/* PROFILE SECTION */}
          <div className="flex flex-col md:flex-row gap-8 mb-10">
            
            {/* IMAGE */}
            <div className="w-[180px] h-[180px] rounded-[8px] overflow-hidden border border-[#e5e7eb] flex-shrink-0">
              <img
                src={staff.image}
                alt={staff.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* INFO */}
            <div className="flex-1">
              
              <h1 className="text-[34px] font-medium text-[#1f2a44] leading-none mb-3">
                {staff.name}{" "}
                
                {staff.nickname && (
                  <span className="text-[18px] text-[#7b8498] font-normal">
                    ({staff.nickname})
                  </span>
                )}
              </h1>

              <p className="text-[18px] font-medium text-[#1f2a44] mb-2">
                {staff.role}
              </p>

              <p className="text-[15px] text-[#7b8498] mb-2">
                {staff.education}
              </p>

              <p className="text-[15px] text-[#7b8498] mb-8">
                {staff.country}
              </p>

              {/* SOCIAL MEDIA */}
              <div>
                <h3 className="text-[16px] font-semibold text-[#1f2a44] mb-4">
                  Social Media
                </h3>

                <div className="flex items-center gap-4">
                  
                  <a
                    href="#"
                    className="w-[34px] h-[34px] rounded-full bg-[#25D366] text-white flex items-center justify-center text-[16px]"
                  >
                    ☏
                  </a>

                  <a
                    href="#"
                    className="w-[34px] h-[34px] rounded-full bg-[#1877F2] text-white flex items-center justify-center text-[16px]"
                  >
                    f
                  </a>

                  <a
                    href="#"
                    className="w-[34px] h-[34px] rounded-full bg-black text-white flex items-center justify-center text-[15px]"
                  >
                    𝕏
                  </a>

                  <a
                    href="#"
                    className="w-[34px] h-[34px] rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center text-[15px]"
                  >
                    ◎
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* TABS */}
          <div className="flex flex- no-wrap gap-2 border-b border-[#e5e7eb] pb-5 mb-10">
            
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

          {/* CONTENT */}
          <div className="space-y-7">
            
            <div>
              <h2 className="text-[18px] font-medium text-[#1f2a44] mb-3">
                About
              </h2>

              <p className="text-[15px] leading-[32px] text-[#5b6478]">
                {staff.bio}
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-medium text-[#1f2a44] mb-3">
                Experience and Expertise
              </h2>

              <p className="text-[15px] leading-[32px] text-[#5b6478]">
                {staff.name} has extensive experience working with community
                development initiatives, leadership programs, and volunteer
                management activities across different regions.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-medium text-[#1f2a44] mb-3">
                Contribution to VIN
              </h2>

              <p className="text-[15px] leading-[32px] text-[#5b6478]">
                Through dedication and leadership, {staff.name} continues to
                contribute significantly toward VIN’s mission of empowering
                communities and supporting sustainable development.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-8">
          
          {/* TESTIMONIALS */}
          <div className="border border-[#e5e7eb] rounded-[8px] overflow-hidden bg-[#fafbfc]">
            
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e7eb] bg-[#f5f7fa]">
              <h3 className="text-[20px] font-semibold text-[#1f2a44]">
                What People Say
              </h3>

              <button className="text-[12px] text-[#9ca3af] hover:text-[#2A3495]">
                see all
              </button>
            </div>

            <div className="divide-y divide-[#e5e7eb]">
              
              {[1, 2,3].map((item) => (
                <div
                  key={item}
                  className="p-5 hover:bg-white transition-all"
                >
                  <div className="flex gap-4">
                    
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop"
                        alt="Reviewer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      
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

                      <p className="text-[13px] leading-[24px] text-[#5b6478]">
                        They approached each shift with professionalism and
                        enthusiasm, often going above and beyond.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}