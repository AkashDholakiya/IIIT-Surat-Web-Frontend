import React from 'react';
import fimg from "../assets/images/case.png";
import comms from "../assets/images/comms.png";

const Info = ({ title, children }) => {
    return (
        <div>
            <h1 className="text-lg mt-5 text-[#003482] font-semibold">{title}</h1>
            <p className="text-lg font-normal text-gray-700 text-justify">{children}</p>
        </div>
    );
};

const FourComponent = () => {
    return (
        <div className="flex flex-col md:flex-row px-4 md:px-24 relative overflow-hidden">
            <div className="min-w-[15rem] mr-8 mb-4 md:mb-0">
                <div className="w-full h-[15rem] overflow-hidden">
                    <img src={fimg} alt="samp" className="object-cover object-top w-full h-full" />
                </div>
                <button className='mt-4 h-12 rounded-3xl w-full bg-[#003482] text-white font-semibold text-lg'>
                    Hod Profile
                </button>
            </div>
            <div className="flex-grow">
                <h1 className="text-2xl text-[#932323] font-bold">Pradeep Kumar Roy</h1>
                <Info title="Ph.D, Communication Networks,">
                    IISc, Bangalore, India (ECE)
                </Info>
                <Info title="Email ID">
                    <i>pradeepkroy@iiitsurat.ac.in</i>
                </Info>
                <Info>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad saepe sed reprehenderit blanditiis! Magnam, obcaecati! Dignissimos mollitia nostrum rem fugit, aspernatur, in soluta laudantium quasi iste minus voluptatem corporis fuga. Vel consequuntur necessitatibus aliquid in nobis hic aspernatur deleniti obcaecati ea, velit fugit asperiores nam earum reiciendis odit magnam sapiente repudiandae porro labore dolore quas sit veniam ipsum fugiat! Veritatis ab, eveniet omnis vero, sit nisi impedit id excepturi asperiores nesciunt similique libero autem eaque eius voluptatem veniam molestias ut. Commodi, fugit voluptatibus nemo error molestias aliquid enim rem amet sed placeat hic nostrum sequi id repellat, temporibus ab?
                </Info>
            </div>
            <img className='absolute bottom-0 right-0 pr-24 hidden md:block' src={comms} alt="comms" />
        </div>
    );
};

export default FourComponent;