import head from "../assets/images/example.png";
import NavBar from "../components/cards/sidenav";
import React, { useState } from 'react';
import TitleBar from "../components/cards/renderLink";
import Group from "../containers/23_temp";
import SarasComponent from "../containers/24_temp";
import Events from "../containers/25_temp";
const Slide1 = () => {
    const [content, setContent] = useState('Saras');
    const [activeContent, setActiveContent] = useState('about');
    const renderComponent=()=>{
        console.log(activeContent);
        // console.log(content);
        if(activeContent==='lead'){
            return <SarasComponent content={content}/>
        }
        if(activeContent==='about'){
            return <Group content={content}/>
        }
        if(activeContent==='events'){
            return <Events />
        }
    };
    return (
        <div className="h-full w-full flex flex-col items-center justify-end overflow-auto my-16">
            
            <div className="h-2/6 w-full flex flex-row justify-between">
                {/* Akash's part */}
            </div>

            <div className="h-4/6 w-full flex flex-col">
                <TitleBar setContent={setContent} />
                {activeContent === 'about' && (
                    <div className="w-full h-2/6 object-cover mt-10">
                        {renderImage()}
                    </div>
                ) }
                {/* <div className="w-full h-2/6 object-cover mt-10">
                    {renderImage()}
                </div> */}
                <div className="flex flex-row h-full w-full mt-8">
                    <NavBar setContent={setActiveContent} activeContent={activeContent} content={content}/>
                    <div className="h-full w-5/6">
                        <div className="h-full w-full">
                            {renderComponent()}
                        {/* <div className="flex items-center pl-20 pr-40">
                            <h1 className="text-lg font-bold text-red-800">About department</h1>
                            <div className="flex-grow ml-4 border-t border-red-800 border-bold"></div>
                        </div>
                        <RenderContentComponent content={content} /> */}
                        </div>
                        
                    </div>
                    
                </div>
                <div >
                    {/* Meet ka part */}
                    
                </div>
            </div>
            
        </div>
    );
};

const renderImage = () => {
    
    return (
        <div className="flex justify-center items-center h-full ">
            <div className="bg-lightBlue rounded-lg shadow-lg overflow-hidden flex w-5/6 h-full">
                <div className="px-10 py-2 flex flex-col justify-center items-center space-y-4 bg-gradient-to-r from-lightBlue via-transparent to-transparent w-4/6">
                    <div className="w-5/6">
                        <h2 className="text-blue-800 font-bold text-xl font-poppins">
                            Student Artistic Recreational Activities Society
                        </h2>
                        <p className="text-gray-700 text-sm">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus obcaecati magni voluptates nihil iure quaerat.
                        </p>
                        <button className="bg-[#003482] text-white px-5 py-0.5 my-2 text-base rounded-full">
                            Saras Brochure
                        </button>
                    </div>
                </div>
                <div
                    className="w-2/6 bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(244, 248, 254, 1), rgba(244, 248, 254, 0)), url(${head})`,
                        width: '40%',
                        backgroundPosition: 'right center',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Slide1;
