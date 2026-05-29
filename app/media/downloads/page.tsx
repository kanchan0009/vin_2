export default function DownloadPage() {
  const sections = [
    {
      title: "Terms & Conditions",
      files: [
        {
          id: 1,
          name: "Terms and Conditions",
          type: "TOR",
          format: "pdf",
          link: "#",
        },
      ],
    },

    {
      title: "Annual Reports",
      files: [
        {
          id: 1,
          name: "Annual Report 2020",
          type: "TOR",
          format: "pdf",
          link: "#",
        },
        {
          id: 2,
          name: "Annual Report 2021",
          type: "TOR",
          format: "pdf",
          link: "#",
        },
        {
          id: 3,
          name: "Annual Report 2022",
          type: "TOR",
          format: "pdf",
          link: "#",
        },
        {
          id: 4,
          name: "Annual Report 2023",
          type: "TOR",
          format: "pdf",
          link: "#",
        },
        {
          id: 5,
          name: "Annual Report 2024",
          type: "TOR",
          format: "pdf",
          link: "#",
        },
      ],
    },

    {
      title: "Newsletter",
      files: [
        {
          id: 1,
          name: "Monthly Newsletter",
          type: "TOR",
          format: "pdf",
          link: "#",
        },
      ],
    },

    {
      title: "Work Camp",
      files: [
        {
          id: 1,
          name: "Work Camp Details",
          type: "TOR",
          format: "pdf",
          link: "#",
        },
      ],
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#F5F6F8] py-14 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-14">
          <h1 className="text-[40px] font-medium text-[#1f2a44] mb-4">
            Download
          </h1>

          <p className="max-w-[850px] text-[18px] leading-[26px] text-[#6B7280]">
            Download the important and required information and files you need
            to read and know about us before collaborating with us.
          </p>
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <div key={index} className="mb-12">
            
            {/* Title */}
            <h2 className="text-[30px] font-medium text-[#1f2a44] mb-4">
              {section.title}
            </h2>

            {/* Table */}
            <div className="overflow-hidden rounded-[8px] border border-[#E5E7EB] bg-white">
              <table className="w-full">
                
                {/* Table Head */}
                <thead className="bg-[#2F3C97]">
                  <tr>
                    <th className="px-5 py-4 text-left text-white text-[13px] font-medium">
                      S.N
                    </th>

                    <th className="px-5 py-4 text-left text-white text-[13px] font-medium">
                      Title
                    </th>

                    <th className="px-5 py-4 text-left text-white text-[13px] font-medium">
                      Type
                    </th>

                    <th className="px-5 py-4 text-left text-white text-[13px] font-medium">
                      Format
                    </th>

                    <th className="px-5 py-4 text-left text-white text-[13px] font-medium">
                      Download
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {section.files.map((file) => (
                    <tr
                      key={file.id}
                      className="border-t border-[#EEF1F4]"
                    >
                      <td className="px-5 py-4 text-[14px] text-[#4B5563]">
                        {file.id}
                      </td>

                      <td className="px-5 py-4 text-[14px] text-[#374151]">
                        {file.name}
                      </td>

                      <td className="px-5 py-4 text-[14px] text-[#6B7280]">
                        {file.type}
                      </td>

                      <td className="px-5 py-4 text-[14px] text-[#6B7280]">
                        {file.format}
                      </td>

                      <td className="px-5 py-4">
                        <a
                          href={file.link}
                          className="text-[#2563EB] text-[14px] font-medium hover:underline"
                        >
                          Click Here
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}