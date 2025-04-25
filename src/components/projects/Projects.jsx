import React from "react";
import "./projects.css";
import projects from './ProjData'; 
import others from './Others';


const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <p className="section__subtitle">
          Here are some of the projects I have worked on, showcasing my skills and experience in various technologies.
        </p>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-box" key={index}>
              <h3 className="project-name">{project.name}</h3>
              <img src={project.image} alt={`${project.name}`} className="project-image" />
              <p className="project-description">{project.description}</p>
              <div className="tech-tools">
                {project.techTools.map((tool, index) => (
                  <span className="tech-tool" key={index}>
                    {tool}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project Link
              </a>
            </div>
          ))}
        </div>

        <br></br><br></br><br></br>
        <h3 className="projects-title">Others</h3>
        <p className="section__subtitle">
          My creations outside coding
        </p>

        <div className="projects-list1">
          {others.map((project, index) => (
            <div className="project-box1" key={`other-${index}`}>
              <h3 className="project-name">{project.name}</h3>
              <img src={project.image} alt={project.name} className="project-image" />
              <p className="project-description">{project.description}</p>
              <div className="tech-tools">
                {project.techTools.map((tool, toolIndex) => (
                  <span className="tech-tool" key={toolIndex}>{tool}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project Link
              </a>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Projects;
