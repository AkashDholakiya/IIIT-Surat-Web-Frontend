import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backend_local } from '../../utils/helper';

const FiveComponent = ({ facultyId, facultyName }) => {
  const [experiences, setExperiences] = useState([]);
  const [facultyDetail, setFacultyDetail] = useState(null);
  const [photoSrc, setPhotoSrc] = useState(null);

  const formatDate = (dateStr) => {
    if (!dateStr || dateStr.toLowerCase().includes('till')) return 'Present';
    const date = new Date(dateStr);
    return isNaN(date)
      ? dateStr
      : new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
        }).format(date);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [expRes, facRes] = await Promise.all([
          axios.get(`${backend_local}/facultyexp/`),
          axios.get(`${backend_local}/faculty/`),
        ]);

        const filteredExp = expRes.data
          .filter((exp) => exp.fac_id === facultyId)
          .sort((a, b) => new Date(b.fromdate) - new Date(a.fromdate));
        setExperiences(filteredExp);

        const faculty = facRes.data.find((f) => f.fac_id === facultyId);
        if (faculty) {
          setFacultyDetail(faculty);
          try {
            const image = require(`../../assets/Faculty/${faculty.fac_photo}`);
            setPhotoSrc(image);
          } catch {
            setPhotoSrc(null);
          }
        }
      } catch (error) {
        console.error('Error fetching faculty experience or profile:', error);
        setExperiences([]);
        setFacultyDetail(null);
      }
    };

    if (facultyId) {
      fetchData();
    }
  }, [facultyId]);

  return (
    <div className="flex flex-col gap-4 p-2">
      {/* Top Info Block */}
      <div className="flex flex-col items-center sm:flex-row sm:items-center w-full gap-4 mb-5">
        <div className="w-[100px] flex-shrink-0">
          {photoSrc ? (
            <img
              src={photoSrc}
              alt={facultyName || 'Faculty'}
              className="w-full h-[115px] object-cover rounded-lg shadow"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-[115px] bg-gray-100 rounded-lg" />
          )}
        </div>

        {/* Name & Description */}
        <div className="text-center sm:text-left">
          {facultyName && (
            <div className="text-custom-red text-base sm:text-lg font-bold">
              {facultyName}
            </div>
          )}
          {facultyDetail?.fac_designation && (
            <div className="text-gray-700 text-sm sm:text-base font-medium">
              {facultyDetail.fac_designation}
            </div>
          )}
          <div className="text-gray-700 text-sm sm:text-base font-semibold mt-1">
            Faculty Experience History
          </div>
        </div>
      </div>

      {/* Experience List */}
      {experiences.length > 0 ? (
        experiences.map((exp) => (
          <div
            key={exp.expid}
            className="flex flex-col sm:flex-row w-full bg-white rounded-lg shadow-sm p-3 gap-2 items-start"
          >
            <div className="w-full sm:w-7/12 flex flex-col">
              <h3 className="text-custom-red text-base sm:text-lg font-semibold">
                {exp.fac_post}
              </h3>
              <p className="text-sm sm:text-base mt-1 text-gray-700">
                {exp.fac_institute}
              </p>
            </div>
            <div className="w-full sm:w-5/12 flex justify-start sm:justify-end mt-0">
              <h3 className="text-gray-700 text-sm sm:text-base font-semibold m-0">
                {formatDate(exp.fromdate)} – {formatDate(exp.todate)}
              </h3>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No experience records found.</p>
      )}
    </div>
  );
};

export default FiveComponent;
