"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What are the requirements to volunteer?",
    answer:
      "You must be at least 18 years old (or 16 with parental consent), have a passion for community service, and be willing to embrace a new culture. No specific prior experience is necessary for most general programs.",
  },
  {
    question: "What are the requirements to volunteer?",
    answer:
      "You must be at least 18 years old (or 16 with parental consent), have a passion for community service, and be willing to embrace a new culture. No specific prior experience is necessary for most general programs.",
  },
  {
    question: "What are the requirements to volunteer?",
    answer:
      "You must be at least 18 years old (or 16 with parental consent), have a passion for community service, and be willing to embrace a new culture. No specific prior experience is necessary for most general programs.",
  },
  {
    question: "What are the requirements to volunteer?",
    answer:
      "You must be at least 18 years old (or 16 with parental consent), have a passion for community service, and be willing to embrace a new culture. No specific prior experience is necessary for most general programs.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 px-6 md:px-10">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start">
        {/* Left Column */}
        <div className="flex flex-col items-start pr-0 lg:pr-8">
          <span className="bg-[#EEF2FF] text-[#2F3C97] text-[13px] font-medium px-4 py-1.5 rounded-full inline-block mb-4">
            Got Questions
          </span>
          <h2 className="text-[#1F2937] text-[32px] md:text-[38px] leading-[1.2] font-serif font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#4B5563] text-[15px] leading-relaxed mb-8">
            Find answers to common questions about volunteering, donations, and how you can make an impact. Can't find what you're looking for?
          </p>

          {/* Contact Card */}
          <div className="bg-[#FAFAFA] border border-[#E5E7EB] rounded-[10px] p-6 w-full max-w-sm shadow-sm">
            <h3 className="text-[#1F2937] text-[16px] font-semibold mb-2">
              Still have questions?
            </h3>
            <p className="text-[#6B7280] text-[14px] leading-relaxed mb-5">
              Our team is here to help you plan your volunteer journey.
            </p>
            <Link href="/contact" className="inline-block">
              <button className="bg-[#5C6BC0] hover:bg-[#4e5caa] text-white text-[14px] font-medium px-6 py-2.5 rounded-[6px] transition shadow-sm">
                Contact us
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div className="flex flex-col items-end w-full">
          <div className="w-full space-y-3 mb-8">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-[#E5E7EB] rounded-[8px] bg-white overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left px-6 py-4 transition hover:bg-[#FAFAFA]"
                  >
                    <span className="text-[15px] font-medium text-[#1F2937] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#6B7280] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-5 pt-1 text-[14.5px] text-[#4B5563] leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All FAQ button */}
          <Link href="/faq" className="inline-block">
            <button className="border border-[#2F3C97] text-[#2F3C97] hover:bg-[#EEF2FF] text-[14px] font-medium px-6 py-2.5 rounded-[6px] transition">
              View All FAQ's
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
