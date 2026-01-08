import { useEffect, useState } from "react";
import Content from './Content.jsx'
import {TM,TW} from './data.js'
import axios from "axios";
export default function ThisWeekend({Language,category1,category2}){
   const[date,setDate]=useState("Weekend"); 
  const category=date==="Weekend"?category1:category2
      const [event,setEvent]=useState([])
     useEffect(()=>{
     axios.get(`http://localhost:3000/events?category=${category}`)
     .then(res=>setEvent(res.data))
    .catch(err=>console.log(err))
    },[category])
    return (
        <>
          <div className="ThisWeekend">
                  <div className="special-topic">
                    <span onClick={()=>setDate("Weekend")}>{Language==="vi"?"Cuối tuần này":"This weekend"}</span>
                      <span onClick={()=>setDate("Month")}>{Language==="vi"?"Tháng này":"This month"}</span>
                         <div className={date==="Month"?"greenlineM":"greenlineW"}></div> 
                         <div className="Detail">  <span>{Language==="vi"?"Xem thêm":"View more"}</span> <span style={{fontSize:"25px",marginBottom:"5px"}}>&#8250;</span>    </div>
                  </div>
                 <div style={{display:"flex", gap:"10px",justifyContent:"center",marginTop:"10px"}}>
                     {event.map((i)=>(<Content {...i} key={i.title}/>))}
                </div>
                </div>
        </>
    )
}