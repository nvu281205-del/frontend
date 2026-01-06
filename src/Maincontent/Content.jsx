import dateimg from "../assets/date.png"
import "./Content.css"
export default function Content({title,imgSrc,price,date}){
      function formatDate(dateString) { 
        const date = new Date(dateString);
         const day = date.getDate(); 
         const month = date.getMonth() + 1;
    const year = date.getFullYear();
     return `${day} tháng ${month} năm ${year}`;
     } 
    return (
<>
<div className="content">
<img src={imgSrc} alt={title} />
<div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
<h3>{title}</h3>
    <strong>Từ {price}<sup>đ</sup></strong>
<div className="Date">
 <img src={dateimg} alt="" />
    <span>{formatDate(date)}</span>
</div>
</div>
</div>
</>        
    );
}