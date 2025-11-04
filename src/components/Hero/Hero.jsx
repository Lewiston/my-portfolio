import React from "react";
import "./Hero.css";
import heroImage from "/assets/image.png";

const Hero = () => {
  return (
    <section className="hero container">
      <h2 className="hero-text">
        <span>👋🏼 Hi, I'm Mbunganu Lewiston</span> <br />
        an experienced Product Designer with front-end development skills.
        Passionate about building user-centric digital products and leveraging
        technical knowledge to bridge design and engineering.
      </h2>
      <img src={heroImage} alt="" className="hero-image" />
    </section>
  );
};

export default Hero;
