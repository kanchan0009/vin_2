"use client";
import { useState } from "react";
import Link from "next/link";
import { Play } from "lucide-react";

const tabContents: Record<string, string[]> = {
  Overview: [
    "Ashley Patterson is an SEO Intern at Volunteers Initiative Nepal (VIN), helping the organization enhance its online presence and reach a wider audience. Passionate about digital marketing, website optimization, and data-driven strategies, Ashley focuses on ensuring that VIN’s volunteer and internship programs are easily discoverable online, connecting many people to the organization’s mission.",
    "In her role as SEO Intern, Ashley reviews VIN’s website to identify areas for improvement, conducts keyword research, keeps track of website performance, and implements search engine optimization techniques. She also works on improving digital communication and making sure important information about volunteer opportunities, internships, and community initiatives is easy to find.",
    "Ashley’s responsibilities include content optimization, improving website loading speed, refining metadata, and helping VIN build a stronger online presence. She is passionate about using digital tools to support social organizations and make information more accessible to people worldwide.",
    "Through her internship, Ashley gains valuable hands-on experience in SEO and digital marketing while contributing to meaningful social impact projects. Her role supports VIN’s mission of empowering communities through education, volunteerism, and sustainable development initiatives.",
    "Ashley’s work also contributes to VIN’s long-term vision of strengthening communication and connecting more people to important causes through improved digital visibility and outreach.",
  ],
  "Background & Skills": [
    "Ashley holds a Bachelor's degree in Computer Science and has a strong foundation in modern web development technologies and digital marketing strategies.",
    "She has extensive skills in on-page and off-page SEO optimization, keywords research tools (Google Keyword Planner, Ahrefs, Semrush), Google Analytics, and Search Console.",
    "Her technical skillset includes HTML, CSS, JavaScript, React, Next.js, and content management systems (WordPress, Webflow), allowing her to implement technical SEO fixes directly.",
    "Additionally, she has a proven ability to analyze web traffic data, identify bottlenecks, and suggest actionable recommendations to improve page rankings and organic reach.",
  ],
  "Work with VIN": [
    "During her volunteer internship with VIN, Ashley successfully conducted a comprehensive audit of the core website and fixed meta-tags, image alt attributes, and structured data markup.",
    "She created and optimized content for new program pages, improving organic keyword visibility by 25% within the first month.",
    "She also collaborated with local content teams to write SEO-friendly articles and blogs that highlight VIN's impact on Nepalese communities.",
    "Additionally, she conducted training sessions for local staff on basic SEO practices, Google Analytics tracking, and digital outreach strategies to ensure long-term sustainability of digital efforts.",
  ],
  "What to Expect": [
    "Volunteering with VIN is an immersive and rewarding experience where you work alongside a dedicated team of national and international volunteers.",
    "You can expect hands-on project involvement, regular feedback sessions, and opportunities to visit local project sites in Kathmandu, Okhaldhunga, and surrounding villages.",
    "The daily schedule typically includes morning planning sessions, project development, collaboration with different departments, and occasional community meetings.",
    "VIN provides a supportive working environment with cultural exchange activities, basic language learning, and mentorship from experienced development professionals.",
  ],
  Testimonial: [
    '"My time as an SEO Intern with Volunteers Initiative Nepal has been nothing short of transformative. Not only did I get to apply my digital marketing skills to a real-world cause, but I also felt like a valued part of the community."',
    '"The VIN team was incredibly welcoming and supportive throughout my journey. Seeing the real-world impact of the programs I helped promote online was incredibly fulfilling."',
    '"I highly recommend VIN to anyone looking to make a meaningful difference while gaining valuable professional experience. It\'s an opportunity of a lifetime!"',
  ],
};

