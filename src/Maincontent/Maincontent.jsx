import ImgVideo from "./ImgVideo"
import {AE, data,data2,ForYou, Music, Others, Ta, ThisMonth, ThisWeekend} from "./data"
import {useState} from "react"
import "./Maincontent.css"
import Thumb from "./Thumb";
import Content from "./Content";
import VPBank from "../assets/VPBank/VPBank DAY.webp"
export default function Maincontent({Language}) {
    const [mainIndex, setMainIndex] = useState(0);   // cho ImgVideo
const [thumbIndex, setThumbIndex] = useState(0); // cho Thumb
const[date,setDate]=useState("Weekend");
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
        <span className="topic">{Language==="vi"?"Sự kiện đặc biệt":"Special events"}</span>
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

        <div className="ForYou">
          <span className="topic"> Dành cho bạn</span>
          <div style={{display:"flex", gap:"10px",justifyContent:"center"}}>
             {ForYou.map((i)=>(<Content {...i} key={i.title}/>))}</div>
        </div>

        <div className="ThisWeekend">
          <div className="special-topic">
            <span onClick={()=>setDate("Weekend")}>Cuối tuần này</span>
                <span onClick={()=>setDate("Month")}>Tháng này</span>
                 <div className={date==="Month"?"greenlineM":"greenlineW"}></div> 
                 <div className="Detail">  <span>Xem thêm</span> <span style={{fontSize:"25px",marginBottom:"5px"}}>&#8250;</span>    </div>
          </div>
         <div style={{display:"flex", gap:"10px",justifyContent:"center",marginTop:"10px"}}>
             {(date==="Weekend" ? ThisWeekend:ThisMonth).map((i)=>(<Content {...i} key={i.title}/>))}
        </div>
        </div>

        <div className="VPBank">
          <img src={VPBank} alt="VPBank Day" />
        </div>

       <div className="ForYou">
          <span className="topic">Nhạc sống</span>
          <div style={{display:"flex", gap:"10px",justifyContent:"center",marginTop:"10px"}}>
             {Music.map((i)=>(<Content {...i} key={i.title}/>))}</div>
          <div className="Detail"><span>Xem thêm</span> <span style={{fontSize:"25px",marginBottom:"5px"}}>&#8250;</span></div>    
        </div>

        <div className="ForYou">
          <span className="topic">Sân khấu và nghệ thuật</span>
          <div style={{display:"flex", gap:"10px",justifyContent:"center",marginTop:"10px"}}>
             {Ta.map((i)=>(<Content {...i} key={i.title}/>))}</div>
          <div className="Detail"><span>Xem thêm</span> <span style={{fontSize:"25px",marginBottom:"5px"}}>&#8250;</span></div>    
        </div>

        <div className="ForYou">
          <span className="topic">Tham quan và trải nghiệm </span>
          <div style={{display:"flex", gap:"10px",justifyContent:"center",marginTop:"10px"}}>
             {AE.map((i)=>(<Content {...i} key={i.title}/>))}</div>
          <div className="Detail"><span>Xem thêm</span> <span style={{fontSize:"25px",marginBottom:"5px"}}>&#8250;</span></div>    
        </div>

        <div className="ForYou">
          <span className="topic">Thể loại khác </span>
          <div style={{display:"flex", gap:"10px",justifyContent:"center",marginTop:"10px"}}>
             {Others.map((i)=>(<Content {...i} key={i.title}/>))}</div>
          <div className="Detail"><span>Xem thêm</span> <span style={{fontSize:"25px",marginBottom:"5px"}}>&#8250;</span></div>    
        </div>

        </main>
        
    )
}