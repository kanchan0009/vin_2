"use client";

import { useState } from "react";
import { BarChart3, X, Star, ChevronDown } from "lucide-react";
import { TypicalDayAccordion } from "@/app/components/Typicalaccordian";
import Link from "next/link";

export default function WomenEducationProgramPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const [showStats, setShowStats] = useState(false);

  const statsData = [
    { label: "Location", value: "Outskirts of Kathmandu & Okhaldhunga" },
    { label: "Start Dates", value: "Every 1st & 3rd Monday" },
    { label: "Duration", value: "2 weeks to 10 months" },
    { label: "Working Hours", value: "3–6 hrs/day, 5 days/week" },
    {
      label: "Who can apply",
      value:
        "University students, graduates, business professionals, entrepreneurs, educators, gap-year explorers, and youth workers",
    },
    {
      label: "Accommodation & Food",
      value: "Stay with a host family or at a volunteer hostel",
    },
    {
      label: "Eligibility",
      value: "Open to volunteers 18+, families, couples, & groups",
    },
    {
      label: "Safety & Support",
      value: "24/7 assistance & secure placements",
    },
    { label: "Orientation", value: "2–3 days on arrival training" },
    {
      label: "Weekend Travel",
      value: "Explore festivals, temples, Himalayas, & immerse in culture",
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

  const menuItems = [
    "Snap shot",
    "Overview",
    "Objectives",
    "Roles & Responsibilities",
    "Requirement",
    "How to Apply",
    "Benefits",
    "Eligibility",
    "Accommodation",
    "Program Fees",
    "Travel Guide",
    "FAQs",
    "Reviews",
    "Gallery",
    "Contact",
  ];

  const [activeTab, setActiveTab] = useState("Snap shot");

  return (
    <main className="w-full bg-white">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative w-full h-[620px] overflow-hidden">
        {/* Background Image */}
        <img
          src="/women-education-banner.jpg"
          alt="Women Education Volunteer"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex items-end justify-center h-full pb-10 px-6">
          <div className="max-w-[850px] text-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-black/10 backdrop-blur-sm border border-white/10 px-8 py-2 rounded-3xl mb-5">
              <span className="text-gray-300 text-[16px] font-medium">
                Impact Program
              </span>

              <span className="w-1 h-1 rounded-full bg-white/70" />

              <span className="text-white text-[16px] font-medium">
                Children's Development
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-white text-[20px] md:text-[30px] leading-[32px] font-medium mb-4">
              Children's Development Volunteer in Nepal:
              <br />
              Teach, Mentor, and Transform Lives
            </h1>

            {/* Description */}
            <p className="text-white/85 text-[14px] leading-[26px] max-w-[700px] mx-auto mb-8">
              From literacy to leadership — empowering one woman, one village,
              one future at a time.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="h-[46px] px-10 rounded-md bg-[#202788] hover:bg-[#2f39be] transition-all duration-300 text-white text-[16px] font-medium shadow-lg">
                Apply for Volunteer
              </button>

              <button className="h-[46px] px-10 rounded-md bg-white hover:bg-gray-100 transition-all duration-300 text-[#1f2a44] text-[16px] font-medium shadow-lg">
                View Fees
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SNAPSHOT / OVERVIEW SECTION
      ========================================================= */}
      <section className="relative w-full  py-10">
        <div className="mx-auto  ">
          {/* Top Tabs */}
          <div className="flex  items-center gap-2  ">
            <div className="overflow-x-auto border border-[#D9DDEA] bg-[#F1F2FB] mr-25 [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex items-center gap-8 min-w-max">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(item)}
                    className={`px-5 py-2 text-sm font-medium whitespace-nowrap transition-all ${
                      activeTab === item
                        ? "bg-[#2E3192] text-white"
                        : "text-[#667085] hover:text-[#2E3192]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
            </div>

            {/* Statistics Button */}
            <button
              onClick={() => setShowStats(!showStats)}
              className="ml-auto flex items-center gap-2 rounded-full bg-[#EEF2FF] px-4 py-2 text-sm font-medium text-[#2E3192]"
            >
              <BarChart3 size={16} />
              Statistics
            </button>
          </div>
        </div>
      </section>

      <section className="w-full py-10 ">
        {/* Main Content */}
        <div className="relative mt-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            {/* Left Content */}
            <div>
              <h2 className="mb-5 text-[38px] text-[#1D2939]">
                Project Overview
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-[#2E3192]">
                    Introduction
                  </h3>

                  <p className="text-[15px] leading-8 text-[#667085]">
                    When a woman learns, an entire community rises. As women’s
                    education gains momentum in Nepal, women and girls build
                    skills in literacy, numeracy, and confidence.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-[#2E3192]">
                    Background
                  </h3>

                  <p className="text-[15px] leading-8 text-[#667085]">
                    Nepal has made progress, but the gender gap in literacy
                    remains. In many remote regions, financial pressure and
                    social norms still limit access to education.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop"
                alt="Volunteer"
                className="h-[300px] w-full rounded-md object-cover"
              />
            </div>
          </div>

          {/* OVERLAPPING STATISTICS CARD */}
          {showStats && (
            <div className="absolute right-10 top-2 z-50 w-full max-w-3xl overflow-hidden rounded-2xl border border-[#EAECF0] bg-white shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between bg-[#2E3192] px-6 py-4">
                <h3 className="text-sm font-medium text-white">
                  From literacy to leadership—empowering one woman, one village,
                  one future at a time.
                </h3>

                <button
                  onClick={() => setShowStats(false)}
                  className="text-white"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Table */}
              <div className="bg-white px-6 ">
                {statsData.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[180px_1fr] border-b border-[#EAECF0] py-2 text-sm"
                  >
                    <p className="font-medium text-[#344054]">{item.label}</p>

                    <p className="text-[#667085] leading-7">{item.value}</p>
                  </div>
                ))}

                {/* Footer */}
                <div className="grid grid-cols-[180px_1fr] py-4 text-sm">
                  <p className="font-medium text-[#344054]">Fees | Apply Now</p>

                  <div className="space-y-1">
                    <a href="#" className="block text-[#2E3192] underline">
                      Click Here to learn more
                    </a>

                    <a href="#" className="block text-[#2E3192] underline">
                      Click Here to learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            {/* LEFT SIDE */}
            <div className="space-y-12 mt-10">
              {/* What We Aim to Achieve */}

              <div className="mb-6">
                <h2 className="text-[38px] leading-[56px] font-medium text-[#1D2433]">
                  What We Aim to Achieve
                </h2>

                <p className="mt-2 text-[16px] leading-[24px] text-[#6E7485]">
                  As women’s education volunteer, you’ll help ViN meet these
                  goals:
                </p>
              </div>

              {/* Content Box */}
              <div className="rounded-[10px] bg-[#D9F0FB] px-6 py-2">
                {[
                  "Deliver practical literacy and numeracy classes—from reading signs and medicine labels to budgeting and basic math.",
                  "Teach digital skills, including using a mobile phone, messaging, and searching for information online.",
                  "Lead life skills sessions—from assertive communication and emotional intelligence to goal-setting and problem-solving.",
                  "Guide leadership skills workshops",
                  "Facilitate discussions on rights, gender equality, and legal awareness to promote understanding and awareness",
                  "Introduce women-focused education initiatives, such as setting up mini-libraries, mentoring circles, or women-led clubs.",
                  "Support community-based women’s education—with all lessons and resources designed to be sustainable, even after volunteers leave.",
                  "Involve men and boys as allies in volunteer programs that promote true gender equality.",
                  "Train peer educators to multiply the impact of every woman’s education through NGO volunteer efforts",
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex gap-2 py-2 ${
                      index !== 8 ? "border-b border-white/60" : ""
                    }`}
                  >
                    {/* Icon */}
                    <div className="mt-[3px] flex h-9 w-9 min-w-[36px] items-center justify-center rounded-full bg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16 11C17.6569 11 19 9.65685 19 8C19 6.34315 17.6569 5 16 5C14.3431 5 13 6.34315 13 8C13 9.65685 14.3431 11 16 11Z"
                          fill="#2F3D9E"
                        />
                        <path
                          d="M8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11Z"
                          fill="#2F3D9E"
                        />
                        <path
                          d="M8 13C5.79086 13 4 14.7909 4 17V18H12V17C12 14.7909 10.2091 13 8 13Z"
                          fill="#2F3D9E"
                        />
                        <path
                          d="M16 13C13.7909 13 12 14.7909 12 17V18H20V17C20 14.7909 18.2091 13 16 13Z"
                          fill="#2F3D9E"
                        />
                      </svg>
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <p className="text-[16px] leading-[22px] font-medium text-[#1F2937]">
                        {item}
                      </p>

                      {/* Nested List */}
                      {index === 3 && (
                        <ul className="mt-1 ml-5 list-disc space-y-1 text-[15px] leading-[28px] text-[#475467]">
                          <li>Strategic planning and visionary thinking</li>
                          <li>Verbal and non-verbal communication</li>
                          <li>Active listening and critical thinking</li>
                          <li>Assertive decision-making</li>
                          <li>
                            Adaptability, resilience, and self-development
                          </li>
                          <li>Conflict resolution and negotiation</li>
                          <li>Influence, motivation, and empowerment</li>
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Women’s Empowerment */}

              <div className="mb-16 ">
                <h2 className="text-4xl md:text-[38px]  text-[#1F2432] mb-6">
                  Why Women’s Empowerment? Why Nepal?
                </h2>

                <h3 className="text-[25px] font-medium text-[#1F2432] mb-2">
                  The Need
                </h3>

                <p className="text-gray-600 leading-6 ">
                  Yet, change happens every day through women’s literacy
                  volunteering and volunteer teaching, promoting women’s
                  empowerment. When you join this movement, you tackle not only
                  the education gap but also help break the cycles of poverty,
                  exclusion, and silence.
                </p>
              </div>

              {/* Skills Section */}
              <div className="mb-6">
                <h2 className="text-4xl md:text-[38px]  text-[#1F2432] mb-4">
                  Skills, Requirements & Who Can Join
                </h2>

                <p className="text-gray-600 text-[16px] leading-7">
                  We’re looking for passionate individuals ready to make a
                  difference. Here’s what you need to know.
                </p>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  {
                    title: "All Genders Welcome",
                    desc: "We welcome volunteers of all gender identities who are passionate about women's empowerment.",
                  },
                  {
                    title: "Ages 18+",
                    desc: "Volunteers aged 16–17 can join with guardian consent and supervision.",
                  },
                  {
                    title: "Intermediate English",
                    desc: "Ability to communicate effectively in English for training and coordination.",
                  },
                  {
                    title: "No Experience Required",
                    desc: "We provide full training and orientation. Your enthusiasm and commitment matter most.",
                  },
                  {
                    title: "Physical Ability",
                    desc: "Able to travel to rural areas and participate in community activities.",
                  },
                  {
                    title: "Cultural Respect",
                    desc: "Open mind, respect for Nepali culture, and willingness to learn local customs.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-xl bg-white p-6 hover:shadow-md transition"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#2D3192] flex items-center justify-center mb-5">
                      <span className="text-white text-xl">●</span>
                    </div>

                    <h3 className="text-[20px] font-[600] text-[#1F2432] ">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-7 text-[15px]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="flex justify-center mt-6">
                <button className="bg-[#2D3192] hover:bg-[#232777] text-white px-10 py-3 rounded-lg font-medium shadow-md transition">
                  Join Today
                </button>
              </div>

              {/* Program Fees */}

              <div>
                <h2 className="text-4xl md:text-[38px]  text-[#1F2432] mb-2">
                  Program Fees & What’s Included
                </h2>

                <p className="text-gray-600 text-[16px] leading-7  mb-8">
                  ViN is a nonprofit. Your program fees allocated directly to
                  project costs, including your room, meals, and local staff
                  salaries. Here’s what you get:
                </p>

                <div className="space-y-4">
                  {[
                    "🛡️ Secure placement and daily supervision",
                    "🕘 Pre-departure info pack and training",
                    "🚕 Airport pickup and all arrival logistics",
                    "🏠 Homestay or shared house accommodation",
                    "🍽️ Three healthy meals per day (with special diets respected)",
                    "💁🏻 In-country support and language lessons",
                    "🌍 A supportive community of staff, local leaders, and fellow volunteers",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-3xl">{item.split(" ")[0]}</span>

                      <p className="text-[#374151] text-[18px] leading-7">
                        {item.substring(item.indexOf(" ") + 1)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <TypicalDayAccordion />

              <div className=" mx-auto">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
                  <div>
                    <h2 className="text-3xl md:text-[38px]  text-[#1F2432] mb-2">
                      How to Apply
                    </h2>

                    <p className="text-gray-500 text-sm md:text-base">
                      Starting your volunteer journey is simple. Follow these
                      six easy steps to join us in Nepal.
                    </p>
                  </div>

                  <button className="bg-[#2D3192] hover:bg-[#1F2B6C] text-white px-6 py-4 rounded-md text-sm font-medium transition">
                    Apply Now
                  </button>
                </div>

                {/* STEPS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
                  {[
                    {
                      number: "01",
                      title: "Apply Online",
                      desc: "Complete our simple online application form with your details and program preferences.",
                    },
                    {
                      number: "02",
                      title: "Submit your CV and two references",
                      desc: "Send us your CV and two references (professional or academic).",
                    },
                    {
                      number: "03",
                      title: "Attend orientation",
                      desc: "We’ll review your application and send confirmation within 3–5 business days.",
                    },
                    {
                      number: "04",
                      title: "Pay your €150 booking fee",
                      desc: "Secure your placement with a €150 booking fee to reserve your spot.",
                    },
                    {
                      number: "05",
                      title: "Receive pre-departure materials",
                      desc: "Receive comprehensive information about your program, packing list, and preparation tips.",
                    },
                    {
                      number: "06",
                      title:
                        "Finalize fee payment (on arrival or via transfer)",
                      desc: "Pay remaining balance before arrival. We’ll pick you up at the airport and your journey begins!",
                    },
                  ].map((item, index) => (
                    <div key={index}>
                      <h3 className="text-5xl font-light text-[#6EC1FF] mb-2">
                        {item.number}
                      </h3>

                      <h3 className="text-lg font-semibold text-[#1F2432] ">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* =========================
        SPECIAL PROJECTS SECTION
    ========================== */}
                <div className="bg-[#F4F6FA] rounded-2xl p-6 md:p-8 mt-10">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl  text-[#1F2432]">
                      Special Projects
                    </h2>

                    <button className="text-[#1F2B6C] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
                      Explore All Projects →
                    </button>
                  </div>

                  {/* PROJECT GRID */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {[
                      "Mini-libraries and mobile book corners",
                      "Festival budgeting workshops",
                      "Leadership storytelling circles",
                      "Girls’ empowerment clubs",
                    ].map((title, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
                      >
                        <img
                          src="/hero.png"
                          alt={title}
                          className="w-full h-44 object-cover"
                        />

                        <div className="p-4">
                          <h3 className="text-[16px] font-medium text-[#1F2432] leading-6">
                            {title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                {/* FAQ SECTION */}
                <div className="mt-20">
                  {/* Heading */}
                  <div className="mb-10">
                    <h2 className="text-[38px] font-medium text-[#1f2a44] leading-none mb-3">
                      Frequently Asked Questions
                    </h2>

                    <p className="text-[16px] leading-[28px] text-[#6b7280]">
                      Starting your volunteer journey is simple. Follow these
                      easy answers to understand the program better.
                    </p>
                  </div>

                  {/* FAQ ITEMS */}
                  <div className="space-y-4">
                    {faqs.map((faq, index) => {
                      const isOpen = openIndex === index;

                      return (
                        <div
                          key={index}
                          className="border border-[#e5e7eb] rounded-xl overflow-hidden bg-white"
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
                              className={`w-6 h-6 text-[#4b5563] transition-transform duration-300 ${
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

              <div className=" mx-auto">
                {/* TOP BAR */}
                <div className="flex items-center justify-between mb-4">
                  {/* Tabs */}
                  <div className="flex overflow-hidden rounded-md border border-[#D9DCE7] w-fit">
                    {/* Photos Button */}
                    <button
                      onClick={() => setActiveTab("photos")}
                      className={`px-8 py-3 text-[18px] font-medium transition-all duration-300 ${
                        activeTab === "photos"
                          ? "bg-[#2D3192] text-white"
                          : "bg-[#F4F5F8] text-[#64748B] hover:bg-white"
                      }`}
                    >
                      Photos
                    </button>

                    {/* Videos Button */}
                    <button
                      onClick={() => setActiveTab("videos")}
                      className={`px-8 py-3 text-[18px] font-medium transition-all duration-300 ${
                        activeTab === "videos"
                          ? "bg-[#2D3192] text-white"
                          : "bg-[#F4F5F8] text-[#64748B] hover:bg-white"
                      }`}
                    >
                      Videos
                    </button>
                  </div>
                  {/* Button */}
                  <button className="bg-[#2D3192] hover:bg-[#232777] text-white px-8 py-3 rounded-md text-sm font-medium transition">
                    View All
                  </button>
                </div>

                {/* SUBTEXT */}
                <p className="text-[#6B7280] text-[15px] mb-8">
                  A glimpse into the moments that define our work and community
                  impact.
                </p>

                {/* IMAGE GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    "/hero.png",
                    "/hero.png",
                    "/hero.png",
                    "/hero.png",
                    "/hero.png",
                    "/hero.png",
                  ].map((image, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-xl bg-white shadow-sm"
                    >
                      <img
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-[150px] object-cover hover:scale-105 transition duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Contact Section */}

              <div className="grid grid-cols-1 bg-[#2E3192] md:grid-cols-2 gap-8 px-8 py-7 items-start">
                {/* Left Content */}
                <div className="text-white pt-2">
                  <h2 className="text-[34px] leading-[48px] font-medium mb-4">
                    Ready to Start Your Journey?
                  </h2>

                  <p className="text-[13px] leading-[22px] text-[#d9ddff]  mb-8">
                    Have questions? Want to discuss which program is right for
                    you? Our team is here to help. Reach out today and let’s
                    start the conversation.
                  </p>

                  {/* Phone */}
                  <div className="flex items-start gap-3 mb-5">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5 text-[#2A3495]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.129a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.209-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>

                    <div className="text-[12px] leading-[20px] text-[#e4e7ff]">
                      <p>+977 (1) 01462560 (Office)</p>
                      <p>+977 9851070477 (Mobile)</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5 text-[#2A3495]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 12H8m8 0l-8 0m8 0l-8 0m14-5H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"
                        />
                      </svg>
                    </div>

                    <p className="text-[13px] text-[#e4e7ff]">
                      Support@vin.org.np
                    </p>
                  </div>
                </div>

                {/* Inquiry Form */}
                <div className="bg-white rounded-md p-5 shadow-md">
                  <h3 className="text-[13px] font-semibold text-[#222] mb-4">
                    Inquiry Form
                  </h3>

                  <form className="space-y-3">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] text-[#555] mb-1">
                        Full Name
                      </label>

                      <input
                        type="text"
                        placeholder="e.g. Snecker"
                        className="w-full h-[38px] px-3 text-[12px] border border-gray-200 rounded-sm outline-none focus:border-[#2A3495]"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] text-[#555] mb-1">
                        Email
                      </label>

                      <input
                        type="email"
                        placeholder="e.g. example@example.com"
                        className="w-full h-[38px] px-3 text-[12px] border border-gray-200 rounded-sm outline-none focus:border-[#2A3495]"
                      />
                    </div>

                    {/* Program */}
                    <div>
                      <label className="block text-[11px] text-[#555] mb-1">
                        Program
                      </label>

                      <select className="w-full h-[38px] px-3 text-[12px] border border-gray-200 rounded-sm outline-none focus:border-[#2A3495] text-[#777]">
                        <option>Select a Program</option>
                        <option>Teaching Program</option>
                        <option>Volunteer Program</option>
                        <option>Community Program</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] text-[#555] mb-1">
                        Message
                      </label>

                      <textarea
                        rows={4}
                        placeholder="Type your message here"
                        className="w-full px-3 py-2 text-[12px] border border-gray-200 rounded-sm outline-none resize-none focus:border-[#2A3495]"
                      />
                    </div>

                    {/* Button */}
                    <button className="w-full h-[40px] bg-[#2A3495] hover:bg-[#1f2877] transition-all rounded-sm text-white text-[12px] font-medium mt-2">
                      Send Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <aside className="space-y-6">
              {/* Program List */}
              <div className="rounded-[14px] border border-[#E5E7EB] bg-white p-5">
                <div className="space-y-1">
                  {[
                    "Youth Empowerment Program",
                    "Public Health & Medical Program",
                    "Environment Conservation Program",
                    "Disaster Risk Reduction (DRR) Program",
                    "Public health and medical care",
                    "Environment conservation",
                    "Teaching program",
                    "Management & Administration",
                    "Journalism",
                    "Public Interest",
                    "WorkCamps",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="cursor-pointer border-b border-[#EEF1F5] py-4 text-[15px] font-medium text-[#667085] transition-all duration-200 hover:text-[#2F3D9E]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="rounded-[14px] border border-[#D9DFEA] bg-white p-5">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-[28px] font-medium text-[#1D2433] font-serif">
                    Testimonials
                  </h3>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      name: "Charles Richardson",
                      role: "Product Designer",
                      image:
                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
                    },
                    {
                      name: "Sophia Miller",
                      role: "Volunteer Mentor",
                      image:
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
                    },
                    {
                      name: "James Anderson",
                      role: "Community Leader",
                      image:
                        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-[#E2E8F0] bg-[#ffffff] p-6 transition-all duration-300 hover:shadow-lg hover:border-[#CBD5E1]"
                    >
                      {/* Top */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-14 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                          />

                          <div>
                            <h3 className="text-[16px] font-medium text-[#1F2A44] leading-none">
                              {item.name}
                            </h3>

                            <p className=" text-[12px] text-[#6B7280]">
                              {item.role}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-1 mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={15}
                              className="text-[#FFB400] fill-[#FFB400]"
                            />
                          ))}
                        </div>
                      </div>

                      <p className="mt-5 text-[12px] leading-4 text-[#5B6475]">
                        They approached each shift with professionalism and
                        enthusiasm, often going above expectations to ensure
                        projects were completed smoothly. Their attention to
                        detail and willingness to assist wherever needed greatly
                        contributed to the success of our programs.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Programs */}
              <div className="border border-[#e5e7eb] rounded-md overflow-hidden bg-[#fafbfc]">
                <div className="px-5 py-4 border-b border-[#e5e7eb] bg-[#f5f7fa]">
                  <h2 className="text-[20px] font-medium text-[#1f2a44]">
                    Other available Programs
                  </h2>
                </div>

                <div className="divide-y divide-[#e5e7eb]">
                  {programs.map((item, index) => (
                    <div
                      key={index}
                      className="px-5 py-4 text-[15px] text-[#5b6478] hover:bg-white transition-all cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
                <div className=" rounded-[24px] border border-[#D9DCE7] bg-[#F7F8FA] p-6">
                  {/* Heading */}
                  <h2 className="text-[28px] leading-[42px] text-[#1F2432] mb-8">
                    Related Articles & Blogs
                  </h2>

                  {/* Articles List */}
                  <div className="space-y-10">
                    {[
                      {
                        title:
                          "How can we empower women in rural areas of nepal ?",
                        image: "/hero.png",
                      },
                      {
                        title:
                          "How can we empower women in rural areas of nepal ?",
                        image: "/hero.png",
                      },
                      {
                        title:
                          "How can we empower women in rural areas of nepal ?",
                        image: "/hero.png",
                      },
                      {
                        title:
                          "How can we empower women in rural areas of nepal ?",
                        image: "/hero.png",
                      },
                    ].map((article, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-5 group cursor-pointer"
                      >
                        {/* Image */}
                        <div className="min-w-[120px] overflow-hidden rounded-[5px]">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-[120px] h-[100px] object-cover group-hover:scale-105 transition duration-500"
                          />
                        </div>

                        {/* Content */}
                        <div>
                          <h3 className="text-[14px] leading-[24px] font-medium text-[#64748B] group-hover:text-[#2D3192] transition">
                            {article.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
