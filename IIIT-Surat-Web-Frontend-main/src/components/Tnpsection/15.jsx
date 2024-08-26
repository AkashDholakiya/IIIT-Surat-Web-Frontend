import React from 'react';
import image1 from '../../assets/images/1TNP.png';
import image2 from '../../assets/images/2TNP.png';
import image3 from '../../assets/images/3TNP.png';
import image4 from '../../assets/images/4TNP.png';
import image5 from '../../assets/images/5TNP.png';
import image6 from '../../assets/images/6TNP.png';

const Tnp15 = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-blue-900 ">Placement Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mx-auto max-w-4xl md:ml--2">
        {[image1, image2, image3, image4, image5, image6].map((image, index) => (
          <div key={index} className="w-full aspect-square">
            <img 
              src={image} 
              alt={`Placement statistic ${index + 1}`} 
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tnp15;