import React, { useEffect, useState } from 'react';
import { backend_local } from '../../utils/helper';

const semesterOrder = {
  'Curriculum': 0,
  'Semester 1': 1,
  'Semester 2': 2,
  'Semester 3': 3,
  'Semester 4': 4,
  'Semester 5': 5,
  'Semester 6': 6,
  'Semester 7': 7,
  'Semester 8': 8,
  'Semester 8: Project - BTP Guidelines': 9,
  'Elective Subjects': 10,
};

const SyllabusUGECE = () => {
  const [syllabusData, setSyllabusData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSyllabus = async () => {
      try {
        const res = await fetch(`${backend_local}/syllabus/`);
        if (!res.ok) throw new Error('Failed to fetch syllabus data');
        const data = await res.json();
        const filteredUGCSE = data.filter(
          item => item.branch === 'UGECE' && item.active === 1
        );
        setSyllabusData(filteredUGCSE);
      } catch (e) {
        setError(e.message || 'Error loading syllabus');
      } finally {
        setLoading(false);
      }
    };
    fetchSyllabus();
  }, []);

  if (loading)
    return <p className="p-6 text-center">Loading syllabus...</p>;
  if (error)
    return <p className="p-6 text-center text-red-600">Error: {error}</p>;
  if (syllabusData.length === 0)
    return <p className="p-6 text-center text-gray-700">No syllabus data found for UGECE.</p>;

  // Group syllabus by syltype (NEP/old)
  const grouped = syllabusData.reduce((acc, item) => {
    if (!acc[item.syltype]) acc[item.syltype] = [];
    acc[item.syltype].push(item);
    return acc;
  }, {});

  // Sort
  for (const key in grouped) {
    grouped[key].sort((a, b) =>
      (semesterOrder[a.semester] ?? 999) - (semesterOrder[b.semester] ?? 999)
    );
  }

  // Fixed asset path (root-relative)
  const getPdfPath = (syltype, filename) => `/ECE/${syltype}/${filename}`;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-custom-red">
        B.Tech Electronics & Communication Engineering – Syllabus
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* NEP */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b border-custom-red pb-2">
            2022 Batch Onwards (NEP)
          </h2>
          <ul className="space-y-3">
            {(grouped.NEP || []).map(({ sid, semester, syllfile }) => (
              <li key={sid}>
                <span className="font-semibold">{semester}</span>{' '}
                {syllfile ? (
                  <a
                    href={getPdfPath('NEP', syllfile)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-custom-red hover:underline ml-2"
                    download
                  >
                    [Download]
                  </a>
                ) : (
                  <span className="text-gray-500 ml-2 italic">No file</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Old */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b border-custom-red pb-2">
            2018–2022 Batch (Old)
          </h2>
          <ul className="space-y-3">
            {(grouped.old || []).map(({ sid, semester, syllfile }) => (
              <li key={sid}>
                <span className="font-semibold">{semester}</span>{' '}
                {syllfile ? (
                  <a
                    href={getPdfPath('old', syllfile)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-custom-red hover:underline ml-2"
                    download
                  >
                    [Download]
                  </a>
                ) : (
                  <span className="text-gray-500 ml-2 italic">No file</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SyllabusUGECE;
