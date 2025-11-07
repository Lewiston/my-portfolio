import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ prop }) => {
  return (
    <a href={prop.url}>
      <div
        className="project-card"
        style={{ background: `url(${prop.image})` }}
      >
        <div className="card-contents">
          <span>
            {prop.role} - {prop.tools}
          </span>
          <h3>{prop.title}</h3>
          <p>{prop.desc}</p>
          {prop.url && <a href={prop.url}>Visit site</a>}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
