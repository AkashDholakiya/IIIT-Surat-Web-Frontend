
import React from 'react';
const FiveComponent = () => {
  return (
    <div className="flex flex-wrap">
      {/* Image and Text Block at the Top */}
      <div
        className="w-full sm:w-1/2 p-2"
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        {/* Image Container */}
        <div style={{ width: '100px', marginRight: '20px' }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Rqt7CrwY52Qlq2MP4A7gf-mwh-qi9BzUe8IXkOj8IzDC2pPj"
            alt="Image description"
            className="w-full h-auto object-cover"
            style={{ width: '100px', height: '115px' }}
          />
        </div>

        {/* Text Container */}
        <div className="mt-0.25">
          <div className="text-blue-700 text-xl text-base font-bold">
            Dr. Vijaykumar Radadiya
          </div>
          <div className="text-blue-700 text-l font-semibold mt-1">
            Ph.D, Communication Networks,<br />
            IISc, Bangalore, India (ECE)
          </div>
        </div>
      </div>

      {/* Component 1 */}
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 p-2"
          style={{
            display: 'flex',
            alignItems: 'stretch',
            width: '100%',
            marginBottom: '20px',
          }}
        >
          {/* Left Section: Title and Description */}
          <div style={{ width: '70%', padding: '0 10px' }}>
            <h3 className="text-blue-700 text-xl font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h3>
            <p className="text-base mt-0.5 text-l text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus obcaecati magni voluptates nihil iure quaerat optio minima,
            </p>
          </div>

          {/* Right Section: Other Title */}
          <div style={{ width: '20%', textAlign: 'center', padding: '0 10px' }}>
            <h3 className="text-gray-500 text-l font-semibold" style={{ margin: 0 }}>
              June 2023-May 2024
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FiveComponent;
