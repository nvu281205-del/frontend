
import Navmenu from './Navmenu/Navmenu.jsx';
import './App.css'
import { useState } from 'react'
import Header from './Head/Header.jsx'
import Maincontent from './Maincontent/Maincontent.jsx';
import Footer from './Footer/Footer.jsx';
function App() {
  const[Language,Setlanguage]=useState("vi");
  return ( 
   <>
    <Header Language={Language} Setlanguage={Setlanguage}></Header>
    <Navmenu Language={Language} ></Navmenu>
    <Maincontent Language={Language}></Maincontent>
    <Footer/>
   </>
  )
}

export default App
