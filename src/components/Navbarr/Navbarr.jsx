import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger and close icons
import './Navbarr.css';

const Navbarr = ({ setDarkMode }) => {
    const location = useLocation();
    const [openDropdown, setOpenDropdown] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();


    // Prevent scrolling when mobile menu is open
    useEffect(() => {


    const toObserve=new MutationObserver(()=>{
      var banner=document.querySelector("div.skiptranslate");
      var iframe=document.getElementById(":1.container");
      if(!iframe){
        var page=document.querySelector("#whole");
        if(page){
          page.style.marginTop="0px";
        }
      }
      else if(banner && banner.style.display==="none"){
        var page=document.querySelector("#whole");
        if(page){
          page.style.marginTop="0px";
        }
      }else{
        var page=document.querySelector("#whole");
        if(page){
          page.style.marginTop="40px";
        }
      }

    });

    toObserve.observe(document.body, {
    childList: true,
    subtree: true,
  });

        const addGoogleTranslateWidget=()=>{

          if (document.getElementById("google-translate-script")) return;
          var script=document.createElement("script");
          script.id="google-translate-script";
          script.src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
          document.body.appendChild(script);


        };
           window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,gu",
          layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        },
        "google_translate_element"
      );
    };

        addGoogleTranslateWidget();

         const anInterval=setInterval(()=>{
        var im=document.querySelector(".VIpgJd-ZVi9od-l4eHX-hSRGPd img");
        if(im){
            im.style.display="inline";
            console.log("Img found");
            clearInterval(anInterval);
        }
        console.log("Img not found");
      },300);

      const interv=setInterval(()=>{
        var dropdown=document.querySelector(".goog-te-combo");
        if(dropdown){
            var styling=document.createElement("style");
            styling.innerHTML=`.goog-te-combo {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #ffffff;
    border: 1px solid #ced4da;
    border-radius: 6px;
    padding: 6px 8px;
    font-size: 13px;
    color: #495057;
    min-width: 120px;
    max-width: 140px;
    height: 32px;
    outline: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    appearance: none;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 8px center;
    background-repeat: no-repeat;
    background-size: 16px;
    padding-right: 32px;
    position: relative;
}

.goog-te-combo:hover {
    border-color: #4285f4;
    box-shadow: 0 2px 8px rgba(66, 133, 244, 0.15);
    color: #212529;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%234285f4' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    transform: translateY(-1px);
}

.goog-te-combo:focus {
    border-color: #4285f4;
    box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.1), 0 2px 8px rgba(66, 133, 244, 0.15);
    color: #212529;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%234285f4' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    transform: translateY(-1px);
}

.goog-te-combo:active {
    transform: translateY(0);
    box-shadow: 0 1px 4px rgba(66, 133, 244, 0.2);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%234285f4' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 14l4-4 4 4'/%3e%3c/svg%3e");
}

/* Optional: Add a subtle animation for the dropdown arrow on hover */
.goog-te-combo:hover {
    background-position: right 8px center;
    animation: arrowBounce 0.3s ease-in-out;
}

@keyframes arrowBounce {
    0%, 100% { background-position: right 8px center; }
    50% { background-position: right 6px center; }
}

/* Disabled state styling */
.goog-te-combo:disabled {
    background-color: #f8f9fa;
    color: #6c757d;
    cursor: not-allowed;
    border-color: #e9ecef;
    box-shadow: none;
    transform: none;
}

.goog-te-combo:disabled:hover {
    transform: none;
    box-shadow: none;
    border-color: #e9ecef;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236c757d' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
}`;
        document.head.appendChild(styling);
        clearInterval(interv);
        }
        console.log("Dropdown not found!!");


      },300);

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
                <div className='flex justify-between lg:justify-start h-full items-center'>
                           <div className="lg:hidden flex items-center justify-center">
                                <button 
                                    onClick={toggleMenu} 
                                    className="p-1 focus:outline-none rounded-full hover:bg-gray-200 transition-colors duration-200"
                                    aria-label="Open menu"
                                >
                                    <HiMenu size={24} />
                                </button>
                            </div>
                            <ul className='hidden min-[810px]:flex lg:flex-1'>
                                <li className='cursor-pointer hover:underline'>Students</li><span>&nbsp;.&nbsp;</span>
                                <li className='cursor-pointer hover:underline'>Faculty & Staff</li><span>&nbsp;.&nbsp;</span>
                                <li className='cursor-pointer hover:underline'>Alumni</li><span>&nbsp;.&nbsp;</span>
                                <li className='cursor-pointer hover:underline'>Contact us</li>
                            </ul>
                           <div className='flex items-center mr-2 md:mr-4 lg:mr-6'>
                                <div className='flex h-full items-center'>
                                   
                                    <div id="google_translate_element" className="text-xs min-w-[200px] mr-8 sm:mr-24 md:mr-16 lg:mr-24 xl:mr-20"></div>
                                </div>
                            </div>
                           
                         
                </div>                
                {menuOpen && (
                    <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-nav-color z-20 flex flex-col pt-16 overflow-y-auto animate-fadeIn" id="whole">
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
                                { label: "About us", to: "/discover/about" },
                                { label: "Vision & Mission", to: "/discover/vision" },
                                { label: "Director’s Desk", to: "/discover/director" },
                                { label: "Administration", to: "/discover/admin" },
                                { label: "Board of governance", to: "/discover/Board-of-governance" },
                                { label: "Finance committee", to: "/discover/finance" },
                                { label: "Senate", to: "/discover/senate-members" },
                                { label: "Building & Works Committee", to: "/discover/finance" },
                                { label: "Website Development Team", to: "/discover/websiteteam" },
                                { label: "MOUs", to: "/discover/mou" },
                            ]} />

                            <DropdownItem setOpenDropdown={setOpenDropdown} setMenuOpen={setMenuOpen} label="Admission" index={2} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Admission 2025-26", to: "/admission/fee-structure" },
                            ]} />

                            <DropdownItem setOpenDropdown={setOpenDropdown} setMenuOpen={setMenuOpen} label="Academics" index={3} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                 { label: "Academic Calendar", to: "/academics/academic-calendar" },
                                { label: "Holiday List", to: "/academics/holiday-list" },
                                { label: "B.Tech. Rule", to: "/academics/btech-academic-rules" },
                                { label: "Ph.D. Rule", to: "/academics/phd-academic-rules" },
                                { label: "Ph.D. Fees Structure", to: "/academics/phd-fee-structure" }
                            ]} />

                            <DropdownItem setOpenDropdown={setOpenDropdown} setMenuOpen={setMenuOpen} label="Departments" index={4} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Computer Science & Engineering", to: "/csedepartment" },
                                { label: "Electronics & Communication Engineering", to: "/ecedepartment" },
                                { label: "Applied Science & Humanities", to: "/applied-science-and-humanities" },
                                { label: "Adjunct professor", to: "/adjunct-professor" }
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
                                { label: "About us", to: "/discover/about" },
                                { label: "Vision & Mission", to: "/discover/vision" },
                                { label: "Director’s Desk", to: "/discover/director" },
                                { label: "Administration", to: "/discover/admin" },
                                { label: "Board of governance", to: "/discover/Board-of-governance" },
                                { label: "Finance committee", to: "/discover/finance" },
                                { label: "Senate", to: "/discover/senate-members" },
                                { label: "Building & Works Committee", to: "/discover/finance" },
                                { label: "Website Development Team", to: "/discover/websiteteam" },
                                { label: "MOUs", to: "/discover/mou" },
                            ]} />

                            <DropdownItem setOpenDropdown={setOpenDropdown} setMenuOpen={setMenuOpen} label="Admission" index={2} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Admission 2025-26", to: "/admission/fee-structure" },
                            ]} />

                            <DropdownItem setOpenDropdown={setOpenDropdown} setMenuOpen={setMenuOpen} label="Academics" index={3} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Academic Calendar", to: "/academics/academic-calendar" },
                                { label: "Holiday List", to: "/academics/holiday-list" },
                                { label: "B.Tech. Rule", to: "/academics/btech-academic-rules" },
                                { label: "Ph.D. Rule", to: "/academics/phd-academic-rules" },
                                { label: "Ph.D. Fees Structure", to: "/academics/phd-fee-structure" }
                            ]} />

                            <DropdownItem setOpenDropdown={setOpenDropdown} setMenuOpen={setMenuOpen} label="Departments" index={4} openDropdown={openDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} links={[
                                { label: "Computer Science & Engineering", to: "/csedepartment" },
                                { label: "Electronics & Communication Engineering", to: "/ecedepartment" },
                                { label: "Applied Science & Humanities", to: "/applied-science-and-humanities" },
                                { label: "Adjunct professor", to: "/adjunct-professor" }
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