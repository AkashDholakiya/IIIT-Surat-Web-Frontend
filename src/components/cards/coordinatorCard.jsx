import React from 'react';

const Members = ({ cardsData }) => {
    return (
      <div className="w-full ">
        <div className="grid max-[400px]:grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-1">

          {cardsData.map((item, index) => (
            <CoordinatorCard
              key={index}
              name={item.name} // Assuming 'title' corresponds to name
              role={item.role} // Assuming 'description' corresponds to role
              imgSrc={item.imgSrc} // Assuming 'imgUrl' corresponds to imgSrc
            />
            
          ))}
          
        </div>
      </div>
    );
  };


const CoordinatorCard = ({ name, role, imgSrc }) => {
    return (
        <div className="flex items-center border rounded-lg py-2 space-x-2 shadow-sm border-blue-500 ">
          <img className="w-12 h-12 rounded-full object-cover bg-lightBlue mx-2" src={imgSrc} alt="piano" />
          <div>
            <h2 className="text-m font-semibold text-base text-blue-700">{name}</h2>
            <p className="text-gray-600 text-sm">{role}</p>
          </div>
        </div>
      );
    };
const FinalDiv=({title,cardsData,para})=>{
  const render=()=>{
    if(para!==''){
      return para
    }
  };
  return(
    <div className='w-full h-full my-4'>
      <div className="flex flex-col  pl-10 pr-10 mb-4">
        <div className="flex items-center mb-2">
          <div className="w-1 bg-red-800 h-6 rounded mr-4"></div>
          
          <div className="w-full mx-auto">
            <h1 className="text-2xl font-semibold text-red-800">{title}</h1> 
            <p className="text-red-800 ">{render()}</p>
          </div>
        </div>

      </div>
          <div className="h-2/6 mt-5">
            <div className="h-full w-full mx-auto ">
              <Members 
                cardsData={cardsData}
              />
          </div>
      </div>
    </div>
                
  );
};
export default FinalDiv;
