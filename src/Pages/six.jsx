import FinalDiv from "../components/cards/coordinatorCard";
import Playlist from "../components/cards/cards";
import data from "../containers/data";

const SixComponent = () => {
  const { focusCardsData } = data;
  const { roles } = data;
  const { hod } = data;

  return (
    <div className="flex flex-col w-full overflow-y-auto p-4">
      <div className="w-full max-w-5xl mx-auto mb-4">
        <PlaylistView cardsData={focusCardsData} />
      </div>
      <FinalDiv
        title={"Equipment and Instrument Available"}
        cardsData={roles}
        para={''}
      />
      <div className='w-full h-full my-4'>
        <div className="flex flex-col p-4 mb-4">
          <div className="flex items-center mb-2">
            <div className="w-1 bg-red-800 h-8 rounded mr-4"></div>
            <div className="w-full mx-auto">
              <h1 className="text-2xl font-semibold text-red-800">Lab Assistants, Computer Science Engineering</h1>
              <p className="text-red-800 text-base">Lab Assistants, Computer Science Engineering</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Playlist cardsData={hod} />
        </div>
      </div>
    </div>
  );
};

const PlaylistView = ({ cardsData }) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-2">
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
    <div className="bg-lightBlue rounded-lg p-4 flex flex-col items-center">
      <img
        className="w-full h-auto max-w-[250px] rounded-lg object-cover bg-lightBlue" 
        src={imgUrl} 
        alt={title} 
      />
      <div className="text-blue-800 font-semibold text-base pt-4 pb-1 text-center">{title}</div>
      <div className="text-black text-sm text-center mb-8 px-2">
        {description}
      </div>
    </div>
  );
};

export default SixComponent;