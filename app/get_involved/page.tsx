"use client";

import Link from "next/link";

const programs = [
  {
    id: 1,
    title: "Fundraise",
    slug: "fundraise",
    description:
      "Fundraising is a great way to get involved into our project. You may choose a project under women's empowerment, children's development, youth empowerment, environment conservation, public health and more.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Fellowships and staff exchanges",
    slug: "fellowships-and-staff-exchanges",
    description:
      "Fellowship and staff exchanges are a great way to learn different working cultures, different working technologies, methodologies and support each other.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Volunteer",
    slug: "volunteer",
    description:
      "VIN has four projects to address issues on gender, children, environment, public health, youth, disaster risk reduction and economy.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Donate",
    slug: "donate",
    description:
      "VIN does not have any regular funding sources. We are not funded by the state either.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* ======================================
          PROGRAM SECTION
      ====================================== */}
      <section className="w-full bg-white py-10 px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          
          {/* HEADER */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] font-medium text-[#1F2A44] leading-[1.3]">
              Get Involved in Volunteering with it’s mission
            </h1>

            <p className="mt-4 text-[13px] sm:text-[14px] leading-[24px] text-[#6B7280]">
              VIN is truly committed to working towards its mission to empower
              disadvantaged and marginalized people in Nepal’s most marginalized
              communities and get involved in volunteering with VIN.
            </p>

            <p className="mt-2 text-[13px] sm:text-[14px] leading-[24px] text-[#6B7280]">
              VIN has been implementing its holistic approach of community
              empowerment on the outskirts of Kathmandu, Okhaldhunga and
              surrounding rural villages.
            </p>
          </div>

          {/* PROGRAM TITLE */}
          <div className="mt-10">
            <h2 className="text-[18px] font-medium text-[#1F2A44]">
              Programs
            </h2>
          </div>

          {/* PROGRAM GRID */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
            
            {programs.map((program) => (
              <div key={program.id}>
                
                {/* IMAGE */}
                <div className="h-[180px] sm:h-[220px] rounded-[6px] overflow-hidden bg-[#EEF2F7]">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover opacity-30 hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="pt-4">
                  
                  <h3 className="text-[18px] sm:text-[20px] font-medium text-[#1F2A44]">
                    {program.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-[22px] text-[#6B7280]">
                    {program.description}
                  </p>

                  {/* BUTTONS */}
                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    
                    <Link href="/applyNow" className="flex-1 h-[42px] bg-[#2E3192] hover:bg-[#23267a] transition-all duration-300 rounded-[4px] text-white text-[13px] font-medium justify-center items-center">
                      Become Volunteer
                    </Link>

                    <Link
                      href={`/program/${program.slug}`}
                      className="flex-1 h-[42px] border border-[#2E3192] hover:bg-[#2E3192] hover:text-white transition-all duration-300 rounded-[4px] text-[#2E3192] text-[13px] font-medium inline-flex items-center justify-center"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          CTA SECTION
      ====================================== */}
      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden bg-gradient-to-r from-[#3B45D1] via-[#3A49DC] to-[#25339B] py-14 mt-20 text-center">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[length:80px_80px]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 px-4">
          
          <h2 className="text-white text-[38px] md:text-[52px] font-medium leading-[1.2] mb-5">
            Become a part of the Change
          </h2>

          <p className="max-w-[620px] mx-auto text-white/90 text-[18px] leading-[32px] font-normal mb-10">
            Every action you take helps build a future where women lead and
            communities thrive.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            
            <Link href="/applyNow" className="h-[54px] px-10 rounded-[6px] bg-[#2D348E] hover:bg-[#222977] transition-all duration-300 text-white text-[16px] font-medium shadow-md inline-flex items-center justify-center text-center">
              Apply for Volunteer
            </Link>

            <button className="h-[54px] px-10 rounded-[6px] bg-[#F5A300] hover:bg-[#dd9400] transition-all duration-300 text-white text-[16px] font-medium shadow-md flex items-center gap-2">
              <span>◎</span>
              Donate Now
            </button>

            <button className="h-[54px] px-10 rounded-[6px] bg-[#2ED15B] hover:bg-[#24ba4f] transition-all duration-300 text-white text-[16px] font-medium shadow-md flex items-center gap-2">
              <span>◉</span>
              Chat on Whatsapp
            </button>
          </div>
        </div>
      </section>
    </>
  );
}