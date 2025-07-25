import React from 'react';

// Hardcoded info with corresponding image filenames in src/assets/prof_of_prac/
const professorsOfPractice = [
  {
    id: 'pamela',
    name: 'Ms. Pamela Kumar',
    photo: 'ms_pamela_kumar.jpg',
    profileUrl: 'https://in.linkedin.com/in/pamela-kumar-8b51124',
    designation: 'Chief Strategy Advisor (Telecom & Data), FSID-IISC',
    affiliation: 'exDirector General-Telecom STDs Development Society of India',
  },
  {
    id: 'rajni',
    name: 'Ms. Rajni Moona',
    photo: 'ms_rajni_moona.jpg',
    profileUrl: 'https://in.linkedin.com/in/rajni-jain-moona-7a3b9713',
    designation: 'IT Head at IIT Bombay Nanofabrication Facility',
    affiliation: '',
  },
  {
    id: 'ashwin',
    name: 'Mr. Ashwin Ganesan',
    photo: 'mr_ashwin_ganesan.jpg',
    profileUrl: 'https://www.linkedin.com/in/ashwin-ganesan-60732b14/',
    designation: 'Ex Professor in uGDX School of Technology, ATLAS SkillTech University',
    affiliation: '',
  },
];

// Import all images dynamically from prof_of_prac folder
const importAllImages = (r) => {
  const images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};
const images = importAllImages(require.context('../assets/prof_of_prac', false, /\.(png|jpe?g|svg)$/));

const ProfessorOfPractice = () => (
  <div className="flex flex-col items-center px-4 sm:px-6 lg:px-10 w-full max-w-7xl mx-auto py-12">
    <h1 className="text-4xl font-bold mb-16 text-custom-red text-center">
      Professors of Practice
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
      {professorsOfPractice.map(fac => (
        <div
          key={fac.id}
          className="flex flex-col items-center text-center bg-white p-8"
        >
          <a
            href={fac.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 block w-36 h-36 sm:w-40 sm:h-40 bg-sky-100 rounded-full overflow-hidden shadow group hover:scale-105 transition-transform duration-300"
            aria-label={`Visit profile of ${fac.name}`}
          >
            <img
              src={images[fac.photo] ? images[fac.photo].default || images[fac.photo] : ''}
              alt={`Photo of ${fac.name}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </a>
          <a
            href={fac.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold text-[#003482] hover:underline mb-2"
          >
            {fac.name}
          </a>
          <div className="text-black text-base mb-1">
            {fac.designation}
          </div>
          {fac.affiliation && (
            <div className="text-gray-700 text-sm">
              {fac.affiliation}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default ProfessorOfPractice;
