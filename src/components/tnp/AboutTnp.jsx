import React, { useRef } from "react";
// import { Link } from 'react-router-dom';  // Comment out or remove Link if not used
import tnpImage from "../../assets/images/Frame5.png";
import tnp_pdf from "../../assets/pdf/TNP_Brochure_2024_25_U1.pdf";
import { useNavigate } from "react-router-dom";

function AboutTnp() {
  const navigate = useNavigate();

  // Create references for each section
  const aboutRef = useRef(null);
  const tnpOfficerRef = useRef(null);
  const placementTeamRef = useRef(null);
  // const placementStatsRef = useRef(null);  // Remove unused refs
  // const Our_Achievers = useRef(null);
  // const guidelinesRef = useRef(null);
  // const researchHighlightsRef = useRef(null);

 // Function to scroll to the specified section
  // const scrollToSection = (ref) => {  // Remove unused function
  //   if (ref.current) {
  //     ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };

  return (
    <div className="mt-[-20px] flex flex-col px-4 sm:px-8 md:px-20 w-full max-w-full">
      {/* Hero Section */}
      <div className=" h-full relative overflow-hidden flex justify-center items-center mt-6 sm:mt-10 w-full max-w-7xl min-h-[205px]">
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
          <button
  className="px-6 sm:px-8 py-2.5 bg-blue-900 rounded-full text-white"
  onClick={() => navigate("/tnp/tnp-officer")}
>
  T & P Officer
</button>

            <button className="px-6 sm:px-8 py-2.5 bg-blue-900 rounded-full text-white">
            <a
                  href={tnp_pdf}
                  download="TNP_Brochure_2024_25_U1.pdf"
            
                >
                  Tnp Brochure
                </a>
              
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
            <div className="flex items-center text-lg sm:text-xl font-semibold text-[#660000] mt-4" ref={aboutRef}>
              <span>About department</span>
              <div className="flex-1 border-t-2 border-[#660000] ml-2"></div> {/* Line after About department */}
            </div>
            <div className="mt-4 sm:mt-1 text-sm sm:text-base text-justify text-zinc-700">
              Indian Institute of Information Technology (IIIT) Surat is an Institute of National Importance established under the Act of Parliament 2017, established by the Ministry of Education, Government of India in 2017 in the Public-Private-Partnership mode. The Institute currently offers B. Tech. degree in Computer Science and Engineering and Electronics and Communication Engineering. The admission to the Institute is through JEE(MAIN) held by the National Testing Agency. Admissions to the Institute are managed by CSAB via JoSAA. The students admitted to these programs are among the top 3 percentile of those who take the JEE MAIN test, ensuring a bar on the entry and a great talent pool.

              The goal of Training & Placement Cell is to provide students with a platform for using their potential to gain valuable experience by working in industry, it also acts as the interface between various companies seeking talented young graduates and post graduates in various disciplines.

              The Cell is well equipped with ample infrastructure in Terms of Test halls, Consultancy Hall, Conference Room, for Pre-Placement Talk, Presentations etc. and Computer labs for online tests also the cell has video conference facility available for the students.
              {/* Text continues... */}
            </div>

            {/* Training Section */}
            <div className="text-lg sm:text-xl font-semibold text-[#660000] mt-4" ref={tnpOfficerRef}>
              Training
            </div>
            <div className="mt-4 sm:mt-1 text-sm sm:text-base text-justify text-zinc-700">
              The cell support departments to provide an internship for students in industries for 8 weeks at the end of 6th Semester and for 20 weeks during the 8th Semester as a part of academic.
              {/* Text continues... */}
            </div>

            {/* Placement Section */}
            <div className="text-lg sm:text-xl font-semibold text-[#660000] mt-4" ref={placementTeamRef}>
              Placement
            </div>
            <div className="mt-4 sm:mt-1 text-sm sm:text-base text-justify text-zinc-700">
              All the reputed organizations including MNCs come to the Institute for campus recruitment. To achieve its goal, the Training & Placement Cell works towards recognizing the core competencies of students. It works through a close knot organization and has a structure which conveys information to the students at the fastest possible rate.

              The Training & Placement Cell firmly believes in ‘Industry-Institute Interaction’. In order to accomplish ‘Industry-Institute Interaction’ both the department of CSE and ECE regularly organizes technical talks and seminars to provide a platform for the budding engineers to interact with professionals from various industries. It encourages visits to the industries by the college students. An industry internship programme has been started as an academic excellence which is supported by T&P Cell where students visit the industries on a regular basis. It also takes suggestions from members of industry regarding designing/changing of curriculum. The Institute has signed MOUs with many industrial organizations and industrial chambers. Technical paper presentation contests are held in collaboration with industries to discuss new developments and trends.
              {/* Text continues... */}
            </div>

            <div className="text-lg sm:text-xl font-semibold text-[#660000] mt-4" ref={placementTeamRef}>
              Additional Activities
            </div>
            <div className="mt-4 sm:mt-1 text-sm sm:text-base text-justify text-zinc-700">
              In addition to the above-mentioned activities, the cell arranges expert lectures of Corporate Managers for Soft Skills Development for the students and faculty of the Institute. There are various Workshops and Seminars organised for the benefit of students regarding the latest trend and technology in the industry.
              {/* Text continues... */}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTnp;
