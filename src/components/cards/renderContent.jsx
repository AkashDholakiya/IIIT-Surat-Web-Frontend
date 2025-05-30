import clubData from "../../Data/clubsData.js";

const RenderContentComponent = ({ parentContent, childContent }) => {
  const selectedClub = clubData[parentContent]?.[childContent] 
  || Object.values(clubData[parentContent] || {})[0];

   console.log("Selected Club Data:", parentContent, childContent, selectedClub);
  // if (!selectedClub) {
  //   return <div className="text-red-500">Club content not found.</div>;
  // }
  const renderFormattedContent = (content) => {
  return content.split("\n").map((line, idx) => {
    if (line.trim().startsWith("•")) {
      // Bullet point line
      return (
        <li key={idx} className="ml-6 list-disc text-gray-700">
          {line.trim().substring(1).trim()}
        </li>
      );
    } else if (line.trim() === "") {
      // Empty line - just add a line break or skip
      return null;
    } else {
      // Normal paragraph
      return (
        <p key={idx} className="mb-4 text-gray-800 text-justify">
          {line.trim()}
        </p>
      );
    }
  });
};


  return (
    <div className="p-6">
      <h2 className="text-lg font-bold mb-4">{selectedClub.title}</h2>
      
      <div className="text-base lg:text-base md:text-sm sm:text-xs">
  {renderFormattedContent(selectedClub.content)}
</div>

    </div>
  );
};

export default RenderContentComponent;
