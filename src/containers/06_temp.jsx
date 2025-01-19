import FinalDiv from "../components/cards/coordinatorCard";
import Playlist from "../components/cards/cards";
import data from "./data";

const SixComponent=()=>{
    const {focusCardsData}=data;
    const {roles}=data; 
    const {hod}=data
    return(
        <div className="flex flex-col w-full overflow-y">
            <div className="h-4/6 w-11/12 mx-auto">
                        
                        <PlaylistView cardsData={focusCardsData} />
                    </div>
                    <FinalDiv
                      title={"Equipment and instrument available"}
                      cardsData={roles}
                      para={''}
                    />
                    <div className='w-full h-full my-4'>
                        <div className="flex flex-col  pl-10 pr-10 mb-4">
                            <div className="flex items-center mb-2">
                                <div className="w-1 bg-red-800 h-8 rounded mr-4"></div>
                                
                                <div className="w-full mx-auto">
                                    <h1 className="text-2xl font-semibold text-red-800">Lab Assistants, Computer Science Enginnering</h1> 
                                    <p className="text-red-800  text-base">Lab Assistants, Computer Science Enginnering</p>
                                </div>
                            </div>
    
                        </div>
                        <div className="h-2/6 mt-5">
                            <div className="h-full w-11/12 mx-auto ">
                                <Playlist 
                                    cardsData={hod}
                                />
                            </div>
                        </div>
                    </div>
        </div>
    );
};

const PlaylistView = ({ cardsData }) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex space-x-4 my-2 px-4 md:px-0">
        {cardsData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, description, imgUrl }) => {
  return (
    <div className="bg-white shadow-lg m-3 p-4 rounded-lg flex-none w-64 md:w-1/2 lg:w-1/4">
      <div className="pb-2 pt-2">
        <div className="w-full h-40 md:h-48 rounded-lg overflow-hidden mx-auto">
          <img
            className="w-full h-full object-cover"
            src={imgUrl}
            alt={title}
          />
        </div>
      </div>
      <div className="text-black font-semibold text-lg text-center py-3">
        {title}
      </div>
      <div className="text-black text-sm text-center px-2">
        {description}
      </div>
      <div className="text-blue-600 text-sm font-semibold text-center pt-3">
        <a href="https://www.google.com/" className="hover:underline">Read more</a>
      </div>
    </div>
  );
};

export default SixComponent;