"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

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
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-7 relative overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-8">
        
        <div className="w-full">
          <h2 className="text-[30px] sm:text-[36px] lg:text-[40px] font-medium text-[#1d1d1d] leading-tight mb-3">
            Latest Articles
          </h2>

          <p className="max-w-[760px] text-[14px] sm:text-[15px] lg:text-[16px] leading-[24px] text-[#5d5d5d]">
            Stay updated with our latest Articles, featuring the most recent
            updates, events, and developments. Get insights and information
            that keep you informed and connected with our community and
            initiatives.
          </p>
        </div>

        <button className="w-fit bg-[#2E3192] hover:bg-[#26287d] transition-all text-white text-[15px] sm:text-[16px] font-medium px-7 sm:px-10 py-3 rounded-md">
          View all
        </button>
      </div>

      {/* Slider */}
      <div className="relative">
        
        {/* Left Arrow */}
        <button className="hidden lg:flex absolute left-[-12px] top-[42%] z-20 h-10 w-10 rounded-full bg-white shadow-md border border-gray-200 items-center justify-center">
          <ChevronLeft size={20} className="text-[#666]" />
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {news.map((item) => (
            <div
              key={item.id}
              className="group border border-[#e5e7eb] rounded-sm overflow-hidden p-4 hover:shadow-md transition-all duration-300 bg-white"
            >
              
              {/* Image */}
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[220px] sm:h-[240px] lg:h-[230px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="pt-4">
                <h3 className="text-[18px] sm:text-[19px] leading-[28px] font-medium text-[#222] mb-2">
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
        <button className="hidden lg:flex absolute right-[-12px] top-[42%] z-20 h-10 w-10 rounded-full bg-white shadow-md border border-gray-200 items-center justify-center">
          <ChevronRight size={20} className="text-[#666]" />
        </button>
      </div>
    </section>
  );
}