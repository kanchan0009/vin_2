"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function DonateSection() {
  const [amount, setAmount] = useState<number | string>("");

  return (
    <section id="donate-section" className="relative w-full overflow-hidden pt-16 pb-16 md:pb-24 mt-10">
      {/* Background Image */}
      <img
        src="/hero.png"
        alt="Sponsor a Child"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10  mx-auto px-6 md:px-10 h-full flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text Content */}
        <div className="text-white  w-full mt-10 lg:mt-0">
          <h2 className="text-[32px] md:text-[38px] leading-[1.3] font-serif font-medium mb-4">
            Sponsor a Child, Change a Life
          </h2>
          <p className="text-[14px] leading-[24px] text-gray-200 mb-6">
            Your sponsorship provides education, healthcare, and essential support
            to children in Nepal who need it most. Give a child the opportunity
            to learn, grow, and build a brighter future.
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-[16px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Education & Learning
            </li>
            <li className="flex items-center gap-3 text-[16px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Health & Wellbeing
            </li>
            <li className="flex items-center gap-3 text-[16px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Empowerment & Opportunity
            </li>
          </ul>

          <Link href="/sponsor-child">
            <button className="bg-[#2F3C97] hover:bg-[#25307a] transition-all duration-300 text-white text-[14px] font-medium px-6 py-3 rounded-md shadow-lg cursor-pointer">
              Help a child today!
            </button>
          </Link>
        </div>

        {/* Right Side: Donation Widget */}
        <div className="bg-white rounded-[12px] shadow-2xl p-6 md:p-8 w-full max-w-[420px]">
          <div className="text-center mb-6">
            <h3 className="text-[22px] font-bold text-[#1F2937] mb-1 font-serif">Make a Difference Today</h3>
            <p className="text-[#6B7280] text-[13px]">
              Your Donation directly supports families in need
            </p>
          </div>

          {/* Amount Buttons */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            {[25, 50, 100, 150].map((preset) => (
              <button
                key={preset}
                onClick={() => setAmount(preset)}
                className={`py-2 text-[14px] font-medium rounded-[6px] transition-colors ${
                  amount === preset
                    ? "bg-[#2F3C97] text-white"
                    : "bg-[#F3F4F6] text-[#4B5563] hover:bg-gray-200"
                }`}
              >
                $ {preset}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="flex gap-2 mb-6">
            <div className="bg-[#F3F4F6] text-[#4B5563] px-3 py-2 rounded-[6px] text-[14px] font-medium flex items-center justify-center border border-gray-100">
              USD <svg className="w-3 h-3 ml-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            <input
              type="number"
              min="0"
              placeholder="Custom amount"
              value={amount}
              onChange={(e) => {
                 const val = parseFloat(e.target.value);
                 if (val >= 0 || e.target.value === "") {
                    setAmount(e.target.value);
                 }
              }}
              className="flex-1 bg-[#F3F4F6] border border-gray-100 rounded-[6px] px-4 py-2 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#2F3C97]"
            />
          </div>

          {/* Project Dropdown */}
          <div className="mb-6">
            <p className="text-[13px] text-[#4B5563] mb-2 font-medium">Choose a project to support</p>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-gray-200 rounded-[6px] px-4 py-2.5 text-[14px] text-[#6B7280] focus:outline-none focus:ring-1 focus:ring-[#2F3C97]">
                <option>Choose a project to donate</option>
                <option>Education & Learning</option>
                <option>Health & Wellbeing</option>
                <option>Women Empowerment</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
            </div>
          </div>

          {/* Donate Button */}
          <button className="w-full bg-[#5C6BC0] hover:bg-[#4e5caa] transition-all text-white text-[15px] font-medium py-3 rounded-[6px] shadow-md">
            Donate Now
          </button>
        </div>

      </div>
    </section>
  );
}
