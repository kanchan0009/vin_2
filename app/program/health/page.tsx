"use client";
import DonateSection from "@/app/components/DonateSection";


import ChooseImpact from "@/app/components/ChooseImpact";

import OurTeam from "@/app/components/OurTeam";

import { useState, useRef } from "react";

import { BarChart3, X, Star, ChevronDown } from "lucide-react";

import { TypicalDayAccordion } from "@/app/components/Typicalaccordian";

import LatestNews from "@/app/components/news";

import Articles from "@/app/components/articles";

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
      question: "What does a public health and medical volunteer do?",

      answer:
        "A public health and medical volunteer supports clinics, health camps, hygiene education and wellness outreach in Nepal.",
    },

    {
      question: "How to volunteer in public health with VIN?",

      answer:
        "You can apply through VIN’s volunteer application process and choose a public health placement in Nepal.",
    },

    {
      question:
        "What makes this one of the best public health volunteer programs?",

      answer:
        "The program combines community clinics, preventive health education and local healthcare partnerships.",
    },

    {
      question: "Are there short-term public health volunteer opportunities?",

      answer:
        "Yes, VIN offers both short-term and long-term health and medical placements.",
    },

    {
      question:
        "Can I volunteer in health care without prior medical experience?",

      answer:
        "Yes, support roles and training are available for volunteers without formal medical qualifications.",
    },

    {
      question:
        "Are there leadership and life skills modules in health volunteer programs?",

      answer:
        "Yes, many placements include health education, community advocacy and patient communication training.",
    },

    {
      question: "Do you offer volunteer roles linked to health enterprise?",

      answer:
        "Yes, some activities connect health education with sanitation, nutrition and community business programs.",
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

  const [activeMediaTab, setActiveMediaTab] = useState("photos");

  const [currentSlide, setCurrentSlide] = useState(0);

  const volunteerRef = useRef<HTMLDivElement>(null);

  const [trustSlide, setTrustSlide] = useState(0);

  const trustVideos = [
    {
      image: "/trust-video.jpg",

      name: "Peter Smith",

      description:
        "Listen to heartfelt stories from people who choose to make a difference with us.",
    },

    {
      image: "/images/volunteer.jpg",

      name: "Sarah Johnson",

      description:
        "Our experience with VIN has been truly life-changing. Highly recommend joining.",
    },
  ];

  const nextTrust = () =>
    setTrustSlide((prev) => (prev + 1) % trustVideos.length);

  const prevTrust = () =>
    setTrustSlide((prev) => (prev === 0 ? trustVideos.length - 1 : prev - 1));

  return (
    <main className="w-full bg-white">
      {/* =========================================================

          HERO SECTION

      ========================================================= */}

      <section
        id="snapshot"
        className="relative w-full h-[620px] overflow-hidden scroll-mt-24"
      >
        {/* Background Image */}

        <img
          src="/women-education-banner.jpg"
          alt="Public Health & Medical Volunteer"
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
                Public Health & Medical Care
              </span>
            </div>

            {/* Heading */}

            <h1 className="text-white text-[20px] md:text-[30px] leading-[32px] font-medium mb-4">
              Public Health & Medical Volunteer in Nepal:
              <br />
              Improve Community Wellness
            </h1>

            {/* Description */}

            <p className="text-white/85 text-[14px] leading-[26px] max-w-[700px] mx-auto mb-8">
              Support health camps, hygiene education and medical outreach to
              bring essential care to underserved rural communities.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/applyNow"
                className="h-[46px] px-10 rounded-md bg-[#202788] hover:bg-[#2f39be] transition-all duration-300 text-white text-[16px] font-medium shadow-lg inline-flex items-center justify-center text-center"
              >
                Apply for Volunteer
              </Link>

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

      <section id="overview" className="w-full py-10 scroll-mt-24">
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
                    <a href="/media/downloads" className="block text-[#2E3192] underline">
                      Click Here to learn more
                    </a>

                    <a href="/media/downloads" className="block text-[#2E3192] underline">
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
                  As a public health and medical volunteer, you’ll help ViN meet
                  these goals:
                </p>
              </div>

              {/* Content Box */}

              <div
                id="roles"
                className="rounded-[10px] bg-[#D9F0FB] px-6 py-2 scroll-mt-24"
              >
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
                          <li>Health awareness and education planning</li>
                          <li>Patient communication and community outreach</li>
                          <li>
                            Practical organisation and supportive care skills
                          </li>
                          <li>Community partnership and wellbeing promotion</li>
                          <li>
                            Hygiene, nutrition and preventive health coaching
                          </li>
                          <li>
                            Empathy, active listening and respect for patients
                          </li>
                          <li>
                            Local health systems support and collaboration
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Public Health & Medical Care */}

              <div className="mb-16 ">
                <h2 className="text-4xl md:text-[38px]  text-[#1F2432] mb-6">
                  Why Public Health & Medical Care? Why Nepal?
                </h2>

                <h3 className="text-[25px] font-medium text-[#1F2432] mb-2">
                  The Need
                </h3>

                <p className="text-gray-600 leading-6 ">
                  Remote communities in Nepal still face gaps in health access,
                  hygiene education and preventive care. Volunteers help
                  clinics, health camps and outreach programs so families stay
                  healthier and more resilient.
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

              <div
                id="eligibility"
                className="grid grid-cols-1 md:grid-cols-2 gap-2 scroll-mt-24"
              >
                {[
                  {
                    title: "All Genders Welcome",

                    desc: "We welcome volunteers who want to support health access, wellness education and medical outreach.",
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
                <Link
                  href="/applyNow"
                  className="bg-[#2D3192] hover:bg-[#232777] text-white px-10 py-3 rounded-lg font-medium shadow-md transition inline-flex items-center justify-center text-center"
                >
                  Join Today
                </Link>
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

              <div id="travel" className="scroll-mt-24">
                <TypicalDayAccordion />
              </div>

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

                  <Link
                    href="/applyNow"
                    className="bg-[#2D3192] hover:bg-[#1F2B6C] text-white px-6 py-4 rounded-md text-sm font-medium transition inline-flex items-center justify-center text-center"
                  >
                    Apply Now
                  </Link>
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
                      {
                        slug: "mini-libraries",

                        title: "Mini-libraries and mobile book corners",
                      },

                      {
                        slug: "festival-budgeting",

                        title: "Festival budgeting workshops",
                      },

                      {
                        slug: "leadership-story-circles",

                        title: "Leadership storytelling circles",
                      },

                      {
                        slug: "girls-empowerment-clubs",

                        title: "Girls’ empowerment clubs",
                      },
                    ].map(({ slug, title }, index) => (
                      <Link
                        key={index}
                        href={`/program/children-development/${slug}`}
                        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition block"
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
                      </Link>
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

              <div
                id="contact"
                className="grid grid-cols-1 bg-[#2E3192] md:grid-cols-2 gap-8 px-8 py-7 items-start scroll-mt-24"
              >
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

              {/* Testimonials */}

              <div
                id="reviews"
                className="rounded-[14px] border border-[#D9DFEA] bg-white p-5 scroll-mt-24"
              >
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

              {/* Related Articles */}

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

      {/*Becoming part section*/}

      <section className="w-full bg-[#f3f3f3] py-10 px-4">
        <div
          className=" mx-auto rounded-[20px] overflow-hidden relative"
          style={{
            background: "linear-gradient(90deg, #2A3495 0%, #000000 100%)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[260px]">
            {/* Left Content */}

            <div className="px-8 md:px-12 py-10 text-white z-10">
              <h2 className="text-3xl md:text-[30px]  font-poppins font-[600] leading-tight max-w-3xl">
                Become a part of VIN from anywhere around the world
              </h2>

              <p className="mt-5 text-sm md:text-base text-gray-300 max-w-lg leading-relaxed">
                Wherever you are, you can be part of VIN. Our worldwide network
                brings together diverse perspectives to spark ideas, ignite
                collaboration, and build meaningful connections.
              </p>

              <button className="mt-8 bg-white text-[#2A3495] font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition">
                See Programs
              </button>
            </div>

            {/* Right Image */}
            <div className="relative h-[330px] overflow-hidden flex justify-end">
              <img
                src="/cta.png"
                alt="Children"
                className="w-full max-w-[420px] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/*our team section*/}

      <OurTeam />

      {/* Map and Cards Section */}

      <section className="py-20 text-center">
        {/* Top Content */}

        <div>
          <h2 className="text-[32px] md:text-[40px] font-medium text-[#222] mb-4">
            Where we work
          </h2>

          <p className="max-w-[760px] mx-auto text-[14px] md:text-[15px] leading-7 text-[#666]">
            We place volunteers in communities to support local effort,
            empowering residents to evolve positive change and improve quality
            of life through collaboration on meaningful projects.
          </p>
        </div>

        {/* Map */}

        <div className="pt-12 pb-16 flex justify-center">
          <img
            src="/images/nepal-map.png"
            alt="Nepal Map"
            className="object-contain"
          />
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {/* Card 1 */}

          <div className="text-center group">
            <div className="overflow-hidden rounded-[8px]">
              <img
                src="/location.png"
                alt="Kathmandu"
                className="w-full block transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="pt-5">
              <h3 className="text-[22px] font-medium text-[#222] mb-3">
                Kathmandu
              </h3>

              <p className="text-[14px] leading-7 text-[#666] mb-4">
                Transform communities by providing access and care services and
                improve quality of life through innovative projects for over two
                years.
              </p>

              <Link
                href="/"
                className="text-[16px] text-black pb-[2px] hover:opacity-70 transition"
              >
                Read More..
              </Link>
            </div>
          </div>

          {/* Card 2 */}

          <div className="text-center group">
            <div className="overflow-hidden rounded-[8px]">
              <img
                src="/location.png"
                alt="Okhaldhunga"
                className="w-full block transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="pt-5">
              <h3 className="text-[22px] font-medium text-[#222] mb-3">
                Okhaldhunga
              </h3>

              <p className="text-[14px] leading-7 text-[#666] mb-4">
                Okhaldhunga district is located 250 km east from Kathmandu.
                During project activities, more than 1500+ participants and
                engaged with over 900 key workers helping improve livelihoods.
              </p>

              <Link
                href="/"
                className="text-[16px] text-black  pb-[2px] hover:opacity-70 transition"
              >
                Read More..
              </Link>
            </div>
          </div>

          {/* Card 3 */}

          <div className="text-center group">
            <div className="overflow-hidden rounded-[8px]">
              <img
                src="/location.png"
                alt="Nuwakot"
                className="w-full block transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="pt-5">
              <h3 className="text-[22px] font-medium text-[#222] mb-3">
                Nuwakot
              </h3>

              <p className="text-[14px] leading-7 text-[#666] mb-4">
                Nuwakot is located 75 km northwest from Kathmandu and serves
                through development and social initiatives to support local
                communities.
              </p>

              <Link
                href="/"
                className="text-[16px] text-black  pb-[2px] hover:opacity-70 transition"
              >
                Read More..
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Impact Section */}

      <ChooseImpact />

      <section className="py-20">
        {/* Top Rating */}

        <div className="flex items-center justify-center gap-3 mb-14">
          <div className="flex text-yellow-400 text-[18px]">★ ★ ★ ★ ★</div>

          <h3 className="text-[32px] font-semibold text-[#1F2B6C] leading-none">
            4.4<span className="text-[18px]">/5</span>
          </h3>

          <span className="text-[14px] text-gray-500 border-l pl-3">
            200+ Review
          </span>
        </div>

        {/* Review Cards */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {/* Card 1 */}

          <div className="flex flex-col items-center">
            <h4 className="text-[34px] font-semibold text-[#1F2B6C]">
              4.5<span className="text-[18px]">/5</span>
            </h4>

            <div className="flex items-center gap-1 mt-2 mb-2">
              <span className="text-yellow-400 text-[14px]">★</span>

              <span className="text-[12px] font-semibold text-[#F4A100] uppercase tracking-wide">
                Great
              </span>
            </div>

            <p className="text-[18px] text-[#444] font-medium font-lora">
              Great Non-profit
            </p>
          </div>

          {/* Card 2 */}

          <div className="flex flex-col items-center">
            <h4 className="text-[34px] font-semibold text-[#1F2B6C]">
              4.2<span className="text-[18px]">/5</span>
            </h4>

            <h5 className="text-[28px] font-semibold text-[#1F2B6C] mt-2">
              Google
            </h5>

            <p className="text-[18px] text-[#444] font-medium font-lora mt-1">
              Google Reviews
            </p>
          </div>

          {/* Card 3 */}

          <div className="flex flex-col items-center">
            <h4 className="text-[34px] font-semibold text-[#1F2B6C]">
              4.2<span className="text-[18px]">/5</span>
            </h4>

            <h5 className="text-[32px] font-bold text-[#1F2B6C] mt-2">GO</h5>

            <p className="text-[18px] text-[#444] font-medium font-lora mt-1">
              go overseas
            </p>
          </div>

          {/* Card 4 */}

          <div className="flex flex-col items-center">
            <h4 className="text-[34px] font-semibold text-[#1F2B6C]">
              4.2<span className="text-[18px]">/5</span>
            </h4>

            <div className="flex text-yellow-400 text-[14px] mt-2">
              ★ ★ ★ ★ ★
            </div>

            <p className="text-[18px] text-[#444] font-medium font-lora mt-2">
              Review Center
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Reviews Section */}

      <section className="w-full  py-14 md:py-20">
        <div className="mx-auto  px-4 sm:px-6 lg:px-8">
          {/* Top Heading */}

          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-medium tracking-tight text-[#1b1b1b] md:text-[38px]">
                What Our Volunteers Say
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#7c7c7c] md:text-[15px]">
                Real stories from our volunteers and community members. Discover
                real-life experiences and feedback that highlight our
                commitment, impact, and the trust we build every day.
              </p>
            </div>

            {/* Button */}

            <button className="w-fit rounded-md bg-[#1F2B6C] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#3340d0]">
              View all
            </button>
          </div>

          {/* Slider Area */}

          <div className="relative group/vol">
            {/* Left Arrow */}

            <button
              onClick={() =>
                volunteerRef.current?.scrollBy({
                  left: -320,

                  behavior: "smooth",
                })
              }
              className="absolute left-[-20px] top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white shadow-sm md:flex hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#5f6b7a]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Cards */}

            <div
              ref={volunteerRef}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Card 1 */}

              <div className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.33px)] shrink-0 snap-start rounded-2xl border border-[#ececec] bg-[#E2E8F0] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <p className="text-[14px] leading-7 text-[#5d6470]">
                  &quot;Volunteering with VN completely transformed the way I
                  see community development. The staff were incredibly
                  supportive, and the projects truly made a real impact. I
                  learned so much from fellow volunteers!&quot;
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <img
                    src="/hero.png"
                    alt="User"
                    className="h-11 w-11 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="text-sm font-medium text-[#111827]">
                      Baker Kumar Sah
                    </h4>

                    <p className="text-xs text-[#8b8b8b]">Nepal</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}

              <div className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.33px)] shrink-0 snap-start rounded-2xl border border-[#ececec] bg-[#E2E8F0] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <p className="text-[14px] leading-7 text-[#5d6470]">
                  &quot;Volunteering with VN completely transformed the way I
                  see community development. The staff were incredibly
                  supportive, and the projects truly made a real impact. I
                  learned so much from fellow volunteers!&quot;
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <img
                    src="/hero.png"
                    alt="User"
                    className="h-11 w-11 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="text-sm font-medium text-[#111827]">
                      Baker Kumar Sah
                    </h4>

                    <p className="text-xs text-[#8b8b8b]">United States</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}

              <div className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.33px)] shrink-0 snap-start rounded-2xl border border-[#ececec] bg-[#E2E8F0] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <p className="text-[14px] leading-7 text-[#5d6470]">
                  &quot;Volunteering with VN completely transformed the way I
                  see community development. The staff were incredibly
                  supportive, and the projects truly made a real impact. I
                  learned so much from fellow volunteers!&quot;
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <img
                    src="/hero.png"
                    alt="User"
                    className="h-11 w-11 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="text-sm font-medium text-[#111827]">
                      Baker Kumar Sah
                    </h4>

                    <p className="text-xs text-[#8b8b8b]">Georgia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Arrow */}

            <button
              onClick={() =>
                volunteerRef.current?.scrollBy({
                  left: 320,

                  behavior: "smooth",
                })
              }
              className="absolute right-[-20px] top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white shadow-sm md:flex hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#5f6b7a]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/*Trust Us section*/}

      <section className="w-full  py-14 md:py-20">
        <div className="mx-auto  px-4 sm:px-6 lg:px-8">
          {/* Top Heading */}

          <div className="mb-8 flex items-start justify-between">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-medium tracking-tight text-[#1b1b1b] md:text-[38px]">
                Watch Why People Trust Us
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#6f6f6f] md:text-[15px]">
                Watch why people trust us and discover how our commitment,
                transparency, and results have built lasting relationships. See
                real stories and experiences that showcase our reliability and
                impact.
              </p>
            </div>

            {/* Navigation Arrows */}

            <div className="hidden items-center gap-2 md:flex">
              <button
                onClick={prevTrust}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dcdcdc] bg-white shadow-sm transition hover:bg-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#5f6b7a]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextTrust}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dcdcdc] bg-white shadow-sm transition hover:bg-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#5f6b7a]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Video Section */}

          <div className="relative overflow-hidden rounded-2xl group transition-all duration-300">
            {/* Background Image */}

            <img
              src={trustVideos[trustSlide].image}
              alt="Trust Video"
              className="h-[250px] w-full object-cover sm:h-[350px] md:h-[520px] transition-all duration-500"
            />

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-black/35"></div>

            {/* Center Play Button */}

            <div className="absolute inset-0 flex items-center justify-center">
              <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition hover:scale-105">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-6 w-6 fill-[#4b5563]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Bottom Left Text */}

            <div className="absolute bottom-6 left-6 z-10 max-w-sm text-white md:bottom-10 md:left-10">
              <h3 className="text-2xl font-semibold md:text-[34px] transition-all duration-300">
                {trustVideos[trustSlide].name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/85 md:text-[15px] transition-all duration-300">
                {trustVideos[trustSlide].description}
              </p>
            </div>

            {/* Bottom Sound Icon */}

            <button className="absolute bottom-6 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-md md:bottom-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5L6 9H3v6h3l5 4V5z"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.54 8.46a5 5 0 010 7.07"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/*Explore Nepal section*/}

      <section className="relative overflow-hidden bg-[#00B1F333] mb-10 py-16 md:py-24">
        {/* Top Wave */}

        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block h-[60px] w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,32L60,37.3C120,43,240,53,360,48C480,43,600,21,720,21.3C840,21,960,43,1080,48C1200,53,1320,43,1380,37.3L1440,32L1440,0L0,0Z"
            ></path>
          </svg>
        </div>

        {/* Bottom Wave */}

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            className="relative block h-[60px] w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,32L60,37.3C120,43,240,53,360,48C480,43,600,21,720,21.3C840,21,960,43,1080,48C1200,53,1320,43,1380,37.3L1440,32L1440,0L0,0Z"
            ></path>
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Content */}

          <div className="grid gap-20 md:grid-cols-2 md:items-start">
            {/* Left */}

            <div>
              <p className="text-[18px] text-[#5b6770]">Explore Nepal</p>

              <h2 className="mt-3 max-w-md text-[36px] font-medium leading-tight text-[#374151] md:text-[38px]">
                Where Every Journey
                <br />
                Has a Purpose
              </h2>
            </div>

            {/* Right */}

            <div className="max-w-xl pt-8">
              <p className="text-[15px]  font-[400] leading-7 text-[#374151]">
                Explore Nepal — a land where snow-capped mountains meet ancient
                temples, and kindness flows through every village path. This is
                a country of simple living, deep spirituality, and warm
                community bonds.
              </p>
            </div>
          </div>

          {/* Image Grid */}

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {/* Image 1 */}

            <div className="overflow-hidden rounded-[22px]">
              <img
                src="/hero.png"
                alt="Nepal Trekking"
                className="h-[220px] w-full object-cover md:h-[420px]"
              />
            </div>

            {/* Image 2 */}

            <div className="overflow-hidden rounded-[22px]">
              <img
                src="/hero.png"
                alt="River Rafting"
                className="h-[220px] w-full object-cover md:h-[420px]"
              />
            </div>

            {/* Image 3 */}

            <div className="overflow-hidden rounded-[22px]">
              <img
                src="/hero.png"
                alt="Temple"
                className="h-[220px] w-full object-cover md:h-[420px]"
              />
            </div>

            {/* Image 4 */}

            <div className="overflow-hidden rounded-[22px]">
              <img
                src="/hero.png"
                alt="Wildlife"
                className="h-[220px] w-full object-cover md:h-[420px]"
              />
            </div>
          </div>
        </div>
      </section>

      <LatestNews />

      <Articles />

      {/* Volunteer Program / Donate Section */}
      <DonateSection />

      {/*Gallery section*/}

      <section className="w-full bg-[#f7f7f7] py-20 px-4 md:px-6">
        {/* Header */}

        <div className="flex items-start justify-between mb-5">
          <div>
            <h2 className="text-[38px] font-medium text-[#1f1f1f] leading-none mb-2">
              Gallery
            </h2>

            <p className="text-[16px] text-[#8b8b8b] leading-[18px] max-w-4xl">
              A glimpse into the moments that define our work and community
              impact.
            </p>
          </div>

          <button className="bg-[#2E3192] hover:bg-[#26287d] transition-all text-white text-[16px] font-medium px-10 py-2 rounded-sm">
            View all
          </button>
        </div>

        {/* Gallery Grid */}

        <div className="grid grid-cols-3 gap-3">
          {/* Image 1 */}

          <div className="overflow-hidden rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
            <img
              src="/hero.png"
              alt="gallery"
              className="w-full h-[200px] object-cover"
            />
          </div>

          {/* Image 2 */}

          <div className="overflow-hidden rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
            <img
              src="/hero.png"
              alt="gallery"
              className="w-full h-[200px] object-cover"
            />
          </div>

          {/* Image 3 */}

          <div className="overflow-hidden rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
            <img
              src="/hero.png"
              alt="gallery"
              className="w-full h-[200px] object-cover"
            />
          </div>

          {/* Image 4 */}

          <div className="overflow-hidden rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
            <img
              src="/hero.png"
              alt="gallery"
              className="w-full h-[200px] object-cover"
            />
          </div>

          {/* Image 5 */}

          <div className="overflow-hidden rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
            <img
              src="/hero.png"
              alt="gallery"
              className="w-full h-[200px] object-cover"
            />
          </div>

          {/* Image 6 */}

          <div className="overflow-hidden rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
            <img
              src="/hero.png"
              alt="gallery"
              className="w-full h-[200px] object-cover"
            />
          </div>

          {/* Image 7 */}

          <div className="overflow-hidden rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
            <img
              src="/hero.png"
              alt="gallery"
              className="w-full h-[200px] object-cover"
            />
          </div>

          {/* Image 8 */}

          <div className="overflow-hidden rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
            <img
              src="/hero.png"
              alt="gallery"
              className="w-full h-[200px] object-cover"
            />
          </div>

          {/* Image 9 */}

          <div className="overflow-hidden rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
            <img
              src="/hero.png"
              alt="gallery"
              className="w-full h-[200px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Volunteers Section */}

      <section className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#CCEFFD] py-10 px-6 md:px-10">
        {/* Header */}

        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="text-[38px] font-medium text-[#1d1d1d] leading-none mb-3">
              Our Volunteers
            </h2>

            <p className="text-[16px] text-[#7b7b7b]">
              Our current volunteers working with us
            </p>
          </div>

          <Link
            href="/volunteers"
            className="bg-[#2E3192] hover:bg-[#26287d] transition-all text-white text-[16px] font-medium px-6 py-3 rounded-md shadow-sm inline-flex items-center justify-center"
          >
            View Volunteers
          </Link>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12  mx-auto">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex flex-col items-center text-center">
              {/* Image Card */}

              <div className="w-full md:w-[350px] overflow-hidden rounded-md shadow-md border border-gray-200 bg-white">
                <img
                  src="/hero.png"
                  alt="Volunteer"
                  className="w-full h-[200px] object-cover"
                />
              </div>

              {/* Content */}

              <div className="mt-4">
                <h3 className="text-[15px] font-semibold text-[#222]">
                  Kelly Anne Lister
                </h3>

                <p className="text-[12px] text-[#8a8a8a] mt-1">Australia</p>

                <p className="text-[11px] text-[#9a9a9a] mt-2 leading-[18px]">
                  Teaching English at Monastery
                </p>

                {/* Dates */}

                <div className="flex items-center justify-center gap-8 mt-4 text-[10px] text-[#8d8d8d]">
                  <div>
                    <p>F To</p>

                    <p className="mt-1 text-[#666]">12/01/2026</p>
                  </div>

                  <div>
                    <p>T To</p>

                    <p className="mt-1 text-[#666]">12/01/2026</p>
                  </div>
                </div>

                {/* Button */}

                <button className="mt-5 w-full md:w-[350px] border border-[#4c53c7] text-[#2E3192] hover:bg-[#2E3192] hover:text-white transition-all text-[14px] font-medium py-3 rounded-md bg-white shadow-sm">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
