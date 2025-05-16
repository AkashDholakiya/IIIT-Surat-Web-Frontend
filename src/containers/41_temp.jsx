import React from 'react';
import PlaylistView from '../components/cards/cards';
import data from './data';

const RncBoard = () => {
    const { rab = [] } = data;

    return (
        <div className="flex flex-col w-11/12 mx-auto overflow-y">
            <ButtonGroup />
            <div className='flex flex-col'>
                <PlaylistView cardsData={rab} />
            </div>
        </div>
    );
};

const ButtonGroup = () => (
    <div className="flex items-center space-x-4">
        <button className="flex items-center px-4 pb-8 text-base font-medium focus:outline-none">
        </button>
    </div>
);

export default RncBoard;
