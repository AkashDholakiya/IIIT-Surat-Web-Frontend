import React from 'react';
import image1 from "../../assets/images/Achievers/1.png";
import image2 from "../../assets/images/Achievers/2.png";
import image3 from "../../assets/images/Achievers/3.png";
import image4 from "../../assets/images/Achievers/4.png";
import image5 from "../../assets/images/Achievers/5.png";
import image6 from "../../assets/images/Achievers/6.png";
import image7 from "../../assets/images/Achievers/7.png";
import image8 from "../../assets/images/Achievers/8.png";
import image9 from "../../assets/images/Achievers/9.png";
import image10 from "../../assets/images/Achievers/10.png";
import image11 from "../../assets/images/Achievers/11.png";
import image12 from "../../assets/images/Achievers/12.png";
import image13 from "../../assets/images/Achievers/13.png";
import image14 from "../../assets/images/Achievers/14.png";
import image15 from "../../assets/images/Achievers/15.png";
import image16 from "../../assets/images/Achievers/16.png";

const Tnp16 = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16];

  return (
    <>
      <h1 className="text-2xl font-bold mb-6 text-blue-900">Our Achievers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
            <img 
              src={image} 
              alt={`Achiever ${index + 1}`} 
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Tnp16;