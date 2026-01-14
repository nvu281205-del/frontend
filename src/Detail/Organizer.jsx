import axios from "axios";
import { useEffect, useState } from "react";

export default function Organizer({id}){
      const[eventid,setEventid]=useState({});
        useEffect(()=>{
            axios.get(`http://localhost:3000/events/${id}`)
            .then(res=>setEventid(res.data))
            .catch(err=>console.log(err))
        },[id])
    return (
        <>
         <div className='Organizer'>
         <div className='OrganizerHead'>
             <span>Ban tổ chức</span>
         </div>
         <div className='OrganizerBody'>
            <img src={eventid.imgSrc} alt="" />
            <div className='Organizerinfo'>
              <span>{eventid.organizername}</span>
              <p>{eventid.organizerdes}</p>
            </div>
         </div>
        </div>
        </>
    )
}