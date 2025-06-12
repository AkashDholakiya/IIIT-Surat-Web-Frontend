import React, { useState, useRef, useEffect } from "react";
import SixComponent from "../containers/06_temp";
import SevenComponent from "../containers/07_temp";
import FiveComponent from "../containers/05_temp";
import FourComponent from "../containers/04_temp";
import ThreeComponent from "../containers/03_temp";

import data from "../containers/data";

const Page = () => {
  // SHOULD BE FATCH FROM BACKEND
    const DEP="Electronics and Communication Engineering";
    const ECE_HOD = data.about_hod.ECE;
    const faculty = {
      Assistant_professor: data.ece_faculty,
      Assistant_professor_contractual: data.ece_faculty,
      Teaching_assistant: data.ece_faculty,
    }


  const [activeContent, setActiveContent] = useState("about");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState("auto");
  const contentRef = useRef(null);

  const links = [
    { key: "about", label: `About Department` },
    {
      key: "head",
      label: `Head of Department`,
      description: "Dr. Tanmay Dubey",
    },
    {
      key: "faculty",
      label: "Faculty",
      description: "Working for better future",
    },
    { key: "lab", label: "Laboratory", description: "Well equipped 3 labs" },
    { key: "syllabus", label: "Curriculum", description: "Syllabus" },
    {
      key: "seminar",
      label: "Seminar Workshops",
      description: "Research Highlights",
    },
  ];

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

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleContentChange = (key) => {
    setActiveContent(key);
    setIsSidebarOpen(false);
  };

  return (
    <div
      className="relative flex w-full max-w-screen overflow-hidden mt-20"
      style={{ minHeight: contentHeight }}
    >
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white w-64 transition-transform duration-50 ease-in-out z-10 overflow-y-auto
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:w-1/4 lg:w-1/5`}
      >
        <div className="px-4 py-6">
          <button
            className="w-full text-left flex items-center px-2 py-1 font-semibold text-gray-700 mb-6"
            onClick={() => handleContentChange("about")}
          >
            <span className="text-blue-700 ml-10">
              Electronics and Communication
            </span>
          </button>
          {links.map((link) => (
            <div key={link.key} className="mb-4 ml-10">
              <button
                onClick={() => handleContentChange(link.key)}
                className={`w-full text-left flex items-center px-2 py-1 font-semibold transition-transform duration-50 ${
                  activeContent === link.key
                    ? "text-blue-700 transform scale-105"
                    : "text-gray-700"
                }`}
              >
                {activeContent === link.key && (
                  <span className="inline-block w-1 h-6 mr-2 bg-blue-700 rounded-full"></span>
                )}
                <span>{link.label}</span>
              </button>
              {link.description && (
                <p className="text-sm text-gray-500 ml-2 mt-1">
                  {link.description}
                </p>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 md:hidden text-xl"
        >
          &times;
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 overflow-y-auto max-w-full">
        {/* Menu Icon for mobile */}
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="text-2xl mb-4 top-4 left-4 z-20 bg-white p-2 rounded-md shadow-lg md:hidden"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        )}

        {/* Conditional Rendering of Components */}
        <div ref={contentRef}>
          {activeContent === "about" && <ThreeComponent about={data.ece_about.text} Dep={DEP} HOD={ECE_HOD.name}/>}
          {activeContent === "head" && <FourComponent HOD={ECE_HOD}/>}
          {activeContent === "faculty" && <FiveComponent faculty = {faculty}/>}
          {activeContent === "lab" && <SixComponent Dep={DEP} assistants={faculty.Assistant_professor} focusCardsData={data.focusCardsData} roles={data.roles}/>}
          {activeContent === "seminar" && <SevenComponent />}
        </div>
      </div>
    </div>
  );
};

export default Page;
