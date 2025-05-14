import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoadingScreen } from './components/Screenloading'
import "./index.css"
import { Navbar } from './components/Navbar'
import { MobilMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

function App() {
  const [isloaded,setisloaded]=useState(false);
  const [menuopen,setmenuopen]=useState(false);

  return (
    <>
     {!isloaded && <LoadingScreen onComplete={()=>setisloaded(true)}/>}{" "}
      <div
      className={`min-h-screen transition-opacity duration-700 ${
        isloaded?"opacity-100":"opacity-0"
      }bg-black text-gray-100`}
      >
        <Navbar menuopen={menuopen} setmenuopen={setmenuopen}/>
        <MobilMenu menuopen={menuopen} setmenuopen={setmenuopen}/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        
      </div>
    </>
  )
}

export default App
