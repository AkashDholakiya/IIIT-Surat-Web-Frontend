import React, { useState, useRef, useEffect } from 'react';
import HostelImage from "../components/hostelLife/HostelImage";
import Home from "../components/Home_Hostel";
import HostelCommitee from "../components/Hostel_committee";
import StudentC from "../components/hostelLife/StudentC";
import HealthCare from '../components/hostelLife/HealthCare';
import HostelFees from '../components/hostelLife/HostelFees';
import HostelRules from '../components/hostelLife/HostelRules';

const Page = () => {
  const [activeContent, setActiveContent] = useState('facilities'); // Default to 'facilities'
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState('auto');
  const contentRef = useRef(null);

  const links = [
    { key: 'facilities', label: 'Hostel Facilities', description: '' },
    { key: 'committee', label: 'Hostel Committee', description: 'Dr. Shiva Rao' },
    { key: 'studentCommittee', label: 'Canteen Food Committee', description: 'working for better future' },
    { key: 'rules', label: 'Hostel Rule', description: 'Well equipped 3 labs' },
    { key: 'medical', label: 'Medical Facility', description: 'syllabus' },
    { key: 'fees', label: 'Hostel Fees', description: 'Research highlights' },
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <>
    {activeContent === 'facilities' && <HostelImage />}
    <div className="relative flex w-full max-w-screen overflow-hidden mt-5" style={{ minHeight: contentHeight }}>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white w-64 transition-transform duration-50 ease-in-out z-10 overflow-y-auto
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0 md:w-1/4 lg:w-1/5`}
      >
        <div className="px-4 py-6">
          <button
            className="w-full text-left flex items-center px-2 py-1 font-semibold text-gray-700 mb-6"
            onClick={() => handleContentChange('facilities')}
          >
          </button>
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
          {activeContent === 'facilities' && <Home />}
          {activeContent === 'committee' && <HostelCommitee />}
          {activeContent === 'studentCommittee' && <StudentC />}
          {activeContent === 'rules' && <HostelRules />}
          {activeContent === 'medical' && <HealthCare />}
          {activeContent === 'fees' && <HostelFees />}
        </div>
      </div>
    </div>
  </>);
};

export default Page;
