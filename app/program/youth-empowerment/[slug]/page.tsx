"use client";
import ChooseImpact from "@/app/components/ChooseImpact";
import OurTeam from "@/app/components/OurTeam";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import LatestNews from "@/app/components/news";
import Articles from "@/app/components/articles";
import {
  Heart,
  MessageCircle,
  Plus,
  Star,
  Users,
  CalendarDays,
  Globe,
  Accessibility,
  HeartHandshake,
  ShieldCheck,
  FileText,
  Plane,
  Home,
  UtensilsCrossed,
  Headphones,
  Sprout,
  Leaf,
  Briefcase,
  Landmark,
  Clock3,
} from "lucide-react";
const program = [
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
const features = [
  {
    icon: <ShieldCheck size={22} />,
    text: "Secure placement and daily supervision",
  },
  {
    icon: <FileText size={22} />,
    text: "Pre-departure info pack and training",
  },
  {
    icon: <Plane size={22} />,
    text: "Airport pick-up and all arrival logistics",
  },
  {
    icon: <Home size={22} />,
    text: "Homestay or shared house accommodation",
  },
  {
    icon: <UtensilsCrossed size={22} />,
    text: "Three healthy meals per day (with diet options)",
  },
  {
    icon: <Headphones size={22} />,
    text: "In-country support and language lessons",
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
const cards = [
  {
    icon: <Users size={26} />,
    title: "All Genders Welcome",
    description:
      "We welcome volunteers of all gender identities who are passionate about women's empowerment.",
  },
  {
    icon: <CalendarDays size={26} />,
    title: "Ages 18+",
    description:
      "Volunteers aged 16-17 can join with guardian consent and supervision.",
  },
  {
    icon: <Globe size={26} />,
    title: "Intermediate English",
    description:
      "Ability to communicate effectively in English for training and coordination.",
  },
  {
    icon: <Accessibility size={26} />,
    title: "Physical Ability",
    description:
      "Able to travel to rural areas and participate in community activities.",
  },
];
const programs = [
  {
    title: "Entrepreneurship Development Volunteer",
    description:
      "Fuel ambition and innovation as an entrepreneurship volunteer. Help rural women build business plans,...",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Women's Education Volunteer",
    description:
      "Empower future leaders through education programs. Lead literacy and life skill sessions for mothers and girls",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Microfinance & Cooperatives",
    description:
      "Join our community cooperatives to help manage micro-loan systems. Assist women in achieving financial...",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  },
];
const steps = [
  {
    number: "01",
    title: "Apply Online",
    description:
      "Complete our simple online application form with your details and program preferences.",
  },
  {
    number: "02",
    title: "Submit Documents",
    description:
      "Send us your CV and two references (professional or academic).",
  },
  {
    number: "03",
    title: "Receive Confirmation",
    description:
      "We'll review your application and send confirmation within 3-5 business days.",
  },
  {
    number: "04",
    title: "Pay Booking Fee",
    description:
      "Secure your placement with a €150 booking fee to reserve your spot.",
  },
  {
    number: "05",
    title: "Get Pre-Departure Pack",
    description:
      "Receive comprehensive information about your program, packing list, and preparation tips.",
  },
  {
    number: "06",
    title: "Pay Balance & Arrive",
    description:
      "Pay remaining balance before arrival. We'll pick you up at the airport and your journey begins!",
  },
];
const stats = [
  {
    number: "26,610",
    label: "Total Beneficiaries",
    icon: "✣",
  },
  {
    number: "5,160",
    label: "Micro-credit Support",
    icon: "🏛",
  },
  {
    number: "12,128",
    label: "Women Educated",
    icon: "🎓",
  },
  {
    number: "3000+",
    label: "Infrastructure Developed",
    icon: "👥",
  },
];

export default function WomenEmpowermentHero() {
  const [openIndex, setOpenIndex] = useState(0);

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % stories.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? stories.length - 1 : prev - 1));

  const nextTrust = () =>
    setTrustSlide((prev) => (prev + 1) % trustVideos.length);
  const prevTrust = () =>
    setTrustSlide((prev) => (prev === 0 ? trustVideos.length - 1 : prev - 1));

  return (
    <main className="bg-white">
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
            <Link
              href="/applyNow"
              className="flex items-center gap-2 bg-[#2A3495] hover:bg-[#1f2875] text-white text-[14px] font-medium px-7 py-3 rounded-md shadow-lg transition justify-center items-center"
            >
              <Plus size={16} />
              Apply for Volunteer
            </Link>

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
      {/* ==========================================
    Project at a Glance
========================================== */}
      <section className="w-full bg-[#FFFFFF] py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="w-full">
            <h3 className="text-[38px] font-medium text-[#0B1F5C] leading-[40px]">
              Project at a Glance
            </h3>

            <p className="mt-5 text-[15px] leading-[28px] text-[#6B7280]">
              It volunteers are children of women’s empowerment volunteer
              programmes that do more than scratch the surface; you’ve found the
              answers here. VHN’s programs are not charity—they are
              partnerships. We work hand-in-hand with local women and families.
              When you leave, your impact remains, because Nepal’s women’s clubs
              and cooperatives continue to run every project, with or without
              outside volunteers.
            </p>

            {/* Stats Card */}
            <div className="mt-10 bg-[#F3F4F5] border border-[#C5C6D2] rounded-[14px] p-8">
              <div className="grid grid-cols-2 gap-y-8 gap-x-10">
                <div>
                  <h3 className="text-[16px] font-semibold text-[#785900]">
                    Rural women’s literacy:
                  </h3>
                  <p className="text-[28px] font-bold text-[#0B1F5C] mt-1">
                    52%
                  </p>
                </div>

                <div>
                  <h3 className="text-[16px] font-semibold text-[#785900]">
                    Girls married before 18:
                  </h3>
                  <p className="text-[28px] font-bold text-[#0B1F5C] mt-1">
                    34%
                  </p>
                </div>

                <div>
                  <h3 className="text-[16px] font-semibold text-[#785900]">
                    Women with financial access:
                  </h3>
                  <p className="text-[28px] font-bold text-[#0B1F5C] mt-1">
                    26%
                  </p>
                </div>

                <div>
                  <h3 className="text-[16px] font-semibold text-[#785900]">
                    Maternal mortality:
                  </h3>
                  <p className="text-[28px] font-bold text-[#0B1F5C] mt-1">
                    151/100,000
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-[#001955] rounded-[20px] p-8 text-white shadow-[0_12px_35px_rgba(0,0,0,0.18)] h-fit self-start">
            <h3 className="text-[28px] leading-[36px] font-bold max-w-[350px]">
              Why is Women’s Empowerment needed?
            </h3>

            {/* Quote */}
            <div className="mt-6 border-l-4 border-[#FACC15] pl-5">
              <p className="text-[15px] leading-[28px] text-[#D1D5DB]">
                “Rural women face low literacy, early marriage, limited
                financial access, and dangerous maternal risks—barriers that
                hold back their potential and their families’ progress.”
              </p>
            </div>

            {/* Features */}
            <div className="mt-8 space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-[#FACC15] flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-[#001955]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>

                <div>
                  <h4 className="font-semibold text-[16px]">Our Approach</h4>

                  <p className="text-[14px] text-[#D1D5DB] mt-1">
                    Holistic support focusing on education, health, and finance.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-[#FACC15] flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-[#001955]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>

                <div>
                  <h4 className="font-semibold text-[16px]">
                    Impactful Projects
                  </h4>

                  <p className="text-[14px] text-[#D1D5DB] mt-1">
                    Locally led initiatives ensuring long-term sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================================
          PROGRAMS
      ====================================== */}
      <section className=" bg-white ">
        <div className=" bg-[#f2f2f2] px-30 py-20 mx-auto text-center">
          {/* Heading */}
          <h3 className="text-3xl md:text-[38px] font-medium text-[#122B6A]">
            Real Impact, Measurable Results
          </h3>

          {/* Subtitle */}
          <p className="text-gray-500 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            This isn’t just about feeling good—this is proven, sustainable
            progress backed by data and driven by the women themselves.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm py-10 px-6 flex flex-col items-center justify-center border-b-4 border-[#B8860B] hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="text-[#B8860B] text-2xl mb-4">{item.icon}</div>

                {/* Number */}
                <h3 className="text-3xl font-bold text-[#122B6A]">
                  {item.number}
                </h3>

                {/* Label */}
                <p className="text-gray-500 text-sm mt-2 text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*What Will You Do? */}
      <section className="w-full bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Top Heading */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h3 className="text-4xl font-bold text-[#001955] mb-4">
                What Will You Do?
              </h3>

              <p className="text-gray-600 max-w-xl leading-relaxed">
                Each project is crafted in partnership with local women and
                community leaders. Here are some of the ways you can make a
                difference.
              </p>
            </div>

            <button className="mt-6 md:mt-0 text-[#001955] font-semibold hover:underline flex items-center gap-2">
              View All Programs ↗
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-[220px] object-cover"
                  />

                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-yellow-400 text-[#001955] text-xs font-semibold px-3 py-1 rounded-full">
                    2-40 weeks
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-medium text-[#001955] leading-snug mb-4">
                    {program.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-4 w-full">
                    <Link
                      href="/applyNow"
                      className="w-1/2 bg-[#001955] text-white py-3 rounded-xm text-sm font-medium hover:bg-[#162f87] transition inline-flex items-center justify-center text-center"
                    >
                      Apply Now
                    </Link>

                    <button className="w-1/2 border border-[#001955] text-[#001955] py-3 rounded-xm text-sm font-medium hover:bg-[#001955] hover:text-white transition">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*Skills section */}
      <section className="w-full  bg-white py-20 px-6 md:px-14">
        <div className=" mx-auto bg-[#F8F9FA] rounded-sm py-16 px-6 md:px-10">
          {/* Heading */}
          <h3 className="text-center text-[30px] font-bold text-[#001955] mb-8">
            Skills, Requirements & Who Can Join
          </h3>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Top Cards */}
            {cards.slice(0, 3).map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#F2F4FA] flex items-center justify-center text-[#001955] mb-8">
                  {card.icon}
                </div>

                <h3 className="text-[22px] font-bold text-[#2A2A2A] mb-2">
                  {card.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed max-w-[260px]">
                  {card.description}
                </p>
              </div>
            ))}

            {/* Bottom Left Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-[#F2F4FA] flex items-center justify-center text-[#001955] mb-8">
                {cards[3].icon}
              </div>

              <h3 className="text-[22px] font-bold text-[#2A2A2A] mb-4">
                {cards[3].title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed max-w-[260px]">
                {cards[3].description}
              </p>
            </div>

            {/* Blue CTA Card */}
            <div className="md:col-span-2 bg-[#001955] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
              {/* Left Content */}
              <div className="max-w-xl">
                <h3 className="text-white text-[30px] font-medium mb-2">
                  No Experience Required?
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  We provide full training and orientation. Your enthusiasm and
                  commitment matter most!
                </p>

                <button className="bg-[#FFC400] hover:bg-yellow-400 transition text-[#001955] font-semibold px-8 py-4 rounded-md text-lg">
                  Join the Journey
                </button>
              </div>

              {/* Right Icon */}
              <div className="hidden md:flex text-[#1B377A]">
                <HeartHandshake size={140} strokeWidth={1.4} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Program Fees section */}
      <section className="w-full bg-white py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto border border-gray-300 rounded-[36px] overflow-hidden grid grid-cols-1 lg:grid-cols-[420px_1fr]">
          {/* Left Blue Section */}
          <div className="bg-[#001955] px-10 py-14 md:px-12 flex flex-col justify-center">
            <h3 className="text-white text-[30px] font-semibold leading-tight mb-4">
              Program Fees & <br />
              What&apos;s Included
            </h3>

            <p className="text-gray-300 leading-relaxed text-lg mb-6 ">
              VIN is a non-profit organization. Your program fees go directly to
              project costs including housing, meals, and local staff salaries.
              Here&apos;s what you get:
            </p>

            <button className="bg-white text-[#001955] font-semibold px-8 py-4 rounded-xl w-fit hover:bg-gray-100 transition">
              View Fee Structure
            </button>
          </div>

          {/* Right Features Section */}
          <div className="bg-white px-10 py-20 md:px-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-14">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="text-[#9A6B00] mt-1">{item.icon}</div>

                  {/* Text */}
                  <p className="text-[#2D2D2D] text-[18px] leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
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
      {/*How to apply section*/}
      <section className="w-full bg-white py-20 px-6 md:px-12">
        <div className="mmx-auto bg-[#0B1F5C] rounded-[22px] px-10 md:px-20 py-16">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-white text-[38px] font-medium mb-2">
              How to Apply
            </h2>

            <p className="text-gray-300 text-lg">
              Starting your volunteer journey is simple. Follow these six easy
              steps to join us in Nepal.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-16">
            {steps.map((step, index) => (
              <div key={index}>
                {/* Number */}
                <h2 className="text-[#09B0EE4D] text-5xl font-bold leading-none mb-2">
                  {step.number}
                </h2>

                {/* Title */}
                <h3 className="text-white text-[25px] font-medium mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-base max-w-sm">
                  {step.description}
                </p>
              </div>
            ))}
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
      {/*Gallery section*/}
      <section className="w-full bg-white py-16 px-4 md:px-6">
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
            <div className="relative h-full flex items-end justify-end">
              <img
                src="/images/kids.png"
                alt="Children"
                className="w-full max-w-[420px] object-contain"
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
      {/* Volunteer Program Section */}
      <section className="relative w-full overflow-hidden rounded-sm  pt-10 pb-16 md:pb-24 pt-16">
        {/* Background Image */}
        <img
          src="/hero.png"
          alt="Sponsor a Child"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Left Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex items-center h-full px-10">
          <div className=" text-white">
            {/* Heading */}
            <h2 className="text-[38px] leading-[60px] font-medium mb-4">
              Sponsor a Child, Change a Life
            </h2>

            {/* Description */}
            <p className="text-[14px] leading-[24px] text-gray-200 mb-6 max-w-[470px]">
              Your sponsorship provides education, healthcare, and essential
              support to children in Nepal who need it most. Give a child the
              opportunity to learn, grow, and build a brighter future.
            </p>

            {/* List */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-[17px] font-medium">
                <span className="w-2 h-2 rounded-full bg-white" />
                Education & Learning
              </li>

              <li className="flex items-center gap-3 text-[17px] font-medium">
                <span className="w-2 h-2 rounded-full bg-white" />
                Health & Wellbeing
              </li>

              <li className="flex items-center gap-3 text-[17px] font-medium">
                <span className="w-2 h-2 rounded-full bg-white" />
                Empowerment & Opportunity
              </li>
            </ul>

            {/* Button */}
            <button className="bg-[#1F2B6C] hover:bg-[#1F2B6C] transition-all duration-300 text-white text-[14px] font-medium px-6 py-3 rounded-md shadow-lg">
              Help a child today!
            </button>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center py-12 px-4 bg-white">
        <div className="w-full max-w-4xl bg-[#2E3192] rounded-md overflow-hidden px-8 py-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <div className="text-white pt-2">
              <h2 className="text-[34px] leading-[48px] font-medium mb-4">
                Ready to Start Your Journey?
              </h2>

              <p className="text-[13px] leading-[22px] text-[#d9ddff] max-w-[320px] mb-8">
                Have questions? Want to discuss which program is right for you?
                Our team is here to help. Reach out today and let’s start the
                conversation.
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

                <p className="text-[13px] text-[#e4e7ff]">Support@vin.org.np</p>
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
      </section>
    </main>
  );
}
