import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Import the existing Sidebar component

const ProfileCard = ({ name, role, email, phone }) => (
  <div className="flex flex-col items-center mt-5 max-md:mt-10">
    <div className="flex justify-center items-center w-40 h-40 md:w-48 md:h-48 bg-sky-100 rounded-full overflow-hidden">
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
      <br />
      <span className="text-sm">{email}</span>
      <br />
      <span className="text-sm">{phone}</span>
    </div>
  </div>
);

function AboutTnpPlacementTeam() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Array of profiles with categories
  const profiles = [
    { name: "Pardeep Kumar Roy", role: "Faculty In-charge, CSE", email: "ui21cs29@iiitsurat.ac.in", phone: "+91 8400812891", category: "Faculty In-charge" },
    { name: "Rajeev Sharma", role: "Student Coordinator, CSE", email: "ui21cs30@iiitsurat.ac.in", phone: "+91 8400812892", category: "Student Coordinator(2022-23)" },
    { name: "Amit Singh", role: "Member, CSE", email: "ui21cs31@iiitsurat.ac.in", phone: "+91 8400812893", category: "Member(2023-24)" },
    { name: "Anita Desai", role: "Student Coordinator, ECE", email: "ui22ec10@iiitsurat.ac.in", phone: "+91 8400812894", category: "Student Coordinator(2022-23)" },
    { name: "Suresh Gupta", role: "Faculty In-charge, ECE", email: "ui22ec11@iiitsurat.ac.in", phone: "+91 8400812895", category: "Faculty In-charge" },
    // Add more profiles as needed
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  // Filter profiles based on the selected category
  const filteredProfiles = activeCategory === "All" ? profiles : profiles.filter(profile => profile.category === activeCategory);

  return (
    <div className="flex flex-col z-10 items-center px-5 w-full max-md:px-4 mt-0">
      <main className="mt-16 w-full max-w-[1317px]">
        <div className="flex gap-5 max-md:flex-col max-md:w-full">
          <Sidebar />

          {/* Main Section */}
          <section className="flex flex-col w-[74%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col mt-5 max-md:mt-10">
              {/* Category Selection */}
              <div className="flex gap-3 items-center text-lg text-blue-500 mb-5 max-md:text-sm">
                {["All", "Faculty In-charge", "Student Coordinator(2022-23)", "Member(2023-24)"].map((category) => (
                  <div
                    key={category}
                    className="flex items-center cursor-pointer"
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

              {/* Profile Cards */}
              <div className="mt-10 grid grid-cols-4 gap-5 max-md:grid-cols-1 max-md:gap-10">
                {filteredProfiles.map((profile, index) => (
                  <ProfileCard key={index} {...profile} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AboutTnpPlacementTeam;
