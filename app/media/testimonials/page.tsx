"use client";
import AvailableProgramsSidebar from "@/app/components/AvailableProgramsSidebar";


import Link from "next/link";
import { useState } from "react";

export default function TestimonialsPage() {
  const programs = [
    "All",
    "Children Development Program",
    "Youth Empowerment Program",
    "Public Health & Medical Program",
    "Environment conservation program",
    "Disaster Risk Reduction (DRR) program",
    "Teaching program",
  ];

  const programUrls: Record<string, string> = {
    "Children Development Program": "/program/children-development",
    "Youth Empowerment Program": "/program/youth-empowerment",
    "Public Health & Medical Program": "/program/health",
    "Environment conservation program": "/program/environment",
    "Disaster Risk Reduction (DRR) program": "/program/disaster",
    "Teaching program": "/program/children-development",
  };

  const [selectedProgram, setSelectedProgram] = useState("All");
  const [selectedDate, setSelectedDate] = useState("May 2024 - Apr 2025");
  const [appliedProgram, setAppliedProgram] = useState("All");
  const [appliedDate, setAppliedDate] = useState("May 2024 - Apr 2025");

  const testimonials = [
    {
      slug: "bibek-kumar-sah-seo-intern",
      name: "Bibek Kumar Sah",
      role: "SEO Intern",
      program: "Children Development Program",
      dateRange: "May 2024 - Apr 2025",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
      text: `"Volunteering with VIN completely transformed my way to see community development. The staff were incredibly supportive, and the projects truly made a real impact. I learned more in a few weeks than I ever expected."`,
    },
    {
      slug: "ashley-patterson-seo-intern",
      name: "Ashley Patterson",
      role: "SEO Intern",
      program: "Youth Empowerment Program",
      dateRange: "May 2024 - Apr 2025",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
      text: `"Volunteering with VIN helped me connect digital marketing with real community impact. The experience strengthened my skills and deepened my understanding of how sustainable change is built."`,
    },
    {
      slug: "charles-richardson-product-designer",
      name: "Charles Richardson",
      role: "Product Designer",
      program: "Public Health & Medical Program",
      dateRange: "May 2024 - Apr 2025",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
      text: `"The experience was professional, inspiring, and deeply meaningful. Working with VIN showed me how thoughtful design and planning can improve community outcomes."`,
    },
  ];

  const filteredTestimonials = testimonials.filter((item) => {
    const matchesProgram =
      appliedProgram === "All" || item.program === appliedProgram;
    const matchesDate = appliedDate === "All" || item.dateRange === appliedDate;
    return matchesProgram && matchesDate;
  });

  const applyFilters = () => {
    setAppliedProgram(selectedProgram);
    setAppliedDate(selectedDate);
  };

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
            <p className="text-[18px] leading-[24px] text-[#6B7280] max-w-full md:max-w-[850px] mb-8">
              Read testimonials from volunteers and community members involved
              with teachers, experiences, and feedback that highlight our
              program impact and the real stories behind every journey.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              {/* Select */}
              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="h-[42px] w-full md:min-w-[250px] rounded-[6px] border border-[#E5E7EB] bg-white px-4 text-[13px] text-[#1F2A44] outline-none"
              >
                {programs.map((program) => (
                  <option key={program} value={program}>
                    {program}
                  </option>
                ))}
              </select>

              {/* Date */}
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="h-[42px] w-full md:min-w-[220px] rounded-[6px] border border-[#E5E7EB] bg-white px-4 text-[13px] text-[#1F2A44] outline-none"
              >
                <option>May 2024 - Apr 2025</option>
                <option>Jan 2025 - Dec 2025</option>
                <option>All</option>
              </select>

              {/* Filter Button */}
              <button
                onClick={applyFilters}
                className="h-[42px] px-8 rounded-[6px] bg-[#2F3C97] hover:bg-[#25307d] transition-all text-white text-[13px] font-medium"
              >
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
                      href={programUrls[item.program] || "/program"}
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
                    href={`/media/testimonials/${item.slug}`}
                    className="w-full h-[40px] inline-flex items-center justify-center rounded-[6px] bg-[#2F3C97] hover:bg-[#25307d] transition-all text-white text-[13px] font-medium"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div>
            <AvailableProgramsSidebar /></div>
        </div>
      </div>
    </main>
  );
}
