
import "./Maincontent.css"
export default function Maincontent({imgSrc,title,index}) {
    return (
        <>
        <main>
            <div className="ImgVideo">
                <img src={imgSrc} alt={title} />
                <button className="detail-button">Xem chi tiết</button>
                {index%2===0 &&( 
                <button class="back-button">
                <span class="arrow-left">&#8249;</span>
                 </button>)}
                 {index%2!==0 &&(
                 <button class="next-button">
                 <span class="arrow-right">&#8250;</span>
                </button>)}
            </div>
        </main>
        </>
    )
}