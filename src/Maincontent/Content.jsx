import dateimg from "../assets/date.png"
import "./Content.css"
export default function Content({title,imgSrc,price,date}){
    return (
<>
<div className="content">
<img src={imgSrc} alt={title} />
<div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
<h3>{title}</h3>
    <strong>{price}</strong>
<div className="Date">
 <img src={dateimg} alt="" />
    <span>{date}</span>
</div>
</div>
</div>
</>        
    );
}