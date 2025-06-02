import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger and close icons

const Navbarr = ({ setDarkMode }) => {
    const location = useLocation();
    const [openDropdown, setOpenDropdown] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen]);

    const toggleDropdown = (index) => {
        setOpenDropdown(index);
    };

    const closeDropdown = () => {
        setOpenDropdown(null);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };    return (
        <div className='text-nav-text-color'>
            <nav className='bg-nav-color relative text-sm font-medium w-full h-10 px-4 md:px-8'>
                <div className='flex justify-between h-full items-center'>
                    <div className="lg:hidden flex items-center justify-center">
                        <button 
                            onClick={toggleMenu} 
                            className="p-1 focus:outline-none rounded-full hover:bg-gray-200 transition-colors duration-200"
                            aria-label="Open menu"
                        >
                            <HiMenu size={24} />
                        </button>
                    </div>
                    <ul className='hidden md:flex'>
                        <li className='cursor-pointer hover:underline'>Students</li><span>&nbsp;.&nbsp;</span>
                        <li className='cursor-pointer hover:underline'>Faculty & Staff</li><span>&nbsp;.&nbsp;</span>
                        <li className='cursor-pointer hover:underline'>Alumni</li><span>&nbsp;.&nbsp;</span>
                        <li className='cursor-pointer hover:underline'>Contact us</li>
                    </ul>
                    <ul className='hidden md:flex items-center'>
                        <div className='flex h-full items-center'>
                            <li className='cursor-pointer hover:underline'>हिंदी</li><span>&nbsp;|&nbsp;</span>
                            <li className='cursor-pointer hover:underline'>ગુજરાતી</li><span>&nbsp;|&nbsp;</span>
                            <li className='cursor-pointer hover:underline'>English</li>
                        </div>
                    </ul>
                </div>                
                {menuOpen && (
                    <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-nav-color z-20 flex flex-col pt-16 overflow-y-auto animate-fadeIn">
                        <div className="absolute top-0 left-0 w-full bg-white py-3 px-4 flex justify-between items-center border-b border-gray-100 shadow-sm">
                            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => {setMenuOpen(false); navigate('/')}}>
                                <img className="h-8 w-8" src="./images/logo.svg" alt="IIIT Surat logo" />
                                <span className="font-medium text-sm text-custom-blue">IIIT Surat</span>
                            </div>
                            <button 
                                onClick={toggleMenu}
                                className="p-2 focus:outline-none rounded-full hover:bg-gray-100 transition-colors duration-200"
                                aria-label="Close menu"
                            >
                                <HiX size={24} />
                            </button>
                        </div>
                        <ul className='flex flex-col w-full text-center justify-start items-center space-y-4 px-4 pb-20 pt-4'>
                            {/* Language selector for mobile */}
                            <div className="w-full max-w-[280px] mb-3 mt-2">
                                <div className="flex justify-center items-center space-x-3 py-2 border-b border-gray-200 pb-4">
                                    <button className="text-sm font-medium px-3 py-1.5 hover:bg-blue-50 hover:text-[#003481] rounded-md transition-colors">हिंदी</button>
                                    <button className="text-sm font-medium px-3 py-1.5 hover:bg-blue-50 hover:text-[#003481] rounded-md transition-colors">ગુજરાતી</button>
                                    <button className="text-sm font-medium px-3 py-1.5 bg-blue-50 text-[#003481] rounded-md transition-colors">English</button>
                                </div>
                            </div>
                            
                            <div className="w-full max-w-[280px] mb-2">
                                <div className="flex flex-col space-y-2 w-full">
                                    <Link to="/students" className="text-sm font-medium py-2 px-3 hover:bg-blue-50 hover:text-[#003481] rounded-md transition-colors">
                                        Students
                                    </Link>
                                    <Link to="/faculty-staff" className="text-sm font-medium py-2 px-3 hover:bg-blue-50 hover:text-[#003481] rounded-md transition-colors">
                                        Faculty & Staff
                                    </Link>
                                    <Link to="/alumni" className="text-sm font-medium py-2 px-3 hover:bg-blue-50 hover:text-[#003481] rounded-md transition-colors">
                                        Alumni
                                    </Link>
                                    <Link to="/contact" className="text-sm font-medium py-2 px-3 hover:bg-blue-50 hover:text-[#003481] rounded-md transition-colors">
                                        Contact us
                                    </Link>
                                </div>
                            </div>

                            <DropdownItem setOpenDropdown={setOpenDropdown} setMenuOpen={setMenuOpen} label="Discover IIIT Surat" index={1} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "About us", to: "/notfound" },
                                { label: "Vision & Mission", to: "/vision" },
                                { label: "Director’s Desk", to: "/director" },
                                { label: "Administration", to: "/notfound" },
                                { label: "Board of governance", to: "/notfound" },
                                { label: "Senate", to: "/notfound" },
                                { label: "Finance committee", to: "/notfound" },
                                { label: "MOUs", to: "/notfound" },
                                { label: "Convocation", to: "/notfound" }
                            ]} />

                            <DropdownItem setOpenDropdown={setOpenDropdown} setMenuOpen={setMenuOpen} label="Admission" index={2} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Undergraduate", to: "/admission" },
                                { label: "Postgraduate", to: "/notfound" }
                            ]} />

                            <DropdownItem setOpenDropdown={setOpenDropdown} setMenuOpen={setMenuOpen} label="Academics" index={3} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Academic Calendar", to: "/notfound" },
                                { label: "Holiday List", to: "/notfound" },
                                { label: "B.Tech. Rule", to: "/notfound" },
                                { label: "B.Tech. Fees Structure", to: "/notfound" },
                                { label: "Ph.D. Rule", to: "/notfound" },
                                { label: "Ph.D. Fees Structure", to: "/notfound" }
                            ]} />

                            <DropdownItem setOpenDropdown={setOpenDropdown} setMenuOpen={setMenuOpen} label="Departments" index={4} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Computer Science & Engineering", to: "/csedepartment" },
                                { label: "Electronics & Communication Engineering", to: "/notfound" },
                                { label: "Applied Science & Humanities", to: "/notfound" },
                                { label: "Adjunct professor", to: "/notfound" }
                            ]} />

                            <DropdownItem setOpenDropdown={setOpenDropdown} setMenuOpen={setMenuOpen} label="Training & placement" index={5} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "About TNP", to: "/tnp/about-tnp" },
                                { label: "TNP Officer", to: "/tnp/tnp-officer" },
                                { label: "Placement Team", to: "/tnp/placement-team" },
                                { label: "Placement Stats", to: "/tnp/placement-statistics" },
                                { label: "Our Achievers", to: "/tnp/our-achievers" },
                                {
                                    label: "Placement Guidelines", to: "/tnp/placement-guidelines"
                                }
                            ]} />                            <div className="w-full max-w-[280px] flex justify-center">                            <Link 
                                to={'/rnc'} 
                                onClick={() => setMenuOpen(false)} 
                                className={`font-medium py-3 cursor-pointer select-none transition-colors duration-200 px-2 rounded-md ${
                                    location.pathname === '/rnc' || location.pathname.startsWith('/rnc/') 
                                        ? 'text-[#003481] bg-blue-50' 
                                        : 'hover:text-[#660000]'
                                }`}
                            >
                                Research & innovation
                            </Link>
                            </div>

                            <div className="w-full max-w-[280px] flex justify-center">
                                <Link 
                                    to={'/career'} 
                                    onClick={() => setMenuOpen(false)} 
                                    className={`font-medium py-3 cursor-pointer select-none transition-colors duration-200 px-2 rounded-md ${
                                        location.pathname === '/career' || location.pathname.startsWith('/career/') 
                                            ? 'text-[#003481] bg-blue-50' 
                                            : 'hover:text-[#660000]'
                                    }`}
                                >
                                    Career
                                </Link>
                            </div>


                            <DropdownItem setOpenDropdown={setOpenDropdown} setMenuOpen={setMenuOpen} label="Life at campus" index={7} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Hostel Life", to: "/hostel" },
                                { label: "Student Clubs", to: "/clubs" },
                                { label: "Events and gallery", to: "/notfound" },
                                { label: "Annual Fest", to: "/notfound" },
                                { label: "Institute Committee", to: "/notfound" }
                            ]} />                        
                        </ul>
                    </div>
                )}
            </nav>            
            <div className='w-full max-lg:h-40 h-36 relative'>
                <div className="flex mt-5 w-full">
                    <div className='w-full max-lg:px-2'>
                        <Link className='flex max-lg:flex-col items-center justify-center space-x-10 max-lg:space-x-0' to='/'>
                            <img className='w-16 max-lg:w-10' src='./images/logo.svg' alt='logo' />
                            <div className='text-custom-blue text-center'>
                                <p className='font-semibold text-2xl max-lg:text-base leading-[27px] max-lg:leading-[22px] mt-2 max-lg:mt-3'>Indian Institute of Information Technology, Surat</p>
                                <p className='font-normal text-lg max-lg:text-xs leading-[24px] max-lg:leading-[18px]'>An Institute of National Importance Under Act of Parliament</p>
                                <p className='flex items-center max-lg:text-xs font-normal justify-center text-sm leading-[24px] max-lg:leading-[18px]'>
                                    <img className='h-5 max-lg:h-4 mr-1' src="/images/location.svg" alt="location" />
                                    Kamrej, Surat - 394190, Gujarat
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="absolute -bottom-7 flex justify-center w-full h-14 z-20 max-lg:hidden">
                    <div className="w-full py-8 bg-nav-color hidden md:flex">
                        <ul className='flex w-full h-full text-center justify-center items-center text-[0.90rem]'>
                            <DropdownItem setOpenDropdown={setOpenDropdown} setMenuOpen={setMenuOpen} label="Discover IIIT Surat" index={1} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "About us", to: "/notfound" },
                                { label: "Vision & Mission", to: "/vision" },
                                { label: "Director’s Desk", to: "/director" },
                                { label: "Administration", to: "/notfound" },
                                { label: "Board of governance", to: "/notfound" },
                                { label: "Senate", to: "/notfound" },
                                { label: "Finance committee", to: "/notfound" },
                                { label: "MOUs", to: "/notfound" },
                                { label: "Convocation", to: "/notfound" }
                            ]} />

                            <DropdownItem setOpenDropdown={setOpenDropdown} setMenuOpen={setMenuOpen} label="Admission" index={2} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Undergraduate", to: "/admission" },
                                { label: "Postgraduate", to: "/notfound" }
                            ]} />

                            <DropdownItem setOpenDropdown={setOpenDropdown} setMenuOpen={setMenuOpen} label="Academics" index={3} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Academic Calendar", to: "/notfound" },
                                { label: "Holiday List", to: "/notfound" },
                                { label: "B.Tech. Rule", to: "/notfound" },
                                { label: "B.Tech. Fees Structure", to: "/notfound" },
                                { label: "Ph.D. Rule", to: "/notfound" },
                                { label: "Ph.D. Fees Structure", to: "/notfound" }
                            ]} />

                            <DropdownItem setOpenDropdown={setOpenDropdown} setMenuOpen={setMenuOpen} label="Departments" index={4} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Computer Science & Engineering", to: "/csedepartment" },
                                { label: "Electronics & Communication Engineering", to: "/ecedepartment" },
                                { label: "Applied Science & Humanities", to: "/notfound" },
                                { label: "Adjunct professor", to: "/notfound" }
                            ]} />

                            <DropdownItem setOpenDropdown={setOpenDropdown} setMenuOpen={setMenuOpen} label="Training & placement" index={5} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                 { label: "About TNP", to: "/tnp/about-tnp" },
                                 { label: "TNP Officer", to: "/tnp/tnp-officer" },
                                 { label: "Placement Team", to: "/tnp/placement-team" },
                                 { label: "Placement Stats", to: "/tnp/placement-statistics" },
                                 { label: "Our Achievers", to: "/tnp/our-achievers" },
                                 {
                                     label: "Placement Guidelines", to: "/tnp/placement-guidelines"
                                 }
                            ]} />                            <Link to={'/rnc'} className={`font-medium py-2 cursor-pointer select-none transition-colors duration-200 px-2 rounded-md ${
                                location.pathname === '/rnc' || location.pathname.startsWith('/rnc/') 
                                    ? 'text-[#003481] bg-blue-50' 
                                    : 'hover:text-[#660000]'
                            }`}>
                                Research & innovation
                            </Link>

                            <Link to={'/career'} className={`font-medium py-2 cursor-pointer select-none transition-colors duration-200 px-2 rounded-md ${
                                location.pathname === '/career' || location.pathname.startsWith('/career/') 
                                    ? 'text-[#003481] bg-blue-50' 
                                    : 'hover:text-[#660000]'
                            }`}>
                                Career
                            </Link>

                            <DropdownItem setOpenDropdown={setOpenDropdown} setMenuOpen={setMenuOpen} label="Life at campus" index={7} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Hostel Life", to: "/hostel" },
                                { label: "Student Clubs", to: "/clubs" },
                                { label: "Events and gallery", to: "/notfound" },
                                { label: "Annual Fest", to: "/notfound" },
                                { label: "Institute Committee", to: "/notfound" }
                            ]} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DropdownItem = ({ setOpenDropdown, setMenuOpen, label, index, openDropdown, toggleDropdown, closeDropdown, links }) => {
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;
    
    // Default link for the parent item (first link in the dropdown)
    const defaultLink = links.length > 0 ? links[0].to : '/';
    
    // Check if any of the links match the current path
    const isActive = links.some(link => 
        currentPath === link.to || 
        (link.to !== '/' && currentPath.startsWith(link.to + '/'))
    );
    
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);
    
    const handleClick = () => {
        setOpenDropdown(null);
        setMenuOpen(false);
    };

    const handleParentClick = (e) => {
        if (isMobile) {
            e.preventDefault();
            openDropdown === index ? closeDropdown() : toggleDropdown(index);
        }
    };
    
    return (
        <div
            className={`relative ${isMobile ? 'w-full max-w-[280px]' : 'mx-5'}`}
            onMouseEnter={() => !isMobile && toggleDropdown(index)}
            onMouseLeave={() => !isMobile && closeDropdown()}
        >
            <Link 
                to={defaultLink}
                onClick={handleParentClick}
                className={`font-medium py-2 cursor-pointer select-none transition-colors duration-200 w-full block relative
                    ${isActive 
                        ? 'text-[#003481] bg-blue-50 rounded-md' 
                        : 'hover:text-[#660000] hover:rounded-md'}`}
            >
                {label}
                {isMobile && (
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        {openDropdown === index ? '−' : '+'}
                    </span>
                )}
            </Link>
            {openDropdown === index && (
                <div className={`${isMobile ? 'relative w-full mt-2' : 'absolute left-0 mt-1 w-56'} 
                    text-sm text-left rounded-lg bg-white p-3 z-30 shadow-lg border border-gray-100
                    animate-fadeIn`}>
                    {links.map((link, idx) => {
                        const isLinkActive = currentPath === link.to || 
                            (link.to !== '/' && currentPath.startsWith(link.to + '/'));
                        return (
                            <Link 
                                key={idx} 
                                to={link.to} 
                                onClick={() => handleClick()} 
                                className={`block font-medium p-2 transition-colors duration-200 rounded-md
                                    ${isLinkActive 
                                        ? 'bg-blue-50 text-[#003481]'
                                        : 'hover:bg-gray-50 hover:text-[#660000]'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Navbarr;