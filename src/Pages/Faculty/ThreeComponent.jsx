import React, { useEffect, useState } from 'react';
import { backend_local } from '../../utils/helper';

const ThreeComponent = ({ facultyId, facultyName }) => {
  const [faculty, setFaculty] = useState(null);
  const [facultyDscr, setFacultyDscr] = useState(null);
  const [loading, setLoading] = useState(true);

  // Format dates to readable strings
  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    if (isNaN(date)) return dateStr;
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  const formatExperience = (years, months) => {
    const y = parseInt(years || 0);
    const m = parseInt(months || 0);
    if (!y && !m) return 'N/A';
    return `${y} year${y !== 1 ? 's' : ''} ${m} month${m !== 1 ? 's' : ''}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [resFac, resDscr] = await Promise.all([
          fetch(`${backend_local}/faculty/`),
          fetch(`${backend_local}/facultydscr/`),
        ]);

        const facultyData = await resFac.json();
        const dscrData = await resDscr.json();

        const fac = facultyData.find(f => f.fac_id === facultyId);
        const extra = dscrData.find(d => d.fac_id === facultyId);

        setFaculty(fac);
        setFacultyDscr(extra);
      } catch (err) {
        console.error('Error loading faculty profile:', err);
        setFaculty(null);
        setFacultyDscr(null);
      } finally {
        setLoading(false);
      }
    };

    if (facultyId) {
      fetchData();
    }
  }, [facultyId]);

  if (loading) return <div className="p-4 text-center">Loading...</div>;
  if (!faculty) return <div className="p-4 text-red-500 text-center">Faculty not found.</div>;

  const fullName =
    facultyName ||
    `${faculty.fac_initial} ${faculty.fac_fname} ${faculty.fac_mname || ''} ${faculty.fac_lname}`.trim();

  let photoSrc = null;
  try {
    photoSrc = require(`../../assets/Faculty/${faculty.fac_photo}`);
  } catch {
    photoSrc = null;
  }

  const teachingExp = formatExperience(faculty.fac_aebgcet_year, faculty.fac_aebgcet_month);
  const joinDate = formatDate(faculty.fac_doj);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      {/* Left Column (Image) */}
      <div className="w-full lg:w-1/3 xl:w-1/4 flex flex-col items-center lg:items-start">
        <div className="w-40 sm:w-48 md:w-56">
          {photoSrc ? (
            <img
              src={photoSrc}
              alt={fullName}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              style={{ aspectRatio: '3 / 4' }}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-[200px] bg-gray-200 rounded-lg" />
          )}
        </div>
      </div>

      {/* Right Column (About Info) */}
      <div className="w-full lg:w-2/3 xl:w-3/4 space-y-4">
        <h1 className="font-bold text-custom-red text-lg">{fullName}</h1>

        <p className="text-sm sm:text-base text-gray-700">
          <span className="font-semibold">PhD:</span>{' '}
          {faculty.fac_high_qualification_uni || 'N/A'}
        </p>

        <p className="text-sm sm:text-base text-gray-700">
          <span className="font-semibold">Designation:</span>{' '}
          {faculty.fac_designation}
        </p>

        <p className="text-sm sm:text-base text-gray-700">
          <span className="font-semibold">Joining Date:</span> {joinDate}
        </p>

        <p className="text-sm sm:text-base text-gray-700">
          <span className="font-semibold">Teaching Experience:</span> {teachingExp}
        </p>

        <p className="text-sm sm:text-base text-blue-800 underline break-all">
          <a href={`mailto:${faculty.fac_email1}`}>{faculty.fac_email1}</a>
        </p>

        {/* 🔽 About Section */}
        {facultyDscr?.fac_dscr && (
          <div className="mt-6 space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-custom-red">About</h2>
            <p className="text-sm sm:text-base text-gray-900 whitespace-pre-line">
              {facultyDscr.fac_dscr}
            </p>
          </div>
        )}

        {/* 🔽 Subjects, specialization, activities (optional) */}
        {faculty.fac_ugsub && (
          <p className="text-sm sm:text-base">
            <span className="font-semibold">Subjects Taught (UG):</span> {faculty.fac_ugsub}
          </p>
        )}

        {faculty.fac_specialization && (
          <p className="text-sm sm:text-base">
            <span className="font-semibold">Specialization Areas:</span> {faculty.fac_specialization}
          </p>
        )}
      </div>
    </div>
  );
};

export default ThreeComponent;
