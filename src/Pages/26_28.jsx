import head from "../assets/images/example.png";
import NavBar from "../components/cards/sidenav";
import React, { useState } from "react";
import TitleBar from "../components/cards/renderLink";
import Group from "../containers/23_temp";
import SarasComponent from "../containers/24_temp";
import Events from "../containers/28_temp";


const Slide1 = () => {
  // State variables for parent and child content
  const [parentContent, setParentContent] = useState(""); // Tracks the parent content (e.g., Sports, Cultural)
  const [childContent, setChildContent] = useState(""); // Tracks the child content (e.g., Saras, Abstract)

  // State variable for active tab
  const [activeContent, setActiveContent] = useState("about");

  // Renders the appropriate component based on `activeContent`
  const renderComponent = () => {
    switch (activeContent) {
      case "lead":
        return <SarasComponent childContent={childContent } parentContent={parentContent}/>;
      case "about":
        return <Group childContent={childContent } parentContent={parentContent} />;
      case "events":
        return <Events />;
      default:
        return null;
    }
  };

  // Renders the image section for the "about" tab
  const renderImage = () => (
    <div className="flex justify-center items-center h-full">
      <div className="bg-lightBlue rounded-lg shadow-lg overflow-hidden flex w-5/6 h-full">
        <div className="px-10 py-2 flex flex-col justify-center items-center space-y-4 bg-gradient-to-r from-lightBlue via-transparent to-transparent w-4/6">
          <div className="w-5/6">
            <h2 className="text-blue-800 font-bold text-base md:text-xl font-poppins">
              Student Artistic Recreational Activities Society
            </h2>
            <p className="text-gray-700 text-xs md:text-sm lg:text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus obcaecati magni voluptates nihil iure quaerat.
            </p>
            <button className="bg-[#003482] text-white px-5 py-0.5 my-2 text-base rounded-full">
              Saras Brochure
            </button>
          </div>
        </div>
        <div
          className="w-2/6 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(244, 248, 254, 1), rgba(244, 248, 254, 0)), url(${head})`,
            width: "40%",
            backgroundPosition: "right center",
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="h-full w-full flex flex-col items-center justify-end overflow-auto my-16">
      {/* Placeholder for the top section */}
      <div className="h-2/6 w-full flex flex-row justify-between">{/* Add content */}</div>

      {/* Main content section */}
      <div className="h-4/6 w-full flex flex-col">
        {/* TitleBar component with parent and child content setters */}
        <TitleBar
          setParentContent={setParentContent}
          setChildContent={setChildContent}
          parentContent={parentContent}
        />

        {/* Conditional rendering of the image section */}
        {activeContent === "about" && (
          <div className="w-full h-2/6 object-cover mt-10">{renderImage()}</div>
        )}

        {/* Main content container */}
        <div className="flex flex-row h-full w-full mt-8">
          {/* Navigation bar */}
          <NavBar
            setContent={setActiveContent} // Passes the state setter for active tab
            activeContent={activeContent} // Current active tab
            content={parentContent || childContent} // Current content
          />
          <div className="h-full lg:w-5/6 sm:w-full md:w-11/12">
            <div className="h-full w-full">{renderComponent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
