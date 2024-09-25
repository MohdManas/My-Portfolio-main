import React, { useState } from 'react'
import "../NavBar/Nav.css"
import { FiMenu } from "react-icons/fi"
import { RiCloseFill } from "react-icons/ri"
// import { Space, Switch } from 'antd';

const Nav = () => {

  const [visible, setVisible] = useState(false)
  const [darkMode,setDarkMode] = useState(false)

  const shadowVisible = () => {
    const value = document.documentElement.scrollTop;

    if (value > 50) {
      setVisible(true)
    }
    else {
      setVisible(false)
    }
  }


  // const handleThemeChange = (checked) => {
  //   setDarkMode(checked);
  // };

  const [isBurgerOpen, setIsBurgerOpen] = useState(false)


  window.addEventListener("scroll", shadowVisible)

  return (
    <nav
    className={darkMode ? 'darkMode' : 'lightMode'}
      style={visible ?
        { boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }
        : { boxShadow: "none" }}
    >
      <div className="nav-groups">
        <a href="#header" className='myName'><span>Mohammed</span> Manas</a>

        <div className={isBurgerOpen ? "nav-links active" : "nav-links"}>
          <a href="#header">Home</a>
          <a href="#about">About me</a>
          <a href="#skills">Skills</a>
          <a href="#qualification">Qualification</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          {/* <Space direction='vertical'>
            <Switch
              checked={darkMode}
              onChange={handleThemeChange}
              checkedChildren='Dark'
              unCheckedChildren='Light'
            />
          </Space> */}
        </div>

        <div className="hamburger" onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
          {isBurgerOpen ? <RiCloseFill /> : <FiMenu />}
        </div>

      </div>
    </nav>
  )
}

export default Nav