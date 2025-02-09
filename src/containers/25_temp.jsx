import FinalDiv from "../components/cards/coordinatorCard"
import data from "./data"

const Events=()=>{
    const {roles}=data;
    //console.log(roles);
    const {focusCardsData}=data;
    return (
        <div className="flex flex-col w-full overflow-y">
            <div className="h-3/6 lg:w-11/12 md:w-11/12 sm:w-full mx-auto ">
                <PlaylistView cardsData={focusCardsData} />
            </div>
            <FinalDiv
              title={"Minor Events"}
              cardsData={roles}
              para={'Lorem'}
            />
            <FinalDiv
              title={"Competition"}
              cardsData={roles}
              para={'Lorem'}
            />
        </div>
    )
}

const PlaylistView = ({ cardsData }) => {
    return (
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex  lg:max-w-lg space-x-4 my-1 ">
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
      <div className="bg-lightBlue my-1 w-90 px-2 rounded-lg flex-none scrollbar-hide">
      
        <div className="pb-2 pt-2">
          <div className="w-full h-40 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={imgUrl}
              alt={title}
            />
          </div>
        </div>
        
        <div className="text-black font-semibold text-base py-3">
          {title}
        </div>
        
        <div className="text-black text-sm">
          {description}
        </div>
        
        <div className="text-sm">
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
  
  
export default Events;