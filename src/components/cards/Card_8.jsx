import React from 'react';

const Card8 = ({ TempCard }) => {
  return (
    <div className="w-full h-full p-3 content border-2 border-black bg-blue-800 ">
      <div className="outline-dashed outline-white bg-white p-2 h-full">
        <div className="mx-2 main-content grid grid-cols-3 h-full">
          {/* Image Section */}
          <div className="col-span-1 image flex items-center justify-center h-full ">
            <img
              className="rounded-md  "
              src={TempCard.image}
              alt=""
            />
          </div>

          {/* Info Section */}
          <div className="info col-span-2 ml-2 h-full flex flex-col justify-between">
            <b className="text-blue-800 text-[clamp(12px,4vw,20px)] name leading-tight">
              {TempCard.name}
            </b>
            <div className="text-slate-500 text-[clamp(10px,3.5vw,15px)] leading-tight mt-1">
              {TempCard.post}
              <br />
              {TempCard.college}
            </div>
            <div className="text-slate-500 text-[clamp(10px,3.5vw,15px)] leading-tight mt-1">
              {TempCard.mail}

              <br />
              {TempCard.contact}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card8;