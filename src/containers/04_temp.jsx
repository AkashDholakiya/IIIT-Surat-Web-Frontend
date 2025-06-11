import comms from "../assets/images/comms.png";

const Info = ({ title, children }) => {
    return (
        <div>
            <h1 className="text-lg mt-5 text-[#003482] font-semibold">{title}</h1>
            <p className="text-lg font-normal text-gray-700 text-justify">{children}</p>
        </div>
    );
};

const FourComponent = ({ HOD }) => {
    return (
        <div className="flex px-24 relative overflow-hidden max-md:flex-col max-md:px-6">
            <div className="min-w-[15rem] mr-8">
                <div className="w-[15rem] h-[15rem] overflow-hidden rounded-lg shadow-lg">
                    <img src={HOD.fmig} alt="HOD" className="object-cover object-top w-full h-full" />
                </div>
                <button className='mt-4 h-12 rounded-3xl w-full bg-[#003482] text-white font-semibold text-lg'>HOD Profile</button>
            </div>
            <div className="flex-1">
                <h1 className="text-2xl text-[#932323] font-bold">{HOD.name}</h1>
                <Info title={HOD.title.headline}>{HOD.title.subline}</Info>
                <Info title="Email ID"><i>{HOD.email}</i></Info>
                <Info>{HOD.moreInfo}</Info>
            </div>
            <img className='absolute bottom-0 right-0 pr-24 max-md:hidden' src={comms} alt="comms" />
        </div>
    );
};

export default FourComponent;
