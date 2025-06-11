import PlaylistView from "../components/cards/cards";
import data from "../containers/data"

const Page =()=>{
  const adj_proffessor = data.hod;
  return (
    <>
    <div className="pt-20 flex px-24 flex-col max-md:w-full relative">
            <div className="flex flex-col text-xl text-[#660000] max-md:max-w-full">
                <div className="flex items-center gap-5 max-md:flex-wrap font-semibold">
                    <div className="flex-shrink">Adjunct Faculty</div>
                    <div className="flex-grow border-t border-[#660000] border-bold" />
                </div>
                <div className="mt-7"></div>
                <PlaylistView cardsData={adj_proffessor} /> 
            </div>
        </div>
    </>
  )
}
export default Page;