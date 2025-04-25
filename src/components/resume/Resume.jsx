import React from "react";
import "./resume.css";
import cvPreview from "../../assets/Mikks-Garcia-CV.png";
import MikksCV from "../../assets/Mikks-Garcia-CV.pdf";

const Resume = () => {
  return (
    <section className="resume-section" id="resume">
      <div className="resume-container">
        <h2 className="resume-title">My Resume</h2>
        <p className="resume-description">
          Take a look at my professional background and skills. You can download the full CV below.
        </p>
        
        <a
          href={MikksCV}  // Reference the imported PDF
          download
          className="download-cv-btn"
        >
          Download CV
        </a>

        <div className="cv-preview">
          <img src={cvPreview} alt="Resume Preview" />
        </div>
      </div>
    </section>
  );
};

export default Resume;
