import { useEffect, useState } from 'react';
import './MyTicket.css'
import emptyticket from '/emptyticket.png'
import Music1 from '/Music/img1.jpg'
import GridContent from '../MoreContent/GridContent';
export default function MyTicket(){
    const [recommend,setRecommend]=useState([])
     useEffect(() => {
            fetch("http://localhost:3000/events?category=Recommend")
              .then(res => res.json())
              .then(json => setRecommend(json));
          }, []);
    return (
        <div className="Myticket">       
            <div className="Mytickettitle">Vé của tôi</div>
        <div className='emptyticket'>
            <img src={emptyticket} alt="" />
            Bạn chưa có vé nào
        </div>  
          <div className='myticketdetail'>
        <div className='mydetailcontain'>
        <div className="myticketinfo">
        <div className="mydetailtitle">
       ok
        </div>
        <div className="mydetaildate">
    <svg className="path" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M6.25 0a1 1 0 011 1v1h6V1a1 1 0 112 0v1h1a4 4 0 014 4v2h-20V6a4 4 0 014-4h1V1a1 1 0 011-1zM20.25 10h-20v8a2 2 0 002 2h16a2 2 0 002-2v-8z" />
    </svg>
      <span>30h</span>
      <span>31h</span>  
        </div>
        <div className="mydetaillocate">
<svg className="location-icon"  viewBox="0 0 24 24"  width="24" height="24"  fill="currentColor">
  <path  fillRule="evenodd"  clipRule="evenodd"   d="M4.031 3.307a10.514 10.514 0 0113.937 0c4.485 3.945 4.955 10.854 1.058 15.392l-7.015 8.17a1.333 1.333 0 01-2.023 0l-7.015-8.17C-.923 14.161-.454 7.252 4.031 3.307zM11 14.667A3.333 3.333 0 1011 8a3.333 3.333 0 000 6.666z" />
</svg>
         <div>
        <span>title</span>
        <div className='mydetailadd'>
            locate
        </div>
        </div>
        </div>
        </div>  
       
       <div  className='myticketpic'>
       <img src={Music1} alt="" />
       </div>
       <div className='mycircletop'></div>
       <div className='mycirclebottom'></div>
<svg className='myline' width="4" height="415" viewBox="0 0 4 415" fill="none" xmlns="http://www.w3.org/2000/svg" id="vertical-dashed"><path stroke="#27272A" strokeWidth="4" strokeLinecap="round" strokeDasharray="4 10" d="M2 2v411"></path></svg>
        </div>
        </div>
        <div style={{backgroundColor:"#27272A"}} className="Recommend">
                   <span style={{marginTop:"35px"}} >Có thể bạn cũng thích</span>
                   <div className="recomcontent">    
                          <GridContent data={recommend}/>  
                        </div>
        </div>  
        </div>
    )
}