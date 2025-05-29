import React, { useState, useEffect } from "react";
import Info from "./utils/info";
import PlaylistView from "./Hostelchief";
import StudentCoordinator from "./StudentCoordinator";
import {backend_local} from "../../utils/helper.js";
export default function StudentC() {
  const [peoples, setPeoples] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${backend_local}/canteen/`);
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
    <div className="flex-col mt-6">
      <div>
        <Info title="Canteen and Mess Committee" email="xyz@gmail.com" />
        <PlaylistView cardsData={peoples} />
      </div>
      <StudentCoordinator title={"Student Coordinator"} cardsData={roles} />
    </div>
  );
}
