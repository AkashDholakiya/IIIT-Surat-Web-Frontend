import Info from "./utils/info"
import PlaylistView from "./Hostelchief"
import data from "../../Data/cardsData.js"
import StudentCoordinator from "./StudentCoordinator";
export default function StudentC(){
    const {peoples}=data;
    const {roles}=data;
    return (
      <div className="flex-col mt-6">
        <div>
          <Info title="Student" email="xyz@gmail.com" />
          <PlaylistView cardsData={peoples} />
        </div>
        <div>
          <Info title="Student" email="xyz@gmail.com" />
          <PlaylistView cardsData={peoples} />
        </div>
        <div>
          <Info title="Student" email="xyz@gmail.com" />
          <PlaylistView cardsData={peoples} />
        </div>
        <div>
          <Info title="Student" email="xyz@gmail.com" />
          <PlaylistView cardsData={peoples} />
        </div>
        <StudentCoordinator title={"Student Coordinator"}
                 cardsData={roles}/>
      </div>
    );
}