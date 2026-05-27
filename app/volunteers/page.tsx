"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Heading3, Star } from "lucide-react";
const programs = [
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
export default function VolunteersPage() {
  return (
    <main>
      {/* =========================================
          FULL PAGE SECTION
      ========================================= */}
      <section className="w-full bg-white py-16 px-6 md:px-10">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          {/* =====================================
              LEFT COLUMN
          ===================================== */}
          <div>
            {/* Featured Image */}
            <div className="relative w-full h-[340px] overflow-hidden rounded-[10px] mb-10">
              <img
                src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600&auto=format&fit=crop"
                alt="Volunteer House"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/25" />
            </div>

            {/* Heading */}
            <h2 className="text-[38px] font-medium text-[#1f2a44] leading-[52px] mb-6">
              National and International Volunteers in Nepal
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6">
              <p className="text-[16px] leading-[32px] text-[#5b6478]">
                At Volunteers Initiative Nepal (VIN), our work grows stronger
                every day because of the dedication and passion of our national
                and international volunteers.
              </p>

              <p className="text-[16px] leading-[32px] text-[#5b6478]">
                Nepal welcomes people from around the world, and each volunteer
                brings new energy to our community-led programs focusing on
                education, health, women empowerment, environment, and youth
                development.
              </p>

              <p className="text-[16px] leading-[32px] text-[#5b6478]">
                VIN has been implementing projects in Jitpurphedi, Kavresthali,
                Dharmasthali, and Goldhunga areas of Tarkeshwor municipality for
                many years.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap  mt-10 mb-16">
              <button className="px-8 h-[48px]  bg-[#2A3495] text-white text-[15px] font-medium">
                Current Volunteers
              </button>

              <button className="px-8 h-[48px]  bg-[#f5f7fa] border border-[#e5e7eb] text-[#5b6478] text-[15px] font-medium hover:bg-white transition-all">
                Upcoming Volunteers
              </button>

              <button className="px-8 h-[48px]  bg-[#f5f7fa] border border-[#e5e7eb] text-[#5b6478] text-[15px] font-medium hover:bg-white transition-all">
                Past Volunteers
              </button>
            </div>

            {/* ================= INTERNATIONAL ================= */}
            <div className="mb-16">
              {/* Heading */}
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-[28px] font-medium text-[#1f2a44]">
                  International
                </h3>

                <span className="text-[22px] font-medium text-[#6b7280]">
                  29
                </span>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#e5e7eb] rounded-[8px] overflow-hidden shadow-sm hover:shadow-md transition-all"
                  >
                    {/* Image */}
                    <div className="h-[260px] overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
                        alt="Volunteer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="px-5 py-5 text-center">
                      <h3 className="text-[18px] font-semibold text-[#1f2a44] mb-1">
                        Kelly Anne Lister
                      </h3>

                      <p className="text-[14px] text-[#6b7280] mb-1">
                        Australia
                      </p>

                      <p className="text-[13px] text-[#9ca3af] leading-[22px] mb-5">
                        Teaching English at Monastery
                      </p>

                      {/* Dates */}
                      <div className="flex items-center justify-center gap-12 mb-5">
                        <div>
                          <p className="text-[12px] text-[#9ca3af] mb-1">
                            From
                          </p>

                          <p className="text-[13px] font-medium text-[#1f2a44]">
                            12/01/2026
                          </p>
                        </div>

                        <div>
                          <p className="text-[12px] text-[#9ca3af] mb-1">To</p>

                          <p className="text-[13px] font-medium text-[#1f2a44]">
                            19/01/2026
                          </p>
                        </div>
                      </div>

                      <Link href={`/volunteers/kelly-anne-lister`}>
                        <button className="w-full h-[38px] rounded-[5px] border border-[#2A3495] text-[#2A3495] text-[13px] font-medium hover:bg-[#2A3495] hover:text-white transition-all">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= NATIONAL ================= */}
            <div>
              {/* Heading */}
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-[28px] font-medium text-[#1f2a44]">
                  National Volunteers
                </h3>

                <span className="text-[22px] font-medium text-[#6b7280]">
                  29
                </span>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#e5e7eb] rounded-[8px] overflow-hidden shadow-sm hover:shadow-md transition-all"
                  >
                    {/* Image */}
                    <div className="h-[260px] overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
                        alt="Volunteer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="px-5 py-5 text-center">
                      <h3 className="text-[18px] font-semibold text-[#1f2a44] mb-1">
                        Kelly Anne Lister
                      </h3>

                      <p className="text-[14px] text-[#6b7280] mb-1">
                        Australia
                      </p>

                      <p className="text-[13px] text-[#9ca3af] leading-[22px] mb-5">
                        Teaching English at Monastery
                      </p>

                      {/* Dates */}
                      <div className="flex items-center justify-center gap-12 mb-5">
                        <div>
                          <p className="text-[12px] text-[#9ca3af] mb-1">
                            From
                          </p>

                          <p className="text-[13px] font-medium text-[#1f2a44]">
                            12/01/2026
                          </p>
                        </div>

                        <div>
                          <p className="text-[12px] text-[#9ca3af] mb-1">To</p>

                          <p className="text-[13px] font-medium text-[#1f2a44]">
                            19/01/2026
                          </p>
                        </div>
                      </div>

                      {/* Button */}
                      <button className="w-full h-[38px] rounded-[5px] border border-[#2A3495] text-[#2A3495] text-[13px] font-medium hover:bg-[#2A3495] hover:text-white transition-all">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-end items-center gap-2 mt-10">
                <button className="w-[34px] h-[34px] rounded-md border border-[#d1d5db] flex items-center justify-center text-[#6b7280] hover:bg-[#f5f7fa] transition-all">
                  ‹
                </button>

                <button className="w-[34px] h-[34px] rounded-md bg-[#2A3495] text-white text-[14px] font-medium">
                  1
                </button>

                <button className="w-[34px] h-[34px] rounded-md border border-[#d1d5db] text-[#6b7280] text-[14px] hover:bg-[#f5f7fa] transition-all">
                  2
                </button>

                <button className="w-[34px] h-[34px] rounded-md border border-[#d1d5db] flex items-center justify-center text-[#6b7280] hover:bg-[#f5f7fa] transition-all">
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* =====================================
              RIGHT SIDEBAR
          ===================================== */}
          <div className="space-y-8">
            {/* Programs Sidebar */}
            <div className="border border-[#e5e7eb] rounded-md overflow-hidden bg-[#fafbfc]">
              <div className="px-5 py-4 border-b border-[#e5e7eb] bg-[#f5f7fa]">
                <h2 className="text-[20px] font-medium text-[#1f2a44]">
                  Other available Programs
                </h2>
              </div>

              <div className="divide-y divide-[#e5e7eb]">
                {programs.map((item, index) => (
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
      </section>
      {/*Contact Section */}
      <section className="w-full bg-white py-10 px-6 md:px-10">
        {/* Aligning with left column */}
        <div className="max-w-[980px]">
          {/* Heading */}
          <h2 className="text-[38px] font-semibold text-[#1f2a44] mb-8">
            Contact us to partner
          </h2>

          {/* Form Container */}
          <div className="bg-[#f8f9fc] border border-[#eef1f6] rounded-[8px] p-6 md:p-8">
            {/* Top Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              {/* Name */}
              <div>
                <label className="block text-[13px] font-medium text-[#1f2a44] mb-2">
                  Enter Name
                </label>

                <input
                  type="text"
                  placeholder="e.g. Sweekar"
                  className="w-full h-[46px] rounded-[6px] border border-[#e6e9f2] bg-[#f4f5fc] px-4 text-[14px] text-[#1f2a44] placeholder:text-[#b0b7c8] outline-none focus:border-[#2A3495]"
                />
              </div>

              {/* Name */}
              <div>
                <label className="block text-[13px] font-medium text-[#1f2a44] mb-2">
                  Enter Name
                </label>

                <input
                  type="text"
                  placeholder="e.g. Sweekar"
                  className="w-full h-[46px] rounded-[6px] border border-[#e6e9f2] bg-[#f4f5fc] px-4 text-[14px] text-[#1f2a44] placeholder:text-[#b0b7c8] outline-none focus:border-[#2A3495]"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mb-5">
              <label className="block text-[13px] font-medium text-[#1f2a44] mb-2">
                Subject
              </label>

              <input
                type="text"
                placeholder="Related Subject"
                className="w-full h-[46px] rounded-[6px] border border-[#e6e9f2] bg-[#f4f5fc] px-4 text-[14px] text-[#1f2a44] placeholder:text-[#b0b7c8] outline-none focus:border-[#2A3495]"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-[13px] font-medium text-[#1f2a44] mb-2">
                Message
              </label>

              <textarea
                rows={4}
                placeholder="Type your messages here"
                className="w-full rounded-[6px] border border-[#e6e9f2] bg-[#f4f5fc] px-4 py-3 text-[14px] text-[#1f2a44] placeholder:text-[#b0b7c8] outline-none resize-none focus:border-[#2A3495]"
              />
            </div>

            {/* Button */}
            <button className="w-[160px] h-[46px] rounded-[6px] bg-[#2A3495] text-white text-[14px] font-medium hover:opacity-90 transition-all shadow-sm">
              Send Message
            </button>
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
