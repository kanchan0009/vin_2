// components/MediaSection.tsx

import Image from "next/image";

const cards = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000",
    title: "Improved Teaching Quality Key to Nepal’s Overall Development",
    subtitle: "Overall Development",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000",
    title: "Improved Teaching Quality Key to Nepal’s Overall Development",
    subtitle: "Overall Development",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000",
    title: "Improved Teaching Quality Key to Nepal’s Overall Development",
    subtitle: "Overall Development",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000",
    title: "Improved Teaching Quality Key to Nepal’s Overall Development",
    subtitle: "Overall Development",
  },
];

const Section = ({ title }: { title: string }) => {
  return (
    <section className="bg-[#f4f6f8] rounded-2xl p-4 md:p-6 mb-6">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-lg md:text-2xl font-semibold text-gray-900">
          {title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Listen to heartfelt stories from people who chose to make a
          difference with us.
        </p>
      </div>

      {/* Cards */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {cards.map((card) => (
          <div
            key={card.id}
            className="min-w-[220px] md:min-w-[250px] bg-white rounded-xl overflow-hidden shadow-sm flex-shrink-0 hover:shadow-md transition"
          >
            <div className="relative w-full h-[130px] md:h-[150px]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-900 leading-5">
                {card.title}
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                {card.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function MediaSection() {
  return (
    <div className="space-y-5">
      <Section title="Interview Videos" />
      <Section title="Articles" />
    </div>
  );
}