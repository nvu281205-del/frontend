import date from "../assets/date.png"
import "./Content.css"
export default function Content({title,imgSrc,price,Date}){
    return (
<>
<div className="content">
<img src={imgSrc} alt={title} />
<div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
<h3>{title}</h3>
    <strong>{price}</strong>
<div className="Date">
 <img src={date} alt="" />
    <span>{Date}</span>
</div>
</div>
</div>
</>        
    );
}