"use client";
import { useRef } from "react";
import Link from "next/link";
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
  {
    id: 4,
    image: "/hero.png",
    title: "Volunteer-Led Library Opens in Village School",
    description:
      "Local volunteers helped establish a library to boost literacy and reading habits among children.",
  },
  {
    id: 5,
    image: "/hero.png",
    title: "Skills Workshop Empowers Local Entrepreneurs",
    description:
      "A series of skills workshops helped local entrepreneurs launch small businesses.",
  },
  {
    id: 6,
    image: "/hero.png",
    title: "Sustainable Farming Practices Adopted by Communities",
    description:
      "Demonstrations and training on sustainable farming increased yields and resilience.",
  },
];

export default function LatestNews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-7 relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-8">
        <div className="w-full">
          <h2 className="text-[30px] sm:text-[36px] lg:text-[40px] font-medium text-[#1d1d1d] leading-tight mb-3">
            Latest Articles
          </h2>

          <p className="max-w-full md:max-w-[760px] text-[14px] sm:text-[15px] lg:text-[16px] leading-[24px] text-[#5d5d5d]">
            Stay updated with our latest Articles, featuring the most recent
            updates, events, and developments. Get insights and information that
            keep you informed and connected with our community and initiatives.
          </p>
        </div>
        <Link href="/festivals" className="shrink-0">
          <button className="w-fit whitespace-nowrap rounded-md bg-[#1F2B6C] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#3340d0]">
            View all
          </button>
        </Link>
      </div>

      {/* Slider */}
      <div className="relative group/slider">
        {/* Left Arrow */}
        <button
          onClick={() =>
            scrollRef.current?.scrollBy({ left: -340, behavior: "smooth" })
          }
          className="hidden lg:flex absolute left-[-12px] top-[42%] z-20 h-10 w-10 rounded-full bg-white shadow-md border border-gray-200 items-center justify-center hover:bg-gray-50 transition"
        >
          <ChevronLeft size={20} className="text-[#666]" />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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
                  className="h-[180px] sm:h-[200px] lg:h-[210px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
        <button
          onClick={() =>
            scrollRef.current?.scrollBy({ left: 340, behavior: "smooth" })
          }
          className="hidden lg:flex absolute right-[-12px] top-[42%] z-20 h-10 w-10 rounded-full bg-white shadow-md border border-gray-200 items-center justify-center hover:bg-gray-50 transition"
        >
          <ChevronRight size={20} className="text-[#666]" />
        </button>
      </div>
    </section>
  );
}
