import React, { useState, useEffect } from "react";
import StudentCoordinator from "../components/hostelLife/StudentCoordinator";
import PlaylistView from "../components/hostelLife/Hostelchief";
import {url} from "../utils/helper.js"

export default function HostelCommitee() {
  const [peoples, setPeoples] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/hostel/`);
        //console.log("Response status:", response.status);
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        //console.log("Fetched data:", data); // Log the actual data

        const faculty = data.filter((person) => person.is_faculty);
        const students = data.filter((person) => !person.is_faculty);
        console.log(faculty);
        console.log(students);

        setPeoples(faculty);
        setRoles(students);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-10 w-full">
      <div className="flex gap-10">
        <PlaylistView cardsData={peoples} />
      </div>
      <StudentCoordinator title={"Student Coordinator"} cardsData={roles} />
    </div>
  );
}
