import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    href: "/about",
    label: "About",
    dropdown: [
      { href: "/about", label: "About Us" },
      { href: "/about/our-story", label: "Our Story" },
      { href: "/about/our-approach", label: "Our Approach" },
      { href: "/about/staff", label: "Staff" },
      { href: "/about/organization", label: "organization" },
    ],
  },
  {
    href: "/program",
    label: "Programs",
    dropdown: [
      { href: "/program", label: "All programs" },
      { href: "/program/women-empowerment", label: "Women’s Empowerment" },
      { href: "/program/children-development", label: "Children’s Development" },
      { href: "/program/youth-empowerment", label: "Youth Empowerment" },
      {
        href: "/program/disaster",
        label: "Disaster Risk Reduction (DDR)",
      },
      {
        href: "/program/health",
        label: "Public Health & Medical Care",
      },
      {
        href: "/program/environment",
        label: "Environment Conservation",
      },
    ],
  },

  { href: "/fees", label: "Fees" },
  { href: "/blogs", label: "Blogs" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/media", label: "Media" ,
    dropdown: [
      { href: "/media", label: "medias" },
      { href: "/media/photos", label: "Photos" },
      { href: "/media/career", label: "Careers" },
      { href: "/media/testimonials", label: "Testimonials" },
      {
        href: "/media/downloads",
        label: "Download",
      },
      {
        href: "/media/articles",
        label: "Articles",
      },
      {
        href: "/media/blogs",
        label: "Blogs",
      },
    ],
  },
  { href: "/volunteers", label: "Volunteers" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 shadow-sm">
      <div className="bg-[#223a8f] text-white">
        <div className="mx-auto flex  flex-col gap-2 px-4 py-2 text-xs font-medium sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="whitespace-nowrap">
            #1 rated volunteering Organization in Nepal
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
            <a
              href="tel:+97714962560"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white"
            >
              <span className="text-base">📞</span>
              +977 1 4962560
            </a>

            <a
              href="mailto:support@org.vin.np"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white"
            >
              <span className="text-base">✉️</span>
              support@org.vin.np
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto flex flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="flex items-center text-slate-900">
            <div className="relative h-16 w-60 overflow-hidden">
              <Image
                src="/vin-logo.png"
                alt="VIN logo"
                fill
                className="object-cover"
              />
            </div>
          </Link>

          <nav className="flex flex-1 flex-wrap items-center justify-center gap-3 text-16px font-[500] text-[#283449] lg:order-none lg:max-w-none">
            {navItems.map((item) => {
              if (!("dropdown" in item) || !item.dropdown) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className="rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900 flex items-center gap-1"
                  >
                    {item.label}

                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>

                  {/* Dropdown */}
                  <div className="invisible opacity-0 absolute left-0 top-full mt-2 w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100 z-50">
                    <div className="grid gap-1">
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.href}
                          href={d.href}
                          className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/sponsor-child"
              className="rounded-[10px] border border-slate-200 bg-[#1f3b8a] px-5 py-4 text-sm font-semibold text-white transition hover:bg-slate-100"
            >
              Sponsor Child
            </Link>

            <Link
              href="/donate"
              className="rounded-[10px] bg-white px-5 py-4 text-sm font-semibold text-[#223a8f] shadow-sm transition hover:bg-[#152f72]"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}