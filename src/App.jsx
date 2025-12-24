
import Navmenu from './Navmenu/Navmenu.jsx';
import './App.css'
import { useState } from 'react'
import Header from './Head/Header.jsx'
import Maincontent from './Maincontent/Maincontent.jsx';
function App() {
  const[Language,Setlanguage]=useState("vi");
  return ( 
   <>
    <Header Language={Language} Setlanguage={Setlanguage}></Header>
    <Navmenu></Navmenu>
    <Maincontent Language={Language}></Maincontent>
   </>
  )
}

export default App
