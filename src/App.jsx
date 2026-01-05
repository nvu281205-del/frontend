
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
   
    <Routes>
        <Route path="/" element={ <>
           <Navmenu Language={Language} ></Navmenu>
          <Maincontent Language={Language}/> 
          </>}/>
      <Route path="/MoreConTent/:titleSearch" element={<MoreConTent Language={Language}/>}/>
    </Routes>
    </BrowserRouter>
    
    <Footer Language={Language} Setlanguage={setLanguage}/>
   
   </>
  )
}

export default App
