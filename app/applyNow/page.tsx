"use client";

export default function ApplyNowPage() {
  const programs = [
    "Children’s Development Program",
    "Youth Empowerment Program",
    "Public Health & Medical Program",
    "Environment Conservation Program",
    "Disaster Risk Reduction (DRR) Program",
    "Public health and medical care",
    "Environment conservation",
    "Teaching program",
    "Management & Administration",
    "Journalism",
    "Public Interest",
    "WorkCamps",
  ];

  return (
    <section className="w-full bg-[#f7f7f7] py-10">
      <div className="w-full px-4 md:px-8 lg:px-10">
        {/* PAGE TITLE */}
        <h1 className="text-[38px] font-medium text-[#1f2a44] mb-8">
          Apply Now
        </h1>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
          {/* =========================
              LEFT FORM
          ========================= */}
          <div className="bg-white border border-[#e5e7eb] rounded-[10px] p-6">
            <form className="space-y-5">
              {/* NAME */}
              <div>
                <label className="block text-[14px] font-medium text-black mb-2">
                  Enter Name *
                </label>

                <input
                  type="text"
                  placeholder="e.g. Sweekar"
                  className="w-full h-[48px] rounded-[6px] border border-[#E2E8F0] bg-[#F1F2FB] px-4 text-[14px] outline-none"
                />
              </div>

              {/* GENDER + DATE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* GENDER */}
                <div>
                  <label className="block text-[14px] font-medium text-black mb-3">
                    Gender *
                  </label>

                  <div className="flex items-center gap-5 text-[14px] text-[#6b7280]">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="gender" />
                      Male
                    </label>

                    <label className="flex items-center gap-2">
                      <input type="radio" name="gender" defaultChecked />
                      Fe-male
                    </label>

                    <label className="flex items-center gap-2">
                      <input type="radio" name="gender" />
                      Others
                    </label>
                  </div>
                </div>

                {/* DATE */}
                <div>
                  <label className="block text-[14px] font-medium text-black mb-2">
                    Date *
                  </label>

                  <input
                    type="date"
                    className="w-full h-[48px] rounded-[6px] border border-[#E2E8F0] bg-[#F1F2FB] px-4 text-[14px] outline-none"
                  />
                </div>
              </div>

              {/* COUNTRY + ADDRESS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[14px] font-medium text-black mb-2">
                    Country *
                  </label>

                  <select className="w-full h-[48px] rounded-[6px] border border-[#E2E8F0] bg-[#F1F2FB] px-4 text-[14px] outline-none">
                    <option>---select---</option>
                    <option>Nepal</option>
                    <option>India</option>
                    <option>USA</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-black mb-2">
                    Address *
                  </label>

                  <input
                    type="text"
                    placeholder="Related Subject"
                    className="w-full h-[48px] rounded-[6px] border border-[#E2E8F0] bg-[#F1F2FB] px-4 text-[14px] outline-none"
                  />
                </div>
              </div>

              {/* PHONE + AVAILABLE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[14px] font-medium text-black mb-2">
                    Phone *
                  </label>

                  <input
                    type="text"
                    placeholder="+977-1234546332"
                    className="w-full h-[48px] rounded-[6px] border border-[#E2E8F0] bg-[#F1F2FB] px-4 text-[14px] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-black mb-2">
                    Available on *
                  </label>

                  <div className="flex flex-wrap gap-3 text-[14px] text-[#6b7280]">
                    {[
                      "Facebook",
                      "Whatsapp",
                      "Telegram",
                      "Wechat",
                      "Viber",
                      "iMessage",
                      "Other",
                    ].map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-2"
                      >
                        <input type="checkbox" />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* EMAIL + ALT EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[14px] font-medium text-black mb-2">
                    Email *
                  </label>

                  <input
                    type="email"
                    placeholder="Related Subject"
                    className="w-full h-[48px] rounded-[6px] border border-[#E2E8F0] bg-[#F1F2FB] px-4 text-[14px] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-black mb-2">
                    Alternate Email
                  </label>

                  <input
                    type="email"
                    placeholder="Related Subject"
                    className="w-full h-[48px] rounded-[6px] border border-[#E2E8F0] bg-[#F1F2FB] px-4 text-[14px] outline-none"
                  />
                </div>
              </div>

              {/* QUALIFICATION */}
              <div>
                <label className="block text-[14px] font-medium text-black mb-2">
                  Qualification *
                </label>

                <input
                  type="text"
                  placeholder="Related Subject"
                  className="w-full h-[48px] rounded-[6px] border border-[#E2E8F0] bg-[#F1F2FB] px-4 text-[14px] outline-none"
                />
              </div>

              {/* SOCIAL URLS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-[13px] font-medium text-black mb-2">
                    Facebook URL
                  </label>

                  <input
                    type="text"
                    placeholder="Related Subject"
                    className="w-full h-[46px] rounded-[6px] border border-[#E2E8F0] bg-[#F1F2FB] px-4 text-[14px]"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-black mb-2">
                    Instagram URL
                  </label>

                  <input
                    type="text"
                    placeholder="Related Subject"
                    className="w-full h-[46px] rounded-[6px] border border-[#E2E8F0] bg-[#F1F2FB] px-4 text-[14px]"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-black mb-2">
                    Twitter(X) URL
                  </label>

                  <input
                    type="text"
                    placeholder="Related Subject"
                    className="w-full h-[46px] rounded-[6px] border border-[#E2E8F0] bg-[#F1F2FB] px-4 text-[14px]"
                  />
                </div>
              </div>

              {/* PROJECT SITE */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-[13px] font-medium text-black mb-2">
                    Select Project Site *
                  </label>

                  <input
                    type="text"
                    placeholder="Related Subject"
                    className="w-full h-[46px] rounded-[6px] border border-[#E2E8F0] bg-[#F1F2FB] px-4 text-[14px]"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-black mb-2">
                    Choose Starting Date *
                  </label>

                  <input
                    type="text"
                    placeholder="Related Subject"
                    className="w-full h-[46px] rounded-[6px] border border-[#E2E8F0] bg-[#F1F2FB] px-4 text-[14px]"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-black mb-2">
                    How long *
                  </label>

                  <input
                    type="text"
                    placeholder="Related Subject"
                    className="w-full h-[46px] rounded-[6px] border border-[#E2E8F0] bg-[#F1F2FB] px-4 text-[14px]"
                  />
                </div>
              </div>

              {/* PROGRAM */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-medium text-black mb-2">
                    Which Program *
                  </label>

                  <input
                    type="text"
                    placeholder="Related Subject"
                    className="w-full h-[46px] rounded-[6px] border border-[#E2E8F0] bg-[#F1F2FB] px-4 text-[14px]"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-black mb-2">
                    Choose Program ?
                  </label>

                  <input
                    type="text"
                    placeholder="Related Subject"
                    className="w-full h-[46px] rounded-[6px] border border-[#E2E8F0] bg-[#F1F2FB] px-4 text-[14px]"
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-[14px] font-medium text-black mb-2">
                  Motivation towards program (Agenda) *
                </label>

                <textarea
                  rows={6}
                  placeholder="Type your messages here"
                  className="w-full rounded-[6px] border border-[#E2E8F0] bg-[#F1F2FB] px-4 py-4 text-[14px] outline-none resize-none"
                />
              </div>

              {/* WHERE FIND */}
              <div>
                <label className="block text-[14px] font-medium text-black mb-2">
                  Where did you find us *
                </label>

                <select className="w-full h-[48px] rounded-[6px] border border-[#E2E8F0] bg-[#F1F2FB] px-4 text-[14px] outline-none">
                  <option>---select---</option>
                  <option>Facebook</option>
                  <option>Instagram</option>
                  <option>Google</option>
                </select>
              </div>

              {/* BUTTON */}
              <button className="w-full h-[52px] rounded-[6px] bg-[#2A3495] text-white text-[15px] font-medium hover:bg-[#1f2875] transition">
                Sponsor Child
              </button>
            </form>
          </div>

          {/* =========================
              RIGHT SIDEBAR
          ========================= */}
          <div className="bg-white border border-[#e5e7eb] rounded-[10px] overflow-hidden">
            {/* TITLE */}
            <div className="px-6 py-5 border-b border-[#e5e7eb]">
              <h2 className="text-[30px] font-medium text-[#1f2a44]">
                Our Available Programs
              </h2>
            </div>

            {/* PROGRAM LIST */}
            <div>
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="px-6 py-5 border-b border-[#e5e7eb] text-[15px] text-[#4b5563] hover:bg-[#f8f9fc] transition cursor-pointer"
                >
                  {program}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}