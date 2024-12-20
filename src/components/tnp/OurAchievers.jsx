import React from "react";
// import Sidebar from "./Sidebar"; // Sidebar component for consistent navigation

const OurAchievers = () => {
  return (
    <div className="flex flex-col items-center px-5 w-full mt-0">
      <main className="mt-16 w-full max-w-full">
        <div className="flex flex-col gap-5 max-md:flex-col w-full">
          {/* <Sidebar /> Sidebar for navigation */}

          {/* Main Section */}
          <section className="flex flex-col w-full px-5 md:w-[90%]">
            <div className="flex flex-col mt-5">
              {/* Page Header */}
              <div className="flex items-center mb-5">
                <div
                  style={{
                    width: "4px",
                    height: "40px",
                    backgroundColor: "#660000",
                    marginRight: "10px",
                  }}
                ></div>
                <h1
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "25px", // Responsive font size for the header
                    color: "#660000",
                    margin: "0",
                  }}
                  className="text-center"
                >
                  Our Achievers
                </h1>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1rem", // Responsive font size for the paragraph
                  color: "#660000",
                  marginBottom: "20px",
                  textAlign: "left", // Center the description text
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores.
              </p>

              {/* Large Image */}
              <div className="flex justify-center w-full">
                <img
                  src={require("../../assets/images/achievers-big-image.png")} // Replace with the correct image path
                  alt="Our Achievers"
                  className="w-full max-w-[1200px] h-auto box-shadow-md" // Ensures the image is full width but respects max width
                  style={{
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0)",
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

export default OurAchievers;
