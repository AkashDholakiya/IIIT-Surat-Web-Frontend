import React, { useState } from 'react';
import PlaylistView from '../../components/cards/cards';
import data from '../../containers/data';


const Tnp14 = () => {
  const { 
 tnpCoordinators } = data;

  const [selected, setSelected] = useState('Assistant professor');
  const renderComponent = () => {
    if (selected === 'All') {
      return (
        <div className='flex flex-col'>
          <PlaylistView cardsData={
 tnpCoordinators} />
          <PlaylistView cardsData={
 tnpCoordinators} />
        </div>
      )
    }
    else if (selected === 'Assistant professor') {
      return <PlaylistView cardsData={
 tnpCoordinators} />
    }
    else if (selected === 'Assistant professor (Contractual)') {
      return <PlaylistView cardsData={
 tnpCoordinators} />
    }
    else {
      return <PlaylistView cardsData={
 tnpCoordinators} />
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
    'Faculty In-charge',
    'Student Coordinator(2022-23)',
    'Member(2023-24)t'
  ];

  return (
    <div className="flex items-center space-x-4">
      {buttons.map((button) => (
        <button
          key={button}
          className={`flex items-center px-4 pb-8 text-base font-medium 
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

export default Tnp14;
