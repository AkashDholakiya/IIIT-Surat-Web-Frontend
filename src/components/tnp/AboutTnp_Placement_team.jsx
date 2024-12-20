import React, { useState } from "react";

const ProfileCard = ({ name, role, onClick }) => (
  <div
    className="flex flex-col items-center mt-5 max-md:mt-10 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    onClick={onClick}
  >
    <div className="flex justify-center items-center w-40 h-40 md:w-48 md:h-48 bg-sky-100 rounded-full overflow-hidden mb-4">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7eb9ddc827ea58edaabf7eb723b69b6736b1705f4fcb76c139ab8618c497def5?apiKey=7c5b01f694034c0fb3ba724488afa998&"
        alt={`Profile of ${name}`}
        className="w-full h-full object-cover rounded-full"
      />
    </div>
    <div className="mt-3 text-lg font-semibold text-center text-blue-500">
      <span>{name}</span>
      <br />
      <span className="text-sm">{role}</span>
    </div>
  </div>
);

function AboutTnpPlacementTeam() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProfile, setSelectedProfile] = useState(null);

  const profiles = [
    {
      name: "Sachin Sir",
      role: "Faculty In-charge, CSE",
      email: "sachin@iiitsurat.ac.in",
      phone: "+91 8400812891",
      category: "Faculty In-charge",
      details: "Sachin Sir has over 20 years of experience in computer science education. He specializes in machine learning and cloud computing, mentoring students for placements and career growth.",
    },
    {
      name: "Rajeev Sir",
      role: "Student Coordinator, CSE",
      email: "rajeev@iiitsurat.ac.in",
      phone: "+91 8400812892",
      category: "Student Coordinator(2022-23)",
      details: "Rajeev Sir actively coordinates placement activities, ensuring smooth communication between companies and students. He has a background in software engineering and data analysis.",
    },
    {
      name: "Aditya Kumar",
      role: "Member, CSE",
      email: "aditya@iiitsurat.ac.in",
      phone: "+91 8400812893",
      category: "Member(2023-24)",
      details: "Aditya Kumar is a dedicated team member contributing to organizing placement events. He is skilled in web development, machine learning, and data analytics.",
    },
    {
      name: "Anita Desai",
      role: "Student Coordinator, ECE",
      email: "anita@iiitsurat.ac.in",
      phone: "+91 8400812894",
      category: "Student Coordinator(2022-23)",
      details: "Anita Desai is a proactive coordinator, managing placement activities for the ECE department. She has expertise in embedded systems and IoT solutions.",
    },
    {
      name: "Suresh Gupta",
      role: "Faculty In-charge, ECE",
      email: "suresh@iiitsurat.ac.in",
      phone: "+91 8400812895",
      category: "Faculty In-charge",
      details: "Suresh Gupta has a vast teaching experience in electronics and communication. He is a mentor for innovative projects and industry collaborations.",
    },
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setSelectedProfile(null);
  };

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  const filteredProfiles = activeCategory === "All"
    ? profiles
    : profiles.filter((profile) => profile.category === activeCategory);

  return (
    <div className="flex flex-col z-10 items-center px-5 w-full max-md:px-4 mt-0">
      <main className="mt-16 w-full max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:w-full">
          <section className="flex flex-col w-full max-md:w-full max-md:ml-0">
            <div className="flex flex-col mt-5 max-md:mt-10">
              <div className="flex gap-3 items-center text-lg text-blue-500 mb-5 max-md:text-sm flex-wrap justify-center mx-auto">
                {["All", "Faculty In-charge", "Student Coordinator(2022-23)", "Member(2023-24)"].map((category) => (
                  <div
                    key={category}
                    className="flex items-center cursor-pointer mb-2 md:mb-0"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {activeCategory === category && (
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-1" />
                    )}
                    <span className={`${activeCategory === category ? "text-[#660000]" : ""}`}>
                      {category}
                    </span>
                  </div>
                ))}
              </div>

              {selectedProfile ? (
                <div className="flex flex-col md:flex-row items-center md:items-start p-5 border rounded-lg shadow-lg">
                  <div className="flex justify-center items-center w-40 h-40 md:w-48 md:h-48 bg-sky-100 rounded-full overflow-hidden mr-5">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7eb9ddc827ea58edaabf7eb723b69b6736b1705f4fcb76c139ab8618c497def5?apiKey=7c5b01f694034c0fb3ba724488afa998&"
                      alt={`Profile of ${selectedProfile.name}`}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-2xl font-bold text-blue-600">{selectedProfile.name}</h2>
                    <p className="text-lg mt-2">{selectedProfile.role}</p>
                    <p className="text-md text-gray-700 mt-1">Email: {selectedProfile.email}</p>
                    <p className="text-md text-gray-700 mt-1">Phone: {selectedProfile.phone}</p>
                    <p className="text-md text-gray-700 mt-4">{selectedProfile.details}</p>
                    <button
                      className="mt-5 text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
                      onClick={() => setSelectedProfile(null)}
                    >
                      Back to Profiles
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-10 grid grid-cols-4 gap-5 max-md:grid-cols-1 max-md:gap-10">
                  {filteredProfiles.map((profile, index) => (
                    <ProfileCard
                      key={index}
                      name={profile.name}
                      role={profile.role}
                      onClick={() => handleProfileClick(profile)}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AboutTnpPlacementTeam;
