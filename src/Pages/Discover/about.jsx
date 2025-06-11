import React from 'react';
import comms from "../../assets/images/comms.png"; 

const Aboutus = () => {
    return (
        <div className="flex flex-col p-6 overflow-y-auto max-w-full">
            <div className="flex flex-col text-xl text-[#660000]">
                <div className="flex items-center gap-5 font-semibold">
                    <div className="flex-shrink">About IIIT Surat</div>
                    <div className="flex-grow border-t border-[#660000] border-bold" />
                </div>
                
                <div className="mt-9 text-[20px] text-justify text-[#474747]">
                    Indian Institute of Information Technology Surat is an Institute of National Importance established under the Act of Parliament 2017, by erstwhile Ministry of Human Resource Development (MHRD), Government of India, on not-for-profit and in Public-Private-Partnership basis. A memorandum of understanding was signed in 2016 between the President of India, the Governor of the State of Gujarat and Industry partners namely; Gujarat Narmada valley Fertilizer and Chemicals (GNFC), Gujarat Informatics Limited (GIL) and Gujarat Gas Limited. The Institute started in 2017 with SVNIT as mentoring Institute.<br /><br />
                    The Government of Gujarat has allotted 28.71 Acre of land for developing the infrastructure. The Institute is in its own new academic facility at Kholvad in Kamrej Taluka of Surat District. The campus is close to National Highway No.48, linking Mumbai to New Delhi.<br /><br />
                    IIIT Surat is offering B. Tech. degree in Electronics & Communication Engineering and Computer Science Engineering. Admission to the course is only for candidates qualified in JEE (Main). The PhD programme started in the year 2022-23. Admission to the Institute is managed by Central Seat Allocation Board (CSAB), Govt. of India and Joint Seat Allocation Authority (JoSAA).<br /><br />

                    <img className='mt-4 max-w-full h-auto' src={comms} alt="comms" />
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
