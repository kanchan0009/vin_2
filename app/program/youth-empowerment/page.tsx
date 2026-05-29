"use client";

import Link from "next/link";

export default function WomenEducationProgramPage() {
  return (
    <main className="w-full bg-white">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative w-full h-[620px] overflow-hidden">
  {/* Background Image */}
  <img
    src="/women-education-banner.jpg"
    alt="Women Education Volunteer"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

  {/* Content */}
  <div className="relative z-10 flex items-end justify-center h-full pb-10 px-6">
    <div className="max-w-[850px] text-center">
      
      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 bg-black/10 backdrop-blur-sm border border-white/10 px-8 py-2 rounded-3xl mb-5">
        <span className="text-gray-300 text-[16px] font-medium">
          Impact Program
        </span>

        <span className="w-1 h-1 rounded-full bg-white/70" />

        <span className="text-white text-[16px] font-medium">
          Youth Empowerment
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-white text-[20px] md:text-[30px] leading-[32px] font-medium mb-4">
        Youth Empowerment Volunteer in Nepal:
        <br />
        Teach, Mentor, and Transform Lives
      </h1>

      {/* Description */}
      <p className="text-white/85 text-[14px] leading-[26px] max-w-[700px] mx-auto mb-8">
        From literacy to leadership — empowering one woman, one village,
        one future at a time.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        
        {/* Apply Button */}
        <Link href="/applyNow" className="h-[46px] px-10 rounded-md bg-[#202788] hover:bg-[#2f39be] transition-all duration-300 text-white text-[16px] font-medium shadow-lg inline-flex items-center justify-center text-center">
          Apply for Volunteer
        </Link>

        {/* Fees Button */}
        <button className="h-[46px] px-10 rounded-md bg-white hover:bg-gray-100 transition-all duration-300 text-[#1f2a44] text-[16px] font-medium shadow-lg">
          View Fees
        </button>
      </div>
    </div>
  </div>
</section>

      

      

      
    </main>
  );
}