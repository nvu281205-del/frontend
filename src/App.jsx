
import Navmenu from './Navmenu/Navmenu.jsx';
import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { useState } from 'react'
import Header from './Head/Header.jsx'
import Maincontent from './Maincontent/Maincontent.jsx';
import Footer from './Footer/Footer.jsx';
import MoreConTent from "./MoreContent/MoreContent.jsx"
import { LanguageContext, Token } from './Context.jsx';
import Detail from './Detail/Detail.jsx';
import MoreContent from './MoreContent/MoreContent.jsx';
import BuyTicket from './BuyTicket/BuyTicket.jsx';
import BookTicket from './BuyTicket/BookTicket.jsx';
import ScrolltoTop from './ScrolltoTop.jsx';
import MyTicket from './Head/MyTicket.jsx';
import Account from './Head/Account.jsx';
function App() {
  const[Language,setLanguage]=useState("vi");
  return ( 
   <>
   <LanguageContext.Provider value={{Language,setLanguage}}>
   

    <BrowserRouter>
   <ScrolltoTop/>
    <Header Language={Language} Setlanguage={setLanguage}></Header>
    <Routes>
        <Route path="/" element={ <>
           <Navmenu Language={Language} ></Navmenu>
          <Maincontent/> 
          </>}/>

       <Route path="/MoreContent" element={<MoreContent Language={Language}/>}/>
      <Route path='/Detail/:id' element={<>
           <Navmenu Language={Language} ></Navmenu>
      <Detail/>
      </>}>
        </Route>

        <Route path='/BuyTicket/:id' element={<BuyTicket/>}></Route>
        <Route path='/BookTicket/:id' element={<BookTicket/>}></Route>
         <Route path='/MyTicket' element={<MyTicket/>}></Route>
         <Route path='/Account' element={<Account/>}/>
         
    </Routes>
      <Footer/>
    </BrowserRouter>
   
   </LanguageContext.Provider>
   </>
  )
}

export default App
