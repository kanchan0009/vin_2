"use client";
import React from "react";
import Link from "next/link";

export default function AvailableProgramsSidebar() {
  return (
    <div className="border border-[#e5e7eb] rounded-md overflow-hidden bg-[#fafbfc]">
      {/* Sidebar Header */}
      <div className="px-5 py-4 border-b border-[#e5e7eb] bg-[#f5f7fa]">
        <h2 className="text-[20px] font-medium text-[#1f2a44]">
          Our Available Programs
        </h2>
      </div>

      {/* Program List */}
      <div className="divide-y divide-[#e5e7eb]">
        {[
          { label: "Children’s Development Program", href: "/program/children-development" },
          { label: "Youth Empowerment Program", href: "/program/youth-empowerment" },
          { label: "Public Health & Medical Program", href: "/program/health" },
          { label: "Environment Conservation Program", href: "/program/environment" },
          { label: "Disaster Risk Reduction (DRR) Program", href: "/program/disaster" },
          { label: "Public health and medical care", href: "/program/health" },
          { label: "Environment conservation", href: "/program/environment" },
          { label: "Teaching program", href: "/program" },
          { label: "Management & Administration", href: "/program" },
          { label: "Journalism", href: "/program" },
          { label: "Public interest", href: "/program" },
          { label: "WorkCamps", href: "/program" },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="block px-5 py-4 text-[15px] text-[#5b6478] hover:bg-white hover:text-[#2F3C97] transition-all cursor-pointer"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
