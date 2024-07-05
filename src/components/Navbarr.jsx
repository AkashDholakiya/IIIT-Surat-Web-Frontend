import React from 'react';
import { Link } from 'react-router-dom';

const Navbarr = ({ setDarkMode }) => {
    const HandleDark = () => {
        setDarkMode((prevMode) => !prevMode);
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
                            <li className='font-medium cursor-pointer hover:underline'>Discover IIIT <br /> Surat</li>
                            <li className='font-medium cursor-pointer hover:underline'>Admission</li>
                            <li className='font-medium cursor-pointer hover:underline'>Academics</li>
                            <li className='font-medium cursor-pointer hover:underline'>
                                <Link to='/department'>Departments</Link>
                            </li>
                            <li className='font-medium cursor-pointer hover:underline'>
                                <Link to='/about-tnp'>Training & <br /> placement</Link>
                            </li>
                            <li className='font-medium cursor-pointer hover:underline'>Research & <br /> Innovation</li>
                            <li className='font-medium cursor-pointer hover:underline'>Life at <br /> campus</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbarr;
