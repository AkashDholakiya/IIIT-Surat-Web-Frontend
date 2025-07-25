import React, { useEffect, useState } from 'react';
import axios from 'axios';

const pubTypeMap = {
  IJ: 'Journal',
  IC: 'Conference',
};

const SixComponent = ({ facultyId, facultyName }) => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/publication/');
        let filtered = response.data.filter(
          item => item.fac_id === facultyId && item.active === 1
        );
        filtered.sort((a, b) => {
          const yA = parseInt(a.pub_year) || 0;
          const yB = parseInt(b.pub_year) || 0;
          if (yA !== yB) return yB - yA;
          const mA = parseInt(a.pub_month) || 0;
          const mB = parseInt(b.pub_month) || 0;
          return mB - mA;
        });
        setPublications(filtered);
      } catch {
        setError('Failed to fetch publications.');
      } finally {
        setLoading(false);
      }
    };

    if (facultyId) fetchPublications();
    else {
      setLoading(false);
      setPublications([]);
    }
  }, [facultyId]);

  if (loading) return <div className="p-4 text-center">Loading publications...</div>;
  if (error) return <div className="p-4 text-center text-red-600">{error}</div>;
  if (publications.length === 0)
    return <div className="p-4 text-center text-gray-600">No publications found{facultyName ? ` for ${facultyName}` : ''}.</div>;

  return (
    <div className="p-4 max-w-7xl mx-auto bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-custom-red">
        Research Publications{facultyName ? ` for ${facultyName}` : ''}
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-100 text-gray-700 font-semibold">
              <th className="border border-gray-300 px-3 py-2">Type</th>
              <th className="border border-gray-300 px-3 py-2">Title</th>
              <th className="border border-gray-300 px-3 py-2">Authors</th>
              <th className="border border-gray-300 px-3 py-2">Journal/Conference</th>
              <th className="border border-gray-300 px-3 py-2">Publisher</th>
              <th className="border border-gray-300 px-3 py-2">ISSN</th>
              <th className="border border-gray-300 px-3 py-2">Vol.</th>
              <th className="border border-gray-300 px-3 py-2">Issue</th>
              <th className="border border-gray-300 px-3 py-2">Page</th>
              <th className="border border-gray-300 px-3 py-2">Year</th>
              <th className="border border-gray-300 px-3 py-2">Month</th>
            </tr>
          </thead>
          <tbody>
            {publications.map(pub => (
              <tr key={pub.pub_id} className="hover:bg-gray-50 align-top">
                <td className="border border-gray-300 px-3 py-2">{pubTypeMap[pub.pub_type] || pub.pub_type}</td>
                <td className="border border-gray-300 px-3 py-2">{pub.pub_title || '-'}</td>
                <td className="border border-gray-300 px-3 py-2">{pub.pub_author || '-'}</td>
                <td className="border border-gray-300 px-3 py-2">{pub.pub_jour_conf || '-'}</td>
                <td className="border border-gray-300 px-3 py-2">{pub.pub_publisher || '-'}</td>
                <td className="border border-gray-300 px-3 py-2">{pub.pub_issn || '-'}</td>
                <td className="border border-gray-300 px-3 py-2 text-center">{pub.pub_vol || '-'}</td>
                <td className="border border-gray-300 px-3 py-2 text-center">{pub.pub_issue || '-'}</td>
                <td className="border border-gray-300 px-3 py-2 text-center">{pub.pub_page || '-'}</td>
                <td className="border border-gray-300 px-3 py-2 text-center">{pub.pub_year || '-'}</td>
                <td className="border border-gray-300 px-3 py-2 text-center">{(pub.pub_month && pub.pub_month !== 0) ? pub.pub_month : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SixComponent;
