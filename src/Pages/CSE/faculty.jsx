import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FacultyCSE = () => {
  const [faculties, setFaculties] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState(''); // will be set after fetching categories

  const navigate = useNavigate();

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/faculty/');
        if (!response.ok) throw new Error('Failed to fetch faculties');
        const data = await response.json();

        // Filter for active faculty in UGCSE department
        const filtered = data.filter(f => f.dept_id === 'UGCSE' && f.active === 1);
        setFaculties(filtered);

        // Get unique designations
        const uniqueDesignations = Array.from(
          new Set(filtered.map(f => f.fac_designation).filter(Boolean))
        );

        // Add 'Other' if any faculty does not have designation or unrecognized designation
        const hasOther = filtered.some(f => !f.fac_designation || !uniqueDesignations.includes(f.fac_designation));
        if (hasOther) uniqueDesignations.push('Other');

        setCategories(uniqueDesignations);

        // Set first designation as active by default if available
        if (uniqueDesignations.length > 0) {
          setActiveCategory(uniqueDesignations[0]);
        }

      } catch (err) {
        setError(err.message || 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchFaculties();
  }, []);

  if (loading) return <p className="p-4 text-center">Loading faculties...</p>;
  if (error) return <p className="p-4 text-center text-red-600">Error: {error}</p>;

  // Filter faculties based on active category
  const filteredFaculties = faculties.filter(faculty => {
    if (activeCategory === 'Other') {
      return !categories.includes(faculty.fac_designation);
    }
    return faculty.fac_designation === activeCategory;
  });

  // Function to dynamically load faculty image
  const getFacultyImage = (photoFileName) => {
    try {
      return require(`../../assets/Faculty/${photoFileName}`);
    } catch {
      return null;
    }
  };

  // Navigate to faculty detail page
  const handleFacultyClick = (faculty) => {
    const fullName = `${faculty.fac_initial} ${faculty.fac_fname} ${faculty.fac_mname || ''} ${faculty.fac_lname}`.trim();
    navigate(`/faculty/${faculty.fac_id}`, { state: { facultyName: fullName } });
  };

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-10 w-full">
      <main className="w-full max-w-screen-xl">
        <section className="flex flex-col w-full">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-4 items-center text-base sm:text-lg text-[#003482] mb-6 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 cursor-pointer px-3 py-1 rounded-full border ${
                  activeCategory === category
                    ? 'bg-[#660000] text-white'
                    : 'border-[#003482] text-[#003482] hover:bg-[#003482]/10'
                } transition-colors duration-200 text-sm sm:text-base`}
              >
                {activeCategory === category && <div className="w-2 h-2 bg-white rounded-full" />}
                {category}
              </button>
            ))}
          </div>

          {/* Faculty Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-0">
            {filteredFaculties.length > 0 ? (
              filteredFaculties.map(faculty => {
                const fullName = `${faculty.fac_initial} ${faculty.fac_fname} ${faculty.fac_mname || ''} ${faculty.fac_lname}`.replace(/\s+/g, ' ').trim();
                const photoSrc = getFacultyImage(faculty.fac_photo);
                return (
                  <div
                    key={faculty.fac_id}
                    role="button"
                    tabIndex={0}
                    className="flex flex-col items-center text-center cursor-pointer"
                    onClick={() => handleFacultyClick(faculty)}
                    onKeyPress={e => {
                      if (e.key === 'Enter') handleFacultyClick(faculty);
                    }}
                  >
                    <div className="w-36 h-36 sm:w-40 sm:h-40 bg-sky-100 rounded-full overflow-hidden group hover:scale-105 hover:shadow-md transition-transform duration-300">
                      {photoSrc ? (
                        <img
                          loading="lazy"
                          src={photoSrc}
                          alt={`Profile of ${fullName}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full" />
                      )}
                    </div>
                    <div className="mt-5 text-[#003482]">
                      <div className="text-base sm:text-lg font-semibold">{fullName}</div>
                      <div className="text-sm sm:text-base text-black">{faculty.fac_designation}</div>
                      {faculty.fac_specialization && (
                        <div className="text-sm sm:text-base text-gray-600">{faculty.fac_specialization}</div>
                      )}
                      {faculty.fac_email1 && (
                        <div className="text-sm sm:text-base text-black break-words">{faculty.fac_email1}</div>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="col-span-full text-center text-gray-600">
                No faculty found under "{activeCategory}".
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default FacultyCSE;
