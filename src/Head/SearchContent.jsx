import "./SearchContent.css"
import Music1 from "../assets/Music/img1.jpg"
import { useState } from "react";
export default function SearchContent({ref}){
     const[active,setActive]=useState("category");
    return(
        <>
        <div className="Search" ref={ref}>
       <div className="searchform">
          <div className="titleform">
               <span onClick={()=>setActive("category")} className={`spanactive ${active==="category"?"":"inactive"}`}>Khám phá theo Thể loại</span>
               <span onClick={()=>setActive("city")} className={`spanactive ${active==="city"?"":"inactive"}`}>Khám phá theo Thành phố</span>
          </div>
          <span className={active==="city"?"linecity":"linecate"}></span>
       </div>
       <div className="imgSearchForm">
          <div className="imgSearch">
               <img src={Music1} alt="" />
               <span>Nhạc sống</span>
          </div>
          <div className="imgSearch">
               <img src={Music1} alt="" />
               <span>Sân khấu và nghệ thuật</span>
          </div>
          <div className="imgSearch">
               <img src={Music1} alt="" />
               <span>Thể Thao</span>
          </div>
          <div className="imgSearch">
               <img src={Music1} alt="" />
               <span>Hội thảo và WorkShop</span>
          </div>
       </div>
       </div>
        </>
    )
}