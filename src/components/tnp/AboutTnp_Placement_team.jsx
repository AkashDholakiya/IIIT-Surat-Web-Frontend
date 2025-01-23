import React, { useState, useEffect } from 'react';

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

  // Filter profiles based on activeCategory
  const filteredProfiles = placementTeam.filter((member) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Faculty In-charge" && member.pteam_role === "f") return true;
    if (activeCategory === "Student Coordinator(2022-23)" && member.pteam_role === "s") return true;
    if (activeCategory === "Member(2023-24)" && member.pteam_role === "m") return true;
    return false;
  });

  return (
    <div className="flex flex-col z-10 items-center px-5 w-full max-md:px-4">
      <main className="w-full max-w-[1317px]">
        <div className="flex gap-5 max-md:flex-col max-md:w-full">
  
          {/* Main Section */}
          <section className="flex flex-col w-full max-md:w-full max-md:ml-0">
            <div className="flex flex-col mt-0 max-md:mt-0">
              {/* Category Selection */}
              <div className="flex gap-3 items-center text-lg text-[#003482] mb-5 max-md:text-sm">
                {["All", "Faculty In-charge", "Student Coordinator(2022-23)", "Member(2023-24)"].map((category) => (
                  <div
                    key={category}
                    className="flex items-center cursor-pointer"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {activeCategory === category && (
                      <div className="w-2 h-2 bg-[#660000] rounded-full mr-1" />
                    )}
                    <span className={`${activeCategory === category ? "text-[#660000]" : ""}`}>
                      {category}
                    </span>
                  </div>
                ))}
              </div>
  
              {/* Profile Cards */}
              <div className="mt-3 grid grid-cols-4 gap-8 max-md:grid-cols-2 gap-4 w-full max-sm:grid-cols-1">
                {filteredProfiles.map((member, index) => (
                  <ProfileCard
                    key={index}
                    pteam_name={member.pteam_name}
                    role={member.pteam_role}
                    email={member.pteam_email}
                    phone={member.pteam_mobile}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

const ProfileCard = ({ pteam_name, role, email, phone, imgSrc }) => (
  <div className="mr-4 flex flex-col items-center mt-8 max-md:mt-10 ml-2 w-full">
    {/* Profile Image */}
    <div className="relative flex justify-center items-center w-40 h-40 max-md:w-32 max-md:h-32 bg-sky-100 rounded-full overflow-hidden group hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out">
      <img
        loading="lazy"
        src={imgSrc || "https://cdn.builder.io/api/v1/image/assets/TEMP/7eb9ddc827ea58edaabf7eb723b69b6736b1705f4fcb76c139ab8618c497def5?apiKey=7c5b01f694034c0fb3ba724488afa998&"}
        alt={`Profile of ${pteam_name}`}
        className="w-full h-full object-cover rounded-full"
      />
    </div>

    {/* Profile Text */}
    <div className="mt-7 mr-5 text-lg font-semibold text-center text-[#003482] max-md:text-sm">
      <span>{pteam_name}</span>
      <br />
      <span className="mt-0 mr-15 text-sm text-black">{email}</span>
      <br />
      <span className="mt-0 mr-15 text-sm text-black">{phone}</span>
    </div>
  </div>
);

export default AboutTnpPlacementTeam;
