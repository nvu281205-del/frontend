import { useState } from "react"
import "./BuyTicket.css"
export  default function BuyTicket(){
  const[count,setCount]=useState(0);
  const disabledcount=count<=0;
    return (
        <>     <div className="contentbuy">
               <div className="ReturnBt">
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="back"><path fillRule="evenodd" clipRule="evenodd" d="M8.707 3.793a1 1 0 010 1.414L4.414 9.5H18a1 1 0 110 2H4.414l4.293 4.293a1 1 0 11-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z" fill="#fff"></path></svg>
               <span>Trở về</span>
               </div>
               <div className="ticketform">
         <span className="Choseticket">Chọn vé</span>
         <div className="infoticket">
            <div className="pricetype">
            <span>Early Access (check in before 21:00)</span>
            <span className="price">999.000 đ</span>
            </div>
           <div className="quantity">
             <button disabled={disabledcount} onClick={()=>setCount((count)=>count-1)}>-</button>
             <button>{count}</button>
             <button onClick={()=>setCount((count)=>count+1)}>+</button>
           </div>
         </div>
               </div>          
               <div className="aside">
            <div className="asidehead">
             <span>ARGY @ APLUS SAIGON - SOFT OPENING WEEKENDS</span>
            </div>
            <div className="asidebody">
            <div className="asidedate">
            <svg className="path" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M6.25 0a1 1 0 011 1v1h6V1a1 1 0 112 0v1h1a4 4 0 014 4v2h-20V6a4 4 0 014-4h1V1a1 1 0 011-1zM20.25 10h-20v8a2 2 0 002 2h16a2 2 0 002-2v-8z" />
         </svg>      
           <span>20:00, 23 Tháng 01, 2026 - 03:00, 24 Tháng 01, 2026</span> 
            </div>
            <div className="asidelocate">
      <svg className="location-icon"  viewBox="0 0 24 24"  width="24" height="24"  fill="currentColor">
  <path  fillRule="evenodd"  clipRule="evenodd"   d="M4.031 3.307a10.514 10.514 0 0113.937 0c4.485 3.945 4.955 10.854 1.058 15.392l-7.015 8.17a1.333 1.333 0 01-2.023 0l-7.015-8.17C-.923 14.161-.454 7.252 4.031 3.307zM11 14.667A3.333 3.333 0 1011 8a3.333 3.333 0 000 6.666z" />
      </svg>      
      <span>APLUS SAIGON</span>   
            </div>
            </div>
            <div className="asideprice">
             <span>Giá vé</span>
             <div className="tickettype">
             <span>Early Access (check in before 21:00)</span>
             <span className="price">999.000 đ</span>
             </div>
            </div>
            <div className="Buyticket">
            <button  className="Buybutton">Vui lòng chọn vé</button>
            </div>
            </div>  
               </div>         
        </>
    )
}