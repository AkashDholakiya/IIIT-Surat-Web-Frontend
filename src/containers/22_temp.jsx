import React from 'react'
// import data from "./data"; 

const Startups = () => {
  const focusCardsData = [
    {
      title: "Vysion Technology",
      description: "Vysion Technology aims to contribute towards developing India by solving the root problems hindering the development pace. Our quest for strengthening the nation is the driving force behind our Innovations. We aspire to revolutionize digital education and support efficient energy production. We strive to contribute to building superior infrastructure and cleaner, greener, and smarter cities. ",
      imgUrl: `/images/vysion.jpg`,
      weblink : "https://techvysion.com/"
    },
    {
      title: "Kasper Tech",
      description: "Kasper Tech is an Urban Automation Startup founded by a team of passionate Engineers. We manifest in creating smart services for homes, offices and automobiles. Our vision is  to bring automation technology to people at modest estimates while thriving to build what we call a futuristic present.",
      imgUrl: `/images/kaspertech.png`,
      weblink : "https://www.thekaspertech.com/"
    }
  
  ];

  return (
    <div className="h-4/6 w-11/12 mx-auto">

    <PlaylistView cardsData={focusCardsData} />
  </div>
  )
}
const PlaylistView = ({ cardsData }) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="grid space-x-4 my-2">
        {cardsData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
            link={item.weblink}
          />
        ))}
      </div>
    </div>
  );
};
const Card = ({ title, description, imgUrl, link }) => {
  return (
    <div className="bg-lightBlue m-3 py-1 px-2 rounded-lg ">
      <div className="pb-2 h-42 pt-2">
        <div className="w-full h-full rounded-lg overflow-hidden mx-auto">
          <img
            className="w-full object-cover bg-lightBlue"
            src={imgUrl}
            alt={title}
          />
        </div>
      </div>
      <div className="text-red-900 font-semibold  py-3 mx-auto w-11/12 text-justify">{title}</div>
      <div className="text-black text-sm w-11/12 mx-auto text-justify">
        {description}
      </div>
      <div className="text-black text-sm w-11/12 mx-auto text-justify">
        <a href={`${link}`} target='_blank' className="text-blue-600 font-semibold hover:underline">Read more</a>
      </div>
    </div>
  );
};
export default Startups;