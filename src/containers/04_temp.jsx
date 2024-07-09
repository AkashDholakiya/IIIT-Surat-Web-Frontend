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
        <div className="ml-16">
            <div className="min-w-[15rem]">
                <img src={fimg} alt="Image" />
                <div className="flex justify-center mt-4 h-12 rounded-3xl w-full bg-[#003482] text-white font-bold text-[1.2rem]">
                    <button>Hod Profile</button>
                </div>
            </div>
            <h1 className="text-3xl text-[#932323] font-bold">Pradeep Kumar roy</h1>
            <Info title="Ph.D, Communication Networks,">
                IISc, Bangalore, India (ECE)</Info>
            <Info title="email id">pradeepkroy@iiitsurat.ac.in</Info>
            <Info>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad saepe sed reprehenderit blanditiis! Magnam, obcaecati! Dignissimos mollitia nostrum rem fugit, aspernatur, in soluta laudantium quasi iste minus voluptatem corporis fuga. Vel consequuntur necessitatibus aliquid in nobis hic aspernatur deleniti obcaecati ea, velit fugit asperiores nam earum reiciendis odit magnam sapiente repudiandae porro labore dolore quas sit veniam ipsum fugiat! Veritatis ab, eveniet omnis vero, sit nisi impedit id excepturi asperiores nesciunt similique libero autem eaque eius voluptatem veniam molestias ut. Commodi, fugit voluptatibus nemo error molestias aliquid enim rem amet sed placeat hic nostrum sequi id repellat, temporibus ab?</Info>
            <Info>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate placeat officia repellendus dolorem incidunt possimus pariatur. In odio maiores temporibus vero esse quasi vitae nobis et quo? Nobis, et aliquam? Aspernatur tempore voluptatum voluptatem totam enim reprehenderit dolorem facere qui, quia harum. Magnam aperiam voluptates voluptatem, voluptate nihil rerum sequi beatae soluta atque minima mollitia ex in reiciendis nulla fugit quam deserunt magni ipsam neque. Debitis consectetur dolor rerum nulla molestiae dolores, vitae quod reprehenderit alias commodi, vel fugiat voluptatum id accusamus officia suscipit quidem consequatur quibusdam quos, aperiam neque temporibus architecto iure. Dolorem repellendus, voluptates fugiat fuga nam in!</Info>
        </div>
    );
};

export default FourComponent;
