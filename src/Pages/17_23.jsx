import React, { useState } from 'react';
import SideRnc from "../components/cards/sidernc";
import AboutRncCoordinator from '../containers/18_temp';
import AboutRnc from '../containers/17_temp';

const Rnc = () => {

  const [activeContent, setActiveContent] = useState('about');
  const renderComponent = () => {
    console.log(activeContent);
    if (activeContent === 'about') {
      return <AboutRnc />
    }
    else if (activeContent === 'head') {
      return <AboutRncCoordinator />
    }
    else if (activeContent === 'patents') {
      return
    }
    else if (activeContent === 'publication') {
      return
    }
    else if (activeContent === 'entrepreneurship') {
      return
    }
    else if (activeContent === 'startups') {
        return
      }
    else {
      return
    }
  };
  return (
    <div className="h-full mt-10 w-full flex flex-col items-center justify-end overflow-auto mb-16">

      <div className="h-5/6 w-full flex flex-col">


        <div className="flex flex-row h-full w-full mt-8">

          <SideRnc setContent={setActiveContent} activeContent={activeContent} />
          <div className="w-5/6 ">
            {renderComponent()}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Rnc;