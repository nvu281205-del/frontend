import "./Content.css"
export default function Content({title,imgSrc,price,Date}){
    return (
<>
<div className="content">
<img src={imgSrc} alt={title} />
<h3>{title}</h3>
<strong>{price}</strong>
<span>{Date}</span>
</div>
</>        
    );
}