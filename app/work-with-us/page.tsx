// app/why-volunteer/page.tsx

export default function WhyVolunteerPage() {
  const features = [
    {
      title: "Affordable",
      icon: "👍",
      desc: "We offer the most affordable volunteer program feesfor this type of volunteering. The volunteer and internship programs you choose have value for money. There is no hidden cost added. No expensive premises to maintain or high management overheads.",
    },

    {
      title: "Inclusive",
      icon: "☰",
      desc: "Everyone can volunteer regardless of age, gender, profession, or background.",
    },

    {
      title: "Sustainable",
      icon: "🌱",
      desc: "Our programs focus on sustainable development and long-term community impact.",
    },

    {
      title: "Responsible",
      icon: "🛡️",
      desc: "We responsibly manage projects and maintain ethical community engagement.",
    },

    {
      title: "Healthy, Safety and Security",
      icon: "❤",
      desc: "Volunteer safety and wellbeing remain our highest priorities in every project.",
    },

    {
      title: "Local Initiative",
      icon: "💡",
      desc: "VIN is locally led and community-based with years of grassroots experience.",
    },

    {
      title: "Trustworthy",
      icon: "🤝",
      desc: "VIN has years of successful experience managing volunteer programs.",
    },

    {
      title: "Quality",
      icon: "✔",
      desc: "We maintain quality-driven volunteer programs with measurable impact.",
    },

    {
      title: "Transparency",
      icon: "🔍",
      desc: "We believe in transparent operations and open communication.",
    },

    {
      title: "Support System",
      icon: "💬",
      desc: "Our support team assists volunteers before, during, and after projects.",
    },

    {
      title: "Professionalism",
      icon: "🏢",
      desc: "We maintain professional standards throughout every volunteer project.",
    },

    {
      title: "Community Focus",
      icon: "🌍",
      desc: "We work closely with local communities to create meaningful impact.",
    },
  ];

  const programs = [
    {
      title: "Explore Local Culture",
      icon: "📍",
      desc: "Experience Nepal’s unique traditions, lifestyle, and local communities while volunteering.",
    },

    {
      title: "Explore Natural Beauty",
      icon: "🛫",
      desc: "Discover Nepal’s breathtaking mountains, villages, rivers, and forests.",
    },

    {
      title: "Friendship, Fun, and Future",
      icon: "👥",
      desc: "Build lifelong friendships and unforgettable memories through meaningful experiences.",
    },
  ];

  return (
    <main className="w-full bg-white">
      {/* =====================================================
          TOP SECTION
      ===================================================== */}

      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-[36px] md:text-[40px] font-medium text-[#1f2a44] mb-6">
              Why volunteer with VIN?
            </h1>

            <p className="text-[16px]  font-[400] leading-[30px] text-[#5f6675]">
              VIN doesn’t just serve the community, it is a part of the
              community, often for many years. We are dedicated to our work and
              committed to excellence in everything we do. This is the approach
              and attitude we practice in serving the local communities in
              Nepal.
            </p>
          </div>

          {/* FEATURES GRID */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {features.map((item, index) => (
              <div key={index} className="flex gap-5">
                {/* ICON */}

                <div className="w-[50px] h-[50px] rounded-full bg-[#eef1ff] text-[#2A3495] flex items-center justify-center text-[22px] flex-shrink-0">
                  {item.icon}
                </div>

                {/* CONTENT */}

                <div>
                  <h3 className="text-[20px] font-medium text-[#2A3495] ">
                    {item.title}
                  </h3>

                  <p className="text-[16px] leading-[28px] text-[#5f6675]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECOND SECTION
      ===================================================== */}

      <section className="w-full py-10 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}

          <div className="text-center max-w-5xl mx-auto mb-16">
            <h2 className="text-[34px] md:text-[40px] font-medium text-[#1f2a44] mb-6">
              Why volunteer with VIN? – Wide range of Program/projects
            </h2>

            <p className="text-[16px]  font-[400] leading-[30px] text-[#5f6675]">
              VIN offers 66 highly rated long and midterm volunteering projects
              under 12 categories. We also organize short-term camps and group
              volunteering projects. This wide range of projects gives you the
              option to match your interests, educational background, and
              working experience.
            </p>
          </div>

          {/* PROGRAMS */}

          <div className="space-y-14">
            {programs.map((item, index) => (
              <div key={index} className="flex gap-6">
                {/* ICON */}

                <div className="w-[58px] h-[58px] rounded-full bg-[#eef1ff] text-[#2A3495] flex items-center justify-center text-[24px] flex-shrink-0">
                  {item.icon}
                </div>

                {/* CONTENT */}

                <div>
                  <h3 className="text-[20px] font-medium text-[#2A3495] ">
                    {item.title}
                  </h3>

                  <p className="text-[16px] leading-[30px] text-[#5f6675]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}