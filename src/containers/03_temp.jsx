import comms from "../assets/images/comms.png";

const ThreeComponent = ({ about, Dep, HOD }) => {
    return (
        <div className="flex px-24 flex-col max-md:w-full relative">
            <div className="flex flex-col text-xl text-[#660000] max-md:max-w-full">
                <div className="flex items-center gap-5 max-md:flex-wrap font-semibold">
                    <div className="flex-shrink">About department</div>
                    <div className="flex-grow border-t border-[#660000] border-bold" />
                </div>
                <div
                    className="mt-9 text-lg text-justify text-[#474747] max-md:max-w-full"
                    dangerouslySetInnerHTML={{ __html: about }}
                />
                <img className='absolute bottom-20 right-20 pr-20 max-md:hidden' src={comms} alt="comms" />

                <div className="mt-8 font-semibold">{HOD}</div>
                <div className="text-base font-medium text-neutral-500">
                    HOD {Dep}
                </div>
            </div>
        </div>
    );
};

export default ThreeComponent;
