import "./Header.css"
import ticket from "../assets/ticket.png"
import searchIcon from "../assets/search.png"
import vietnamIcon from "../assets/vietnamIcon.webp"
import englishIcon from "../assets/englishIcon.png"
import {useState} from "react"
export default function Header({Setlanguage,Language}) {//Destructering props để truyền thuộc tính  
  const[change,setChange]=useState("")
  function handleChange(e){
    setChange(e.target.value);
  }
    return (
        <>
            <header>
                <nav>
                    <h1>ticketbox</h1>
                    <div className="search-container">
                             <img id="searchIcon" src={searchIcon} alt="search" />
                        {Language==="vi"?    
                        (<><input type="text" value={change} placeholder="Bạn tìm gì hôm nay?" onChange={handleChange}/>
                        <span ></span>
                        <button >Tìm kiếm</button></>): (<><input type="text" placeholder="What are you looking for?"/>
                        <span ></span>
                        <button style={{marginRight:"10px"}}>Search</button></>)}
                    </div>
                   <div style={{display:"flex",gap:"20px",marginRight:"20px"}}>
                     <div>  <button className="eventCreate">{Language==="vi"?"Tạo sự kiện":"Create event"}</button></div>
                     
                    <div className="MyTicket">
                   <img src={ticket} alt="Myticket" />
                   <button>{Language==="vi"?"Vé của tôi":"My ticket"}</button>
                    </div>
                    <div className="Login">
                     {Language==="en"?
                     (<><button>Login</button>
                     <span></span>
                     <button>Register</button></>):    
                 (<><button>Đăng nhập</button>
                  <span></span>
                  <button>Đăng ký</button></>)}
                    </div>

                    <div className="Language">
                {Language==="vi"? <img src={vietnamIcon} alt="Vietnam" />: <img src={englishIcon} alt="Vietnam" />}   
                    <button>▼</button>
                    <div className="Choose" hidden>
                    <button onClick={()=>Setlanguage("vi")}>
                      <img src={vietnamIcon} alt="Vietnam" />
                      <span>Tiếng việt</span>
                    </button>
                    <button onClick={()=>Setlanguage("en")}>
                        <img src={englishIcon} alt="English" />
                       <span>English</span>
                        </button>
                    </div>
                    </div>
                </div>                  
                </nav>
                <nav>

                </nav>
            </header>
        </>
    )
}