import React, { useState, useEffect } from 'react';

const ResearchScholars = () => {
  const [scholars, setScholars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScholars = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/research_scholars/');
        if (!response.ok) throw new Error('Failed to fetch scholars');
        const data = await response.json();
        setScholars(data.filter(s => s.active === 1));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchScholars();
  }, []);

  const handleImgError = (e) => { e.target.src = '/assets/placeholder-profile.png'; };

  if (loading) return <p className="text-center">Loading research scholars...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-10 w-full">
      <main className="w-full max-w-screen-xl">
        <section className="flex flex-col w-full">
          <h1 className="text-3xl font-bold text-custom-red mb-10 text-center">
            Research Scholars
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-0">
            {scholars.map((scholar) => {
              const fullname = `${scholar.sch_initial} ${scholar.sch_fname} ${scholar.sch_mname || ''} ${scholar.sch_lname}`.replace(/\s+/g, ' ').trim();
              return (
                <div key={scholar.sch_id} className="flex flex-col items-center text-center">
                  <div className="w-36 h-36 sm:w-40 sm:h-40 bg-sky-100 rounded-full overflow-hidden group hover:scale-105 hover:shadow-md transition-transform duration-300 mb-3">
                    <img
                      src={`/assets/ResearchScholars/${scholar.sch_photo}`}
                      alt={`Profile of ${fullname}`}
                      onError={handleImgError}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-[#003482] text-base sm:text-lg font-semibold">{fullname}</div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ResearchScholars;
