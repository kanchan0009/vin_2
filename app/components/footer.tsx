// components/Footer.tsx

import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2A3495] text-white pt-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Info */}
        <div>
          {/* Logo */}
          <div className="bg-white rounded-md p-2 w-full md:w-[180px] mb-5">
            <img
              src="/vin-logo.png"
              alt="VIN Logo"
              className="w-full object-contain"
            />
          </div>

          {/* Description */}
          <p className="text-[11px] leading-[20px] text-[#d7dcff] max-w-full md:max-w-[240px] mb-5">
            VIN is a non-profit organization dedicated to empowering
            marginalized communities in Nepal.
          </p>

          {/* Contact */}
          <div className="space-y-3 mb-5">
            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center mt-0.5">
                <Phone className="w-3 h-3 text-[#2A3495]" />
              </div>

              <div className="text-[11px] leading-[18px] text-[#d7dcff]">
                <p>+977 (1) 4962560 (Office)</p>
                <p>+977 9851070477 (Mobile)</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <Mail className="w-3 h-3 text-[#2A3495]" />
              </div>

              <p className="text-[11px] text-[#d7dcff]">Support@vin.org.np</p>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-[16px] font-semibold mb-3">Address</h3>

            <div className="overflow-hidden rounded-md border border-white/20 w-full md:w-[220px]">
              <img
                src="/map.jpg"
                alt="Map"
                className="w-full h-[90px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-[18px] font-semibold mb-5">Useful Links</h3>

          <ul className="space-y-3 text-[12px] text-[#d7dcff]">
            <li><Link href="/fees" className="hover:text-white transition">Program Fees</Link></li>
            <li><Link href="/about/organization" className="hover:text-white transition">Vision, Mission & Goals</Link></li>
            <li><Link href="/media/blogs" className="hover:text-white transition">News Updates</Link></li>
            <li><Link href="/media/career" className="hover:text-white transition">Career with VIN</Link></li>
            <li><Link href="/media/downloads" className="hover:text-white transition">Downloads</Link></li>
            <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
            <li><Link href="/" className="hover:text-white transition">Link One</Link></li>
            <li><Link href="/" className="hover:text-white transition">Asian Voluntary Services</Link></li>
            <li><Link href="/" className="hover:text-white transition">Recognition & Award</Link></li>
            <li><Link href="/" className="hover:text-white transition">Festivals in Nepal</Link></li>
            <li><Link href="/volunteers" className="hover:text-white transition">Volunteer in Nepal</Link></li>
            <li><Link href="/internship" className="hover:text-white transition">Internship in Nepal</Link></li>
            <li><Link href="/" className="hover:text-white transition">Complaint Registration</Link></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-[18px] font-semibold mb-5">Our Programs</h3>

          <ul className="space-y-3 text-[12px] text-[#d7dcff]">
            <li><Link href="/program/women-empowerment" className="hover:text-white transition">Women’s Empowerment Programme</Link></li>
            <li><Link href="/program/children-development" className="hover:text-white transition">Children’s Development Program</Link></li>
            <li><Link href="/program/youth-empowerment" className="hover:text-white transition">Youth Empowerment Programme</Link></li>
            <li><Link href="/program/health" className="hover:text-white transition">Public Health & Medical Care Program</Link></li>
            <li><Link href="/program/environment" className="hover:text-white transition">Environment Conservation Program</Link></li>
            <li><Link href="/program/disaster" className="hover:text-white transition">Disaster Risk Reduction</Link></li>
            <li><Link href="/program/teaching" className="hover:text-white transition">Teaching Program</Link></li>
            <li><Link href="/program/public-interest" className="hover:text-white transition">Public Interest Program</Link></li>
            <li><Link href="/program/management" className="hover:text-white transition">Management and Administration Program</Link></li>
            <li><Link href="/program/journalism" className="hover:text-white transition">Journalism Program</Link></li>
            <li><Link href="/program/adventure" className="hover:text-white transition">Adventure and Volunteer Program</Link></li>
            <li><Link href="/program/featured" className="hover:text-white transition">Featured volunteer programs</Link></li>
          </ul>
        </div>

        {/* Internship */}
        <div>
          <h3 className="text-[18px] font-semibold mb-5">Internship Program</h3>

          <ul className="space-y-3 text-[12px] text-[#d7dcff]">
            <li><Link href="/internship/medical" className="hover:text-white transition">Medical Internship in Nepal</Link></li>
            <li><Link href="/internship/physiotherapy" className="hover:text-white transition">Physiotherapy Internship in Nepal</Link></li>
            <li><Link href="/internship/osteopathy" className="hover:text-white transition">Osteopathy Internship in Nepal</Link></li>
            <li><Link href="/internship/medical-elective" className="hover:text-white transition">Medical Elective internship in Nepal</Link></li>
            <li><Link href="/internship/gender-equality" className="hover:text-white transition">Gender Equality Internship in Nepal</Link></li>
            <li><Link href="/internship/youth-empowerment" className="hover:text-white transition">Youth Empowerment Internship in Nepal</Link></li>
            <li><Link href="/internship/child-protection" className="hover:text-white transition">Child Protection Internship in Nepal</Link></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-8" />

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-[12px] text-[#d7dcff]">
          Copyright © 2024. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="https://facebook.com/vin" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
            <img src="/icons/facebook.svg" alt="facebook" className="w-5 h-5" />
          </a>

          <a href="https://instagram.com/vin" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
            <img
              src="/icons/instagram.svg"
              alt="instagram"
              className="w-5 h-5"
            />
          </a>

          <a href="https://twitter.com/vin" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
            <img src="/icons/twitter.svg" alt="twitter" className="w-5 h-5" />
          </a>

          <a href="https://linkedin.com/company/vin" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
            <img src="/icons/linkedin.svg" alt="linkedin" className="w-5 h-5" />
          </a>

          <a href="https://youtube.com/vin" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
            <img src="/icons/youtube.svg" alt="youtube" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
