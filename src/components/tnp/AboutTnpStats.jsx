import React from 'react';
// import Sidebar from './Sidebar'; // Import the existing Sidebar component
import stats1 from "../../assets/images/stats1.png";
import stats2 from "../../assets/images/stats2.png";
import stats3 from "../../assets/images/stats3.png";
import stats4 from "../../assets/images/stats4.png";
import stats5 from "../../assets/images/stats5.png";
import stats6 from "../../assets/images/stats6.png";
import stats7 from "../../assets/images/stats7.png";
import stats8 from "../../assets/images/stats8.png";


function AboutTnpStats() {
  const chartImages = [stats1, stats2, stats3, stats4, stats5, stats6, stats7, stats8];

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
            <div className="flex flex-col mt-1 max-md:mt-10">
              {/* Description */}
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "15px",
                  color: "black", // Blue description text color
                  marginBottom: "10px",
                }}
              >
                Here are some important placement statistics that reflect the placement trends and success rates over the years.
              </p>

              {/* First set of Chart Images */}
              <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 sm:grid-cols-2 justify-center mx-auto w-full">
                {chartImages.slice(0, 6).map((src, index) => (
                  <div key={index} className="flex justify-center items-center">
                    <img
                      src={src}
                      alt={`Chart ${index + 1}`}
                      className="w-full h-auto max-w-[300px] rounded-lg shadow-0"
                    />
                  </div>
                ))}
              </div>

              {/* New Title: Placement Statistics A.Y. 2022-23 */}
              <div className="flex items-center mb-5 w-full mt-10">
                <div className="w-[4px] h-[40px] bg-[#660000] mr-2"></div>
                <h2 className="font-poppins text-[22px] text-[#660000] m-0">
                  Placement Statistics A.Y. 2022-23
                </h2>
              </div>

              {/* Second set of Chart Images */}
              <div className="justify-center  w-full">
                {chartImages.slice(6).map((src, index) => (
                  <div key={index} className="flex justify-center items-center">
                    <img
                      src={src}
                      alt={`Chart ${index + 6}`} // Adjusted index for the second set of images
                      className="w-full h-auto  rounded-lg shadow-0"
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

export default AboutTnpStats;
