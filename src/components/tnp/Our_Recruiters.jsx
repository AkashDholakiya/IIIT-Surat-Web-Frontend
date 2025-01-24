import React from "react";
// import Sidebar from "./Sidebar"; // Sidebar component for consistent navigation

const Our_Recruiters = () => {
  return (
    <div className="flex flex-col items-center px-5 w-full mt-0">
      {/* Page Header at the very top */}
      <div className="flex items-center w-full mb-5">
        <div className="w-[4px] h-[40px] bg-[#660000] mr-2"></div>
        <h1
          className="font-poppins text-[25px] text-[#660000] m-0 text-center"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
         Our Recruiters
        </h1>
      </div>
  
      <main className="w-full max-w-full">
        <div className="flex flex-col gap-5 max-md:flex-col w-full">
          {/* Main Section */}
          <section className="flex flex-col w-full px-5 md:w-[90%]">
            <div className="flex flex-col mt-5">
              {/* Description */}
              {/* <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1rem", // Responsive font size for the paragraph
                  color: "black",
                  marginBottom: "20px",
                  textAlign: "left", // Align description text to the left
                }}
              >
                Here is Our Recruters list
              </p> */}
  
              {/* Large Image */}
              <div className="flex justify-center w-full">
                <img
                  src={require("../../assets/images/Recruiters.png")} // Replace with the correct image path
                  alt="Our Achievers"
                  className="w-full max-w-[1200px] h-auto box-shadow-md"
                  style={{
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
  
};

export default Our_Recruiters;
