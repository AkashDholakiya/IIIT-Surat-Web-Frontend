import React, { useState } from 'react';
import PlaylistView from '../components/cards/cards';
import data from './data';


const FiveComponent = () => {
  const { hod } = data;

  const [selected, setSelected] = useState('Assistant professor');
  const renderComponent = () => {
    if (selected === 'All') {
      return (
        <div className='flex flex-col'>
          <PlaylistView cardsData={hod} />
          <PlaylistView cardsData={hod} />
        </div>
      )
    }
    else if (selected === 'Assistant professor') {
      return <PlaylistView cardsData={hod} />
    }
    else if (selected === 'Assistant professor (Contractual)') {
      return <PlaylistView cardsData={hod} />
    }
    else {
      return <PlaylistView cardsData={hod} />
    }
  }
  return (

    <div className="flex flex-col w-11/12 mx-auto overflow-y">
      <div className="">
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
    <div className="flex items-center space-x-4">
      {buttons.map((button) => (
        <button
          key={button}
          className={`flex items-center px-4 pb-8 text-base font-medium 
                              ${selected === button ? 'text-red-800 font-bold' : 'text-blue-800'}
                              ${selected === button ? 'border-none' : 'hover:underline'}
                              focus:outline-none`}
          onClick={() => setSelected(button)}
        >
          {selected === button && <span className="text-red-800">● </span>}
          {button}
        </button>
      ))}
      <div className="flex-grow ml-4 border-t border-blue-800 border-bold"></div>
    </div>
  );
};

export default FiveComponent;
