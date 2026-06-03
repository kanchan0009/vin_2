"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, BookOpen, Compass, Briefcase, Settings, Users, Star, PenTool } from "lucide-react";

const tabs = [
  { id: "teaching", label: "Teaching Program", icon: BookOpen },
  { id: "adventure", label: "Adventure Program", icon: Compass },
  { id: "workcamp", label: "Workcamp Program", icon: Briefcase },
  { id: "management", label: "Management & Administrative Program", icon: Settings },
  { id: "public-interest", label: "Public Interest Program", icon: Users },
  { id: "featured", label: "Featured Projects", icon: Star },
  { id: "journalism", label: "Journalism Program", icon: PenTool },
];

const cardsData = [
  {
    image: "/hero.png",
    title: "Domestic Violence Prevention Volunteer Program in Nepal",
    description: "Are you seeking volunteer opportunities in domestic violence prevention that empower you to create lasting change",
  },
  {
    image: "/images/volunteer.jpg",
    title: "Domestic Violence Prevention Volunteer Program in Nepal",
    description: "Are you seeking volunteer opportunities in domestic violence prevention that empower you to create lasting change",
  },
  {
    image: "/images/donate.jpg",
    title: "Domestic Violence Prevention Volunteer Program in Nepal",
    description: "Are you seeking volunteer opportunities in domestic violence prevention that empower you to create lasting change",
  },
  {
    image: "/images/kids.png",
    title: "Domestic Violence Prevention Volunteer Program in Nepal",
    description: "Are you seeking volunteer opportunities in domestic violence prevention that empower you to create lasting change",
  },
];

export default function VolunteerPathways() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full px-6 md:px-10 py-12 md:py-16 bg-white text-center overflow-hidden">
      {/* Badge */}
      <div className="flex justify-center mb-4">
        <span className="bg-[#EEF2FF] text-[#2F3C97] text-[13px] font-medium px-4 py-1.5 rounded-full inline-block">
          Volunteer with Impact
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-[#1F2937] text-[32px] md:text-[40px] leading-tight font-serif font-bold mb-10">
        Volunteer & Learning Pathways
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 border ${
                isActive
                  ? "bg-[#2F3C97] text-white border-[#2F3C97] shadow-md"
                  : "bg-white text-[#6B7280] border-[#E5E7EB] hover:bg-[#F3F4F6]"
              }`}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Subheading and Explore Button */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 text-left border-b border-[#E5E7EB] pb-4">
        <p className="text-[#4B5563] text-[15px] md:text-[16px]">
          These programs offer meaningful ways for volunteers and interns to support ongoing community work
        </p>
        <Link href="/program" className="mt-4 md:mt-0 whitespace-nowrap">
          <button className="border border-[#5C6BC0] text-[#5C6BC0] hover:bg-[#EEF2FF] transition-all duration-300 px-6 py-2 rounded-md text-[14px] font-medium">
            Explore All Projects
          </button>
        </Link>
      </div>

      {/* Carousel Container */}
      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={() =>
            scrollRef.current?.scrollBy({ left: -340, behavior: "smooth" })
          }
          className="absolute left-0 top-[40%] -translate-x-4 md:-translate-x-6 z-20 w-10 h-10 rounded-full bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] border border-[#F3F4F6] flex items-center justify-center text-[#6B7280] hover:text-[#2F3C97] transition-all focus:outline-none"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Cards Scrollable Area */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] text-left"
        >
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start bg-white rounded-[12px] shadow-[0px_4px_24px_rgba(0,0,0,0.06)] border border-[#F9FAFB] flex flex-col overflow-hidden hover:shadow-[0px_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-[180px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex items-center gap-3 text-[12px] mb-4">
                  <span className="bg-white border border-[#E5E7EB] text-[#4B5563] px-3 py-1 rounded-full">
                    <span className="font-semibold text-[#1F2937]">3-6</span> hours/day
                  </span>
                  <span className="bg-white border border-[#E5E7EB] text-[#4B5563] px-3 py-1 rounded-full">
                    <span className="font-semibold text-[#1F2937]">2-40</span> weeks
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[#1F2937] text-[18px] leading-tight font-serif font-bold mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] text-[13px] leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-3 mt-auto">
                  <Link
                    href="/applyNow"
                    className="flex-1 text-center bg-[#5C6BC0] hover:bg-[#4e5caa] transition-all duration-300 text-white text-[14px] font-medium py-2.5 rounded-[6px]"
                  >
                    Apply Now
                  </Link>
                  <Link
                    href="/program"
                    className="flex-1 text-center border border-[#5C6BC0] text-[#5C6BC0] hover:bg-[#EEF2FF] transition-all duration-300 text-[14px] font-medium py-2.5 rounded-[6px]"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() =>
            scrollRef.current?.scrollBy({ left: 340, behavior: "smooth" })
          }
          className="absolute right-0 top-[40%] translate-x-4 md:translate-x-6 z-20 w-10 h-10 rounded-full bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] border border-[#F3F4F6] flex items-center justify-center text-[#6B7280] hover:text-[#2F3C97] transition-all focus:outline-none"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
