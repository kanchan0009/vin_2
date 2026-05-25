"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  Heart,
  MessageCircle,
  Plus,
  Star,
  Users,
  Building2,
  Sprout,
  Leaf,
  Briefcase,
  Landmark,
  Clock3,
} from "lucide-react";
const stories = [
  {
    name: "Peter Smith",
    country: "United Kingdom",
    role: "Legal Awareness Volunteer",
    image: "/hero.png",
    review:
      "Working with ViN’s women’s rights program was transformative. I witnessed women who had never known their legal rights stand up and demand justice.",
  },
  {
    name: "Sarah Johnson",
    country: "Canada",
    role: "Women Empowerment Volunteer",
    image: "/hero2.png",
    review:
      "The community welcomed me like family. Teaching life skills and confidence-building workshops became one of the most rewarding experiences of my life.",
  },
  {
    name: "Emily Carter",
    country: "Australia",
    role: "Education Volunteer",
    image: "/hero3.png",
    review:
      "I learned as much from the women and children as they learned from me. The cultural exchange and personal growth were unforgettable.",
  },
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
    question: "Are there short-term women’s education volunteer opportunities?",
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

export default function WomenEmpowermentHero() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  return (
    <main>
      <section className="w-full bg-white">
        {/* Top Content */}
        <div className="w-full  pt-10 pb-6">
          <h1 className="text-[30px] md:text-[36px] leading-[1.15] font-medium text-[#1F2A44] max-w-8xl">
            Women Empowerment Volunteer Programsin Nepal–Empower
            <br />
            Her, Empower a Nation
          </h1>

          <p className="mt-4 text-[15px] md:text-[18px] leading-7 text-[#5B6475] max-w-[1000px]">
            Volunteer with VIN to advance gender equality, uplift women’s
            voices, and create lasting changefrom the heart of rural Nepal.
          </p>
        </div>

        {/* Full Width Hero Image */}
        <div className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 overflow-hidden">
          {/* Image */}
          <img
            src="/hero.png"
            alt="Women Empowerment"
            className="w-full h-[320px] md:h-[430px] object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/25"></div>

          {/* Bottom Buttons */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-wrap items-center justify-center gap-3 px-4">
            {/* Apply Button */}
            <button className="flex items-center gap-2 bg-[#2A3495] hover:bg-[#1f2875] text-white text-[14px] font-medium px-7 py-3 rounded-md shadow-lg transition">
              <Plus size={16} />
              Apply for Volunteer
            </button>

            {/* Donate Button */}
            <button className="flex items-center gap-2 bg-[#F59E0B] hover:bg-[#d88906] text-white text-[14px] font-medium px-7 py-3 rounded-md shadow-lg transition">
              <Heart size={16} />
              Donate Now
            </button>

            {/* WhatsApp Button */}
            <button className="flex items-center gap-2 bg-[#22C55E] hover:bg-[#16a34a] text-white text-[14px] font-medium px-7 py-3 rounded-md shadow-lg transition">
              <MessageCircle size={16} />
              Chat on Whatsapp
            </button>
          </div>
        </div>
      </section>
      {/* ======================================
          PROJECT AT A GLANCE
      ====================================== */}
      <section className="w-full bg-white py-14">
        <div className=" mx-auto px-4 ">
          {/* Heading */}
          <h2 className="text-[34px] leading-tight font-medium text-[#1F2A44]">
            Project at a Glance
          </h2>

          {/* Sub Heading */}
          <h3 className="mt-4 text-[28px] font-medium text-[#1F2A44]">
            Women Empowerment Volunteer Program in Nepal
          </h3>

          {/* Description */}
          <p className="mt-5 text-[16px] leading-[34px] text-[#5B6475] ">
            If you’re searching for women empowerment volunteer programs that do
            more than scratch the surface, you’ll feel at home here. VIN’s
            programs are not charity—they are partnerships. We work hand-in-hand
            with local women and families. When you leave, your impact
            remains,because Nepali women’s clubs and cooperativescontinue to run
            every project, with or withoutoutside volunteers. If you’re
            interested involunteer opportunities for women’s rights—fromteaching
            girls to microfinance and legal awareness—you’ll find genuine,
            community-drivenprojects here
          </p>

          {/* Bullet Points */}
          <div className="mt-8 space-y-3">
            <div className="flex items-start gap-3 text-[16px] text-[#5B6475]">
              <span className="mt-[10px] w-[6px] h-[6px] rounded-full bg-[#2A3495]" />
              <p>
                Rural women’s literacy:{" "}
                <span className="font-semibold text-[#2A3495]">53%</span>
              </p>
            </div>

            <div className="flex items-start gap-3 text-[16px] text-[#5B6475]">
              <span className="mt-[10px] w-[6px] h-[6px] rounded-full bg-[#2A3495]" />
              <p>
                Girls married before 18:{" "}
                <span className="font-semibold text-[#2A3495]">34%</span>
              </p>
            </div>

            <div className="flex items-start gap-3 text-[16px] text-[#5B6475]">
              <span className="mt-[10px] w-[6px] h-[6px] rounded-full bg-[#2A3495]" />
              <p>
                Women with formal financial access:{" "}
                <span className="font-semibold text-[#2A3495]">28%</span>
              </p>
            </div>

            <div className="flex items-start gap-3 text-[16px] text-[#5B6475]">
              <span className="mt-[10px] w-[6px] h-[6px] rounded-full bg-[#2A3495]" />
              <p>
                Maternal mortality:{" "}
                <span className="font-semibold text-[#2A3495]">
                  151 per 100,000 births
                </span>
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-0 overflow-hidden rounded-md border border-[#D9DFEA] w-fit">
            <button className="bg-[#2A3495] text-white px-8 py-4 text-[16px] font-medium">
              Need
            </button>

            <button className="bg-[#F5F7FB] text-[#5B6475] px-8 py-4 text-[16px] font-medium hover:bg-white transition">
              Our Solution
            </button>
          </div>

          {/* Why Section */}
          <div className="mt-10">
            <h2 className="text-[34px] leading-tight font-medium text-[#1F2A44]">
              Why is Women Empowerment needed?
            </h2>

            <p className="mt-5 text-[20px] leading-[36px] text-[#394150] max-w-[1200px] font-medium">
              Rural women face low literacy, early marriage, limited financial
              access, and dangerous maternal risks — barriers that hold back
              their potential and their families’ progress.
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-12 overflow-hidden rounded-md border border-[#D9DFEA]">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
              {/* Active */}
              <button className="bg-[#2A3495] text-white h-[58px] text-[16px] font-medium border-r border-[#D9DFEA]">
                Overview
              </button>

              {/* Other Tabs */}
              {[
                "Our Approach",
                "Projects",
                "Requirement",
                "How to Apply",
                "Testimonials",
                "Contact",
              ].map((tab) => (
                <button
                  key={tab}
                  className="bg-[#F5F7FB] text-[#5B6475] h-[58px] text-[16px] font-medium border-r border-[#D9DFEA] hover:bg-white transition"
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ======================================
          PROGRAMS
      ====================================== */}
      <section className="w-full py-16 bg-white">
        <div className=" mx-auto px-4 ">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
            {/* =========================================
          LEFT COLUMN
      ========================================= */}
            <div className="space-y-20">
              <div>
                {/* Heading */}
                <div>
                  <h2 className="text-[34px] leading-tight font-mrdium text-[#1F2A44]">
                    Real Impact, Measurable Results
                  </h2>

                  <p className="mt-3 text-[16px] leading-7 text-[#6B7280] max-w-[900px]">
                    This isn’t feel-good volunteering. This is proven,
                    sustainable change backed by data and driven by the women
                    themselves.
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-10">
                  {/* Item */}
                  <div className="text-center">
                    <Heart
                      size={38}
                      className="mx-auto text-[#12A3E7] fill-[#12A3E7]"
                    />

                    <h3 className="mt-5 text-[42px] font-semibold text-[#12A3E7] leading-none">
                      26,610
                    </h3>

                    <p className="mt-3 text-[22px] leading-[34px] font-medium text-[#1F2A44]">
                      T.beneficiaries
                    </p>
                  </div>

                  {/* Item */}
                  <div className="text-center">
                    <Users size={30} className="mx-auto text-[#12A3E7]" />

                    <h3 className="mt-5 text-[30px] font-semibold text-[#12A3E7] leading-none">
                      5,160
                    </h3>

                    <p className="mt-3 text-[22px] leading-[34px] font-medium text-[#1F2A44]">
                      Micro credit co-
                      <br />
                      operative support
                    </p>
                  </div>

                  {/* Item */}
                  <div className="text-center">
                    <Building2 size={30} className="mx-auto text-[#12A3E7]" />

                    <h3 className="mt-5 text-[30px] font-semibold text-[#12A3E7] leading-none">
                      6,238
                    </h3>

                    <p className="mt-3 text-[22px] leading-[34px] font-medium text-[#1F2A44]">
                      Entrepreneurship
                      <br />
                      development
                    </p>
                  </div>

                  {/* Item */}
                  <div className="text-center">
                    <Heart
                      size={30}
                      className="mx-auto text-[#12A3E7] fill-[#12A3E7]"
                    />

                    <h3 className="mt-5 text-[30px] font-semibold text-[#12A3E7] leading-none">
                      12,128
                    </h3>

                    <p className="mt-3 text-[22px] leading-[34px] font-medium text-[#1F2A44]">
                      Women education &
                      <br />
                      Life Skill
                    </p>
                  </div>

                  {/* Item */}
                  <div className="text-center">
                    <Sprout size={30} className="mx-auto text-[#12A3E7]" />

                    <h3 className="mt-5 text-[30px] font-semibold text-[#12A3E7] leading-none">
                      3000+
                    </h3>

                    <p className="mt-3 text-[22px] leading-[34px] font-medium text-[#1F2A44]">
                      Infrastructure
                      <br />
                      development
                    </p>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="mt-16">
                  <h2 className="text-[30px] leading-tight font-medium text-[#1F2A44]">
                    Why Women’s Empowerment? Why Nepal?
                  </h2>

                  <p className="mt-3 text-[16px] leading-[24px] text-[#5B6475]">
                    Spend just one day in a Nepali village and you’ll see women
                    at the center of everything: fields, kitchens, schools, and
                    local government meetings. Yet, many barriers hold them
                    back. Only 59% of women here can read and write, and one in
                    four has experienced violence in her life.
                    Chhaupadi—banishing women during their periods—is illegal,
                    but stories still continue in rural mountain districts.
                  </p>
                </div>
              </div>

              {/* =========================================
            SECTION 2
        ========================================= */}
              <div>
                {/* Heading */}
                <div>
                  <h2 className="text-[34px] leading-tight font-medium text-[#1F2A44]">
                    VIN&apos;s Approach:
                    <span className="text-gray-300">Our Story</span>
                  </h2>

                  <p className="mt-3 text-[16px] leading-7 text-[#6B7280] max-w-[900px]">
                    We don’t impose solutions. We partner with communities to
                    build women-led, sustainable change.
                  </p>
                </div>

                {/* Cards */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Card */}
                  <div className="rounded-2xl border border-[#D9DFEA] bg-white p-5">
                    <div className="w-10 h-10 rounded-full bg-[#2A3495] flex items-center justify-center">
                      <Users size={22} className="text-white" />
                    </div>

                    <h3 className="mt-6 text-[20px] font-medium text-[#1F2A44]">
                      Women’s Club
                    </h3>

                    <p className=" text-[15px] leading-8 text-[#5B6475]">
                      Small groups of 11–20 women meeting regularly to learn,
                      save, and support each other.
                    </p>
                  </div>

                  {/* Card */}
                  <div className="rounded-2xl border border-[#D9DFEA] bg-white p-5">
                    <div className="w-10 h-10 rounded-full bg-[#2A3495] flex items-center justify-center">
                      <Landmark size={22} className="text-white" />
                    </div>

                    <h3 className="mt-6 text-[20px] font-medium text-[#1F2A44]">
                      Women’s Cooperatives
                    </h3>

                    <p className=" text-[15px] leading-8 text-[#5B6475]">
                      Four legally registered cooperatives serving hundreds of
                      members with financial services and training.
                    </p>
                  </div>

                  {/* Card */}
                  <div className="rounded-2xl border border-[#D9DFEA] bg-white p-5">
                    <div className="w-10 h-10 rounded-full bg-[#2A3495] flex items-center justify-center">
                      <Briefcase size={22} className="text-white" />
                    </div>

                    <h3 className="mt-6 text-[20px] font-medium text-[#1F2A44]">
                      Business Centres
                    </h3>

                    <p className=" text-[15px] leading-8 text-[#5B6475]">
                      Women’s Business Centres and Community Learning Centres
                      offering entrepreneurship support.
                    </p>
                  </div>

                  {/* Card */}
                  <div className="rounded-2xl border border-[#D9DFEA] bg-white p-5">
                    <div className="w-10 h-10 rounded-full bg-[#2A3495] flex items-center justify-center">
                      <Leaf size={22} className="text-white" />
                    </div>

                    <h3 className="mt-6 text-[20px] font-medium text-[#1F2A44]">
                      Sustainable Growth
                    </h3>

                    <p className=" text-[15px] leading-8 text-[#5B6475]">
                      Every initiative is designed for long-term independence
                      and community ownership.
                    </p>
                  </div>
                </div>

                {/* Volunteer Banner */}
                <div className="relative overflow-hidden rounded-[10px] mt-10">
                  {/* Background */}
                  <img
                    src="/hero.png"
                    alt="Volunteer"
                    className="w-full h-[420px] object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/65" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <h3 className="text-white text-[48px] leading-tight font-semibold max-w-[700px]">
                      Your Role as a Volunteer
                    </h3>

                    <p className="mt-5 max-w-[760px] text-[17px] leading-8 text-gray-200">
                      You’ll join as a respectful partner—not a savior, but a
                      supporter. Your work alongside Nepali women will amplify
                      their voices and accelerate their impact.
                    </p>

                    <button className="mt-8 bg-[#2A3495] hover:bg-[#1F2875] transition text-white px-10 py-4 rounded-lg text-[16px] font-medium">
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================
          SINGLE RIGHT SIDEBAR
      ========================================= */}
            <aside className="space-y-8">
              {/* Programs */}
              <div className="rounded-2xl border border-[#D9DFEA] bg-[#F8FAFC] overflow-hidden">
                <div className="px-3 py-5 border-b border-[#E2E8F0]">
                  <h3 className="text-[22px] font-medium text-[#1F2A44]">
                    Other available Programs
                  </h3>
                </div>

                <div>
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
                    "Public Interest",
                    "WorkCamps",
                  ].map((program, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-6 py-4 text-[13px] text-[#5B6475] border-b border-[#E2E8F0] hover:bg-white transition"
                    >
                      {program}
                    </button>
                  ))}
                </div>
              </div>

              {/* TESTIMONIALS */}
              <div className="rounded-2xl border border-[#D9DFEA] bg-[#F8FAFC] overflow-hidden px-6 py-5">
                {/* Heading */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-[24px] font-medium text-[#1F2A44]">
                    Testimonials
                  </h2>
                </div>

                {/* Cards */}
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

                        {/* Rating */}
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

                      {/* Text */}
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
            </aside>
          </div>
        </div>
      </section>
      {/*What Will You Do? */}
      <section className="w-full py-8 bg-white">
        <div className=" mx-auto px-4 ">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-[38px] leading-tight font-medium text-[#1F2A44]">
              What Will You Do?
            </h2>

            <p className="mt-2 text-[16px] leading-7 text-[#6B7280] max-w-[1000px]">
              We offer engaging opportunities through Women Empowerment
              Volunteer Programs. Each project is curated in partnership with
              local women and community leaders. Here are some of the ways you
              can help:
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Entrepreneurship Development Volunteer",
                image:
                  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
                desc: "Fuel ambition and innovation. As an entrepreneurship development volunteer, guide women business owners.",
              },
              {
                title: "Women’s Education Volunteer",
                image:
                  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
                desc: "Empower future through women’s education programs. Lead literacy and life-skills sessions.",
              },
              {
                title: "Women’s Education Volunteer",
                image:
                  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
                desc: "Empower future through women’s education programs. Lead literacy and life-skills sessions.",
              },
              {
                title: "Entrepreneurship Development Volunteer",
                image:
                  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
                desc: "Support local women by building confidence and business knowledge through workshops.",
              },
              {
                title: "Women’s Education Volunteer",
                image:
                  "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1200&auto=format&fit=crop",
                desc: "Help young women gain education access and create stronger futures in local villages.",
              },
              {
                title: "Women’s Education Volunteer",
                image:
                  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
                desc: "Create meaningful impact through education, leadership training, and mentoring.",
              },
              {
                title: "Entrepreneurship Development Volunteer",
                image:
                  "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop",
                desc: "Guide aspiring entrepreneurs toward financial independence and sustainable growth.",
              },
              {
                title: "Women’s Education Volunteer",
                image:
                  "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
                desc: "Promote literacy and confidence-building among women and girls in underserved communities.",
              },
              {
                title: "Women’s Education Volunteer",
                image:
                  "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
                desc: "Encourage lifelong learning and empower women through practical education support.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden border border-[#E2E8F0] bg-white hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[200px] object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-3">
                  {/* Meta */}
                  <div className="flex items-center gap-5 text-[#6B7280] text-[14px]">
                    <div className="flex items-center rounded-3xl shadow-md py-1 px-2 gap-2">
                      <Clock3 size={15} />
                      <span>3–24 hours/day</span>
                    </div>

                    <div className="flex items-center gap-2 rounded-3xl shadow-md px-2 py-1">
                      <Users size={15} />
                      <span>2-40 weeks </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-2 text-[18px] leading-[34px] font-medium text-[#1F2A44]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className=" text-[15px] leading-7 text-[#5B6475]">
                    {item.desc}
                  </p>

                  {/* Buttons */}
                  <div className="mt-2 flex gap-4">
                    <button className="flex-1 h-[50px] rounded-[5px] bg-[#312E81] text-white text-[15px] font-medium hover:bg-[#1E1B63] transition">
                      Apply Now
                    </button>

                    <button className="flex-1 h-[50px] rounded-[5px] border border-[#312E81] text-[#312E81] text-[15px] font-medium hover:bg-[#EEF2FF] transition">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-16 bg-white">
        {/* Skills Section */}
        <div className="mb-6">
          <h2 className="text-4xl md:text-[38px]  text-[#1F2432] mb-4">
            Skills, Requirements & Who Can Join
          </h2>

          <p className="text-gray-600 text-[16px] leading-7">
            We’re looking for passionate individuals ready to make a difference.
            Here’s what you need to know.
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

              <p className="text-gray-600 leading-7 text-[15px]">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-[#2D3192] hover:bg-[#232777] text-white px-10 py-3 rounded-lg font-medium shadow-md transition">
            Join Today
          </button>
        </div>
      </section>
      {/*volunteer section */}
      <section className="w-full bg-[#283449] py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-white text-[42px] md:text-[38px] leading-[54px] ">
              Life as a Volunteer: What to Expect
            </h2>
          </div>

          {/* CONTENT GRID */}
          <div className="space-y-14">
            {/* ROW 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/hero.png"
                  alt="Volunteer Life"
                  className="w-full h-[230px] object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-white text-[30px] leading-[42px] font-medium mb-2">
                  Cultural Immersion
                </h3>

                <p className="text-[#D5DBE7] text-[16px] leading-[25px]">
                  You’ll stay in a Nepali homestay or shared volunteer house.
                  That means early mornings to market runs, festivals, and
                  community life. Expect to eat dal-bhat, learn how to tie a
                  sari, and greet elders with a “Namaste.” You’ll be invited to
                  weddings, rice planting days, or local puja ceremonies— this
                  is the heart of the experience.
                </p>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Text */}
              <div>
                <h3 className="text-white text-[30px] leading-[42px] font-medium mb-2">
                  Language & Learning
                </h3>

                <p className="text-[#D5DBE7] text-[16px] leading-[25px]">
                  Don’t worry if you don’t speak Nepali. You’ll learn key
                  phrases and local customs from the moment you arrive. Our team
                  provides orientation, and your host family will teach you the
                  rest.
                </p>
              </div>

              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/hero.png"
                  alt="Language and Learning"
                  className="w-full h-[230px] object-cover"
                />
              </div>
            </div>

            {/* ROW 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/hero.png"
                  alt="Support Every Step"
                  className="w-full h-[230px] object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-white text-[30px] leading-[42px] font-medium mb-2">
                  Support Every Step
                </h3>

                <ul className="space-y-1 text-[#D5DBE7] text-[16px] leading-[25px]">
                  <li>
                    • Pre-departure orientation (WhatsApp, calls, or email)
                  </li>
                  <li>• Airport pickup and on-arrival training</li>
                  <li>
                    • Daily support from on-site staff and coordinators (24/7)
                  </li>
                  <li>
                    • Weekly check-ins and biweekly group meetings with other
                    volunteers
                  </li>
                  <li>• Health, safety, and emergency support</li>
                  <li>• Mentorship from local leaders and ViN senior staff</li>
                </ul>

                <button className="mt-4 text-white underline underline-offset-4 hover:text-[#AFC8FF] transition">
                  Explore Our Accommodation and Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Fees Section */}
      <section className="w-full bg-white py-20 ">
        <div className=" mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-[40px] md:text-[38px] leading-[52px]  text-[#1F2432] mb-2">
              Program Fees & What’s Included
            </h2>

            <p className="text-[#6B7280] text-[16px] leading-[28px]  mx-auto">
              ViN is a nonprofit. Your program fees allocated directly to
              project costs, including your room, meals, and local staff
              salaries. Here’s what you get:
            </p>
          </div>

          {/* Content Box */}
          <div className="rounded-2xl border border-[#D9DEE8] bg-[#F7F8FA] p-8 md:p-10">
            <div className="space-y-6">
              {[
                {
                  icon: "🛡️",
                  text: "Secure placement and daily supervision",
                },
                {
                  icon: "🧭",
                  text: "Pre-departure info pack and training",
                },
                {
                  icon: "🚕",
                  text: "Airport pickup and all arrival logistics",
                },
                {
                  icon: "🏠",
                  text: "Homestay or shared house accommodation",
                },
                {
                  icon: "🍽️",
                  text: "Three healthy meals per day",
                  sub: "(with special diets respected)",
                },
                {
                  icon: "🙋🏻",
                  text: "In-country support and language lessons",
                },
                {
                  icon: "🌍",
                  text: "A supportive community of staff, local leaders, and fellow volunteers",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="text-[22px] leading-none mt-[2px]">
                    {item.icon}
                  </div>

                  {/* Text */}
                  <p className="text-[18px] leading-[30px] text-[#374151]">
                    {item.text}{" "}
                    {item.sub && (
                      <span className="text-[#6B7280] text-[15px]">
                        {item.sub}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/*Trusted volunteeer section*/}
      <section className="w-full bg-white py-5 px-6 md:px-10">
        <div className=" mx-auto">
          {/* =========================
        HEADING
    ========================== */}
          <div className="mb-8">
            <h2 className="text-[38px] md:text-[38px] leading-[42px]  text-[#1F2432] mb-2">
              True Stories from Our Volunteers
            </h2>

            <p className="text-[#6B7280] text-[16px] leading-[28px]">
              Hear from volunteers who’ve experienced the transformative power
              of women’s empowerment work in Nepal.
            </p>
          </div>

          {/* =========================
        TESTIMONIAL SLIDER
    ========================== */}
          <div className="relative overflow-hidden rounded-xl group">
            {/* Background Image */}
            <img
              src="/hero.png"
              alt="Volunteer Story"
              className="w-full h-[520px] object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
              {/* Carousel Buttons */}
              <div className="flex justify-end gap-3">
                {/* Previous */}
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
                >
                  ←
                </button>

                {/* Next */}
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
                >
                  →
                </button>
              </div>

              {/* Bottom Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-30 items-end">
                {/* Left Side */}
                <div>
                  <h3 className="text-white text-[42px] font-semibold leading-none mb-2">
                    {stories[current].name}
                  </h3>

                  <p className="text-white/80 text-[15px]">
                    {stories[current].country}
                  </p>
                </div>

                {/* Right Side */}
                <div className="md:max-w-[700px]">
                  {/* Stars */}
                  <div className="flex items-center gap-40 mb-4">
                    {/* Role */}
                    <h4 className="text-white text-[20px] font-semibold">
                      {stories[current].role}
                    </h4>

                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          className="text-yellow-400 text-[18px]"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Review */}
                  <p className="text-white/90 text-[15px] leading-[28px]">
                    {stories[current].review}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-20 px-6 md:px-10">
        <div>
          {/* FAQ SECTION */}
          <div className="mt-20">
            {/* Heading */}
            <div className="mb-10">
              <h2 className="text-[38px] font-medium text-[#1f2a44] leading-none mb-3">
                Frequently Asked Questions
              </h2>

              <p className="text-[16px] leading-[28px] text-[#6b7280]">
                Starting your volunteer journey is simple. Follow these easy
                answers to understand the program better.
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
      </section>
    </main>
  );
}
