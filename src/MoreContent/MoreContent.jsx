import { useEffect,useRef,useState } from "react"
import { useLocation } from "react-router-dom"
import Content from "../Maincontent/Content";
import './MoreConTent.css'
import GridContent from "./GridContent";
import empty from "/empty.webp"
import axios from "axios";
export default function MoreContent(){
    const[recommend,setRecommend]=useState([])
    const[data,setData]=useState([]);
    const location=useLocation();
    const param=new URLSearchParams(location.search);
    const title=param.get('title');
    const category =param.get('category');
    const city=param.get('city')
    const [selectedCity,setSelectedCity]=useState()
    const [selectedCate,setSelectedCate]=useState()
    const [showForm, setShowForm] = useState(false);
    const formRef=useRef();
    useEffect(()=>{
     if(!selectedCate&&!selectedCity){
     let url = "http://localhost:3000/events";
     if (category) { 
     url += `?category=${category}`;
 } else if (title) {
     url += `?title=${title}`; 
}else if(city){
    url+=`?city=${city}`
}

     fetch(url)
     .then(res=>res.json())
     .then(json=>setData(json));
    }
},[category,title,selectedCate,selectedCity,city])
    const fetchEvent=async (city,category)=>{
     const res = await axios.get("http://localhost:3000/events",{
          params:{city,category}
     });
     setData(res.data)
    }
    useEffect(() => {
    fetch("http://localhost:3000/events?category=Recommend")
      .then(res => res.json())
      .then(json => setRecommend(json));
  }, []);
    return (
        <>
        <div className="morecontent">
        <div className="Result">
        <span>Kết quả tìm kiếm: </span>
        <div className="filters">
          <div className="filter" onClick={()=>setShowForm(!showForm)}>
 <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><g clipPath="url(#filter-white_svg__clip0_598_500909)"><path d="M1.25 0a1 1 0 00-1 1v2a1 1 0 00.27.684l7.23 7.711V19a1 1 0 001.447.894l3-1.5a1 1 0 00.553-.894v-6.105l7.23-7.711A1 1 0 0020.25 3V1a1 1 0 00-1-1h-18z" fill="#fff"></path></g><defs><clipPath id="filter-white_svg__clip0_598_500909"><path fill="#fff" transform="translate(.25)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
        <span>Bộ lọc</span> 
          </div>
      {showForm&&(
          <div className="filterform" ref={formRef} >
        <span>Vị trí</span>
        <div className="Locate">
        <div className="radiobt" >
             <input type="radio" className="radiobutton" defaultChecked value={"Hà Nội"} onChange={(e)=>setSelectedCity(e.target.value)} name="locate"/>
        <span>Hà Nội</span>
        </div>
        <div className="radiobt"  >
             <input type="radio" className="radiobutton"  value={"Hồ Chí Minh"} onChange={(e)=>setSelectedCity(e.target.value)} name="locate"/>
        <span>Hồ Chí Minh</span>
        </div>
        <div className="radiobt"  >
             <input type="radio" className="radiobutton"  value={"Đà Lạt"} onChange={(e)=>setSelectedCity(e.target.value)} name="locate"/>
        <span>Đà Lạt</span>
        </div>
        <div className="radiobt" >
             <input type="radio" className="radiobutton"  value={"Other"} onChange={(e)=>setSelectedCity(e.target.value)} name="locate"/>
        <span>Vị trí khác</span>
        </div>
        </div>
        <hr className="dashed-line" />
        <div className="categoryform">
         <span>Thể loại</span>
         <div className="category">
        <button onClick={()=>setSelectedCate("Music")} className="categorybutton">Nhạc sống</button> 
        <button onClick={()=>setSelectedCate("TheaterandArt")} className="categorybutton">Sân khấu và nghệ thuật</button> 
        <button  onClick={()=>setSelectedCate("Sport")}className="categorybutton">Thể thao</button> 
        <button  onClick={()=>setSelectedCate("Nhạc sống")}className="categorybutton">Hội thảo & Workshop</button> 
        <button  onClick={()=>setSelectedCate("AttandExp")}className="categorybutton">Tham quan & Trải nghiệm</button> 
        <button  onClick={()=>setSelectedCate("Other")}className="categorybutton">Khác</button> 
          </div>
        </div>
       <button onClick={()=>{
          fetchEvent(selectedCity,selectedCate);
          setShowForm(false);
       }} className="confirmfilter">Áp Dụng</button>
        
        </div> 
      )}     
        </div>
        </div>
       {data.length === 0 && (
          <>
  <div className="empty">
    <img src={empty} alt="empty" />
    <span>Rất tiếc! Không tìm thấy kết quả nào</span>
    <p>Bạn hãy thử điều chỉnh lại bộ lọc, sử dụng các từ khóa phổ biến hơn hoặc khám phá các sự kiện nổi bật bên dưới</p>
  </div>
  
      <div className="Recommend">
  <span>Gợi ý dành cho bạn</span>
  <div className="recomcontent">    
         <GridContent data={recommend}/>  
       </div>
       </div>
       </>
)}
        <div className="contain">
       <GridContent data={data}/>
       </div>
       
       </div> 
        </>
    )
}