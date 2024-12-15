import React from 'react';

export default function HostelFacilities({ id, img, title, description }) {
    return (
        <li key={id} className="mt-12 px-4 md:px-8 lg:px-20">
            {console.log({ title })}
            {/* Responsive Image */}
            <img
                src={img}
                className="object-cover w-full h-48  sm:h-68 md:h-72 lg:h-72 rounded-lg"
                alt="facility"
            />

            {/* Text Content */}
            <div className="mt-6 text-center md:text-left">
                <h1 className="text-xl sm:text-2xl md:text-3xl text-[#660000] font-bold">
                    {title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4 leading-relaxed">
                    {description}
                </p>
            </div>
        </li>
    );
}
