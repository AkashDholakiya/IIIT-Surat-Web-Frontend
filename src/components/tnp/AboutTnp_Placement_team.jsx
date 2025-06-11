import React, { useState, useEffect } from "react";

function AboutTnpPlacementTeam() {
  const [placementTeam, setPlacementTeam] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const fetchPlacementTeam = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/placementteam/");
      const data = await response.json();
      setPlacementTeam(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPlacementTeam();
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredProfiles = placementTeam.filter((member) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Faculty In-charge" && member.pteam_role === "f") return true;
    if (activeCategory === "Student Coordinator(2022-23)" && member.pteam_role === "s") return true;
    if (activeCategory === "Member(2023-24)" && member.pteam_role === "m") return true;
    return false;
  });

  return (
    <div className="flex flex-col z-10 items-center px-4 sm:px-6 lg:px-10 w-full">
      <main className="w-full max-w-screen-xl">
        <section className="flex flex-col w-full">
          {/* Category Selection */}
          <div className="flex flex-wrap gap-4 items-center text-base sm:text-lg text-[#003482] mb-6 justify-center">
            {["All", "Faculty In-charge", "Student Coordinator(2022-23)", "Member(2023-24)"].map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`flex items-center gap-2 cursor-pointer px-3 py-1 rounded-full border ${
                  activeCategory === category
                    ? "bg-[#660000] text-white"
                    : "border-[#003482] text-[#003482] hover:bg-[#003482]/10"
                } transition-colors duration-200 text-sm sm:text-base`}
              >
                {activeCategory === category && <div className="w-2 h-2 bg-white rounded-full" />}
                {category}
              </button>
            ))}
          </div>

          {/* Profile Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-0">
            {filteredProfiles.map((member, index) => (
              <ProfileCard
                key={index}
                pteam_name={member.pteam_name}
                role={member.pteam_role}
                email={member.pteam_email}
                phone={member.pteam_mobile}
                photoName={member.pteam_photo}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const ProfileCard = ({ pteam_name, role, email, phone, photoName }) => {
  let imgSrc;
  try {
    imgSrc = require(`../../assets/placement/${photoName}`);
  } catch {
    imgSrc = require("../../assets/placement/default.png");
  }

  return (
    <div className="flex flex-col items-center text-center">
      {/* Image */}
      <div className="w-36 h-36 sm:w-40 sm:h-40 bg-sky-100 rounded-full overflow-hidden group hover:scale-105 hover:shadow-md transition-transform duration-300">
        <img
          loading="lazy"
          src={imgSrc}
          alt={`Profile of ${pteam_name}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Info */}
      <div className="mt-5 text-[#003482]">
        <div className="text-base sm:text-lg font-semibold">{pteam_name}</div>
        <div className="text-sm sm:text-base text-black">{email}</div>
        <div className="text-sm sm:text-base text-black">{phone}</div>
      </div>
    </div>
  );
};

export default AboutTnpPlacementTeam;
