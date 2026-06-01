// components/Footer.tsx

import { Phone, Mail } from "lucide-react";

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
            <li>Program Fees</li>
            <li>Vision, Mission & Goals</li>
            <li>News Updates</li>
            <li>Career with VIN</li>
            <li>Downloads</li>
            <li>FAQ</li>
            <li>Link One</li>
            <li>Asian Voluntary Services</li>
            <li>Recognition & Award</li>
            <li>Festivals in Nepal</li>
            <li>Volunteer in Nepal</li>
            <li>Internship in Nepal</li>
            <li>Complaint Registration</li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-[18px] font-semibold mb-5">Our Programs</h3>

          <ul className="space-y-3 text-[12px] text-[#d7dcff]">
            <li>Women’s Empowerment Programme</li>
            <li>Children’s Development Program</li>
            <li>Youth Empowerment Programme</li>
            <li>Public Health & Medical Care Program</li>
            <li>Environment Conservation Program</li>
            <li>Disaster Risk Reduction</li>
            <li>Teaching Program</li>
            <li>Public Interest Program</li>
            <li>Management and Administration Program</li>
            <li>Journalism Program</li>
            <li>Adventure and Volunteer Program</li>
            <li>Featured volunteer programs</li>
          </ul>
        </div>

        {/* Internship */}
        <div>
          <h3 className="text-[18px] font-semibold mb-5">Internship Program</h3>

          <ul className="space-y-3 text-[12px] text-[#d7dcff]">
            <li>Medical Internship in Nepal</li>
            <li>Physiotherapy Internship in Nepal</li>
            <li>Osteopathy Internship in Nepal</li>
            <li>Medical Elective internship in Nepal</li>
            <li>Gender Equality Internship in Nepal</li>
            <li>Youth Empowerment Internship in Nepal</li>
            <li>Child Protection Internship in Nepal</li>
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
          <a href="#" className="hover:opacity-80">
            <img src="/icons/facebook.svg" alt="facebook" className="w-5 h-5" />
          </a>

          <a href="#" className="hover:opacity-80">
            <img
              src="/icons/instagram.svg"
              alt="instagram"
              className="w-5 h-5"
            />
          </a>

          <a href="#" className="hover:opacity-80">
            <img src="/icons/twitter.svg" alt="twitter" className="w-5 h-5" />
          </a>

          <a href="#" className="hover:opacity-80">
            <img src="/icons/linkedin.svg" alt="linkedin" className="w-5 h-5" />
          </a>

          <a href="#" className="hover:opacity-80">
            <img src="/icons/youtube.svg" alt="youtube" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
