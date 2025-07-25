import React from "react";
const PlaylistView = ({ cardsData }) => {
  return (
    <div className=" w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {cardsData.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.name}
              description={item.roles}
              imgUrl={item.img_url}
              contact={item.email}
            />
          );
        })}
      </div>
    </div>
  );
};

const Card = ({ title, description, imgUrl, contact }) => {
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
      <div className="text-blue-800 font-semibold text-base pt-4 pb-1 text-center mx-auto  w-5/6">
        {title}
      </div>
      <div className="text-black text-sm w-full mx-auto text-center ">
        {description}
      </div>
      <div className="text-black text-sm w-full mx-auto text-center  mb-8">
        {contact}
      </div>
    </div>
  );
};

export default PlaylistView;
