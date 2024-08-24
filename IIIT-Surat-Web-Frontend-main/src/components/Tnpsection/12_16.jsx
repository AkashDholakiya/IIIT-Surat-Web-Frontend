import React, { useState } from 'react';
import Sidebartnp from './Sidebartnp';
import Tnp16 from './16';
import Tnp15 from './15';
import Tnp14 from './14';
import Tnp13 from './13';
import Tnp17 from './17';
import Tnp from './12';

const Tnp12_16 = () => {
  const [activeContent, setActiveContent] = useState('about');

  const renderComponent = () => {
    console.log(activeContent);
    if (activeContent === 'tnpcell') {
      return <Tnp />;
    } else if (activeContent === 'tpo') {
      return <Tnp13 />;
    } else if (activeContent === 'placementTeam') {
      return <Tnp14 />;
    } else if (activeContent === 'placementStat') {
      return <Tnp15 />;
    } else if (activeContent === 'achievers') {
      return <Tnp16 />;
    } else if (activeContent === 'guide') {
      return <Tnp17 />;
    } else {
      return <Tnp />;
    }
  };

  return (
    <div className="h-full mt-10 w-full flex flex-col items-center justify-end overflow-auto mb-16">
  
  {/* Image Section */}
  {(activeContent === 'tnpcell'|| activeContent === 'about') && (
    <div className="w-full max-w-[1262px] min-h-[205px] relative overflow-hidden flex justify-center items-center mt-12 max-md:mt-10 max-md:max-w-full top-10">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b79f4eee81893d1d01e947439d842445dcecf7871c6618f1319907aa7303a476?apiKey=7c5b01f694034c0fb3ba724488afa998"
        className="absolute inset-0 object-cover w-full h-full left-100"
        alt="tnp-image"
      />
      <div className="relative flex flex-col items-start px-12 py-7 max-md:px-5 max-md:max-w-full">
        <div className="text-2xl font-semibold leading-9 text-blue-900 max-md:max-w-full">
          Training & Placement Cell - IIIT, Surat
        </div>
        <div className="mt-3.5 text-zinc-700 max-w-[506px] max-md:max-w-full">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          obcaecati magni voluptates nihil iure quaerat.
        </div>
        <div className="flex gap-4 mt-8 font-medium text-white max-md:flex-wrap">
          <div className="px-8 py-2.5 bg-blue-900 rounded-[50px] max-md:px-5">
            <button>T & P Officer</button>
          </div>
          <div className="px-8 py-2 bg-blue-900 rounded-[50px] max-md:px-5">
            <button>Tnp Brochure</button>
          </div>
        </div>
      </div>
    </div>
  )}
  
  {/* Content Section */}
  <div className="h-5/6 w-full flex flex-col">
    <div className="flex flex-row h-full w-full mt-8">
      {/* Sidebar */}
      <Sidebartnp setContent={setActiveContent} activeContent={activeContent} />

      {/* Main Content */}
      <div className="w-5/6">
        {renderComponent()}
      </div>
    </div>
  </div>
</div>

  );
};

export default Tnp12_16;
