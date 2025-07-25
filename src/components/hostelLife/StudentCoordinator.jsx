import React from "react";

const Members = ({ cardsData }) => {
  console.log(cardsData);
  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-1 ">
        {cardsData.map((item, index) => (
          <CoordinatorCard
            key={index}
            title={item.name}
            description={item.roles}
            imgUrl={item.img_url}
            contact={item.mobile_number} // Assuming 'imgUrl' corresponds to imgSrc
          />
        ))}
      </div>
    </div>
  );
};

const CoordinatorCard = ({ title, description, imgUrl, contact }) => {
  return (
    <div className="px-3 flex items-center border rounded-lg py-2 space-x-2 shadow-sm border-blue-500 ">
      <img
        className="w-12 h-12 rounded-full object-cover bg-lightBlue mr-2"
        src={imgUrl}
        alt="piano"
      />
      <div>
        <h2 className="text-m font-semibold text-base text-blue-700">
          {title}
        </h2>
        <p className="text-gray-600 text-xs">{description}</p>
        <p className="text-gray-600 text-xs">{contact}</p>
      </div>
    </div>
  );
};
const StudentCoordinator = ({ title, cardsData, para }) => {
  const render = () => {
    if (para !== "") {
      return para;
    }
  };
  return (
    <div className="w-full h-full my-4">
      <div className="flex flex-col  pr-10 mb-4">
        <div className="flex items-center mb-2">
          <div className="w-1 bg-red-800 h-6 rounded mr-4"></div>

          <div className="w-full mx-auto">
            <h1 className="text-2xl font-semibold text-red-800">{title}</h1>
            <p className="text-red-800 ">{render()}</p>
          </div>
        </div>
      </div>
      <div className="h-2/6 mt-5">
        <div className="h-full w-11/12 mx-4 ">
          <Members cardsData={cardsData} />
        </div>
      </div>
    </div>
  );
};
export default StudentCoordinator;
