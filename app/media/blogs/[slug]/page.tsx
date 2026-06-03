"use client";

import Link from "next/link";
import { Star } from "lucide-react";

const blogDetails = {
  image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=1400&auto=format&fit=crop",
};

const programsList = [
  "Children’s Development Program",
  "Youth Empowerment Program",
  "Public Health & Medical Program",
  "Environment Conservation Program",
  "Disaster Risk Reduction (DRR) Program",
  "Public health and medical care",
  "Environment conservation",
  "Teaching program",
  "Management & Administration",
  "Journalism",
  "Public interest",
  "WorkCamps",
];

const testimonials = [
  {
    name: "Charles Richardson",
    role: "Product Designer",
    text: "They approached each shift with professionalism and enthusiasm, often going above expectations to ensure that projects were completed smoothly. Their attention to detail and willingness to assist wherever needed greatly contributed to the success of our programs.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Charles Richardson",
    role: "Product Designer",
    text: "They approached each shift with professionalism and enthusiasm, often going above expectations to ensure that projects were completed smoothly. Their attention to detail and willingness to assist wherever needed greatly contributed to the success of our programs.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Charles Richardson",
    role: "Product Designer",
    text: "They approached each shift with professionalism and enthusiasm, often going above expectations to ensure that projects were completed smoothly. Their attention to detail and willingness to assist wherever needed greatly contributed to the success of our programs.",
    image: "https://images.unsplash.com/photo-1545996124-1f9a0d2d5c27?q=80&w=200&auto=format&fit=crop",
  }
];

const relatedArticles = [
  {
    title: "How can we empower women in rural areas of Nepal?",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=200&auto=format&fit=crop",
  },
  {
    title: "How can we empower women in rural areas of Nepal?",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=200&auto=format&fit=crop",
  },
  {
    title: "How can we empower women in rural areas of Nepal?",
    image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=200&auto=format&fit=crop",
  },
  {
    title: "How can we empower women in rural areas of Nepal?",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=200&auto=format&fit=crop",
  }
];

