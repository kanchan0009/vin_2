

import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const news = [
  {
    id: 1,
    image: "/hero.png",
    title:
      "ECHAV Volunteers Inspire Learning and Creativity Among Children in Okhaldhunga",
    description:
      "The ECHAV Volunteer Project, implemented from 1st September to 29th October 2025 in Okhaldhunga under Volunteers Initiative Nepal's Children's Development Program, ...",
  },
  {
    id: 2,
    image: "/hero.png",
    title:
      "ECHAV Volunteers Inspire Learning and Creativity Among Children in Okhaldhunga",
    description:
      "The ECHAV Volunteer Project, implemented from 1st September to 29th October 2025 in Okhaldhunga under Volunteers Initiative Nepal's Children's Development Program, ...",
  },
  {
    id: 3,
    image: "/hero.png",
    title:
      "ECHAV Volunteers Inspire Learning and Creativity Among Children in Okhaldhunga",
    description:
      "The ECHAV Volunteer Project, implemented from 1st September to 29th October 2025 in Okhaldhunga under Volunteers Initiative Nepal's Children's Development Program, ...",
  },
];

export default function LatestNews() {
  return (
    <section className="w-full  py-6 px-7 relative overflow-hidden mb-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-[40px] font-medium text-[#1d1d1d] leading-none mb-3">
            Latest News
          </h2>

          <p className="max-w-[760px] text-[16px] leading-[24px] text-[#5d5d5d]">
            Stay updated with our latest News, featuring the most recent
            updates, events, and developments. Get insights and information
            that keep you informed and connected with our community and
            initiatives.
          </p>
        </div>

        <button className="bg-[#2E3192] hover:bg-[#26287d] transition-all text-white text-[16px] font-medium px-10 py-3 rounded-md">
          View all
        </button>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Left Arrow */}
        <button className="absolute left-[-12px] top-[42%] z-20 h-8 w-8 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center">
          <ChevronLeft size={18} className="text-[#666]" />
        </button>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-5">
          {news.map((item) => (
            <div key={item.id} className="group border border-[#e5e7eb] rounded-sm overflow-hidden p-4  hover:shadow-sm">
              {/* Image */}
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[230px] w-full object-cover"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#ff0000] w-[54px] h-[38px] rounded-[10px] flex items-center justify-center shadow-lg">
                    <Play
                      fill="white"
                      size={18}
                      className="text-white ml-[2px]"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-4">
                <h3 className="text-[17px] leading-[28px] font-medium text-[#222] mb-2">
                  {item.title}
                </h3>

                <p className="text-[13px] leading-[22px] text-[#666]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="absolute right-[-12px] top-[42%] z-20 h-8 w-8 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center">
          <ChevronRight size={18} className="text-[#666]" />
        </button>
      </div>
    </section>
  );
}