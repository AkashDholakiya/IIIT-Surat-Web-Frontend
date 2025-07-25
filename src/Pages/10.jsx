import React from 'react';
import i10 from '../assets/images/img10.png';
import i101 from '../assets/images/img101.png';
import i102 from '../assets/images/img102.png';

const Ten = () => {
    return (
        <div className="w-full h-auto">
            {/* Image Section */}
            <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen">
                {/* Bottom Image */}
                <img 
                    src={i10}
                    alt="Bottom Image"
                    className="w-full h-full object-cover"
                />
                
                {/* Top Image */}
                <img 
                    src={i101} 
                    alt="Top Image"   
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
                />

                {/* Text Overlay on Top of Images */}
                <div className="absolute top-0 left-4 w-full h-full flex items-center bg-opacity-50 px-4 md:px-8 lg:px-12">
                    <div className="max-w-xl mr-1 text-white">
                        <h1 className="text-3xl lg:text-4xl font-bold mb-2 lg:mb-4">About us</h1>
                        <p className="mb-2 lg:mb-4 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur.</p>
                        <p className="text-xs md:text-sm lg:text-base">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus obcaecati magni voluptates nihil iure quaerat optio minima, totam ipsum sed fugit voluptatem, recusandae illo quisquam assumenda asperiores voluptatum tempore ipsa delectus. Aliquam tenetur provident quia ab corrupti aut assumenda dicta dignissimos, vitae debitis ad alias nisi. Voluptatum molestiae in doloremque.
                        </p>
                    </div>
                </div>
            </div>

            {/* Separate Section for Text Below the Images */}
            <div className="w-full flex flex-col items-center mt-6 px-4 lg:px-6">
                <h1 className="text-lg lg:text-2xl font-bold text-[#6a0a0a] mb-1 lg:mb-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </h1>
                <p className="text-xs lg:text-sm text-gray-600 text-center mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
                    Doloribus obcaecati magni
                </p>

                {/* New Image Section */}
                <img 
                    src={i102}
                    alt="Additional Description" 
                    className="mt-2 w-full max-w-xl lg:max-w-4xl" 
                />
            </div>
        </div>
    );
};

export default Ten;
