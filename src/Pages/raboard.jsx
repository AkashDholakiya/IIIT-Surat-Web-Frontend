import React from 'react';

// Advisory Board data – update or extend as needed
const boardMembers = [
  {
    id: 'anurag',
    name: 'Prof. Anurag Kumar',
    photo: 'prof_anurag_kumar.jpg',
    profileUrl: 'https://fellows.ias.ac.in/profile/v/FL2010026',
    position: [
      'INSA Distinguished Professor',
      'J. C. Bose National Fellow (2011-2021)',
      'Director, IISc (2014-2020)',
      'Honorary Professor, ECE Department, IISc',
      'Bengaluru'
    ],
  },
  {
    id: 'giridhar',
    name: 'Dr. Giridhar Mandyam',
    photo: 'Dr_Giri_Mandyam.jpg',
    profileUrl: 'https://www.linkedin.com/in/giridharmandyam',
    position: [
      'MediaTek',
      'USA'
    ],
  },
  {
    id: 'archan',
    name: 'Prof. Archan MISRA',
    photo: 'archanm1.jpg',
    profileUrl: 'https://faculty.smu.edu.sg/profile/archan-misra-376',
    position: [
      'Vice Provost (Research)',
      'Lee Kong Chian Professor of Computer Science',
      'Singapore Management University',
      'Singapore'
    ],
  },
  {
    id: 'supratik',
    name: 'Prof. Supratik Mukhopadhyay',
    photo: 'Supratik_Mukhopadhyay.jpg',
    profileUrl: 'https://www.lsu.edu/cce/about/cce-directories/faculty-profiles/mukhopadhyay_supratik.php',
    position: [
      'Louisiana State University (LSU)',
      'Baton Rouge, LA',
      'USA'
    ],
  },
  {
    id: 'vijay',
    name: 'Prof. Vijay Raghunathan',
    photo: 'Dr_Vijay_Raghunathan.png',
    profileUrl: 'https://www.cerias.purdue.edu/site/people/faculty/view/1036',
    position: [
      'Purdue University',
      'USA'
    ],
  },
  {
    id: 'deepak',
    name: 'Mr. Deepak Bansal',
    photo: 'Mr_Deepak_Bansal.jpg',
    profileUrl: 'https://www.linkedin.com/in/deepak-bansal-7578375',
    position: [
      'Corporate Vice-President & Technical Fellow',
      'Microsoft Azure',
      'USA'
    ],
  },
];

// Dynamically import all images from research_adv folder
const importAllImages = (r) => {
  const images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};
const images = importAllImages(require.context('../assets/research_adv', false, /\.(png|jpe?g|svg)$/));

const ResearchAdvisoryBoard = () => (
  <div className="flex flex-col items-center px-4 sm:px-6 lg:px-10 w-full max-w-7xl mx-auto py-12">
    <h1 className="text-4xl font-bold mb-16 text-custom-red text-center">
      Research Advisory Board
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
      {boardMembers.map(member => (
        <div
          key={member.id}
          className="flex flex-col items-center text-center rounded-2xl bg-white p-8"
        >
          <a
            href={member.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 block w-36 h-36 sm:w-40 sm:h-40 bg-sky-100 rounded-full overflow-hidden group hover:scale-105 transition-transform duration-300"
            aria-label={`Visit profile of ${member.name}`}
          >
            <img
              src={images[member.photo] ? images[member.photo].default || images[member.photo] : ''}
              alt={`Photo of ${member.name}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </a>
          <a
            href={member.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold text-[#003482] hover:underline mb-2"
          >
            {member.name}
          </a>
          <div className="text-black text-base mb-1">{member.position[0]}</div>
          {member.position.slice(1).map((line, idx) =>
            <div className="text-gray-700 text-sm" key={idx}>{line}</div>
          )}
        </div>
      ))}
    </div>

    {/* Board Meeting PDF Link */}
    <div className="mt-12 w-full flex justify-center">
      <a
        href="/RADB_MoM_Jan_2025.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 rounded-lg bg-[#003482] text-white font-semibold hover:bg-[#0050b3] transition-colors text-lg"
      >
        Board Meeting Details
      </a>
    </div>
  </div>
);

export default ResearchAdvisoryBoard;
