import React from 'react';
import Sidebar from './Sidebar'; // Import the existing Sidebar component
import stats1 from "../assets/images/stats1.png";
import stats2 from "../assets/images/stats2.png";
import stats3 from "../assets/images/stats3.png";
import stats4 from "../assets/images/stats4.png";
import stats5 from "../assets/images/stats5.png";
import stats6 from "../assets/images/stats6.png";

function AboutTnp_stats() {
  // Sample chart image URLs (replace these with actual URLs)
  const chartImages = [stats1, stats2, stats3, stats4, stats5, stats6];

  return (
    <div className="flex flex-col z-10 items-center px-5 w-full max-md:px-4 mt-0">
      <main className="mt-16 w-full max-w-[1317px]">
        <div className="flex gap-5 max-md:flex-col max-md:w-full">
          <Sidebar />

          {/* Main Section */}
          <section className="flex flex-col w-[74%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col mt-5 max-md:mt-10">
              <h1 className="text-4xl font-bold text-center text-blue-500 mb-5 max-md:text-2xl">
                Placement Statistics
              </h1>

              {/* Chart Images */}
              <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 sm:grid-cols-2">
                {chartImages.map((src, index) => (
                  <div key={index} className="flex justify-center">
                    <img
                      src={src}
                      alt={`Chart ${index + 1}`}
                      className="w-full h-auto max-w-[300px] rounded-lg shadow-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AboutTnp_stats;
