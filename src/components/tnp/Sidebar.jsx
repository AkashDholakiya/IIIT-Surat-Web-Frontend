import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Function to check if the current path matches the link's path
  const isActive = (path) => location.pathname === path;

  // Function to toggle the sidebar in mobile view
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Get the current active page name to show on mobile
  const getCurrentPageName = () => {
    switch (location.pathname) {
      case '/about-tnp':
        return 'About Tnp Cell';
      case '/tnp-officer':
        return 'T&P Officer';
      case '/tnppt':
        return 'Placement Team';
      case '/placement-statistics':
        return 'Placement Statistics';
      case '/our-achievers':
        return 'Our Achievers';
      case '/placement-guidelines':
        return 'Placement Guidelines';
      default:
        return 'Menu';
    }
  };

  return (
    <div>
      {/* Mobile Header with Hamburger and Current Page */}
      <div className="md:hidden flex justify-between items-center text-blue-900 font-semibold mb-4 px-4">
        <span>{getCurrentPageName()}</span>
        <button onClick={toggleSidebar}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar Links */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? 'block' : 'hidden'
        } md:block md:flex flex-col text-[18px] font-[Poppins] font-semibold text-blue-900`}
      >
        <Link
          to="/about-tnp"
          className={`self-start mt-4 cursor-pointer ml-6 ${
            isActive('/about-tnp') ? 'text-blue-500 border-l-4 border-blue-500 pl-2' : ''
          }`}
          onClick={() => setIsOpen(false)}
        >
          About Tnp Cell
        </Link>

        <Link
          to="/tnp-officer"
          className={`self-start mt-4 cursor-pointer ml-6 ${
            isActive('/tnp-officer') ? 'text-blue-500 border-l-4 border-blue-500 pl-2' : ''
          }`}
          onClick={() => setIsOpen(false)}
        >
          T&P Officer
        </Link>
        <div className="mt-1 text-[16px] font-medium text-neutral-500 ml-6 cursor-pointer">
          Dr. Vijaykumar Radadiya
        </div>

        <Link
          to="/tnppt"
          className={`self-start mt-5 cursor-pointer ml-6 ${
            isActive('/tnppt') ? 'text-blue-500 border-l-4 border-blue-500 pl-2' : ''
          }`}
          onClick={() => setIsOpen(false)}
        >
          Placement Team
        </Link>
        <div className="mt-1 text-[16px] font-medium text-neutral-500 ml-6 cursor-pointer">
          Working for a better future
        </div>

        <Link
          to="/placement-statistics"
          className={`mt-5 cursor-pointer ml-6 ${
            isActive('/placement-statistics') ? 'text-blue-500 border-l-4 border-blue-500 pl-2' : ''
          }`}
          onClick={() => setIsOpen(false)}
        >
          Placement Statistics
        </Link>
        <div className="mt-1 text-[16px] font-medium text-neutral-500 ml-6 cursor-pointer">
          Working for a better future
        </div>

        <Link
          to="/our-achievers"
          className={`mt-5 cursor-pointer ml-6 ${
            isActive('/our-achievers') ? 'text-blue-500 border-l-4 border-blue-500 pl-2' : ''
          }`}
          onClick={() => setIsOpen(false)}
        >
          Our Achievers
        </Link>
        <div className="mt-1 text-[16px] font-medium text-neutral-500 ml-6 cursor-pointer">
          Syllabus
        </div>

        <Link
          to="/placement-guidelines"
          className={`mt-5 cursor-pointer ml-6 ${
            isActive('/placement-guidelines') ? 'text-blue-500 border-l-4 border-blue-500 pl-2' : ''
          }`}
          onClick={() => setIsOpen(false)}
        >
          Placement Guidelines
        </Link>
        <div className="self-start mt-1 text-[16px] font-medium text-neutral-500 cursor-pointer ml-6">
          Research Highlights
        </div>
      </div>
    </div>
  );
};

export default Sidebar;