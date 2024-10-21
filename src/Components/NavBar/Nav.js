import React, { useState, useEffect } from 'react';
import "../NavBar/Nav.css";
import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import { Space, Switch } from 'antd';

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleThemeChange = (checked) => {
    setDarkMode(checked);
    document.body.classList.toggle('dark-mode', checked); // Toggle dark mode class on body
  };

  return (
    <nav
      className={darkMode ? 'darkMode' : 'lightMode'}
      style={{
        boxShadow: visible
          ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          : "none"
      }}
    >
      <div className="nav-groups">
        <a href="#header" className='myName'>
          <span>Mohammed</span> Manas
        </a>

        <div className={isBurgerOpen ? "nav-links active" : "nav-links"}>
          <a href="#header" >Home</a>
          <a href="#about">About me</a>
          <a href="#skills">Skills</a>
          <a href="#qualification">Qualification</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <Space direction='vertical'>
            <Switch
              checked={darkMode}
              onChange={handleThemeChange}
              checkedChildren='Light'
              unCheckedChildren='Dark'
            />
          </Space>
        </div>

        <div className="hamburger" onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
          {isBurgerOpen ? <RiCloseFill /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
