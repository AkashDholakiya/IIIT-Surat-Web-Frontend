import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Sidebar component for consistent navigation

const PlacementGuidelines = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState("PrePlacementTalk");

  // Function to change the active section
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

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
                    width: "4px",
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
                  Placement Guidelines
                </h1>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "15px",
                  color: "#003366",
                  marginBottom: "20px",
                }}
              >
                Find all the important guidelines and tips to ensure a successful placement journey. Prepare well for interviews, tests, and the overall process with these helpful resources.
              </p>

              {/* Main Content */}
              <div className="flex gap-5 max-md:flex-col">
                {/* Left Navigation */}
                <div className="w-1/4 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col gap-3">
                    <button
                      className="py-2 px-4 text-sm font-semibold text-white bg-blue-800 rounded-lg"
                      onClick={() => handleSectionChange("PrePlacementTalk")}
                    >
                      Pre Placement Talk
                    </button>
                    <button
                      className="py-2 px-4 text-sm font-semibold text-white bg-blue-800 rounded-lg"
                      onClick={() => handleSectionChange("PlacementProcess")}
                    >
                      Placement Process
                    </button>
                    <button
                      className="py-2 px-4 text-sm font-semibold text-white bg-blue-800 rounded-lg"
                      onClick={() => handleSectionChange("PreparationTips")}
                    >
                      Preparation Tips
                    </button>
                  </div>
                </div>

                {/* Right Content */}
                <div className="w-3/4 max-md:w-full">
                  {/* Pre Placement Talk Section */}
                  {activeSection === "PrePlacementTalk" && (
                    <div>
                      <h2
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "20px",
                          color: "#003366",
                          marginBottom: "10px",
                        }}
                      >
                        Pre Placement Talk (PPT)
                      </h2>
                      <p
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "14px",
                          color: "#003366",
                          marginBottom: "20px",
                        }}
                      >
                        The Pre Placement Talk (PPT) is an essential step before the recruitment process begins. It is an opportunity for companies to present themselves to students, showcasing the organization's work culture, job roles, benefits, and career growth prospects. 
                        Here’s how to make the most out of it:
                      </p>
                      <ul
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "14px",
                          color: "#003366",
                        }}
                      >
                        <li>Make sure to attend the PPT for all companies you’re interested in.</li>
                        <li>Prepare a set of questions regarding the job role, company culture, and expectations.</li>
                        <li>Take notes during the talk for future reference.</li>
                        <li>Dress appropriately as some companies might invite short interactions post-PPT.</li>
                      </ul>
                    </div>
                  )}

                  {/* Placement Process Section */}
                  {activeSection === "PlacementProcess" && (
                    <div>
                      <h2
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "20px",
                          color: "#003366",
                          marginBottom: "10px",
                        }}
                      >
                        Placement Process
                      </h2>
                      <p
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "14px",
                          color: "#003366",
                          marginBottom: "20px",
                        }}
                      >
                        The placement process is typically composed of several stages. Here's an overview:
                      </p>
                      <ol
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "14px",
                          color: "#003366",
                        }}
                      >
                        <li><strong>Online Test:</strong> Expect quantitative reasoning, coding, and aptitude questions.</li>
                        <li><strong>Technical Interview:</strong> This round tests your technical skills and knowledge of core subjects.</li>
                        <li><strong>HR Interview:</strong> Focuses on your communication skills, strengths, weaknesses, and overall fit for the company.</li>
                        <li><strong>Offer/Final Interview:</strong> This is usually the last step, where the final offer is extended or further interviews are held.</li>
                      </ol>
                    </div>
                  )}

                  {/* Preparation Tips Section */}
                  {activeSection === "PreparationTips" && (
                    <div>
                      <h2
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "20px",
                          color: "#003366",
                          marginBottom: "10px",
                        }}
                      >
                        Preparation Tips for Placements
                      </h2>
                      <p
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "14px",
                          color: "#003366",
                          marginBottom: "20px",
                        }}
                      >
                        Here are some essential preparation tips to help you succeed:
                      </p>
                      <ul
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "14px",
                          color: "#003366",
                        }}
                      >
                        <li>Start preparing for aptitude, coding, and technical interviews well in advance.</li>
                        <li>Practice coding regularly on platforms like LeetCode, CodeForces, and HackerRank.</li>
                        <li>Brush up on Data Structures and Algorithms as they form the core of technical interviews.</li>
                        <li>Participate in mock interviews to simulate the actual experience and improve your confidence.</li>
                        <li>Review previous placement papers to get an understanding of the question patterns.</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PlacementGuidelines;
