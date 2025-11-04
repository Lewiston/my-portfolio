import React from "react";
import { Link, Element } from "react-scroll";
import "./Header.css";
import themeButton from "/assets/close.png";
import logo from "/assets/logos/my-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container container">
        <img src={logo} alt="" />
        <div className="header-btns">
          <img src={themeButton} alt="" className="theme-btn" />
          <Link
            to="contact"
            smooth={true}
            offset={0}
            duration={500}
            className="btn"
          >
            Hire Lewis
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
