import Directorimg from "../../assets/images/Hod.png"
export default function DirectorImg(){
    return (
        <div className=" min-w-[15rem]">
            <img src= {Directorimg} alt="Image" />
            <div className="flex justify-center mt-4 h-12 rounded-3xl w-full bg-[#003482] text-white font-bold text-[1.2rem] "><button>
                Hod Profile
            </button></div>
        </div>
    )
}