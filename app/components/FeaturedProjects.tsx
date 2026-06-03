"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const projectsData = [
  {
    image: "/hero.png",
    title: "Volunteer Overseas",
    description:
      "Our mission is to empower the poor and marginalized communities and hence contribute for the development of Nepal. VIN has been empowering people by implementing var...",
    link: "/program",
  },
  {
    image: "/images/volunteer.jpg",
    title: "Work Camp",
    description:
      "Work camp is referred to as a short term project where an individual from various religious organisations volunteer to fulfill the immediate need of the society...",
    link: "/program",
  },
  {
    image: "/images/kids.png",
    title: "Asian Voluntary Services",
    description:
      "International Long and Middle Term Voluntary Service (LMTV) has been rapidly developed in Asia with creating unique impact to improve the situations of the environment, culture, develop.",
    link: "/program",
  },
  {
    image: "/images/donate.jpg",
    title: "Internship Programs",
    description:
      "Gain practical experience and professional skills while contributing to meaningful community development projects in Nepal.",
    link: "/program",
  },
];

export default function FeaturedProjects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350; // approximate card width
      scrollRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full px-6 md:px-10 py-12 md:py-16 bg-white text-center">
      {/* Top Badge */}
      <div className="flex justify-center mb-4">
        <span className="bg-[#EEF2FF] text-[#2F3C97] text-[13px] font-medium px-4 py-1.5 rounded-full inline-block">
          Our Programs
        </span>
      </div>

      {/* Heading & Subtitle */}
      <h2 className="text-[#1F2937] text-[32px] md:text-[40px] leading-tight font-serif font-bold mb-4">
        Featured Projects
      </h2>
      <p className="text-[#4B5563] text-[15px] md:text-[16px] max-w-2xl mx-auto mb-12">
        Discover life-changing volunteer opportunities that create lasting impact in communities around the world.
      </p>

      {/* Carousel Container */}
      <div className="relative w-full group">
        {/* Left Arrow */}
        <button
          onClick={() => scrollCarousel("left")}
          className="absolute left-0 top-[40%] -translate-x-4 md:-translate-x-6 z-20 w-10 h-10 rounded-full bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] border border-[#F3F4F6] flex items-center justify-center text-[#6B7280] hover:text-[#2F3C97] transition-all focus:outline-none"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Scrollable Area */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] text-left"
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start bg-white rounded-[12px] border border-[#E5E7EB] flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-[180px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-[#1F2937] text-[20px] font-serif font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-[#6B7280] text-[14px] leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Button */}
                <div>
                  <Link href={project.link}>
                    <button className="flex items-center gap-2 bg-[#5C6BC0] hover:bg-[#4e5caa] text-white text-[13px] font-medium px-5 py-2.5 rounded-[6px] transition-colors">
                      Learn More <ArrowRight size={14} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scrollCarousel("right")}
          className="absolute right-0 top-[40%] translate-x-4 md:translate-x-6 z-20 w-10 h-10 rounded-full bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] border border-[#F3F4F6] flex items-center justify-center text-[#6B7280] hover:text-[#2F3C97] transition-all focus:outline-none"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
