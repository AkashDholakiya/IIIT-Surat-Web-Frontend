const Card8 = ({ TempCard }) => {
  return (
    <div className="w-full h-full p-3 content border-2 border-black bg-blue-800 ">
      <div className="outline-dashed outline-white bg-white p-2 h-full">
        <div className="mx-2 main-content  h-full">
          <div className="info items-center text-center ">
            <b className="text-blue-800 text-[clamp(12px,4vw,20px)] name leading-tight">
              {TempCard.name}
            </b>
            <div className="text-slate-500 text-[clamp(10px,3.5vw,15px)] mt-1">
              {TempCard.post}
              <br />
              {TempCard.college}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card8;