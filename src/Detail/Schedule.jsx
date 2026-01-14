import { useEffect, useState } from 'react';
import Organizer from './Organizer'
import './Schedule.css'
import axios from 'axios';
export default function Schedule({id}){
     const[eventid,setEventid]=useState({});
    useEffect(()=>{
        axios.get(`http://localhost:3000/events/${id}`)
        .then(res=>setEventid(res.data))
        .catch(err=>console.log(err))
    },[id])
    return (
        <>
        <div className='Schedule'> 
            <div className="ScheduleHead">
                <span>Lịch diễn</span>
            </div>
            <div className='ScheduleBody'>
            <div className='ScheduleDay'>
                <div className="ScheduleDate">
                <span>{eventid.timeRange}</span>
                <span className='ticketday'>24 Tháng 01,2026</span>
                </div>
                <button>Mua vé ngay</button>
            </div>
            <div className="Ticketsinfo">
             <span>Thông tin vé</span>
             {eventid.tickets?.map((ticket)=>(
                <div key={ticket.id} className="ticketinfo">
                <span>{ticket.type}</span>
                <div className="ticketprice">
                    <span>{ticket.price}đ</span>
                </div>
             </div>
             ))}
            </div>
            </div>
            </div>
        
     
        </>
    )
}