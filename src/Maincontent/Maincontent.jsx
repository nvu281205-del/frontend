import ImgVideo from "./ImgVideo"
import {data} from "./data"
import {useState} from "react"
import "./Maincontent.css"
export default function Maincontent({Language}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <>
          <main>
        <div className='Container'>
    {data.map((item,index)=>(<ImgVideo {...item} index={index} key={item.title} Language={Language}/>))}
        </div>
         <div className="dots">
   {data.map((_,index)=>(<span className={`dot ${index===currentIndex ? "active":""}`} key={index} onClick={()=>setCurrentIndex(index)}></span>))}
       </div>
        </main>
        </>
    )
}