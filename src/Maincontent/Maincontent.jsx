import ImgVideo from "./ImgVideo"
import {data,data2} from "./data"
import {useState} from "react"
import "./Maincontent.css"
import Thumb from "./Thumb";
export default function Maincontent({Language}) {
    const [mainIndex, setMainIndex] = useState(0);   // cho ImgVideo
const [thumbIndex, setThumbIndex] = useState(0); // cho Thumb
    const currentitem=data[mainIndex];
    const nextitem=data[(mainIndex+1)%data.length];
    const VisibleThumb = data2.slice(thumbIndex,thumbIndex+5);
    return (
          <main>
        <div className='Container'>
        <ImgVideo {...currentitem} key={currentitem.title} position="left" Language={Language} setCurrentIndex={setMainIndex}/>
        <ImgVideo {...nextitem} key={nextitem.title} position="right" Language={Language} setCurrentIndex={setMainIndex}/>
        </div>
         <div className="dots">
   {data.map((_,index)=>(<span className={`dot ${index===mainIndex ? "active":""}`} key={index} onClick={()=>setMainIndex(index)}></span>))}
       </div>
        <div className="Thumb">
        {Language==="vi"?(<span>Sự kiện đặc biệt</span>):(<span>Special events</span>)}
            <div className="thumb-images">
    {VisibleThumb.map((item)=>(<Thumb {...item} key={item.title}/>))}
    {thumbIndex>0&&( <button className="prev-button" onClick={()=>setThumbIndex((thumbIndex)=>{
      if(thumbIndex-4<0){
        return 0;
      }
      return thumbIndex-4;
    })}>
        <span>&#8249;</span>
      </button>)}
       <button className="forward-button" onClick={()=>setThumbIndex((thumbIndex)=>{
        const MaxIndex=data2.length-5;
        if(thumbIndex+4<MaxIndex){
       return thumbIndex + 4;
       }
       return MaxIndex;
       })} disabled={thumbIndex >= data2.length - 5} >
      <span>&#8250;</span>
      </button>
          </div>
        </div>
        </main>
        
    )
}