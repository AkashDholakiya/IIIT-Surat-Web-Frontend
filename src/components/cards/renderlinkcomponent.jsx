import React from "react";

const RenderLinkComponent = ({ text, contentToSet, setContent }) => {
  const handleClick = () => {
    setContent(contentToSet); // Update the state when the button is clicked
  };

  return (
    <div className="{` rounded text-xs/[5px] sm:text-xs md:text-base focus:ring-1 `}">
    <button
      onClick={handleClick}
      className="{`mr-1 ml-1 px-2 py-1 rounded text-xs/[5px] sm:text-xs md:text-base focus:ring-1 hover:bg-blue-800 hover:text-white focus:ring-blue-800`}"
    >
      {text}
    </button></div>
  );
};

export default RenderLinkComponent;
