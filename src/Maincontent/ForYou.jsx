import {FY} from './data.js'
import Content from "./Content.jsx";
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function ForYou({Language,titleEn,titleVi,category}){
const[data,setData]=useState([])
useEffect(()=>{
    axios.get(`http://localhost:3000/events?category=${category}`)
    .then(res=>setData(res.data))
    .catch(err=>console.log(err));
},[category])
    return (
        <>
         <div className="ForYou">
        <span className="topic">{Language==="vi"?titleVi:titleEn}</span>
          <div style={{display:"flex", gap:"10px",justifyContent:"center"}}>
             {data.map((i)=>(<Content {...i} key={i.title} Language={Language}/>))}</div>
        </div>
        </>
    )
}