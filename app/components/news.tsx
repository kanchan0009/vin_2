"use client";
import { useRef } from "react";

import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const news = [
  {
    id: 1,
    image: "/hero.png",
    title:
      "ECHAV Volunteers Inspire Learning and Creativity Among Children in Okhaldhunga",
    description:
      "The ECHAV Volunteer Project, implemented from 1st September to 29th October 2025 in Okhaldhunga under Volunteers Initiative Nepal's Children's Development Program, ...",
  },
  {
    id: 2,
    image: "/hero.png",
    title:
      "ECHAV Volunteers Inspire Learning and Creativity Among Children in Okhaldhunga",
    description:
      "The ECHAV Volunteer Project, implemented from 1st September to 29th October 2025 in Okhaldhunga under Volunteers Initiative Nepal's Children's Development Program, ...",
  },
  {
    id: 3,
    image: "/hero.png",
    title:
      "ECHAV Volunteers Inspire Learning and Creativity Among Children in Okhaldhunga",
    description:
      "The ECHAV Volunteer Project, implemented from 1st September to 29th October 2025 in Okhaldhunga under Volunteers Initiative Nepal's Children's Development Program, ...",
  },
];

export default function LatestNews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full py-10 px-4 sm:px-6 lg:px-7 relative overflow-hidden mb-10">
      
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-8">
        
        <div className="w-full">
          <h2 className="text-[30px] sm:text-[36px] lg:text-[40px] font-medium text-[#1d1d1d] leading-tight mb-3">
            Latest News
          </h2>

          <p className="max-w-[760px] text-[14px] sm:text-[15px] lg:text-[16px] leading-[24px] text-[#5d5d5d]">
            Stay updated with our latest News, featuring the most recent
            updates, events, and developments. Get insights and information
            that keep you informed and connected with our community and
            initiatives.
          </p>
        </div>

        <button className="w-fit whitespace-nowrap shrink-0 rounded-md bg-[#1F2B6C] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#3340d0]">
          View all
        </button>
      </div>

      {/* Slider */}
      <div className="relative group/slider">
        
        {/* Left Arrow */}
        <button 
          onClick={() => scrollRef.current?.scrollBy({ left: -340, behavior: 'smooth' })}
          className="hidden lg:flex absolute left-[-12px] top-[42%] z-20 h-10 w-10 rounded-full bg-white shadow-md border border-gray-200 items-center justify-center hover:bg-gray-50 transition"
        >
          <ChevronLeft size={20} className="text-[#666]" />
        </button>

        {/* Cards */}
        <div 
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {news.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.33px)] shrink-0 snap-start group border border-[#e5e7eb] rounded-sm overflow-hidden p-4 hover:shadow-md transition-all duration-300 bg-white"
            >
              
              {/* Image */}
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[220px] sm:h-[240px] lg:h-[230px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#ff0000] w-[50px] h-[36px] sm:w-[54px] sm:h-[38px] rounded-[10px] flex items-center justify-center shadow-lg">
                    <Play
                      fill="white"
                      size={18}
                      className="text-white ml-[2px]"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-4">
                <h3 className="text-[17px] sm:text-[18px] leading-[28px] font-medium text-[#222] mb-2">
                  {item.title}
                </h3>

                <p className="text-[13px] sm:text-[14px] leading-[22px] text-[#666]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={() => scrollRef.current?.scrollBy({ left: 340, behavior: 'smooth' })}
          className="hidden lg:flex absolute right-[-12px] top-[42%] z-20 h-10 w-10 rounded-full bg-white shadow-md border border-gray-200 items-center justify-center hover:bg-gray-50 transition"
        >
          <ChevronRight size={20} className="text-[#666]" />
        </button>
      </div>
    </section>
  );
}