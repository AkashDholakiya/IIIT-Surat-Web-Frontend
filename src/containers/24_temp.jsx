
import data from "../Data/memData";

const SarasComponent = ({ childContent, parentContent }) => {
  console.log("Parent:", parentContent);
  var clubKey = parentContent?.toLowerCase();
  if(childContent==="GDG" || childContent==="MARC" || childContent==="LCS"){
    clubKey = childContent.toLowerCase();
  }
  console.log("Child:", clubKey);
  const clubData = data[clubKey];

  if (!clubData) {
    return <div className="text-center text-red-500 text-xl">Club data not found!</div>;
  }
  
  const {
    lead = [],
    coordinators = [],
    members = []
  } = clubData;
  console.log("clubData", clubData);
  console.log("lead", lead);

  return (
    <div className="flex flex-col w-full overflow-y">
      <div className="w-full mx-auto">
        <Playlist cardsData={Array.isArray(lead) ? lead : [lead]} title="Lead" />
      </div>

      <Division
        title="Coordinators"
        cardsData={Array.isArray(coordinators) ? coordinators : []}
      />

      <Division
        title="Members"
        cardsData={Array.isArray(members) ? members : []}
      />
    </div>
  );
};


const Division = ({ title, cardsData = [] }) => {
  const safeData = Array.isArray(cardsData) ? cardsData : [];

  return (
    <div className="my-6 lg:mx-10 md:ml-10 mr-4 sm:mx-10  ml-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="ml-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {safeData.map((card, index) => (
          <div key={index} className="p-4 border rounded-2xl shadow text-center bg-white">
            <img
              src={card.image}
              alt={card.name}
              className="h-24 w-24 object-cover rounded-full mx-auto mb-2"
            />
            <h3 className="font-medium">{card.name}</h3>
            <p className="text-sm font-semibold">{card.dept}</p>
            {card.subDept && <p className="text-xs text-gray-600">{card.subDept}</p>}
            {card.role && <p className="text-xs italic text-gray-500">{card.role}</p>}
            <p className="text-sm">{card.year}</p>
            {card.email && (
              <p className="text-xs mt-1">
                <a href={`mailto:${card.email}`} className="text-blue-600 underline">
                  {card.email}
                </a>
              </p>
            )}
            {card.phone && <p className="text-xs">{card.phone}</p>}

            {/* Social links */}
            {card.socials && (
              <div className="mt-1 flex justify-center space-x-3 text-blue-500 text-sm">
                {card.socials.linkedin && (
                  <a href={card.socials.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                )}
                {card.socials.twitter && (
                  <a href={card.socials.twitter} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


const Playlist = ({ cardsData = [], title }) => {
  const safeData = Array.isArray(cardsData) ? cardsData : [];

  return (
    <div className="my-8 lg:mx-10 md:ml-10 mr-4 sm:mx-10  ml-10">
      {title && (
        <h2 className="text-2xl font-bold  mb-4">{title}</h2>
      )}
      <div className="ml-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {safeData.map((card, index) => (
          <div
            key={index}
            className="p-4 border rounded-3xl shadow text-center bg-white"
          >
            <img
              src={card.image}
              alt={card.name}
              className="h-28 w-28 rounded-full object-cover mx-auto mb-2"
            />
            <h3 className="text-lg font-semibold">{card.name}</h3>
            <p className="text-sm font-medium">{card.dept}</p>
            {card.subDept && <p className="text-sm text-gray-600">{card.subDept}</p>}
            {card.role && <p className="text-sm italic text-gray-500">{card.role}</p>}
            <p className="text-sm">{card.year}</p>
            {card.email && (
              <p className="text-xs mt-2">
                <a href={`mailto:${card.email}`} className="text-blue-600 underline">
                  {card.email}
                </a>
              </p>
            )}
            {card.phone && <p className="text-xs">{card.phone}</p>}

            {/* Social links */}
            {card.socials && (
              <div className="mt-2 flex justify-center space-x-3 text-blue-500">
                {card.socials.linkedin && (
                  <a href={card.socials.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> {/* Use font-awesome or any icon lib */}
                  </a>
                )}
                {card.socials.twitter && (
                  <a href={card.socials.twitter} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SarasComponent;
