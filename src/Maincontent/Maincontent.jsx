
import {AE, Music, Others, Ta} from "./data"
import Banner from './Banner'
import Special from './Special'
import "./Maincontent.css"
import City from "./City";
import Section from "./Section";
import ForYou from "./ForYou"
import ThisWeekend from "./ThisWeekend"
import VP from "./VP";
import Cities from "./Cities";
export default function Maincontent({Language}) { 
    return (
          <main>
        <Banner  Language={Language} /> 
        <Special Language={Language} category='Special'titleEn='Special events' titleVi='Sự kiện đặc biệt'/>
        <ForYou  Language={Language} category='ForYou' titleEn='Top picks for you' titleVi='Dành cho bạn'/>
        <ThisWeekend  Language={Language} category1='ThisWeekend' category2='ThisMonth' />
        <VP/>
       <Section Language={Language} category='Music' titleEn="Music" titleVi="Nhạc sống"/>
       <Section Language={Language} category='TheaterandArt' titleEn="Theater & Art" titleVi="Sân khấu và nghệ thuật"/>
       <Section Language={Language} category='AttandExp' titleEn="Attraction & Experience" titleVi="Tham quan và trải nghiệm"/>
       <Section Language={Language} category='Others' titleEn="Others" titleVi="Thể loại khác"/>
        <Cities  Language={Language} category='City' titleEn="Exciting Destination" titleVi="Điểm đến thú vị"/>  
        </main>
        
    )
}