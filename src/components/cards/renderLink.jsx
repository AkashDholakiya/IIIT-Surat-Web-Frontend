import React, { useState } from "react";
import RenderLinkComponent from "./renderlinkcomponent";

const TitleBar = ({
  setParentContent,
  setChildContent,
  parentContent,
  showChildDropdown = false, // New prop to toggle child dropdown
}) => {
  const [childContent, setchildContent] = useState("");

  const [isParentDropdownOpen, setParentDropdownOpen] = useState(false);
  const [isChildDropdownOpen, setChildDropdownOpen] = useState(false);

  const childLinksMap = {
    Sports: ["Saras", "Abstract", "Swrang"],
    Cultural: ["Malhar", "Groove", "Antra"],
    Technical: ["Cineworks", "Exposure", "Management"],
    Entrepreneur: ["Business Plan", "StartUp Fest", "Networking"],
  };

  const toggleParentDropdown = () => {
    setParentDropdownOpen(!isParentDropdownOpen);
  };

  const toggleChildDropdown = () => {
    setChildDropdownOpen(!isChildDropdownOpen);
  };

  return (
    <div>
      {/* Parent and Child Links for Small Screens */}
      <div className="sm:hidden w-5/6 bg-navColor flex flex-row justify-between items-center my-2 mx-auto px-4 text-sm space-x-2">
        {/* Parent Dropdown */}
        <div className="relative flex-1">
          <button
            className="w-full px-4 py-2 border border-blue-500 rounded-md bg-white text-blue-600 font-medium flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
            onClick={toggleParentDropdown}
          >
            <span>{parentContent || "Clubs"}</span>
          </button>
          {isParentDropdownOpen && (
            <div className="absolute left-0 w-full bg-white border border-gray-300 rounded mt-1 z-10">
              {Object.keys(childLinksMap).map((parent) => (
                <RenderLinkComponent
                  key={parent}
                  text={`${parent}_Club`}
                  contentToSet={parent}
                  setContent={(content) => {
                    setParentContent(content); // Update parent content
                    setChildContent(""); // Reset child content
                    setParentDropdownOpen(false); // Close dropdown
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Child Dropdown (conditionally rendered) */}
        {parentContent && showChildDropdown && (
          <div className="relative flex-1">
            <button
              className="w-full px-4 py-2 border border-blue-500 rounded-md bg-white text-blue-600 font-medium flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
              onClick={toggleChildDropdown}
            >
              <span>{childContent || "Internal Clubs"}</span>
            </button>
            {isChildDropdownOpen && (
              <div className="absolute left-0 w-full bg-white border border-gray-300 rounded mt-1 z-10">
                {childLinksMap[parentContent]?.map((child) => (
                  <RenderLinkComponent
                    key={child}
                    text={child}
                    contentToSet={child}
                    setContent={(content) => {
                      setchildContent(content);
                      setChildContent(content);
                      setChildDropdownOpen(false); // Close dropdown
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Parent and Child Links for Large Screens */}
      <div className="hidden sm:flex w-5/6 bg-navColor items-center my-2 mx-auto px-4 space-x-6">
        {/* Parent Links */}
        {Object.keys(childLinksMap).map((parent, index, arr) => (
          <React.Fragment key={parent}>
            <RenderLinkComponent
              text={`${parent}_Club`}
              contentToSet={parent}
              setContent={(content) => {
                setParentContent(content);
                setchildContent("");
                setChildContent("");
              }}
            />
            {index < arr.length - 1 && <span className="text-black">|</span>}
          </React.Fragment>
        ))}
      </div>
      {parentContent && showChildDropdown && (
        <div className="hidden sm:flex w-5/6 bg-navColor items-center my-2 mx-auto px-4 space-x-6">
          {/* Child Links */}
          {childLinksMap[parentContent]?.map((child, index, arr) => (
            <React.Fragment key={child}>
              <RenderLinkComponent
                text={child}
                contentToSet={child}
                setContent={setChildContent}
              />
              {index < arr.length - 1 && <span className="text-black">|</span>}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default TitleBar;
