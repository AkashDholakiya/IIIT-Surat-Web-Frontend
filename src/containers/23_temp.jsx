import RenderContentComponent from "../components/cards/renderContent"

import clubData from "../Data/clubsData.js";
const Group=({childContent , parentContent})=>{

  if (!parentContent || !clubData[parentContent]) {
    console.error(`Invalid or missing parentContent: ${parentContent}`);
    return <div className="p-5 text-center text-red-600">Error: Invalid club category</div>;
  }
    const parentKey = parentContent;
const parentObject = clubData[parentKey]; // e.g., clubData.Cultural

// If childContent exists in parentObject, use it, else fallback to first key
const childKey = childContent && parentObject[childContent] ? childContent : Object.keys(parentObject)[0];
const actualChildData = parentObject[childKey];
const title = actualChildData?.title;
const link = actualChildData?.link;
console.log("Child Key:", childKey);
    
    return(
    <div className=" flex px-6 lg:px-20 xl:px-20 flex-col max-md:w-full">
        <div className="w-full h-2/6 object-cover mt-5">{renderImage({title,childKey,link})}</div>
        <div className="h-full w-full mx-auto my-2">
                <div className="flex items-center pl-10 pr-16 pb-4">
                    <h1 className="lg:text-xl md:text-l sm:text:base font-semibold text-red-800">About department</h1>
                    <div className="flex-grow ml-4 border-t border-red-800 border-bold"></div>
                </div>
            <RenderContentComponent childContent={childContent} parentContent={parentContent} />
        </div>
        </div>
    )
}

const renderImage = ({title,childKey,link}) => (
  <div className="flex justify-center items-center h-full ">
    <div className="bg-lightBlue rounded-lg shadow-lg overflow-hidden flex w-5/6 h-full">
      <div className="px-10 py-2 flex flex-col justify-center items-center space-y-4 bg-gradient-to-r from-lightBlue via-transparent to-transparent w-4/6">
        <div className="w-1/1">
          <h2 className="text-blue-800 font-bold text-lg  font-poppins">
            {title} Club
          </h2>
          <button className="bg-blue-700 text-white px-2 my-2 text-base rounded-xl">
            {childKey} Brochure
          </button>
        </div>
      </div>
      <div
        className="w-5/12 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(244, 248, 254, 1), rgba(244, 248, 254, 0)), url(${link})  `,
          backgroundPosition: "right center",
        }}
      />
    </div>
  </div>
);
export default Group; 