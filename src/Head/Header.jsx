import "./Header.css"
import ticket from "../assets/ticket.png"
import searchIcon from "../assets/search.png"
import vietnamIcon from "../assets/vietnamIcon.webp"
export default function Header(){
    return (
        <>
            <header>
                <nav>
                    <h1>ticketbox</h1>

                    <div className="search-container">
                             <img id="searchIcon" src={searchIcon} alt="search" />
                        <input type="text" placeholder="Bạn muốn tìm gì hôm nay?"/>
                        <span ></span>
                        <button >Tìm kiếm</button>
                    </div>
<div style={{display:"flex",gap:"20px",marginRight:"20px"}}>
                     <div>  <button className="eventCreate">Tạo sự kiện</button></div>
                     
                    <div className="MyTicket">
                   <img src={ticket} alt="Myticket" />
                   <button>Vé của tôi</button>
                    </div>

                    <div className="Login">
                  <button>Đăng nhập</button>
                  <span></span>
                  <button>Đăng ký</button>
                    </div>

                    <div className="Language">
                    <img src={vietnamIcon} alt="Vietnam" />
                    <button>▼</button>
                    <div className="Choose">
                    </div>
                    </div>
  </div>                  
                </nav>
            </header>
        </>
    )
}