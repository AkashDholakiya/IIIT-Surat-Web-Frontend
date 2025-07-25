import React, { useEffect, useState } from "react";
import Card8 from "../../components/cards/Card_8";
import profile from "../../assets/images/case.png";

const committeeName = "Finance Committee";

const Finance = () => {
  const [boardMembers, setBoardMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/authorities/")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        const bogMembers = data
          .filter(
            (member) =>
              member.group_type === "finance" &&
              member.active === 1
          )
          .map((member) => ({
            name: member.member_name,
            post: member.m_designation || "",
            college: member.m_institute + (member.m_address ? `, ${member.m_address}` : ""),
            role: member.m_post,
          }));
        setBoardMembers(bogMembers);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="main m-6">
      <div className="flex flex-col">
        <div className="w-full mt-8 bar">
          <div className="text-center mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-[#003482]">{committeeName}</h1>
          </div>
        </div>
        <div className="">
          <div className="mx-2 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            {boardMembers.map((member, idx) => (
              <Card8 key={idx} TempCard={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
