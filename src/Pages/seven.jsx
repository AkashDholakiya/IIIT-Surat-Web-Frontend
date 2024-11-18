import data from "../containers/data";

const SevenComponent = () => {
  const { sevendata } = data;

  return (
    <div className="flex flex-col w-full overflow-y-auto p-4 scrollbar-hide"> {/* Add scrollbar-hide class */}
      <div className="w-full mb-5">
        <h1 className="text-xl font-semibold text-[#660000] text-left">Latest Seminar and Achievements</h1>
        <PlaylistView cardsData={sevendata} />
      </div>

      <div className="mt-5">
        <div className="w-full">
          <div className="flex items-center mb-2">
            <div className="w-1 bg-[#660000] h-10 rounded mr-4"></div>
            <div className="w-full mx-auto">
              <h1 className="text-xl font-semibold text-[#660000]">Events and Achievement Gallery</h1>
              <p className="text-[#660000] text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <Members cardsData={sevendata} />
        </div>
      </div>
    </div>
  );
};

const PlaylistView = ({ cardsData }) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex w-full space-x-4 my-1 overflow-x-auto">
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
      <div className="pb-2 pt-2 relative">
        <span className="absolute top-2 left-2 text-xs bg-white text-blue-800 font-semibold px-2 rounded-full">{date}</span>
        <img
          className="w-full h-[150px] object-cover bg-lightBlue rounded-lg"
          src={imgUrl}
          alt={title}
        />
      </div>
      <div className="text-black font-semibold py-3 mx-auto w-11/12 text-center">{title}</div>
      <div className="text-black text-sm w-11/12 mx-auto text-center mb-2">{description}</div>
      <a href="https://www.google.com" className="text-blue-600 font-semibold hover:underline">Read more</a>
    </div>
  );
};

const Members = ({ cardsData }) => {
  return (
    <div className="text-red-900 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsData.map((item, index) => (
          <Cards
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

const Cards = ({ title, description, imgUrl }) => {
  return (
    <div className="relative bg-lightBlue m-3 py-1 px-2 rounded-lg overflow-hidden">
      <img
        className="w-full h-[200px] object-cover bg-lightBlue rounded-lg"
        src={imgUrl}
        alt={title}
      />
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
        <div className="text-white font-semibold text-sm">{title}</div>
        <div className="text-white text-sm">{description}</div>
      </div>
    </div>
  );
};

export default SevenComponent;