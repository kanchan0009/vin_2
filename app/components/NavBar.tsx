'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    href: "/about",
    label: "About",
    dropdown: [
      { href: "/about", label: "About Us" },
      { href: "/about/our-story", label: "Our Story" },
      { href: "/about/our-approach", label: "Our Approach" },
      { href: "/about/staff", label: "Staff" },
      { href: "/about/organization", label: "Organization" },
    ],
  },
  {
    href: "/program",
    label: "Programs",
    dropdown: [
      { href: "/program", label: "All Programs" },
      { href: "/program/women-empowerment", label: "Women’s Empowerment" },
      {
        href: "/program/children-development",
        label: "Children’s Development",
      },
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
  {
    href: "/media",
    label: "Media",
    dropdown: [
      { href: "/media", label: "Medias" },
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
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#223a8f] text-white">
        <div className="mx-auto flex flex-col gap-2 px-4 py-2 text-xs font-medium sm:flex-row sm:items-center sm:justify-between sm:px-6">
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

      {/* Main Navbar */}
      <div className="bg-white">
        <div className="mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
          
          {/* Logo */}
          <Link href="/" className="flex items-center text-slate-900">
            <div className="relative h-14 w-48 sm:h-16 sm:w-60 overflow-hidden">
              <Image
                src="/vin-logo.png"
                alt="VIN logo"
                fill
                className="object-cover"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-3 text-[16px] font-[500] text-[#283449]">
            {navItems.map((item) => {
              if (!item.dropdown) {
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

                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>

                  {/* Desktop Dropdown */}
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

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/sponsor-child"
              className="rounded-[10px] border border-slate-200 bg-[#1f3b8a] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#152f72]"
            >
              Sponsor Child
            </Link>

            <Link
              href="/donate"
              className="rounded-[10px] border border-[#223a8f] bg-white px-5 py-4 text-sm font-semibold text-[#223a8f] transition hover:bg-[#152f72] hover:text-white"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden"
          >
            {mobileMenu ? (
              <X className="h-8 w-8 text-[#223a8f]" />
            ) : (
              <Menu className="h-8 w-8 text-[#223a8f]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenu ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-slate-200 bg-white px-4 py-5 space-y-3">
            
            {navItems.map((item) => {
              if (!item.dropdown) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenu(false)}
                    className="block rounded-lg px-3 py-3 text-[15px] font-medium text-slate-700 hover:bg-slate-100"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.href}>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-[15px] font-medium text-slate-700 hover:bg-slate-100"
                  >
                    {item.label}

                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mobile Dropdown */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openDropdown === item.label
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="ml-4 mt-2 flex flex-col gap-2 border-l border-slate-200 pl-4">
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.href}
                          href={d.href}
                          onClick={() => setMobileMenu(false)}
                          className="rounded-md px-2 py-2 text-sm text-slate-600 hover:bg-slate-100"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 pt-4">
              <Link
                href="/sponsor-child"
                className="rounded-[10px] bg-[#1f3b8a] px-5 py-4 text-center text-sm font-semibold text-white"
              >
                Sponsor Child
              </Link>

              <Link
                href="/donate"
                className="rounded-[10px] border border-[#223a8f] px-5 py-4 text-center text-sm font-semibold text-[#223a8f]"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}