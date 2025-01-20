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
    <div className="flex flex-col z-10 items-center px-5 w-full max-md:px-4 mt-0">
      <main className="mt-16 w-full max-w-[1317px]">
        <div className="flex gap-5 max-md:flex-col max-md:w-full">

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
                {filteredProfiles.map((member, index) => (
                  <ProfileCard
                    key={index}
                    pteam_name={member.pteam_name}
                    role={member.pteam_role}
                   // email={member.pteam_email}
                 //   phone={member.pteam_mobile}
                    // Uncomment and replace with unique image URLs if available
                    // imgSrc={`http://127.0.0.1:8000/media/${member.pteam_photo}`}
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
  <div className="flex flex-col items-center mt-5 max-md:mt-10">
    <div className="flex justify-center items-center w-32 h-32 max-md:w-24 max-md:h-24 bg-sky-100 rounded-full">
      <img
        loading="lazy"
        // Replace with unique image source if available
        src={imgSrc || "https://cdn.builder.io/api/v1/image/assets/TEMP/7eb9ddc827ea58edaabf7eb723b69b6736b1705f4fcb76c139ab8618c497def5?apiKey=7c5b01f694034c0fb3ba724488afa998&"}
        alt={`Profile of ${pteam_name}`}
        className="w-full h-full object-cover rounded-full"
      />
    </div>
    <div className="mt-3 text-lg font-semibold text-center text-blue-500">
      <span>{pteam_name}</span>
      <br />
      <span className="text-sm">{email}</span>
      <br />
      <span className="text-sm">{phone}</span>
    </div>
  </div>
);

export default AboutTnpPlacementTeam;
