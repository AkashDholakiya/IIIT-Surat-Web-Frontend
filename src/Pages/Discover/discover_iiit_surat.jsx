// import React, { useState, useRef, useEffect } from 'react';
// import About from './about';
// import Vision from './vision';
// import Director from './director';
// import Admin from './admin';
// import BOG from './board_of_governance';
// import BWC from './building_work_committee';
// import Senate from './senate';
// import Finance from './finance';
// import MOU from './mou';


// const Page = () => {
//   const [activeContent, setActiveContent] = useState('about');
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [contentHeight, setContentHeight] = useState('auto');
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const updateHeight = () => {
//       if (contentRef.current) {
//         const height = contentRef.current.scrollHeight;
//         if (contentHeight !== height) {
//           setContentHeight(height);
//         }
//       }
//     };

//     updateHeight();

//     const resizeObserver = new ResizeObserver(updateHeight);
//     if (contentRef.current) {
//       resizeObserver.observe(contentRef.current);
//     }
//     return () => {
//       if (contentRef.current) {
//         resizeObserver.unobserve(contentRef.current);
//       }
//     };
//   }, [activeContent]); 

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   const handleContentChange = (key) => {
//     setActiveContent(key);
//     setIsSidebarOpen(false);
//   };

//  const links = [
//   { key: 'about', label: 'About us' },
//   { key: 'vision', label: 'Vision & Mission' },
//   { key: 'director', label: `Director's Desk` },
//   { key: 'admin', label: 'Administration' },
//   { key: 'bog', label: 'Board of Governance' },
//   { key: 'finance', label: 'Finance Committee' },
//   { key: 'senate', label: 'Senate Members' },
//   { key: 'bwc', label: 'Building & Works Committee' },
//   { key: 'mou', label: 'MOUs' },
//   // { key: 'conv', label: 'Convocation' }


// ];

//   return (
//     <div className="relative flex w-full max-w-screen overflow-hidden mt-20" style={{ minHeight: `${contentHeight}px` }}>
//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full bg-white w-64 transition-transform duration-50 ease-in-out z-10 overflow-y-auto
//           ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
//           md:relative md:translate-x-0 md:w-1/4 lg:w-1/5`}
//       >
//         <div className="px-4 py-6">
//           <button
//             className="w-full text-left flex items-center px-2 py-1 font-semibold text-gray-700 mb-6"
//             onClick={() => handleContentChange('about')}
//           >
//             <span className="text-blue-700 ml-10">Discover IIIT Surat</span>
//           </button>
//           {links.map((link) => (
//             <div key={link.key} className="mb-4 ml-10">
//               <button
//                 onClick={() => handleContentChange(link.key)}
//                 className={`w-full text-left flex items-center px-2 py-1 font-semibold transition-transform duration-50 ${
//                   activeContent === link.key ? 'text-blue-700 transform scale-105' : 'text-gray-700'
//                 }`}
//               >
//                 {activeContent === link.key && (
//                   <span className="inline-block w-1 h-6 mr-2 bg-blue-700 rounded-full"></span>
//                 )}
//                 <span>{link.label}</span>
//               </button>
//               {link.description && (
//                 <p className="text-sm text-gray-500 ml-6 mt-1">{link.description}</p>
//               )}
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={toggleSidebar}
//           className="absolute top-4 right-4 md:hidden text-xl"
//         >
//           &times;
//         </button>
//       </div>

//       {/* Main Content Area */}
//       <div className="flex-1 p-6 overflow-y-auto max-w-full">
//         {/* Menu Icon for mobile */}
//         {!isSidebarOpen && (
//           <button
//             onClick={toggleSidebar}
//             className="text-2xl mb-4 top-4 left-4 z-20 bg-white p-2 rounded-md shadow-lg md:hidden"
//           >
//             <svg
//               className="w-6 h-6 text-gray-700"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         )}

//         {/* Conditional Rendering of Components */}
//         <div ref={contentRef}>
//   {activeContent === 'about' && <About />}
//   {activeContent === 'vision' && <Vision />}
//   {activeContent === 'director' && <Director />}
//   {activeContent === 'admin' && <Admin />}
//   {activeContent === 'bog' && <BOG />}
//   {activeContent === 'finance' && <Finance />}
//   {activeContent === 'senate' && <Senate />}
//   {activeContent === 'bwc' && <BWC />}
//   {activeContent === 'mou' && <MOU />}
// </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Discover = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const location = useLocation();

const links = [
  { key: 'about', label: 'About us', path: '/discover/about' },
  { key: 'vision-mission', label: 'Vision & Mission', path: '/discover/vision-mission' },
  { key: 'director', label: "Director's Desk", path: '/discover/director' },
  { key: 'admin', label: 'Administration', path: '/discover/admin' },
  { key: 'Board-of-governance', label: 'Board of Governance', path: '/discover/Board-of-governance' },
  { key: 'finance', label: 'Finance Committee', path: '/discover/finance' },
  { key: 'senate-members', label: 'Senate Members', path: '/discover/senate-members' },
  { key: 'building-work-committee', label: 'Building & Works Committee', path: '/discover/building-work-committee' },
  {key: 'websiteteam', label: 'Website Development Team', path: '/discover/websiteteam' },
  { key: 'mou', label: 'MOUs', path: '/discover/mou' },
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
              Discover IIIT Surat
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

export default Discover;
