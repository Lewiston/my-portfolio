import React from 'react'
import { Link, Element } from "react-scroll";
import './Header.css'
import themeButton from '/assets/close.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container container">
        <h1>Lewiston.</h1>
        <div className="header-btns">
          <img src={themeButton} alt="" className="theme-btn" />
          <Link to='contact' smooth={true} offset={50} duration={500} className="btn">Hire Me</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
