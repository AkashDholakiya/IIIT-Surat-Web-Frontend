import React from "react";

const RenderContentComponent = ( {childContent, parentContent} ) => {
  //const { childContent, parentContent } = content;

  //console.log("Content prop: ", content);
  //console.log("childContent: ", childContent);
  //console.log("parentContent: ", parentContent);

  const renderContent = () => {
    if (childContent) {
      //console.log(childContent)
      switch (childContent) {
        case "Saras":
          return "Content for Saras under Sports Club.";
        case "Abstract":
          return "Content for Abstract under Sports Club.";
        case "Swrang":
          return "Content for Swrang under Sports Club.";
        case "Malhar":
          return "Content for Malhar under Cultural Club.";
        case "Groove":
          return "Content for Groove under Cultural Club.";
        case "Antra":
          return "Content for Antra under Cultural Club.";
        case "Cineworks":
          return "Content for Cineworks under Technical Club.";
        case "Exposure":
          return "Content for Exposure under Technical Club.";
        case "Management":
          return "Content for Management under Technical Club.";
        default:
          return `Content for ${childContent}.`;
      }
    } else if (parentContent) {
      console.log(parentContent)
      switch (parentContent) {
        case "Sports":
          return "General Content for Sports Club.";
        case "Cultural":
          return "General Content for Cultural Club.";
        case "Technical":
          return "General Content for Technical Club.";
        case "Entrepreneur":
          return "General Content for Entrepreneurship Club.";
        default:
          return `General Content for ${parentContent}.`;
      }
    } else {
      return "Select a category to see the content.";
    }
  };

  return (
    <p className="ml-10 mr-16 mx-auto text-justify lg:text-base md:text-sm sm:text:xs">
      {renderContent()}
    </p>
  );
};

export default RenderContentComponent;
