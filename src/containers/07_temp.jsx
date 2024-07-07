
import data from "./data"
  

const SevenComponent=()=>{
    const {sevendata}=data;

    return(
        <div className="flex flex-col w-full overflow-y">
            <div className="h-4/6 w-11/12 mx-auto">
                        {/* <div className="w-full mx-auto">
                          <h1 className="text-2xl font-bold text-red-800">Latest Seminar and Achivements</h1> 
                          
                        </div> */}
                        <PlaylistView cardsData={sevendata} />
                    </div>
                    
                    <div className="h-3/6 mt-5">
                      <div className="h-full w-11/12 mx-auto ">
                      <div className="flex items-center mb-2">
                            <div className="w-1 bg-red-800 h-8 rounded mr-4"></div>
                            
                            <div className="w-full mx-auto">
                                <h1 className="text-xl font-bold text-red-800">Events and Achivement Gallery</h1> 
                                <p className="text-red-800 text-sm">Lorem ipsum, dolor sit amet consecte adipisicing elit Asperiores</p>
                            </div>
                            </div>
                          <Members 
                            cardsData={sevendata}
                          />
                      </div>
                  </div>
        </div>
    );
};

const PlaylistView = ({ cardsData }) => {
    return (
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex w-full space-x-4 my-1">
          {cardsData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              imgUrl={item.imgUrl}
              date={item.date}
            />
          ))}
        </div>
      </div>
    );
  };
  
  const Card = ({ title, description, imgUrl, date }) => {
    return (
      <div className="bg-lightBlue m-3 py-1 px-2 rounded-lg flex-none md:w-1/2 lg:w-1/4 scrollbar-hide">
        <div className="pb-2 pt-2">
          <div className="w-full h-full rounded-lg overflow-hidden mx-auto relative">
            <div className="absolute top-2 left-2 text-xs bg-white text-blue-800 font-semibold px-2  rounded-full">
              {date}
            </div>
            <img
              className="w-full h-26 object-cover bg-lightBlue"
              src={imgUrl}
              alt={title}
            />
          </div>
        </div>
        <div className="text-black font-semibold text py-3 mx-auto w-11/12 text-justify">{title}</div>
        <div className="text-black text-sm w-11/12 mx-auto text-justify">
          {description}
        </div>
        <div className="text-black text-sm w-11/12 mx-auto text-justify">
          <a href="https://www.google.com" className="text-blue-600 font-semibold hover:underline">Read more</a>
        </div>
      </div>
    );
  };

  
  
  const Members = ({ cardsData }) => {
    return (
      <div className="text-red-900 w-full  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {cardsData.map((item, index) => {
            return (
              <Cards
                key={index}
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            );
          })}
        </div>
      </div>
    );
  };
  const Cards = ({ title, description, imgUrl }) => {
    return (
      <div className="relative bg-lightBlue m-3 py-1 px-2 rounded-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover bg-lightBlue rounded-lg "
          src={imgUrl}
          alt={title}
        />
        <div className="absolute bottom-0 left-0 w-full p-4">
          <div className="text-white font-semibold text-sm ">{title}</div>
          <div className="text-white text-sm">{description}</div>
        </div>
      </div>
    );
  };
  

export default SevenComponent;