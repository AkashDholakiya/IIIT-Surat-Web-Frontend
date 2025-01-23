import PlaylistView from "../components/cards/cards";
import FinalDiv from "../components/cards/coordinatorCard";

import React from 'react';
import data from "./data";

const SarasComponent = ({ childContent, parentContent }) => {
  console.log(data.roles);
  const {roles,peoples}=data;
  console.log(parentContent);
  // Adjust renderContent to use the correct prop (childContent)
  const renderContent = () => {
    if (parentContent === 'sports') {
      return roles;
    } else if (parentContent === 'Cultural') {
      return peoples;
    } else {
      return peoples; // Default return
    }
  };
  const dynamicData = childContent 
    ? data[childContent] ||[]
    : data[parentContent] || [];
  return (
    <div className="flex flex-col w-full  overflow-y">
      <div className="h-3/6 lg:w-5/6 md:w-11/12 sm:w-96 mx-auto">
        <PlaylistView cardsData={dynamicData} />
      </div>

      {/* Ensure you pass the correct props */}
      
      <FinalDiv
        title="Coordinator"  // Simplified string for title
        cardsData={data.roles}
      />

      <FinalDiv
        title="Members"      // Simplified string for title
        cardsData={data.roles}  // Ensuring peoples is passed correctly
      />
    </div>
  );
};

export default SarasComponent;