export default function VolunteerProfilePage() {
  const [activeTab, setActiveTab] = useState<string>("Overview");

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
  return (
    <main className="w-full bg-white py-14 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* =========================================
            TOP PROFILE SECTION
        ========================================= */}
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          {/* Profile Image */}
          <div className="w-[180px] h-[180px] rounded-[8px] overflow-hidden flex-shrink-0 border border-[#e5e7eb]">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
              alt="Volunteer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <h1 className="text-[28px] font-semibold text-[#1f2a44] mb-2">
              Kelly Anne Lister
            </h1>

            <p className="text-[16px] text-[#6b7280] mb-1">Australia</p>

            <p className="text-[15px] text-[#6b7280] mb-1">SEO Internship</p>

            <p className="text-[15px] text-[#6b7280] mb-6">
              Teaching English at Monastery
            </p>

            {/* Dates */}
            <div className="flex items-center gap-12">
              {/* From */}
              <div>
                <p className="text-[13px] text-[#9ca3af] mb-1">⏺ From</p>

                <p className="text-[14px] font-medium text-[#1f2a44]">
                  12/01/2026
                </p>
              </div>

              {/* To */}
              <div>
                <p className="text-[13px] text-[#9ca3af] mb-1">⏺ To</p>

                <p className="text-[14px] font-medium text-[#1f2a44]">
                  12/01/2026
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            TABS
        ========================================= */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-[#e5e7eb] pb-4">
          {[
            "Overview",
            "Background & Skills",
            "Work with VIN",
            "What to Expect",
            "Testimonial",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 h-[42px] rounded-[4px] text-[14px] font-medium transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-[#2A3495] text-white font-semibold"
                  : "bg-[#f5f7fa] border border-[#e5e7eb] text-[#6b7280] hover:bg-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="max-w-4xl space-y-4">
          {tabContents[activeTab].map((paragraph, index) => (
            <p
              key={index}
              className="text-[16px] leading-[34px] text-[#5b6478]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      {/* =========================================
    INTERVIEW VIDEOS SECTION
========================================= */}
      <section className="max-w-7xl bg-white py-10">
        <div className="bg-[#f8f9fc] border border-[#e9edf5] rounded-[10px] p-6">
          {/* Heading */}
          <div className="mb-6">
            <h2 className="text-[30px] font-semibold text-[#1f2a44] mb-2">
              Interview Videos
            </h2>

            <p className="text-[14px] text-[#7b8498]">
              Listen to volunteer stories from people who chose to make a
              difference with VIN.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                {/* Thumbnail */}
                <div className="relative h-[170px] rounded-[8px] overflow-hidden border border-[#e5e7eb]">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                    alt="Interview"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[52px] h-[52px] rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <Play className="w-6 h-6 text-[#2A3495] ml-1" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-[15px] font-medium leading-[24px] text-[#1f2a44] group-hover:text-[#2A3495] transition-all">
                    Improved Teaching Quality Key to Nepal’s Overall Development
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
    ARTICLES SECTION
========================================= */}
      <section className="max-w-7xl bg-white py-4">
        <div className="bg-[#f8f9fc] border border-[#e9edf5] rounded-[10px] p-6">
          {/* Heading */}
          <div className="mb-6">
            <h2 className="text-[30px] font-semibold text-[#1f2a44] mb-2">
              Articles
            </h2>

            <p className="text-[14px] text-[#7b8498]">
              Read insightful stories from people who chose to make a difference
              with VIN.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                {/* Thumbnail */}
                <div className="h-[170px] rounded-[8px] overflow-hidden border border-[#e5e7eb]">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                    alt="Article"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                  />
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-[15px] font-medium leading-[24px] text-[#1f2a44] group-hover:text-[#2A3495] transition-all">
                    Improved Teaching Quality Key to Nepal’s Overall Development
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-[#F1F5F9] py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-start justify-between mb-10">
            {/* Left Content */}
            <div>
              <h2 className="text-[32px] font-semibold text-[#1f2a44] leading-none mb-3">
                Programs you May Like
              </h2>

              <p className="text-[14px] leading-[26px] text-[#6b7280] max-w-[620px]">
                Discover meaningful volunteer opportunities that align with your
                passion and skills while creating a lasting impact in Nepalese
                communities.
              </p>
            </div>

            {/* Explore Link */}
            <button className="flex items-center gap-2 text-[14px] font-medium text-[#1f2a44] hover:text-[#2A3495] transition-all">
              Explore All Programs
              <span className="text-[18px]">→</span>
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-md border border-[#e5e7eb] shadow-sm hover:shadow-md transition-all bg-white"
              >
                {/* Full Image */}
                <div className="relative h-[260px]">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                    alt="Program"
                    className="w-full h-full object-cover"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/20" />

                  {/* Overlapping Content */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white rounded-md px-4 py-3 shadow-md border border-[#e5e7eb]">
                      <h3 className="text-[15px] leading-[22px] font-semibold text-center text-[#1f2a44]">
                        Domestic Violence Prevention Volunteer Program in Nepal
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
