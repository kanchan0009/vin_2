"use client";
import { useRef } from "react";
import { HeartHandshake, MessageCircleMore } from "lucide-react";
import Articles from "@/app/components/articles";
import LatestNews from "@/app/components/news";
import Link from "next/link";

export default function TeamMembersPage() {
  const impactRef = useRef<HTMLDivElement>(null);
  const volunteerRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const boardMembers = [
    {
      slug: "bhupendra-ghimire",
      name: "Bhupendra Ghimire",
      country: "(Nepal)",
      role: "President",
      department: "Master in Education",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      slug: "dinesh-khatiwoda",
      name: "Dinesh Khatiwoda",
      country: "",
      role: "Volunteer Manager",
      department: "Master in Sociology",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      slug: "bimal-acharya",
      name: "Bimal Acharya",
      country: "",
      role: "Program Manager",
      department: "Masters degree in social service",
      image:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop",
    },
    {
      slug: "richa-ghimire",
      name: "Richa Ghimire",
      country: "",
      role: "Secretary to the President",
      department: "Undergrad student",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const staffMembers = [
    {
      slug: "bhupendra-ghimire",
      name: "Bhupendra Ghimire",
      country: "(Nepal)",
      role: "President",
      education: "Master in Education",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      slug: "dinesh-khatiwoda",
      name: "Dinesh Khatiwoda",
      country: "",
      role: "Volunteer Manager",
      education: "Master in Education",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      slug: "bimal-acharya",
      name: "Bimal Acharya",
      country: "",
      role: "Program Manager",
      education: "Master’s degree in social science",
      image:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop",
    },
    {
      slug: "richa-ghimire",
      name: "Richa Ghimire",
      country: "",
      role: "Secretary to the President",
      education: "Undergrad Student",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    },
    {
      slug: "varsha-pradhan",
      name: "Varsha Pradhan",
      country: "",
      role: "Communication officer",
      education: "Masters in Human and Nature Conservation",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
    },
    {
      slug: "manita-basnet",
      name: "Manita Basnet",
      country: "",
      role: "Accountant & Logistic Management officer",
      education: "Bachelor in Business Studies",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main className="w-full bg-white py-16 px-6 md:px-10">
      <div className="mx-auto">
        {/* PAGE HEADER */}
        <div className="mb-10">
          <h1 className="text-[38px] font-medium text-[#1f2a44] mb-3">
            Our Team Members
          </h1>

          <p className="text-[16px] text-[#7b8498]">
            Listen to heartfelt stories from people who chose to make a
            difference with us.
          </p>
        </div>

        {/* BOARD MEMBERS */}
        <div className="mb-16">
          <div className="mb-6">
            <h2 className="text-[30px] font-medium text-[#1f2a44]">
              Board Of Directors
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-[#e5e7eb] rounded-[8px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Image */}
                <div className="h-[200px] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-[16px] font-semibold text-[#1f2a44] leading-[26px]">
                    {member.name}{" "}
                    <span className="text-[#7b8498] font-normal text-[14px]">
                      {member.country}
                    </span>
                  </h3>

                  <p className="mt-2 text-[14px] font-medium text-[#5b6478]">
                    {member.role}
                  </p>

                  <p className="mt-1 text-[13px] leading-[22px] text-[#9ca3af] min-h-[44px]">
                    {member.department}
                  </p>

                  <Link
                    href={`/about/staff/${member.slug}`}
                    className="mt-4 w-full h-[40px] rounded-[10px] border border-[#2A3495] text-[#2A3495] text-[15px] font-medium hover:bg-[#2A3495] hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STAFF MEMBERS */}
        <div>
          <div className="mb-6">
            <h2 className="text-[30px] font-medium text-[#1f2a44]">
              Staff Members
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {staffMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-[#e5e7eb] rounded-[8px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Image */}
                <div className="h-[200px] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-[16px] font-semibold leading-[24px] text-[#1f2a44]">
                    {member.name}{" "}
                    <span className="text-[13px] font-normal text-[#9ca3af]">
                      {member.country}
                    </span>
                  </h3>

                  <p className="mt-1 text-[13px] font-medium text-[#5b6478]">
                    {member.role}
                  </p>

                  <p className="mt-1 text-[12px] leading-[20px] text-[#9ca3af] min-h-[38px]">
                    {member.education}
                  </p>

                  <Link
                    href={`/about/staff/${member.slug}`}
                    className="mt-4 w-full h-[40px] rounded-[10px] border border-[#2A3495] text-[#2A3495] text-[15px] font-medium hover:bg-[#2A3495] hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <section className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-gradient-to-r from-[#3B45D1] via-[#3A49DC] to-[#25339B] py-16 mt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[length:80px_80px]" />
        </div>

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#6C7BFF]/20 blur-3xl rounded-full" />

        {/* Content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 text-center">
          {/* Heading */}
          <h3 className="text-white text-[36px] md:text-[54px] font-semibold leading-[1.15] tracking-[-1px]">
            Become a Part of the Change
          </h3>

          {/* Description */}
          <p className="max-w-[700px] mx-auto mt-5 text-white/85 text-[17px] md:text-[19px] leading-[34px]">
            Every action you take helps build a future where women lead,
            communities grow stronger, and lasting impact begins.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            {/* Apply Button */}
            <Link href="/applyNow" className="h-[56px] px-10 rounded-xl bg-[#242B82] hover:bg-[#1B2168] transition-all duration-300 text-white text-[16px] font-medium shadow-xl hover:scale-[1.03] inline-flex items-center justify-center text-center">
              Apply for Volunteer
            </Link>

            {/* Donate Button */}
            <button className="h-[56px] px-10 rounded-xl bg-[#F5A300] hover:bg-[#E19300] transition-all duration-300 text-white text-[16px] font-medium shadow-xl hover:scale-[1.03] flex items-center gap-3">
              <HeartHandshake size={20} />
              Donate Now
            </button>

            {/* WhatsApp Button */}
            <button className="h-[56px] px-10 rounded-xl bg-[#25D366] hover:bg-[#1FBA57] transition-all duration-300 text-white text-[16px] font-medium shadow-xl hover:scale-[1.03] flex items-center gap-3">
              <MessageCircleMore size={20} />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>
      {/* Programs Section */}
      <section className="w-full w-screen bg-[#F1F5F9] py-16">
        <div className="   max-w-none !px-0 !mx-0">
          {/* Header */}
          <div className="flex items-start justify-between mb-10">
            {/* Left Content */}
            <div>
              <h2 className="text-[38px] font-medium text-[#1f2a44] leading-none mb-3">
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
            <div className="relative h-full flex items-end justify-end">
              <img
                src="/images/kids.png"
                alt="Children"
                className="w-full max-w-[420px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Map and Cards Section */}
      <section className="py-20 text-center">
        {/* Top Content */}
        <div>
          <h2 className="text-[32px] md:text-[40px] font-medium text-[#222] mb-4">
            Where we work
          </h2>

          <p className="max-w-[760px] mx-auto text-[14px] md:text-[15px] leading-7 text-[#666]">
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
                src="/location.png"
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

              <a
                href="/"
                className="text-[16px] text-black pb-[2px] hover:opacity-70 transition"
              >
                Read More..
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="text-center group">
            <div className="overflow-hidden rounded-[8px]">
              <img
                src="/location.png"
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

              <a
                href="/"
                className="text-[16px] text-black  pb-[2px] hover:opacity-70 transition"
              >
                Read More..
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="text-center group">
            <div className="overflow-hidden rounded-[8px]">
              <img
                src="/location.png"
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

              <a
                href="/"
                className="text-[16px] text-black  pb-[2px] hover:opacity-70 transition"
              >
                Read More..
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Choose Impact Section */}
      <section className="py-16">
        {/* Top Heading */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-[32px] md:text-[42px] font-medium text-[#1e1e1e] mb-3">
              Choose where your Impact Begins
            </h2>

            <p className="text-[14px] leading-7 text-[#666] max-w-[780px]">
              Make a difference today! Choose to become a volunteer, sponsor a
              child, join an internship, or donate now, and help create lasting
              impact in lives and communities.
            </p>
          </div>

          <div>
            <button className="bg-[#2f3ea8] hover:bg-[#24328d] text-white text-[14px] font-medium px-8 py-3 rounded-md shadow-md transition">
              View all
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="relative group/impact">
          {/* Left Arrow */}
          <button 
            onClick={() => impactRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition opacity-0 group-hover/impact:opacity-100">
            ❮
          </button>

          {/* Right Arrow */}
          <button 
            onClick={() => impactRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition opacity-0 group-hover/impact:opacity-100">
            ❯
          </button>

          <div 
            ref={impactRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Card 1 */}
            <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 group hover:shadow-2xl transition duration-500">
              <div className="overflow-hidden">
                <img
                  src="/images/volunteer.jpg"
                  alt="Volunteer"
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-4">
                <Link href="/applyNow" className="w-full bg-[#2f3ea8] hover:bg-[#24328d] text-white text-[13px] font-medium py-3 rounded-md transition inline-flex items-center justify-center text-center">
                  Apply for Volunteering →
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 group hover:shadow-2xl transition duration-500">
              <div className="overflow-hidden">
                <img
                  src="/images/donate.jpg"
                  alt="Donate"
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-4">
                <button className="w-full bg-[#2f3ea8] hover:bg-[#24328d] text-white text-[13px] font-medium py-3 rounded-md transition">
                  Donate Now →
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 group hover:shadow-2xl transition duration-500">
              <div className="overflow-hidden">
                <img
                  src="/images/internship.jpg"
                  alt="Internship"
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-4">
                <Link href="/applyNow" className="w-full bg-[#2f3ea8] hover:bg-[#24328d] text-white text-[13px] font-medium py-3 rounded-md transition inline-flex items-center justify-center text-center">
                  Apply for Internship →
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 group hover:shadow-2xl transition duration-500">
              <div className="overflow-hidden">
                <img
                  src="/images/sponsor.jpg"
                  alt="Sponsor Child"
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-4">
                <button className="w-full bg-[#2f3ea8] hover:bg-[#24328d] text-white text-[13px] font-medium py-3 rounded-md transition">
                  Sponsor a Child →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
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

            <p className="text-[18px] text-[#444] font-medium">
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

            <p className="text-[18px] text-[#444] font-medium mt-1">
              Google Reviews
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <h4 className="text-[34px] font-semibold text-[#1F2B6C]">
              4.2<span className="text-[18px]">/5</span>
            </h4>

            <h5 className="text-[32px] font-bold text-[#1F2B6C] mt-2">GO</h5>

            <p className="text-[18px] text-[#444] font-medium mt-1">
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

            <p className="text-[18px] text-[#444] font-medium mt-2">
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
              onClick={() => volunteerRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}
              className="absolute left-[-20px] top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white shadow-sm md:flex opacity-0 group-hover/vol:opacity-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#5f6b7a]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Cards */}
            <div 
              ref={volunteerRef}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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
              onClick={() => volunteerRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}
              className="absolute right-[-20px] top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white shadow-sm md:flex opacity-0 group-hover/vol:opacity-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#5f6b7a]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
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
                onClick={() => trustRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dcdcdc] bg-white shadow-sm transition hover:bg-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#5f6b7a]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button 
                onClick={() => trustRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dcdcdc] bg-white shadow-sm transition hover:bg-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#5f6b7a]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-6 w-6 fill-[#4b5563]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5L6 9H3v6h3l5 4V5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.54 8.46a5 5 0 010 7.07"
                />
              </svg>
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
      {/* Volunteer Program Section */}
      <section className="relative w-full overflow-hidden rounded-sm  pt-10 pb-16 md:pb-24 pt-16">
        {/* Background Image */}
        <img
          src="/sponsor-banner.jpg"
          alt="Sponsor a Child"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Left Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex items-center h-full px-10">
          <div className=" text-white">
            {/* Heading */}
            <h2 className="text-[38px] leading-[60px] font-medium mb-4">
              Sponsor a Child, Change a Life
            </h2>

            {/* Description */}
            <p className="text-[14px] leading-[24px] text-gray-200 mb-6 max-w-[470px]">
              Your sponsorship provides education, healthcare, and essential
              support to children in Nepal who need it most. Give a child the
              opportunity to learn, grow, and build a brighter future.
            </p>

            {/* List */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-[17px] font-medium">
                <span className="w-2 h-2 rounded-full bg-white" />
                Education & Learning
              </li>

              <li className="flex items-center gap-3 text-[17px] font-medium">
                <span className="w-2 h-2 rounded-full bg-white" />
                Health & Wellbeing
              </li>

              <li className="flex items-center gap-3 text-[17px] font-medium">
                <span className="w-2 h-2 rounded-full bg-white" />
                Empowerment & Opportunity
              </li>
            </ul>

            {/* Button */}
            <button className="bg-[#1F2B6C] hover:bg-[#1F2B6C] transition-all duration-300 text-white text-[14px] font-medium px-6 py-3 rounded-md shadow-lg">
              Help a child today!
            </button>
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

          <button className="bg-[#2E3192] hover:bg-[#26287d] transition-all text-white text-[16px] font-medium px-6 py-3 rounded-md shadow-sm">
            View Volunteers
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12  mx-auto">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex flex-col items-center text-center">
              {/* Image Card */}
              <div className="w-[350px] overflow-hidden rounded-md shadow-md border border-gray-200 bg-white">
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
                <button className="mt-5 w-[350px] border border-[#4c53c7] text-[#2E3192] hover:bg-[#2E3192] hover:text-white transition-all text-[14px] font-medium py-3 rounded-md bg-white shadow-sm">
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
