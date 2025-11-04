import React from "react";
import "./Clients.css";
import logo1 from "/assets/logos/logo1.png";
import logo2 from "/assets/logos/logo2.png";
import logo3 from "/assets/logos/logo3.png";
import logo4 from "/assets/logos/logo4.png";
import logo5 from "/assets/logos/logo5.png";
import logo6 from "/assets/logos/logo6.png";
import logo7 from "/assets/logos/logo7.png";
import logo8 from "/assets/logos/logo8.png";
import logo9 from "/assets/logos/logo9.png";
import logo10 from "/assets/logos/logo10.png";

const Clients = () => {
  return (
    <section className="clients container">
      <h2 className="heading">Clients I Have Worked With</h2>
      <div className="slider-container">
        <div className="logo-slider">
          <img src={logo1} alt="" className="logo" />
          <img src={logo2} alt="" className="logo" />
          <img src={logo3} alt="" className="logo" />
          <img src={logo4} alt="" className="logo" />
          <img src={logo5} alt="" className="logo" />
          <img src={logo6} alt="" className="logo" />
          <img src={logo7} alt="" className="logo" />
          <img src={logo8} alt="" className="logo" />
          <img src={logo9} alt="" className="logo" />
          <img src={logo10} alt="" className="logo" />

          {/* duplicate */}

          <img src={logo1} alt="" className="logo" />
          <img src={logo2} alt="" className="logo" />
          <img src={logo3} alt="" className="logo" />
          <img src={logo4} alt="" className="logo" />
          <img src={logo5} alt="" className="logo" />
          <img src={logo6} alt="" className="logo" />
          <img src={logo7} alt="" className="logo" />
          <img src={logo8} alt="" className="logo" />
          <img src={logo9} alt="" className="logo" />
          <img src={logo10} alt="" className="logo" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
