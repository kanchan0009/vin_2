export default function OurApproachSection() {
  const steps = [
    {
      number: "1",
      title: "Baseline Assessment",
      description:
        "We conduct detailed surveys to understand the community’s needs, challenges, and priorities.",
    },
    {
      number: "2",
      title: "Holistic Program Design",
      description:
        "We design solutions based on multiple areas: education, health, environment, economic empowerment, and infrastructure.",
    },
    {
      number: "3",
      title: "Community Empowerment",
      description:
        "We work closely with local families, women’s groups, youth clubs, and leaders to build ownership and participation.",
    },
    {
      number: "4",
      title: "Volunteer Engagement",
      description:
        "National and international volunteers support programs with skills, energy, and hands-on help.",
    },
    {
      number: "5",
      title: "Sustainable Development",
      description:
        "All projects are built to last, ensuring communities can continue progress independently.",
    },
    {
      number: "6",
      title: "Monitoring & Long-Term Impact",
      description:
        "We evaluate progress regularly and align our work with the UN Sustainable Development Goals (SDGs).",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-10">
      <div className=" mx-auto">
        {/* =========================================
            TOP SECTION
        ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <div>
            {/* Heading */}
            <h2 className="text-[38px] font-medium leading-none text-[#1f2a44] mb-6">
              Who we are
            </h2>

            {/* Paragraph */}
            <p className="text-[16px] leading-[28px] text-[#5b6478] mb-10">
              <span className="font-semibold text-[#1f2a44]">
                Volunteer Initiative Nepal (VIN)
              </span>{" "}
              is a nonprofit organization dedicated to empowering marginalized
              communities through meaningful volunteer service. We bring
              together passionate people from around the world to create
              sustainable long-term change in Nepal’s most underserved regions.
            </p>

            {/* Heading */}
            <h2 className="text-[38px] font-medium leading-none text-[#1f2a44] mb-6">
              Our Approach
            </h2>

            {/* Paragraph */}
            <p className="text-[16px] leading-[28px] text-[#5b6478]">
              VIN’s approach is rooted in the community. With local leaders we
              identify priorities and co-design plans that residents lead. Our
              “House of VIN” rests on four pillars — Education, Health &
              Environment, Economy and Basic Infrastructure — so learning,
              health, income and services advance together.
            </p>

            <p className="text-[16px] leading-[28px] text-[#5b6478] mt-6">
              We empower communities through women’s empowerment, children’s
              development, youth empowerment and environmental conservation.
              International and local volunteers work with our Nepali team to
              deliver training, mentoring and practical support linking
              households, schools, health posts and villages.
            </p>

            <p className="text-[16px] leading-[28px] text-[#5b6478] mt-6">
              All programmes align with local plans and the UN Sustainable
              Development Goals, turning volunteer energy into lasting change
              that endures after VIN exits a community.
            </p>
          </div>

          {/* RIGHT IMAGE / DIAGRAM */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[520px]">
              <img
                src="/pillar.png"
                alt="VIN House Diagram"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM SECTION
        ========================================= */}
        <div className="mt-24">
          {/* Center Heading */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-[40px] font-medium text-[#1f2a44] mb-5">
              Our approach to the problem
            </h2>

            <p className="text-[16px] leading-[28px] text-[#5b6478]">
              VIN follows a holistic, community-driven approach to solving the
              challenges faced by marginalized communities. We begin by
              understanding the community’s real needs, then create integrated
              programs that ensure long-term sustainable change.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
            {steps.map((step, index) => (
              <div key={index}>
                {/* Number Circle */}
                <div className="w-[52px] h-[52px] rounded-full bg-[#2A3495] flex items-center justify-center text-white text-[24px] font-semibold mb-6">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-[24px] font-medium text-[#1f2a44] mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[16px] leading-[28px] text-[#5b6478]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================
            OUR CORE PROGRAM GOALS SECTION
        ========================================= */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
          {/* LEFT CONTENT */}
          <div>
            {/* Heading */}
            <h2 className="text-[38px] font-medium text-[#1f2a44] mb-10">
              Our Core Program Goals
            </h2>

            {/* Intro Paragraph */}
            <p className="text-[16px] leading-[28px] text-[#5b6478] mb-10">
              VIN facilitates projects focused on the women and children of
              marginalized communities against this challenging backdrop. VIN
              believes that the empowerment of women and children will bring
              about positive change so desperately needed in Nepal.
            </p>

            {/* Goal Sections */}
            <div className="space-y-10">
              {/* Goal 1 */}
              <div>
                <h3 className="text-[28px] font-medium text-[#1f2a44] mb-5">
                  To improve the basic public health condition of community
                  people
                </h3>

                <ul className="space-y-2 text-[16px] leading-[28px] text-[#5b6478] list-disc pl-6">
                  <li>
                    To identify common health problems and associated risk
                    factors in communities
                  </li>
                  <li>
                    To increase access to quality health services at community
                    level
                  </li>
                  <li>
                    To increase access to hygiene and sanitation facilities
                  </li>
                  <li>
                    To educate community people about basic health, hygiene &
                    sanitation
                  </li>
                  <li>
                    To provide training on basic first aid to different groups
                    from target communities
                  </li>
                </ul>
              </div>

              {/* Goal 2 */}
              <div>
                <h3 className="text-[28px] font-medium text-[#1f2a44] mb-5">
                  To empower women to improve their quality of life
                </h3>

                <ul className="space-y-2 text-[16px] leading-[28px] text-[#5b6478] list-disc pl-6">
                  <li>
                    To educate women on their rights, life skills and health &
                    sanitation
                  </li>
                  <li>To ensure women involvement in micro-credit</li>
                  <li>
                    To enable women contribute minimum 40 percent of family
                    income
                  </li>
                </ul>
              </div>

              {/* Goal 3 */}
              <div>
                <h3 className="text-[28px] font-medium text-[#1f2a44] mb-5">
                  To develop skills among youth and mobilise them on development
                  activities
                </h3>

                <ul className="space-y-2 text-[16px] leading-[28px] text-[#5b6478] list-disc pl-6">
                  <li>
                    To educate youth on their rights and life skills through
                    training, workshops and campaigns
                  </li>
                  <li>
                    To ensure youth participation in development activities
                  </li>
                  <li>
                    To develop youth friendly societies through capacity
                    development and employment opportunities
                  </li>
                </ul>
              </div>

              {/* Goal 4 */}
              <div>
                <h3 className="text-[28px] font-medium text-[#1f2a44] mb-5">
                  Conserving, promoting and protecting environment and culture
                  for future generation
                </h3>

                <ul className="space-y-2 text-[16px] leading-[28px] text-[#5b6478] list-disc pl-6">
                  <li>
                    Identify common environmental problems and associated
                    factors for climate change
                  </li>
                  <li>
                    Prevent and control water, land and air pollution and
                    develop best practices for environment conservation
                  </li>
                  <li>
                    Educate on protection and conservation of natural and
                    cultural heritage site
                  </li>
                </ul>
              </div>

              {/* Goal 5 */}
              <div>
                <h3 className="text-[28px] font-medium text-[#1f2a44] mb-5">
                  Minimize the risk of natural disaster and provide relief and
                  safety to vulnerable communities
                </h3>

                <ul className="space-y-2 text-[16px] leading-[28px] text-[#5b6478] list-disc pl-6">
                  <li>
                    Educate Communities on Disaster Risk Reduction, Response,
                    Mitigation and Preparedness
                  </li>
                  <li>
                    Promote and ensure disaster resilient infrastructure
                  </li>
                  <li>
                    Develop skill and involve affected people in
                    entrepreneurship
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div>
            <div className="border border-[#e5e7eb] rounded-md overflow-hidden bg-[#fafbfc]">
              {/* Sidebar Header */}
              <div className="px-5 py-4 border-b border-[#e5e7eb] bg-[#f5f7fa]">
                <h3 className="text-[25px] font-medium text-[#1f2a44]">
                  Our Available Programs
                </h3>
              </div>

              {/* Program List */}
              <div className="divide-y divide-[#e5e7eb]">
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
                  "Public interest",
                  "WorkCamps",
                ].map((item, index) => (
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
    </section>
  );
}