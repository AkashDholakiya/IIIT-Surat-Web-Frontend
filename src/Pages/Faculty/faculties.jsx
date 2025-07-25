import React, { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import ThreeComponent from './ThreeComponent';
import FourComponent from './FourComponent';
import FiveComponent from './FiveComponent';
import SixComponent from './SixComponent';
import SevenComponent from './SevenComponent';

const Faculty = (props) => {
  // Get facultyId from either props or URL
  const { facultyId: facultyIdFromURL } = useParams();
  const location = useLocation();

  const facultyId = props.facultyId || facultyIdFromURL;
  const facultyName = props.facultyName || location.state?.facultyName || '';

  const [activeContent, setActiveContent] = useState('about');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState('auto');
  const contentRef = useRef(null);

  const links = [
    { key: 'about', label: 'About' },
    { key: 'qual', label: 'Qualification' },
    { key: 'experience', label: 'Experience' },
    { key: 'publications', label: 'Research Publications' },
    { key: 'achievements', label: 'Achievements' },
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
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white w-64 transition-transform duration-200 z-30 overflow-y-auto
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0 md:w-1/4 lg:w-1/5 md:z-0
        `}
        style={{
          boxShadow: isSidebarOpen ? '2px 0 8px rgba(0,0,0,0.05)' : 'none',
        }}
      >
        <div className="px-4 py-6">
          <h1 className="text-xl font-semibold text-blue-700 ml-4 mb-4">
            {facultyName ? `${facultyName} Profile` : `Faculty Profile (${facultyId})`}
          </h1>
          {links.map((link) => (
            <div key={link.key} className="mb-4 ml-4">
              <button
                onClick={() => handleContentChange(link.key)}
                className={`w-full text-left flex items-center px-2 py-1 font-semibold transition-transform duration-200 ${
                  activeContent === link.key
                    ? 'text-blue-700 transform scale-105'
                    : 'text-gray-700'
                }`}
              >
                {activeContent === link.key && (
                  <span className="inline-block w-1 h-6 mr-2 bg-blue-700 rounded-full"></span>
                )}
                <span>{link.label}</span>
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 md:hidden text-3xl text-gray-700"
          aria-label="Close sidebar"
        >
          &times;
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 overflow-y-auto max-w-full">
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="text-2xl mb-4 top-4 left-4 z-30 bg-white p-2 rounded-md shadow-lg md:hidden fixed"
            aria-label="Open sidebar"
            style={{ left: 16, top: 80 }}
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
          {activeContent === 'about' && (
            <ThreeComponent facultyId={facultyId} facultyName={facultyName} />
          )}
          {activeContent === 'qual' && (
            <FourComponent facultyId={facultyId} facultyName={facultyName} />
          )}
          {activeContent === 'experience' && (
            <FiveComponent facultyId={facultyId} facultyName={facultyName} />
          )}
          {activeContent === 'publications' && (
            <SixComponent facultyId={facultyId} facultyName={facultyName} />
          )}
          {activeContent === 'achievements' && (
            <SevenComponent facultyId={facultyId} facultyName={facultyName} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Faculty;
