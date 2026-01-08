import {banner} from '../Maincontent/data.js'
import City from './City'
export default function Cities({Language,titleVi,titleEn}){
    return (
        <>
        <div className="city">
         <span className="topic">{Language==="vi"?titleVi:titleEn}</span>
        <div style={{display:"flex",gap:"12px",justifyContent:"center",marginTop:"15px"}}>
         {banner.map((i)=>(<City Language={Language} key={i.title} {...i}/>))}
        </div>
        </div>
        </>
    )
}