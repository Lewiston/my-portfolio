import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h2 className="heading">Let's Connect</h2>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/mbunganu-lewiston/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="http://github.com/lewiston">Github</a>
          </li>
          <li>
            <a href="https://dribbble.com/mbunganu_lewiston">Dribbble</a>
          </li>
          <li>
            <a href="http://frontendmentor.io/profile/lewiston">
              Front-End Mentor
            </a>
          </li>
          <li>
            <a href="mailto:m11lewiston#@gmail.com">Email</a>
          </li>
        </ul>

        <small>
          ©️ 2025 Mbunganu Lewiston. Product Designer & Front-End Developer
          based in Buea, Cameroon.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
