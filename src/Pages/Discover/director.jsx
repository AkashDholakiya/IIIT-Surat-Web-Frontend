
import DirectorImg from "../../components/Director/DirectorImg";
import DirectorInfo from "../../components/Director/DirectorInfo";
import React from "react";


export default function Director() {
  return (
    <main className="flex flex-col md:flex-row items-center md:items-start justify-center mt-8 md:mt-16 mx-4 md:mx-16 lg:mx-36 gap-6">
      <DirectorImg />
      <DirectorInfo />
    </main>
  );  
}

