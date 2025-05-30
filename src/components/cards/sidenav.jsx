import React, { useState } from "react";
import clubData from "../../Data/clubsData.js";

const NavBar = ({ setContent, activeContent, childContent, parentContent }) => {
  const content = childContent || parentContent;
  const leadName =
  clubData?.[parentContent]?.[childContent]?.lead || // lead of specific childContent
  clubData?.[parentContent]?.lead || // lead of parentContent directly
  (clubData?.[parentContent] &&
    typeof clubData[parentContent] === "object" &&
    Object.values(clubData[parentContent])[0]?.lead) || // lead of first subclub under parent
  "Club Lead Not Assigned";


  const links = [
    { key: "about", label: `About ${content}` },
    { key: "lead", label: `${content} Lead`, description: leadName },
    { key: "events", label: "Events hosted", description: "Working for a better future" },
    { key: "gallery", label: "Photo gallery", description: "Well equipped with 3 labs" },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white w-64 transition-transform duration-300 ease-in-out z-20 overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-1/4 lg:w-1/6`}
      >
        <div className="p-4">
          <div className="space-y-4">
            {links.map((link) => (
              <div key={link.key} className="flex items-center space-x-2">
                {/* Indicator for active link */}
                {activeContent === link.key ? (
                  <div className="w-1 bg-blue-700 h-6 rounded"></div>
                ) : (
                  <div className="w-1 h-6"></div>
                )}
                {/* Link */}
                <div>
                  <button
                    onClick={() => {
                      setContent(link.key);
                      setIsSidebarOpen(false); // Close sidebar on mobile when a link is clicked
                    }}
                    className={`text-base font-semibold ${
                      activeContent === link.key
                        ? "text-blue-700 hover:text-red-800"
                        : "text-gray-700 hover:text-black"
                    }`}
                  >
                    {link.label}
                  </button>
                  {link.description && (
                    <p className="text-gray-500 text-sm">{link.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Close Button for Mobile Sidebar */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 md:hidden text-2xl text-gray-700"
        >
          &times;
        </button>
      </div>

      {/* Mobile Menu Icon */}
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-40 left-4 z-50 bg-white shadow-lg rounded-md p-2 w-10 h-10 flex items-center justify-center hover:bg-gray-100 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default NavBar;
