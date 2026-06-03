"use client";
import DonateSection from "@/app/components/DonateSection";

import ChooseImpact from "@/app/components/ChooseImpact";

import Link from "next/link";
import { useRef } from "react";

import LatestNews from "@/app/components/news";
import Articles from "@/app/components/articles";
import { Star, ChevronLeft, ChevronRight, Play, Volume2 } from "lucide-react";

export default function OrganizationalStructurePage() {
  const volunteerRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const testimonials = [1, 2, 3];

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

  return (
    <main className="w-full bg-white py-14 px-4 md:px-8">
      <div className=" mx-auto grid grid-cols-1 xl:grid-cols-[1fr_350px] gap-3">
        {/* =========================================
            LEFT CONTENT
        ========================================= */}
        <div>
          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-[34px] md:text-[38px] font-medium text-[#1f2a44] mb-3">
              Organizational Structure Overview
            </h1>

            <p className="text-[16px] leading-[28px] text-[#6b7280] max-w-4xl">
              A visual representation of the company’s hierarchy, outlining key
              roles, reporting relationships, and departmental divisions to
              support clear communication and efficient workflow.
            </p>
          </div>

          {/* =========================================
              STRUCTURE BOX
          ========================================= */}
          <div className="bg-[#ffffff]   p-4 md:p-6">
            {/* ================= GENERAL ASSEMBLY ================= */}
            <div className="mb-6 bg-[#f4f6fb] border border-[#e5e7eb] rounded-[12px] p-4 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-[20px] font-semibold text-[#1f2a44]">
                  General Assembly
                </h2>
              </div>

              <div className="flex justify-center">
                <div className="bg-white border border-[#dfe4ee] rounded-[8px] px-5 py-4 w-full md:w-[220px] shadow-sm">
                  <p className="text-[15px] font-medium text-[#1f2a44] mb-3">
                    General Assembly Member
                  </p>

                  <div className="flex -space-x-2">
                    {[1].map((item) => (
                      <img
                        key={item}
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
                        alt="member"
                        className="w-9 h-9 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ================= BOARD ================= */}
            <div className="mb-6 bg-[#f4f6fb] border border-[#e5e7eb] rounded-[12px] p-4 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-[20px] font-semibold text-[#1f2a44]">
                  Boards of Directors
                </h2>

                <span className="text-[16px] text-[#7b8498]">L1</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-full md:max-w-[520px] mx-auto">
                {["Board Of Directors", "Executive Directors"].map(
                  (title, index) => (
                    <div
                      key={index}
                      className="bg-white border border-[#dfe4ee] rounded-[8px] px-5 py-4 shadow-sm"
                    >
                      <p className="text-[15px] font-medium text-[#1f2a44] mb-3">
                        {title}
                      </p>

                      <div className="flex -space-x-2">
                        <img
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
                          alt="member"
                          className="w-9 h-9 rounded-full border-2 border-white object-cover"
                        />
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* ================= MANAGERS ================= */}
            <div className="mb-6 bg-[#f4f6fb] border border-[#e5e7eb] rounded-[12px] p-4 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-[20px] font-semibold text-[#1f2a44]">
                  Managers
                </h2>

                <span className="text-[16px] text-[#7b8498]">L2</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["Volunteer Manager", "Program Manager", "Legal Advisor"].map(
                  (title, index) => (
                    <div
                      key={index}
                      className="bg-white border border-[#dfe4ee] rounded-[8px] px-5 py-4 shadow-sm min-h-[120px] flex flex-col justify-between"
                    >
                      <div className="flex items-start justify-between">
                        <p className="text-[15px] font-medium text-[#1f2a44]">
                          {title}
                        </p>

                        {title === "Legal Advisor" && (
                          <span className="text-[11px] text-[#9ca3af]">
                            Part-Time
                          </span>
                        )}
                      </div>

                      <div className="flex -space-x-2 mt-4">
                        {[1, 2, 3].map((item) => (
                          <img
                            key={item}
                            src={`https://i.pravatar.cc/100?img=${item + index}`}
                            alt="member"
                            className="w-9 h-9 rounded-full border-2 border-white object-cover"
                          />
                        ))}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* ================= OFFICERS ================= */}
            <div className="mb-6 bg-[#f4f6fb] border border-[#e5e7eb] rounded-[12px] p-4 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-[20px] font-semibold text-[#1f2a44]">
                  Officers & Co-ordinators
                </h2>

                <span className="text-[16px] text-[#7b8498]">L3</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Communication Officer",
                  "Volunteer Co-ordinator",
                  "Women’s Empowerment Officer",
                  "Webmaster/SEO",
                  "Camp Leaders",
                  "Youth’s Empowerment Officer",
                  "Accountant",
                  "Volunteer’s Mentor",
                  "Children Development Officer",
                  "IT Support",
                  "Ass. Program Officer–OKH",
                  "District Program Coordinator Officer",
                  "Engineers",
                ].map((title, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#dfe4ee] rounded-[8px] px-4 py-4 shadow-sm min-h-[120px] flex flex-col justify-between"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-[14px] leading-[22px] font-medium text-[#1f2a44]">
                        {title}
                      </p>

                      {(title === "IT Support" ||
                        title === "Camp Leaders" ||
                        title === "Engineers") && (
                        <span className="text-[10px] text-[#9ca3af] whitespace-nowrap">
                          Part-Time
                        </span>
                      )}
                    </div>

                    <div className="flex -space-x-2 mt-4">
                      {[1, 2].map((item) => (
                        <img
                          key={item}
                          src={`https://i.pravatar.cc/100?img=${item + index}`}
                          alt="member"
                          className="w-8 h-8 rounded-full border-2 border-white object-cover"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= LOCAL FACILITATORS ================= */}
            <div className="mb-6 bg-[#f4f6fb] border border-[#e5e7eb] rounded-[12px] p-4 md:p-6">
              <div className="flex items-center gap-2 mb-4 ">
                <h2 className="text-[20px] font-semibold text-[#1f2a44]">
                  Local Facilitator & Assistants
                </h2>

                <span className="text-[16px] text-[#7b8498]">L4</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Volunteers",
                  "Local Facilitator",
                  "ECD Teachers",
                  "Driver",
                  "Office Assistant",
                  "Cooperative Staffs",
                  "Hotel Assistant",
                ].map((title, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#dfe4ee] rounded-[8px] px-4 py-4 shadow-sm min-h-[100px] flex flex-col justify-between"
                  >
                    <p className="text-[14px] font-medium text-[#1f2a44]">
                      {title}
                    </p>

                    <div className="flex -space-x-2 mt-4">
                      {[1, 2, 3, 4].map((item) => (
                        <img
                          key={item}
                          src={`https://i.pravatar.cc/100?img=${
                            item + index + 10
                          }`}
                          alt="member"
                          className="w-8 h-8 rounded-full border-2 border-white object-cover"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            RIGHT SIDEBAR
        ========================================= */}
        <div className="space-y-8">
          <div className="rounded-[14px] border border-[#D9DFEA] bg-white p-5">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-[30px] font-medium text-[#1D2433] font-serif">
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
                    projects were completed smoothly. Their attention to detail
                    and willingness to assist wherever needed greatly
                    contributed to the success of our programs.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Programs */}
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
        </div>
      </div>
      {/* =========================================
    PROGRAMS YOU MAY LIKE
========================================= */}
      <section className="w-full bg-[#f5f7fb] py-14 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-10">
            {/* Left */}
            <div>
              <h2 className="text-[34px] md:text-[38px] font-medium text-[#1f2a44] leading-none mb-3">
                Programs you May Like
              </h2>

              <p className="text-[14px] text-[#7b8498] leading-[26px]">
                Listen to heartfelt stories from people who chose to make a
                difference with us.
              </p>
            </div>

            {/* Right Link */}
            <button className="flex items-center gap-3 text-[#1f2a44] text-[15px] font-semibold hover:text-[#2A3495] transition-all">
              Explore All Projects
              <span className="text-[20px]">→</span>
            </button>
          </div>

          {/* =========================================
        CARDS GRID
    ========================================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="group bg-white rounded-[10px] overflow-hidden border border-[#e5e7eb] hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-[250px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?q=80&w=1400&auto=format&fit=crop"
                    alt="Program"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="px-6 py-4 text-center">
                  <h3 className="text-[18px] leading-[34px] font-medium text-[#2a3550]">
                    Domestic Violence Prevention Volunteer Program in Nepal
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*Becoming part section*/}
      <section className="w-full  py-10 px-4">
        <div
          className=" mx-auto rounded-[20px] overflow-hidden relative"
          style={{
            background: "linear-gradient(90deg, #2A3495 0%, #000000 100%)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[260px]">
            {/* Left Content */}
            <div className="px-8 md:px-12 py-10 text-white z-10">
              <h2 className="text-3xl md:text-[30px]  font-poppins font-[600] leading-tight max-w-3xl">
                Become a part of VIN from anywhere around the world
              </h2>

              <p className="mt-5 text-sm md:text-base text-gray-300 max-w-lg leading-relaxed">
                Wherever you are, you can be part of VIN. Our worldwide network
                brings together diverse perspectives to spark ideas, ignite
                collaboration, and build meaningful connections.
              </p>

              <button className="mt-8 bg-white text-[#2A3495] font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition">
                See Programs
              </button>
            </div>

            {/* Right Image */}
            {/* Right Image */}
            <div className="relative h-[330px] overflow-hidden flex justify-end">
              <img
                src="/cta.png"
                alt="Children"
                className="w-full max-w-[420px] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>
      {/*Volunteer program section*/}
      <section className="w-full  py-12 px-4 md:px-8">
        <div className=" mx-auto flex items-center justify-between gap-6 flex-wrap">
          {/* Left Content */}
          <div>
            <h2 className="text-[38px] leading-tight font-medium text-[#1F2A44]">
              Our Volunteering programs
            </h2>

            <p className="mt-4 max-w-3xl text-[18px] leading-[32px] text-[#4B5563]">
              Our programs are designed to empower communities through
              education, skill development, and inclusive support, creating
              opportunities that help individuals grow, thrive, and lead
              meaningful change.
            </p>
          </div>

          {/* Button */}
          <button className="bg-[#2A3495] text-white px-8 py-3 rounded-md text-sm font-medium shadow-md hover:bg-[#1f2875] transition">
            View All
          </button>
        </div>
      </section>

      {/* Map and Cards Section */}
      <section className="py-20 text-center">
        {/* Top Content */}
        <div>
          <h2 className="text-[32px] md:text-[40px] font-medium text-[#222] mb-4">
            Where we work
          </h2>

          <p className="max-w-full md:max-w-[760px] mx-auto text-[14px] md:text-[15px] leading-7 text-[#666]">
            We place volunteers in communities to support local effort,
            empowering residents to evolve positive change and improve quality
            of life through collaboration on meaningful projects.
          </p>
        </div>

        {/* Map */}
        <div className="pt-12 pb-16 flex justify-center">
          <img
            src="/images/nepal-map.png"
            alt="Nepal Map"
            className="object-contain"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {/* Card 1 */}
          <div className="text-center group">
            <div className="overflow-hidden rounded-[8px]">
              <img
                src="/images/kathmandu.jpg"
                alt="Kathmandu"
                className="w-full block transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="pt-5">
              <h3 className="text-[22px] font-medium text-[#222] mb-3">
                Kathmandu
              </h3>

              <p className="text-[14px] leading-7 text-[#666] mb-4">
                Transform communities by providing access and care services and
                improve quality of life through innovative projects for over two
                years.
              </p>

              <Link
                href="/about/location/kathmandu"
                className="text-[16px] text-black pb-[2px] hover:opacity-70 transition"
              >
                Read More..
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="text-center group">
            <div className="overflow-hidden rounded-[8px]">
              <img
                src="/images/okhaldhunga.jpg"
                alt="Okhaldhunga"
                className="w-full block transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="pt-5">
              <h3 className="text-[22px] font-medium text-[#222] mb-3">
                Okhaldhunga
              </h3>

              <p className="text-[14px] leading-7 text-[#666] mb-4">
                Okhaldhunga district is located 250 km east from Kathmandu.
                During project activities, more than 1500+ participants and
                engaged with over 900 key workers helping improve livelihoods.
              </p>

              <Link
                href="/about/location/okhaldhunga"
                className="text-[16px] text-black  pb-[2px] hover:opacity-70 transition"
              >
                Read More..
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="text-center group">
            <div className="overflow-hidden rounded-[8px]">
              <img
                src="/images/nuwakot.jpg"
                alt="Nuwakot"
                className="w-full block transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="pt-5">
              <h3 className="text-[22px] font-medium text-[#222] mb-3">
                Nuwakot
              </h3>

              <p className="text-[14px] leading-7 text-[#666] mb-4">
                Nuwakot is located 75 km northwest from Kathmandu and serves
                through development and social initiatives to support local
                communities.
              </p>

              <Link
                href="/about/location/nuwakot"
                className="text-[16px] text-black  pb-[2px] hover:opacity-70 transition"
              >
                Read More..
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Choose Impact Section */}
      <ChooseImpact />
      <section className="py-20">
        {/* Top Rating */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <div className="flex text-yellow-400 text-[18px]">★ ★ ★ ★ ★</div>

          <h3 className="text-[32px] font-semibold text-[#1F2B6C] leading-none">
            4.4<span className="text-[18px]">/5</span>
          </h3>

          <span className="text-[14px] text-gray-500 border-l pl-3">
            200+ Review
          </span>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {/* Card 1 */}
          <div className="flex flex-col items-center">
            <h4 className="text-[34px] font-semibold text-[#1F2B6C]">
              4.5<span className="text-[18px]">/5</span>
            </h4>

            <div className="flex items-center gap-1 mt-2 mb-2">
              <span className="text-yellow-400 text-[14px]">★</span>
              <span className="text-[12px] font-semibold text-[#F4A100] uppercase tracking-wide">
                Great
              </span>
            </div>

            <p className="text-[18px] text-[#444] font-medium font-lora">
              Great Non-profit
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <h4 className="text-[34px] font-semibold text-[#1F2B6C]">
              4.2<span className="text-[18px]">/5</span>
            </h4>

            <h5 className="text-[28px] font-semibold text-[#1F2B6C] mt-2">
              Google
            </h5>

            <p className="text-[18px] text-[#444] font-medium font-lora mt-1">
              Google Reviews
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <h4 className="text-[34px] font-semibold text-[#1F2B6C]">
              4.2<span className="text-[18px]">/5</span>
            </h4>

            <h5 className="text-[32px] font-bold text-[#1F2B6C] mt-2">GO</h5>

            <p className="text-[18px] text-[#444] font-medium font-lora mt-1">
              go overseas
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center">
            <h4 className="text-[34px] font-semibold text-[#1F2B6C]">
              4.2<span className="text-[18px]">/5</span>
            </h4>

            <div className="flex text-yellow-400 text-[14px] mt-2">
              ★ ★ ★ ★ ★
            </div>

            <p className="text-[18px] text-[#444] font-medium font-lora mt-2">
              Review Center
            </p>
          </div>
        </div>
      </section>
      <section className="w-full  py-14 md:py-20">
        <div className="mx-auto  px-4 sm:px-6 lg:px-8">
          {/* Top Heading */}
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-medium tracking-tight text-[#1b1b1b] md:text-[38px]">
                What Our Volunteers Say
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#7c7c7c] md:text-[15px]">
                Real stories from our volunteers and community members. Discover
                real-life experiences and feedback that highlight our
                commitment, impact, and the trust we build every day.
              </p>
            </div>

            {/* Button */}
            <button className="w-fit rounded-md bg-[#1F2B6C] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#3340d0]">
              View all
            </button>
          </div>

          {/* Slider Area */}
          <div className="relative group/vol">
            {/* Left Arrow */}
            <button
              onClick={() =>
                volunteerRef.current?.scrollBy({
                  left: -320,
                  behavior: "smooth",
                })
              }
              className="absolute left-[-20px] top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white shadow-sm md:flex opacity-0 group-hover/vol:opacity-100 transition"
            >
              <ChevronLeft className="h-4 w-4 text-[#5f6b7a]" />
            </button>

            {/* Cards */}
            <div
              ref={volunteerRef}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Card 1 */}
              <div className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.33px)] shrink-0 snap-start rounded-2xl border border-[#ececec] bg-[#E2E8F0] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <p className="text-[14px] leading-7 text-[#5d6470]">
                  "Volunteering with VN completely transformed the way I see
                  community development. The staff were incredibly supportive,
                  and the projects truly made a real impact. I learned so much
                  from fellow volunteers!"
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <img
                    src="/avatar1.png"
                    alt="User"
                    className="h-11 w-11 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="text-sm font-medium text-[#111827]">
                      Baker Kumar Sah
                    </h4>
                    <p className="text-xs text-[#8b8b8b]">Nepal</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.33px)] shrink-0 snap-start rounded-2xl border border-[#ececec] bg-[#E2E8F0] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <p className="text-[14px] leading-7 text-[#5d6470]">
                  "Volunteering with VN completely transformed the way I see
                  community development. The staff were incredibly supportive,
                  and the projects truly made a real impact. I learned so much
                  from fellow volunteers!"
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <img
                    src="/avatar1.png"
                    alt="User"
                    className="h-11 w-11 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="text-sm font-medium text-[#111827]">
                      Baker Kumar Sah
                    </h4>
                    <p className="text-xs text-[#8b8b8b]">United States</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.33px)] shrink-0 snap-start rounded-2xl border border-[#ececec] bg-[#E2E8F0] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <p className="text-[14px] leading-7 text-[#5d6470]">
                  "Volunteering with VN completely transformed the way I see
                  community development. The staff were incredibly supportive,
                  and the projects truly made a real impact. I learned so much
                  from fellow volunteers!"
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <img
                    src="/avatar1.png"
                    alt="User"
                    className="h-11 w-11 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="text-sm font-medium text-[#111827]">
                      Baker Kumar Sah
                    </h4>
                    <p className="text-xs text-[#8b8b8b]">Georgia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() =>
                volunteerRef.current?.scrollBy({
                  left: 320,
                  behavior: "smooth",
                })
              }
              className="absolute right-[-20px] top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white shadow-sm md:flex opacity-0 group-hover/vol:opacity-100 transition"
            >
              <ChevronRight className="h-4 w-4 text-[#5f6b7a]" />
            </button>
          </div>
        </div>
      </section>
      {/*Trust Us section*/}
      <section className="w-full  py-14 md:py-20">
        <div className="mx-auto  px-4 sm:px-6 lg:px-8">
          {/* Top Heading */}
          <div className="mb-8 flex items-start justify-between">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium tracking-tight text-[#1b1b1b] md:text-[38px]">
                Watch Why People Trust Us
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#6f6f6f] md:text-[15px]">
                Watch why people trust us and discover how our commitment,
                transparency, and results have built lasting relationships. See
                real stories and experiences that showcase our reliability and
                impact.
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="hidden items-center gap-2 md:flex">
              <button
                onClick={() =>
                  trustRef.current?.scrollBy({ left: -320, behavior: "smooth" })
                }
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dcdcdc] bg-white shadow-sm transition hover:bg-gray-50"
              >
                <ChevronLeft className="h-4 w-4 text-[#5f6b7a]" />
              </button>

              <button
                onClick={() =>
                  trustRef.current?.scrollBy({ left: 320, behavior: "smooth" })
                }
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dcdcdc] bg-white shadow-sm transition hover:bg-gray-50"
              >
                <ChevronRight className="h-4 w-4 text-[#5f6b7a]" />
              </button>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative overflow-hidden rounded-2xl">
            {/* Background Image */}
            <img
              src="/trust-video.jpg"
              alt="Trust Video"
              className="h-[250px] w-full object-cover sm:h-[350px] md:h-[520px]"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/35"></div>

            {/* Center Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition hover:scale-105">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                  <Play className="ml-1 h-6 w-6 text-[#4b5563]" />
                </div>
              </button>
            </div>

            {/* Bottom Left Text */}
            <div className="absolute bottom-6 left-6 z-10 max-w-sm text-white md:bottom-10 md:left-10">
              <h3 className="text-2xl font-semibold md:text-[34px]">
                Peter Smith
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/85 md:text-[15px]">
                Listen to heartfelt stories from people who choose to make a
                difference with us.
              </p>
            </div>

            {/* Bottom Sound Icon */}
            <button className="absolute bottom-6 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-md md:bottom-10">
              <Volume2 className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </section>
      {/*Explore Nepal section*/}
      <section className="relative overflow-hidden bg-[#00B1F333] mb-10 py-16 md:py-24">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block h-[60px] w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,32L60,37.3C120,43,240,53,360,48C480,43,600,21,720,21.3C840,21,960,43,1080,48C1200,53,1320,43,1380,37.3L1440,32L1440,0L0,0Z"
            ></path>
          </svg>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            className="relative block h-[60px] w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,32L60,37.3C120,43,240,53,360,48C480,43,600,21,720,21.3C840,21,960,43,1080,48C1200,53,1320,43,1380,37.3L1440,32L1440,0L0,0Z"
            ></path>
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Content */}
          <div className="grid gap-20 md:grid-cols-2 md:items-start">
            {/* Left */}
            <div>
              <p className="text-[18px] text-[#5b6770]">Explore Nepal</p>

              <h2 className="mt-3 max-w-md text-[36px] font-medium leading-tight text-[#374151] md:text-[38px]">
                Where Every Journey
                <br />
                Has a Purpose
              </h2>
            </div>

            {/* Right */}
            <div className="max-w-xl pt-8">
              <p className="text-[15px]  font-[400] leading-7 text-[#374151]">
                Explore Nepal — a land where snow-capped mountains meet ancient
                temples, and kindness flows through every village path. This is
                a country of simple living, deep spirituality, and warm
                community bonds.
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {/* Image 1 */}
            <div className="overflow-hidden rounded-[22px]">
              <img
                src="/nepal1.jpg"
                alt="Nepal Trekking"
                className="h-[220px] w-full object-cover md:h-[420px]"
              />
            </div>

            {/* Image 2 */}
            <div className="overflow-hidden rounded-[22px]">
              <img
                src="/nepal2.jpg"
                alt="River Rafting"
                className="h-[220px] w-full object-cover md:h-[420px]"
              />
            </div>

            {/* Image 3 */}
            <div className="overflow-hidden rounded-[22px]">
              <img
                src="/nepal3.jpg"
                alt="Temple"
                className="h-[220px] w-full object-cover md:h-[420px]"
              />
            </div>

            {/* Image 4 */}
            <div className="overflow-hidden rounded-[22px]">
              <img
                src="/nepal4.jpg"
                alt="Wildlife"
                className="h-[220px] w-full object-cover md:h-[420px]"
              />
            </div>
          </div>
        </div>
      </section>
      <LatestNews />
      <Articles />
      {/* Volunteer Program / Donate Section */}
      <DonateSection />
      {/*Gallery section*/}
      <section className="w-full bg-[#f7f7f7] py-20 px-4 md:px-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h2 className="text-[38px] font-medium text-[#1f1f1f] leading-none mb-2">
              Gallery
            </h2>

            <p className="text-[16px] text-[#8b8b8b] leading-[18px] max-w-4xl">
              A glimpse into the moments that define our work and community
              impact.
            </p>
          </div>

          <button className="bg-[#2E3192] hover:bg-[#26287d] transition-all text-white text-[16px] font-medium px-10 py-2 rounded-sm">
            View all
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-3 gap-3">
          {/* Image 1 */}
          <div className="overflow-hidden rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
            <img
              src="/gallery/gallery-1.jpg"
              alt="gallery"
              className="w-full h-[200px] object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="overflow-hidden rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
            <img
              src="/gallery/gallery-2.jpg"
              alt="gallery"
              className="w-full h-[200px] object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="overflow-hidden rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
            <img
              src="/gallery/gallery-3.jpg"
              alt="gallery"
              className="w-full h-[200px] object-cover"
            />
          </div>

          {/* Image 4 */}
          <div className="overflow-hidden rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
            <img
              src="/gallery/gallery-4.jpg"
              alt="gallery"
              className="w-full h-[200px] object-cover"
            />
          </div>

          {/* Image 5 */}
          <div className="overflow-hidden rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
            <img
              src="/gallery/gallery-5.jpg"
              alt="gallery"
              className="w-full h-[200px] object-cover"
            />
          </div>

          {/* Image 6 */}
          <div className="overflow-hidden rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
            <img
              src="/gallery/gallery-6.jpg"
              alt="gallery"
              className="w-full h-[200px] object-cover"
            />
          </div>

          {/* Image 7 */}
          <div className="overflow-hidden rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
            <img
              src="/gallery/gallery-4.jpg"
              alt="gallery"
              className="w-full h-[200px] object-cover"
            />
          </div>

          {/* Image 8 */}
          <div className="overflow-hidden rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
            <img
              src="/gallery/gallery-5.jpg"
              alt="gallery"
              className="w-full h-[200px] object-cover"
            />
          </div>

          {/* Image 9 */}
          <div className="overflow-hidden rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
            <img
              src="/gallery/gallery-6.jpg"
              alt="gallery"
              className="w-full h-[200px] object-cover"
            />
          </div>
        </div>
      </section>
      {/* Volunteers Section */}
      <section className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#CCEFFD] py-10 px-6 md:px-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="text-[38px] font-medium text-[#1d1d1d] leading-none mb-3">
              Our Volunteers
            </h2>

            <p className="text-[16px] text-[#7b7b7b]">
              Our current volunteers working with us
            </p>
          </div>

          <Link href="/volunteers">
            <button className="bg-[#2E3192] hover:bg-[#26287d] transition-all text-white text-[16px] font-medium px-6 py-3 rounded-md shadow-sm">
              View Volunteers
            </button>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12  mx-auto">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex flex-col items-center text-center">
              {/* Image Card */}
              <div className="w-full md:w-[350px] overflow-hidden rounded-md shadow-md border border-gray-200 bg-white">
                <img
                  src="/volunteer.jpg"
                  alt="Volunteer"
                  className="w-full h-[200px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-[15px] font-semibold text-[#222]">
                  Kelly Anne Lister
                </h3>

                <p className="text-[12px] text-[#8a8a8a] mt-1">Australia</p>

                <p className="text-[11px] text-[#9a9a9a] mt-2 leading-[18px]">
                  Teaching English at Monastery
                </p>

                {/* Dates */}
                <div className="flex items-center justify-center gap-8 mt-4 text-[10px] text-[#8d8d8d]">
                  <div>
                    <p>F To</p>
                    <p className="mt-1 text-[#666]">12/01/2026</p>
                  </div>

                  <div>
                    <p>T To</p>
                    <p className="mt-1 text-[#666]">12/01/2026</p>
                  </div>
                </div>

                {/* Button */}
                <button className="mt-5 w-full md:w-[350px] border border-[#4c53c7] text-[#2E3192] hover:bg-[#2E3192] hover:text-white transition-all text-[14px] font-medium py-3 rounded-md bg-white shadow-sm">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
