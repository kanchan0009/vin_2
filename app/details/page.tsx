"use client";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
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

export default function SportsBlogDetails() {
  return (
    <main>
      <section className="w-full bg-white py-12">
        <div className="mx-auto ">
          {/* Featured Image */}
          <div className="relative w-full overflow-hidden rounded-[10px] border border-[#E5E7EB]">
            <Image
              src="/location.png"
              alt="Sports in Nepal"
              width={1200}
              height={500}
              className="h-[260px] w-full object-cover md:h-[360px]"
            />
          </div>

          {/* Content */}
          <div className="mt-8">
            {/* Title */}
            <h1 className="text-[20px] font-medium leading-[34px] text-[#1F2937] md:text-[30px]">
              Sports in Nepal: A Comprehensive Guide to Nepal Sports, Tourism
              and Popular Sports
            </h1>

            {/* Description */}
            <div className="mt-6 space-y-2 text-[16px] leading-[26px] text-[#4B5563]">
              <p>
                Nepal is a land of adventure, culture, and community—where
                sports are a pastime and a vital part of daily life. Sports in
                Nepal have been woven into the fabric of Nepali society, from
                the thrill of football matches in bustling cities to the quiet
                intensity of traditional games played in remote villages.
              </p>

              <p>
                Whether you are an athlete, sports lover, or traveler exploring
                Nepal, this guide provides an extensive overview of the sports
                culture in Nepal and the country’s most popular sports.
              </p>

              <p>
                The rich Himalayan nation offers not only breathtaking
                landscapes but also a vibrant sports ecosystem that inspires
                local communities and visitors alike.
              </p>
            </div>

            {/* Section */}
            <div className="mt-10">
              <h2 className="text-[20px] font-medium text-[#111827]">
                1. Historical and Cultural Background of Sports in Nepal
              </h2>

              <div className="mt-5 space-y-2 text-[16px] leading-[26px] text-[#4B5563]">
                <p>
                  Sports in Nepal have a rich history that reflects the nation’s
                  diverse geography and cultural heritage. Traditional Nepalese
                  sports like Dandi Biyo and Kho Kho have been played for
                  generations, representing a fusion of indigenous customs and
                  community celebrations. Over time, modern sports such as
                  football, cricket, and volleyball have taken root, spurred by
                  global influences and increasing urbanization. Nepali
                  communities have long valued physical prowess and teamwork.
                  Historical accounts reveal that traditional sports were used
                  not only for recreation but also to build communal ties and
                  prepare for seasonal labor. Today, the evolution of sports in
                  Nepal is marked by the introduction of structured leagues,
                  formal coaching, and international tournaments. With improved
                  Nepal sports infrastructure and the emergence of Nepal sports
                  associations, local talent now competes on a global stage,
                  enhancing the nation’s reputation in both adventure sports
                  Nepal and mainstream athletics. As Nepal embraces modernity,
                  Nepal sports tourism has emerged as a dynamic sector,
                  attracting visitors keen to experience the thrill of
                  mountaineering, the passion for football matches, and the
                  energy of traditional games. This blend of old and new makes
                  Nepal a fascinating case study of how sports can preserve
                  cultural heritage and drive socioeconomic progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white ">
        <div className="mx-auto px-4 ">
          <h2 className="text-[20px] md:text-[20px] font-medium leading-tight text-[#1F2937]">
            Ranking the Most Popular Sports in Nepal
          </h2>

          <div className="mt-8 space-y-6 text-[15px] leading-[32px] text-[#4B5563]">
            <p>
              Nepal is a country where sports are deeply connected to culture,
              community, and national pride. From football fields in crowded
              cities to traditional games played in rural villages, sports
              continue to unite people of all ages and backgrounds across the
              country.
            </p>

            <p>
              Football remains the most popular sport in Nepal due to its
              massive fan following, local tournaments, and strong community
              participation. Cricket has also seen rapid growth in recent years,
              especially among young people, with increasing international
              exposure and media coverage.
            </p>

            <p>
              Volleyball, basketball, badminton, wrestling, martial arts, and
              athletics are also widely enjoyed throughout Nepal. Alongside
              modern sports, traditional games such as Dandi Biyo and Kho Kho
              continue to preserve the nation’s cultural identity and heritage.
            </p>

            <p>
              With growing investment in sports infrastructure, youth
              development, and local competitions, Nepal’s sports culture
              continues to evolve while inspiring future generations to
              participate in both recreational and professional athletics.
            </p>
            <p>
              Nepal is a country where sports are deeply connected to culture,
              community, and national pride. From football fields in crowded
              cities to traditional games played in rural villages, sports
              continue to unite people of all ages and backgrounds across the
              country.
            </p>

            <p>
              Football remains the most popular sport in Nepal due to its
              massive fan following, local tournaments, and strong community
              participation. Cricket has also seen rapid growth in recent years,
              especially among young people, with increasing international
              exposure and media coverage.
            </p>

            <p>
              Volleyball, basketball, badminton, wrestling, martial arts, and
              athletics are also widely enjoyed throughout Nepal. Alongside
              modern sports, traditional games such as Dandi Biyo and Kho Kho
              continue to preserve the nation’s cultural identity and heritage.
            </p>

            <p>
              With growing investment in sports infrastructure, youth
              development, and local competitions, Nepal’s sports culture
              continues to evolve while inspiring future generations to
              participate in both recreational and professional athletics.
            </p>
            <p>
              Nepal is a country where sports are deeply connected to culture,
              community, and national pride. From football fields in crowded
              cities to traditional games played in rural villages, sports
              continue to unite people of all ages and backgrounds across the
              country.
            </p>

            <p>
              Football remains the most popular sport in Nepal due to its
              massive fan following, local tournaments, and strong community
              participation. Cricket has also seen rapid growth in recent years,
              especially among young people, with increasing international
              exposure and media coverage.
            </p>

            <p>
              Volleyball, basketball, badminton, wrestling, martial arts, and
              athletics are also widely enjoyed throughout Nepal. Alongside
              modern sports, traditional games such as Dandi Biyo and Kho Kho
              continue to preserve the nation’s cultural identity and heritage.
            </p>

            <p>
              With growing investment in sports infrastructure, youth
              development, and local competitions, Nepal’s sports culture
              continues to evolve while inspiring future generations to
              participate in both recreational and professional athletics.
            </p>
            <p>
              Nepal is a country where sports are deeply connected to culture,
              community, and national pride. From football fields in crowded
              cities to traditional games played in rural villages, sports
              continue to unite people of all ages and backgrounds across the
              country.
            </p>

            <p>
              Football remains the most popular sport in Nepal due to its
              massive fan following, local tournaments, and strong community
              participation. Cricket has also seen rapid growth in recent years,
              especially among young people, with increasing international
              exposure and media coverage.
            </p>

            <p>
              Volleyball, basketball, badminton, wrestling, martial arts, and
              athletics are also widely enjoyed throughout Nepal. Alongside
              modern sports, traditional games such as Dandi Biyo and Kho Kho
              continue to preserve the nation’s cultural identity and heritage.
            </p>

            <p>
              With growing investment in sports infrastructure, youth
              development, and local competitions, Nepal’s sports culture
              continues to evolve while inspiring future generations to
              participate in both recreational and professional athletics.
            </p>
            <p>
              Nepal is a country where sports are deeply connected to culture,
              community, and national pride. From football fields in crowded
              cities to traditional games played in rural villages, sports
              continue to unite people of all ages and backgrounds across the
              country.
            </p>

            <p>
              Football remains the most popular sport in Nepal due to its
              massive fan following, local tournaments, and strong community
              participation. Cricket has also seen rapid growth in recent years,
              especially among young people, with increasing international
              exposure and media coverage.
            </p>

            <p>
              Volleyball, basketball, badminton, wrestling, martial arts, and
              athletics are also widely enjoyed throughout Nepal. Alongside
              modern sports, traditional games such as Dandi Biyo and Kho Kho
              continue to preserve the nation’s cultural identity and heritage.
            </p>

            <p>
              With growing investment in sports infrastructure, youth
              development, and local competitions, Nepal’s sports culture
              continues to evolve while inspiring future generations to
              participate in both recreational and professional athletics.
            </p>
            <p>
              Nepal is a country where sports are deeply connected to culture,
              community, and national pride. From football fields in crowded
              cities to traditional games played in rural villages, sports
              continue to unite people of all ages and backgrounds across the
              country.
            </p>

            <p>
              Football remains the most popular sport in Nepal due to its
              massive fan following, local tournaments, and strong community
              participation. Cricket has also seen rapid growth in recent years,
              especially among young people, with increasing international
              exposure and media coverage.
            </p>

            <p>
              Volleyball, basketball, badminton, wrestling, martial arts, and
              athletics are also widely enjoyed throughout Nepal. Alongside
              modern sports, traditional games such as Dandi Biyo and Kho Kho
              continue to preserve the nation’s cultural identity and heritage.
            </p>

            <p>
              With growing investment in sports infrastructure, youth
              development, and local competitions, Nepal’s sports culture
              continues to evolve while inspiring future generations to
              participate in both recreational and professional athletics.
            </p>
          </div>
        </div>
      </section>
      {/* Related Jobs */}
      <section className="w-full bg-white py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
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
                    href={`/media/career/${job.slug}`}
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
    </main>
  );
}
