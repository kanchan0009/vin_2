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
  {
    id: 5,
    slug: "communications-intern-5",
    title: "Communications Intern – Volunteers Initiative Nepal (ViN)",
    location: "Okhaldhunga, Nepal",
    education: "Bachelor in Computer Application",
    salary: "$6,000 to 75,000/Month",
    deadline: "2025-02-14",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    slug: "communications-intern-6",
    title: "Communications Intern – Volunteers Initiative Nepal (ViN)",
    location: "Okhaldhunga, Nepal",
    education: "Bachelor in Computer Application",
    salary: "$6,000 to 75,000/Month",
    deadline: "2025-02-14",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function CareersPage() {
  return (
    <section className="w-full bg-white py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* TOP FILTER BUTTONS */}
        <div className="flex items-center gap-2 mb-8">
          <button className="w-[95px] h-[38px] bg-[#2E3192] text-white text-[13px] font-medium rounded-[3px]">
            Full Time
          </button>

          <button className="w-[95px] h-[38px] bg-[#F3F4F6] text-[#7B8191] text-[13px] font-medium rounded-[3px] border border-[#E5E7EB]">
            Intern
          </button>
        </div>

        {/* JOB GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-7">
          {jobs.map((job) => (
            <div key={job.id}>
              {/* IMAGE */}
              <div className="h-[175px] rounded-[6px] overflow-hidden bg-[#EEF1F6]">
                <img
                  src={job.image}
                  alt={job.title}
                  className="w-full h-full object-cover opacity-20"
                />
              </div>

              {/* CONTENT */}
              <div className="pt-4">
                <h3 className="text-[25px] leading-[34px] font-medium text-[#1F2A44]">
                  {job.title}
                </h3>

                {/* META */}
                <div className="mt-3 space-y-2">
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
                  <button className="flex-1 h-[42px] bg-[#2E3192] hover:bg-[#23267a] transition-all duration-300 rounded-[4px] text-white text-[13px] font-medium">
                    Become Volunteer
                  </button>

                  <Link
                    href={`/career/${job.slug}`}
                    className="flex-1 h-[42px] inline-flex items-center justify-center border border-[#2E3192] hover:bg-[#2E3192] hover:text-white transition-all duration-300 rounded-[4px] text-[#2E3192] text-[13px] font-medium"
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
  );
}
