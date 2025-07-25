import React from 'react';
import comms from "../assets/images/comms.png"; 

const ThreeComponent = () => {
    return (
        <div className="flex flex-col p-6 overflow-y-auto max-w-full">
            <div className="flex flex-col text-xl text-[#660000]">
                <div className="flex items-center gap-5 font-semibold">
                    <div className="flex-shrink">About Department</div>
                    <div className="flex-grow border-t border-[#660000] border-bold" />
                </div>
                
                <div className="mt-9 text-lg text-justify text-[#474747]">
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
                    animi quidem commodi voluptas repellat obcaecati quos sint.
                    
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
                    animi quidem commodi voluptas repellat obcaecati quos sint.

                    <img className='mt-4 max-w-full h-auto' src={comms} alt="comms" />
                </div>
                
                <div className="mt-8 font-semibold">Dr. Pradeep Kumar Roy</div>
                <div className="text-base font-medium text-neutral-500">
                    HOD Computer Science
                </div>
            </div>
        </div>
    );
}

export default ThreeComponent;