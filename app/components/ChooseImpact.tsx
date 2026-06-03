"use client";
import React, { useRef } from "react";
import Link from "next/link";

export default function ChooseImpact() {
  const impactRef = useRef<HTMLDivElement>(null);

  const scrollImpact = (dir: "left" | "right") => {
    if (impactRef.current) {
      const scrollAmount = impactRef.current.clientWidth;
      impactRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full px-6 md:px-10 py-16 bg-white overflow-hidden">
      {/* Top Heading */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
        <div>
          <span className="bg-[#EEF2FF] text-[#2F3C97] text-[13px] font-medium px-4 py-1.5 rounded-full inline-block mb-4">
            Make a Difference
          </span>
          <h2 className="text-[#1F2937] text-[32px] md:text-[40px] leading-tight font-serif font-bold mb-3">
            Choose where your Impact Begins
          </h2>
          <p className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed max-w-[700px]">
            Take the first step towards creating meaningful change. Every action counts in building a better world.
          </p>
        </div>
        <div>
          <Link
            href="/work-with-us"
            className="inline-flex items-center justify-center border border-[#5C6BC0] text-[#5C6BC0] hover:bg-[#EEF2FF] text-[14px] font-medium px-8 py-2.5 rounded-[6px] transition whitespace-nowrap"
          >
            View All
          </Link>
        </div>
      </div>

      {/* Cards */}
      <div className="relative w-full group/impact">
        {/* Left Arrow */}
        <button
          onClick={() => scrollImpact("left")}
          className="absolute left-0 top-[50%] -translate-x-4 md:-translate-x-5 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] border border-[#F3F4F6] flex items-center justify-center text-[#6B7280] hover:text-[#2F3C97] transition-all focus:outline-none opacity-0 group-hover/impact:opacity-100"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scrollImpact("right")}
          className="absolute right-0 top-[50%] translate-x-4 md:translate-x-5 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] border border-[#F3F4F6] flex items-center justify-center text-[#6B7280] hover:text-[#2F3C97] transition-all focus:outline-none opacity-0 group-hover/impact:opacity-100"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>

        <div
          ref={impactRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {/* Card 1: Donate */}
          <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start relative group/card rounded-[12px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-[320px] md:h-[400px]">
              <img
                src="/hero.png"
                alt="Donate"
                className="w-full h-full object-cover group-hover/card:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-0 right-0 flex justify-center px-4">
                <Link href="/#donate-section">
                  <button className="bg-[#5C6BC0] hover:bg-[#4e5caa] text-white text-[14px] font-medium px-8 py-2.5 rounded-[6px] transition cursor-pointer shadow-md">
                    Donate
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Sponsor a Children */}
          <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start relative group/card rounded-[12px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-[320px] md:h-[400px]">
              <img
                src="/hero.png"
                alt="Sponsor a Children"
                className="w-full h-full object-cover group-hover/card:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-0 right-0 flex justify-center px-4">
                <Link href="/sponsor-child">
                  <button className="bg-[#5C6BC0] hover:bg-[#4e5caa] text-white text-[14px] font-medium px-8 py-2.5 rounded-[6px] transition cursor-pointer shadow-md whitespace-nowrap">
                    Sponsor a Children
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Volunteer */}
          <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start relative group/card rounded-[12px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-[320px] md:h-[400px]">
              <img
                src="/hero.png"
                alt="Volunteer"
                className="w-full h-full object-cover group-hover/card:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-0 right-0 flex justify-center px-4">
                <Link href="/applyNow">
                  <button className="bg-[#5C6BC0] hover:bg-[#4e5caa] text-white text-[14px] font-medium px-8 py-2.5 rounded-[6px] transition cursor-pointer shadow-md">
                    Volunteer
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4: Intern */}
          <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start relative group/card rounded-[12px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-[320px] md:h-[400px]">
              <img
                src="/hero.png"
                alt="Intern"
                className="w-full h-full object-cover group-hover/card:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-0 right-0 flex justify-center px-4">
                <Link href="/applyNow">
                  <button className="bg-[#5C6BC0] hover:bg-[#4e5caa] text-white text-[14px] font-medium px-8 py-2.5 rounded-[6px] transition cursor-pointer shadow-md">
                    Intern
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
