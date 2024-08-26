
import StudentCoordinator from "../components/hostelLife/StudentCoordinator"
import PlaylistView from "../components/hostelLife/Hostelchief"
import data from "../Data/cardsData.js"

export default function HostelCommitee(){
    const {peoples}=data;
    const {roles}=data;
    return <>
        <div className="mt-10 w-full " >
            <div className="flex gap-10" >
                <PlaylistView cardsData={peoples}/>
            </div>
                <StudentCoordinator
                 title={"Student Coordinator"}
                 cardsData={roles}
                />
            
        </div>
    </>
}