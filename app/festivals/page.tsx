"use client";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { useState } from "react";

const tabs = ["General", "Sports", "Festivals"];

const blogs = [
  {
    id: 1,
    title: "Micro volunteering in Nepal",
    category: "General",
    date: "08/12/2025",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Micro volunteering in Nepal",
    category: "General",
    date: "08/12/2025",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Micro volunteering in Nepal",
    category: "General",
    date: "08/12/2025",
    image:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Micro volunteering in Nepal",
    category: "General",
    date: "08/12/2025",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function BlogSection() {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap  mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`h-[44px] px-8  border text-[15px] font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#312E81] text-white border-[#312E81]"
                  : "bg-[#F8FAFC] text-[#6B7280] border-[#E2E8F0] hover:bg-[#EEF2FF]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="group">
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  width={700}
                  height={400}
                  className="w-full h-[240px] object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="pt-5">
                {/* Title */}
                <h3 className="text-[24px] leading-tight font-medium text-[#1F2A44]">
                  {blog.title}
                </h3>

                {/* Category */}
                <p className=" text-[12px] text-[#6B7280]">
                  {blog.category}
                </p>

                {/* Description */}
                <p className=" text-[14px] leading-8 text-[#5B6475]">
                  Discover how micro volunteering in Nepal lets you make a real
                  difference in just 15 minutes a day. Explore inspiring ideas,
                  benefits, & platforms.
                </p>

                {/* Date */}
                <div className=" flex items-center gap-2 text-[#6B7280] text-[14px]">
                  <CalendarDays size={16} />
                  <span>{blog.date}</span>
                </div>

                {/* Button */}
                <Link href="/details">
                <button className=" mt-1 h-[50px] px-15 rounded-[5px] bg-[#312E81] hover:bg-[#1E1B63] transition-all duration-300 text-white text-[15px] font-medium shadow-md">
                  Read More
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}