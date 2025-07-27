import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backend_local } from '../../utils/helper';

const API_URL = `${backend_local}/depthomedesc/`;
const TARGET_DEPT_ID = "UGCSE";

const AboutCse = () => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        const dept = response.data.find(item => item.dept_id === TARGET_DEPT_ID);
        if (dept) {
          setDescription(dept.dept_dscr);
        } else {
          setError("Department not found.");
        }
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to fetch department data.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  return (
    <div className="flex flex-col p-6 overflow-y-auto max-w-full">
      <div className="flex flex-col text-xl text-[#660000]">
        <div className="flex items-center gap-5 font-semibold">
          <div className="flex-shrink">About Department</div>
          <div className="flex-grow border-t border-[#660000] border-bold" />
        </div>
        
        <div className="mt-9 text-lg text-justify text-[#474747]">
          {/* Render HTML from backend */}
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        
        <div className="mt-8 font-semibold">Dr. Sachin D Patil</div>
        <div className="text-base font-medium text-neutral-500">
          HOD Computer Science and Engineering Department
        </div>
      </div>
    </div>
  );
}

export default AboutCse;
