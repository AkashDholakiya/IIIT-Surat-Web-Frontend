import head from "../assets/images/example.png";
import NavBar from "../components/cards/sidenav";
import React, { useState } from "react";
import TitleBar from "../components/cards/renderLink";
import Group from "../containers/23_temp";
import SarasComponent from "../containers/24_temp";
import Events from "../containers/25_temp";

const Slide1 = () => {
  const [content, setContent] = useState("Saras");
  const [activeContent, setActiveContent] = useState("about");
  const [parentContent, setParentContent] = useState("Cultural");
  const [childContent, setChildContent] = useState("Antra");

  const renderComponent = () => {
    if (activeContent === "lead") return <SarasComponent childContent={childContent} parentContent={parentContent} />;
    if (activeContent === "about") return <Group childContent={childContent} parentContent={parentContent} />;
    if (activeContent === "events") return <Events childContent={childContent} parentContent={parentContent}/>;
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-end overflow-auto my-16">
      <div className="h-4/6 w-full flex flex-col">
        <TitleBar
          setContent={setContent}
          parentContent={parentContent}
          setParentContent={setParentContent}
          childContent={childContent}
          setChildContent={setChildContent}
          showChildDropdown={true}
        />

        {/* {activeContent === "about" && (
          <div className="w-full h-2/6 object-cover mt-10">{renderImage()}</div>
        )} */}

        <div className="flex flex-row h-full w-full mt-8 ">
          <NavBar setContent={setActiveContent} activeContent={activeContent} parentContent={parentContent} childContent={childContent} />
          <div className="h-full w-full md:w-4/5  ml-18 ">{renderComponent()}</div>
        </div>
      </div>
    </div>
  );
};



export default Slide1;
