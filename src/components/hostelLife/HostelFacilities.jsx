import React from 'react';
export default function HostelFacilities({id,img,title,description}){
    return (
        <li key={id} className='mt-12 ml-10 mr-20'>
            {console.log({title})}
            <img src={img} className='object-cover w-full' alt="image" />
            <div >
                <h1 className='text-2xl text-[#660000] font-bold mt-[2rem]'>{title}</h1>
                <p className='text-2xl text-gray-600 mt-[2rem]'>{description}</p>
            </div>
        </li>
    )
}