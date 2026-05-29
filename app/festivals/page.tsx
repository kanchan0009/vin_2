"use client";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { useState } from "react";

const tabs = ["General", "Sports", "Festivals"];

const blogs = [
  // General Category
  {
    id: 1,
    title: "Micro volunteering in Nepal",
    category: "General",
    date: "08/12/2025",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    description: "Discover how micro volunteering in Nepal lets you make a real difference in just 15 minutes a day. Explore inspiring ideas, benefits, & platforms.",
  },
  {
    id: 2,
    title: "Empowering Rural Communities",
    category: "General",
    date: "08/12/2025",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    description: "Learn about the long-term impact of integrated community development programs in Kavresthali and Okhaldhunga.",
  },
  {
    id: 3,
    title: "Sustainable Agriculture Placements",
    category: "General",
    date: "08/12/2025",
    image:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1200&auto=format&fit=crop",
    description: "How permaculture and eco-friendly farming practices are transforming the livelihood of marginalized farmers in Nepal.",
  },
  {
    id: 4,
    title: "Building Safe Classrooms",
    category: "General",
    date: "08/12/2025",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
    description: "Volunteer for disaster relief and construction projects, rebuilding schools in earthquake-impacted mountain areas.",
  },
  // Sports Category
  {
    id: 5,
    title: "Sports Development & Youth in Jitpur",
    category: "Sports",
    date: "10/01/2026",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop",
    description: "Empowering youths through health, fitness, and team building. Explore our physical education placements in Nepal.",
  },
  {
    id: 6,
    title: "Coaching Football to Children in Nepal",
    category: "Sports",
    date: "15/02/2026",
    image:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop",
    description: "Mentoring children in local clubs and schools, running tournaments, and promoting active lifestyles in the community.",
  },
  // Festivals Category
  {
    id: 7,
    title: "Celebrating Dashain and Tihar with Host Families",
    category: "Festivals",
    date: "20/09/2025",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
    description: "Immerse in the biggest Hindu festivals in Nepal. Learn about cultural exchanges and staying with local homestays during celebrations.",
  },
  {
    id: 8,
    title: "Holi Festival Volunteering: A Riot of Colors",
    category: "Festivals",
    date: "05/03/2026",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop",
    description: "Experience the vibrant festival of colors, Holi, with volunteers from all over the world while supporting local education initiatives.",
  },
];

export default function BlogSection() {
  const [activeTab, setActiveTab] = useState("General");

  const filteredBlogs = blogs.filter((blog) => blog.category === activeTab);

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`h-[44px] px-8 border text-[15px] font-medium transition-all duration-300 cursor-pointer ${
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
          {filteredBlogs.map((blog) => (
            <div key={blog.id} className="group">
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={blog.image}
                  alt={blog.title}
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
                <p className="text-[12px] text-[#6B7280] font-semibold mt-1">
                  {blog.category}
                </p>

                {/* Description */}
                <p className="text-[14px] leading-8 text-[#5B6475] mt-2 mb-4">
                  {blog.description}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 text-[#6B7280] text-[14px] mb-4">
                  <CalendarDays size={16} />
                  <span>{blog.date}</span>
                </div>

                {/* Button */}
                <Link href="/details">
                  <button className="h-[50px] px-15 rounded-[5px] bg-[#312E81] hover:bg-[#1E1B63] transition-all duration-300 text-white text-[15px] font-medium shadow-md cursor-pointer">
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