import React from 'react';

const mousList = [
  {
    organization: 'Singapore Management University',
    program: 'Academia Excellence Program',
    date: '19th May 2025',
  },
  {
    organization: 'InsideFPV Pvt. Ltd.',
    program: 'Academia Excellence Program',
    date: '14th May 2025',
  },
  {
    organization: 'Narnix Edge Pvt. Ltd.',
    program: 'Academia Excellence Program',
    date: '30th April 2025',
  },
  {
    organization: 'Truecopy Credentials Pvt. Ltd.',
    program: 'Academia Excellence Program',
    date: '22nd April 2025',
  },
  {
    organization: 'ISRO Space Application Center, Ahmedabad, Gujarat, India',
    program: 'Academia Excellence Program',
    date: '17th April 2025',
  },
  {
    organization: 'MediaTek Inc., Taiwan',
    program: 'Industry-Academia Program',
    date: '20th December 2024',
  },
  {
    organization: 'ITMO University, Russia',
    program: 'Academia Excellence Program',
    date: '17th December 2024',
  },
  {
    organization: 'Bosch Global Software Technologies Pvt. Ltd., Pune, Maharashtra',
    program: 'Industry-Academia Program',
    date: '28th November 2024',
  },
  {
    organization: 'Prospectus International Eduservices Pvt. Ltd. New Delhi, India',
    program: 'Academia Excellence Program',
    date: '15th November 2024',
  },
  {
    organization: 'Skyserve (Space Research and Technology), Bangalore, Karnataka',
    program: 'Industry-Academia Program',
    date: '8th November 2024',
  },
  {
    organization: 'Sprih (Software Development), Philadelphia, Pennsylvania, US',
    program: 'Industry-Academia Program',
    date: '1st November 2024',
  },
  {
    organization: 'Krionics-Space LLC, USA',
    program: 'Industry-Academia Program',
    date: '24th October 2024',
  },
  {
    organization: 'Czar Securities Pvt. Ltd., Chandigarh, Chandigarh, India',
    program: 'Industry-Academia Program',
    date: '19th July 2024',
  },
  {
    organization: '21CC Education, Mumbai, Maharashtra, India',
    program: 'Industry-Academia Program',
    date: '18th July 2024',
  },
  {
    organization: 'IIIT Bengaluru, Karnataka, India',
    program: 'Academia Excellence Program',
    date: '18th July 2024',
  },
  {
    organization: 'IIT Gandhinagar, Gujarat, India',
    program: 'Academia Excellence Program',
    date: '3rd July 2024',
  },
  {
    organization: 'Airport Authority of India, Surat, Gujarat, India',
    program: 'Industry-Academia Program',
    date: '16th April 2024',
  },
  {
    organization: 'Sahajanand Technologies Private Limited, Surat, Gujarat, India',
    program: 'Industry-Academia Program',
    date: '16th April 2024',
  },
  {
    organization: 'Edunet Foundation, Gurgaon, India',
    program: 'Industry-Academia Program',
    date: '6th March 2024',
  },
  {
    organization: 'Mckinley Rice, Pune, Maharashtra, India',
    program: 'Industry-Academia Program',
    date: '10th November 2023',
  },
  {
    organization: 'International School of Gems and Jewellery, Surat, Gujarat, India',
    program: 'Skill India Program',
    date: '16th June 2023',
  },
  {
    organization: 'Impluse Compute, Bengaluru, Karnataka, India',
    program: 'Industry-Academia Program',
    date: '13th April 2023',
  },
  {
    organization: 'Goldi Solar Pvt. Ltd., Surat, Gujarat, India',
    program: 'Industry-Academia Program',
    date: '22nd February 2023',
  },
  {
    organization: 'Gujarat Knowledge Society (GKS), Government of Gujarat, Gujarat, India',
    program: 'Students Startup Innovation Policy (SSIP) 2.0 Scheme',
    date: '6th September 2022',
  },
  {
    organization: 'COMOFI MedTech Pvt. Ltd., Bengaluru, Karnataka, India',
    program: 'Industry-Academia Program',
    date: '9th May 2022',
  },
  {
    organization: 'College of Agricultural Banking, Reserve Bank of India, Pune, Maharashtra, India',
    program: 'MISSION AVTU',
    date: '19th April 2022',
  },
  {
    organization: 'Central Public Works Development (CPWD)',
    program: 'New Campus Development, Kholvad, Kamrej, Surat',
    date: '10th March 2022',
  },
  {
    organization: 'CSIR-Institute of Minerals & Materials Technology (IMMT)-InTech, Bhubaneswar, Orissa, India',
    program: 'MAITRI Initiative',
    date: '27th October 2021',
  },
];

const MoUsPage = () => (
  <div className="max-w-5xl mx-auto p-6">
    <h1 className="text-4xl font-bold mt-10 mb-10 text-custom-red text-center">
      List of MoUs Done – Till 2025
    </h1>

    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-[#003482] text-white">
          <tr>
            <th className="py-3 px-5 text-left">Organization / Institution</th>
            <th className="py-3 px-5 text-left">Program / Initiative</th>
            <th className="py-3 px-5 text-left">Date Signed</th>
          </tr>
        </thead>
        <tbody>
          {mousList.map(({ organization, program, date }, idx) => (
            <tr
              key={idx}
              className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <td className="py-3 px-5">{organization}</td>
              <td className="py-3 px-5">{program}</td>
              <td className="py-3 px-5">{date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default MoUsPage;
