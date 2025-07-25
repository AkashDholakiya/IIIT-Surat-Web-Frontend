import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Optional, remove if no navigation

// Data hardcoded based on info + image filenames
const adjunctFaculties = [
  // CSE Adjunct Faculty
  {
    id: 'vinayr',
    name: 'Prof. Vinay Ribeiro',
    photo: 'Dr_Vinay_Ribeiro.jpg',
    designation: 'Professor, CSE Department',
    affiliation: 'IIT Bombay, India',
    country: 'India',
    url: 'https://www.cse.iitb.ac.in/~vinayr',
    department: 'CSE',
  },
  {
    id: 'veenam',
    name: 'Dr. Veena Mendiratta',
    photo: 'Dr_Veena.jpg',
    designation: 'Adjunct Professor',
    affiliation: 'Northwestern University, USA',
    country: 'USA',
    url: 'https://www.mccormick.northwestern.edu/research-faculty/directory/affiliated/mendiratta-veena.html',
    department: 'CSE',
  },
  {
    id: 'nirmal',
    name: 'Dr. Nirmal Kumar Sancheti',
    photo: 'Dr_Nirmal.jpg',
    designation: 'Industry Faculty',
    affiliation: 'India',
    country: 'India',
    url: 'https://www.iiitsurat.ac.in/assets/adjunctfac/Dr_Nirmal%20Sancheti.pdf',
    department: 'CSE',
  },
  {
    id: 'viresh',
    name: 'Dr. Vireshwar Kumar',
    photo: 'Dr_Vireshwar.jpg',
    designation: 'Assistant Professor, CSE Department',
    affiliation: 'IIT Delhi, India',
    country: 'India',
    url: 'https://www.cse.iitd.ac.in/~viresh/',
    department: 'CSE',
  },
  {
    id: 'rohit',
    name: 'Dr. Rohit Verma',
    photo: 'Dr_Rohit_Verma2.jpg',
    designation: 'Research Scientist',
    affiliation: 'Intel Labs, India',
    country: 'India',
    url: 'https://rv355.github.io/',
    department: 'CSE',
  },
  {
    id: 'sumit',
    name: 'Prof. Sumit Roy',
    photo: 'Dr_Sumit_Roy.jpg',
    designation: 'Professor, Electrical & Computer Engineering Department',
    affiliation: 'University of Washington, USA',
    country: 'USA',
    url: 'https://people.ece.uw.edu/roy/',
    department: 'CSE',
  },

  // ECE Adjunct Faculty
  {
    id: 'neelesh',
    name: 'Prof. Neelesh B. Mehta',
    photo: 'Prof_Neelesh_Mehta.jpg',
    designation: 'Professor & Chair of ECE Department',
    affiliation: 'IISc, Bangalore',
    country: 'India',
    url: 'https://ece.iisc.ac.in/~nextgenwrl/Neelesh.html',
    department: 'ECE',
  },
];

// Function to dynamically import images (using webpack require.context)
const importAllImages = (r) => {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};
const images = importAllImages(require.context('../assets/adjunctfac', false, /\.(png|jpe?g|svg)$/));


const AdjunctFaculty = () => {
  const [activeDept, setActiveDept] = useState('CSE');

  // Filter faculties by selected department
  const filteredFaculties = adjunctFaculties.filter(f => f.department === activeDept);

  // Optional navigation handler if you want details page or external links handled
  // For now just external URLs open in new tab via anchor below

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-10 w-full max-w-7xl mx-auto py-8">
      <h1 className="text-4xl font-bold mt-10 mb-16 text-custom-red text-center">
        Adjunct Faculty
      </h1>

      {/* Department Tabs */}
      <div className="mb-8 flex justify-center gap-6">
        {['CSE', 'ECE'].map(dept => (
          <button
            key={dept}
            onClick={() => setActiveDept(dept)}
            className={`px-5 py-2 rounded-full border font-semibold text-lg ${
              activeDept === dept
                ? 'bg-[#660000] text-white border-[#660000]'
                : 'border-[#003482] text-[#003482] hover:bg-[#003482]/20 transition-colors'
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Faculty Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {filteredFaculties.length === 0 && (
          <p className="col-span-full text-center text-gray-600">
            No adjunct faculty found for {activeDept}.
          </p>
        )}

        {filteredFaculties.map(faculty => {
          const photoSrc = images[faculty.photo];

          return (
            <div
              key={faculty.id}
              className="flex flex-col items-center text-center cursor-pointer"
            >
              <a
                href={faculty.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-40 h-40 sm:w-44 sm:h-44 bg-sky-100 rounded-full overflow-hidden shadow-md group hover:scale-105 hover:shadow-lg transition-transform duration-300 block"
                aria-label={`Visit profile of ${faculty.name}`}
              >
                {photoSrc ? (
                  <img
                    src={photoSrc.default || photoSrc}
                    alt={`Photo of ${faculty.name}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
              </a>

              <div className="mt-5 text-[#003482]">
                <a
                  href={faculty.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-semibold hover:underline block"
                >
                  {faculty.name}
                </a>
                <div className="text-sm sm:text-base text-black">{faculty.designation}</div>
                <div className="text-sm sm:text-base font-medium text-gray-700">{faculty.affiliation}</div>
                <div className="text-sm sm:text-base text-gray-600">{faculty.country}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdjunctFaculty;
