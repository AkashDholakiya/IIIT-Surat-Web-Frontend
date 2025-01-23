import React from 'react';
// import Sidebar from './Sidebar'; // Import the existing Sidebar component
import stats1 from "../../assets/images/stats1.png";
import stats2 from "../../assets/images/stats2.png";
import stats3 from "../../assets/images/stats3.png";
import stats4 from "../../assets/images/stats4.png";
import stats5 from "../../assets/images/stats5.png";
import stats6 from "../../assets/images/stats6.png";

//IIIT-Surat-Web-Frontend\src\assets\images\stats1.png
function AboutTnpStats() {  // Changed to PascalCase here
  // Sample chart image URLs (replace these with actual URLs)
  const chartImages = [stats1, stats2, stats3, stats4, stats5, stats6];

  return (
    <div className="flex flex-col items-center px-5 w-full mt-0">
      <main className="w-full">
        {/* Page Header */}
        <div className="flex items-center mb-5 w-full mt-0">
          <div className="w-[4px] h-[40px] bg-[#660000] mr-2"></div>
          <h1 className="font-poppins text-[25px] text-[#660000] m-0">
            Placement Statistics
          </h1>
        </div>
  
        <div className="flex gap-5 flex-col max-md:flex-col w-full">
          {/* Main Section */}
          <section className="flex flex-col w-full md:w-[90%] max-md:w-full">
            <div className="flex flex-col mt-5 max-md:mt-10">
              {/* Description */}
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "15px",
                  color: "#003366", // Blue description text color
                  marginBottom: "20px",
                }}
              >
                Here are some important placement statistics that reflect the placement trends and success rates over the years.
              </p>
  
              {/* Chart Images */}
              <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 sm:grid-cols-2 justify-center mx-auto w-full">
                {chartImages.map((src, index) => (
                  <div key={index} className="flex justify-center items-center">
                    <img
                      src={src}
                      alt={`Chart ${index + 1}`} // Fixed the alt text here
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

export default AboutTnpStats;  // Export in PascalCase
