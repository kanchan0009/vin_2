"use client";

import { useState } from "react";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("photos");

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
    "Public Interest",
    "WorkCamps",
  ];

  const galleryImages = Array(12).fill(
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop"
  );

  return (
    <main className="w-full bg-[#F5F6F8] min-h-screen px-8 py-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* =====================================================
            TOP SECTION
        ===================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          
          {/* LEFT CONTENT */}
          <div>
            
            {/* Heading */}
            <h1 className="text-[38px] font-medium text-[#1F2A44] mb-4">
              Photos and videos
            </h1>

            {/* Description */}
            <p className="text-[16px] leading-[24px] text-[#6B7280] max-w-[820px] mb-8">
              Bibek Kumar sah is an SEO intern at Volunteers Initiative Nepal
              (VIN), helping the organization enhance its online presence and
              reach a wider audience. Passionate about digital marketing,
              website optimization, and data-driven strategies, Abhinav focuses
              on ensuring that VIN&apos;s volunteer and internship programs are
              easily discoverable online, connecting more people to the
              organization&apos;s mission.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              
              {/* Select */}
              <select className="h-[42px] min-w-[290px] rounded-[6px] bg-[#2F3C97] px-4 text-white text-[13px] outline-none">
                <option>Children Development program</option>
                <option>Youth Empowerment Program</option>
                <option>Teaching Program</option>
              </select>

              {/* Tabs */}
              <div className="flex items-center bg-white border border-[#E5E7EB] rounded-[6px] overflow-hidden">
                
                <button
                  onClick={() => setActiveTab("photos")}
                  className={`h-[42px] px-8 text-[13px] font-medium transition-all ${
                    activeTab === "photos"
                      ? "bg-[#2F3C97] text-white"
                      : "bg-white text-[#4B5563]"
                  }`}
                >
                  Photos
                </button>

                <button
                  onClick={() => setActiveTab("videos")}
                  className={`h-[42px] px-8 text-[13px] font-medium transition-all ${
                    activeTab === "videos"
                      ? "bg-[#2F3C97] text-white"
                      : "bg-white text-[#4B5563]"
                  }`}
                >
                  Videos
                </button>
              </div>
            </div>

            {/* =====================================================
                GALLERY GRID
            ===================================================== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-[8px] group bg-white"
                >
                  {/* Image */}
                  <img
                    src={image}
                    alt="Gallery"
                    className="w-full h-[170px] object-cover transition-all duration-500 group-hover:scale-105"
                  />

                  {/* Label on first image */}
                  {index === 0 && (
                    <div className="absolute bottom-3 left-3 bg-white shadow-md rounded-[6px] px-3 py-2">
                      <p className="text-[11px] font-medium text-[#1F2A44]">
                        Children Development program
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDEBAR
          ===================================================== */}
          <div>
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
          </div>
        </div>
      </div>
    </main>
  );
}