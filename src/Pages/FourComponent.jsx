// FourComponent.jsx
import React from 'react';

const FourComponent = () => {
  return (
    <div className="flex flex-wrap">
      {/* Image and Text Block at the Top */}
      <div
        className="w-full sm:w-1/2 p-2 flex items-center mb-5" // Adds bottom margin for spacing
      >
        {/* Image Container */}
        <div style={{ width: '100px', marginRight: '20px' }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Rqt7CrwY52Qlq2MP4A7gf-mwh-qi9BzUe8IXkOj8IzDC2pPj"
            alt="Dr. Vijaykumar Radadiya"
            className="w-full h-auto object-cover"
            style={{ height: '115px' }} // Fixed height for consistency
          />
        </div>

        {/* Text Container */}
        <div className="mt-0.25">
          <div className="text-blue-700 text-xl font-bold">Dr. Vijaykumar Radadiya</div>
          <div className="text-blue-700 text-lg font-semibold mt-1">
            Ph.D, Communication Networks,<br />
            IISc, Bangalore, India (ECE)
          </div>
        </div>
      </div>

      {/* Content Blocks */}
      {[1, 2, 3].map((_, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 p-2 flex items-stretch mb-5"
        >
          {/* Left Section: Title and Description */}
          <div style={{ width: '70%', padding: '0 10px' }}>
            <h3 className="text-blue-700 text-xl font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h3>
            <p className="text-base mt-0.5 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus obcaecati magni voluptates nihil iure quaerat optio minima.
            </p>
          </div>

          {/* Right Section: Date */}
          <div style={{ width: '30%', textAlign: 'center', padding: '0 10px' }}>
            <h3 className="text-gray-500 text-lg font-semibold" style={{ margin: 0 }}>
              June 2023-May 2024
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FourComponent;
