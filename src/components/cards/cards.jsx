import React from 'react';
const PlaylistView = ({ cardsData }) => {
    return (
      <div className=" w-full ">
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cardsData.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            );
          })}
        </div>
      </div>
    );
  };
  

const Card = ({ title, description, imgUrl }) => {
    return (
      <div className="bg-white  rounded-lg ">
        <div className="pb-1 pt-1">
          <div className="w-28 h-28 rounded-full overflow-hidden mx-auto">
            <img
              className="w-full h-full object-cover bg-lightBlue"
              src={imgUrl}
              alt={title}
            />
          </div>
        </div>
        <div className="text-blue-800 font-semibold text-base pt-4 pb-1 text-center mx-auto mx-2 w-5/6">{title}</div>
        <div className="text-black text-sm w-full mx-auto text-center mx-2 mb-8">
          {description}
        </div>
      </div>
    );
  };
  
  export default PlaylistView;