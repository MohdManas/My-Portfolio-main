import React, { useState } from 'react'
import "../NavBar/Nav.css"
import {FiMenu} from "react-icons/fi"
import {RiCloseFill} from "react-icons/ri"

const Nav = () => {

    const [visible,setVisible] = useState(false)

    const shadowVisible=()=>{
      const value = document.documentElement.scrollTop;
  
      if(value >50){
        setVisible(true)
      }
      else{
        setVisible(false)
      }
    }
  
    const [isBurgerOpen,setIsBurgerOpen] = useState(false)
  
  
   window.addEventListener("scroll",shadowVisible)
  
  return (
    <nav 
    style={visible ? 
    {boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} 
    : {boxShadow:"none"}}
    >
        <div className="nav-groups">
            <a href="#header" className='myName'>Mohammed Manas</a>

            <div className={isBurgerOpen ? "nav-links active" : "nav-links"}>
                <a href="#header">Home</a>
                <a href="#about">About me</a>
                <a href="#skills">Skills</a>
                <a href="#qualification">Qualification</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>

            <div className="hamburger" onClick={()=>setIsBurgerOpen(!isBurgerOpen)}>
              {isBurgerOpen ? <RiCloseFill /> : <FiMenu />}
            </div>
            
        </div>
    </nav>
  )
}

export default Nav