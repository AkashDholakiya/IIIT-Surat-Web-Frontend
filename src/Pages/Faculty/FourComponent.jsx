import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backend_local } from '../../utils/helper';

const FourComponent = ({ facultyId, facultyName }) => {
  const [qualifications, setQualifications] = useState([]);
  const [facultyInfo, setFacultyInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQualifications = async () => {
      setLoading(true);
      try {
        const [qualRes, facRes] = await Promise.all([
          axios.get(`${backend_local}/facultyqualification/`),
          axios.get(`${backend_local}/faculty/`),
        ]);

        const filteredQuals = qualRes.data
          .filter((item) => item.fac_id === facultyId)
          .sort((a, b) => parseInt(a.passingyear) - parseInt(b.passingyear));

        const matchedFaculty = facRes.data.find((f) => f.fac_id === facultyId);

        setQualifications(filteredQuals);
        setFacultyInfo(matchedFaculty);
      } catch (error) {
        console.error('Error fetching data:', error);
        setQualifications([]);
        setFacultyInfo(null);
      } finally {
        setLoading(false);
      }
    };

    if (facultyId) {
      fetchQualifications();
    }
  }, [facultyId]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (!facultyInfo) return <div className="p-4 text-red-500">Faculty not found.</div>;

  // Construct full faculty name if facultyName prop is not provided
  const fullName =
    facultyName ||
    `${facultyInfo.fac_initial} ${facultyInfo.fac_fname} ${facultyInfo.fac_mname ?? ''} ${facultyInfo.fac_lname}`
      .replace(/\s+/g, ' ')
      .trim();

  // Load local image or none
  let photoSrc = null;
  try {
    photoSrc = require(`../../assets/Faculty/${facultyInfo.fac_photo}`);
  } catch {
    photoSrc = null;
  }

  return (
    <div className="flex flex-col gap-4 p-2">
      {/* Image and Text Block at the Top */}
      <div className="flex flex-col items-center sm:flex-row sm:items-center w-full gap-4 mb-5">
        {/* Image Container */}
        <div className="w-[100px] flex-shrink-0">
          {photoSrc ? (
            <img
              src={photoSrc}
              alt={fullName}
              className="w-full h-[115px] object-cover rounded-lg shadow"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-[115px] bg-gray-100 rounded-lg" />
          )}
        </div>

        {/* Text Container */}
        <div className="text-center sm:text-left">
          <div className="text-custom-red text-base sm:text-lg font-bold">{fullName}</div>
          <div className="text-gray-700 text-sm sm:text-base font-semibold mt-1">
            {facultyInfo.fac_high_qualification}
            {facultyInfo.fac_specialization ? `, ${facultyInfo.fac_specialization}` : ''}
            <br />
            {facultyInfo.fac_high_qualification_uni}
          </div>
        </div>
      </div>

      {/* Dynamic Qualification List */}
      {qualifications.length > 0 ? (
        qualifications.map((qual, index) => (
          <div
            key={qual.quali_id || index}
            className="flex flex-col sm:flex-row w-full bg-white rounded-lg shadow-sm p-3 gap-2 items-center"
          >
            {/* Left Section: Qualification Info */}
            <div className="w-full sm:w-7/12 flex flex-col">
              <h3 className="text-custom-red text-base sm:text-lg font-semibold">
                {qual.fac_qualification} {qual.specialization ? `- ${qual.specialization}` : ''}
              </h3>
              <p className="text-sm sm:text-base mt-1 text-gray-700">
                {qual.university}
                <br />
                Grade: {qual.classorgrade}, CPI: {qual.percorcpi}
              </p>
            </div>

            {/* Right Section: Passing Year */}
            <div className="w-full sm:w-5/12 flex justify-center sm:justify-end mt-2 sm:mt-0">
              <h3 className="text-gray-700 text-sm sm:text-base font-semibold m-0">
                Passing Year: {qual.passingyear}
              </h3>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-600">No qualifications found.</div>
      )}
    </div>
  );
};

export default FourComponent;
