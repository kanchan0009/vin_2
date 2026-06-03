"use client";
import ChooseImpact from "@/app/components/ChooseImpact";
import OurTeam from "@/app/components/OurTeam";
import DonateSection from "./components/DonateSection";
import FaqSection from "@/app/components/FaqSection";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Volume2,
  Users,
  PlusCircle,
  UserPlus,
  Building,
  UserCheck,
  Leaf,
  User,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import LatestNews from "./components/news";
import Aricles from "./components/articles";
import VolunteerPathways from "./components/VolunteerPathways";
import FeaturedProjects from "./components/FeaturedProjects";

const heroSlides = [
  {
    image: "/hero.png",
    title: "Women’s Empowerment",
    description:
      "We equip rural women with non-formal education, life skills, entrepreneurship support, microcredit access, and leadership training — helping them rise, earn, and live with confidence and dignity.",
  },
  {
    image: "/trust-video.jpg",
    title: "Children Development",
    description:
      "Providing quality education and healthcare to children, ensuring they grow up in a safe, nurturing environment with equal opportunities for a brighter future.",
  },
  {
    image: "/images/volunteer.jpg",
    title: "Youth Empowerment",
    description:
      "Empowering young people through skill development, vocational training, and leadership programs to become independent and active members of society.",
  },
  {
    image: "/images/kids.png",
    title: "Public Health",
    description:
      "Enhancing community health through medical camps, hygiene education, and sustainable sanitation projects for a healthier tomorrow.",
  },
  {
    image: "/images/donate.jpg",
    title: "Community Development",
    description:
      "Working hands-on with local communities to build infrastructure, support agriculture, and create sustainable livelihoods for everyone.",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const volunteerRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);

  const scrollImpact = (dir: "left" | "right") => {
    if (impactRef.current) {
      const scrollAmount = impactRef.current.clientWidth;
      impactRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

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
    {
      image: "/images/kids.png",
      name: "Asha Gurung",
      description:
        "From classroom volunteer to community leader — a story of lasting change.",
    },
    {
      image: "/images/donate.jpg",
      name: "Ramesh Tamang",
      description:
        "How small infrastructure projects transformed village life.",
    },
  ];

  const volunteers = [
    {
      name: "Kelly Anne Lister",
      country: "Australia",
      role: "Teacher",
      image: "/hero.png",
      from: "01/02/2025",
      to: "01/03/2025",
    },
    {
      name: "Baker Kumar Sah",
      country: "Nepal",
      role: "Coordinator",
      image: "/hero.png",
      from: "03/04/2025",
      to: "03/06/2025",
    },
    {
      name: "Maya Shrestha",
      country: "Nepal",
      role: "Health Volunteer",
      image: "/hero.png",
      from: "05/06/2025",
      to: "05/08/2025",
    },
    {
      name: "James Miller",
      country: "United Kingdom",
      role: "Youth Mentor",
      image: "/hero.png",
      from: "07/09/2025",
      to: "07/11/2025",
    },
    {
      name: "Sara Lopez",
      country: "Spain",
      role: "Environment Lead",
      image: "/hero.png",
      from: "09/10/2025",
      to: "09/12/2025",
    },
    {
      name: "Liu Wei",
      country: "China",
      role: "Program Volunteer",
      image: "/hero.png",
      from: "11/01/2026",
      to: "11/03/2026",
    },
  ];

  const volunteerTestimonials = [
    {
      quote:
        "Volunteering with VIN completely transformed the way I see community development. The staff were incredibly supportive, and the projects truly made a real impact.",
      name: "Baker Kumar Sah",
      country: "Nepal",
      image: "/hero.png",
    },
    {
      quote:
        "I learned more in a few weeks than I ever expected. The hands-on experience was invaluable.",
      name: "Kelly Anne Lister",
      country: "Australia",
      image: "/hero.png",
    },
    {
      quote:
        "Working with local communities taught me how meaningful small actions can be when coordinated well.",
      name: "Maya Shrestha",
      country: "Nepal",
      image: "/hero.png",
    },
    {
      quote:
        "The program helped me grow as a leader and allowed me to contribute to real improvements in village life.",
      name: "James Miller",
      country: "United Kingdom",
      image: "/hero.png",
    },
    {
      quote:
        "An unforgettable experience — I made friends, learned skills, and helped deliver projects that matter.",
      name: "Sara Lopez",
      country: "Spain",
      image: "/hero.png",
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  const nextTrust = () =>
    setTrustSlide((prev) => (prev + 1) % trustVideos.length);
  const prevTrust = () =>
    setTrustSlide((prev) => (prev === 0 ? trustVideos.length - 1 : prev - 1));

  return (
    <main className="min-h-screen bg-[#ffffff] text-zinc-950">
      {/*hero section*/}
      <section className="w-full  overflow-hidden">
        {/* Top Image */}
        <div className="w-full relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden group">
          <img
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            className="w-full h-[220px] sm:h-[260px] md:h-[280px] lg:h-[400px] object-cover transition-all duration-500"
          />

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-[#2F3C97] p-2 rounded-full shadow-md transition-opacity duration-300 z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-[#2F3C97] p-2 rounded-full shadow-md transition-opacity duration-300 z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col md:flex-row justify-between gap-6 px-6 md:px-10 py-6 md:py-8 min-h-[160px]">
          {/* Left Side */}
          <div className="flex-1">
            <h2 className="text-[28px] md:text-[42px] leading-tight  text-[#2D3448] transition-all duration-300">
              {heroSlides[currentSlide].title}
            </h2>

            {/* Slider Dots */}
            <div className="flex items-center gap-2 mt-4">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${currentSlide === index
                    ? "w-8 h-[5px] bg-[#2F3C97]"
                    : "w-[6px] h-[6px] bg-[#CFCFD4]"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex flex-col justify-between items-start gap-4">
            <p className="text-[#4A5568] text-[15px] md:text-[18px] leading-[1.8] font-normal transition-all duration-300">
              {heroSlides[currentSlide].description}
            </p>
            <Link
              href={
                heroSlides[currentSlide].title === "Women’s Empowerment"
                  ? "/program/women-empowerment"
                  : heroSlides[currentSlide].title === "Children Development"
                    ? "/program/children-development"
                    : heroSlides[currentSlide].title === "Youth Empowerment"
                      ? "/program/youth-empowerment"
                      : heroSlides[currentSlide].title === "Public Health"
                        ? "/program/health"
                        : "/program"
              }
              className="inline-flex items-center gap-2 bg-[#2F3C97] hover:bg-[#25307d] transition-all duration-300 text-white text-[14px] font-medium px-6 py-2.5 rounded-[4px] shadow-sm mt-2"
            >
              Learn More &rarr;
            </Link>
          </div>
        </div>
      </section>
      {/* our-story our-approach section */}
      <section className="w-full bg-[#F1F2FB] py-20 md:py-24 px-6">
        <div className=" mx-auto text-center">
          {/* Heading */}
          <h2 className="text-[#2D3448] text-[28px] sm:text-[32px] md:text-[36px] leading-[1.3] font-serif font-medium">
            A leader in implementing a complete holistic and integrated
            <br className="hidden md:block" />
            Approach to Community Development in Nepal
          </h2>

          {/* Description */}
          <p className="mt-6 text-[#6B7280] text-[15px] md:text-[16px] leading-[1.8] max-w-4xl mx-auto">
            At our core, we strive to foster holistic, inclusive and equitable development in Nepal. Together, we envision a<br className="hidden md:block" /> future where every community thrives through collaboration and empowerment.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex justify-center">
            <Link href="/about/our-story">
              <button className="bg-[#5C6BC0] hover:bg-[#4e5caa] transition-all duration-300 text-white text-[15px] font-medium px-8 py-2.5 rounded-[6px]">
                Our Story
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/*Certifiations and Affiliations*/}
      <section className="w-full py-10 md:py-12">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Heading */}
          <h2 className="text-[#2D3448] text-[26px] md:text-[36px] leading-tight font-serif font-normal">
            Recognition, Membership & Affiliation
          </h2>

          {/* Button */}
          <Link
            href="/affiliation"
            className="w-fit bg-[#2F3C97] hover:bg-[#25307d] transition-all duration-300 text-white text-[13px] font-medium px-7 py-3 rounded-[4px] shadow-md inline-block"
          >
            View all
          </Link>
        </div>

        {/* Logos */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center gap-y-10 gap-x-8">
          <div className="flex items-center justify-center">
            <img
              src="/crtified.png"
              alt="European Commission"
              className="h-[70px] object-contain"
            />
          </div>

          <div className="flex items-center justify-center">
            <img
              src="/crtified.png"
              alt="Logo"
              className="h-[70px] object-contain"
            />
          </div>

          <div className="flex items-center justify-center">
            <img
              src="/crtified.png"
              alt="Logo"
              className="h-[70px] object-contain"
            />
          </div>

          <div className="flex items-center justify-center">
            <img
              src="/crtified.png"
              alt="Forum"
              className="h-[70px] object-contain"
            />
          </div>

          <div className="flex items-center justify-center">
            <img
              src="/crtified.png"
              alt="CCIVS"
              className="h-[70px] object-contain"
            />
          </div>

          <div className="flex items-center justify-center">
            <img
              src="/crtified.png"
              alt="NVDA"
              className="h-[70px] object-contain"
            />
          </div>
        </div>
      </section>
      {/*content section*/}
      <section className="w-full  px-6 md:px-10 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Content */}
          <div>
            {/* Who We Are */}
            <h2 className="text-[#2D3448] text-[30px] md:text-[36px] leading-tight font-serif font-normal">
              Who we are
            </h2>

            <p className="mt-5 text-[#4B5563] text-[14px] md:text-[17px] leading-[1.9]">
              <span className="font-semibold">
                Volunteer Initiative Nepal (VIN)
              </span>{" "}
              is a nonprofit organization dedicated to empowering marginalized
              communities through meaningful volunteer service. We bring
              together passionate people from around the world to create{" "}
              <span className="font-semibold">
                sustainable, long-term change in Nepal’s most underserved
                regions.
              </span>
            </p>

            {/* Our Approach */}
            <h2 className="mt-4 text-[#2D3448] text-[30px] md:text-[38px] leading-tight font-serif font-normal">
              Our Approach
            </h2>

            <p className="mt-2 text-[#4B5563] text-[14px] md:text-[16px] leading-[1.95]">
              VIN’s approach is rooted in the community. With local leaders we
              identify priorities and co-design plans that residents lead. Our
              “House of VIN” rests on four pillars – Education, Health &
              Environment, Economy and Infrastructure – so learning, health,
              income and services advance together. Six empowerment programmes
              drive this work: women’s empowerment, children’s development,
              youth empowerment, public health & medical care, environment
              conservation and disaster risk reduction.
            </p>

            <p className="mt-2 text-[#4B5563] text-[14px] md:text-[16px] leading-[1.95]">
              Local and international volunteers work with our Nepali team to
              deliver training, mentoring and practical support linking
              households, schools, health posts and villages. We integrate
              gender equality, social inclusion, safeguarding and climate-smart
              practice and track progress through reviews. All programmes align
              with local plans and the UN Sustainable Development Goals, turning
              volunteer in Nepal energy into lasting change that endures after
              VIN exits a community.
            </p>
            {/* Button */}
            <div className="flex justify-start">
              <Link href="/about/our-approach">
                <button className="mt-8 bg-[#2F3C97] hover:bg-[#25307d] transition-all duration-300 text-white text-[14px] font-medium px-8 py-3 rounded-[4px] shadow-md">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/pillar.png"
              alt="House of VIN"
              className="w-full max-w-[620px] h-[600px] object-contain"
            />
          </div>
        </div>


      </section>
      {/* Our Impact section */}
      <section className="w-full bg-[#FAFAFA] px-6 md:px-10 py-16 md:py-20 text-center relative overflow-hidden">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="bg-[#EEF2FF] text-[#2F3C97] text-[13px] font-medium px-4 py-1.5 rounded-full inline-block">
            Make a Difference
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[#1F2937] text-[32px] md:text-[40px] leading-tight font-serif font-bold">
          Our Impact in Numbers
        </h2>
        <p className="mt-3 text-[#6B7280] text-[15px] md:text-[16px] max-w-2xl mx-auto mb-12">
          Every number represents a life changed, a community strengthened, and hope restored.
        </p>

        {/* Big Center Card */}
        <div className="flex justify-center mb-16 relative z-10">
          <div className="bg-white rounded-[16px] shadow-[0px_10px_40px_rgba(0,0,0,0.06)] border border-[#F3F4F6] flex flex-col items-center justify-center p-8 w-full max-w-[340px]">
            <div className="bg-[#EEF2FF] p-4 rounded-xl mb-6">
              <Users className="w-8 h-8 text-[#2F3C97]" />
            </div>
            <h3 className="text-[#2F3C97] text-[36px] md:text-[44px] font-bold tracking-tight">
              3,70,000 +
            </h3>
            <p className="text-[#1F2937] text-[16px] font-bold mt-2">People Impacted</p>
            <p className="text-[#6B7280] text-[13px] mt-1">Lives transformed through our programs</p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative  mx-auto group">
          {/* Left Button */}
          <button
            onClick={() => scrollImpact("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 bg-white rounded-full shadow-[0px_4px_12px_rgba(0,0,0,0.1)] border border-[#F3F4F6] flex items-center justify-center z-10 text-[#6B7280] hover:text-[#2F3C97] transition-all focus:outline-none"
            aria-label="Previous impact"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards Scrollable Area */}
          <div
            ref={impactRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-4"
          >
            {[
              {
                icon: <PlusCircle className="w-6 h-6 text-[#2F3C97]" />,
                number: "150,008+",
                title: "Health Supported",
                desc: "Communities with healthcare access",
              },
              {
                icon: <UserPlus className="w-6 h-6 text-[#2F3C97]" />,
                number: "65,513+",
                title: "Children Supported",
                desc: "Young lives nurtured and educated",
              },
              {
                icon: <Building className="w-6 h-6 text-[#2F3C97]" />,
                number: "3,000+",
                title: "Infrastructure Built",
                desc: "Schools, clinics & community centers",
              },
              {
                icon: <UserCheck className="w-6 h-6 text-[#2F3C97]" />,
                number: "6,000+",
                title: "Volunteers Deployed",
                desc: "Dedicated individuals making change",
              },
              {
                icon: <Leaf className="w-6 h-6 text-[#2F3C97]" />,
                number: "63,287+",
                title: "Environmental Benefits",
                desc: "Trees planted & areas conserved",
              },
              {
                icon: <User className="w-6 h-6 text-[#2F3C97]" />,
                number: "4,126+",
                title: "Youth Benefited",
                desc: "Skills and opportunities provided",
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-[#2F3C97]" />,
                number: "3,000+",
                title: "Disaster Risk Reduced",
                desc: "Communities prepared and safe",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="min-w-[260px] md:min-w-[280px] lg:min-w-[300px] flex-1 bg-white rounded-[6px] shadow-[0px_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0px_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 border border-[#F9FAFB] flex flex-col items-center justify-center p-6 snap-center"
              >
                <div className="bg-[#EEF2FF] p-3 rounded-lg mb-5">
                  {item.icon}
                </div>
                <h4 className="text-[#2F3C97] text-[28px] md:text-[32px] font-bold">
                  {item.number}
                </h4>
                <p className="text-[#1F2937] text-[14px] font-bold mt-1">
                  {item.title}
                </p>
                <p className="text-[#6B7280] text-[12px] mt-1 text-center">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scrollImpact("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 bg-white rounded-full shadow-[0px_4px_12px_rgba(0,0,0,0.1)] border border-[#F3F4F6] flex items-center justify-center z-10 text-[#6B7280] hover:text-[#2F3C97] transition-all focus:outline-none"
            aria-label="Next impact"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
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

              <Link href="/program" className="inline-block">
                <button className="mt-8 bg-white text-[#2A3495] font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition cursor-pointer">
                  See Programs
                </button>
              </Link>
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

      {/* Volunteer Pathways Section */}
      <VolunteerPathways />

      {/* Featured Projects Section */}
      <FeaturedProjects />

      <OurTeam />
      {/* Map and Cards Section */}
      <section className="w-full bg-[#FAFAFA] py-16 md:py-20 px-6 md:px-10 overflow-hidden">
        <div className=" mx-auto">
          {/* Top Row: Info and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="text-left">
              <span className="bg-[#EEF2FF] text-[#2F3C97] text-[13px] font-medium px-4 py-1.5 rounded-full inline-block mb-4">
                Our Impact Areas
              </span>
              <h2 className="text-[#1F2937] text-[32px] md:text-[40px] leading-tight font-serif font-bold mb-4">
                Where we work
              </h2>
              <p className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed max-w-lg">
                We place volunteers in communities to support local efforts,
                empowering residents to create positive change and improve quality
                of life through collaboration and meaningful service.
              </p>
            </div>

            {/* Right Map */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/nepal-map.png"
                alt="Nepal Map"
                className="w-full max-w-[500px] object-contain"
              />
            </div>
          </div>

          {/* Cards Carousel Container */}
          <div className="relative w-full group">
            {/* Left Arrow */}
            <button
              onClick={() => {
                const el = document.getElementById("location-carousel");
                if (el) el.scrollBy({ left: -350, behavior: "smooth" });
              }}
              className="absolute left-0 top-[40%] -translate-x-4 md:-translate-x-6 z-20 w-10 h-10 rounded-full bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] border border-[#F3F4F6] flex items-center justify-center text-[#6B7280] hover:text-[#2F3C97] transition-all focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Cards Scrollable Area */}
            <div
              id="location-carousel"
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] text-left"
            >
              {[
                {
                  title: "Kathmandu Valley",
                  location: "Kathmandu Metropolitan City",
                  description: "Urban development programs focusing on education and healthcare access for underserved communities.",
                  image: "/location.png",
                  link: "/about/location/kathmandu"
                },
                {
                  title: "Chitwan District",
                  location: "Bharatpur Metropolitan City",
                  description: "Rural empowerment initiatives supporting women entrepreneurs and sustainable agriculture.",
                  image: "/location.png",
                  link: "/about/location/okhaldhunga"
                },
                {
                  title: "Pokhara Region",
                  location: "Pokhara Metropolitan City",
                  description: "Youth skill development and environmental conservation programs in the Annapurna region.",
                  image: "/location.png",
                  link: "/about/location/nuwakot"
                }
              ].map((loc, idx) => (
                <div
                  key={idx}
                  className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start bg-white rounded-[12px] shadow-[0px_4px_24px_rgba(0,0,0,0.06)] border border-[#F9FAFB] flex flex-col overflow-hidden hover:shadow-[0px_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative w-full h-[200px]">
                    <img
                      src={loc.image}
                      alt={loc.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-[#1F2937] text-[20px] font-serif font-semibold mb-1">
                      {loc.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[#6B7280] text-[13px] mb-4">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {loc.location}
                    </div>
                    <p className="text-[#6B7280] text-[14px] leading-relaxed mb-6 flex-1">
                      {loc.description}
                    </p>
                    <div>
                      <Link
                        href={loc.link}
                        className="flex items-center gap-2 text-[#5C6BC0] text-[14px] font-medium hover:text-[#4e5caa] transition-colors"
                      >
                        <h4 className="text-[14px] font-medium hover:text-[#4e5caa] transition-colors text-blue">Learn more</h4><ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => {
                const el = document.getElementById("location-carousel");
                if (el) el.scrollBy({ left: 350, behavior: "smooth" });
              }}
              className="absolute right-0 top-[40%] translate-x-4 md:translate-x-6 z-20 w-10 h-10 rounded-full bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] border border-[#F3F4F6] flex items-center justify-center text-[#6B7280] hover:text-[#2F3C97] transition-all focus:outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
      {/* Choose Impact Section */}
      <ChooseImpact />
     
      {/* Review Section */}
      <section className="py-20 bg-[#F1F2FB] bg-opacity-50 px-6 md:px-10 text-center">
        <div className=" mx-auto">
          {/* Top Info */}
          <div className="mb-10 flex flex-col items-center">
            <span className="bg-[#EEF2FF] text-[#2F3C97] text-[13px] font-medium px-4 py-1.5 rounded-full inline-block mb-4">
              Trusted & Verified
            </span>
            <h2 className="text-[#1F2937] text-[32px] md:text-[40px] leading-tight font-serif font-bold mb-4">
              Rated by Those We've Helped
            </h2>
            <p className="text-[#6B7280] text-[15px] md:text-[16px] max-w-2xl mx-auto">
              Our commitment to transparency and impact is reflected in reviews from trusted platforms worldwide.
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 max-w-[280px] mx-auto mb-8 flex flex-col items-center border border-gray-50">
            <div className="w-12 h-12 bg-[#F3F4F6] rounded-xl flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-[36px] font-bold text-[#1F2937] leading-none">4.4</span>
              <span className="text-[18px] text-[#9CA3AF] font-medium mb-1">/ 5</span>
            </div>
            <div className="flex gap-1 text-[#FBBF24] mb-3">
              {[...Array(4)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
              {/* Hollow star */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <p className="text-[13px] text-[#6B7280] font-medium mb-4">
              <span className="font-bold text-[#1F2937]">208+</span> verified reviews
            </p>
            <div className="bg-[#D1FAE5] text-[#059669] text-[11px] font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 w-full justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Trusted by 200+ verified reviewers
            </div>
          </div>

          {/* Sub Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sub Card 1: Great Nonprofits */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] p-6 text-left flex flex-col justify-between h-[150px] border border-gray-50">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-orange-400 rounded-bl-xl rounded-tr-xl flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                </div>
                <span className="font-bold text-gray-500 text-[14px] uppercase tracking-wide">Great <span className="font-normal text-[11px]">Nonprofits</span></span>
              </div>
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="text-[28px] font-bold text-[#1F2937] leading-none">4.6</span>
                  <div className="flex gap-0.5 text-[#FBBF24]">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                </div>
                <p className="text-[12px] text-[#9CA3AF]">Based on <span className="font-bold text-[#4B5563]">58</span> reviews</p>
              </div>
            </div>

            {/* Sub Card 2: Google Reviews */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] p-6 text-left flex flex-col justify-between h-[150px] border border-gray-50">
              <div className="flex items-center gap-1 mb-2 font-medium text-[12px] text-gray-500">
                <span className="text-blue-500 font-bold text-lg">G</span>
                <span className="text-red-500 font-bold text-lg">o</span>
                <span className="text-yellow-500 font-bold text-lg">o</span>
                <span className="text-blue-500 font-bold text-lg">g</span>
                <span className="text-green-500 font-bold text-lg">l</span>
                <span className="text-red-500 font-bold text-lg">e</span>
                <span className="ml-1 pt-0.5">Reviews</span>
              </div>
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="text-[28px] font-bold text-[#1F2937] leading-none">4.5</span>
                  <div className="flex gap-0.5 text-[#FBBF24]">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                </div>
                <p className="text-[12px] text-[#9CA3AF]">Based on <span className="font-bold text-[#4B5563]">89</span> review</p>
              </div>
            </div>

            {/* Sub Card 3: Go Overseas */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] p-6 text-left flex flex-col justify-between h-[150px] border border-gray-50">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex flex-col text-blue-500 leading-none">
                  <span className="font-bold text-2xl">GO</span>
                </div>
                <div className="flex flex-col">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  <span className="text-[9px] uppercase tracking-wider font-semibold text-blue-400 mt-1">overseas</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="text-[28px] font-bold text-[#1F2937] leading-none">4.3</span>
                  <div className="flex gap-0.5 text-[#FBBF24]">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                </div>
                <p className="text-[12px] text-[#9CA3AF]">Based on <span className="font-bold text-[#4B5563]">34</span> review</p>
              </div>
            </div>

            {/* Sub Card 4: Review Centre */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] p-6 text-left flex flex-col justify-between h-[150px] border border-gray-50">
              <div className="flex flex-col items-start gap-1.5 mb-2">
                <div className="flex gap-1 text-[#FBBF24]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <div className="bg-purple-500 text-white text-[12px] font-bold px-2 py-1 rounded-sm flex relative">
                  review centre
                  <div className="absolute -bottom-1 left-2 w-2 h-2 bg-purple-500 rotate-45"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="text-[28px] font-bold text-[#1F2937] leading-none">4.2</span>
                  <div className="flex gap-0.5 text-[#FBBF24]">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                </div>
                <p className="text-[12px] text-[#9CA3AF]">Based on <span className="font-bold text-[#4B5563]">27</span> review</p>
              </div>
            </div>
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
            <Link href="/media/testimonials">
              <button className="w-fit rounded-md bg-[#1F2B6C] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#3340d0] cursor-pointer">
                View all
              </button>
            </Link>
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
              <ChevronLeft className="h-4 w-4 text-[#5f6b7a]" />
            </button>

            {/* Cards */}
            <div
              ref={volunteerRef}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Card 1 */}
              {volunteerTestimonials.map((t, i) => (
                <div
                  key={i}
                  className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.33px)] shrink-0 snap-start rounded-2xl border border-[#ececec] bg-[#E2E8F0] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                >
                  <p className="text-[14px] leading-7 text-[#5d6470]">
                    {t.quote}
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-11 w-11 rounded-full object-cover"
                    />

                    <div>
                      <h4 className="text-sm font-medium text-[#111827]">
                        {t.name}
                      </h4>
                      <p className="text-xs text-[#8b8b8b]">{t.country}</p>
                    </div>
                  </div>
                </div>
              ))}
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
              <ChevronRight className="h-4 w-4 text-[#5f6b7a]" />
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
                  <Play className="ml-1 h-6 w-6 text-[#4b5563]" />
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
              <Volume2 className="h-5 w-5 text-white" />
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
      <Aricles />
      {/* Volunteer Program / Donate Section */}
      <DonateSection />
      {/*Gallery section*/}
      <section className="w-full bg-white py-20 px-6 md:px-10">
        <div className=" mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="bg-[#EEF2FF] text-[#2F3C97] text-[12px] font-semibold px-4 py-1.5 rounded-full inline-block mb-4">
              Media Library
            </span>
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1F2937] font-serif mb-4">
              Gallery
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#6B7280] max-w-2xl mx-auto">
              Explore our collection of downloads, videos, and photos from our events and activities.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Downloads Card */}
            <Link href="/media/downloads" className="group block bg-white rounded-[16px] shadow-[0_4px_25px_rgb(0,0,0,0.06)] overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex h-[220px] w-full">
                <div className="w-1/2 border-r-[3px] border-white overflow-hidden">
                  <img src="/hero.png" alt="Downloads" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="w-1/2 overflow-hidden">
                  <img src="/hero.png" alt="Downloads" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="p-6 md:p-8 flex items-center justify-between">
                <div>
                  <h3 className="text-[20px] font-bold text-[#1F2937] mb-1 font-serif">Downloads</h3>
                  <p className="text-[#6B7280] text-[13px]">Access reports, brochures, and resources</p>
                </div>
                <div className="text-gray-400 group-hover:text-[#2F3C97] group-hover:translate-x-1 transition-all">
                  <ArrowRight size={20} />
                </div>
              </div>
            </Link>

            {/* Videos Card */}
            <Link href="/media/videos" className="group block bg-white rounded-[16px] shadow-[0_4px_25px_rgb(0,0,0,0.06)] overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex h-[220px] w-full">
                <div className="w-[60%] border-r-[3px] border-white overflow-hidden">
                  <img src="/hero.png" alt="Videos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="w-[40%] overflow-hidden">
                  <img src="/hero.png" alt="Videos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="p-6 md:p-8 flex items-center justify-between">
                <div>
                  <h3 className="text-[20px] font-bold text-[#1F2937] mb-1 font-serif">Videos</h3>
                  <p className="text-[#6B7280] text-[13px]">Watch our latest stories and updates</p>
                </div>
                <div className="text-gray-400 group-hover:text-[#2F3C97] group-hover:translate-x-1 transition-all">
                  <ArrowRight size={20} />
                </div>
              </div>
            </Link>

            {/* Photos Card */}
            <Link href="/media/photos" className="group block bg-white rounded-[16px] shadow-[0_4px_25px_rgb(0,0,0,0.06)] overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex h-[220px] w-full">
                <div className="w-1/3 border-r-[3px] border-white overflow-hidden">
                  <img src="/hero.png" alt="Photos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="w-1/3 border-r-[3px] border-white overflow-hidden">
                  <img src="/hero.png" alt="Photos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="w-1/3 overflow-hidden">
                  <img src="/hero.png" alt="Photos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="p-6 md:p-8 flex items-center justify-between">
                <div>
                  <h3 className="text-[20px] font-bold text-[#1F2937] mb-1 font-serif">Photos</h3>
                  <p className="text-[#6B7280] text-[13px]">Browse our photo gallery and memories</p>
                </div>
                <div className="text-gray-400 group-hover:text-[#2F3C97] group-hover:translate-x-1 transition-all">
                  <ArrowRight size={20} />
                </div>
              </div>
            </Link>
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
          {volunteers.map((v, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Image Card */}
              <div className="w-full md:w-[350px] overflow-hidden rounded-md shadow-md border border-gray-200 bg-white">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-[200px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-[15px] font-semibold text-[#222]">
                  {v.name}
                </h3>

                <p className="text-[12px] text-[#8a8a8a] mt-1">{v.country}</p>

                <p className="text-[11px] text-[#9a9a9a] mt-2 leading-[18px]">
                  {v.role}
                </p>

                {/* Dates */}
                <div className="flex items-center justify-center gap-8 mt-4 text-[10px] text-[#8d8d8d]">
                  <div>
                    <p>From</p>
                    <p className="mt-1 text-[#666]">{v.from}</p>
                  </div>

                  <div>
                    <p>To</p>
                    <p className="mt-1 text-[#666]">{v.to}</p>
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

      {/* FAQ Section */}
      <FaqSection />

      {/* Contact Section */}
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
