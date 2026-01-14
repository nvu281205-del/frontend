
import './Detail.css'
import Schedule from './Schedule'
import { useParams } from 'react-router-dom'
import Organizer from './Organizer'
import Detailticket from './Detailticket'
export default function Detail(){
    const {id}= useParams()
    return (
        <>
        <Detailticket id={id}/>
        <div className='info'>
        <Schedule id={id}/>
         <Organizer id={id}/>
         </div>
        </>
    )
}