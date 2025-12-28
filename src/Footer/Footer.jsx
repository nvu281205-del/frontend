import phone from "../assets/phone.svg"
import email from "../assets/email.svg"
import posi from "../assets/posi.svg"
import "./Footer.css"
import ggplay from "../assets/ggplay.png"
import appstore from "../assets/appstore.png"
import fb from "../assets/MXH/fb.png"
import ing from "../assets/MXH/in.png"
import ins from "../assets/MXH/ins.png"
import tiktok from "../assets/MXH/tik.png"
import haveno from "../assets/MXH/Ihavenoidea.png"
 import vietnam from "../assets/language/vn.svg"
import english from "../assets/language/en.svg"

export default function Footer(){
    return (
        <>
         <footer>
          <div className="footer">
        <div className="leftfoot">
          <div className="ph">
      <span className="nav">Hotline</span>
     <div className="ph1">
    <img src={phone}/>
    <span>Thứ 2 - Chủ nhật(0:00 - 24:00)</span></div>
          <strong>1900.281205</strong>
        </div>
        <div className="ph">
        <span className="nav">Email</span>
  <div className="ph1">
    <img src={email} alt="" />
    <span>nvu281205@gmai.com</span></div>
        </div>
         <div className="ph">
          <span className="nav">Văn phòng chính</span>
  <div className="ph1">
    <img src={posi} alt="" />
    <span>22,Rùa Hạ 2,Thanh Thùy,Thanh Oai,TP.Hà Nội</span></div>
         </div>
        </div>

        <div className="center">
        <div className="ph">
        <span className="nav">Dành cho khách hàng</span>
        <div className="ph1"><span>Điều khoản sử dụng cho khách hàng</span></div>
        </div>
         <div className="ph" style={{marginTop:"40px"}}>
        <span className="nav">Dành cho Ban tổ chức</span>
        <div className="ph1"><span>Điều khoản sử dụng cho ban tổ chức</span></div>
        </div>
        </div>

        <div className="rightfoot">
         <div className="ph">
        <span className="nav">Về công ty chúng tôi</span>
        <div className="ph1" style={{display:"flex",flexDirection:"column",gap:"10px"}}>
          <span >Quy chế hoạt động</span>
          <span >Chính sách bảo mật thông tin </span>
          <span >Cơ chế giải quyết tranh chấp khiếu nại</span>
          <span >Chính sách bảo mật thanh toán </span>
          <span >Chính sách đổi trả và kiểm hàng </span>
          <span >Điều kiện vận chuyển và giao nhận </span>
          <span >Phương thức thanh toán  </span>
          </div>
        </div>
        </div>
        </div>
             <hr/>
        <div className="multi">
         <div className="app">
        <span>Ứng dụng Ticketbox</span>
        <a> <img src={ggplay} alt="" /> </a>
          <a> <img src={appstore} alt="" /> </a>
        </div>
        <div className="app">
        <span>Ứng dụng check-in cho Ban tổ chức</span>
        <a> <img src={ggplay} alt="" /> </a>
          <a> <img src={appstore} alt="" /> </a>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:'20px'}}>
        <div className="fu">
          <span>Follow Us</span>
          <div className="MXH">
            <img src={ing} alt="" />
            <img src={ins} alt="" />
            <img src={fb} alt="" />
            <img src={tiktok} alt="" />
            <img src={haveno} alt="" />
          </div>
        </div>
        <div className="lan">
         <span>Ngôn ngữ</span>
         <div style={{display:"flex",gap:"5px"}}>
          <img style={{width:"40px",height:"40px"}} src={vietnam} alt="" />
           <img style={{width:"45px",height:"32px",marginTop:"3px"}} src={english} alt="" />
         </div>
        </div>
        </div>
        </div>
       
        </footer>
        </>
    )
}