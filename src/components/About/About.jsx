import React from "react";
import cv from "/files/Mbunganu_Lewiston_front-end_developer.pdf";
import "./About.css";

const About = () => {
  return (
    <section className="about container">
      <div className="quote">
        <p className="quote-text">
          "Don't just do the work, tell a story. <br />
          Your designs have meaning; make sure others can see it."
        </p>
        <span>Mbunganu Lewiston M.</span>
      </div>

      <div className="about-me">
        <div className="my-journey">
          <h2 className="heading">About Me</h2>
          <p>
            I'm a Product Designer and Front-End Developer who builds digital
            products that serve people and strengthen communities. I blend
            creative vision, user empathy, and technical skills in Figma, Adobe
            Xd, Sketch, Photoshop, Illustrator, HTML, CSS, JavaScript, React Js,
            React Native, Tailwind CSS, Bootstrap, WordPress, Shopify, and
            GoHighLevel to bridge design and development. I believe in
            incremental progress, 1% better each day.
          </p>
        </div>

        <div className="my-journey">
          <h2 className="heading">Work Experience</h2>
          <p>
            My journey into digital product design began with a simple question:
            how do you create experiences that people not only use, but
            genuinely love? With a degree in <b>Computer Engineering</b> from
            the <b>University of Buea</b> and expertise, I've built my career at
            the intersection of design and code and created solutions that are
            not only visually compelling but technically sound and feasible to
            build.
          </p>
          <br />
          <p>
            As <b>Product Design Lead at Zotech Designs</b>, I've reduced
            development time by over 50% by creating custom software designs
            that balance business goals with user requirements. Currently, as a
            <b>freelancer</b>, I deliver end-to-end solutions, from branding to
            deployment that have generated 20% more leads for my clients.
          </p>
          <br />
          <p>
            My time as{" "}
            <b>
              Project Manager and Scrum Master at Crystal House Aurora (USA)
            </b>
            taught me that great products aren't just well-designed, they're
            built by well-functioning teams. I increased business revenue by 40%
            by optimizing revenue streams and improved team efficiency by 60%
            through implementing agile methodologies. I also transformed
            decision-making speed, reducing it from 72+ hours to under 24 hours
            by visualizing business data through Excel and Power BI.
          </p>
          <br />
          <p>
            As a{" "}
            <b>
              Product Design Mentor at Branded Architects and lecturer at
              SHIBITS and RHIBMS
            </b>
            , I've trained the next generation of designers and engineers on
            design thinking, user research, and building scalable software
            solutions. These experiences reinforced what drives my work: the
            belief that exceptional digital products are born at the
            intersection of empathy, strategy, and execution.
          </p>
          <br />
          <p>
            Whether I'm designing a custom software solution, mentoring emerging
            designers, or engineering a responsive web application, my goal
            remains the same: create experiences that solve real problems for
            real people while driving measurable results for the businesses
            behind them.
          </p>
          <p>
            <b>Let's build something remarkable together.</b>
          </p>
        </div>

        <a href={cv} className="cv">
          ⬇️ <span>Download My Résumé</span>
        </a>
      </div>
    </section>
  );
};

export default About;
