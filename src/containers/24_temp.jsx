import PlaylistView from "../components/cards/cards";
import FinalDiv from "../components/cards/coordinatorCard";

import React from 'react';
import data from "./data";



const SarasComponent=(content)=>{
    console.log(content.content)
    const {peoples}=data;
    const {roles}=data;
    const renderContent = () => {
        if (content.content === 'Sports') {
            return roles;
          } else if (content.content === 'Cultural') {
            return peoples;
          } else {
            return peoples;
          }
      };
    return(
        <div className="flex flex-col w-full overflow-y ">
                <div className="h-3/6 w-5/6">
                    <PlaylistView cardsData={renderContent()} />
                </div>
                <FinalDiv
                  title={"Coordinator"}
                  cardsData={roles}
                />

                <FinalDiv
                  title={"Members"}
                  cardsData={roles}
                />
                
          </div>
    );
};

export default SarasComponent;