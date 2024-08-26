import { useState } from "react";
import HostelImage from "../components/hostelLife/HostelImage";
import Sidebar from "../components/hostelLife/Sidebar";
import Home from "../components/Home_Hostel";
import HostelCommitee from "../components/Hostel_committee";
import StudentC from "../components/hostelLife/StudentC";
function App() {

  const[selected,isselected]=useState(0);
  const[ishead,setishead]=useState(true);

  function selectedtask(id){
    isselected(id);
    if(id>0){
      setishead(false);
    }
    if(id===0){
      setishead(true);
    }
  }
  let content=<Home/>;

  if(selected===1){
    content=<HostelCommitee/>
  }
  if(selected===2){
    content=<StudentC/>
  }

  return (
    <>
      {ishead && <HostelImage/>}
      <main className="flex mt-8">
        <Sidebar onSelect={selectedtask} selectedIndex={selected} />
        {content}
      </main>
      
    </>
  );
}

export default App;
