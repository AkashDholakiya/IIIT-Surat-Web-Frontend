import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backend_local } from '../../utils/helper';

// Helper to convert month number to month name
const monthNames = [
  '',       // index 0 placeholder
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

// Format date from month and year
const formatDate = (year, month) => {
  const y = parseInt(year);
  const m = parseInt(month);
  if ((!y || y === 0) && (!m || m === 0)) return 'N/A';
  if (!m || m === 0) return `${y}`;
  if (!y || y === 0) return monthNames[m] || 'N/A';
  return `${monthNames[m] || ''} ${y}`;
};

const SevenComponent = ({ facultyId, facultyName }) => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get(`${backend_local}/fother/`);
        // Filter by facultyId and active status
        const filtered = response.data.filter(
          (item) => item.fac_id === facultyId && item.active === 1
        );

        // Optional: sort by year (desc) then month (desc)
        filtered.sort((a, b) => {
          const yearA = parseInt(a.year) || 0;
          const yearB = parseInt(b.year) || 0;
          if (yearA !== yearB) return yearB - yearA;
          const monthA = a.month || 0;
          const monthB = b.month || 0;
          return monthB - monthA;
        });

        setRecords(filtered);
      } catch (err) {
        console.error('Error fetching achievements:', err);
        setError('Failed to fetch achievements.');
      } finally {
        setLoading(false);
      }
    };

    if (facultyId) {
      fetchRecords();
    } else {
      setLoading(false);
      setRecords([]);
    }
  }, [facultyId]);

  if (loading) {
    return <div className="p-4 text-center text-gray-600">Loading achievements...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-600">{error}</div>;
  }

  if (records.length === 0) {
    return (
      <div className="p-4 text-center text-gray-600">
        No achievements found{facultyName ? ` for ${facultyName}` : ''}.
      </div>
    );
  }

  return (
    <div className="p-4 max-w-5xl mx-auto bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-custom-red">
        Achievements{facultyName ? ` for ${facultyName}` : ''}
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-gray-700 font-semibold">
              <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Detail</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Date</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 align-top whitespace-normal max-w-xs">
                  {record.type || 'N/A'}
                </td>
                <td className="border border-gray-300 px-4 py-2 align-top whitespace-normal max-w-2xl">
                  {record.detail || 'N/A'}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center align-top">
                  {formatDate(record.year, record.month)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SevenComponent;
