import React, { useEffect, useState } from 'react';
import { backend_local } from '../../utils/helper';


// Utility: safely render HTML, keeping <br> formatting
function renderHTML(html) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

const ASHLab = () => {
  const [labs, setLabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLabs = async () => {
      try {
        const response = await fetch(`${backend_local}/laboratory/`);
        if (!response.ok) throw new Error('Failed to fetch labs');
        const data = await response.json();
        const filtered = data.filter(
          lab => lab.dept_id === 'UGES' && lab.active === 1
        );
        setLabs(filtered);
      } catch (err) {
        setError(err.message || 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };
    fetchLabs();
  }, []);

  const getLabImage = (imageName) => {
    try {
      return require(`../../assets/Laboratory/${imageName}`);
    } catch {
      return null;
    }
  };

  if (loading) return <p className="p-4 text-center">Loading laboratories...</p>;
  if (error) return <p className="p-4 text-center text-red-600">Error: {error}</p>;
  if (!labs.length)
    return <p className="p-4 text-center text-gray-600">No labs found for this department.</p>;

  return (
    <div className="w-full max-w-5xl mx-auto py-6 px-4">
      <h1 className="text-3xl font-bold text-custom-red mb-10 text-center">
        Applied Sciences & Humanities Laboratories
      </h1>
      <div className="grid gap-10 md:grid-cols-2">
        {labs.map(lab => (
          <div
            key={lab.lab_id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-2xl"
          >
            {lab.lab_image && getLabImage(lab.lab_image) ? (
              <img
                src={getLabImage(lab.lab_image)}
                alt={lab.lab_name}
                className="w-full h-72 object-cover"
              />
            ) : (
              <div className="w-full h-72 bg-gray-200 flex items-center justify-center text-gray-400 text-lg font-semibold">
                No Image
              </div>
            )}
            <div className="p-8 flex-1 flex flex-col">
              <h2 className="text-2xl font-semibold text-[#003482] mb-4">{lab.lab_name}</h2>
              <div className="text-gray-800 text-base leading-relaxed">
                {renderHTML(lab.lab_desc)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ASHLab;
