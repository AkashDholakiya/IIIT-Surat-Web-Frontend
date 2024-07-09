import React, { useState } from 'react';
import SideBar from "../components/cards/sidebar";
import SixComponent from "../containers/06_temp";
import SevenComponent from '../containers/07_temp';
import FiveComponent from '../containers/05_temp';
import FourComponent from '../containers/04_temp';
import ThreeComponent from '../containers/03_temp';

const Six = () => {

  const [activeContent, setActiveContent] = useState('about');
  const renderComponent = () => {
    console.log(activeContent);
    // console.log(content);
    if (activeContent === 'about') {
      return <ThreeComponent />
    }
    else if (activeContent === 'head') {
      return <FourComponent />
    }
    else if (activeContent === 'faculty') {
      return <FiveComponent />
    }
    else if (activeContent === 'lab') {
      return <SixComponent />
    }
    else if (activeContent === 'syllabus') {
      return
    }
    else {
      return <SevenComponent />
    }
  };
  return (
    <div className="h-full mt-10 w-full flex flex-col items-center justify-end overflow-auto mb-16">

      <div className="h-5/6 w-full flex flex-col">


        <div className="flex flex-row h-full w-full mt-8">

          <SideBar setContent={setActiveContent} activeContent={activeContent} />
          <div className="w-5/6 ">
            {renderComponent()}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Six;