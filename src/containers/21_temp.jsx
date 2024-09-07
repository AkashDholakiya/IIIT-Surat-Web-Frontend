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

const Entrepreneurship = () => {
    return (
        // words
        <div className="px-24 relative overflow-hidden">
            <div className="mt-6">
                <div className="flex flex-col text-xl text-[#660000] max-md:max-w-full">
                    <div className="flex items-center gap-5 max-md:flex-wrap font-semibold">
                        <div className="flex-shrink">SSIP Gujarat gov. policy</div>
                        <div className="flex-grow border-t border-[#660000] border-bold" />
                    </div>
                    <div className="mt-9 text-lg text-justify text-[#474747] max-md:max-w-full">
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


            {/* profile */}
            <div className="flex mt-10">
                <div className="min-w-[15rem] mr-8">
                    <div className="w-[15rem] h-[15rem] overflow-hidden">
                        <img src={fimg} alt="samp" className="object-cover object-top w-full h-full" />
                    </div>
                    <button className='mt-4 h-12 rounded-3xl w-full bg-[#003482] text-white font-semibold text-lg'>
                        SSIP Coordinator Profile
                    </button>
                </div>
                <div>
                    <h1 className="text-2xl text-[#932323] font-bold">Dr Nishad Deshpande</h1>
                    <Info title="Ph.D, Communication Networks,">
                        IISc, Bangalore, India (ECE)
                    </Info>
                    <Info title="email id">
                        <i>pradeepkroy@iiitsurat.ac.in</i>
                    </Info>
                    <Info>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad saepe sed reprehenderit blanditiis! Magnam, obcaecati! Dignissimos mollitia nostrum rem fugit, aspernatur, in soluta laudantium quasi iste minus voluptatem corporis fuga. Vel consequuntur necessitatibus aliquid in nobis hic aspernatur deleniti obcaecati ea, velit fugit asperiores nam earum reiciendis odit magnam sapiente repudiandae porro labore dolore quas sit veniam ipsum fugiat! Veritatis ab, eveniet omnis vero, sit nisi impedit id excepturi asperiores nesciunt similique libero autem eaque eius voluptatem veniam molestias ut. Commodi, fugit voluptatibus nemo error molestias aliquid enim rem amet sed placeat hic nostrum sequi id repellat, temporibus ab?
                        <img className='absolute bottom-100 right-0 pr-24' src={comms} alt="comms" />
                    </Info>

                </div>
            </div>


            {/* grants */}
            <div className="mt-10 px-10 py-5">
                <div className='flex flex-col border-l-4 border-[#660000] text-[#660000] pl-4'>
                    <p className='font-semibold text-2xl'>SSIP Grants</p>
                    <p>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</p>
                </div>
                <div className='flex overflow-x-auto mt-10'>
                    <div className='flex flex-col p-1 w-96 mr-5'>
                        <div className="relative w-96">
                            <img src="/images/sample-2.svg" alt="sample" />
                        </div>
                        <div className="px-5 w-full mt-5">
                            <h1 className='text-medium font-semibold text-[#660000]'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</h1>
                            <p className="mt-4 text-[#474747]">Lorem ipsum, dolor sit amet consecte adipisic elit. Asperiores quasi imp reprehenderit sapiente cum voluptas. Tempore corrupti. <span className='font-semibold underline cursor-pointer'>Read More</span></p>
                        </div>
                    </div>
                    <div className='flex flex-col p-1 w-96 mr-5'>
                        <div className="relative w-96">
                            <img src="/images/sample-2.svg" alt="sample" />
                        </div>
                        <div className="px-5 w-full mt-5">
                            <h1 className='text-medium font-semibold text-[#660000]'>Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores.</h1>
                            <p className="mt-4 text-[#474747]">Lorem ipsum, dolor sit amet consecte adipisic elit. Asperiores quasi imp reprehenderit sapiente cum voluptas. Tempore corrupti.  <span className='font-semibold underline cursor-pointer'>Read More</span></p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Entrepreneurship;
