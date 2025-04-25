import React from "react";
import "./plans.css";

import travelImage from "../../assets/travel.svg";
import financialImage from "../../assets/financial.svg";
import remoteWorkImage from "../../assets/remote-work.svg";


const goals = [
  {
    title: "Become Financially Stable",
    description:
      "I want to be in a position where I don’t constantly worry about money—through saving, budgeting, and building a secure future.",
  },
  {
    title: "Work Remotely",
    description:
      "Having the freedom to work from anywhere allows me to create a work-life balance that aligns with my lifestyle and aspirations.",
  },
  {
    title: "Travel the World",
    description:
      "I dream of experiencing new cultures and places. Traveling helps me grow personally and creatively, one destination at a time.",
  },
  {
    title: "Give Back to My Family",
    description:
      "One of my biggest goals is to support and provide for my family as a way to give back for all their love and sacrifices.",
  },
  {
    title: "Own a House",
    description:
      "I envision myself building a home I can call my own—something stable and long-term that reflects my independence.",
  },
  {
    title: "Start a Business & Build Multiple Income Streams",
    description:
      "I want to explore different ventures and not rely on a single source of income—financial security comes from diversification.",
  },
  {
    title: "Gain More Experience in My Career",
    description:
      "Experience is key to growth. I aim to work on meaningful projects, expand my skills, and collaborate with people I can learn from.",
  },
  {
    title: "Keep Learning",
    description:
      "I believe learning never stops. Whether it's new tech, design trends, or soft skills—I always want to evolve.",
  },
  {
    title: "Become a Better Version of Myself",
    description:
      "Beyond goals and success, I want to be someone who's disciplined, resilient, and aligned with my core values.",
  },
];

const Plans = () => {
  return (
    <section className="plans section">
      <h2 className="section__title">What I Aim to Achieve</h2>

      <div className="images-container">
        <img src={financialImage} alt="Financially Stable" className="goal-image" />
        <img src={remoteWorkImage} alt="Work Remotely" className="goal-image" />
        <img src={travelImage} alt="Travel the World" className="goal-image" />
      </div>

      <div className="timeline-container">
        {goals.map((goal, index) => (
          <div
            className={`timeline-box-wrapper ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="timeline-box">
              <h3 className="goal-title">{goal.title}</h3>
              <p className="goal-desc">{goal.description}</p>
            </div>
            <div className="circle" />
          </div>
        ))}
        <div className="center-line" />
      </div>
    </section>
  );
};

export default Plans;
