"use client";
import React, { useRef } from "react";
import Link from "next/link";

export default function OurTeam() {
  const teamRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: "Bhupendra Ghimire",
      role: "President",
      degree: "Master's In Education",
      image: "/images/member1.png",
    },
    {
      name: "Dinesh Khatiwada",
      role: "Volunteer Manager",
      degree: "Master's In Education",
      image: "/images/member2.png",
    },
    {
      name: "Tula Dhwoj Khatiwada",
      role: "Program Manager",
      degree: "Master's In Education",
      image: "/images/member3.png",
    },
    {
      name: "Surendra Joshi",
      role: "IT Consultant",
      degree: "Master's In Education",
      image: "/images/member4.png",
    },
    {
      name: "Anita Thapa",
      role: "Field Coordinator",
      degree: "Bachelor's In Social Work",
      image: "/hero.png",
    },
    {
      name: "Rita Rai",
      role: "Community Liaison",
      degree: "Bachelor's In Sociology",
      image: "/hero.png",
    },
    {
      name: "Sujan Karki",
      role: "Monitoring Officer",
      degree: "Bachelor's In Management",
      image: "/hero.png",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-4 md:px-8">
      <div className="mx-auto">
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

          <Link href="/about/staff">
            <button className="bg-[#2A3495] hover:bg-[#1f2875] transition text-white text-sm font-medium px-6 py-3 rounded-md shadow-md cursor-pointer">
              View all members
            </button>
          </Link>
        </div>

        {/* Team Cards */}
        <div className="relative mt-12 group">
          {/* Left Arrow */}
          <button
            onClick={() =>
              teamRef.current?.scrollBy({ left: -320, behavior: "smooth" })
            }
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#2A3495] text-white flex items-center justify-center shadow-md hover:bg-[#1f2875] transition-colors"
          >
            &#10094;
          </button>

          {/* Cards Slider */}
          <div
            ref={teamRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start bg-white rounded-[12px] border border-[#E5E7EB] shadow-sm p-3"
              >
                <div className="rounded-[10px] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[200px] object-cover"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-[18px] font-semibold text-[#1F2937]">
                    {member.name}
                  </h3>
                  <p className="text-[14px] text-[#4B5563] mt-1">
                    {member.role}
                  </p>
                  <p className="text-[13px] text-[#9CA3AF] mt-1">
                    {member.degree}
                  </p>
                  <Link href="/about/staff" className="w-full block">
                    <button className="mt-5 w-full border border-[#2A3495] text-[#2A3495] py-2 rounded-md text-sm font-medium hover:bg-[#2A3495] hover:text-white transition cursor-pointer">
                      View profile
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() =>
              teamRef.current?.scrollBy({ left: 320, behavior: "smooth" })
            }
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#2A3495] text-white flex items-center justify-center shadow-md hover:bg-[#1f2875] transition-colors"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}
