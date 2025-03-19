import React from 'react';
import stats8 from "../../assets/images/qq.png";
import BrochurePDF from '../../assets/pdf/TNP_Brochure_2024_25_U1.pdf';
import JAFPDF from '../../assets/pdf/IIIT_Surat_JAF.pdf';
import tnpofficer from "../../assets/placement/jyoti_ranjan_tpo.jpg";
function AboutTnpTnpOfficer() {
  return (
    <div className="flex z-10 flex-col px-5 md:px-20 mt-0 w-full max-w-screen-xl mx-auto">
      {/* Main content container */}
      <div className="mt-0 w-full">
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">

          {/* Main Content */}
          <div className="flex flex-col md:w-[97%] w-full">
            <div className="grow">
              <div className="flex flex-col md:flex-row gap-5">

                {/* Profile Section */}
                <div className="flex flex-col md:w-[29%] w-full">
                  <div className="flex flex-col">
                    <div className="bg-sky-100 rounded-3xl overflow-hidden">
                      <img
                        loading="lazy"
                        srcSet={tnpofficer}
                        alt="Profile Image"
                        className="w-full aspect-[0.88] object-cover"
                      />
                    </div>
                    <div
                      className="flex justify-center items-center px-16 py-3 mt-4 text-xl font-semibold text-white bg-[#003482] rounded-full md:px-5"
                     
                    >
                      <button className="">TPO Profile</button>
                    </div>
                  </div>
                </div>

                {/* Profile Information */}
                <div className="flex flex-col md:w-[71%] w-full">
                  <div className="mt-2.5 text-2xl font-semibold text-[#660000] font-[Poppins] ">
                    <div className="text-3xl font-bold" id="tpo-profile">
                      Ms. Jyoti Ranjan
                    </div>
                    <div className="mt-5 text-lg font-medium text-[#003481] ">
                      Ph.D, Communication Networks,
                      <br />
                      <div className="text-black">
                        IISc, Bangalore, India (ECE)
                      </div>

                    </div>
                    <div className="mt-5 text-lg font-semibold text-[#003481]">
                      email id  
                    </div>
                    <div className="mt-.5 text-lg italic font-medium text-black">
                       tnpoffice@iiitsurat.ac.in
                    </div>
                    <div className="mt-5 text-lg text-black font-normal font-[Poppins] w-full text-justify ">
                      Warm welcome to you on the behalf of Training & Placement Cell of Indian Institute of Information Technology, Surat.

                      We hope this message finds you in the best. As the Training and Placement Team at the Indian Institute of Information Technology (IIIT), Surat, We cordially invite your esteemed organization to, and on behalf of our institute for the Campus Recruitment Process (CRP) for all Academic Years session. Our placement procedure shall start late July every year, and we are more than willing to facilitate any arrangements.
                      {/* Image added right after the text */}
                      <img
                        src={stats8} // Replace with your image URL
                        alt="Quote Icon"
                        className="inline-block ml-2 align-middle" // Makes it inline and with some space to the left
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Words from T&P Officer Section */}
      <div className="mt-14 text-2xl font-semibold font-[Poppins] leading-9 text-[#660000] flex justify-start items-center">
        Words from T&P Officer
        <hr className="ml-5 border-t border-[#660000] flex-grow" />
      </div>
      <div className="mt-7 text-justify font-[Poppins] font-normal text-black px-4 md:px-0 text-justify ">

        <div>
          <p>
            Based on our communication with an associate of your team, we have learnt that you extend an internship offer to the set of students you hire for full-time roles. We would like to share that our institute encourages students to pursue full-time internships as:
          </p>
          <div className="mr-14 mt-2.5">
  <ul className=" pl-6 space-y-2">
    <li>
      <strong>✅ Semester Internship during summer break after the 6th semester: </strong> 
       This is an 8-week internship program. Students must return to campus after the internship for their 7th semester.
    </li>
    <li>
      <strong>✅ Semester Internship during the 8th semester (Jan-May/June): </strong> 
      This internship spans no less than 20 weeks. During this time, students do not have any academic load.
    </li>
  </ul>
</div>


          <p className="mt-3.5" >
            In the first six years of its establishment, the institute has seen its students succeeding at various prestigious events and programs such as:  Google Summer of Code, GitHub Externship, Outreach, Major League Hacking, Unity Hackathon, and a lot more.
          </p>

          <p>
            The institute has also fostered a great culture of innovation and entrepreneurship. We take pride in saying that our students are part of sustainable, high-growth, early-stage startups. They have leveraged their knowledge from the institute and earned positions at reputed organizations like:
          </p>

          Google, Microsoft, Amazon, Rubrik, Graviton, Walmart, Navi, Deloitte and many more.


          The students are not only well-versed with technical knowledge but have also exhibited excellent interpersonal skills at national and international events.

          <p className="mt-2.5">
            Students from earlier batches have built upon the solid foundation of our institution, securing placements in companies with top global reputations. Our strong industry linkages provide a holistic approach to research and education.

          </p>

          <p>
            We invite recruiting organizations and graduating students to find the best match between their needs and capabilities, and we look forward to your active participation.
          </p>
          <p>
            In case of any queries or documentation requirements, please feel free to contact us via email or mobile. We will be more than happy to assist you.
          </p>
          <p>
            We assure you of a smooth and remarkable hiring experience.
          </p>
          <p>
  Please download our 
  <a 
    href={JAFPDF}
    download 
   
  >
    <strong> Placement Brochure </strong>
  </a> 
  and 
  <a 
    href={BrochurePDF}
    download 
    
  >
    <strong> Job Announcement Form (JAF)</strong>
  </a>. Fill out the JAF and share it with us at  
  <a 
    href="mailto:tnp@iiitsurat.ac.in" 
    className=""
  >
      &nbsp;&nbsp;&nbsp; tnp@iiitsurat.ac.in
  </a>.
</p>

          <p>Looking forward to hosting you soon.</p>
          <p className="mt-2.5">Regards,</p>
          <p>
            <strong>Faculty Coordinator,</strong><br />
            Training & Placement Cell,<br />
            IIIT, Surat<br />
            Contact: +91 9510217595<br />
            Email: <a href="mailto:tnp@iiitsurat.ac.in">tnp@iiitsurat.ac.in</a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default AboutTnpTnpOfficer;
