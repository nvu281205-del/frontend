
import Navmenu from './Navmenu/Navmenu.jsx';
import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { useState } from 'react'
import Header from './Head/Header.jsx'
import Maincontent from './Maincontent/Maincontent.jsx';
import Footer from './Footer/Footer.jsx';
import MoreConTent from "./MoreContent/MoreContent.jsx"
function App() {
  const[Language,setLanguage]=useState("vi");
  return ( 
   <>
    <Header Language={Language} Setlanguage={setLanguage}></Header>
    <BrowserRouter>
      <Navmenu Language={Language} ></Navmenu>
    <Routes>
        <Route path="/" element={<Maincontent/>}/>
      <Route path="/MoreContent" element={<MoreConTent/>}/>
    </Routes>
    </BrowserRouter>
    
    <Footer Language={Language} Setlanguage={setLanguage}/>
   
   </>
  )
}

export default App
