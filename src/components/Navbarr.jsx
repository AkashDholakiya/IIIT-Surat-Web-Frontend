import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbarr = ({ setDarkMode }) => {
    const HandleDark = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        if (openDropdown === index) {
            setOpenDropdown(null); // Close the dropdown if it's already open
        } else {
            setOpenDropdown(index); // Open the clicked dropdown
        }
    };

    return (
        <div className='text-nav-text-color'>
            <nav className='bg-nav-color dark:text-white dark:bg-slate-800 text-sm font-medium w-full h-10 px-8'>
                <div className='flex justify-between h-full items-center'>
                    <ul className='flex'>
                        <li className='cursor-pointer hover:underline'>Students</li><span>&nbsp;.&nbsp;</span>
                        <li className='cursor-pointer hover:underline'>Faculty & Staff</li><span>&nbsp;.&nbsp;</span>
                        <li className='cursor-pointer hover:underline'>Alumni</li><span>&nbsp;.&nbsp;</span>
                        <li className='cursor-pointer hover:underline'>Contact us</li>
                    </ul>
                    <ul className='flex items-center'>
                        <li className='bg-white py-1 px-5 rounded-full mr-12 hover:cursor-pointer dark:text-black' onClick={HandleDark}>Dark mode</li>
                        <div className='flex h-full items-center'>
                            <li className='cursor-pointer hover:underline'>हिंदी</li><span>&nbsp;|&nbsp;</span>
                            <li className='cursor-pointer hover:underline'>ગુજરાતી</li><span>&nbsp;|&nbsp;</span>
                            <li className='cursor-pointer hover:underline'>English</li>
                        </div>
                    </ul>
                </div>
            </nav>
            <div className='w-full h-28 relative'>
                <div className="flex mt-8 px-12 justify-between items-end">
                    <Link to='/'>
                        <div className='flex items-center space-x-[10px] mb-[10px]'>
                            <img src='./images/logo.png' alt='logo' />
                            <div className='text-custom-blue'>
                                <p className='font-semibold text-[18px] leading-[27px]'>Indian Institute of Information Technology, Surat</p>
                                <p className='font-normal text-sm leading-[24px]'>An Institute of National Importance Under Act of Parliament</p>
                            </div>
                        </div>
                    </Link>
                    <div className='flex justify-center'>
                        <input type="text" className='p-5 text-sm w-72 h-10 bg-nav-color rounded-l-lg placeholder:text-nav-text-color focus:border-none focus:outline-none placeholder:font-medium' placeholder='Search for alumni, faculty' />
                        <div className="bg-nav-color right-lg flex items-center pr-6 rounded-r-lg cursor-pointer">
                            <span className="text-gray-500"><img src="/images/search.svg" alt="mirror" /></span>
                        </div>
                        <img className='ml-3 bg-nav-color px-3 rounded-lg cursor-pointer' src="/images/filter.svg" alt="filter" />
                    </div>
                    <div className='text-end flex flex-col'>
                        <p className='font-medium'>Indian Institute of Information Technology, Surat</p>
                        <p className='flex justify-end items-end'><img className='w-30 h-6' src="/images/location.svg" alt="location" />Kamrej, Surat - 394190, Gujarat</p>
                    </div>
                </div>
                <div className="absolute -bottom-7 flex justify-center w-full h-14 z-20">
                    <div className="w-3/4 py-8 bg-nav-color rounded-2xl">
                        <ul className='flex w-full h-full text-center justify-evenly items-center'>
                            <div className="relative">
                                <li
                                    className="font-medium cursor-pointer select-none"
                                    onClick={() => toggleDropdown(1)}
                                >
                                    Discover IIIT <br /> Surat
                                </li>
                                {openDropdown === 1 && (
                                    <div className="absolute text-sm text-left rounded-lg left-0 w-48 mt-2 bg-white shadow-lg font-semibold">
                                        <ul className="p-2">
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">About us</li>
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                                <Link to={'/vision'}>Vision & Mission</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                                <Link to={'/director'}>Director’s Desk</Link>    
                                            </li>

                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Administration</li>
                                            <div className="bg-[#EAF2FE]">
                                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Board of governance</li>
                                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Senate</li>
                                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Finance committee</li>
                                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">MOUs</li>
                                            </div>
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Convocation</li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="relative">
                                <li
                                    className="font-medium cursor-pointer select-none"
                                    onClick={() => toggleDropdown(2)}
                                >
                                    Admission
                                </li>
                                {openDropdown === 2 && (
                                    <div className="absolute text-sm text-left rounded-lg left-0 w-48 mt-2 bg-white shadow-lg font-semibold top-10">
                                        <ul className="p-2">
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Undergraduate</li>
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Postgraduate</li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="relative">
                                <li
                                    className="font-medium cursor-pointer select-none"
                                    onClick={() => toggleDropdown(3)}
                                >
                                    Academics
                                </li>
                                {openDropdown === 3 && (
                                    <div className="absolute text-sm text-left rounded-lg left-0 w-52 mt-2 bg-white shadow-lg top-10 font-semibold">
                                        <ul className="p-2">
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Academic Calendar</li>
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Holiday List</li>
                                            <div className="bg-[#EAF2FE]">
                                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">B.Tech. Rule</li>
                                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">B.Tech. Fees Structure</li>
                                            </div>
                                            <div className="bg-[#EAF2FE]">
                                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Ph.D. Rule</li>
                                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Ph.D. Fees Structure</li>
                                            </div>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="relative">
                                <li
                                    className="font-medium cursor-pointer select-none"
                                    onClick={() => toggleDropdown(4)}
                                >
                                    Departments
                                </li>
                                {openDropdown === 4 && (
                                    <div className="absolute text-sm text-left rounded-lg left-0 w-72 mt-2 bg-white shadow-lg top-10 font-semibold">
                                        <ul className="p-2">

                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                                <Link to={'/department'}>Overview</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Computer Science & Engineering</li>
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Electronics & Communication Engineering</li>
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Applied Science & Huminities</li>
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Adjunct professor</li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="relative">
                                <li
                                    className="font-medium cursor-pointer select-none"
                                    onClick={() => toggleDropdown(5)}
                                >
                                    Training & <br /> placement
                                </li>
                                {openDropdown === 5 && (
                                    <div className="absolute text-sm text-left rounded-lg left-0 w-48 mt-2 bg-white shadow-lg font-semibold">
                                        <ul className="p-2">
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                                <Link to={'/about-tnp'}>About TNP</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                                <Link to={'/tnp-officer'}>TNP Officer</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                                <Link to={'/tnppt'}>Placement Team</Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="relative">
                                <li
                                    className="font-medium cursor-pointer select-none"
                                    onClick={() => toggleDropdown(6)}
                                >
                                    Research & <br /> innovation
                                </li>
                                {openDropdown === 6 && (
                                    <div className="absolute text-sm text-left rounded-lg left-0 w-48 mt-2 bg-white shadow-lg font-semibold">
                                        <ul className="p-2">
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                                <Link to={'/rnc'}>Overview</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Projects</li>
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Publications</li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="relative">
                                <li
                                    className="font-medium cursor-pointer select-none"
                                    onClick={() => toggleDropdown(7)}
                                >
                                    Life at <br /> campus
                                </li>
                                {openDropdown === 7 && (
                                    <div className="absolute text-sm text-left rounded-lg -left-1/2 w-48 mt-2 bg-white shadow-lg font-semibold">
                                        <ul className="p-2">
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                                <Link to={'/hostel'}>Hostel Life</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                                <Link to={'/clubs'}>Student Clubs</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Events and gallery</li>
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Annual Fest</li>
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Institute Committee</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbarr;
