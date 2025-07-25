import FinalDiv from "../components/cards/coordinatorCard"
import data from "./data"
import event from "../assets/images/bulb.png"
const Memory=()=>{
    const {roles}=data;
    //console.log(roles);
    const {focusCardsData}=data;
    return (
        <div>
            <div className="h-4/6 lg:w-11/12 md:w-11/12 sm:w-full ml-8 ">
                <PlaylistView cardsData={focusCardsData} />
            </div>
            <div className="flex flex-col  pl-10 pr-10 mb-4">
            <div className="flex items-center mb-2">
            <div className="w-1 bg-red-800 h-6 rounded mr-4"></div>
            
            <div className="w-full mx-auto">
                <h1 className="text-2xl font-semibold text-red-800">Previous Committees</h1> 
                <p className="text-red-800 ">Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores</p>
            </div>
            </div>
            <Cards 
            title="Lorem ipsum, dolor sit amet"
            description="Lorem ipsum, dolor sit amet consecte adipisicing elit. Asperiores quasi imp reprehenderit sapiente cum voluptas. Tempore corrupti."
            imgUrl={event}
            />
            </div>
            
        </div>
    )
}

const PlaylistView = ({ cardsData }) => {
    return (
        <div className="w-full">
        <div className="flex flex-wrap justify-start gap-4 my-1">
          {cardsData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              imgUrl={item.imgUrl}
              className="w-full " // Adjust width for responsiveness
            />
          ))}
        </div>
      </div>
      
    );
  };
  
  const Card = ({ title, description, imgUrl }) => {
    return (
      <div className="bg-lightBlue m-3 w-11/12 px-2 rounded-lg flex-none md:w-5/12 lg:w-5/12 sm:w-3/5 sm:w-full scrollbar-hide">
        <div className="pb-2 pt-2">
          <div className="w-full h-full rounded-lg overflow-hidden mx-auto">
            <img
              className="w-full h-56  object-cover bg-lightBlue rounder-lg"
              src={imgUrl}
              alt={title}
            />
          </div>
        </div>
        <div className="text-black font-semibold lg:text-base md:text-base sm:text-sm py-3 mx-auto w-11/12 text-justify">{title}</div>
        <div className="text-black lg:text-sm md:text-sm sm:text-xs w-11/12 mx-auto text-justify">
          {description}
        </div>
        <div className="text-black text-sm w-11/12 mx-auto text-justify">
          <a href="https://www.google.com/" className="text-blue-600 font-semibold hover:underline">Read more</a>
        </div>
      </div>
    );
  };
  
  const Cards = ({ title, description, imgUrl }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full  mx-auto">
        {/* Image Section */}
        <div className="w-full h-96">
          <img
            className="w-full h-full object-fit"
            src={imgUrl}
            alt={title}
          />
        </div>
        
        {/* Text Section */}
        <div className="p-4">
          {/* Title */}
          <h2 className="text-red-800 text-xl font-bold mb-2">{title}</h2>
          
          {/* Description */}
          <p className="text-gray-600 text-base mb-4">
            {description}
          </p>
  
          {/* Read More Link */}
          <a
            href="https://www.google.com/"
            className="text-blue-600 font-semibold hover:underline"
          >
            Read more
          </a>
        </div>
      </div>
    );
  };
  
  
export default Memory;