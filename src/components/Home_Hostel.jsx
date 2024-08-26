import React from 'react';
import { facilities } from "../Data/facilities.js";
import HostelFacilities from '../components/hostelLife/HostelFacilities.jsx';
export default function Home(){
    
    return (
        <div className='w-full'>
        <ul >
            {facilities.map((facilities)=>{
               return <HostelFacilities key={facilities.id}  {...facilities}/>
            })}
        </ul></div>
    )
}
