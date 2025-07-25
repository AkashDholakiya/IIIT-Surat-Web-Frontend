import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const AllTnp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const links = [
    { key: 'about-tnp', label: 'About TNP Cell', description: '' },
    { key: 'tnp-officer', label: 'T&P Officer', description: 'Dr. Vijaykumar Radadiya' },
    { key: 'placement-team', label: 'Placement Team', description: 'Working for better future' },
    { key: 'placement-statistics', label: 'Placement Statistics', description: 'Well equipped 3 labs' },
    { key: 'our-achievers', label: 'Our Achievers', description: 'Syllabus' },
    { key: 'placement-guidelines', label: 'Placement Guidelines', description: 'Research Highlights' },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleContentChange = () => {
    setIsSidebarOpen(false);
  };
  return (
    <div className="relative flex w-full max-w-screen overflow-hidden mt-20">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white w-64 transition-transform duration-50 ease-in-out z-10 overflow-y-auto
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0 md:w-1/4 lg:w-1/5`}
      >
        <div className="px-4 py-6">
          {links.map((link) => (
            <div key={link.key} className="mb-4 ml-10">
              <Link
                to={`/tnp/${link.key}`}
                onClick={() => handleContentChange()}
                className={`w-full text-left flex items-center px-2 py-1 font-semibold transition-transform duration-50 ${
                  location.pathname === `/tnp/${link.key}` ? 'text-blue-700 transform scale-105' : 'text-gray-700'
                }`}
              >
                {location.pathname === `/tnp/${link.key}` && (
                  <span className="inline-block w-1 h-6 mr-2 bg-blue-700 rounded-full"></span>
                )}
                <span>{link.label}</span>
              </Link>
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
       
         {/* Menu Icon for mobile */}
        {!isSidebarOpen && (
          <button
        aria-label="Open sidebar"
        onClick={toggleSidebar}
        className={`top-10 left-4 z-30 bg-white p-2 rounded-md shadow-lg md:hidden transition-opacity ${
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
          )}
  <br/>
  <br/>
          {/* Render child components */}
          <Outlet />
        </div>
      </div>
    );
  };
  
  export default AllTnp;