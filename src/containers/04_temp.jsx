import React from 'react';
import fimg from "../assets/images/case.png";

const Info = ({ title, children }) => {
    return (
        <div>
            <h1 className="text-[1.3rem] mt-[1.5rem] text-[#003482] font-semibold">{title}</h1>
            <p className="text-[1.2rem] font-normal text-gray-700 text-justify">{children}</p>
        </div>
    );
};

const FourComponent = () => {
    return (
        <div className="flex ml-16">
            <div className="min-w-[15rem] mr-8">
                <div className="w-[15rem] h-[15rem] overflow-hidden">
                    <img src={fimg} alt="samp" className="object-cover object-top w-full h-full" />
                </div>
                <div className="flex justify-center mt-4 h-12 rounded-3xl w-full bg-[#003482] text-white font-bold text-[1.2rem]">
                    <button>Hod Profile</button>
                </div>
            </div>
            <div>
                <h1 className="text-3xl text-[#932323] font-bold">Pradeep Kumar Roy</h1>
                <Info title="Ph.D, Communication Networks,">
                    IISc, Bangalore, India (ECE)
                </Info>
                <Info title="email id">pradeepkroy@iiitsurat.ac.in</Info>
                <Info>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad saepe sed reprehenderit blanditiis! Magnam, obcaecati! Dignissimos mollitia nostrum rem fugit, aspernatur, in soluta laudantium quasi iste minus voluptatem corporis fuga. Vel consequuntur necessitatibus aliquid in nobis hic aspernatur deleniti obcaecati ea, velit fugit asperiores nam earum reiciendis odit magnam sapiente repudiandae porro labore dolore quas sit veniam ipsum fugiat! Veritatis ab, eveniet omnis vero, sit nisi impedit id excepturi asperiores nesciunt similique libero autem eaque eius voluptatem veniam molestias ut. Commodi, fugit voluptatibus nemo error molestias aliquid enim rem amet sed placeat hic nostrum sequi id repellat, temporibus ab?</Info>
            </div>
        </div>
    );
};

export default FourComponent;
