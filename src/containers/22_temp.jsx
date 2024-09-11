import React from 'react'
import data from "./data";


const Startups = () => {
  const {focusCardsData} =data;
  return (
    <div className="h-4/6 w-11/12 mx-auto">

    <PlaylistView cardsData={focusCardsData} />
  </div>
  )
}
const PlaylistView = ({ cardsData }) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className=" grid grid-cols-3 space-x-4 my-2">
        {cardsData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};
const Card = ({ title, description, imgUrl }) => {
  return (
    <div className="bg-lightBlue m-3 py-1 px-2 rounded-lg ">
      <div className="pb-2 pt-2">
        <div className="w-full h-full rounded-lg overflow-hidden mx-auto">
          <img
            className="w-full h-26 object-cover bg-lightBlue"
            src={imgUrl}
            alt={title}
          />
        </div>
      </div>
      <div className="text-red-900 font-semibold  py-3 mx-auto w-11/12 text-justify">{title}</div>
      <div className="text-black text-sm w-11/12 mx-auto text-justify">
        {description}
      </div>
      <div className="text-black text-sm w-11/12 mx-auto text-justify">
        <a href="https://www.google.com/" className="text-blue-600 font-semibold hover:underline">Read more</a>
      </div>
    </div>
  );
};
export default Startups;