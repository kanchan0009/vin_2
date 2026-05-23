"use client";

import { notFound } from "next/navigation";

/* =========================================================
   TYPES
========================================================= */

type Testimonial = {
  slug: string;
  name: string;
  role: string;
  country: string;
  program: string;
  fromDate: string;
  image: string;
  text: string;
  experience: string[];
};

/* =========================================================
   DATA
========================================================= */

const TESTIMONIALS: Testimonial[] = [
  {
    slug: "bibek-kumar-sah-seo-intern",
    name: "Bibek Kumar Sah",
    role: "SEO Intern",
    country: "USA 🇺🇸",
    program: "Teaching English as Mandatory",
    fromDate: "12/01/2025",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",

    text:
      "Volunteering with VIN completely transformed my way to see community development. The staff were incredibly supportive, and the projects truly made a real impact.",

    experience: [
      "From February 20 to 30 2025 I participated in the Social Life Change Organization Initiative as a fellow volunteer and worked with children. I volunteered at the orphanage school for children in our village.",

      "Working in a community environment allowed me to interact with children, share experiences, and also understand the challenges they face every day. The children were enthusiastic and eager to learn.",

      "Through the program I learned important communication, leadership, and teamwork skills. I also developed confidence while teaching and supporting local initiatives.",

      "Living with host families gave me the opportunity to experience Nepali culture more deeply. I enjoyed traditional foods, local festivals, and the kindness of the people in the community.",

      "Overall, my volunteering journey was meaningful and unforgettable. I highly recommend this experience to anyone who wants to create a positive impact.",
    ],
  },

  {
    slug: "ashley-patterson-seo-intern",
    name: "Ashley Patterson",
    role: "SEO Intern",
    country: "Australia 🇦🇺",
    program: "Women Empowerment Program",
    fromDate: "04/03/2025",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",

    text:
      "Volunteering with VIN helped me connect digital marketing with real community impact. The experience strengthened my skills and deepened my understanding of sustainable change.",

    experience: [
      "My experience with VIN was one of the most rewarding journeys I have ever taken. I worked closely with local women groups and community leaders.",

      "The environment was supportive and collaborative. Every day brought new learning opportunities and meaningful conversations with local communities.",

      "I especially enjoyed helping with communication campaigns and awareness programs. Seeing the direct impact of our work was inspiring.",

      "The friendships and connections I built during the program will stay with me forever. Nepal became like a second home to me.",

      "I would encourage anyone passionate about social impact and cultural exchange to join this program.",
    ],
  },

  {
    slug: "charles-richardson-product-designer",
    name: "Charles Richardson",
    role: "Product Designer",
    country: "Canada 🇨🇦",
    program: "Youth Empowerment Program",
    fromDate: "18/06/2025",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",

    text:
      "The experience was professional, inspiring, and deeply meaningful. Working with VIN showed me how thoughtful planning and community collaboration create impact.",

    experience: [
      "As a volunteer, I collaborated with youth groups and helped organize workshops focused on creativity, leadership, and innovation.",

      "I was impressed by how dedicated the VIN team was toward creating opportunities for young people in rural communities.",

      "The program allowed me to apply my design and communication skills in a completely new cultural setting.",

      "Outside of volunteering, I explored local traditions, foods, and festivals, which made the journey even more memorable.",

      "This experience changed the way I think about community development and global collaboration.",
    ],
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function TestimonialDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const testimonial = TESTIMONIALS.find(
    (item) => item.slug === params.slug
  );

  if (!testimonial) {
    notFound();
  }

  const programs = [
    "Children Development Program",
    "Youth Empowerment Program",
    "Public Health & Medical Program",
    "Disaster Risk Reduction (DRR) Program",
    "Public health and medical care",
    "Teaching program",
    "Management & Administration",
    "Journalism",
    "Public Interest",
    "Work Camps",
  ];

  return (
    <main className="w-full min-h-screen bg-[#F5F6F8] px-6 py-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_310px] gap-10">
          
          {/* LEFT CONTENT */}
          <div>
            
            {/* PROFILE SECTION */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              
              {/* IMAGE */}
              <div className="w-[130px] h-[130px] rounded-[6px] overflow-hidden bg-[#D9D9D9] flex-shrink-0">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* INFO */}
              <div>
                <h1 className="text-[22px] font-semibold text-[#1F2A44] mb-2">
                  {testimonial.name}
                </h1>

                <p className="text-[13px] text-[#6B7280] mb-1">
                  {testimonial.role}
                </p>

                <p className="text-[13px] text-[#6B7280] mb-1">
                  {testimonial.program}
                </p>

                <p className="text-[13px] text-[#6B7280] mb-1">
                  From:{" "}
                  <span className="text-[#1F2A44]">
                    {testimonial.fromDate}
                  </span>
                </p>

                <p className="text-[13px] text-[#6B7280]">
                  {testimonial.country}
                </p>
              </div>
            </div>

            {/* EXPERIENCE */}
            <div>
              <h2 className="text-[18px] font-semibold text-[#1F2A44] mb-4">
                Volunteering experience
              </h2>

              <div className="space-y-5 text-[13px] leading-[26px] text-[#4B5563]">
                {testimonial.experience.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div>
            <div className="bg-white border border-[#E5E7EB] rounded-[10px] overflow-hidden">
              
              {/* HEADER */}
              <div className="px-5 py-4 border-b border-[#E5E7EB]">
                <h2 className="text-[18px] font-medium text-[#1F2A44]">
                  Our Available Programs
                </h2>
              </div>

              {/* PROGRAMS */}
              <div>
                {programs.map((program, index) => (
                  <button
                    key={index}
                    className={`w-full text-left px-5 py-4 text-[13px] border-b border-[#EEF1F4] transition-all ${
                      index === 0
                        ? "bg-[#F8FAFC] text-[#2F3C97] font-medium"
                        : "text-[#6B7280] hover:bg-[#F9FAFB]"
                    }`}
                  >
                    {program}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}