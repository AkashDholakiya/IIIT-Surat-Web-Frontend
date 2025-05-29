import clubData from "../Data/clubsData";

const Events = ({ childContent, parentContent }) => {
  const selectedClub =
    clubData[parentContent]?.[childContent] ||
    Object.values(clubData[parentContent] || {})[0];

  const events = selectedClub?.events || [];

  return (
    <div className="w-full px-6 py-4 flex flex-col space-y-6">
      <h2 className="text-3xl font-bold text-center text-blue-700">Events</h2>

      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4">
          {events.map((event, index) => (
            <Card
              key={index}
              title={event.title}
              description={event.description}
              imgUrl={event.imgUrl}
              date={event.date}
              time={event.time}
              venue={event.venue}
              link={event.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, description, imgUrl, date, time, venue, link }) => (
  <div className="bg-white shadow-md rounded-xl w-72 xs:w-36 flex-none hover:scale-105 transition-transform duration-300 overflow-hidden">
    <img src={imgUrl} alt={title} className="w-full h-40 object-cover" />
    
    <div className="p-4 space-y-1">
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      {date && <p className="text-sm text-gray-500">{date} | {time}</p>}
      {venue && <p className="text-sm text-gray-500">📍 {venue}</p>}
      <p className="text-sm text-gray-700">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm font-semibold hover:underline"
        >
          Read more →
        </a>
      )}
    </div>
  </div>
);

export default Events;