export default function BlogDetailsPage() {
  return (
    <main className="w-full bg-white">
      {/* =====================================================
          MAIN SECTION
      ===================================================== */}
      <section className="w-full py-10 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-10">
            {/* LEFT COLUMN */}
            <div>
              {/* TOP IMAGE */}
              <div className="w-full h-[300px] sm:h-[400px] rounded-[6px] overflow-hidden bg-[#EEF2F7] shadow-sm mb-10">
                <img
                  src={blogDetails.image}
                  alt="Banner"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* REPEATED CONTENT BLOCKS */}
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="mb-10">
                  <h2 className="text-[28px] font-medium text-[#1F2A44] mb-4">
                    National and International Volunteers in Nepal
                  </h2>
                  <p className="text-[15px] leading-[28px] text-[#5b6478] mb-4">
                    At Volunteers Initiative Nepal (VIN), our work grows stronger every day because of the dedication and passion of our national and international volunteers. Nepal welcomes people from around the world, and each volunteer brings new energy to our community-led programs. These programs focus on education, women's empowerment, health, the environment, and youth development. Because of their commitment, VIN has been able to build long-term partnerships with local communities and create meaningful, sustainable change across different regions of Nepal.
                  </p>
                  <p className="text-[15px] leading-[28px] text-[#5b6478]">
                    Volunteers Initiative Nepal has been actively working especially Jorpati/Nadi, Kavresthali, Dharmasthali, and Goldhunga of Tarkeshwor municipality. VIN started implementing projects from Jitpurphedi (ward # 3) in 2006. VIN extended its projects to Kavresthali (ward # 2) in 2014 and Goldhunga in 2018. When VIN started implementing community empowerment projects in Jitpurphedi, the area was far behind on the human index in areas like health, education, and sanitation.
                  </p>
                </div>
              ))}

              {/* CONTACT FORM */}
              <div className="mt-12">
                <h2 className="text-[30px] font-medium text-[#1f2a44] mb-6">
                  Contact us to partner
                </h2>
                <div className="bg-[#f8f9fc] border border-[#eef1f6] rounded-[8px] p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-[13px] font-medium text-[#1f2a44] mb-2">Enter Name</label>
                      <input type="text" placeholder="e.g. Sweekar" className="w-full h-[46px] rounded-[6px] border border-[#e6e9f2] bg-white px-4 text-[14px] outline-none focus:border-[#2A3495]" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-[#1f2a44] mb-2">Enter Name</label>
                      <input type="text" placeholder="e.g. Sweekar" className="w-full h-[46px] rounded-[6px] border border-[#e6e9f2] bg-white px-4 text-[14px] outline-none focus:border-[#2A3495]" />
                    </div>
                  </div>
                  <div className="mb-5">
                    <label className="block text-[13px] font-medium text-[#1f2a44] mb-2">Subject</label>
                    <input type="text" placeholder="Related Subject" className="w-full h-[46px] rounded-[6px] border border-[#e6e9f2] bg-white px-4 text-[14px] outline-none focus:border-[#2A3495]" />
                  </div>
                  <div className="mb-6">
                    <label className="block text-[13px] font-medium text-[#1f2a44] mb-2">Message</label>
                    <textarea rows={4} placeholder="Type your messages here" className="w-full rounded-[6px] border border-[#e6e9f2] bg-white px-4 py-3 text-[14px] outline-none resize-none focus:border-[#2A3495]" />
                  </div>
                  <button className="w-[160px] h-[46px] rounded-[6px] bg-[#2A3495] text-white text-[14px] font-medium hover:opacity-90 transition-all">
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-8">
              {/* Programs Sidebar */}
              <div className="border border-[#e5e7eb] rounded-md overflow-hidden bg-[#fafbfc]">
                <div className="px-5 py-4 border-b border-[#e5e7eb] bg-[#f5f7fa]">
                  <h2 className="text-[20px] font-medium text-[#1f2a44]">
                    Other available Programs
                  </h2>
                </div>

                <div className="divide-y divide-[#e5e7eb]">
                  {programsList.map((item, index) => (
                    <div
                      key={index}
                      className="px-5 py-4 text-[15px] text-[#5b6478] hover:bg-white transition-all cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              {/* Testimonials */}
              <div className="rounded-[14px] border border-[#D9DFEA] bg-white p-5">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-[28px] font-medium text-[#1D2433] font-serif">
                    Testimonials
                  </h3>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      name: "Charles Richardson",
                      role: "Product Designer",
                      image:
                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
                    },
                    {
                      name: "Sophia Miller",
                      role: "Volunteer Mentor",
                      image:
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
                    },
                    {
                      name: "James Anderson",
                      role: "Community Leader",
                      image:
                        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-[#E2E8F0] bg-[#ffffff] p-6 transition-all duration-300 hover:shadow-lg hover:border-[#CBD5E1]"
                    >
                      {/* Top */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-14 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                          />

                          <div>
                            <h3 className="text-[16px] font-medium text-[#1F2A44] leading-none">
                              {item.name}
                            </h3>

                            <p className=" text-[12px] text-[#6B7280]">
                              {item.role}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-1 mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={15}
                              className="text-[#FFB400] fill-[#FFB400]"
                            />
                          ))}
                        </div>
                      </div>

                      <p className="mt-5 text-[12px] leading-4 text-[#5B6475]">
                        They approached each shift with professionalism and
                        enthusiasm, often going above expectations to ensure
                        projects were completed smoothly. Their attention to
                        detail and willingness to assist wherever needed greatly
                        contributed to the success of our programs.
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Articles */}
              <div className=" rounded-[24px] border border-[#D9DCE7] bg-[#F7F8FA] p-6">
                {/* Heading */}
                <h2 className="text-[28px] leading-[42px] text-[#1F2432] mb-8">
                  Related Articles & Blogs
                </h2>

                {/* Articles List */}
                <div className="space-y-10">
                  {[
                    {
                      title: "How can we empower women in rural areas of nepal ?",
                      image: "/hero.png",
                    },
                    {
                      title: "How can we empower women in rural areas of nepal ?",
                      image: "/hero.png",
                    },
                    {
                      title: "How can we empower women in rural areas of nepal ?",
                      image: "/hero.png",
                    },
                    {
                      title: "How can we empower women in rural areas of nepal ?",
                      image: "/hero.png",
                    },
                  ].map((article, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-5 group cursor-pointer"
                    >
                      {/* Image */}
                      <div className="min-w-[120px] overflow-hidden rounded-[5px]">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-[120px] h-[100px] object-cover group-hover:scale-105 transition duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-[14px] leading-[24px] font-medium text-[#64748B] group-hover:text-[#2D3192] transition">
                          {article.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROGRAMS YOU MAY LIKE (BOTTOM)
      ===================================================== */}
      <section className="w-full bg-[#F1F5F9] mt-[20px] py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start justify-between mb-10">
            <div>
              <h2 className="text-[32px] font-semibold text-[#1f2a44] leading-none mb-3">
                Programs you May Like
              </h2>
              <p className="text-[14px] leading-[26px] text-[#6b7280] max-w-[620px]">
                Listen to heartfelt stories from people who chose to make a difference with us.
              </p>
            </div>
            <button className="flex items-center gap-2 text-[14px] font-medium text-[#1f2a44] hover:text-[#2A3495] transition-all">
              Explore All Projects <span className="text-[18px]">→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-[8px] hover:shadow-md transition-all bg-white"
              >
                <div className="relative h-[240px]">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                    alt="Program"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white rounded-md px-4 py-3 shadow-md border border-[#e5e7eb]">
                      <h3 className="text-[14px] font-medium text-center text-[#1f2a44]">
                        Domestic Violence Prevention<br />Volunteer Program in Nepal
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
