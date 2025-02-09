import PublicationDiv from '../components/cards/publicationComp_card';
import { data } from "../Data/publicationData";   //change this file later👍

const Patents = () => {
    const { patentsdata } = data;

    return (
        <div className="flex flex-col w-full overflow-y">

            <PublicationDiv
                title={"Patents"}
                cardsData={patentsdata}
                para={''}
            />

            {/* <PlaylistView
                title={"Latest research"}
                cardsData={focusCardsData}
                para={''}
            /> */}

        </div>
    );
};

// const PlaylistView = ({ title, cardsData, para }) => {
//     return (
//         <div className="w-full overflow-x-auto scrollbar-hide">
//             { }
//             <FinalDiv
//                 title={title}
//                 cardsData={[]}
//                 para={para}
//             />
//             <div className="flex space-x-4 my-2">
//                 {cardsData.map((item, index) => (
//                     <Card
//                         key={index}
//                         title={item.title}
//                         description={item.description}
//                         imgUrl={item.imgUrl}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// const Card = ({ title, description, imgUrl }) => {
//     return (
//         <div className="bg-lightBlue m-3 py-1 px-2 rounded-lg flex-none md:w-1/2 lg:w-1/4 scrollbar-hide">
//             <div className="pb-2 pt-2">
//                 <div className="w-full h-full rounded-lg overflow-hidden mx-auto">
//                     <img
//                         className="w-full h-26 object-cover bg-lightBlue"
//                         src={imgUrl}
//                         alt={title}
//                     />
//                 </div>
//             </div>
//             <div className="text-black font-semibold py-3 mx-auto w-11/12 text-justify">{title}</div>
//             <div className="text-black text-sm w-11/12 mx-auto text-justify">
//                 {description}
//             </div>
//             <div className="text-black text-sm w-11/12 mx-auto text-justify">
//                 <a href="https://www.google.com/" className="text-blue-600 font-semibold hover:underline">Read more</a>
//             </div>
//         </div>
//     );
// };

export default Patents;