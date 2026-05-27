"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What does a women’s education volunteer do?",
    answer:
      "A woman’s education volunteer helps run literacy, numeracy, digital skills, and leadership sessions for women and girls, supporting local educators.",
  },
  {
    question: "How to volunteer in women’s education with VIN?",
    answer:
      "You can apply through VIN’s volunteer application process and choose a suitable women empowerment or education program in Nepal.",
  },
  {
    question:
      "What makes this one of the best women’s education volunteer programs?",
    answer:
      "The program focuses on long-term community impact, women empowerment, and sustainable educational development.",
  },
  {
    question:
      "Are there short-term women’s education volunteer opportunities?",
    answer:
      "Yes, VIN offers both short-term and long-term volunteering opportunities depending on your availability.",
  },
  {
    question:
      "Can I be a women’s education volunteer abroad without teaching experience?",
    answer:
      "Yes. Passion, commitment, and willingness to learn are more important than formal teaching experience.",
  },
  {
    question:
      "Are there leadership and life skills modules in volunteer programs for women’s education?",
    answer:
      "Yes, many programs include leadership, confidence-building, entrepreneurship, and life-skills training.",
  },
  {
    question:
      "Do you offer NGO volunteer roles in women’s education linked to enterprise?",
    answer:
      "Yes, some programs connect education initiatives with women-led enterprise and community development projects.",
  },
];
const programs = [
    "Children’s Development Program",
    "Youth Empowerment Program",
    "Public Health & Medical Program",
    "Environment Conservation Program",
    "Disaster Risk Reduction (DRR) Program",
    "Public health and medical care",
    "Environment conservation",
    "Teaching program",
    "Management & Administration",
    "Journalism",
    "Public interest",
    "WorkCamps",
  ];
export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <main>
      {/* Question Categories Section */}
      <section className="w-full bg-white py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
          
          {/* Left Content */}
          <div>
            
            {/* Heading */}
            <h2 className="text-[38px] font-medium text-[#1f2a44] mb-6">
              Question Categories
            </h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
              
              {[
                {
                  title: "Volunteering Requirement",
                  image:
                    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
                },
                {
                  title: "Program Fees",
                  image:
                    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
                },
                {
                  title: "Arrival and Orientation",
                  image:
                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
                },
                {
                  title: "Volunteering Requirement",
                  image:
                    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
                },
                {
                  title: "Program Fees",
                  image:
                    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
                },
                {
                  title: "Arrival and Orientation",
                  image:
                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
                },
                {
                  title: "Volunteering Requirement",
                  image:
                    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
                },
                {
                  title: "Program Fees",
                  image:
                    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
                },
                {
                  title: "Arrival and Orientation",
                  image:
                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
                },
              ].map((card, index) => (
                <div key={index} className="text-center">
                  <div className="w-[235px] h-[235px] mx-auto overflow-hidden rounded-md shadow-sm border border-[#eceff5] bg-white">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="mt-4 text-[18px] font-semibold text-[#1f2a44]">
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div>
            <div className="border border-[#e5e7eb] rounded-md overflow-hidden bg-[#fafbfc]">
              
              {/* Sidebar Header */}
              <div className="px-5 py-4 border-b border-[#e5e7eb] bg-[#f5f7fa]">
                <h3 className="text-[22px] font-semibold text-[#1f2a44]">
                  Our Available Programs
                </h3>
              </div>

              {/* Program List */}
              <div className="divide-y divide-[#e5e7eb]">
                {[
                  "Children’s Development Program",
                  "Youth Empowerment Program",
                  "Public Health & Medical Program",
                  "Environment Conservation Program",
                  "Disaster Risk Reduction (DRR) Program",
                  "Public health and medical care",
                  "Environment conservation",
                  "Teaching program",
                  "Management & Administration",
                  "Journalism",
                  "Public interest",
                  "WorkCamps",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="px-5 py-4 text-[15px] text-[#5b6478] hover:bg-white transition-all cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-white pb-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Align with left content */}
          <div className="max-w-[calc(100%-340px)]">
            
            {/* Heading */}
            <h2 className="text-[38px] font-medium text-[#1f2a44] leading-none mb-3">
              Frequently Asked Questions
            </h2>

            {/* Subheading */}
            <p className="text-[16px] leading-[28px] text-[#6b7280] mb-10">
              Starting your volunteer journey is simple. Follow these six
              easy steps to join us in Nepal.
            </p>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="border border-[#e5e7eb] rounded-md overflow-hidden bg-white"
                  >
                    {/* Question */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between text-left px-6 py-5"
                    >
                      <span className="text-[17px] font-medium text-[#1f2a44] pr-5">
                        {faq.question}
                      </span>

                      <ChevronDown
                        className={`w-[35px] h-[40px] text-[#4b5563] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Answer */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6">
                          <p className="text-[16px] leading-[30px] text-[#6b7280]">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}