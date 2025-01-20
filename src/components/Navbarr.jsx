import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger and close icons

const Navbarr = ({ setDarkMode }) => {
    const HandleDark = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    const [openDropdown, setOpenDropdown] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDropdown = (index) => {
        setOpenDropdown(index);
    };

    const closeDropdown = () => {
        setOpenDropdown(null);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='text-nav-text-color'>
            <nav className='bg-nav-color relative dark:text-white dark:bg-slate-800 text-sm font-medium w-full h-10 px-8'>
                <div className='flex justify-between h-full items-center'>
                    <ul className='hidden md:flex'>
                        <li className='cursor-pointer hover:underline'>Students</li><span>&nbsp;.&nbsp;</span>
                        <li className='cursor-pointer hover:underline'>Faculty & Staff</li><span>&nbsp;.&nbsp;</span>
                        <li className='cursor-pointer hover:underline'>Alumni</li><span>&nbsp;.&nbsp;</span>
                        <li className='cursor-pointer hover:underline'>Contact us</li>
                    </ul>
                    <ul className='hidden md:flex items-center'>
                        <li className='bg-white py-1 px-5 rounded-full mr-12 hover:cursor-pointer dark:text-black' onClick={HandleDark}>Dark mode</li>
                        <div className='flex h-full items-center'>
                            <li className='cursor-pointer hover:underline'>हिंदी</li><span>&nbsp;|&nbsp;</span>
                            <li className='cursor-pointer hover:underline'>ગુજરાતી</li><span>&nbsp;|&nbsp;</span>
                            <li className='cursor-pointer hover:underline'>English</li>
                        </div>
                    </ul>

                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                        </button>
                    </div>
                </div>

                {menuOpen && (
                    <div className="md:hidden bg-nav-color left-0 absolute w-full z-10 pb-5">
                        <ul className='flex flex-col w-full h-full text-center justify-evenly items-center'>
                            <DropdownItem label="Discover IIIT Surat" index={1} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "About us", to: "/" },
                                { label: "Vision & Mission", to: "/vision" },
                                { label: "Director’s Desk", to: "/director" },
                                { label: "Administration", to: "/" },
                                { label: "Board of governance", to: "/" },
                                { label: "Senate", to: "/" },
                                { label: "Finance committee", to: "/" },
                                { label: "MOUs", to: "/" },
                                { label: "Convocation", to: "/" }
                            ]} />

                            <DropdownItem label="Admission" index={2} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Undergraduate", to: "/" },
                                { label: "Postgraduate", to: "/" }
                            ]} />

                            <DropdownItem label="Academics" index={3} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Academic Calendar", to: "/" },
                                { label: "Holiday List", to: "/" },
                                { label: "B.Tech. Rule", to: "/" },
                                { label: "B.Tech. Fees Structure", to: "/" },
                                { label: "Ph.D. Rule", to: "/" },
                                { label: "Ph.D. Fees Structure", to: "/" }
                            ]} />

                            <DropdownItem label="Departments" index={4} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Overview", to: "/department" },
                                { label: "Computer Science & Engineering", to: "/" },
                                { label: "Electronics & Communication Engineering", to: "/" },
                                { label: "Applied Science & Humanities", to: "/" },
                                { label: "Adjunct professor", to: "/" }
                            ]} />

                            <DropdownItem label="Training & placement" index={5} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "About TNP", to: "/tnp" },
                                { label: "TNP Officer", to: "/tnp" },
                                { label: "Placement Team", to: "/tnp" },
                                { label: "Placement Stats", to: "/tnp" },
                                { label: "Our Achievers", to: "/tnp" }
                            ]} />

                            <DropdownItem label="Research & innovation" index={6} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Overview", to: "/rnc" },
                                { label: "Projects", to: "/" },
                                { label: "Publications", to: "/" }
                            ]} />

                            <DropdownItem label="Life at campus" index={7} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Hostel Life", to: "/hostel" },
                                { label: "Student Clubs", to: "/clubs" },
                                { label: "Events and gallery", to: "/" },
                                { label: "Annual Fest", to: "/" },
                                { label: "Institute Committee", to: "/" }
                            ]} />
                        </ul>

                    </div>
                )}
            </nav>

            <div className='w-full h-32 relative'>
                <div className="flex mt-7 w-full">
                    <div className='w-full max-lg:px-1'>
                        <Link className='flex max-lg:flex-col items-center justify-center space-x-10 max-lg:space-x-0' to='/'>
                            <img className='w-16 max-lg:w-8' src='./images/logo.svg' alt='logo' />
                            <div className='text-custom-blue text-center'>
                                <p className='font-semibold text-2xl max-lg:text-sm leading-[27px]'>Indian Institute of Information Technology, Surat</p>
                                <p className='font-normal text-lg max-lg:text-xs leading-[24px]'>An Institute of National Importance Under Act of Parliament</p>
                                <p className='flex items-center max-lg:text-xs font-normal justify-center text-sm leading-[24px]'><img className='h-5' src="/images/location.svg" alt="location" />Kamrej, Surat - 394190, Gujarat</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="absolute -bottom-7 flex justify-center w-full h-14 z-20 max-lg:hidden">
                    <div className="w-[85%] py-8 bg-nav-color rounded-2xl hidden md:flex">
                        <ul className='flex w-full h-full text-center justify-evenly items-center'>
                            <DropdownItem label="Discover IIIT Surat" index={1} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "About us", to: "/" },
                                { label: "Vision & Mission", to: "/vision" },
                                { label: "Director’s Desk", to: "/director" },
                                { label: "Administration", to: "/" },
                                { label: "Board of governance", to: "/" },
                                { label: "Senate", to: "/" },
                                { label: "Finance committee", to: "/" },
                                { label: "MOUs", to: "/" },
                                { label: "Convocation", to: "/" }
                            ]} />

                            <DropdownItem label="Admission" index={2} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Undergraduate", to: "/" },
                                { label: "Postgraduate", to: "/" }
                            ]} />

                            <DropdownItem label="Academics" index={3} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Academic Calendar", to: "/" },
                                { label: "Holiday List", to: "/" },
                                { label: "B.Tech. Rule", to: "/" },
                                { label: "B.Tech. Fees Structure", to: "/" },
                                { label: "Ph.D. Rule", to: "/" },
                                { label: "Ph.D. Fees Structure", to: "/" }
                            ]} />

                            <DropdownItem label="Departments" index={4} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Overview", to: "/department" },
                                { label: "Computer Science & Engineering", to: "/" },
                                { label: "Electronics & Communication Engineering", to: "/" },
                                { label: "Applied Science & Humanities", to: "/" },
                                { label: "Adjunct professor", to: "/" }
                            ]} />

                            <DropdownItem label="Training & placement" index={5} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "About TNP", to: "/tnp" },
                                { label: "TNP Officer", to: "/tnp" },
                                { label: "Placement Team", to: "/tnp" },
                                { label: "Placement Stats", to: "/tnp" },
                                { label: "Our Achievers", to: "/tnp" }
                            ]} />

                            <DropdownItem label="Research & innovation" index={6} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Overview", to: "/rnc" },
                                { label: "Projects", to: "/" },
                                { label: "Publications", to: "/" }
                            ]} />

                            <DropdownItem label="Life at campus" index={7} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Hostel Life", to: "/hostel" },
                                { label: "Student Clubs", to: "/clubs" },
                                { label: "Events and gallery", to: "/" },
                                { label: "Annual Fest", to: "/" },
                                { label: "Institute Committee", to: "/" }
                            ]} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DropdownItem = ({ label, index, openDropdown, toggleDropdown, closeDropdown, links }) => {
    return (
        <div
            className="relative"
            onMouseEnter={() => toggleDropdown(index)}
            onMouseLeave={closeDropdown}
        >
            <li className="font-medium py-2 cursor-pointer select-none">
                {label}
            </li>
            {openDropdown === index && (
                <div className="absolute text-sm text-left rounded-lg left-0 w-48 bg-white p-4 z-30 shadow-lg">
                    {links.map((link, idx) => (
                        <Link key={idx} to={link.to} className="block font-medium p-2 hover:bg-gray-100">
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Navbarr;