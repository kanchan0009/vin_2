"use client";

import Link from "next/link";

export default function TestimonialsPage() {
  const programs = [
    "Children Development Program",
    "Youth Empowerment Program",
    "Public Health & Medical Program",
    "Environment conservation program",
    "Disaster Risk Reduction (DRR) program",
    "Public health and medical care",
    "Environment conservation",
    "Teaching program",
    "Management & Administration",
    "Journalism",
    "Public Interest",
    "Work Camps",
  ];

  const testimonials = [
    {
      slug: "bibek-kumar-sah-seo-intern",
      name: "Bibek Kumar Sah",
      role: "SEO Intern",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
      text: `"Volunteering with VIN completely transformed my way to see community development. The staff were incredibly supportive, and the projects truly made a real impact. I learned more in a few weeks than I ever expected."`,
    },
    {
      slug: "ashley-patterson-seo-intern",
      name: "Ashley Patterson",
      role: "SEO Intern",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
      text: `"Volunteering with VIN helped me connect digital marketing with real community impact. The experience strengthened my skills and deepened my understanding of how sustainable change is built."`,
    },
    {
      slug: "charles-richardson-product-designer",
      name: "Charles Richardson",
      role: "Product Designer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
      text: `"The experience was professional, inspiring, and deeply meaningful. Working with VIN showed me how thoughtful design and planning can improve community outcomes."`,
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#F5F6F8] px-6 py-8">
      <div className="max-w-[1400px] mx-auto">
        {/* ======================================================
            LAYOUT
        ====================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_310px] gap-10">
          {/* ======================================================
              LEFT CONTENT
          ====================================================== */}
          <div>
            {/* Heading */}
            <h1 className="text-[40px] font-medium text-[#1F2A44] mb-4">
              What Our Volunteers Say
            </h1>

            {/* Description */}
            <p className="text-[18px] leading-[24px] text-[#6B7280] max-w-[850px] mb-8">
              Read testimonials from volunteers and community members involved
              with teachers, experiences, and feedback that highlight our
              program impact and the real stories behind every journey.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              {/* Select */}
              <select className="h-[42px] min-w-[250px] rounded-[6px] border border-[#E5E7EB] bg-white px-4 text-[13px] text-[#1F2A44] outline-none">
                <option>All</option>
                <option>Teaching Program</option>
                <option>Women Empowerment</option>
              </select>

              {/* Date */}
              <select className="h-[42px] min-w-[220px] rounded-[6px] border border-[#E5E7EB] bg-white px-4 text-[13px] text-[#1F2A44] outline-none">
                <option>May 2024 - Apr 2025</option>
              </select>

              {/* Filter Button */}
              <button className="h-[42px] px-8 rounded-[6px] bg-[#2F3C97] hover:bg-[#25307d] transition-all text-white text-[13px] font-medium">
                Filter
              </button>
            </div>

            {/* ======================================================
                TESTIMONIAL GRID
            ====================================================== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#E5E7EB] rounded-[10px] p-5 shadow-sm"
                >
                  {/* Top */}
                  <div className="flex items-start justify-between mb-4">
                    {/* Profile */}
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-[42px] h-[42px] rounded-full object-cover"
                      />

                      <div>
                        <h3 className="text-[13px] font-semibold text-[#1F2A44] leading-none">
                          {item.name}
                        </h3>

                        <p className="text-[11px] text-[#6B7280] mt-1">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* View Program */}
                    <Link
                      href="#"
                      className="text-[11px] text-[#2563EB] font-medium hover:underline"
                    >
                      View Program
                    </Link>
                  </div>

                  {/* Testimonial */}
                  <p className="text-[13px] leading-[24px] text-[#4B5563] mb-5">
                    {item.text}
                  </p>

                  {/* Button */}
                  <Link
                    href={`/testimonial/${item.slug}`}
                    className="w-full h-[40px] inline-flex items-center justify-center rounded-[6px] bg-[#2F3C97] hover:bg-[#25307d] transition-all text-white text-[13px] font-medium"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* ======================================================
              RIGHT SIDEBAR
          ====================================================== */}
          <div>
            <div className="bg-white border border-[#E5E7EB] rounded-[10px] overflow-hidden">
              {/* Header */}
              <div className="px-5 py-4 border-b border-[#E5E7EB]">
                <h2 className="text-[18px] font-medium text-[#1F2A44]">
                  Our Available Programs
                </h2>
              </div>

              {/* Programs */}
              <div>
                {programs.map((program, index) => (
                  <button
                    key={index}
                    className={`w-full text-left px-5 py-4 text-[13px] border-b border-[#EEF1F4] transition-all ${
                      index === 0
                        ? "bg-[#F8FAFC] text-[#2F3C97] font-medium"
                        : "text-[#6B7280] hover:bg-[#F9FAFB]"
                    }`}
                  >
                    {program}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
