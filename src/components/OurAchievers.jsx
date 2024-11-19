import React from "react";
import Sidebar from "./Sidebar"; // Sidebar component for consistent navigation

const OurAchievers = () => {
  return (
    <div className="flex flex-col z-10 items-center px-5 w-full max-md:px-4 mt-0">
      <main className="mt-16 w-full max-w-[1317px]">
        <div className="flex gap-5 max-md:flex-col max-md:w-full">
          <Sidebar /> {/* Sidebar for navigation */}

          {/* Main Section */}
          <section className="flex flex-col w-[74%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col mt-5 max-md:mt-10">
              {/* Page Header */}
              <div className="flex items-center mb-5">
                <div
                  style={{
                    width: "10px",
                    height: "40px",
                    backgroundColor: "#660000",
                    marginRight: "10px",
                  }}
                ></div>
                <h1
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "25px",
                    color: "#660000",
                    margin: "0",
                  }}
                >
                  Our Achievers
                </h1>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "15px",
                  color: "#660000",
                  marginBottom: "20px",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores.
              </p>

              {/* Large Image */}
              <img
                src={require("../assets/images/achievers-big-image.png")} // Replace with the correct image path
                alt="Our Achievers"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "1200px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                }}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default OurAchievers;
