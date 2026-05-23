import { Heading3, Star } from "lucide-react";
import { notFound } from "next/navigation";
import VolunteerProgram from "@/app/components/Volunteer-program";
import LatestNews from "@/app/components/news";
import Articles from "@/app/components/articles";

/* =========================================================
   STAFF DATA
========================================================= */

const STAFF = [
  {
    slug: "bhupendra-ghimire",
    name: "Bhupendra Ghimire",
    nickname: "Bhupi",
    country: "Nepal",
    role: "President",
    education: "Master in Education",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    bio: "Bhupendra Ghimire leads the organization with a focus on education, community development, and long-term impact.",
  },

  {
    slug: "dinesh-khatiwoda",
    name: "Dinesh Khatiwoda",
    nickname: "",
    country: "Nepal",
    role: "Volunteer Manager",
    education: "Master in Education",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    bio: "Dinesh manages volunteer placements and ensures smooth coordination between volunteers and local partners.",
  },

  {
    slug: "bimal-acharya",
    name: "Bimal Acharya",
    nickname: "",
    country: "Nepal",
    role: "Program Manager",
    education: "Master’s degree in social science",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop",
    bio: "Bimal oversees program delivery, monitoring, and improvement across VIN’s community initiatives.",
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
  /* =========================================
     NEXT JS DYNAMIC PARAM FIX
  ========================================= */

  const { slug } = await params;

  /* =========================================
     FIND STAFF
  ========================================= */

  const staff = STAFF.find((item) => item.slug === slug);

  if (!staff) {
    notFound();
  }

  return (
    <main className="w-full bg-white py-10 px-4 sm:px-6 lg:px-2">
      <section className=" mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
        <div>
          {/* PROFILE */}

          <div className="flex flex-col md:flex-row gap-8 mb-10">
            {/* IMAGE */}

            <div className="w-[180px] h-[180px] rounded-xl overflow-hidden border border-gray-200 flex-shrink-0">
              <img
                src={staff.image}
                alt={staff.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* INFO */}

            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-semibold text-[#1f2a44] mb-3">
                {staff.name}

                {staff.nickname && (
                  <span className="text-lg text-gray-500 font-normal ml-2">
                    ({staff.nickname})
                  </span>
                )}
              </h1>

              <p className="text-lg font-medium text-[#1f2a44] mb-2">
                {staff.role}
              </p>

              <p className="text-sm text-gray-500 mb-1">{staff.education}</p>

              <p className="text-sm text-gray-500 mb-6">{staff.country}</p>

              {/* SOCIAL */}

              <div>
                <h3 className="text-base font-semibold text-[#1f2a44] mb-4">
                  Social Media
                </h3>

                <div className="flex items-center gap-4">
                  <button className="w-10 h-10 rounded-full bg-[#25D366] text-white">
                    W
                  </button>

                  <button className="w-10 h-10 rounded-full bg-[#1877F2] text-white">
                    F
                  </button>

                  <button className="w-10 h-10 rounded-full bg-black text-white">
                    X
                  </button>

                  <button className="w-10 h-10 rounded-full bg-pink-500 text-white">
                    I
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              TABS
          ===================================================== */}

          <div className="flex flex-wrap gap-3 border-b border-gray-200 pb-5 mb-10">
            <button className="px-6 h-11 rounded-md bg-[#2A3495] text-white text-sm">
              Background
            </button>

            {[
              "Responsibilities",
              "Experiences",
              "Education",
              "Skills",
              "Professional Affiliations",
            ].map((tab) => (
              <button
                key={tab}
                className="px-6 h-11 rounded-md border border-gray-200 bg-gray-50 text-sm text-gray-600 hover:bg-white transition"
              >
                {tab}
              </button>
            ))}
          </div>

          {/* =====================================================
              CONTENT
          ===================================================== */}

          <div className="space-y-6">
            <div>
              <h3 className="text-[20px] font-medium text-[#1f2a44] mb-4">
                About
              </h3>

              <p className="text-[15px] leading-8 text-gray-600">{staff.bio}</p>
            </div>

            <div>
              <h3 className="text-[20px] font-medium text-[#1f2a44] mb-4">
                Experience and Expertise
              </h3>

              <p className="text-[15px] leading-8 text-gray-600">
                {staff.name} has extensive experience working with community
                development initiatives, leadership programs, and volunteer
                management activities across different regions.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-medium text-[#1f2a44] mb-4">
                Contribution to VIN
              </h3>

              <p className="text-[15px] leading-8 text-gray-600">
                Through dedication and leadership, {staff.name} continues to
                contribute significantly toward VIN’s mission of empowering
                communities and supporting sustainable development.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDEBAR
        ===================================================== */}
        {/* TESTIMONIALS */}
        <div className="rounded-2xl border border-[#D9DFEA] bg-[#F8FAFC] overflow-hidden px-6 py-5">
          {/* Heading */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[19px] font-medium text-[#1F2A44]">
              What People say about
              <br/> {staff.name.split(" ")[0]}
            </h2>
          </div>

          {/* Cards */}
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

                      <p className=" text-[12px] text-[#6B7280]">{item.role}</p>
                    </div>
                  </div>

                  {/* Rating */}
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

                {/* Text */}
                <p className="mt-5 text-[12px] leading-4 text-[#5B6475]">
                  They approached each shift with professionalism and
                  enthusiasm, often going above expectations to ensure projects
                  were completed smoothly. Their attention to detail and
                  willingness to assist wherever needed greatly contributed to
                  the success of our programs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERVIEW + ARTICLES WRAPPER
          ALIGNED WITH LEFT COLUMN
      ===================================================== */}

      <div className=" mx-auto lg:pr-[360px]">
        <section className="py-12">
          <div className="bg-[#f8f9fc] border border-[#e9edf5] rounded-xl p-6">
            {/* HEADING */}

            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-[#1f2a44] mb-2">
                Interview Videos
              </h2>

              <p className="text-sm text-gray-500">
                Listen to volunteer stories from people who chose to make a
                difference with VIN.
              </p>
            </div>

            {/* VIDEO CARDS */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group cursor-pointer">
                  {/* IMAGE */}

                  <div className="relative h-[200px] rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                      alt="Interview"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* CONTENT */}

                  <div className="mt-4">
                    <h3 className="text-[15px] font-medium leading-6 text-[#1f2a44] group-hover:text-[#2A3495]">
                      Improved Teaching Quality Key to Nepal’s Overall
                      Development
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            ARTICLES
        ===================================================== */}

        <section className="pb-10">
          <div className="bg-[#f8f9fc] border border-[#e9edf5] rounded-xl p-6">
            {/* HEADING */}

            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-[#1f2a44] mb-2">
                Articles
              </h2>

              <p className="text-sm text-gray-500">
                Read insightful stories from people who chose to make a
                difference with VIN.
              </p>
            </div>

            {/* ARTICLE CARDS */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group cursor-pointer">
                  {/* IMAGE */}

                  <div className="h-[200px] rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                      alt="Article"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* CONTENT */}

                  <div className="mt-4">
                    <h3 className="text-[15px] font-medium leading-6 text-[#1f2a44] group-hover:text-[#2A3495]">
                      Improved Teaching Quality Key to Nepal’s Overall
                      Development
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
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
        <VolunteerProgram />
      </section>

      {/*Becoming part section*/}
      <section className="w-full bg-[#f3f3f3] py-10 px-4">
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
        <div className="relative">
          {/* Left Arrow */}
          <button className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition">
            ❮
          </button>

          {/* Right Arrow */}
          <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition">
            ❯
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 group hover:shadow-2xl transition duration-500">
              <div className="overflow-hidden">
                <img
                  src="/images/volunteer.jpg"
                  alt="Volunteer"
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-4">
                <button className="w-full bg-[#2f3ea8] hover:bg-[#24328d] text-white text-[13px] font-medium py-3 rounded-md transition">
                  Apply for Volunteering →
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 group hover:shadow-2xl transition duration-500">
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
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 group hover:shadow-2xl transition duration-500">
              <div className="overflow-hidden">
                <img
                  src="/images/internship.jpg"
                  alt="Internship"
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-4">
                <button className="w-full bg-[#2f3ea8] hover:bg-[#24328d] text-white text-[13px] font-medium py-3 rounded-md transition">
                  Apply for Internship →
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 group hover:shadow-2xl transition duration-500">
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
          <div className="relative">
            {/* Left Arrow */}
            <button className="absolute left-[-20px] top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white shadow-sm md:flex">
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
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="rounded-2xl border border-[#ececec] bg-[#E2E8F0] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <p className="text-[14px] leading-7 text-[#5d6470]">
                  "Volunteering with VN completely transformed the way I see
                  community development. The staff were incredibly supportive,
                  and the projects truly made a real impact. I learned so much
                  from fellow volunteers!"
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <img
                    src="/hero.png"
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
              <div className="rounded-2xl border border-[#ececec] bg-[#E2E8F0] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <p className="text-[14px] leading-7 text-[#5d6470]">
                  "Volunteering with VN completely transformed the way I see
                  community development. The staff were incredibly supportive,
                  and the projects truly made a real impact. I learned so much
                  from fellow volunteers!"
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <img
                    src="/hero.png"
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
              <div className="rounded-2xl border border-[#ececec] bg-[#E2E8F0] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <p className="text-[14px] leading-7 text-[#5d6470]">
                  "Volunteering with VN completely transformed the way I see
                  community development. The staff were incredibly supportive,
                  and the projects truly made a real impact. I learned so much
                  from fellow volunteers!"
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <img
                    src="/hero.png"
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
            <button className="absolute right-[-20px] top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white shadow-sm md:flex">
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
              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dcdcdc] bg-white shadow-sm transition hover:bg-gray-50">
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

              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dcdcdc] bg-white shadow-sm transition hover:bg-gray-50">
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
                src="/hero.png"
                alt="Nepal Trekking"
                className="h-[220px] w-full object-cover md:h-[420px]"
              />
            </div>

            {/* Image 2 */}
            <div className="overflow-hidden rounded-[22px]">
              <img
                src="/hero.png"
                alt="River Rafting"
                className="h-[220px] w-full object-cover md:h-[420px]"
              />
            </div>

            {/* Image 3 */}
            <div className="overflow-hidden rounded-[22px]">
              <img
                src="/hero.png"
                alt="Temple"
                className="h-[220px] w-full object-cover md:h-[420px]"
              />
            </div>

            {/* Image 4 */}
            <div className="overflow-hidden rounded-[22px]">
              <img
                src="/hero.png"
                alt="Wildlife"
                className="h-[220px] w-full object-cover md:h-[420px]"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Volunteer Program Section */}
      <section className="relative w-full overflow-hidden rounded-sm  pt-10 pb-16 md:pb-24 pt-16">
        {/* Background Image */}
        <img
          src="/hero.png"
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
      <LatestNews />
      <Articles />
    </main>
  );
}
