export default function AboutPage() {
  return (
    <main>
      {/* Main content section */}

      <section className="w-full bg-white py-20 px-6">
        <div className=" mx-auto text-center">
          {/* Heading */}
          <h2 className="text-[40px] font-medium text-[#1f2a44] leading-none mb-10">
            About Us
          </h2>

          {/* Description */}
          <p className="text-[18px] leading-[32px] text-black font-small max-w-5xl mx-auto">
            We are a{" "}
            <span className="font-semibold text-[#1f2a44]">
              not-for-profit NGO
            </span>{" "}
            based in Kathmandu,{" "}
            <span className="font-semibold text-[#1f2a44]">
              working in rural communities of Nepal
            </span>{" "}
            with volunteer in Nepal. Our mission is to empower marginalized
            communities through{" "}
            <span className="font-semibold text-[#1f2a44]">
              equitable, inclusive, and holistic development programs.
            </span>
          </p>
        </div>
      </section>
      {/* Volunteering Program Section */}

      <section className="w-full py-16 bg-white overflow-x-auto">
        <div className="min-w-[1250px] flex flex-col items-center">
          
          <div className="text-center relative">
            <h2 className="text-[38px] font-medium text-[#1F2A44] leading-none">
              Our Volunteering Program:
            </h2>

            <p className="mt-3 text-[16px] text-[#7B8191]">
              There are four pillars in our developmental approach:
            </p>

            {/* TOP CENTER CONNECTOR */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[62px] w-[2px] h-[65px] bg-[#CBD5E1]" />
          </div>

          
          <div className="relative w-[980px] h-[180px] mt-8">
           

            {/* TOP HORIZONTAL */}
            <div className="absolute top-0 left-[105px] w-[770px] h-[2px] bg-[#CBD5E1]" />

            {/* LEFT */}
            <div className="absolute top-0 left-[105px] w-[2px] h-[60px] bg-[#CBD5E1]" />

            {/* RIGHT */}
            <div className="absolute top-0 right-[105px] w-[2px] h-[60px] bg-[#CBD5E1]" />

            {/* CENTER 1 */}
            <div className="absolute top-0 left-[327px] w-[2px] h-[60px] bg-[#CBD5E1]" />

            {/* CENTER 2 */}
            <div className="absolute top-0 right-[327px] w-[2px] h-[60px] bg-[#CBD5E1]" />

            

            {/* BOTTOM HORIZONTAL */}
            <div className="absolute bottom-0 left-[105px] w-[770px] h-[2px] bg-[#CBD5E1]" />

            {/* LEFT */}
            <div className="absolute bottom-0 left-[105px] w-[2px] h-[65px] bg-[#CBD5E1]" />

            {/* RIGHT */}
            <div className="absolute bottom-0 right-[105px] w-[2px] h-[65px] bg-[#CBD5E1]" />

            {/* CENTER 1 */}
            <div className="absolute bottom-0 left-[327px] w-[2px] h-[65px] bg-[#CBD5E1]" />

            {/* CENTER 2 */}
            <div className="absolute bottom-0 right-[327px] w-[2px] h-[65px] bg-[#CBD5E1]" />

            
            <div className="absolute top-[35px] left-0 grid grid-cols-4 gap-6 w-full">
              <div className="w-[215px] h-[68px] rounded-[6px] bg-[#F1F5F9] flex items-center justify-center text-center px-4">
                <p className="text-[15px] font-medium leading-[20px] text-[#1F2A44] underline">
                  Education
                </p>
              </div>

              <div className="w-[215px] h-[68px] rounded-[6px] bg-[#F1F5F9] flex items-center justify-center text-center px-4">
                <p className="text-[15px] font-medium leading-[20px] text-[#1F2A44] underline">
                  Health and <br /> Environment
                </p>
              </div>

              <div className="w-[215px] h-[68px] rounded-[6px] bg-[#F1F5F9] flex items-center justify-center text-center px-4">
                <p className="text-[15px] font-medium leading-[20px] text-[#1F2A44] underline">
                  Economy
                </p>
              </div>

              <div className="w-[215px] h-[68px] rounded-[6px] bg-[#F1F5F9] flex items-center justify-center text-center px-4">
                <p className="text-[15px] font-medium leading-[20px] text-[#1F2A44] underline">
                  Basic infrastructure <br /> development
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 flex items-center gap-6">
            <div className="w-[215px] h-[68px] bg-[#F1F5F9] rounded-[6px] flex items-center justify-center text-center px-4">
              <p className="text-[14px] leading-[19px] text-[#1F2A44] underline font-medium">
                Women’s <br /> Empowerment
              </p>
            </div>

            <div className="w-[215px] h-[68px] bg-[#F1F5F9] rounded-[6px] flex items-center justify-center text-center px-4">
              <p className="text-[14px] leading-[19px] text-[#1F2A44] underline font-medium">
                Children <br /> Development
              </p>
            </div>

            <div className="w-[215px] h-[68px] bg-[#F1F5F9] rounded-[6px] flex items-center justify-center text-center px-4">
              <p className="text-[14px] leading-[19px] text-[#1F2A44] underline font-medium">
                Youth <br /> Empowerment
              </p>
            </div>

            <div className="w-[215px] h-[68px] bg-[#F1F5F9] rounded-[6px] flex items-center justify-center text-center px-4">
              <p className="text-[14px] leading-[19px] text-[#1F2A44] underline font-medium">
                Public & Medical <br /> Health
              </p>
            </div>

            <div className="w-[215px] h-[68px] bg-[#F1F5F9] rounded-[6px] flex items-center justify-center text-center px-4">
              <p className="text-[14px] leading-[19px] text-[#1F2A44] underline font-medium">
                Environment <br /> Conservation
              </p>
            </div>

            <div className="w-[215px] h-[68px] bg-[#F1F5F9] rounded-[6px] flex items-center justify-center text-center px-4">
              <p className="text-[14px] leading-[19px] text-[#1F2A44] underline font-medium">
                Disaster Risk <br /> Reduction
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*description section*/}
      <section className="w-full bg-white py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className=" gap-16 items-start mb-20">
            {/* Left Image */}
            <div className="w-full">
              <img
                src="/pillar.png"
                alt="Volunteer Nepal"
                className="w-full h-[620px] object-contain "
              />
            </div>

            {/* Right Content */}
            <div className="max-w-5xl mx-auto">
              {/* Paragraph */}
              <p className="text-[18px] leading-[28px] font-normal text-[#5b6478] mb-6">
                All VIN’s developmental and humanitarian programs are aligned
                with UN Sustainable Development Goals (SDGs).
              </p>

              {/* Paragraph */}
              <p className="text-[18px] leading-[28px] font-normal text-[#5b6478] mb-8">
                Women and Children are the nucleus of our development
                initiatives. We pay special attention to women’s and children’s
                issues. We bring innovation to our programs by conducting
                research and deploying national and international volunteer in
                Nepal. The integrated development approach has proved to promote
                equality, economic well-being, and basic human rights.
              </p>

              {/* Heading */}
              <h2 className="text-[38px] font-medium leading-[48px] text-center text-[#1f2a44] mb-8">
                Volunteer in Nepal programs:
              </h2>

              {/* Paragraph */}
              <p className="text-[18px] leading-[28px] font-normal text-[#5b6478] mb-10">
                This has been possible due to our dedicated staff, alliances
                with like-minded organizations, and the efforts and
                contributions of local and international volunteers in Nepal. We
                offer the most affordable international volunteering &
                internship placements in Nepal. VIN funds and runs mid to
                long-term sustainable community-based volunteer service
                projects, focusing on three most disadvantaged communities with
                a special focus on women, children, and minority groups.
              </p>

              {/* Paragraph */}
              <p className="text-[18px] leading-[28px] font-normal text-[#5b6478] mb-14">
                Building our projects on these pillars and SDGs has ensured an
                integrated and sustainable impact on the community people and
                will give the greatest chance of independence for our working
                communities.
              </p>

              {/* Heading */}
              <h2 className="text-[38px] font-medium leading-[48px] text-center text-[#1f2a44] mb-8">
                With the most trusted local volunteer organization.
              </h2>

              {/* Paragraph */}
              <p className="text-[18px] leading-[28px] font-normal text-[#5b6478]">
                VIN is a non-profit, secular, charitable volunteer organization
                based in Kathmandu, Nepal founded in 2005. We are also a member
                of international voluntary networks worldwide like CCIVS, NVDA,
                Alliance, FEVA-inc, US, UK, and Australia.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*description section*/}
      <section className="w-full bg-white py-10 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Top Heading */}
          <h2 className="text-[38px] font-medium text-center text-[#1f2a44] mb-10">
            10 best volunteer programs in Nepal include:
          </h2>

          {/* Programs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-10 text-center mb-20">
            <p className="text-[18px] underline text-black font-sm">
              Women Empowerment
            </p>

            <p className="text-[18px] underline text-black font-sm">
              Child Development
            </p>

            <p className="text-[18px] underline text-black font-sm">
              Public Health & Medical Care
            </p>

            <p className="text-[18px] underline text-black font-sm">
              Environment Conservation
            </p>

            <p className="text-[18px] underline text-black font-medium">
              Youth Empowerment
            </p>

            <p className="text-[18px] underline text-black font-medium">
              Administration
            </p>

            <p className="text-[18px] underline text-black font-sm">
              Disaster Risk Reduction
            </p>

            <p className="text-[18px] underline text-black font-sm">
              Adventure and Volunteering
            </p>

            <p className="text-[18px] underline text-black font-sm col-span-2 md:col-span-4">
              Journalism Management
            </p>
          </div>

          {/* Nepal Challenge */}
          <div className="mb-20">
            <h2 className="text-[40px] font-medium text-center text-[#1f2a44] mb-10">
              Nepal’s <span className="text-[#d94747]">Challenge</span>
            </h2>

            <ul className="space-y-2 text-[18px] leading-[28px] text-[#5b6478] font-normal">
              <li>
                • Nepal is among the poorest and least developed countries, with
                over 25% of its population below the poverty line.
              </li>

              <li>
                • Geography limits agriculture: only about 20% of land is
                cultivable, yet over 75% of the population depends on farming.
              </li>

              <li>
                • Seasonal agriculture causes periods with no income or food,
                pushing families to rely on debt labor.
              </li>

              <li>
                • Children in rural areas often miss school due to farm work,
                chores, or lack of money for supplies and uniforms.
              </li>

              <li>
                • Gender and caste discrimination remain significant barriers to
                progress, girls are often viewed as burdens and married early.
              </li>

              <li>
                • Literacy rates are low (approx. 49%), with even lower rates
                for women.
              </li>

              <li>
                • Sanitation access is poor; only 31% have improved sanitation
                and water sources are widely polluted.
              </li>

              <li>
                • Nepal has experienced long-standing political instability,
                though a constitution was finally enacted in 2015.
              </li>

              <li>• Many new laws are still needed.</li>

              <li>
                • Direction is 20% established at some stable government, but
                governance challenges remain.
              </li>
            </ul>
          </div>

          {/* Our Response */}
          <div>
            <h2 className="text-[38px] font-medium text-center text-[#1f2a44] mb-10">
              Our Response
            </h2>

            <p className="text-[18px] leading-[28px] text-[#5b6478] mb-10">
              VIN facilitates projects focused on the women and children of
              marginalized communities against this challenging backdrop. VIN
              believes that the empowerment of women and children will bring
              about positive change to desperately needed in Nepal.
            </p>

            {/* Section */}
            <div className="mb-12">
              <h3 className="text-[30px] font-medium text-[#1f2a44] mb-5">
                JitpurPhedi:
              </h3>

              <p className="text-[18px] leading-[28px] text-[#5b6478]">
                VIN facilitates projects focused on the women and children of
                marginalized communities against this challenging backdrop. VIN
                believes that the empowerment of women and children will bring
                about positive change to desperately needed in Nepal.
              </p>
            </div>

            {/* Section */}
            <div className="mb-12">
              <h3 className="text-[30px] font-medium text-[#1f2a44] mb-5">
                Tarkeshwor Municipality:
              </h3>

              <p className="text-[18px] leading-[28px] text-[#5b6478]">
                Tarkeshwor municipality, outskirts of Kathmandu 14 to 17 KM from
                the main city of Kathmandu. Kavresthali, Jitphedi, Dharmasthali,
                Sangla, Futung, Manmaju, and surrounding areas about 30–45
                minutes to reach these locations by local bus.
              </p>

              <p className="text-[18px] leading-[28px] text-[#5b6478] mt-6">
                In almost 13 years, VIN has made significant progress within the
                community, aiding the construction of toilets in 300 homes in
                Tarkeshwor with local government organizations and international
                volunteers in Nepal.
              </p>
            </div>

            {/* Section */}
            <div>
              <h3 className="text-[30px] font-medium text-[#1f2a44] mb-5">
                Okhaldhunga:
              </h3>

              <p className="text-[18px] leading-[28px] text-[#5b6478]">
                Okhaldhunga situated in the Everest region of Nepal, some 250km
                from Kathmandu. Okhaldhunga has a population of over 70,000. VIN
                has been working with these villages since 2010.
              </p>

              <p className="text-[18px] leading-[28px] text-[#5b6478] mt-6">
                VIN believes in financial transparency. The project fees paid by
                volunteers are the main source of income to fund our community
                projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
