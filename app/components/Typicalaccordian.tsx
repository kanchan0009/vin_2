"use client";

import { useState } from "react";

export function TypicalDayAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const schedule = [
    {
      title: "Breakfast and team check-in",
      time: "(08:00–08:45)",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      images: ["/hero.png", "/hero.png", "/hero.png"],
    },
    {
      title: "Literacy or skills class",
      time: "(09:30–12:00)",
      content:
        "Interactive literacy and educational sessions with local children and community members.",
      images: ["/hero.png", "/hero.png", "/hero.png"],
    },
    {
      title: "Lunch",
      time: "(12:00–13:00)",
      content:
        "Enjoy local Nepali meals together with volunteers and host families.",
      images: ["/hero.png", "/hero.png", "/hero.png"],
    },
    {
      title: "Life skills or leadership workshop",
      time: "(13:30–15:00)",
      content:
        "Workshops focused on confidence building, teamwork, and leadership development.",
      images: ["/hero.png", "/hero.png", "/hero.png"],
    },
    {
      title: "Mentor meetings, feedback, planning",
      time: "(15:00–16:00)",
      content:
        "Daily reflection sessions, mentorship guidance, and planning for upcoming activities.",
      images: ["/hero.png", "/hero.png", "/hero.png"],
    },
    {
      title: "Cultural immersion, family meals, journaling",
      time: "(Evening)",
      content:
        "Experience Nepali culture through local traditions, meals, and personal reflection.",
      images: ["/hero.png", "/hero.png", "/hero.png"],
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      {/* Heading */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-[38px]  text-[#1F2432] mb-3">A Typical Day</h2>

          <p className="text-gray-500">
            We’re looking for passionate individuals ready to make a difference.
            Here’s what you need to know.
          </p>
        </div>

        <button
          onClick={() => setOpenIndex(openIndex === -1 ? 0 : -1)}
          className="text-[#2D3192] font-medium hover:underline"
        >
          Expand All
        </button>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line (hidden on small) */}
        <div className="hidden md:block absolute left-5 top-0 bottom-0 w-[2px] bg-[#2D3192]" />

        <div className="space-y-6">
          {schedule.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="relative flex gap-6">
                {/* Number Circle */}
                <div className="relative z-10 flex items-start justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#2D3192] text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                </div>

                {/* Content Box */}
                <div className="flex-1 bg-[#EFEFEF] rounded-xl px-6 py-5 shadow-sm">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <h3 className="text-[20px] font-semibold text-[#1F2432]">
                      {item.title}{" "}
                      <span className="font-medium text-gray-700">
                        {item.time}
                      </span>
                    </h3>

                    <span className="text-2xl font-bold text-[#1F2432]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Expanded Content */}
                  {isOpen && (
                    <div className="mt-5">
                      <p className="text-gray-600 leading-7 mb-6">
                        {item.content}
                      </p>

                      {/* Images */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {item.images.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt="Daily Activity"
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex flex-col items-center mt-16">
        <h4 className="text-[28px] font-medium text-[#1F2432] mb-5">
          Share Via
        </h4>

        <div className="flex items-center gap-3 text-3xl">
          <span>🟢</span>
          <span>📧</span>
          <span>🟢</span>
          <span>💬</span>
          <span>✖️</span>
          <span>📸</span>
        </div>
      </div>
    </>
  );
}
