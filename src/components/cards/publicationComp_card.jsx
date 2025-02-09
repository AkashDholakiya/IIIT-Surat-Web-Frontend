import React from 'react';
import { Link } from 'react-router-dom';

const Members = ({ cardsData }) => {
    return (
      <div className="w-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 my-1 ">
          {cardsData.map((item, index) => (
            <CoordinatorCard
              key={index}
              name={item.name} // Assuming 'title' corresponds to name
              role={item.role} // Assuming 'description' corresponds to role
              imgSrc={item.imgSrc} // Assuming 'imgUrl' corresponds to imgSrc
              linkurl={item.linkurl}
            />
            
          ))}
          
        </div>
      </div>
    );
  };


const CoordinatorCard = ({ name, role, imgSrc,linkurl }) => {
    return (
        <div className="flex items-center border rounded-lg py-2 space-x-2 shadow-sm border-blue-500 px-4">
          {/* <img className="w-12 h-12 rounded-full object-cover bg-lightBlue mx-2" src={imgSrc} alt="piano" /> */}
          <div>
            <h2 className="text-m font-semibold text-base text-blue-700">{name}</h2>
            <p className="text-gray-600 text-sm">{role}{/*  <Link to={linkurl} className='underline font-semibold ml-3'>Read more</Link> */}</p>
            
          </div>
        </div>
      );
    };
const publicationDiv=({title,cardsData,para})=>{
  const render=()=>{
    if(para!==''){
      return para
    }
  };
  return(
    <div className='w-full h-full my-4'>
      <div className="flex flex-col  pl-10 pr-10 mb-4">
        <div className="flex items-center mb-2">
          <div className="w-1.5 bg-red-800 h-12  mr-4"></div>
          
          <div className="w-full mx-auto">
            <h1 className="text-2xl font-semibold text-red-800">{title}</h1> 
            <p className="text-red-800 ">{render()}</p>
          </div>
        </div>

      </div>
          <div className="h-2/6 mt-5">
            <div className="h-full w-11/12 mx-auto ">
              <Members 
                cardsData={cardsData}
              />
          </div>
      </div>
    </div>
                
  );
};
export default publicationDiv;
