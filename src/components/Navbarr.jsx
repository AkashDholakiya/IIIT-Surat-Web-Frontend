import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbarr = ({ setDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);
    const menuRef = useRef(null);

    const HandleDark = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const checkForArrows = () => {
        if (menuRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = menuRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
        }
    };

    useEffect(() => {
        checkForArrows();
        window.addEventListener('resize', checkForArrows);
        return () => window.removeEventListener('resize', checkForArrows);
    }, []);

    const scroll = (direction) => {
        if (menuRef.current) {
            const scrollAmount = 200;
            if (direction === 'left') {
                menuRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                menuRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
            setTimeout(checkForArrows, 100);
        }
    };

    return (
        <div className='text-nav-text-color'>
            <nav className='bg-nav-color dark:text-white dark:bg-slate-800 text-sm font-medium w-full px-4 md:px-8'>
                <div className='flex flex-wrap justify-between items-center py-3'>
                    <ul className='flex flex-wrap space-x-2 md:space-x-4'>
                        <li className='cursor-pointer hover:underline'>Students</li>
                        <li className='cursor-pointer hover:underline'>Faculty & Staff</li>
                        <li className='cursor-pointer hover:underline'>Alumni</li>
                        <li className='cursor-pointer hover:underline'>Contact us</li>
                    </ul>
                    <ul className='flex items-center space-x-2 md:space-x-4'>
                        <li className='bg-white py-1 px-3 md:px-5 rounded-full hover:cursor-pointer dark:text-black' onClick={HandleDark}>Dark mode</li>
                        <div className='flex items-center space-x-2'>
                            <li className='cursor-pointer hover:underline'>हिंदी</li>
                            <li className='cursor-pointer hover:underline'>ગુજરાતી</li>
                            <li className='cursor-pointer hover:underline'>English</li>
                        </div>
                    </ul>
                </div>
            </nav>
            <div className='w-full relative'>
                <div className="flex flex-col md:flex-row md:justify-between items-center px-4 md:px-12 py-4">
                    <Link to='/'>
                        <div className='flex items-center space-x-[10px] mb-4 md:mb-0'>
                            <img src='./images/logo.png' alt='logo' className='w-16 md:w-auto' />
                            <div className='text-custom-blue'>
                                <p className='font-semibold text-base md:text-[18px] leading-tight md:leading-[27px]'>Indian Institute of Information Technology, Surat</p>
                                <p className='font-normal text-xs md:text-sm leading-tight md:leading-[24px]'>An Institute of National Importance Under Act of Parliament</p>
                            </div>
                        </div>
                    </Link>
                    <div className='flex justify-center w-full md:w-auto mb-4 md:mb-0'>
                        <input type="text" className='p-2 md:p-5 text-sm w-full md:w-72 h-10 bg-nav-color rounded-l-lg placeholder:text-nav-text-color focus:border-none focus:outline-none placeholder:font-medium' placeholder='Search for alumni, faculty' />
                        <div className="bg-nav-color right-lg flex items-center px-3 md:pr-6 rounded-r-lg cursor-pointer">
                            <span className="text-gray-500"><img src="/images/search.svg" alt="mirror" /></span>
                        </div>
                        <img className='ml-3 bg-nav-color px-3 rounded-lg cursor-pointer' src="/images/filter.svg" alt="filter" />
                    </div>
                    <div className='text-center md:text-end'>
                        <p className='font-medium text-sm md:text-base'>Indian Institute of Information Technology, Surat</p>
                        <p className='flex justify-center md:justify-end items-center text-xs md:text-sm'>
                            <img className='w-4 h-4 md:w-6 md:h-6 mr-1' src="/images/location.svg" alt="location" />
                            Kamrej, Surat - 394190, Gujarat
                        </p>
                    </div>
                </div>
              
            <div className="relative flex justify-center w-full z-20 px-4 md:px-0">
                <div className="w-full md:w-3/4 py-4 md:py-8 bg-nav-color rounded-2xl relative">
                    <button className="md:hidden w-full text-left px-4 py-2 font-medium" onClick={toggleMenu}>
                        Menu ☰
                    </button>
                    <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
                        {showLeftArrow && (
                            <button 
                                onClick={() => scroll('left')} 
                                className="bg-transparent text-nav-text-color hover:text-gray-700 transition-colors duration-200 p-2"
                                aria-label="Scroll left"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        )}
                    </div>
                    <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
                        {showRightArrow && (
                            <button 
                                onClick={() => scroll('right')} 
                                className="bg-transparent text-nav-text-color hover:text-gray-700 transition-colors duration-200 p-2"
                                aria-label="Scroll right"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        )}
                    </div>
                    <ul 
                        ref={menuRef}
                        onScroll={checkForArrows}
                        className={`
                            flex flex-col md:flex-row w-full h-full text-center justify-start md:justify-between items-center
                            ${isMenuOpen ? 'block' : 'hidden'} md:flex
                            md:overflow-x-auto md:scrollbar-hide md:space-x-4 md:px-4
                        `}
                    >
                       
                            <li className='font-medium cursor-pointer hover:underline py-2 md:py-0 whitespace-nowrap'>Discover IIIT <br className="hidden md:inline" /> Surat</li>
                            <li className='font-medium cursor-pointer hover:underline py-2 md:py-0 whitespace-nowrap'>Admission</li>
                            <li className='font-medium cursor-pointer hover:underline py-2 md:py-0 whitespace-nowrap'>Academics</li>
                            <li className='font-medium cursor-pointer hover:underline py-2 md:py-0 whitespace-nowrap'>
                                <Link to='/department'>Departments</Link>
                            </li>
                            <li className='font-medium cursor-pointer hover:underline py-2 md:py-0 whitespace-nowrap'>
                                <Link to='/about-tnp'>Training & <br className="hidden md:inline" /> placement</Link>
                            </li>
                            <li className='font-medium cursor-pointer hover:underline py-2 md:py-0 whitespace-nowrap'>Research & <br className="hidden md:inline" /> Innovation</li>
                            <li className='font-medium cursor-pointer hover:underline py-2 md:py-0 whitespace-nowrap'>Life at <br className="hidden md:inline" /> campus</li>
                            <li className='font-medium cursor-pointer hover:underline py-2 md:py-0 whitespace-nowrap'>Events</li>
                            <li className='font-medium cursor-pointer hover:underline py-2 md:py-0 whitespace-nowrap'>News</li>
                            <li className='font-medium cursor-pointer hover:underline py-2 md:py-0 whitespace-nowrap'>Resources</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbarr;