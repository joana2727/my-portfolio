import React from "react";
import "./skills.css";
import Frontend from "./SoftSkills";
import Backend from "./Technical";
import Tools from "./Tools";
import Training from "./Training";
import Certificates from "./Certificates";


const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle" style={{ marginBottom: '1rem' }}>What I learned so far</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Tools />
        <Training />
      </div>
        <Certificates />
    </section>
  );
};

export default Skills;
