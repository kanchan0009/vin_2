"use client";

import VolunteerProgram from "../components/Volunteer-program";
import LatestNews from "../components/news";
import Articles from "../components/articles";

export default function ProgrammePage() {
  return (
    <main className="min-h-screen  bg-white">
      
      {/* Top Image */}
        <div className="w-full relative left-1/2 right-1/2 w-full -translate-x-1/2 overflow-hidden">
          <img
            src="/hero.png"
            alt="Women's Empowerment"
            className="w-full h-[220px] sm:h-[320px] md:h-[420px] object-cover"
          />
        </div>

      {/* Programs Section */}
      <section className="w-full px-6 md:px-12 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        {/* Left Content */}
        <div>
          <h2 className="text-[38px] font-medium text-[#1f2a44] leading-none mb-4">
            Our Volunteering programs
          </h2>

          <p className="max-w-[720px] text-[14px] leading-[24px] text-[#6b7280]">
            Our programs are designed to empower communities through education,
            skill development, and inclusive initiatives that help individuals
            grow, thrive, and lead meaningful change.
          </p>
        </div>

        {/* Search Box */}
        <div className="relative w-full md:w-[260px]">
          <input
            type="text"
            placeholder="Search for programs"
            className="w-full h-[42px] rounded-md bg-[#f3f5f9] border border-[#e5e7eb] pl-10 pr-4 text-[13px] text-[#374151] placeholder:text-[#9ca3af] outline-none focus:border-[#2A3495]"
          />

          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </section>

      {/* Volunteer Programs */}
      <section className="px-6 md:px-12 pb-12">
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
              <h2 className="text-3xl md:text-[36px] font-semibold leading-tight max-w-3xl">
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
      {/*our team section*/}
      <section className="w-full  py-20 px-4 md:px-8">
        <div className=" mx-auto">
          {/* Header */}
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-[38px] font-medium text-[#1F2A44] leading-tight">
                Our Team Members
              </h2>

              <p className="mt-2 text-[#6B7280] text-[15px]">
                Listen to heartfelt stories from people who choose to make a
                difference with us.
              </p>
            </div>

            <button className="bg-[#2A3495] hover:bg-[#1f2875] transition text-white text-sm font-medium px-6 py-3 rounded-md shadow-md">
              View all members
            </button>
          </div>

          {/* Team Cards */}
          <div className="relative mt-12">
            {/* Left Arrow */}
            <button className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#2A3495] text-white flex items-center justify-center shadow-md">
              &#10094;
            </button>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-[12px] border border-[#E5E7EB] shadow-sm p-3">
                <div className="rounded-[10px] overflow-hidden">
                  <img
                    src="/images/member1.png"
                    alt="Bhupendra Ghimire"
                    className="w-full h-[200px] object-cover"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-[18px] font-[400] text-[#1F2937]">
                    Bhupendra Ghimire
                  </h3>

                  <p className="text-[14px] text-[#4B5563] mt-1">President</p>

                  <p className="text-[13px] text-[#9CA3AF] mt-1">
                    Master's In Education
                  </p>

                  <button className="mt-5 w-full border border-[#2A3495] text-[#2A3495] py-2 rounded-md text-sm font-medium hover:bg-[#2A3495] hover:text-white transition">
                    View profile
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-[12px] border border-[#E5E7EB] shadow-sm p-3">
                <div className="rounded-[10px] overflow-hidden">
                  <img
                    src="/images/member2.png"
                    alt="Dinesh Khatiwada"
                    className="w-full h-[200px] object-cover"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-[18px] font-semibold text-[#1F2937]">
                    Dinesh Khatiwada
                  </h3>

                  <p className="text-[14px] text-[#4B5563] mt-1">
                    Volunteer Manager
                  </p>

                  <p className="text-[13px] text-[#9CA3AF] mt-1">
                    Master's In Education
                  </p>

                  <button className="mt-5 w-full border border-[#2A3495] text-[#2A3495] py-2 rounded-md text-sm font-medium hover:bg-[#2A3495] hover:text-white transition">
                    View profile
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-[12px] border border-[#E5E7EB] shadow-sm p-3">
                <div className="rounded-[10px] overflow-hidden">
                  <img
                    src="/images/member3.png"
                    alt="Tula Dhwoj Khatiwada"
                    className="w-full h-[200px] object-cover"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-[18px] font-semibold text-[#1F2937]">
                    Tula Dhwoj Khatiwada
                  </h3>

                  <p className="text-[14px] text-[#4B5563] mt-1">
                    Program Manager
                  </p>

                  <p className="text-[13px] text-[#9CA3AF] mt-1">
                    Master's In Education
                  </p>

                  <button className="mt-5 w-full border border-[#2A3495] text-[#2A3495] py-2 rounded-md text-sm font-medium hover:bg-[#2A3495] hover:text-white transition">
                    View profile
                  </button>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-[12px] border border-[#E5E7EB] shadow-sm p-3">
                <div className="rounded-[10px] overflow-hidden">
                  <img
                    src="/images/member4.png"
                    alt="Surendra Joshi"
                    className="w-full h-[200px] object-cover"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-[18px] font-semibold text-[#1F2937]">
                    Surendra Joshi
                  </h3>

                  <p className="text-[14px] text-[#4B5563] mt-1">
                    IT Consultant
                  </p>

                  <p className="text-[13px] text-[#9CA3AF] mt-1">
                    Master's In Education
                  </p>

                  <button className="mt-5 w-full border border-[#2A3495] text-[#2A3495] py-2 rounded-md text-sm font-medium hover:bg-[#2A3495] hover:text-white transition">
                    View profile
                  </button>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#2A3495] text-white flex items-center justify-center shadow-md">
              &#10095;
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
      <LatestNews/>
      <Articles/>
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
      <section className="py-20 bg-white">
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

            <h5 className="text-[28px] font-semibold text-[#4285F4] mt-2">
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

            <h5 className="text-[32px] font-bold text-[#4A7BFF] mt-2">GO</h5>

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
      {/* Volunteer Reviews Section */}
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
      {/* Contact Section */}
      <section className="w-full flex justify-center py-12 px-4 bg-white">
        <div className="w-full max-w-4xl bg-[#2E3192] rounded-md overflow-hidden px-8 py-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <div className="text-white pt-2">
              <h2 className="text-[34px] leading-[48px] fontmedium mb-4">
                Ready to Start Your Journey?
              </h2>

              <p className="text-[13px] leading-[22px] text-[#d9ddff] max-w-[320px] mb-8">
                Have questions? Want to discuss which program is right for you?
                Our team is here to help. Reach out today and let’s start the
                conversation.
              </p>

              {/* Phone */}
              <div className="flex items-start gap-3 mb-5">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 text-[#2A3495]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.129a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.209-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>

                <div className="text-[12px] leading-[20px] text-[#e4e7ff]">
                  <p>+977 (1) 01462560 (Office)</p>
                  <p>+977 9851070477 (Mobile)</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 text-[#2A3495]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12H8m8 0l-8 0m8 0l-8 0m14-5H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"
                    />
                  </svg>
                </div>

                <p className="text-[13px] text-[#e4e7ff]">Support@vin.org.np</p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-white rounded-md p-5 shadow-md">
              <h3 className="text-[13px] font-semibold text-[#222] mb-4">
                Inquiry Form
              </h3>

              <form className="space-y-3">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] text-[#555] mb-1">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. Snecker"
                    className="w-full h-[38px] px-3 text-[12px] border border-gray-200 rounded-sm outline-none focus:border-[#2A3495]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] text-[#555] mb-1">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="e.g. example@example.com"
                    className="w-full h-[38px] px-3 text-[12px] border border-gray-200 rounded-sm outline-none focus:border-[#2A3495]"
                  />
                </div>

                {/* Program */}
                <div>
                  <label className="block text-[11px] text-[#555] mb-1">
                    Program
                  </label>

                  <select className="w-full h-[38px] px-3 text-[12px] border border-gray-200 rounded-sm outline-none focus:border-[#2A3495] text-[#777]">
                    <option>Select a Program</option>
                    <option>Teaching Program</option>
                    <option>Volunteer Program</option>
                    <option>Community Program</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] text-[#555] mb-1">
                    Message
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Type your message here"
                    className="w-full px-3 py-2 text-[12px] border border-gray-200 rounded-sm outline-none resize-none focus:border-[#2A3495]"
                  />
                </div>

                {/* Button */}
                <button className="w-full h-[40px] bg-[#2A3495] hover:bg-[#1f2877] transition-all rounded-sm text-white text-[12px] font-medium mt-2">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
