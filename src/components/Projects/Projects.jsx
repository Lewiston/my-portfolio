import React, { useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.css";

const contents = [
  {
    id: 1,
    image: "/assets/images/imgi_10.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "#",
    type: "WordPress",
  },

  {
    id: 2,
    image: "/assets/images/imgi_11.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "",
    type: "Shopify",
  },

  {
    id: 3,
    image: "/assets/images/imgi_12.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "",
    type: "Branding",
  },

  {
    id: 4,
    image: "/assets/images/imgi_13.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "#",
    type: "Skylines",
  },

  {
    id: 5,
    image: "/assets/images/imgi_10.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "",
    type: "React",
  },

  {
    id: 6,
    image: "/assets/images/imgi_11.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "",
    type: "UI/UX",
  },

  {
    id: 7,
    image: "/assets/images/imgi_12.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "",
    type: "GoHighLevel",
  },

  {
    id: 8,
    image: "/assets/images/imgi_13.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "",
    type: "UI/UX",
  },

  {
    id: 9,
    image: "/assets/images/imgi_10.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "",
    type: "React",
  },

  {
    id: 10,
    image: "/assets/images/imgi_11.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "",
    type: "GoHighLevel",
  },

  {
    id: 11,
    image: "/assets/images/imgi_12.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "",
    type: "WordPress",
  },

  {
    id: 12,
    image: "/assets/images/imgi_10.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "",
    type: "WordPress",
  },

  {
    id: 13,
    image: "/assets/images/imgi_13.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "",
    type: "WordPress",
  },

  {
    id: 14,
    image: "/assets/images/imgi_12.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "",
    type: "Branding",
  },

  {
    id: 15,
    image: "/assets/images/imgi_11.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "",
    type: "Branding",
  },

  {
    id: 16,
    image: "/assets/images/imgi_10.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "",
    type: "Branding",
  },

  {
    id: 17,
    image: "/assets/images/imgi_11.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "",
    type: "Branding",
  },

  {
    id: 18,
    image: "/assets/images/imgi_13.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "",
    type: "Skylines",
  },

  {
    id: 19,
    image: "/assets/images/imgi_13.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "",
    type: "React",
  },

  {
    id: 20,
    image: "/assets/images/imgi_12.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "",
    type: "WordPress",
  },

  {
    id: 21,
    image: "/assets/images/imgi_11.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "",
    type: "React",
  },

  {
    id: 22,
    image: "/assets/images/imgi_12.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "",
    type: "Shopify",
  },

  {
    id: 23,
    image: "/assets/images/imgi_10.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "",
    type: "Skylines",
  },

  {
    id: 24,
    image: "/assets/images/imgi_13.webp",
    title: "This is the title",
    desc: "Description goes here",
    role: "Project Role",
    tools: "list of, tools used",
    url: "",
    type: "Skylines",
  },
];

const Projects = () => {
  const [activeState, setActiveState] = useState("");

  const handleState = (state) => {
    setActiveState(state);
  };

  return (
    <section className="projects container">
      <div className="past-projects">
        <h2 className="heading">Some Sample Projects</h2>
        <div className="projects-tab">
          <ul className="project-cats">
            <li>
              <button
                className={`project-cat btn ${!activeState && "btn-active"}`}
                onClick={() => handleState("")}
              >
                All
              </button>
            </li>

            <li>
              <button
                className={`project-cat btn ${
                  activeState === "UI/UX" && "btn-active"
                }`}
                onClick={() => handleState("UI/UX")}
              >
                UI/UX
              </button>
            </li>

            <li>
              <button
                className={`project-cat btn ${
                  activeState === "React" && "btn-active"
                }`}
                onClick={() => handleState("React")}
              >
                React
              </button>
            </li>

            <li>
              <button
                className={`project-cat btn ${
                  activeState === "WordPress" && "btn-active"
                }`}
                onClick={() => handleState("WordPress")}
              >
                WordPress
              </button>
            </li>

            <li>
              <button
                className={`project-cat btn ${
                  activeState === "Shopify" && "btn-active"
                }`}
                onClick={() => handleState("Shopify")}
              >
                Shopify
              </button>
            </li>

            <li>
              <button
                className={`project-cat btn ${
                  activeState === "GoHighLevel" && "btn-active"
                }`}
                onClick={() => handleState("GoHighLevel")}
              >
                GoHighLevel
              </button>
            </li>

            <li>
              <button
                className={`project-cat btn ${
                  activeState === "Branding" && "btn-active"
                }`}
                onClick={() => handleState("Branding")}
              >
                Branding
              </button>
            </li>

            <li>
              <button
                className={`project-cat btn ${
                  activeState === "Skylines" && "btn-active"
                }`}
                onClick={() => handleState("Skylines")}
              >
                Skylines
              </button>
            </li>
          </ul>
        </div>

        <div className="tabs-content">
          <div className={`tab ${!activeState && "content-active"}`}>
            {contents.map((content) => (
              <ProjectCard key={content.id} prop={content} />
            ))}
          </div>

          <div className={`tab ${activeState === "UI/UX" && "content-active"}`}>
            {contents.map(
              (content) =>
                content.type === "UI/UX" && (
                  <ProjectCard key={content.id} prop={content} />
                )
            )}
          </div>

          <div className={`tab ${activeState === "React" && "content-active"}`}>
            {contents.map(
              (content) =>
                content.type === "React" && (
                  <ProjectCard key={content.id} prop={content} />
                )
            )}
          </div>

          <div
            className={`tab ${activeState === "WordPress" && "content-active"}`}
          >
            {contents.map(
              (content) =>
                content.type === "WordPress" && (
                  <ProjectCard key={content.id} prop={content} />
                )
            )}
          </div>

          <div
            className={`tab ${activeState === "Shopify" && "content-active"}`}
          >
            {contents.map(
              (content) =>
                content.type === "Shopify" && (
                  <ProjectCard key={content.id} prop={content} />
                )
            )}
          </div>

          <div
            className={`tab ${
              activeState === "GoHighLevel" && "content-active"
            }`}
          >
            {contents.map(
              (content) =>
                content.type === "GoHighLevel" && (
                  <ProjectCard key={content.id} prop={content} />
                )
            )}
          </div>

          <div
            className={`tab ${activeState === "Branding" && "content-active"}`}
          >
            {contents.map(
              (content) =>
                content.type === "Branding" && (
                  <ProjectCard key={content.id} prop={content} />
                )
            )}
          </div>

          <div
            className={`tab ${activeState === "Skylines" && "content-active"}`}
          >
            {contents.map(
              (content) =>
                content.type === "Skylines" && (
                  <ProjectCard key={content.id} prop={content} />
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
