"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const cards = [
  {
    image: "/hero.png",
    title: "Domestic Violence Prevention Volunteer Program in Nepal",
    description:
      "Are you seeking volunteer opportunities in domestic violence prevention that empower you to create lasting change ...",
  },
  {
    image: "/hero.png",
    title: "Domestic Violence Prevention Volunteer Program in Nepal",
    description:
      "Are you seeking volunteer opportunities in domestic violence prevention that empower you to create lasting change ...",
  },
  {
    image: "/hero.png",
    title: "Domestic Violence Prevention Volunteer Program in Nepal",
    description:
      "Are you seeking volunteer opportunities in domestic violence prevention that empower you to create lasting change ...",
  },
];

const programTopics = [
  {
    title: "Children Development",
    description:
      "Support child growth through education, health, and life skills programs.",
  },
  {
    title: "Youth Empowerment",
    description:
      "Build youth leadership, vocational skills, and confidence for future success.",
  },
  {
    title: "Public Health & Medical Care",
    description:
      "Improve community health access, hygiene awareness, and medical support.",
  },
  {
    title: "Environment Conservation",
    description:
      "Protect ecosystems while teaching sustainable practices and restoration.",
  },
  {
    title: "Disaster Risk Reduction (DDR)",
    description:
      "Strengthen resilience through risk planning, training, and response support.",
  },
];

const ProgramSlider = ({ title, description, cardsData }: { title: string, description: string, cardsData: any[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="w-full max-w-[1370px] mx-auto bg-[#F1F2FB] rounded-[10px] shadow-lg border border-[#D9DDEA] box-border relative overflow-hidden py-10 mt-10 first:mt-0">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 px-4 md:px-8">
        <div>
          <h2 className="text-[#2D3448] text-[18px] md:text-[40px] leading-tight font-serif font-normal">
            {title}
          </h2>

          <p className="mt-2 max-w-5xl text-[#5D6475] text-[14px] md:text-[16px] leading-[1.9]">
            {description}
          </p>
        </div>

        {/* Explore Link */}
        <button className="flex items-center gap-2 text-[#2F3C97] text-[16px] font-semibold whitespace-nowrap mt-1">
          Explore All Projects
          <ArrowRight size={15} />
        </button>
      </div>

      {/* Cards Section */}
      <div className="relative mt-8 group/slider px-4 md:px-8">
        {/* Left Arrow */}
        <button 
          onClick={() => scrollRef.current?.scrollBy({ left: -340, behavior: 'smooth' })}
          className="absolute left-[2px] top-[38%] z-20 w-10 h-10 rounded-full bg-white shadow-md hidden md:flex items-center justify-center hover:bg-gray-50 transition"
        >
          <ChevronLeft className="text-[#2F3C97]" size={20} />
        </button>

        {/* Right Arrow */}
        <button 
          onClick={() => scrollRef.current?.scrollBy({ left: 340, behavior: 'smooth' })}
          className="absolute right-[2px] top-[38%] z-20 w-10 h-10 rounded-full bg-white shadow-md hidden md:flex items-center justify-center hover:bg-gray-50 transition"
        >
          <ChevronRight className="text-[#2F3C97]" size={20} />
        </button>

        {/* Cards */}
        <div 
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-10px)] xl:w-[calc(33.333%-13.33px)] shrink-0 snap-start bg-white rounded-[8px] border border-[#D9DDEA] overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-[210px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Tags */}
                <div className="flex items-center gap-3 text-[11px] text-black">
                    <span className="bg-white shadow-md border-1 border-[#F2F4FA] px-2 py-2 rounded-[20px]">
                      3-6 <span className="text-[#7B8191]">hours/day </span>
                    </span>
                    <span className="bg-white shadow-md border-1 border-[#F2F4FA] px-2 py-2 rounded-[20px]">
                      2-40 <span className="text-[#7B8191]">weeks </span>
                    </span>
                  </div>

                {/* Title */}
                <h3 className="mt-4 text-[#2D3448] text-[18px] leading-[1.35] font-medium">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[#6B7280] text-[12px] leading-[1.8]">
                  {card.description}
                </p>

                {/* Buttons */}
                <div className="mt-5 flex items-center gap-3">
                  <button className="flex-1 bg-[#2F3C97] hover:bg-[#25307D] transition-all duration-300 text-white text-[14px] font-medium py-3 rounded-[4px]">
                    Apply Now
                  </button>

                  <button className="flex-1 border border-[#2F3C97] text-[#2F3C97] hover:bg-[#2F3C97] hover:text-white transition-all duration-300 text-[14px] font-medium py-3 rounded-[4px]">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function WomenEmpowermentSection() {
  return (
    <>
      <ProgramSlider 
        title="Women’s Empowerment" 
        description="Our Women’s Empowerment program provides skills, mentorship, and resources to help women gain confidence, achieve independence, and create lasting impact in their lives and communities." 
        cardsData={cards} 
      />
      {programTopics.map((topic, index) => (
        <ProgramSlider 
          key={index}
          title={topic.title}
          description={topic.description}
          cardsData={cards}
        />
      ))}
    </>
  );
}
