// ThreeComponent.jsx
import React from 'react';

const ThreeComponent = () => {
  return (
    <div className="flex flex-wrap">
      {/* Image Container */}
      <div className="w-full sm:w-1/2 p-2 flex items-center justify-center">
        <div className="max-w-xs">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Rqt7CrwY52Qlq2MP4A7gf-mwh-qi9BzUe8IXkOj8IzDC2pPj"
            alt="Dr. Vijaykumar Radadiya"
            className="w-full h-auto object-cover rounded-lg"
            style={{ height: '300px' }} // Fixed height for consistency
          />
        </div>
        
        {/* Text Container */}
        <div className="mt-2 text-left">
          <div className="text-blue-700 text-base font-bold">Membership Details</div>
          <div className='text-blue-700 text-sm font-semibold mt-1'>
            Member of IEEE - 93057529
          </div>
          <div className='text-blue-700 text-sm font-semibold mt-1'>
            Member of IAENG - 208225
          </div>
        </div>
      </div>

      {/* Title and Info Container */}
      <div className="w-full sm:w-1/2 p-2">
        <h2 className="text-xl font-bold text-blue-700">Dr. Vijaykumar Radadiya</h2>
        <div className='mt-1.5'>
          <h2 className="text-sm font-semibold text-blue-700">Hod Computer Science</h2>
          <p className="mt-0 text-sm text-blue-700">Indian Institute of Information Technology, Surat</p>
        </div>

        <div className='mt-1.5'>
          <h2 className="text-sm font-semibold text-blue-700">Email ID</h2>
          <p className="mt-0 text-sm text-blue-700">tnpoffice@iiitsurat.ac.in</p>
        </div>

        <div className='mt-1.5'>
          <p className="mt-0 text-sm text-blue-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus obcaecati magni voluptates nihil iure quaerat optio minima, totam ipsum sed fugit voluptatem, recusandae illo quisquam assumenda asperiores voluptatum tempore ipsa delectus. Aliquam tenetur provident quia ab corrupti aut assumenda dicta dignissimos, vitae debitis ad alias nisi? Voluptatum molestiae in doloremque!
          </p>
        </div>

        <div className='mt-1.5'>
          <h2 className="text-sm font-semibold text-blue-700">Specialization Areas</h2>
          <p className="mt-0 text-sm text-blue-700">Applied Machine Learning, NLP, Data Science</p>
        </div>
      </div>
    </div>
  );
};

export default ThreeComponent;
