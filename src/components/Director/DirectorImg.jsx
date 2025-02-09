import Directorimg from "../../assets/images/Hod.png";

export default function DirectorImg() {
  return (
    <div className="flex flex-col items-center w-full max-w-xs md:max-w-sm lg:max-w-md">
      <img className="w-full rounded-xl" src={Directorimg} alt="director" />
      <div className="flex justify-center mt-4 h-12 rounded-3xl w-full bg-[#003482] text-white font-bold text-lg">
        <button className="px-4 py-2">Hod Profile</button>
      </div>
    </div>
  );
}
