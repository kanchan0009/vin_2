"use client";

import Link from "next/link";

const jobs = [
  {
    id: 1,
    slug: "communications-intern-1",
    title: "Communications Intern – Volunteers Initiative Nepal (ViN)",
    location: "Okhaldhunga, Nepal",
    education: "Bachelor in Computer Application",
    salary: "$6,000 to 75,000/Month",
    deadline: "2025-02-14",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    slug: "communications-intern-2",
    title: "Communications Intern – Volunteers Initiative Nepal (ViN)",
    location: "Okhaldhunga, Nepal",
    education: "Bachelor in Computer Application",
    salary: "$6,000 to 75,000/Month",
    deadline: "2025-02-14",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    slug: "communications-intern-3",
    title: "Communications Intern – Volunteers Initiative Nepal (ViN)",
    location: "Okhaldhunga, Nepal",
    education: "Bachelor in Computer Application",
    salary: "$6,000 to 75,000/Month",
    deadline: "2025-02-14",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    slug: "communications-intern-4",
    title: "Communications Intern – Volunteers Initiative Nepal (ViN)",
    location: "Okhaldhunga, Nepal",
    education: "Bachelor in Computer Application",
    salary: "$6,000 to 75,000/Month",
    deadline: "2025-02-14",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function JobDetailsPage() {
  return (
    <section className="w-full bg-white py-6 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* =====================================================
            TOP IMAGE
        ===================================================== */}
        <div className="w-full h-[135px] rounded-[4px] overflow-hidden bg-[#EEF2F7]">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
            alt="Job Banner"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        {/* =====================================================
            JOB HEADER
        ===================================================== */}
        <div className="mt-4">
          <h1 className="text-[20px] font-medium text-[#1F2A44] leading-[22px]">
            Communications Intern – Volunteers Initiative Nepal (ViN)
          </h1>

          {/* META */}
          <div className="mt-3 space-y-[3px]">
            <div className="flex items-center gap-1 text-[14px] text-[#6B7280]">
              <span>◉</span>
              <p>Okhaldhunga, Nepal</p>
            </div>

            <div className="flex items-center gap-1 text-[14px] text-[#6B7280]">
              <span>◎</span>
              <p>Bachelor in Computer Application</p>
            </div>

            <div className="flex items-center gap-1 text-[14px] text-[#6B7280]">
              <span>◈</span>
              <p>$6,000 to 75,000/Month</p>
            </div>

            <div className="flex items-center gap-1 text-[14px] text-[#6B7280]">
              <span>◌</span>
              <p>Apply Before : 2025-02-14</p>
            </div>
          </div>

          {/* BUTTON */}

          <Link href="/applyNow">
            <button className="mt-4 w-[190px] h-[32px] bg-[#2E3192] hover:bg-[#23267a] transition-all duration-300 rounded-[3px] text-white text-[16px] font-medium">
              Become Volunteer
            </button>
          </Link>
        </div>

        {/* =====================================================
            JOB DESCRIPTION
        ===================================================== */}
        <div className="mt-7">
          <h2 className="text-[18px] font-semibold text-[#1F2A44] uppercase">
            Job Description
          </h2>

          <p className="mt-3 text-[16px] leading-[18px] text-[#374151]">
            Are you passionate about using your communication skills to create a
            real impact?
          </p>

          <p className="mt-2 text-[14px] leading-[18px] text-[#6B7280]">
            If you are creative, detail-oriented, and passionate about helping
            organizations and communities grow, this opportunity will allow you
            to gain hands-on experience in content creation, digital marketing,
            communication management, and social outreach while working with a
            dedicated nonprofit organization in Nepal.
          </p>

          <p className="mt-2 text-[14px] leading-[18px] text-[#6B7280]">
            Volunteers Initiative Nepal (ViN) is seeking energetic and
            enthusiastic volunteers and interns to support our communication and
            outreach activities. This role provides valuable practical exposure
            to nonprofit communication strategies while helping spread awareness
            about community development programs and social initiatives.
          </p>

          {/* =====================================================
              WHAT YOU'LL DO
          ===================================================== */}
          <div className="mt-6">
            <h3 className="text-[18px] font-semibold text-[#1F2A44] uppercase">
              What You’ll Do for VIN
            </h3>

            <ul className="mt-3 space-y-1 text-[14px] leading-[18px] text-[#6B7280] list-disc pl-5">
              <li>
                Assist in developing communication campaigns for social impact
                projects and nonprofit initiatives.
              </li>

              <li>
                Create engaging social media posts, newsletters, blogs, and
                communication materials for VIN programs.
              </li>

              <li>
                Coordinate with volunteers, project managers, and outreach teams
                to improve communication efforts.
              </li>

              <li>
                Support event promotion, awareness drives, and online engagement
                activities.
              </li>

              <li>
                Write reports, articles, and community stories for digital
                publication and organizational outreach.
              </li>

              <li>
                Conduct research related to communication trends, community
                engagement, and development topics.
              </li>

              <li>
                Assist with branding, storytelling, and public engagement
                strategies for nonprofit projects.
              </li>

              <li>
                Collaborate with design and media teams to improve visual
                communication and campaign effectiveness.
              </li>

              <li>
                Help maintain communication records, organize digital assets,
                and manage outreach content.
              </li>

              <li>
                Participate in meetings, brainstorming sessions, and volunteer
                collaboration activities.
              </li>
            </ul>
          </div>

          {/* =====================================================
              WHO WE'RE LOOKING FOR
          ===================================================== */}
          <div className="mt-6">
            <h3 className="text-[18px] font-semibold text-[#1F2A44] uppercase">
              Who We’re Looking For
            </h3>

            <ul className="mt-3 space-y-1 text-[14px] leading-[18px] text-[#6B7280] list-disc pl-5">
              <li>Strong written and verbal communication skills.</li>

              <li>
                Passion for social impact, nonprofit work, and community
                development.
              </li>

              <li>
                Familiarity with social media platforms and digital marketing
                basics.
              </li>

              <li>
                Ability to work independently and collaboratively within remote
                teams.
              </li>

              <li>
                Creative thinking and attention to detail in content creation.
              </li>

              <li>
                Basic knowledge of Canva, graphic design tools, or content
                editing software is a plus.
              </li>

              <li>
                Organized, proactive, and willing to learn in a dynamic
                environment.
              </li>
            </ul>
          </div>

          {/* =====================================================
              BENEFITS
          ===================================================== */}
          <div className="mt-6">
            <h3 className="text-[18px] font-semibold text-[#1F2A44] uppercase">
              Benefits of Joining VIN
            </h3>

            <ul className="mt-3 space-y-1 text-[14px] leading-[18px] text-[#6B7280] list-disc pl-5">
              <li>
                Gain practical nonprofit communication and marketing experience.
              </li>

              <li>
                Build leadership, teamwork, and project management skills.
              </li>

              <li>
                Work with an international nonprofit organization and
                experienced mentors.
              </li>

              <li>
                Flexible remote volunteering and internship opportunities.
              </li>

              <li>
                Opportunity to contribute to meaningful social change and
                community development.
              </li>

              <li>
                Receive internship or volunteer completion certification upon
                successful participation.
              </li>
            </ul>
          </div>

          {/* =====================================================
              APPLICATION PROCESS
          ===================================================== */}
          <div className="mt-6">
            <h3 className="text-[18px] font-semibold text-[#1F2A44] uppercase">
              Application Process
            </h3>

            <p className="mt-3 text-[14px] leading-[18px] text-[#6B7280]">
              Interested applicants should submit their updated resume along
              with a short motivation letter explaining why they would like to
              join Volunteers Initiative Nepal (ViN) and how their skills can
              contribute to the organization’s mission. Shortlisted candidates
              will be contacted for an online interview.
            </p>
          </div>
        </div>

        {/* =====================================================
            JOBS YOU MAY ALSO LIKE
        ===================================================== */}
        <div className="mt-14">
          <h2 className="text-[28px] font-medium text-[#1F2A44] mb-8">
            Jobs you may also like
          </h2>

          {/* JOB GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-7">
            {jobs.map((job) => (
              <div key={job.id}>
                {/* IMAGE */}
                <div className="h-[170px] rounded-[4px] overflow-hidden bg-[#EEF2F7]">
                  <img
                    src={job.image}
                    alt={job.title}
                    className="w-full h-full object-cover opacity-10"
                  />
                </div>

                {/* CONTENT */}
                <div className="pt-4">
                  <h3 className="text-[22px] font-medium text-[#1F2A44] leading-[30px]">
                    {job.title}
                  </h3>

                  {/* META */}
                  <div className="mt-3 space-y-[4px]">
                    <div className="flex items-center gap-2 text-[13px] text-[#6B7280]">
                      <span>◉</span>
                      <p>{job.location}</p>
                    </div>

                    <div className="flex items-center gap-2 text-[13px] text-[#6B7280]">
                      <span>◎</span>
                      <p>{job.education}</p>
                    </div>

                    <div className="flex items-center gap-2 text-[13px] text-[#6B7280]">
                      <span>◈</span>
                      <p>{job.salary}</p>
                    </div>

                    <div className="flex items-center gap-2 text-[13px] text-[#6B7280]">
                      <span>◌</span>
                      <p>Apply Before : {job.deadline}</p>
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="mt-5 flex items-center gap-3">
                    <button className="flex-1 h-[40px] bg-[#2E3192] hover:bg-[#23267a] transition-all duration-300 rounded-[3px] text-white text-[12px] font-medium">
                      Become Volunteer
                    </button>

                    <Link
                      href={`/career/${job.slug}`}
                      className="flex-1 h-[40px] border border-[#2E3192] hover:bg-[#2E3192] hover:text-white transition-all duration-300 rounded-[3px] text-[#2E3192] text-[12px] font-medium inline-flex items-center justify-center"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
