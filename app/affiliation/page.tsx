"use client";
import { useRef } from "react";

export default function AffiliationPage() {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const partners = [
    {
      title: "SuD HAV",
      subtitle: "Sustainable Development",
      description:
        "This organization works together with Volunteers Initiative Nepal (VIN) to support long-term development projects.",
    },
    {
      title: "jgd",
      subtitle: "Internationale",
      description:
        "The logo has been engaging volunteer entrepreneurship since 2010 and supports VIN through international collaboration.",
    },
    {
      title: "Solidarités Jeunesses",
      subtitle: "Solidarités Jeunesses",
      description:
        "International movement supporting volunteer work camps and community engagement.",
    },
    {
      title: "IBO Italia",
      subtitle: "IBO Italia – ODV ETS",
      description:
        "IBO Italia develops international cooperation and solidarity initiatives worldwide.",
    },
    {
      title: "YEU",
      subtitle: "Youth For Understanding",
      description:
        "Youth volunteering and educational exchange organisation partnering with VIN.",
    },
    {
      title: "Voluntary Work Camp",
      subtitle: "Voluntary Work Camp Association",
      description:
        "Supports global volunteering activities and humanitarian development.",
    },
  ];
  const friends = [
    {
      title: "Friends Of VIN",
      subtitle: "FRIENDS OF VIN – NETHERLANDS",
      description:
        "Supports VIN’s women empowerment and education programs in Nepal.",
    },
    {
      title: "Friends Of VIN US",
      subtitle: "FRIENDS OF VIN – US",
      description:
        "International supporters helping VIN build sustainable community programs.",
    },
  ];
  const testimonials = [
    {
      name: "Bibek Kumar Sah",
      country: "Nepal",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Bibek Kumar Sah",
      country: "United States",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Bibek Kumar Sah",
      country: "Congo",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
  ];

  return (
    <main className="bg-white">
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="w-full relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600&auto=format&fit=crop"
            alt="Affiliation Background"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Content */}
        <div className="relative z-10 py-16 px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Heading */}
            <h2 className="text-white text-[34px] md:text-[52px] font-semibold mb-4">
              Affiliation & Partner
            </h2>

            {/* Search Box */}
            <div className="max-w-3xl mx-auto bg-white/20 backdrop-blur-xl border border-white/20 rounded-[6px] p-4 shadow-2xl">
              <p className="text-white/90 text-[15px] md:text-[17px] mb-10">
                12 Affiliation partners
              </p>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_180px] gap-4">
                {/* Continent */}
                <div className="bg-white rounded-[4px] overflow-hidden">
                  <label className="block text-left px-4 pt-2 text-[13px] font-medium text-[#1f2a44]">
                    Continent
                  </label>

                  <select className="w-full h-[34px] px-4 text-[14px] text-[#5b6478] focus:outline-none">
                    <option>Select...</option>
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>North America</option>
                    <option>South America</option>
                    <option>Africa</option>
                    <option>Australia</option>
                  </select>
                </div>

                {/* Country */}
                <div className="bg-white rounded-[4px] overflow-hidden">
                  <label className="block text-left px-4 pt-2 text-[13px] font-medium text-[#1f2a44]">
                    Country
                  </label>

                  <select className="w-full h-[34px] px-4 text-[14px] text-[#5b6478] focus:outline-none">
                    <option>Select...</option>
                    <option>Nepal</option>
                    <option>India</option>
                    <option>Australia</option>
                    <option>USA</option>
                  </select>
                </div>

                {/* Button */}
                <div className="flex items-end">
                  <button className="w-full h-[48px] rounded-[4px] bg-[#2A3495] hover:bg-[#1f2877] transition-all duration-300 text-white text-[15px] font-medium shadow-md">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          PARTNERS SECTION
      ========================================= */}
      <section className="w-full py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="mb-3">
            <h2 className="text-[26px] font-medium text-[#1f2a44] mb-3">
              Certified by
            </h2>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white  rounded-[8px] p-6 text-center hover:shadow-md transition-all duration-300"
              >
                {/* Logo Placeholder */}
                <div className="w-full h-[200px] rounded-[6px] border border-dashed border-[#cfd5e3] bg-[#f8f9fc] flex items-center justify-center mb-6">
                  <span className="text-[18px]  font-medium text-[#2A3495]">
                    {partner.title}
                  </span>
                </div>

                {/* Title */}
                <h3 className=" text-[26px] underline font-medium text-[#1f2a44] mb-2">
                  {partner.subtitle}
                </h3>

                {/* Description */}
                <p className="text-[14px] leading-[26px] text-[#7b8498] mb-5">
                  {partner.description}
                </p>

                {/* Button */}
                <button className="text-[#2A3495] text-[14px] font-medium hover:underline">
                  Read More →
                </button>
              </div>
            ))}
          </div>
          {/* Section Heading */}
          <div className="mb-3">
            <h2 className="text-[26px] font-medium text-[#1f2a44] mb-3">
              friends of VIN
            </h2>
            {/* Partners Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {friends.map((friends, index) => (
                <div
                  key={index}
                  className="bg-white  rounded-[8px] p-6 text-center hover:shadow-md transition-all duration-300"
                >
                  {/* Logo Placeholder */}
                  <div className="w-full h-[200px] rounded-[6px] border border-dashed border-[#cfd5e3] bg-[#f8f9fc] flex items-center justify-center mb-6">
                    <span className="text-[18px] underline font-medium text-[#2A3495]">
                      {friends.title}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[26px] underline font-medium text-[#1f2a44] mb-2">
                    {friends.subtitle}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] leading-[26px] text-[#7b8498] mb-5">
                    {friends.description}
                  </p>

                  {/* Button */}
                  <button className="text-[#2A3495] text-[14px] font-medium hover:underline">
                    Read More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/*Contact Section */}
      <section className="w-full py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto ">
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
      {/* Testimonials Section */}
      <section className="w-full bg-[#f5f5f5] py-16 px-6 md:px-10">
      <div className=" mx-auto relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <h2 className="text-[42px] leading-none font-semibold text-[#1F2A44] mb-4">
              What Our Volunteers Say
            </h2>

            <p className="max-w-[700px] text-[15px] leading-[28px] text-[#5f6777]">
              Read testimonials from our clients and community members.
              Discover real stories, experiences, and feedback that highlight
              our commitment, impact, and the trust we build every day.
            </p>
          </div>

          {/* Button */}
          <button className="w-[110px] h-[44px] rounded-[6px] bg-[#2A3495] text-white text-[14px] font-medium shadow-md hover:bg-[#1f2878] transition-all">
            View all
          </button>
        </div>

        {/* Slider Section */}
        <div className="relative group/test">
          {/* Left Arrow */}
          <button 
            onClick={() => testimonialsRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-[38px] h-[38px] rounded-full bg-white shadow-md flex items-center justify-center text-[#2A3495] hover:bg-[#2A3495] hover:text-white transition-all opacity-0 group-hover/test:opacity-100 duration-300"
          >
            ❮
          </button>

          {/* Cards */}
          <div 
            ref={testimonialsRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="w-full md:w-[calc(33.333%-21.33px)] shrink-0 snap-start bg-[#ECEFF3] rounded-[10px] px-8 py-7 shadow-sm border border-[#e4e7ec]"
              >
                {/* Quote */}
                <p className="text-[14px] leading-[28px] text-[#5f6777] mb-8">
                  “Volunteering with VIN completely transformed the way I see
                  community development. The staff were incredibly supportive,
                  and the projects truly make a real impact. I learned more in a
                  few weeks than I ever expected.”
                </p>

                {/* User */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[46px] h-[46px] rounded-full object-cover"
                  />

                  <div>
                    <h4 className="text-[15px] font-semibold text-[#1F2A44] leading-none mb-1">
                      {item.name}
                    </h4>

                    <p className="text-[13px] text-[#7a8394]">
                      {item.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => testimonialsRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-[38px] h-[38px] rounded-full bg-white shadow-md flex items-center justify-center text-[#2A3495] hover:bg-[#2A3495] hover:text-white transition-all opacity-0 group-hover/test:opacity-100 duration-300"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
      {/* Programs Section */}
      <section className="w-full bg-[#F1F5F9] py-16 px-6 md:px-10">
        <div className=" mx-auto">
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
