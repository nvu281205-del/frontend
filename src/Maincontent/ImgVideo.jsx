import "./ImgVideo.css"
import {useRef} from "react"
export default function ImgVideo({imgSrc, title, index,video,Language}) {
    const videoRef = useRef(null);
    return (
        <>
            <div className="ImgVideo">
                <img src={imgSrc} alt={title} />
                <video src={video} ref={videoRef}  onMouseEnter={()=>videoRef.current.play()} onMouseLeave={() => videoRef.current.pause()}></video>
           {Language==="vi"?(<button className="detail-button">Xem chi tiết</button>):(<button className="detail-button"> View Details</button>)}     
                {index%2===0 &&( 
                <button class="back-button">
                <span class="arrow-left">&#8249;</span>
                 </button>)}
                 {index%2!==0 &&(
                 <button class="next-button">
                 <span class="arrow-right">&#8250;</span>
                </button>)}
            </div>
        </>
    )
}