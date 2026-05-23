"use client";

const programs = [
  {
    title: "Fundraising",
    description:
      "Volunteers support vital projects and help resources for impactful programs, children’s development, public health & empowerment initiatives.",
  },
  {
    title: "Fellowships and staff exchanges",
    description:
      "Professional staff exchanges and global fellowship opportunities focused on skill sharing, volunteering, experience and international partnership.",
  },
  {
    title: "Volunteer",
    description:
      "Volunteers contribute in education, women empowerment, children welfare, health, sustainability and environmental initiatives.",
  },
  {
    title: "Donate",
    description:
      "Your generous contribution helps create sustainable impact through community development, education and healthcare support.",
  },
  {
    title: "Sponsor a Child",
    description:
      "Support children with education, healthcare and opportunities to build a brighter future and improve quality of life.",
  },
  {
    title: "Donate",
    description:
      "Help support long-term social development projects and create meaningful impact in local communities.",
  },
  {
    title: "Promote",
    description:
      "Promote volunteer opportunities, campaigns and awareness programs through outreach and partnerships.",
  },
  {
    title: "Partner",
    description:
      "Collaborate with organizations and institutions to create sustainable social impact through partnerships.",
  },
];

export default function GetInvolvedSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* HEADER */}
        <div className="max-w-5xl mx-auto mb-10 text-center">
          <h2 className="text-[32px] md:text-[30px] font-medium text-[#1f2a44] mb-5">
            Get Involved in Volunteering with it’s mission
          </h2>

          <p className="text-[18px]   leading-8 text-[#5b6478]">
            Volunteering connects passionate individuals with meaningful
            projects and opportunities. Help support communities and create
            positive change through education, healthcare, environment and
            empowerment initiatives.
          </p>
        </div>

        {/* TITLE */}
        <h3 className="text-[24px] font-medium text-[#1f2a44] mb-8">
          Programs
        </h3>

        {/* PROGRAM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="border border-[#e5e7eb] rounded-[10px] overflow-hidden bg-white hover:shadow-lg transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="h-[180px] bg-[#f3f4f6] overflow-hidden">
                <img
                  src="/images/program-placeholder.jpg"
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-[20px] font-medium text-[#1f2a44] mb-1">
                  {program.title}
                </h3>

                <p className="text-[14px] leading-7 text-[#5b6478] mb-4">
                  {program.description}
                </p>

                {/* BUTTONS */}
                <div className="flex gap-3 w-full">
                  <button className="w-1/2 py-3 bg-[#2A3495] text-white text-[13px] font-medium rounded-md hover:bg-[#1f2875] transition">
                    Become Volunteer
                  </button>

                  <button className="w-1/2 py-3 border border-[#2A3495] text-[#2A3495] text-[13px] font-medium rounded-md hover:bg-[#f5f7ff] transition">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
