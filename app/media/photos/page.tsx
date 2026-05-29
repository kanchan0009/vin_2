"use client";

import { useState } from "react";
import Link from "next/link";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("photos");
  const [selectedProgram, setSelectedProgram] = useState("All Programs");

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

  const programUrls: Record<string, string> = {
    "Children’s Development Program": "/program/children-development",
    "Youth Empowerment Program": "/program/youth-empowerment",
    "Public Health & Medical Program": "/program/health",
    "Environment Conservation Program": "/program/environment",
    "Disaster Risk Reduction (DRR) Program": "/program/disaster",
    "Public health and medical care": "/program/health",
    "Environment conservation": "/program/environment",
    "Teaching program": "/program/children-development",
    "Management & Administration": "/program",
    "Journalism": "/program",
    "Public Interest": "/program",
    "WorkCamps": "/program",
  };

  const galleryItems = [
    // Photos
    {
      type: "photos",
      program: "Children’s Development Program",
      url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
      title: "Children Development Program"
    },
    {
      type: "photos",
      program: "Youth Empowerment Program",
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
      title: "Youth Empowerment Program"
    },
    {
      type: "photos",
      program: "Public Health & Medical Program",
      url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
      title: "Public Health & Medical Program"
    },
    {
      type: "photos",
      program: "Environment Conservation Program",
      url: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop",
      title: "Environment Conservation Program"
    },
    {
      type: "photos",
      program: "Disaster Risk Reduction (DRR) Program",
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
      title: "Disaster Risk Reduction"
    },
    {
      type: "photos",
      program: "Children’s Development Program",
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
      title: "Volunteering with Children"
    },
    // Videos
    {
      type: "videos",
      program: "Children’s Development Program",
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
      title: "Children Development Video"
    },
    {
      type: "videos",
      program: "Youth Empowerment Program",
      url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
      title: "Youth Leadership Video"
    },
    {
      type: "videos",
      program: "Public Health & Medical Program",
      url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
      title: "Public Health Volunteering Video"
    },
    {
      type: "videos",
      program: "Environment Conservation Program",
      url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
      title: "Environment Project Video"
    },
    {
      type: "videos",
      program: "Disaster Risk Reduction (DRR) Program",
      url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
      title: "Disaster Response Video"
    },
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesTab = item.type === activeTab;
    const matchesProgram = selectedProgram === "All Programs" || item.program === selectedProgram;
    return matchesTab && matchesProgram;
  });

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
              <select 
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="h-[42px] min-w-[290px] rounded-[6px] bg-[#2F3C97] px-4 text-white text-[13px] outline-none cursor-pointer"
              >
                <option value="All Programs">All Programs</option>
                <option value="Children’s Development Program">Children’s Development Program</option>
                <option value="Youth Empowerment Program">Youth Empowerment Program</option>
                <option value="Public Health & Medical Program">Public Health & Medical Program</option>
                <option value="Environment Conservation Program">Environment Conservation Program</option>
                <option value="Disaster Risk Reduction (DRR) Program">Disaster Risk Reduction (DRR) Program</option>
              </select>

              {/* Tabs */}
              <div className="flex items-center bg-white border border-[#E5E7EB] rounded-[6px] overflow-hidden">
                
                <button
                  onClick={() => setActiveTab("photos")}
                  className={`h-[42px] px-8 text-[13px] font-medium transition-all cursor-pointer ${
                    activeTab === "photos"
                      ? "bg-[#2F3C97] text-white"
                      : "bg-white text-[#4B5563]"
                  }`}
                >
                  Photos
                </button>

                <button
                  onClick={() => setActiveTab("videos")}
                  className={`h-[42px] px-8 text-[13px] font-medium transition-all cursor-pointer ${
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
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-[8px] group bg-white shadow-sm border border-slate-100"
                >
                  {/* Image */}
                  <img
                    src={item.url}
                    alt={item.title}
                    className={`w-full h-[170px] object-cover transition-all duration-500 group-hover:scale-105 ${activeTab === 'videos' ? 'opacity-85 group-hover:opacity-75' : ''}`}
                  />

                  {/* Play icon overlay for videos */}
                  {activeTab === "videos" && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-11 h-11 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <svg className="w-4 h-4 fill-[#2F3C97] ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Label */}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs shadow-md rounded-[6px] px-3 py-1.5 max-w-[90%]">
                    <p className="text-[11px] font-medium text-[#1F2A44] truncate">
                      {item.program}
                    </p>
                  </div>
                </div>
              ))}
              {filteredItems.length === 0 && (
                <div className="col-span-full py-16 text-center text-[#6B7280]">
                  No {activeTab} found for &quot;{selectedProgram}&quot;.
                </div>
              )}
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
                {programs.map((item, index) => {
                  const url = programUrls[item] || "/program";
                  return (
                    <Link href={url} key={index} className="block">
                      <div className="px-5 py-4 text-[15px] text-[#5b6478] hover:bg-white hover:text-[#2F3C97] transition-all cursor-pointer">
                        {item}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}