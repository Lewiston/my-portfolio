import React from "react";
import cv from "/files/Mbunganu_Lewiston_front-end.pdf";
import "./About.css";

const About = () => {
  return (
    <section className="about container">
      <div className="quote">
        <p className="quote-text">
          "One percent better each day, mastery comes your way. Work on your
          craft with care, small steps will get you there."
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
            incremental progress—1% better each day. Let's build something great
            together.
          </p>
        </div>

        <div className="my-journey">
          <h2 className="heading">Work Experience Timeline</h2>
          <p>
            <b>Freelancer — March 2025 - Present</b> <br />
            Building usable and effective websites for clients including Ruby
            Elise Designs, Biz Project Coach, and G(ART)MENTS. Focused on
            seamless navigation and structured solutions that meet client needs.
            <br />
            <br />
          </p>

          <p>
            <b>Product Design Lead — Zotech Designs, February 2024 - Present</b>
            <br />
            Leading the development of functional, scalable digital products
            across all sectors. Built in-house products like WorkNova and
            Workamnow, and partnered with institutions including University of
            Buea, Xashi Tech, and Vancoop. Coordinate the internship program
            alongside the CTO, teaching soft and technical skills—all interns
            achieved A grades and successfully completed their programs. <br />
            <br />
          </p>

          <p>
            <b>Lecturer — SHIBITS, Buea, March 2025 - June 2025</b> <br />
            Taught Software Engineering and Information Systems, covering
            relational databases, entity-relational diagrams, and information
            architecture for building great digital products. <br /> <br />
          </p>

          <p>
            <b>Lecturer — RHIBMS, Buea, March 2024 - August 2024</b> <br />
            Delivered courses on Graphic Design and Digital Marketing. Over 80%
            of students succeeded in the 2025 Higher National Diploma (HND).
            <br />
            <br />
          </p>

          <p>
            <b>
              Product Design Mentor — Branded Architects, June 2024 - September
              2024
            </b>
            <br />
            Mentored individuals new to UI/UX design. Taught design thinking,
            user research methodologies, and techniques for developing digital
            products that balance business goals and user needs while engaging
            all stakeholders. <br /> <br />
          </p>

          <p>
            <b>
              Project Manager / Scrum Master & Designer — Crystal House Aurora
              (USA), May 2023 - June 2025
            </b>
            <br />
            Worked closely with Project Manager Stephen Thompson, planning and
            executing company projects. Optimized the main revenue stream and
            added two additional streams, increasing company revenue by over
            50%. Designed and developed websites for in-house and client
            projects including One Stop Auto and Crystal House Website Redesign.
            <br /> <br />
          </p>
        </div>

        <a href={cv} className="cv">
          ⬇️ <span>Download My CV</span>
        </a>
      </div>
    </section>
  );
};

export default About;
