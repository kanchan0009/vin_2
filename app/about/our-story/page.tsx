export default function OurStoryPage() {
  return (
    <main className="w-full bg-white py-16 px-6 md:px-10">
      <div className="max-w-full md:max-w-[900px] mx-auto px-4 md:px-0">
        {/* =========================================
            PAGE TITLE
        ========================================= */}
        <div className="text-center mb-14">
          <h1 className="text-[38px] font-[700] text-[#1f2a44] tracking-[-0.5px]">
            Our Story
          </h1>
        </div>

        {/* =========================================
            CONTENT
        ========================================= */}
        <div className="space-y-8">
          <p className="text-[15px] leading-[32px] text-[#5b6478] font-normal">
            The story was generated around conversations together. Volunteers
            Initiative Nepal (VIN) was founded with a vision to empower
            marginalized communities through volunteer-driven development. What
            began as a small initiative has grown into a trusted organization
            working with local communities, volunteers, and international
            partners to create meaningful and sustainable change across Nepal.
          </p>

          <p className="text-[15px] leading-[32px] text-[#5b6478] font-normal">
            The idea emerged from the shared experiences of educators,
            researchers, and development practitioners who believed that
            communities themselves should lead the process of change. VIN was
            created to provide opportunities for people from around the world to
            work together with local Nepali communities in areas such as
            education, women’s empowerment, public health, youth development,
            environmental conservation, and disaster preparedness.
          </p>

          <p className="text-[15px] leading-[32px] text-[#5b6478] font-normal">
            Over the years, VIN has developed strong partnerships with local
            leaders, schools, women’s groups, and youth clubs to ensure that
            every project responds directly to community needs. Through
            volunteer placements, internships, and grassroots programs, VIN has
            continued to create opportunities for learning, collaboration, and
            social impact.
          </p>

          {/* =========================================
              FEATURE IMAGE
          ========================================= */}
          <div className="w-full overflow-hidden rounded-[8px] border border-[#e5e7eb] shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop"
              alt="VIN Volunteers"
              className="w-full h-[320px] object-cover"
            />
          </div>

          <p className="text-[15px] leading-[32px] text-[#5b6478] font-normal">
            As volunteers traveled from different countries to Nepal, they
            contributed their skills, ideas, and enthusiasm to local projects.
            Communities benefited from educational support, health awareness,
            skill-building workshops, environmental campaigns, and youth
            leadership programs. In return, volunteers gained life-changing
            experiences and deeper understanding of Nepali culture and
            grassroots development.
          </p>

          <p className="text-[15px] leading-[32px] text-[#5b6478] font-normal">
            VIN believes that sustainable change is only possible when
            communities themselves are empowered to lead the process. Therefore,
            every initiative is designed to strengthen local capacity, encourage
            participation, and ensure long-term impact beyond short-term
            volunteer engagement.
          </p>

          <p className="text-[15px] leading-[32px] text-[#5b6478] font-normal">
            The organization has also remained committed to inclusiveness,
            equality, and social justice. Special focus is given to supporting
            women, children, and disadvantaged groups who often face barriers in
            accessing education, healthcare, economic opportunities, and basic
            services.
          </p>

          {/* =========================================
              CENTER HIGHLIGHT
          ========================================= */}
          <div className="text-center py-6">
            <h2 className="text-[16px] font-semibold leading-[44px] text-[#1f2a44] max-w-4xl mx-auto">
              Every volunteer has a skill. One small effort may uplift the life
              opportunities, dreams, and future of another person.
            </h2>
          </div>

          <p className="text-[15px] leading-[32px] text-[#5b6478] font-normal">
            Today, VIN continues to welcome volunteers, interns, and supporters
            from around the world. The organization has expanded its projects
            into different regions of Nepal and works closely with communities
            to identify priorities, develop solutions, and create opportunities
            for sustainable development.
          </p>

          <p className="text-[15px] leading-[32px] text-[#5b6478] font-normal">
            From educational programs and women’s empowerment initiatives to
            environmental conservation and youth leadership activities, VIN’s
            story is built on the belief that collective action can transform
            lives. Every volunteer, donor, and community member plays a role in
            creating a more inclusive and hopeful future.
          </p>

          <p className="text-[15px] leading-[32px] text-[#5b6478] font-normal">
            The organization remains dedicated to promoting volunteerism as a
            tool for social change while ensuring that communities remain at the
            center of every initiative. VIN continues to inspire individuals to
            contribute their time, skills, and compassion toward building
            stronger communities across Nepal.
          </p>

          {/* Signature */}
          <div className="text-center pt-8">
            <p className="text-[18px]  font-medium text-[#1f2a44]">
              By Admin Editorial
            </p>
          </div>
        </div>

        {/* =========================================
            CTA SECTION
        ========================================= */}
        <div className="mt-16 rounded-[10px] overflow-hidden bg-gradient-to-r from-[#2A3495] to-[#3b49d1] px-10 py-8 relative">
          {/* Decorative Circles */}
          <div className="hidden md:block absolute right-0 top-0 w-[220px] h-full opacity-20">
            <div className="absolute top-6 right-10 w-24 h-24 border border-white rounded-full" />
            <div className="absolute top-20 right-0 w-32 h-32 border border-white rounded-full" />
            <div className="absolute bottom-0 right-16 w-20 h-20 border border-white rounded-full" />
          </div>

          <div className="relative z-10">
            <h2 className="text-[34px] font-semibold text-white mb-4">
              Become a part of the change
            </h2>

            <p className="text-[15px] leading-[28px] text-white/80 max-w-full md:max-w-[520px] mb-8">
              Help communities grow through meaningful volunteering,
              collaboration, and sustainable social impact initiatives.
            </p>

            <button className="bg-white text-[#2A3495] hover:bg-[#f3f4f6] transition-all duration-300 text-[14px] font-semibold px-8 py-3 rounded-[4px] shadow-md">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
