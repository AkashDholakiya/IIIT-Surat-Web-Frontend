import React, { useState } from 'react';
import PlaylistView from '../components/cards/cards';
import data from '../containers/data';

const FiveComponent = () => {
  const { hod } = data;

  const [selected, setSelected] = useState('Assistant professor');

  const renderComponent = () => {
    if (selected === 'All') {
      return (
        <div className='flex flex-col space-y-4'>
          <PlaylistView cardsData={hod} />
          <PlaylistView cardsData={hod} />
        </div>
      );
    } else {
      return <PlaylistView cardsData={hod.filter(item => item.position === selected)} />;
    }
  };

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto p-4 overflow-y-auto">
      <ButtonGroup selected={selected} setSelected={setSelected} />
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
    <div className="flex flex-wrap items-center justify-center space-x-4 mb-4">
      {buttons.map((button) => (
        <button
          key={button}
          className={`flex items-center px-4 py-2 text-base font-medium 
                      ${selected === button ? 'text-[#660000] font-bold' : 'text-blue-800'}
                      ${selected === button ? 'border-none' : 'hover:underline'}
                      focus:outline-none`}
          onClick={() => setSelected(button)}
        >
          {selected === button && <span className="text-[#660000]">●</span>}
          {button}
        </button>
      ))}
    </div>
  );
};

export default FiveComponent;