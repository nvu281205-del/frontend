import ImgVideo from "./ImgVideo"
import {data,data2} from "./data"
import {useState} from "react"
import "./Maincontent.css"
import Thumb from "./Thumb";
export default function Maincontent({Language}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentitem=data[currentIndex];
    const nextitem=data[(currentIndex+1)%data.length];
    return (
          <main>
        <div className='Container'>
        <ImgVideo {...currentitem} key={currentitem.title} position="left" Language={Language} setCurrentIndex={setCurrentIndex}/>
        <ImgVideo {...nextitem} key={nextitem.title} position="right" Language={Language} setCurrentIndex={setCurrentIndex}/>
        </div>
         <div className="dots">
   {data.map((_,index)=>(<span className={`dot ${index===currentIndex ? "active":""}`} key={index} onClick={()=>setCurrentIndex(index)}></span>))}
       </div>
        <div className="Thumb">
          <span>Special events</span>
            <div className="thumb-images">
    {data2.map((item)=>(<Thumb {...item} key={item.title}/>))}
          </div>
        </div>
        </main>
        
    )
}