import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Admission = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const location = useLocation();

const links = [
  { key: 'struct', label: "Fee Structure 2025-26", path: '/admission/fee-structure' },
  { key: 'mat', label: "Seat Matrix for 2025-26", path: '/admission/seat-matrix' },
  { key: 'buss', label: "Business Rules For Joint Seat Allocation 2025-26", path: '/admission/business-rules' },
  { key: 'josaa', label: "Schedule Of Events Of JoSAA (ONLINE REPORTING) 2025-26", path: '/admission/josaa' },
  { key: 'physc', label: "Physical Reporting for B.Tech. Programme", path: '/admission/physical-reporting' }
];


  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="relative flex w-full max-w-screen overflow-hidden mt-20">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white w-64 transition-transform duration-50 ease-in-out z-10 overflow-y-auto
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0 md:w-1/4 lg:w-1/5`}
      >
        <div className="px-4 py-6">
          <div className="mb-6 ml-10">
            <span className="text-blue-700 text-lg font-semibold">
              Admission 2025-26
            </span>
          </div>
          {links.map((link) => (
            <div key={link.key} className="mb-4 ml-10">
              <Link
                to={link.path}
                className={`w-full text-left flex items-center px-2 py-1 font-semibold transition-transform duration-50 ${
                  location.pathname === link.path 
                    ? 'text-blue-700 transform scale-105' 
                    : 'text-gray-700'
                }`}
              >
                {location.pathname === link.path && (
                  <span className="inline-block w-1 h-6 mr-2 bg-blue-700 rounded-full"></span>
                )}
                <span>{link.label}</span>
              </Link>
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
        <Outlet />
      </div>
    </div>
  );
};

export default Admission;
