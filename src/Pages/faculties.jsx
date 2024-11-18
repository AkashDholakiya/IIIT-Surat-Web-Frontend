import React, { useState, useRef, useEffect } from 'react';
import ThreeComponent from './ThreeComponent';
import FourComponent from './FourComponent';
import FiveComponent from './FiveComponent';
import SixComponent from './SixComponent';
import SevenComponent from './SevenComponent';

const INFO = () => {
  const [activeContent, setActiveContent] = useState('about');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState('auto');
  const contentRef = useRef(null);

  const links = [
    { key: 'about', label: 'About', description: 'Dr. Vijaykumar Radadiya' },
    { key: 'qual', label: 'Qualification', description: 'Alumni work in top MNC' },
    { key: 'experience', label: 'Experience', description: 'Alumni work in top MNC' },
    { key: 'publications', label: 'Research Publications', description: 'Well equipped 3 labs' },
    { key: 'achievements', label: 'Achievements', description: 'SSIP Gujarat gov. policy' },
    { key: 'services', label: 'Hon. Services', description: 'SSIP Gujarat gov. policy' },
    { key: 'activities', label: 'Academic activities', description: 'Consultancy' },
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
    <div className="relative flex w-full max-w-screen overflow-hidden mt-20" style={{ minHeight: contentHeight }}>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white w-64 transition-transform duration-200 ease-in-out z-10 overflow-y-auto
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0 md:w-1/4 lg:w-1/5`}
      >
        <div className="px-4 py-6">
          <h1 className="text-xl font-semibold text-blue-700 ml-4">Computer Science</h1>
          {links.map((link) => (
            <div key={link.key} className="mb-4 ml-4">
              <button
                onClick={() => handleContentChange(link.key)}
                className={`w-full text-left flex items-center px-2 py-1 font-semibold transition-transform duration-200 ${
                  activeContent === link.key ? 'text-blue-700 transform scale-105' : 'text-gray-700'
                }`}
              >
                {activeContent === link.key && (
                  <span className="inline-block w-1 h-6 mr-2 bg-blue-700 rounded-full"></span>
                )}
                <span>{link.label}</span>
              </button>
              {link.description && (
                <p className="text-sm text-gray-500 ml-6 mt-1">{link.description}</p>
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

        <div ref={contentRef}>
          {activeContent === 'about' && <ThreeComponent />}
          {activeContent === 'qual' && <FourComponent />}
          {activeContent === 'experience' && <FiveComponent />}
          {activeContent === 'publications' && <SixComponent />}
          {activeContent === 'achievements' && <SevenComponent />}
        </div>
      </div>
    </div>
  );
};

export default INFO;
