import "./Navmenu.css"
import { Link } from "react-router-dom"
export default function Navmenu({Language}) {
    return (
        <>
        {Language==="vi"?
        (<nav className="Navmenu">
          <Link to="/MoreConTent" className="link"><span>Nhạc sống</span></Link>
          <Link to="/MoreConTent" className="link"><span>Sân khấu & Nghệ thuật</span></Link>
          <Link to="/MoreConTent" className="link"><span>Thể Thao</span></Link>
          <Link to="/MoreConTent" className="link"><span>Khác</span></Link>
          <Link to="/MoreConTent" className="link"><span>Vé bán lại</span></Link>
      </nav>):(
        <nav className="Navmenu">
   <Link to="/MoreConTent" className="link"><span>Music</span></Link>
          <Link to="/MoreConTent" className="link"><span>Theater & Art</span></Link>
          <Link to="/MoreConTent" className="link"><span>Sport</span></Link>
          <Link to="/MoreConTent" className="link"><span>Others</span></Link>
          <Link to="/MoreConTent" className="link"><span>Resale Ticket</span></Link>
      </nav>
      )
      }
        </>
    )
}