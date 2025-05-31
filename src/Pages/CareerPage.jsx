import React, { useEffect, useRef, useState } from "react";

// --- Sample Data (Replace with your real data or fetch from API) ---
const facultyPositions = [
  // Leave empty to show "no openings" state
  {
    title: "Assistant Professor (CSE)",
    openDate: "01 June 2025",
    openDay: "Sunday",
    closeDate: "30 June 2025",
    closeDay: "Monday",
    docs: [
      { label: "View Advertisement", url: "#" },
      { label: "Application Form", url: "#" },
    ],
  },
];

const nonFacultyPositions = [
  {
    title: "Recruitment of Training and Placement Officer",
    openDate: "09 Aug. 2025",
    openDay: "Monday",
    closeDate: "09 Aug. 2025",
    closeDay: "Monday",
    docs: [
      { label: "View Advertisement", url: "#" },
      { label: "Application Form", url: "#" },
    ],
  },
  // Add more non-faculty positions here
];

const links = [
  { key: "Faculty Positions", label: "Faculty Positions", description: "Career at IIIT Surat" },
  { key: "Non Faculty Positions", label: "Non Faculty Positions", description: "Career at IIIT Surat" },
];

const CareerPage = () => {
  const [activeContent, setActiveContent] = useState("Faculty Positions");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState("auto");
  const contentRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        const height = contentRef.current.scrollHeight;
        setContentHeight(`${height}px`);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }
    return () => {
      if (contentRef.current) {
        resizeObserver.unobserve(contentRef.current);
      }
    };
  }, [activeContent]);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const handleContentChange = (key) => {
    setActiveContent(key);
    setIsSidebarOpen(false);
  };

  // Choose data based on activeContent
  const tableData =
    activeContent === "Faculty Positions" ? facultyPositions : nonFacultyPositions;

  return (
    <div className="bg-white min-h-screen px-2 py-4 md:px-8 lg:px-16">
      {/* Mobile Menu Icon */}
      <button
        aria-label="Open sidebar"
        onClick={toggleSidebar}
        className={`fixed top-14 left-4 z-30 bg-white p-2 rounded-md shadow-lg md:hidden transition-opacity ${
          isSidebarOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <svg
          className="w-7 h-7 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <div
        className="relative flex flex-col md:flex-row w-full max-w-screen-xl mx-auto mt-8"
        style={{ minHeight: contentHeight }}
      >
        {/* Sidebar */}
        <aside
          aria-label="Career navigation"
          className={`fixed top-0 left-0 h-full bg-white w-64 transition-transform duration-200 ease-in-out z-20 overflow-y-auto
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:static md:translate-x-0 md:w-1/4 lg:w-1/5 md:h-auto md:rounded-lg md:shadow-none shadow-xl`}
        >
          <div className="px-4 py-6">
            <span className="block text-lg font-bold text-blue-700 mb-8 ml-6 md:ml-0">
              Career
            </span>
            {links.map((link) => (
              <div key={link.key} className="mb-4 ml-6 md:ml-0">
                <button
                  onClick={() => handleContentChange(link.key)}
                  className={`w-full text-left flex items-center px-2 py-1 font-semibold rounded transition-all duration-100 ${
                    activeContent === link.key
                      ? "text-blue-700 scale-105"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {activeContent === link.key && (
                    <span className="inline-block w-1 h-6 mr-2 bg-blue-700 rounded-full"></span>
                  )}
                  <span>{link.label}</span>
                </button>
                {link.description && (
                  <p className="text-sm text-gray-500 ml-6 mt-1">
                    {link.description}
                  </p>
                )}
              </div>
            ))}
          </div>
          {/* Close button for mobile */}
          <button
            aria-label="Close sidebar"
            onClick={toggleSidebar}
            className="absolute top-4 right-4 md:hidden text-3xl text-gray-700"
          >
            &times;
          </button>
        </aside>

        {/* Table Content */}
        <main
          ref={contentRef}
          className="flex-1 mt-8 md:mt-0 md:ml-8 lg:ml-12 w-full"
        >
          <div className="overflow-x-auto rounded-lg shadow border bg-white">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left text-blue-800">
                  <th className="py-3 px-4 font-semibold">Advertisement Title</th>
                  <th className="py-3 px-4 font-semibold">Open Date</th>
                  <th className="py-3 px-4 font-semibold">Closing Date</th>
                  <th className="py-3 px-4 font-semibold">Details Doc.</th>
                </tr>
              </thead>
              <tbody>
                {tableData.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-12 px-4 text-center">
                      <div className="flex flex-col items-center justify-center space-y-2">
                      
                        <p className="text-gray-500 font-medium"></p>
                        <p className="text-sm text-gray-400">
                          Please check back later for new opportunities.
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  tableData.map((row, idx) => (
                    <tr key={idx} className="border-t  transition">
                      <td className="py-3 px-4 font-semibold">{row.title}</td>
                      <td className="py-3 px-4 font-semibold">
                        {row.openDate}
                        <br />
                        <span className="text-xs text-gray-400 font-semibold">
                          {row.openDay}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-semibold">
                        {row.closeDate}
                        <br />
                        <span className="text-xs text-gray-400 font-semibold">
                          {row.closeDay}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <ul className="space-y-1">
                          {row.docs.map((doc, dIdx) => (
                            <li key={dIdx}>
                              <a
                                href={doc.url}
                                className="text-blue-800 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {doc.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CareerPage;
