"use client";
import React, { useRef } from "react";
import Link from "next/link";

export default function ChooseImpact() {
  const impactRef = useRef<HTMLDivElement>(null);

  return (
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
          <Link
            href="/work-with-us"
            className="inline-flex items-center justify-center bg-[#2f3ea8] hover:bg-[#24328d] text-white text-[14px] font-medium px-8 py-3 rounded-md shadow-md transition"
          >
            View all
          </Link>
        </div>
      </div>

      {/* Cards */}
      <div className="relative group/impact">
        {/* Left Arrow */}
        <button
          onClick={() =>
            impactRef.current?.scrollBy({ left: -320, behavior: "smooth" })
          }
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition opacity-0 group-hover/impact:opacity-100"
        >
          ❮
        </button>

        {/* Right Arrow */}
        <button
          onClick={() =>
            impactRef.current?.scrollBy({ left: 320, behavior: "smooth" })
          }
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition opacity-0 group-hover/impact:opacity-100"
        >
          ❯
        </button>

        <div
          ref={impactRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Card 1 */}
          <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start ">
            <div className="overflow-hidden  bg-white rounded-xl  shadow-md border border-gray-200 group/card hover:shadow-2xl">
              <img
                src="/hero.png"
                alt="Volunteer"
                className="w-full h-[180px] md:h-[290px] object-cover group-hover/card:scale-105 transition duration-500"
              />
            </div>
            <div className="py-4">
              <Link
                href="/applyNow"
                className="w-full bg-[#2f3ea8] hover:bg-[#24328d] text-white text-[13px] font-medium py-3 rounded-md transition inline-flex items-center justify-center text-center"
              >
                Apply for Volunteering →
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start">
            <div className="overflow-hidden  bg-white rounded-xl  shadow-md border border-gray-200 group/card hover:shadow-2xl transition duration-500">
              <img
                src="/hero.png"
                alt="Donate"
                className="w-full h-[180px] md:h-[290px] object-cover group-hover/card:scale-105 transition duration-500"
              />
            </div>
            <div className="py-4">
              <Link href="/donate" className="w-full">
                <button className="w-full bg-[#2f3ea8] hover:bg-[#24328d] text-white text-[13px] font-medium py-3 rounded-md transition cursor-pointer">
                  Donate Now →
                </button>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start">
            <div className="overflow-hidden  bg-white rounded-xl  shadow-md border border-gray-200 group/card hover:shadow-2xl transition duration-500">
              <img
                src="/hero.png"
                alt="Internship"
                className="w-full h-[180px] md:h-[290px] object-cover group-hover/card:scale-105 transition duration-500"
              />
            </div>
            <div className="py-4">
              <Link
                href="/applyNow"
                className="w-full bg-[#2f3ea8] hover:bg-[#24328d] text-white text-[13px] font-medium py-3 rounded-md transition inline-flex items-center justify-center text-center"
              >
                Apply for Internship →
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start">
            <div className=" bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 group/card hover:shadow-2xl transition duration-500">
              <img
                src="/hero.png"
                alt="Sponsor Child"
                className="w-full h-[180px] md:h-[290px] object-cover group-hover/card:scale-105 transition duration-500"
              />
            </div>
            <div className="py-4">
              <Link href="/sponsor-child" className="w-full">
                <button className="w-full bg-[#2f3ea8] hover:bg-[#24328d] text-white text-[13px] font-medium py-3 rounded-md transition cursor-pointer">
                  Sponsor a Child →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
