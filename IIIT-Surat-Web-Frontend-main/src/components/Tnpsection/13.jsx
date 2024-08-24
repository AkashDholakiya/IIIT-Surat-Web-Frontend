import React from 'react';
import fimg from "../../assets/images/case.png";
import comms from "../../assets/images/comms.png"

const Info = ({ title, children }) => {
    return (
        <div>
            <h1 className="text-lg mt-5 text-[#003482] font-semibold">{title}</h1>
            <p className="text-lg font-normal text-gray-700 text-justify">{children}</p>
        </div>
    );
};

const Tnp13 = () => {
    return (
      <>
        <div className="flex px-24 relative overflow-hidden">
            <div className="min-w-[15rem] mr-8">
                <div className="w-[15rem] h-[15rem] overflow-hidden">
                    <img src={fimg} alt="samp" className="object-cover object-top w-full h-full" />
                </div>
                <button className='mt-4 h-12 rounded-3xl w-full bg-[#003482] text-white font-semibold text-lg'>Hod Profile</button>
            </div>
            <div>
                <h1 className="text-2xl text-[#932323] font-bold">Pradeep Kumar Roy</h1>
                <Info title="Ph.D, Communication Networks,">
                    IISc, Bangalore, India (ECE)
                </Info>
                <Info title="email id"><i>pradeepkroy@iiitsurat.ac.in</i></Info>
                <Info>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad saepe sed reprehenderit blanditiis! Magnam, obcaecati! Dignissimos mollitia nostrum rem fugit, aspernatur, in soluta laudantium quasi iste minus voluptatem corporis fuga. Vel consequuntur necessitatibus aliquid in nobis hic aspernatur deleniti obcaecati ea, velit fugit asperiores nam earum reiciendis odit magnam sapiente repudiandae porro labore dolore quas sit veniam ipsum fugiat! Veritatis ab, eveniet omnis vero, sit nisi impedit id excepturi asperiores nesciunt similique libero autem eaque eius voluptatem veniam molestias ut. Commodi, fugit voluptatibus nemo error molestias aliquid enim rem amet sed placeat hic nostrum sequi id repellat, temporibus ab?</Info>
            </div>
            <img className='absolute bottom-0 right-0 pr-24' src={comms} alt="comms" />
        </div>

<div className="flex flex-col px-20 -mt- w-full max-w-[100%] max-md:px-5">
       
<div className="mt-12 max-md:mt-10 max-md:max-w-full">
  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
   
    <div className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-2.5 text-xl font-semibold text-red-950 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-wrap">
          <div className="grow">About department</div>
        </div>
        <div className="mt-9 text-lg text-justify text-zinc-700 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          placeat fugiat necessitatibus. Et ab id minus tenetur consectetur
          molestias expedita minima delectus hic facere dicta rem fugit
          labore repudiandae ad deleniti tempore deserunt quisquam unde,
          consequuntur quaerat voluptas? Eos adipisci sunt eaque delectus
          voluptatibus! Enim animi quidem perferendis amet blanditiis
          commodi ex temporibus maxime dolore mollitia earum soluta non
          inventore harum at, dicta beatae quasi eius maiores numquam dolor
          sint odit consequuntur hic! Veniam sapiente accusantium tempora
          voluptas. Cumque magnam id, quod sunt optio pariatur ad dolor
          quis provident omnis nemo placeat quo rerum iste sed sequi eaque
          animi quidem commodi voluptas repellat obcaecati quos sint
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          placeat fugiat necessitatibus. Et ab id minus tenetur consectetur
          molestias expedita minima delectus hic facere dicta rem fugit
          labore repudiandae ad deleniti tempore deserunt quisquam unde,
          consequuntur quaerat voluptas? Eos adipisci sunt eaque delectus
          voluptatibus! Enim animi quidem perferendis amet blanditiis
          commodi ex temporibus maxime dolore mollitia earum soluta non
          inventore harum at, dicta beatae quasi eius maiores numquam dolor
          sint odit consequuntur hic! Veniam sapiente accusantium tempora
          voluptas. Cumque magnam id, quod sunt optio pariatur ad dolor
          quis provident omnis nemo placeat quo rerum iste sed sequi eaque
          animi quidem commodi voluptas repellat obcaecati quos sint
        </div>
        
      </div>
    </div>
  </div>
</div>
</div>
</>
    );
};

export default Tnp13;

