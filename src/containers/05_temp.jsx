import React, { useState } from 'react';
import PlaylistView from '../components/cards/cards';
import data from './data';

const FiveComponent = () => {
  const { hod } = data;
  const [selected, setSelected] = useState('Assistant professor');

  const renderComponent = () => {
    if (selected === 'All') {
      return (
        <div className='flex flex-col space-y-8'>
          <PlaylistView cardsData={hod} />
          <PlaylistView cardsData={hod} />
        </div>
      )
    }
    else {
      return <PlaylistView cardsData={hod} />
    }
  }

  return (
    <div className="flex flex-col w-full px-4 sm:px-6 lg:px-8 mx-auto overflow-y-auto">
      <div className="mb-6">
        <ButtonGroup selected={selected} setSelected={setSelected} />
      </div>
      {renderComponent()}
    </div>
  );
};

const ButtonGroup = ({ selected, setSelected }) => {
  const buttons = [
    'All',
    'Assistant professor',
    'Assistant professor (Contractual)',
    'Teaching assistant'
  ];

  return (
    <div className="flex flex-wrap items-center gap-4">
      {buttons.map((button) => (
        <button
          key={button}
          className={`flex items-center px-3 py-2 text-sm sm:text-base font-medium rounded-full transition-colors duration-200 ease-in-out
                     ${selected === button 
                       ? 'bg-[#660000] text-white' 
                       : 'text-blue-800 hover:bg-blue-100'}
                     focus:outline-none focus:ring-2 focus:ring-[#660000] focus:ring-opacity-50`}
          onClick={() => setSelected(button)}
        >
          {selected === button && <span className="mr-2">●</span>}
          {button}
        </button>
      ))}
    </div>
  );
};

export default FiveComponent;