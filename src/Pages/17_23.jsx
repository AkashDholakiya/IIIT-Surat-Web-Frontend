import React, { useState } from 'react';
import SideRnc from "../components/cards/sidernc";
import AboutRnc from '../containers/17_temp';
import AboutRncCoordinator from '../containers/18_temp';
import Patents from '../containers/19_temp';
import Entrepreneurship from '../containers/21_temp';
import RncBoard from '../containers/41_temp';
import Publications from '../containers/20_temp';
import Startups from '../containers/22_temp';
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
    else if (activeContent === 'board') {
      return <RncBoard />
    }
    else if (activeContent === 'patents') {
      return <Patents/>
    }
    else if (activeContent === 'publication') {
      return <Publications/>
    }
    else if (activeContent === 'entrepreneurship') {
      return <Entrepreneurship />
    }
    else if (activeContent === 'startups') {
        return <Startups/>
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