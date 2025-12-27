import "./Banner.css"
export default function Banner({imgSrc,title}){
    return(
        <>
        <div className="cityBanner">
        <img src={imgSrc} className="Background" />
        <span>{title}</span>
        </div>
        </>
    )
}