import React, { useState } from "react";
import Bar8 from "../components/cards/Bar_8";
import Card8 from "../components/cards/Card_8";
import profile from "../assets/images/case.png";
//fetch data using select and subSelect varibles.
const TempCard = {
  image: profile,
  name: "Shri Shital Bhandarkar",
  post: "Deputy Director(Operations)",
  college: "IIIT SURAT",
  mail: "exam.help@iiitsurat.ac.in",
  contact: "062-237 1752 or 062-237 1752",
  profile: "url",
};
const Eight = () => {
  const [select, setSelect] = useState(0);
  const [selectSub, setSelectSub] = useState(0);
  const first = (x) => {
    setSelect(x);
  };
  const second = (x) => {
    setSelectSub(x);
  };
  return (
    <>
      <div className="main m-6">
        <div className="flex flex-col">
          <div className="w-full mt-8 bar">
            <Bar8
              select={select}
              selectSub={selectSub}
              first={first}
              second={second}
            />
          </div>
          <div className="">
            <div className="mx-2 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
              <Card8 TempCard={TempCard} />
              <Card8 TempCard={TempCard} />
              <Card8 TempCard={TempCard} />
              <Card8 TempCard={TempCard} />
              <Card8 TempCard={TempCard} />
              <Card8 TempCard={TempCard} />
              <Card8 TempCard={TempCard} />
              <Card8 TempCard={TempCard} />
              <Card8 TempCard={TempCard} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Eight;