import React from "react";
import Card8 from "../components/cards/Card_8";
import profile from "../assets/images/case.png";

const committeeName = "Website Development Team";

const boardMembers = [
  {
    name: "Aditya Kumar",
    post: "Frontend Developer",
    department: "CSE'26",
  },
  {
    name: "Ajay Mali",
    post: "Frontend Developer",
    department: "CSE'26",
  },
  {
    name: "Akash Dholakiya",
    post: "Frontend Developer",
    department: "CSE'26",
  },
  {
    name: "Dev Gupta",
    post: "Frontend Developer",
    department: "CSE'26",
  },
  {
    name: "Jugal Patel",
    post: "Frontend Developer",
    department: "CSE'26",
  },
  {
    name: "Nilesh Kumar",
    post: "Designer",
    department: "CSE'26",
  },
  {
    name: "Prateek Jaiswal",
    post: "Frontend Developer",
    department: "ECE'26",
  },
  {
    name: "Priyanshu Chaturvedi",
    post: "Frontend Developer",
    department: "ECE'26",
  },
  {
    name: "Samarth Gangrade",
    post: "Frontend Developer",
    department: "CSE'26",
  },
  {
    name: "Spaarsh Thakkar",
    post: "Backend Developer",
    department: "CSE'26",
  },
  {
    name: "Vedic Chawla",
    post: "Backend Developer",
    department: "CSE'26",
  },
];


const WebsiteTeam = () => {
  return (
    <div className="main">
      <div className="flex flex-col">
        <div className="w-full bar">
          <div className="text-center mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-[#003482]">
              {committeeName}
            </h1>
          </div>
        </div>
        <div className="">
          <div className="mx-2 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            {boardMembers.map((member, idx) => (
              <Card8
                key={idx}
                TempCard={{
                  name: member.name,
                  post: member.post,
                  college: member.department, 
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteTeam;
