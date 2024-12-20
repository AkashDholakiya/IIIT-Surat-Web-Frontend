import React, { useRef } from "react"; 
import { Link } from 'react-router-dom';
// import Sidebar from './Sidebar';
import tnpImage from "../../assets/images/Frame5.png";
function AboutTnp() {
  // Create references for each section
  const aboutRef = useRef(null);
  const tnpOfficerRef = useRef(null);
  const placementTeamRef = useRef(null);
  const placementStatsRef = useRef(null);
  const Our_Achievers = useRef(null);
  const guidelinesRef = useRef(null);
  const researchHighlightsRef = useRef(null);

  // Function to scroll to the specified section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col px-4 sm:px-8 md:px-20 w-full max-w-full">
      {/* Hero Section */}
      <div className="relative overflow-hidden flex justify-center items-center mt-6 sm:mt-10 w-full max-w-7xl min-h-[205px]">
        <img
          loading="lazy"
          src={tnpImage}
          className="absolute inset-0 object-cover w-full h-full"
          alt="tnp-image"
        />
        <div className="relative flex flex-col items-start px-4 sm:px-8 md:px-12 py-4 sm:py-7">
          <div className="text-xl sm:text-2xl font-semibold leading-9 text-blue-900">
            Training & Placement Cell - IIIT, Surat
          </div>
          <div className="mt-2 sm:mt-3.5 text-sm sm:text-base text-zinc-700 max-w-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus obcaecati magni voluptates nihil iure quaerat.
          </div>
          <div className="flex gap-4 mt-6 sm:mt-8 flex-wrap">
            <button className="px-6 sm:px-8 py-2.5 bg-blue-900 rounded-full text-white">
              T & P Officer
            </button>
            <button className="px-6 sm:px-8 py-2.5 bg-blue-900 rounded-full text-white">
              Tnp Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-8 sm:mt-12">
        <div className="flex flex-col lg:flex-row gap-5">
          
          {/* Sidebar */}
          {/* <Sidebar scrollToSection={scrollToSection} aboutRef={aboutRef} /> */}

          {/* Main Section */}
          <div className="flex flex-col w-full lg:w-4/5">
            {/* About Department */}
            <div className="flex items-center text-lg sm:text-xl font-semibold text-[#660000] mt-6" ref={aboutRef}>
              <span>About department</span>
              <div className="flex-1 border-t-2 border-[#660000] ml-2"></div> {/* Line after About department */}
            </div>
            <div className="mt-4 sm:mt-6 text-sm sm:text-base text-justify text-zinc-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet placeat fugiat necessitatibus. Et ab id minus tenetur consectetur molestias expedita minima delectus hic facere dicta rem fugit labore repudiandae ad deleniti tempore deserunt quisquam unde, consequuntur quaerat voluptas? 
              {/* Text continues... */}
            </div>

            {/* Training Section */}
            <div className="text-lg sm:text-xl font-semibold text-[#660000] mt-10" ref={tnpOfficerRef}>
              Training
            </div>
            <div className="mt-4 sm:mt-6 text-sm sm:text-base text-justify text-zinc-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet placeat fugiat necessitatibus. Et ab id minus tenetur consectetur molestias expedita minima delectus hic facere dicta rem fugit labore.
              {/* Text continues... */}
            </div>

            {/* Placement Section */}
            <div className="text-lg sm:text-xl font-semibold text-[#660000] mt-10" ref={placementTeamRef}>
              Placement
            </div>
            <div className="mt-4 sm:mt-6 text-sm sm:text-base text-justify text-zinc-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet placeat fugiat necessitatibus. Et ab id minus tenetur consectetur molestias expedita minima delectus hic facere dicta rem fugit labore.
              {/* Text continues... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTnp;
