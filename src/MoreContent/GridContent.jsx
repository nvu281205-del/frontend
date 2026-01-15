import Content from "../Maincontent/Content";
import './GridContent.css'
export default function GridContent({data}){
    return (
        <> 
        <div className="Grid">
          {data.map((i)=>(<Content {...i} key={i.id}/>))}
          </div>
        </>
    )
}