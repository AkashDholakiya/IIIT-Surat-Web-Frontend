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
  const handleContentChange = (key) => {
    setContent(key);
    setIsSidebarOpen(false);
  };
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white w-64 transition-transform duration-300 ease-in-out z-20 overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-1/4 lg:w-1/5`}
      >
        <div className=" pl-4 pr-2 py-6">
          
          {links.map((link) => (
            <div key={link.key} className="mb-4 ml-10">
              <button
                onClick={() => handleContentChange(link.key)}
                className={`w-full text-left flex items-center px-2 py-1 font-semibold transition-transform duration-50 ${
                  activeContent === link.key ? 'text-blue-700 transform scale-105' : 'text-gray-700'
                }`}
              >
                {activeContent === link.key && (
                  <span className="inline-block w-1 h-6 mr-2 bg-blue-700 rounded-full"></span>
                )}
                <span>{link.label}</span>
              </button>
              {link.description && (
                <p className="text-sm text-gray-500 ml-2 mt-1">{link.description}</p>
              )}
            </div>
          ))}
        </div>
        {/* Close Button for Mobile Sidebar */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 md:hidden text-2xl text-gray-700"
        >
          &times;
        </button>
      </div>
  <div className="pl-2">
      {/* Mobile Menu Icon */}
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="top-40 left-4 z-50 bg-white shadow-lg rounded-md p-2 w-10 h-10 flex items-center justify-center hover:bg-gray-100 md:hidden"
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
      )}</div>
    </>
  );
};

export default NavBar;