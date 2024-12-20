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
      <main className="mt-16 w-full">
        <div className="flex gap-5 flex-col max-md:flex-col w-full">

          {/* Main Section */}
          <section className="flex flex-col w-full md:w-[90%] max-md:w-full">
            <div className="flex flex-col mt-5 max-md:mt-10">
              {/* Page Header */}
              <div className="flex items-center mb-5">
                <div
                  style={{
                    width: "4px",
                    height: "40px",
                    backgroundColor: "#660000", // Red border for header
                    marginRight: "10px",
                  }}
                ></div>
                <h1
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "25px",
                    color: "#660000", // Red header color
                    margin: "0",
                  }}
                >
                  Placement Statistics
                </h1>
              </div>

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
                      alt={`Chart ${index + 1}`}  // Fixed the alt text here
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
